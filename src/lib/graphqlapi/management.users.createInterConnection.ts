import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';

import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  CreateInterConnectionDocument,
  CreateInterConnectionVariables,
  CreateInterConnection
} from '../../types/codeGen';

export const createInterConnection = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CreateInterConnectionVariables
): Promise<CreateInterConnection> => {
  const query = CreateInterConnectionDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
