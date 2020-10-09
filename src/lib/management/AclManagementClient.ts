import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { allow, isAllowed } from '../graphqlapi';

export class AclManagementClient {
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
   * @description 判断某个用户是否对某个资源有某个操作权限
   *
   * @param userId: 用户ID
   * @param action: 操作
   * @param resouceCode: 资源代码
   *
   */
  async isAllowed(userId: string, action: string, resource: string) {
    const { isActionAllowed } = await isAllowed(
      this.graphqlClient,
      this.tokenProvider,
      {
        resource,
        action,
        userId
      }
    );
    return isActionAllowed;
  }

  /**
   * @description 允许某个用户对某个资源进行某个操作
   *
   * @param {string} userId
   * @param {string} resource
   * @param {string} action
   */
  async allow(
    /** 用户 ID */
    userId: string,
    /** 资源 */
    resource: string,
    /** 操作 */
    action: string
  ) {
    await allow(this.graphqlClient, this.tokenProvider, {
      resource,
      action,
      userId
    });
  }
}
