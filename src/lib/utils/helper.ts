import { ManagementClientOptions } from '../management/types';

require('dotenv').config({
  path: '.env'
})

/** 随机字符串 **/
export const randomString = () => Math.random().toString(36).slice(2)

/**
 * 睡眠函数
 * @param ms 毫秒
 */
export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 从环境变量中读取配置
 *
 */
export const getOptionsFromEnv = (): ManagementClientOptions => {
  return {
    userPoolId: process.env.AUTHING_USERPOOL_ID,
    secret: process.env.AUTHING_USERPOOL_SECRET,
    host: {
      graphqlApiEndpoint: process.env.AUTHING_GRAPHQL_ENDPOINT || "https://core.authing.cn/graphql",
      restApiBaseHost: process.env.AUTHING_RESTAPI_HOST = "https://core.authing.cn"
    },
    onError: (err: Error) => { throw err }
  }
}