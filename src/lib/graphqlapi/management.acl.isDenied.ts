import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  IsActionDeniedResponse,
  IsActionDeniedDocument,
  IsActionDeniedVariables
} from '../../types/codeGen.v2';

export const isDenied = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsActionDeniedVariables
): Promise<IsActionDeniedResponse> => {
  const query = IsActionDeniedDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
