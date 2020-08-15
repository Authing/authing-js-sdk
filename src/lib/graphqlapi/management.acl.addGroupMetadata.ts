import {
  AddGroupMetadata,
  AddGroupMetadataVariables,
  AddGroupMetadataDocument
} from '../../types/codeGen';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const addGroupMetadata = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AddGroupMetadataVariables
): Promise<AddGroupMetadata> => {
  const query = AddGroupMetadataDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};
