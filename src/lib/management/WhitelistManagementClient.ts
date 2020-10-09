import { WhiteList, WhitelistType } from '../../types/graphql.v2';
import { getWhiteList, addWhiteList, removeWhiteList } from '../graphqlapi';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';

export class WhitelistManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  /**
   * @description 获取白名单列表
   *
   */
  async list(type: WhitelistType): Promise<WhiteList[]> {
    const { whitelist } = await getWhiteList(
      this.graphqlClient,
      this.tokenProvider,
      {
        type
      }
    );

    return whitelist;
  }

  /**
   * @description 添加白名单
   *
   */
  async add(type: WhitelistType, list: string[]): Promise<WhiteList[]> {
    const { addWhitelist: whiteList } = await addWhiteList(
      this.graphqlClient,
      this.tokenProvider,
      {
        type,
        list
      }
    );

    return whiteList;
  }

  /**
   * @description 移除白名单
   *
   */
  async remove(type: WhitelistType, list: string[]): Promise<WhiteList[]> {
    const { removeWhitelist: whiteList } = await removeWhiteList(
      this.graphqlClient,
      this.tokenProvider,
      {
        type,
        list
      }
    );

    return whiteList;
  }
}
