import { ManagementClientOptions } from './types';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { PermissionDescriptorsListInputType } from '../../types/graphql.v1';
import { updateUserpool } from '../graphqlapi';
import { UpdateUserpoolInput } from '../../types/graphql.v2';
import {
  queryPermissionList,
  addCollaborator,
  getUserPoolDetail
} from '../graphqlapi';

export class UserPoolManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  graphqlClientV2: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    graphqlClientV2: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClientV2 = graphqlClientV2;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  /**
   * 查询用户协作权限列表
   *
   * @memberof UserPoolManagementClient
   */
  async getPermissionList() {
    const res = await queryPermissionList(
      this.graphqlClient,
      this.tokenProvider,
      {}
    );
    return res.queryPermissionList;
  }

  /**
   * 添加用户池协作者
   *
   * @param {{ collaboratorUserId: string, permissionDescriptors?: PermissionDescriptors[] }} options
   * @returns
   * @memberof UserPoolManagementClient
   */
  async addCollaborator(
    collaboratorUserId: string,
    permissionDescriptors: PermissionDescriptorsListInputType[] = []
  ) {
    if (permissionDescriptors.length === 0) {
      let permissionList = await this.getPermissionList();
      permissionDescriptors = permissionList.list.map(p => ({
        permissionId: p._id,
        operationAllow: 15
      }));
    }
    const res = await addCollaborator(this.graphqlClient, this.tokenProvider, {
      userPoolId: this.options.userPoolId,
      collaboratorUserId,
      permissionDescriptors
    });
    return res.addCollaborator;
  }

  /**
   * 查询用户池详情
   *
   * @returns
   * @memberof UserPoolManagementClient
   */
  async detail() {
    const res = await getUserPoolDetail(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: this.options.userPoolId
      }
    );
    return res.client;
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
}
