import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { InterConnectionsVariables, InterConnections } from '../../types/codeGen';
export declare const interConnections: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: InterConnectionsVariables) => Promise<InterConnections>;
