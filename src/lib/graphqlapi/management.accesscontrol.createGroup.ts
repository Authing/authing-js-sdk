import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  CreateRbacGroupDocument,
  CreateRbacGroupVariables,
  CreateRbacGroup
} from '../../types/codeGen';

export const createRBACGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateRbacGroupVariables
): Promise<CreateRbacGroup> => {
  const query = CreateRbacGroupDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
