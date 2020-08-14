import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  CreateResourceRule,
  CreateResourceRuleDocument,
  CreateResourceRuleVariables
} from '../../types/codeGen.v2';

export const allow = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateResourceRuleVariables
): Promise<CreateResourceRule> => {
  const query = CreateResourceRuleDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
