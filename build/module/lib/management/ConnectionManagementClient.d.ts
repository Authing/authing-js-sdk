import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions, CreateOIDCProviderInput } from './types';
export declare class ConnectionManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider);
    oidcProviders(page?: number, count?: number): Promise<any>;
    createOidcProvider(app: CreateOIDCProviderInput): Promise<any>;
    oidcProviderByDomain(domain: string): Promise<any>;
}
