import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';

import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import {
  InterConnectionsDocument,
  InterConnectionsVariables,
  InterConnections
} from '../../types/codeGen';

export const interConnections = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: InterConnectionsVariables
): Promise<InterConnections> => {
  const query = InterConnectionsDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
