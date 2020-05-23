
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';

export const queryPermissionList =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any) : Promise<any> => {
  const query = `query queryPermissionList{
    queryPermissionList{
        list{
            _id
            name
            affect
            description
        }
        totalCount
    }
}`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
