import { Variables } from "graphql-request/dist/src/types";
export declare class GraphqlClient {
    endpoint: string;
    userPoolId: string;
    constructor(endpoint: string, userPoolId: string);
    request(options: {
        query: string;
        variables?: Variables;
        token?: string;
    }): Promise<unknown>;
}
