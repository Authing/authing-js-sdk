import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { QueryOidcAppInfoByDomainVariables, QueryOidcAppInfoByDomain } from '../../types/codeGen';
export declare const oidcProviderByDomain: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: QueryOidcAppInfoByDomainVariables) => Promise<QueryOidcAppInfoByDomain>;
