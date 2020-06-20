import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
export declare const oidcProviderByDomain: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any) => Promise<any>;
