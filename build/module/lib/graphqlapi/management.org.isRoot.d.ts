import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { IsRootNodeOfOrgVariables, IsRootNodeOfOrg } from '../../types/codeGen';
export declare const isRootNodeOfOrg: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: IsRootNodeOfOrgVariables) => Promise<IsRootNodeOfOrg>;
