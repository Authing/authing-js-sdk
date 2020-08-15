import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  QueryRbacGroupUserListVariables,
  QueryRbacGroupUserList,
  QueryRbacGroupUserListDocument
} from '../../types/codeGen';

export const groupUserList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: QueryRbacGroupUserListVariables
): Promise<QueryRbacGroupUserList> => {
  const query = QueryRbacGroupUserListDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
