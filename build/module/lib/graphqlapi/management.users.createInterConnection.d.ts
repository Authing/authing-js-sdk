import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { CreateInterConnectionVariables, CreateInterConnection } from '../../types/codeGen';
export declare const createInterConnection: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: CreateInterConnectionVariables) => Promise<CreateInterConnection>;
