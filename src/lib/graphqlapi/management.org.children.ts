import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  OrgChildrenNodesDocument,
  OrgChildrenNodesVariables,
  OrgChildrenNodes
} from '../../types/codeGen';

export const orgChildrenNodes = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: OrgChildrenNodesVariables
): Promise<OrgChildrenNodes> => {
  const query = OrgChildrenNodesDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
