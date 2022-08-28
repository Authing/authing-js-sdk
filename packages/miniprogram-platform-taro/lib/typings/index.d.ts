import { AuthingOptions } from './types';
import { Core } from './modules/Core';
export * from '@authing/authingmove-core';
export declare class Authing {
    readonly core: Core;
    constructor(options: AuthingOptions);
}
