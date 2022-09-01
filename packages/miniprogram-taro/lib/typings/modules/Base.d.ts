import { ModuleOptions, AuthingOptions, IStorageProvider, EncryptFunction } from '../types';
export declare class Base {
    protected readonly authingOptions: AuthingOptions;
    protected readonly storage: IStorageProvider;
    protected readonly encryptFunction?: EncryptFunction;
    constructor(options: ModuleOptions);
    getLoginState(): Promise<{
        idToken: any;
        accessToken: any;
        refreshTokenRes: any;
    }>;
    clearLoginState(): void;
    protected saveLoginState(accessToken: string, idToken: string, refreshToken: string): Promise<void>;
    getPublicKey(): Promise<any>;
}
