import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import {
  QueryOidcAppInfoByDomainDocument,
  QueryOidcAppInfoByDomainVariables,
  QueryOidcAppInfoByDomain
} from '../../types/codeGen';

export const oidcProviderByDomain = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: QueryOidcAppInfoByDomainVariables
): Promise<QueryOidcAppInfoByDomain> => {
  const query = QueryOidcAppInfoByDomainDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
