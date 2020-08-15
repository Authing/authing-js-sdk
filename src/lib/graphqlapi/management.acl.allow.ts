import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  CreateResourceRuleResponse,
  CreateResourceRuleDocument,
  CreateResourceRuleVariables
} from '../../types/codeGen.v2';

export const allow = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateResourceRuleVariables
): Promise<CreateResourceRuleResponse> => {
  const query = CreateResourceRuleDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
