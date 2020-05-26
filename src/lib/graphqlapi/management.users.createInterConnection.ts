import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';

import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const createInterConnection = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any): Promise<any> => {
  const query = `mutation createInterConnection(
    $sourceUserPoolId: String!
    $sourceUserId: String!
    $targetUserPoolId: String!
    $targetUserId: String!
    $maxAge: Int!
  ) {
    createInterConnection(
      sourceUserPoolId: $sourceUserPoolId
      sourceUserId: $sourceUserId
      targetUserId: $targetUserId
      targetUserPoolId: $targetUserPoolId
      maxAge: $maxAge
    ) {
      message
      code
      status
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
