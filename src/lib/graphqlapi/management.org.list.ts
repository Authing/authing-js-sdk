
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const orgs = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any): Promise<any> => {
  const query = `query orgs($userPoolId: String!){
    orgs(userPoolId: $userPoolId){
        totalCount
        list{
            _id
            nodes {
              _id
              name
              description
              createdAt
              updatedAt
              children
              root
            }
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
