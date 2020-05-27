import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';

import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const interConnections = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any): Promise<any> => {
  const query = `query interConnections($userPoolId: String!){
    interConnections(userPoolId: $userPoolId) {
      sourceUserId
      sourceUserPoolId
      targetUserId
      targetUserPoolId
      enabled
      expiresdAt
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
