import { ManagementClientOptions } from './management/types';

require('dotenv').config({
  path: '.env'
});

/** 随机字符串 **/
export const randomString = () =>
  Math.random()
    .toString(36)
    .slice(2);

/**
 * 睡眠函数
 * @param ms 毫秒
 */
export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 从环境变量中读取配置
 *
 */
export const getOptionsFromEnv = (): ManagementClientOptions => {
  return {
    userPoolId: process.env.AUTHING_USERPOOL_ID,
    secret: process.env.AUTHING_USERPOOL_SECRET,
    host: process.env.AUTHING_HOST
  };
};

/**
 * @description 生成随机字符串
 *
 */
export function generateRandomString(length: number = 30) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
