import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { RemoveUsersVariables, RemoveUsers } from '../../types/codeGen';
export declare const removeUsers: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: RemoveUsersVariables) => Promise<RemoveUsers>;
