import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { UsersVariables, Users } from '../../types/codeGen';
export declare const users: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: UsersVariables) => Promise<Users>;
