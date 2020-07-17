import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { OrgVariables, Org } from '../../types/codeGen';
export declare const org: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: OrgVariables) => Promise<Org>;
