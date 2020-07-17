import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { ClientVariables, Client } from '../../types/codeGen';
export declare const getUserPoolDetail: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: ClientVariables) => Promise<Client>;
