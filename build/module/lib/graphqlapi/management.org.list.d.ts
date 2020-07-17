import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { OrgsVariables, Orgs } from '../../types/codeGen';
export declare const orgs: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: OrgsVariables) => Promise<Orgs>;
