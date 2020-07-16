import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  DeleteOrgDocument,
  DeleteOrgVariables,
  DeleteOrg
} from '../../types/codeGen';

export const deleteOrg = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: DeleteOrgVariables
): Promise<DeleteOrg> => {
  const query = DeleteOrgDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
