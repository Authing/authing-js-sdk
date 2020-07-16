import {
  Register,
  RegisterVariables,
  RegisterDocument
} from '../../types/CodeGen';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const register = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RegisterVariables
): Promise<Register> => {
  const query = RegisterDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};
