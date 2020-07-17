import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { UserGroupListVariables, UserGroupList } from '../../types/codeGen';
export declare const userGroupList: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: UserGroupListVariables) => Promise<UserGroupList>;
