import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  SearchOrgNodesDocument,
  SearchOrgNodesVariables,
  SearchOrgNodes
} from '../../types/codeGen';

export const searchNodes = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: SearchOrgNodesVariables
): Promise<SearchOrgNodes> => {
  const query = SearchOrgNodesDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
