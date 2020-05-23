import { queryPermissionList } from './../graphqlapi/management.userpool.getPermissionList';
import { addCollaborator } from './../graphqlapi/management.userpool.addCollaborator';
import { ManagementClientOptions } from "./types"
import { GraphqlClient } from "../common/GraphqlClient"
import { ManagementTokenProvider } from "./ManagementTokenProvider"
import { PermissionDescriptors } from "../../types/graphql"

export class UserPoolManagementClient {
  options: ManagementClientOptions
  graphqlClient: GraphqlClient
  tokenProvider: ManagementTokenProvider

  constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider) {
    this.options = options
    this.graphqlClient = graphqlClient
    this.tokenProvider = tokenProvider
  }

  /**
   * 查询用户协作权限列表
   *
   * @memberof UserPoolManagementClient
   */
  async getPermissionList() {
    const res = await queryPermissionList(this.graphqlClient, this.tokenProvider, {})
    return res.queryPermissionList
  }

  /**
   * 添加用户池协作者
   * 
   * @param {{ collaboratorUserId: string, permissionDescriptors?: PermissionDescriptors[] }} options
   * @returns
   * @memberof UserPoolManagementClient
   */
  async addCollaborator(collaboratorUserId: string, permissionDescriptors: PermissionDescriptors[] = []) {
    if (!permissionDescriptors) {
      let permissionList = await this.getPermissionList()
      permissionDescriptors = permissionList.list.map((p: any) => ({ permissionId: p._id, operationAllow: 15 }))
    }
    return addCollaborator(this.graphqlClient, this.tokenProvider,
      {
        userPoolId: this.options.userPoolId,
        collaboratorUserId,
        permissionDescriptors
      })
  }
}