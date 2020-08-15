import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  CreateRoleResponse,
  CreateRoleDocument,
  CreateRoleVariables
} from '../../types/codeGen.v2';

export const addRole = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateRoleVariables
): Promise<CreateRoleResponse> => {
  const query = CreateRoleDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
