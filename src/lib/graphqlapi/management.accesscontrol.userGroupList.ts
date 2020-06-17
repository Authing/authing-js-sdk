
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const userGroupList = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any): Promise<any> => {
  const query = `
  query userGroupList($_id: String!){
    userGroupList(_id: $_id){
        totalCount
        rawList
        list {
          _id
          name
          description
          createdAt
          updatedAt
        }
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
