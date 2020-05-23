
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const removeUsers =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) => {
  const query = `mutation removeUsers($ids: [String], $registerInClient: String, $operator: String){
    removeUsers(ids: $ids, registerInClient: $registerInClient, operator: $operator){
        _id
    }
}`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
