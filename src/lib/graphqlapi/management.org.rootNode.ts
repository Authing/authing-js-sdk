
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const orgRootNode =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) : Promise<any> => {
  const query = `query orgRootNode($sortBy: SortByEnum, $page: Int, $count: Int, $_id: String!){
    orgRootNode(_id: $_id){
        _id
        userPoolId
        name
        description
        createdAt
        updatedAt
        roles{
            totalCount
        }
        permissions{
            totalCount
        }
        users(sortBy: $sortBy, page: $page, count: $count){
            totalCount
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
