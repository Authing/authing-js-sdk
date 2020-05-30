
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const searchNodes = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any): Promise<any> => {
  const query = `query searchOrgNodes(
    $orgId: String!
    $name: String
    $metadata: [KeyValuePair!]
  ) {
    searchOrgNodes(orgId: $orgId, name: $name, metadata: $metadata) {
      _id
      name
      description
      createdAt
      updatedAt
    }
  }
  `
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
