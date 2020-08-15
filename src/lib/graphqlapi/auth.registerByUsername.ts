import {
  RegisterByUsernameResponse,
  RegisterByUsernameDocument,
  RegisterByUsernameVariables
} from '../../types/CodeGen.v2';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { GraphqlClient } from '../common/GraphqlClient';

export const registerByUsername = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: RegisterByUsernameVariables
): Promise<RegisterByUsernameResponse> => {
  const query = RegisterByUsernameDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};
