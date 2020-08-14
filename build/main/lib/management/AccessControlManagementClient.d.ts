import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { SortByEnum } from '../../types/codeGen';
export declare class AccessControlManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    graphqlClientV2: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, graphqlClientV2: GraphqlClient, tokenProvider: ManagementTokenProvider);
    /**
     * 创建 Group
     *
     * @param {string} name
     * @param {string} description
     * @returns {Promise<AuthingGroup>}
     * @memberof AccessControlManagementClient
     */
    createGroup(name: string, description: string): Promise<{
        _id: string;
        userPoolId: string;
        name: string;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
    }>;
    /**
     * 为 Group 添加自定义数据
     *
     * @param {string} groupId
     * @param {string} key
     * @param {*} value
     * @returns {Promise<{ key: string, value: string }>}
     * @memberof AccessControlManagementClient
     */
    addGroupMetadata(groupId: string, key: string, value: any): Promise<{
        key: string;
        value: string;
    }>;
    /**
     *  添加用户到分组中
     *
     * @param {{
     *     userId: string,
     *     groupId: string
     *   }} options
     * @returns
     * @memberof AccessControlManagementClient
     */
    addUserToGroup(options: {
        userId: string;
        groupId: string;
    }): Promise<{
        _id: string;
        userPoolId: string;
        name: string;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
        roles?: {
            totalCount?: number;
        };
        permissions?: {
            totalCount?: number;
        };
        users?: {
            totalCount?: number;
        };
    }>;
    /**
     * 判断用户是否在 Group 中
     *
     * @memberof AccessControlManagementClient
     */
    isUserInGroup(options: {
        userId: string;
        groupId: string;
    }): Promise<boolean>;
    /**
     * 查询 Group 用户列表
     *
     * @param {string} groupId
     * @param {{
     *     sortBy: string, 默认为 CREATEDAT_DESC
     *     page: number, 默认为 0
     *     count: number 默认为 10
     *   }} options
     * @returns
     * @memberof AccessControlManagementClient
     */
    groupUserList(groupId: string, options?: {
        sortBy?: SortByEnum;
        page?: number;
        count?: number;
    }): Promise<{
        totalCount?: number;
        list?: {
            _id?: string;
            unionid?: string;
            email?: string;
            emailVerified?: boolean;
            username?: string;
            nickname?: string;
            company?: string;
            photo?: string;
            phone?: string;
            browser?: string;
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
            metadata?: string;
        }[];
    }>;
    /**
     * 查询用户所在的分组列表
     *
     */
    userGroupList(userId: string): Promise<{
        totalCount: number;
        rawList: string[];
        list: {
            _id: string;
            userPoolId: string;
            name: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
        }[];
    }>;
    assignRole(roleCode: string, userIds: string[]): Promise<void>;
    /**
     * @description 添加角色
     *
     */
    addRole(code: string, name?: string, description?: string): Promise<{
        code: string;
        name?: string;
        description?: string;
        isSystem?: boolean;
        createdAt?: string;
        updatedAt?: string;
        permissions: {
            id: string;
            code: string;
            name: string;
            description?: string;
            isSystem?: boolean;
            type?: string;
            createdAt?: string;
            updatedAt?: string;
        }[];
        users: {
            totalCount: number;
            list: {
                id: string;
                userPoolId: string;
                username?: string;
                email?: string;
                emailVerified?: boolean;
                phone?: string;
                phoneVerified?: boolean;
                unionid?: string;
                openid?: string;
                nickname?: string;
                registerMethod?: string;
                photo?: string;
                password?: string;
                oauth?: string;
                token?: string;
                tokenExpiredAt?: string;
                loginsCount?: number;
                lastLogin?: string;
                lastIP?: string;
                signedUp?: string;
                blocked?: boolean;
                isDeleted?: boolean;
                device?: string;
                browser?: string;
                company?: string;
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
            }[];
        };
    }>;
    /**
     * @description 添加资源
     *
     */
    addResource(code: string, name?: string, description?: string): Promise<{
        code: string;
        name?: string;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
    }>;
    /**
     * @description 允许某个用户/角色操作某个资源
     *
     * @param roleCode: 角色代码
     * @param action: 操作
     * @param resouceCode: 资源代码
     *
     */
    allow(roleCode: string, action: string, resouceCode: string): Promise<{
        action: string;
        allow: boolean;
        expiresIn?: string;
        createdAt?: string;
        updatedAt?: string;
        resouce: {
            code: string;
            name?: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
        };
        user?: {
            id: string;
            userPoolId: string;
            username?: string;
            email?: string;
            emailVerified?: boolean;
            phone?: string;
            phoneVerified?: boolean;
            unionid?: string;
            openid?: string;
            nickname?: string;
            registerMethod?: string;
            photo?: string;
            password?: string;
            oauth?: string;
            token?: string;
            tokenExpiredAt?: string;
            loginsCount?: number;
            lastLogin?: string;
            lastIP?: string;
            signedUp?: string;
            blocked?: boolean;
            isDeleted?: boolean;
            device?: string;
            browser?: string;
            company?: string;
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
        };
        role?: {
            code: string;
            name?: string;
            description?: string;
            isSystem?: boolean;
            createdAt?: string;
            updatedAt?: string;
            permissions: {
                id: string;
                code: string;
                name: string;
                description?: string;
                isSystem?: boolean;
                type?: string;
                createdAt?: string;
                updatedAt?: string;
            }[];
            users: {
                totalCount: number;
            };
        };
        group?: {
            code: string;
            name: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
            users: {
                totalCount: number;
            };
        };
        node?: {
            id: string;
            name: string;
            nameI18n?: string;
            description?: string;
            descriptionI18n?: string;
            order?: number;
            code?: string;
            root?: boolean;
            depth?: number;
            createdAt?: string;
            updatedAt?: string;
            children?: string[];
            users: {
                totalCount: number;
            };
        };
    }>;
    /**
     * @description 允许某个用户/角色操作某个资源
     *
     * @param roleCode: 角色代码
     * @param action: 操作
     * @param resouceCode: 资源代码
     *
     */
    deny(roleCode: string, action: string, resouceCode: string): Promise<{
        action: string;
        allow: boolean;
        expiresIn?: string;
        createdAt?: string;
        updatedAt?: string;
        resouce: {
            code: string;
            name?: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
        };
        user?: {
            id: string;
            userPoolId: string;
            username?: string;
            email?: string;
            emailVerified?: boolean;
            phone?: string;
            phoneVerified?: boolean;
            unionid?: string;
            openid?: string;
            nickname?: string;
            registerMethod?: string;
            photo?: string;
            password?: string;
            oauth?: string;
            token?: string;
            tokenExpiredAt?: string;
            loginsCount?: number;
            lastLogin?: string;
            lastIP?: string;
            signedUp?: string;
            blocked?: boolean;
            isDeleted?: boolean;
            device?: string;
            browser?: string;
            company?: string;
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
        };
        role?: {
            code: string;
            name?: string;
            description?: string;
            isSystem?: boolean;
            createdAt?: string;
            updatedAt?: string;
            permissions: {
                id: string;
                code: string;
                name: string;
                description?: string;
                isSystem?: boolean;
                type?: string;
                createdAt?: string;
                updatedAt?: string;
            }[];
            users: {
                totalCount: number;
            };
        };
        group?: {
            code: string;
            name: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
            users: {
                totalCount: number;
            };
        };
        node?: {
            id: string;
            name: string;
            nameI18n?: string;
            description?: string;
            descriptionI18n?: string;
            order?: number;
            code?: string;
            root?: boolean;
            depth?: number;
            createdAt?: string;
            updatedAt?: string;
            children?: string[];
            users: {
                totalCount: number;
            };
        };
    }>;
    /**
     * @description 判断某个用户是否对某个资源有某个操作权限
     *
     * @param userId: 用户ID
     * @param action: 操作
     * @param resouceCode: 资源代码
     *
     */
    isAllowed(userId: string, action: string, resouceCode: string): Promise<boolean>;
}
