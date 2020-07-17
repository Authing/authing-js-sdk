import { GraphqlClient } from './../common/GraphqlClient';
import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import { AuthenticationClientOptions } from './types';
import { UserRegisterInput } from '../../types/CodeGen';
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
    register(userInfo: UserRegisterInput): Promise<{
        _id?: string;
        email?: string;
        unionid?: string;
        openid?: string;
        emailVerified?: boolean;
        phone?: string;
        phoneVerified?: boolean;
        username?: string;
        nickname?: string;
        company?: string;
        photo?: string;
        browser?: string;
        device?: string;
        password?: string;
        registerInClient?: string;
        registerMethod?: string;
        oauth?: string;
        token?: string;
        tokenExpiredAt?: string;
        loginsCount?: number;
        lastLogin?: string;
        lastIP?: string;
        signedUp?: string;
        blocked?: boolean;
        isDeleted?: boolean;
        name?: string;
        givenName?: string;
        familyName?: string;
        middleName?: string;
        profile?: string;
        preferredUsername?: string;
        website?: string;
        gender?: string;
        birthdate?: string;
        zoneinfo?: string;
        locale?: string;
        address?: string;
        formatted?: string;
        streetAddress?: string;
        locality?: string;
        region?: string;
        postalCode?: string;
        country?: string;
        updatedAt?: string;
        metadata?: string;
    }>;
}
