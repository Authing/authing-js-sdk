import { Variables } from 'graphql-request/dist/src/types';
import { DocumentNode } from 'graphql';
export declare class GraphqlClient {
    endpoint: string;
    userPoolId: string;
    constructor(endpoint: string, userPoolId: string);
    request<T>(options: {
        query: DocumentNode;
        variables?: Variables;
        token?: string;
    }): Promise<T>;
}
