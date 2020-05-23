
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const addOrgNode =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) : Promise<any> => {
  const query = `mutation addOrgNode($input: AddOrgNodeInput!){
    addOrgNode(input: $input){
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
