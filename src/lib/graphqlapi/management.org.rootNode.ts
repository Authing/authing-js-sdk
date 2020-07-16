import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  OrgRootNodeDocument,
  OrgRootNodeVariables,
  OrgRootNode
} from '../../types/codeGen';

export const orgRootNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: OrgRootNodeVariables
): Promise<OrgRootNode> => {
  const query = OrgRootNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
