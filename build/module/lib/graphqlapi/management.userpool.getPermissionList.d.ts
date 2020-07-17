import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { QueryPermissionListVariables, QueryPermissionList } from '../../types/codeGen';
export declare const queryPermissionList: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: QueryPermissionListVariables) => Promise<QueryPermissionList>;
