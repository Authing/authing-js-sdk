import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
export declare const register: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) => Promise<unknown>;
