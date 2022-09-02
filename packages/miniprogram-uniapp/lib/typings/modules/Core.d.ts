import { WxLoginOptions, ModuleOptions, PasswordLoginOptions, SendSmsOptions, PassCodeLoginOptions, RefreshTokenOptions, ChangeQrcodeStatusOptions } from '../types';
import { Base } from './Base';
export declare class Core extends Base {
    constructor(options: ModuleOptions);
    loginByCode(data: WxLoginOptions): Promise<import("../types").LoginStateOptions>;
    loginByPhone(data: WxLoginOptions): Promise<import("../types").LoginStateOptions>;
    loginByPassword(data: PasswordLoginOptions): Promise<void | import("../types").LoginStateOptions>;
    loginByPassCode(data: PassCodeLoginOptions): Promise<import("../types").LoginStateOptions>;
    logout(): Promise<void>;
    sendSms(data: SendSmsOptions): Promise<any>;
    private login;
    refreshToken(data: RefreshTokenOptions): Promise<import("../types").LoginStateOptions>;
    changeQrcodeStatus(data: ChangeQrcodeStatusOptions): Promise<any>;
}
