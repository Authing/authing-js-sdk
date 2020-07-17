import { Register, RegisterVariables } from '../../types/CodeGen';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
export declare const register: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: RegisterVariables) => Promise<Register>;
