import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  RemoveUsersDocument,
  RemoveUsersVariables,
  RemoveUsers
} from '../../types/codeGen';

export const removeUsers = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: RemoveUsersVariables
): Promise<RemoveUsers> => {
  const query = RemoveUsersDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
