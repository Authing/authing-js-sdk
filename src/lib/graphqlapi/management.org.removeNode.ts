import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  RemoveOrgNodeDocument,
  RemoveOrgNodeVariables,
  RemoveOrgNode
} from '../../types/codeGen';

export const removeOrgNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: RemoveOrgNodeVariables
): Promise<RemoveOrgNode> => {
  const query = RemoveOrgNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
