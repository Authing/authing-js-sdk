import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UserRegisterInput } from '../../types/codeGen';
export declare class UsersManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider);
    /**
     * 删除用户
     *
     * @param {string} userId
     * @returns
     * @memberof UsersManagementClient
     */
    delete(userId: string): Promise<{
        _id?: string;
    }[]>;
    /**
     * 批量删除用户
     *
     * @param {string[]} userIds
     * @returns
     * @memberof UsersManagementClient
     */
    deleteMany(userIds: string[]): Promise<{
        _id?: string;
    }[]>;
    /**
     * 获取用户详情
     *
     * @param {string} userId
     * @returns
     * @memberof UsersManagementClient
     */
    get(userId: string): Promise<{
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
    /**
     * page: 页码数, 从 0 开始
     *
     * @param {{ page: number, count: number }} options
     * @returns
     * @memberof UsersManagementClient
     */
    list(page?: number, count?: number): Promise<{
        totalCount?: number;
        list?: {
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
            customData?: string;
            metadata?: string;
        }[];
    }>;
    /**
     *
     * 以管理员身份创建用户
     * @param {{
     *     userInfo: UserRegisterInput,
     *     invitationCode?: string,
     *     keepPassword?: boolean
     *   }} options
     * @returns
     * @memberof UsersManagementClient
     */
    create(userInfo: UserRegisterInput, options?: {
        invitationCode?: string;
        keepPassword?: boolean;
    }): Promise<{
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
    /**
     * 建立跨用户池的用户关联
     *
     * maxAge 单位为 s
     *
     * @param {{
     *     sourceUserPoolId: string,
     *     sourceUserId: string,
     *     targetUserPoolId: string,
     *     targetUserId: string,
     *     maxAge: number
     *   }} options
     * @memberof UsersManagementClient
     */
    createInterConnection(options: {
        sourceUserPoolId: string;
        sourceUserId: string;
        targetUserPoolId: string;
        targetUserId: string;
        maxAge: number;
    }): Promise<{
        message?: string;
        code?: number;
        status?: boolean;
    }>;
    /**
     * 查询用户池具备的跨用户池关联能力
     *
     * @returns
     * @memberof UsersManagementClient
     */
    interConnections(): Promise<{
        sourceUserId: string;
        sourceUserPoolId: string;
        targetUserId: string;
        targetUserPoolId: string;
        enabled: boolean;
        expiresdAt?: string;
    }[]>;
    /**
     * 管理员让用户强制登录，无需检测任何账号密码、验证码
     *
     * @memberof UsersManagementClient
     */
    passwordLessForceLogin(userId: string): Promise<{
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
    /**
     *
     *
     * @memberof UsersManagementClient
     */
    createUserWithoutAuthentication(userInfo: UserRegisterInput, forceLogin?: boolean): Promise<{
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
