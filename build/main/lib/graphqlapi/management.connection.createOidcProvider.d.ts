import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { CreateOidcAppVariables, CreateOidcApp } from '../../types/codeGen';
export declare const CreateOIDCApp: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: CreateOidcAppVariables) => Promise<CreateOidcApp>;
