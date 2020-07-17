import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { SearchOrgNodesVariables, SearchOrgNodes } from '../../types/codeGen';
export declare const searchNodes: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: SearchOrgNodesVariables) => Promise<SearchOrgNodes>;
