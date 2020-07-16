import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  AddOrgNodeDocument,
  AddOrgNodeVariables,
  AddOrgNode
} from '../../types/codeGen';

export const addOrgNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AddOrgNodeVariables
): Promise<AddOrgNode> => {
  const query = AddOrgNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
