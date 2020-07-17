import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { OrgRootNodeVariables, OrgRootNode } from '../../types/codeGen';
export declare const orgRootNode: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: OrgRootNodeVariables) => Promise<OrgRootNode>;
