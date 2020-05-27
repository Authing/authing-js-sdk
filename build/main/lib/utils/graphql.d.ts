import { Variables } from 'graphql-request/dist/src/types';
export declare const graphqlRequest: (options: {
    endpoint: string;
    query: string;
    variables?: Variables;
    token?: string;
}) => Promise<unknown>;
