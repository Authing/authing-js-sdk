import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  UserGroupListDocument,
  UserGroupListVariables,
  UserGroupList
} from '../../types/codeGen';

export const userGroupList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: UserGroupListVariables
): Promise<UserGroupList> => {
  const query = UserGroupListDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
