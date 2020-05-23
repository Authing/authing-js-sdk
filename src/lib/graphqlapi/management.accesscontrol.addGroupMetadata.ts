
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const addGroupMetadata = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any): Promise<any> => {
  const query = ` mutation addGroupMetadata($groupId: String!, $key: String!, $value: String!) {
    addGroupMetadata(groupId: $groupId, key: $key, value: $value) {
      key
      value
    }
  }`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
