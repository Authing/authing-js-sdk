import { BasicAuthenticationClient } from './BasicAuthenticationClient';
import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';
export declare class AuthenticationClient {
    options: AuthenticationClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: AuthenticationTokenProvider;
    basic: BasicAuthenticationClient;
    constructor(options: AuthenticationClientOptions);
    checkLoginStatus(token: string): Promise<{
        message?: string;
        code?: number;
        status?: boolean;
        token?: {
            iat?: number;
            exp?: number;
        };
    }>;
}
