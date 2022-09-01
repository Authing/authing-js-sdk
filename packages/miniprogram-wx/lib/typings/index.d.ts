import { AuthingOptions } from './types';
import { Core } from './modules/Core';
import { User } from './modules/User';
export * from '@authing/authingmove-core';
export declare class Authing {
    readonly core: Core;
    readonly user: User;
    constructor(options: AuthingOptions);
}
