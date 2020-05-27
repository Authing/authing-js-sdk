import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
export declare const interConnections: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any) => Promise<any>;
