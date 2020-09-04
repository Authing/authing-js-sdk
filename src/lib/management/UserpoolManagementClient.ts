import { ManagementClientOptions } from './types';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { updateUserpool } from '../graphqlapi';
import { UpdateUserpoolInput, UserPool } from '../../types/graphql.v2';
import { getUserPoolDetail } from '../graphqlapi';
import { HttpClient } from '../common/HttpClient';

export class UserPoolManagementClient {
  options: ManagementClientOptions;
  graphqlClientV2: GraphqlClient;
  tokenProvider: ManagementTokenProvider;
  httpClient: HttpClient;

  constructor(
    options: ManagementClientOptions,
    httpClient: HttpClient,
    graphqlClientV2: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.httpClient = httpClient;
    this.graphqlClientV2 = graphqlClientV2;
    this.tokenProvider = tokenProvider;
  }

  /**
   * 查询用户池详情
   *
   * @returns
   * @memberof UserPool
   */
  async detail(): Promise<UserPool> {
    const res = await getUserPoolDetail(
      this.graphqlClientV2,
      this.tokenProvider,
      {}
    );
    return res.userpool;
  }

  /**
   * 更新用户池配置
   * @param input 更新内容
   */
  async update(input: UpdateUserpoolInput) {
    const res = await updateUserpool(this.graphqlClientV2, this.tokenProvider, {
      input
    });
    return res.updateUserpool;
  }

  async env(): Promise<{ key: string; value: any }[]> {
    return await this.httpClient.request({
      method: 'GET',
      url: '/v2/api/env'
    });
  }
}
