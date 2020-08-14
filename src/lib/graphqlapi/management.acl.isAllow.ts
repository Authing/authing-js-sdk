import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  IsActionAllowed,
  IsActionAllowedDocument,
  IsActionAllowedVariables
} from '../../types/codeGen.v2';

export const isAllowed = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsActionAllowedVariables
): Promise<IsActionAllowed> => {
  const query = IsActionAllowedDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
