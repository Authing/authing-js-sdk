import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  PasswordLessForceLoginDocument,
  PasswordLessForceLoginVariables,
  PasswordLessForceLogin
} from '../../types/codeGen';

export const passwordLessForceLogin = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: PasswordLessForceLoginVariables
): Promise<PasswordLessForceLogin> => {
  const query = PasswordLessForceLoginDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
