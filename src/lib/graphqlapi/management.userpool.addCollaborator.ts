import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  AddCollaboratorDocument,
  AddCollaboratorVariables,
  AddCollaborator
} from '../../types/codeGen';

export const addCollaborator = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AddCollaboratorVariables
): Promise<AddCollaborator> => {
  const query = AddCollaboratorDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
