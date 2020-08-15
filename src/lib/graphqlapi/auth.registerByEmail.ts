import {
  RegisterByEmailResponse,
  RegisterByEmailDocument,
  RegisterByEmailVariables
} from '../../types/CodeGen.v2';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { GraphqlClient } from '../common/GraphqlClient';

export const registerByEmail = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: RegisterByEmailVariables
): Promise<RegisterByEmailResponse> => {
  const query = RegisterByEmailDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};
