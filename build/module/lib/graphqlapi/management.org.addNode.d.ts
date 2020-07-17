import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AddOrgNodeVariables, AddOrgNode } from '../../types/codeGen';
export declare const addOrgNode: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: AddOrgNodeVariables) => Promise<AddOrgNode>;
