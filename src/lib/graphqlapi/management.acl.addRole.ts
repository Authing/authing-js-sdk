import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  CreateRole,
  CreateRoleDocument,
  CreateRoleVariables
} from '../../types/codeGen.v2';

export const addRole = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateRoleVariables
): Promise<CreateRole> => {
  const query = CreateRoleDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
