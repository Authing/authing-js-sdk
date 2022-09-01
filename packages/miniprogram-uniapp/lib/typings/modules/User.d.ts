import { GetPhoneOptions, ModuleOptions, UpdatePasswordOptions, UserInfo } from '../types';
import { Base } from './Base';
export declare class User extends Base {
    constructor(options: ModuleOptions);
    updatePassword(data: UpdatePasswordOptions): Promise<any>;
    getUserInfo(): Promise<any>;
    updateAvatar(): Promise<void>;
    updateUserInfo(data: UserInfo): Promise<any>;
    getPhone(data: GetPhoneOptions): Promise<any>;
}
