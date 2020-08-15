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
    /**
     * 检测 AccessToken 所属用户的登录状态
     * @param token 用户 AccessToken
     */
    checkLoginStatus(token: string): Promise<{
        message?: string;
        code?: number;
        status?: boolean;
        token?: {
            iat?: number;
            exp?: number;
        };
    }>;
    /**
     * 想邮箱中发送验证邮件
     * @param email 用户邮箱
     */
    sendVerifyEmail(email: string): Promise<{
        message?: string;
        code?: number;
        status?: boolean;
    }>;
}
