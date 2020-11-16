import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { allow, isAllowed } from '../graphqlapi';
import { CommonMessage } from '../../types/graphql.v2';

/**
 * @class AclManagementClient 管理权限、访问控制
 * @description Authing 基于 PBAC（Policy Based Access Control，基于策略的访问控制）构建权限模型，
 * 可以和 RBAC （Role Based Access Control，基于角色的访问控制）结合，实现非常灵活、精细化的权限控制。
 * 此模块将此模型抽象成了两个方法: allow, isAllowed。
 *
 * @example
 *
 * 请使用以下方式使用该模块，而不要直接初始化该模块：
 *
 * \`\`\`javascript
 * import { ManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.acl.allow // 允许某个用户对某个资源进行某个操作
 * managementClient.acl.isAllowed // 判断某个用户是否对某个资源有某个操作权限
 * \`\`\`
 *
 * @name AclManagementClient
 */
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
   * @name allow
   * @name_zh 允许某个用户对某个资源进行某个操作
   *
   * @description 允许某个用户对某个资源进行某个操作
   *
   * @param {string} userId 用户 ID
   * @param {string} action 操作名称，推荐使用 \<resourceType\>:\<actionName\> 的格式，如 `books:edit`, `books:list`
   * @param {string} resource 资源名称, 必须为 \<resourceType\>:\<resourceId\> 格式或者为 *, 如 `*`, `books:123`, `books:*`
   * @example
   * managementClient.acl.allow('USERID1', 'books:123', 'books:read')
   * managementClient.acl.isAllowed('USERID1', 'books:123', 'books:read') // true
   * managementClient.acl.isAllowed('USERID1', 'books:123', 'books:edit') // false
   *
   * @example
   * managementClient.acl.allow('USERID2', 'books:*', 'books:*')
   * managementClient.acl.isAllowed('USERID2', 'books:123', 'books:read') // true
   * managementClient.acl.isAllowed('USERID2', 'books:124', 'books:edit') // true
   *
   * @returns {Promise<CommonMessage>}
   * @memberof AclManagementClient
   */
  async allow(
    userId: string,
    resource: string,
    action: string
  ): Promise<CommonMessage> {
    const { allow: data } = await allow(
      this.graphqlClient,
      this.tokenProvider,
      {
        resource,
        action,
        userId
      }
    );
    return data;
  }

  /**
   * @name isAllowed
   * @name_zh 判断某个用户是否对某个资源有某个操作权限
   *
   * @description 判断某个用户是否对某个资源有某个操作权限
   *
   * @param {string} userId 用户ID
   * @param {string} action 操作名称，推荐使用 \<resourceType\>:\<actionName\> 的格式，如 `books:edit`, `books:list`
   * @param {string} resource 资源名称, 必须为 \<resourceType\>:\<resourceId\> 格式或者为 *, 如 `*`, `books:123`, `books:*`
   * @example
   * managementClient.acl.isAllowed('USERID', 'books:*', 'books:edit')
   *
   * @returns {Promise<boolean>} 是否具备操作权限
   * @memberof AclManagementClient
   *
   */
  async isAllowed(
    userId: string,
    resource: string,
    action: string
  ): Promise<boolean> {
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
}
