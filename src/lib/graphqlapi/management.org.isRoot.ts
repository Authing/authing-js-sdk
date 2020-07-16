import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  IsRootNodeOfOrgDocument,
  IsRootNodeOfOrgVariables,
  IsRootNodeOfOrg
} from '../../types/codeGen';

export const isRootNodeOfOrg = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsRootNodeOfOrgVariables
): Promise<IsRootNodeOfOrg> => {
  const query = IsRootNodeOfOrgDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
