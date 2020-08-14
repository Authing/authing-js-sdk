import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  AssignRole,
  AssignRoleDocument,
  AssignRoleVariables
} from '../../types/codeGen.v2';

export const assignRole = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AssignRoleVariables
): Promise<AssignRole> => {
  const query = AssignRoleDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
