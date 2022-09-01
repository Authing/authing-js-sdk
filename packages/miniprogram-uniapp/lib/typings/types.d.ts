import { GetStorageFailData, GetStorageSuccessData, RemoveStorageFailData, RemoveStorageSuccessData, SetStorageCallbackData } from '@authing/authingmove-core';
export interface AuthingOptions {
    appId: string;
    userPoolId: string;
    host?: string;
    encryptFunction?: EncryptFunction;
}
export interface ModuleOptions {
    authingOptions: AuthingOptions;
    storage: IStorageProvider;
    encryptFunction?: EncryptFunction;
}
export interface LoginState {
    idToken: string;
    accessToken: string;
}
export interface EncryptFunction {
    (plainText: string, publicKey: string): string;
}
export declare abstract class IStorageProvider {
    get(key: string): Promise<GetStorageSuccessData | GetStorageFailData>;
    set(key: string, data: unknown): Promise<SetStorageCallbackData>;
    remove(key: string): Promise<RemoveStorageSuccessData | RemoveStorageFailData>;
}
export interface WxLoginOptions {
    connection?: 'wechat_mini_program_code' | 'wechat_mini_program_phone';
    extIdpConnidentifier: string;
    wechatMiniProgramCodePayload: {
        encryptedData: string;
        iv: string;
        code: string;
    };
}
export interface PasswordLoginOptions {
    connection?: 'PASSWORD';
    passwordPayload: {
        password: string;
        account?: string;
        email?: string;
        username?: string;
        phone: string;
    };
    options?: {
        passwordEncryptType?: 'none' | 'rsa' | 'sm2';
        scope?: string;
    };
}
export interface PassCodeLoginOptions {
    connection?: 'PASSCODE';
    passCodePayload: {
        passCode: string;
        email?: string;
        phone?: string;
        phoneCountryCode?: string;
    };
}
export interface UserInfo {
    name?: string;
    nickname?: string;
    photo?: string;
    externalId?: string;
    birthdate?: string;
    country?: string;
    province?: string;
    city?: string;
    address?: string;
    streetAddress?: string;
    postalCode?: string;
    gender?: string;
    username?: string;
    customData?: any;
}
export interface GetPhoneOptions {
    extIdpConnidentifier: string;
    code: string;
}
export declare type SmsChannel = 'CHANNEL_LOGIN' | 'CHANNEL_REGISTER' | 'CHANNEL_RESET_PASSWORD' | 'CHANNEL_BIND_PHONE' | 'CHANNEL_UNBIND_PHONE' | 'CHANNEL_BIND_MFA' | 'CHANNEL_VERIFY_MFA' | 'CHANNEL_UNBIND_MFA' | 'CHANNEL_COMPLETE_PHONE' | 'CHANNEL_IDENTITY_VERIFICATION' | 'CHANNEL_DELETE_ACCOUNT';
export interface SendSmsOptions {
    phoneNumber: string;
    channel: SmsChannel;
    phoneCountryCode?: string;
}
export interface RefreshTokenOptions {
    grant_type: 'refresh_token';
    redirect_uri: string;
    refresh_token: string;
}
export interface UpdatePasswordOptions {
    newPassword: string;
    oldPassword: string;
    passwordEncryptType?: 'none' | 'rsa' | 'sm2';
}
export interface ChangeQrcodeStatusOptions {
    qrcodeId: string;
    action: 'SCAN' | 'CONFIRM' | 'CANCEL';
}
