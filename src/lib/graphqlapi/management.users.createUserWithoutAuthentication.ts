import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  CreateUserWithoutAuthenticationDocument,
  CreateUserWithoutAuthenticationVariables,
  CreateUserWithoutAuthentication
} from '../../types/codeGen';

export const createUserWithoutAuthentication = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateUserWithoutAuthenticationVariables
): Promise<CreateUserWithoutAuthentication> => {
  const query = CreateUserWithoutAuthenticationDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
