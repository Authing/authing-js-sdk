import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  AddUserToRbacGroupDocument,
  AddUserToRbacGroupVariables,
  AddUserToRbacGroup
} from '../../types/codeGen';

export const addUserToRBACGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AddUserToRbacGroupVariables
): Promise<AddUserToRbacGroup> => {
  const query = AddUserToRbacGroupDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
