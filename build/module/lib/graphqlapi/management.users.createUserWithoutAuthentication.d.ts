import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { CreateUserWithoutAuthenticationVariables, CreateUserWithoutAuthentication } from '../../types/codeGen';
export declare const createUserWithoutAuthentication: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: CreateUserWithoutAuthenticationVariables) => Promise<CreateUserWithoutAuthentication>;
