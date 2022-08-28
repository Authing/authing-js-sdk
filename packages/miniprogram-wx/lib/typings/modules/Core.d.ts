import { AuthingOptions, LoginOptions } from '../types';
export declare class Core {
    private options;
    private storage;
    constructor(options: AuthingOptions);
    loginByCode(data: LoginOptions): Promise<{
        accessToken: any;
        idToken: any;
    }>;
    loginByPhone(data: LoginOptions): Promise<{
        accessToken: any;
        idToken: any;
    }>;
    loginByPassword(): void;
    logout(): void;
    getPhone(): void;
    updateAvatar(): void;
    updateProfile(): void;
    private saveLoginState;
    clearLoginState(): void;
    getLoginState(): Promise<{
        idToken: import("@authing/authingmove-core").GetStorageSuccessData | import("@authing/authingmove-core").GetStorageFailData;
        accessToken: import("@authing/authingmove-core").GetStorageSuccessData | import("@authing/authingmove-core").GetStorageFailData;
    }>;
    private login;
}
