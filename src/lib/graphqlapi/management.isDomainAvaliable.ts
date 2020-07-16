import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import {
  IsDomainAvaliableDocument,
  IsDomainAvaliableVariables,
  IsDomainAvaliable
} from '../../types/codeGen';

export const isDomainAvaliable = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: IsDomainAvaliableVariables
): Promise<IsDomainAvaliable> => {
  const query = IsDomainAvaliableDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
