import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import {
  CreateOidcAppDocument,
  CreateOidcAppVariables,
  CreateOidcApp
} from '../../types/codeGen';

export const CreateOIDCApp = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CreateOidcAppVariables
): Promise<CreateOidcApp> => {
  const query = CreateOidcAppDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
