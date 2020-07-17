import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { RemoveOrgNodeVariables, RemoveOrgNode } from '../../types/codeGen';
export declare const removeOrgNode: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: RemoveOrgNodeVariables) => Promise<RemoveOrgNode>;
