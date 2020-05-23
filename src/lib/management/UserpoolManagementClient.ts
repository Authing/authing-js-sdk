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

  async addCollaborator(options: { collaboratorUserId: string, permissionDescriptors?: PermissionDescriptors[] }) {
    return addCollaborator(this.graphqlClient, this.tokenProvider, Object.assign({}, options, { userPoolId: this.options.userPoolId }))
  }
}