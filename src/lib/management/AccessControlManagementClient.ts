import { userGroupList } from './../graphqlapi/management.accesscontrol.userGroupList';
import { isUserInGroup } from './../graphqlapi/management.accesscontrol.isUserInGroup';
import { groupUserList } from './../graphqlapi/management.accesscontrol.groupUserList';
import { addUserToRBACGroup } from './../graphqlapi/management.accesscontrol.addUserToGroup';
import { addGroupMetadata } from './../graphqlapi/management.accesscontrol.addGroupMetadata';
import { createRBACGroup } from './../graphqlapi/management.accesscontrol.createGroup';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { SortByEnum } from '../../types/codeGen';

export class AccessControlManagementClient {
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
   * 创建 Group
   *
   * @param {string} name
   * @param {string} description
   * @returns {Promise<AuthingGroup>}
   * @memberof AccessControlManagementClient
   */
  async createGroup(name: string, description: string) {
    const res = await createRBACGroup(this.graphqlClient, this.tokenProvider, {
      input: {
        userPoolId: this.options.userPoolId,
        name,
        description
      }
    });
    return res.createRBACGroup;
  }

  /**
   * 为 Group 添加自定义数据
   *
   * @param {string} groupId
   * @param {string} key
   * @param {*} value
   * @returns {Promise<{ key: string, value: string }>}
   * @memberof AccessControlManagementClient
   */
  async addGroupMetadata(groupId: string, key: string, value: any) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value);
    }
    const res = await addGroupMetadata(this.graphqlClient, this.tokenProvider, {
      groupId,
      key,
      value
    });
    return res.addGroupMetadata[0];
  }

  /**
   *  添加用户到分组中
   *
   * @param {{
   *     userId: string,
   *     groupId: string
   *   }} options
   * @returns
   * @memberof AccessControlManagementClient
   */
  async addUserToGroup(options: { userId: string; groupId: string }) {
    const res = await addUserToRBACGroup(
      this.graphqlClient,
      this.tokenProvider,
      { input: options }
    );
    return res.addUserToRBACGroup;
  }

  /**
   * 判断用户是否在 Group 中
   *
   * @memberof AccessControlManagementClient
   */
  async isUserInGroup(options: { userId: string; groupId: string }) {
    const res = await isUserInGroup(
      this.graphqlClient,
      this.tokenProvider,
      options
    );
    return res.isUserInGroup;
  }

  /**
   * 查询 Group 用户列表
   *
   * @param {string} groupId
   * @param {{
   *     sortBy: string, 默认为 CREATEDAT_DESC
   *     page: number, 默认为 0
   *     count: number 默认为 10
   *   }} options
   * @returns
   * @memberof AccessControlManagementClient
   */
  async groupUserList(
    groupId: string,
    options: {
      sortBy?: SortByEnum;
      page?: number;
      count?: number;
    } = {
      sortBy: SortByEnum.CreatedatDesc,
      page: 0,
      count: 1
    }
  ) {
    const res = await groupUserList(this.graphqlClient, this.tokenProvider, {
      _id: groupId,
      ...options
    });
    return res.rbacGroup.users;
  }

  /**
   * 查询用户所在的分组列表
   *
   */
  async userGroupList(userId: string) {
    const res = await userGroupList(this.graphqlClient, this.tokenProvider, {
      _id: userId
    });
    return res.userGroupList;
  }
}
