import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import { AuthenticationClientOptions } from './types';
import { GraphqlClient } from './../common/GraphqlClient';
export declare class BasicAuthenticationClient {
    options: AuthenticationClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: AuthenticationTokenProvider;
    constructor(options: AuthenticationClientOptions, graphqlClient: GraphqlClient, tokenProvider: AuthenticationTokenProvider);
    /**
     * 注册
     *
     * @memberof BasicAuthenticationClient
     */
    register(userInfo: any): Promise<any>;
}
