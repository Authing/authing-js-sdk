import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
export declare const createUserWithoutAuthentication: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) => Promise<any>;
