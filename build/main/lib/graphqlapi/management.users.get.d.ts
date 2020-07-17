import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { UserVariables, User } from '../../types/codeGen';
export declare const user: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: UserVariables) => Promise<User>;
