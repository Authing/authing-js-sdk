import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { SortByEnum } from '../../types/codeGen';
export declare class AccessControlManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider);
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
}
