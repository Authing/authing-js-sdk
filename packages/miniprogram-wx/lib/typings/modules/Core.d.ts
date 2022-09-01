import { WxLoginOptions, ModuleOptions, PasswordLoginOptions, SendSmsOptions, PassCodeLoginOptions, RefreshTokenOptions, ChangeQrcodeStatusOptions } from '../types';
import { Base } from './Base';
export declare class Core extends Base {
    constructor(options: ModuleOptions);
    loginByCode(data: WxLoginOptions): Promise<{
        accessToken: any;
        idToken: any;
    }>;
    loginByPhone(data: WxLoginOptions): Promise<{
        accessToken: any;
        idToken: any;
    }>;
    loginByPassword(data: PasswordLoginOptions): Promise<void | {
        accessToken: any;
        idToken: any;
    }>;
    loginByPassCode(data: PassCodeLoginOptions): Promise<{
        accessToken: any;
        idToken: any;
    }>;
    logout(): Promise<void>;
    sendSms(data: SendSmsOptions): Promise<any>;
    private login;
    refreshToken(data: RefreshTokenOptions): Promise<{
        accessToken: any;
        idToken: any;
        refreshToken: any;
    }>;
    changeQrcodeStatus(data: ChangeQrcodeStatusOptions): Promise<any>;
}
