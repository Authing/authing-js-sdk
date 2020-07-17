import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { PasswordLessForceLoginVariables, PasswordLessForceLogin } from '../../types/codeGen';
export declare const passwordLessForceLogin: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: PasswordLessForceLoginVariables) => Promise<PasswordLessForceLogin>;
