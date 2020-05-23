
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const createOrg =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) : Promise<any> => {
  const query = `mutation createOrg($input: CreateOrgInput!){
    createOrg(input: $input){
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
