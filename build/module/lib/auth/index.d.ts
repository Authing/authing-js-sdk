import { BasicAuthenticationClient } from './BasicAuthenticationClient';
import { CheckLoginStatusRes } from './types';
import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';
export declare class AuthenticationClient {
    options: AuthenticationClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: AuthenticationTokenProvider;
    basic: BasicAuthenticationClient;
    constructor(options: AuthenticationClientOptions);
    checkLoginStatus(token: string): Promise<CheckLoginStatusRes>;
}
