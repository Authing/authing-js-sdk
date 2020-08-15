import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  CreateResourceResponse,
  CreateResourceDocument,
  CreateResourceVariables
} from '../../types/codeGen.v2';

export const addResource = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateResourceVariables
): Promise<CreateResourceResponse> => {
  const query = CreateResourceDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
