import { GraphqlClient } from './../common/GraphqlClient';
import { graphqlRequest } from '../utils/graphql';
import { ManagementClientOptions, DecodedAccessToken } from './types';
import jwtDecode from "jwt-decode"

export class ManagementTokenProvider {

  /** 内部变量，请不要直接引用 **/
  /** 该用户池对应的 accessToken **/
  private _accessToken: string
  /** accessToken 过期时间，为 unix 时间戳 **/
  private _accessTokenExpriredAt: number

  options: ManagementClientOptions
  graphqlClient: GraphqlClient

  constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient) {
    this.options = options
    this.graphqlClient = graphqlClient
  }


  /**
   * 发送 GraphQL 接口请求获取 accessToken
   *
   * @returns
   * @memberof ManagementTokenProvider
   */
  async getClientWhenSdkInit() {
    const res: any = await graphqlRequest({
      endpoint: this.options.host.graphqlApiEndpoint,
      query: `query getClientWhenSdkInit($clientId: String!, $secret: String!) {\n  getClientWhenSdkInit(clientId: $clientId, secret: $secret) {\n    accessToken\n  }\n}\n`,
      variables: {
        clientId: this.options.userPoolId,
        secret: this.options.secret
      }
    })
    return res.getClientWhenSdkInit.accessToken
  }


  /**
   * 刷新 accessToken 
   *
   * @memberof ManagementTokenProvider
   */
  async refreshToken() {
    const res: any = await graphqlRequest({
      endpoint: this.options.host.graphqlApiEndpoint,
      query: `mutation refreshAccessToken($userPoolId: String!, $accessToken: String!){
        refreshAccessToken(userPoolId: $userPoolId, accessToken: $accessToken) {
          accessToken
        }
      }`,
      variables: {
        userPoolId: this.options.userPoolId,
        accessToken: this._accessToken
      }
    })
    return res.refreshAccessToken.accessToken
  }

  /**
   * 获取用户池 accessToken
   *
   * @returns {Promise<string>}
   * @memberof ManagementTokenProvider
   */
  async getAccessToken(): Promise<string> {
    // 缓存到 accessToken 过期前 3600 s
    if (this._accessToken && this._accessTokenExpriredAt - (+new Date()) >= 3600 * 1000) {
      return this._accessToken
    }
    return await this.getAccessTokenFromServver()
  }

  /**
   * 刷新用户池 accessToken
   *
   * @returns
   * @memberof ManagementTokenProvider
   */
  async getAccessTokenFromServver() {

    // 如果是通过密钥刷新 
    let accessToken = null
    if (this.options.secret) {
      accessToken = await this.getClientWhenSdkInit()
    } else {
      accessToken = await this.refreshToken()
    }

    this._accessToken = accessToken
    const decoded: DecodedAccessToken = jwtDecode(this._accessToken)
    const { exp } = decoded
    this._accessTokenExpriredAt = exp * 1000
    return this._accessToken
  }
}