import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import {
  QueryPermissionListDocument,
  QueryPermissionListVariables,
  QueryPermissionList
} from '../../types/codeGen';

export const queryPermissionList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: QueryPermissionListVariables
): Promise<QueryPermissionList> => {
  const query = QueryPermissionListDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
