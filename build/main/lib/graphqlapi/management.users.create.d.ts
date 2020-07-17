import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { RegisterVariables, Register } from '../../types/codeGen';
export declare const register: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: RegisterVariables) => Promise<Register>;
