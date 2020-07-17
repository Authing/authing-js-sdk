import { ManagementClientOptions } from './types';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { PermissionDescriptorsListInputType } from '../../types/codeGen';
export declare class UserPoolManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider);
    /**
     * 查询用户协作权限列表
     *
     * @memberof UserPoolManagementClient
     */
    getPermissionList(): Promise<{
        totalCount?: number;
        list?: {
            _id?: string;
            name?: string;
            affect?: string;
            description?: string;
        }[];
    }>;
    /**
     * 添加用户池协作者
     *
     * @param {{ collaboratorUserId: string, permissionDescriptors?: PermissionDescriptors[] }} options
     * @returns
     * @memberof UserPoolManagementClient
     */
    addCollaborator(collaboratorUserId: string, permissionDescriptors?: PermissionDescriptorsListInputType[]): Promise<{
        _id?: string;
    }>;
    /**
     * 查询用户池详情
     *
     * @returns
     * @memberof UserPoolManagementClient
     */
    detail(): Promise<{
        _id?: string;
        usersCount?: number;
        logo?: string;
        emailVerifiedDefault?: boolean;
        sendWelcomeEmail?: boolean;
        registerDisabled?: boolean;
        showWXMPQRCode?: boolean;
        useMiniLogin?: boolean;
        useSelfWxapp?: boolean;
        allowedOrigins?: string;
        name?: string;
        secret?: string;
        token?: string;
        descriptions?: string;
        jwtExpired?: number;
        createdAt?: string;
        isDeleted?: boolean;
        enableEmail?: boolean;
        user?: {
            _id?: string;
            username?: string;
            email?: string;
            unionid?: string;
            openid?: string;
            emailVerified?: boolean;
            phone?: string;
            phoneVerified?: boolean;
            nickname?: string;
            company?: string;
            photo?: string;
            browser?: string;
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
            device?: string;
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
            oldPassword?: string;
            metadata?: string;
        };
        clientType?: {
            _id?: string;
            name?: string;
            description?: string;
            image?: string;
            example?: string;
        };
        userPoolTypes?: {
            _id?: string;
            name?: string;
            description?: string;
            image?: string;
            example?: string;
        }[];
        frequentRegisterCheck?: {
            timeInterval?: number;
            limit?: number;
            enable?: boolean;
        };
        loginFailCheck?: {
            timeInterval?: number;
            limit?: number;
            enable?: boolean;
        };
        changePhoneStrategy?: {
            verifyOldPhone?: boolean;
        };
        changeEmailStrategy?: {
            verifyOldEmail?: boolean;
        };
        qrcodeLoginStrategy?: {
            qrcodeExpiresAfter?: number;
            returnFullUserInfo?: boolean;
            allowExchangeUserInfoFromBrowser?: boolean;
            ticketExpiresAfter?: number;
        };
        app2WxappLoginStrategy?: {
            ticketExpriresAfter?: number;
            ticketExchangeUserInfoNeedSecret?: boolean;
        };
    }>;
}
