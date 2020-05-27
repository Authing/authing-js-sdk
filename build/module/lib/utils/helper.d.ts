import { ManagementClientOptions } from '../management/types';
/** 随机字符串 **/
export declare const randomString: () => string;
/**
 * 睡眠函数
 * @param ms 毫秒
 */
export declare const sleep: (ms: number) => Promise<unknown>;
/**
 * 从环境变量中读取配置
 *
 */
export declare const getOptionsFromEnv: () => ManagementClientOptions;
