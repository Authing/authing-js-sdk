import { encrypt } from './../utils/encryption';
import { graphqlRequest } from './../utils/graphql';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UserRegisterInput } from '../../types/graphql';

export class UsersManagementClient {
  options: ManagementClientOptions
  tokenProvider: ManagementTokenProvider

  constructor(options: ManagementClientOptions, tokenProvider: ManagementTokenProvider) {
    this.options = options
    this.tokenProvider = tokenProvider
  }


  /**
   * 获取用户池列表
   *  
   */
  async list() {

  }

  /**
   *
   * 以管理员身份创建用户
   * @param {{
   *     userInfo: UserRegisterInput,
   *     invitationCode?: string,
   *     keepPassword?: boolean
   *   }} options
   * @returns
   * @memberof UsersManagementClient
   */
  async create(options: {
    userInfo: UserRegisterInput,
    invitationCode?: string,
    keepPassword?: boolean
  }) {

    let { userInfo } = options
    options.invitationCode = options.invitationCode || ""
    options.keepPassword = options.keepPassword || false

    if (!userInfo.phone && !userInfo.email && !userInfo.username && !userInfo.unionid) {
      this.options.onError(new Error("Please provide at least phone, email, username or unionid"))
    }

    if (options.userInfo.password) {
      options.userInfo.password = encrypt(options.userInfo.password, this.options.encrptionPublicKey)
    }

    userInfo.registerInClient = this.options.userPoolId
    const res: any = await graphqlRequest({
      endpoint: this.options.host.graphqlApiEndpoint,
      variables: options,
      token: await this.tokenProvider.getAccessToken(),
      query: `mutation register($userInfo: UserRegisterInput!, $invitationCode: String, $keepPassword: Boolean){
        register(userInfo: $userInfo, invitationCode: $invitationCode, keepPassword: $keepPassword){
            _id
            email
            unionid
            openid
            emailVerified
            phone
            phoneVerified
            username
            nickname
            company
            photo
            browser
            device
            password
            registerInClient
            registerMethod
            oauth
            token
            tokenExpiredAt
            loginsCount
            lastLogin
            lastIP
            signedUp
            blocked
            isDeleted
            name
            givenName
            familyName
            middleName
            profile
            preferredUsername
            website
            gender
            birthdate
            zoneinfo
            locale
            address
            formatted
            streetAddress
            locality
            region
            postalCode
            country
            updatedAt
            group{
                _id
                name
                descriptions
                client
                permissions
                createdAt
            }
            clientType{
                _id
                name
                description
                image
                example
            }
            userLocation{
                _id
                when
                where
            }
            userLoginHistory{
                totalCount
            }
            systemApplicationType{
                _id
                name
                descriptions
                price
            }
            thirdPartyIdentity{
                provider
                refreshToken
                accessToken
                expiresIn
                updatedAt
            }
            customData
            metadata
        }
      }`
    })
    return res.register
  }
}
