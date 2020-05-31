
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const passwordLessForceLogin = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any): Promise<any> => {
  const query = `
  mutation passwordLessForceLogin($userPoolId: String!, $userId: String!){
    passwordLessForceLogin(userPoolId: $userPoolId, userId: $userId) {
      _id
      name
      nickname
      username
      token
      email
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
