import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  CreateOrgDocument,
  CreateOrgVariables,
  CreateOrg
} from '../../types/codeGen';

export const createOrg = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateOrgVariables
): Promise<CreateOrg> => {
  const query = CreateOrgDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
