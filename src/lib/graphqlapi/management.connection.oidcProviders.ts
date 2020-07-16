import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import {
  GetOidcAppListDocument,
  GetOidcAppListVariables,
  GetOidcAppList
} from '../../types/codeGen';

export const GetOIDCAppList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: GetOidcAppListVariables
): Promise<GetOidcAppList> => {
  const query = GetOidcAppListDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
