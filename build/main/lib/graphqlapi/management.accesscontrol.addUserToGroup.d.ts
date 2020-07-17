import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AddUserToRbacGroupVariables, AddUserToRbacGroup } from '../../types/codeGen';
export declare const addUserToRBACGroup: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: AddUserToRbacGroupVariables) => Promise<AddUserToRbacGroup>;
