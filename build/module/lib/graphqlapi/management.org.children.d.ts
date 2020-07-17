import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { OrgChildrenNodesVariables, OrgChildrenNodes } from '../../types/codeGen';
export declare const orgChildrenNodes: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: OrgChildrenNodesVariables) => Promise<OrgChildrenNodes>;
