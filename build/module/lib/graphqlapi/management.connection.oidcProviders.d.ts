import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { GetOidcAppListVariables, GetOidcAppList } from '../../types/codeGen';
export declare const GetOIDCAppList: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: GetOidcAppListVariables) => Promise<GetOidcAppList>;
