import {
  CheckLoginStatus,
  CheckLoginStatusVariables,
  CheckLoginStatusDocument
} from '../../types/CodeGen';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';

export const checkLoginStatus = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CheckLoginStatusVariables
): Promise<CheckLoginStatus> => {
  const query = CheckLoginStatusDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};
