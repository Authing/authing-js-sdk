import { ModuleOptions, AuthingOptions, IStorageProvider, EncryptFunction, LoginStateOptions } from '../types';
export declare class Base {
    protected readonly authingOptions: AuthingOptions;
    protected readonly storage: IStorageProvider;
    protected readonly encryptFunction?: EncryptFunction;
    constructor(options: ModuleOptions);
    getLoginState(): Promise<LoginStateOptions>;
    clearLoginState(): void;
    protected saveLoginState(loginState: LoginStateOptions): Promise<LoginStateOptions>;
    getPublicKey(): Promise<any>;
}
