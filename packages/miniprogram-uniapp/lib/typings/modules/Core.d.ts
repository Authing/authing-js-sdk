import { WxLoginOptions, ModuleOptions, PasswordLoginOptions, UserInfo } from '../types';
import { Base } from './Base';
export declare class Core extends Base {
    private readonly authingOptions;
    private readonly storage;
    private readonly encryptFunction?;
    constructor(options: ModuleOptions);
    loginByCode(data: WxLoginOptions): Promise<{
        accessToken: any;
        idToken: any;
    }>;
    loginByPhone(data: WxLoginOptions): Promise<{
        accessToken: any;
        idToken: any;
    }>;
    loginByPassword(data: PasswordLoginOptions): Promise<{
        accessToken: any;
        idToken: any;
    }>;
    logout(): void;
    getPhone(code: string): void;
    getUserInfo(): Promise<any>;
    updateAvatar(): void;
    updateUserInfo(data: UserInfo): Promise<any>;
    private saveLoginState;
    clearLoginState(): void;
    getLoginState(): Promise<{
        idToken: any;
        accessToken: any;
    }>;
    private login;
}
