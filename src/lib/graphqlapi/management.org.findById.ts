
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const org =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) : Promise<any> => {
  const query = `query org($_id: String!){
    org(_id: $_id){
        _id
        nodes{
            _id
            name
            description
            createdAt
            updatedAt
            children
            root
        }
    }
}`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
