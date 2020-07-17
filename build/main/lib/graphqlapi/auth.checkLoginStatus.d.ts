import { CheckLoginStatus, CheckLoginStatusVariables } from '../../types/CodeGen';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from './../auth/AuthenticationTokenProvider';
export declare const checkLoginStatus: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: CheckLoginStatusVariables) => Promise<CheckLoginStatus>;
