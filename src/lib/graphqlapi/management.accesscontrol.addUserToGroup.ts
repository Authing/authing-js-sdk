
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const addUserToRBACGroup =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) : Promise<any> => {
  const query = `mutation addUserToRBACGroup($input: AddUserToRBACGroupInput!){
    addUserToRBACGroup(input: $input){
        _id
        name
        description
        createdAt
        updatedAt
    }
}`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
