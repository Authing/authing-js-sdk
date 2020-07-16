import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  IsUserInGroupDocument,
  IsUserInGroupVariables,
  IsUserInGroup
} from '../../types/codeGen';

export const isUserInGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsUserInGroupVariables
): Promise<IsUserInGroup> => {
  const query = IsUserInGroupDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
