import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationClientOptions } from './types';
export declare class AuthenticationTokenProvider {
    /** 内部变量，请不要直接引用 **/
    /** 该用户池对应的 accessToken **/
    private _accessToken;
    /** accessToken 过期时间，为 unix 时间戳 **/
    options: AuthenticationClientOptions;
    graphqlClient: GraphqlClient;
    constructor(options: AuthenticationClientOptions);
    getAccessToken(): Promise<string>;
    setAccessToken(accessToken: string): Promise<void>;
}
