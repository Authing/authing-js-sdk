
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const orgChildrenNodes =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) : Promise<any> => {
  const query = `query orgChildrenNodes($input: OrgChildrenNodesInput!){
    orgChildrenNodes(input: $input){
        group{
            _id
            userPoolId
            name
            description
            createdAt
            updatedAt
        }
        depth
    }
}`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
