import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { QueryRbacGroupUserListVariables, QueryRbacGroupUserList } from '../../types/codeGen';
export declare const groupUserList: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: QueryRbacGroupUserListVariables) => Promise<QueryRbacGroupUserList>;
