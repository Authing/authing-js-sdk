import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const checkLoginStatus = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any): Promise<any> => {
  const query = `query checkLoginStatus($token: String){
    checkLoginStatus(token: $token){
        message
        code
        status
        token{
            iat
            exp
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
