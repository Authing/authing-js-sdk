"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomString = exports.getOptionsFromEnv = exports.sleep = exports.randomString = void 0;
require('dotenv').config({
    path: '.env'
});
/** 随机字符串 **/
exports.randomString = () => Math.random()
    .toString(36)
    .slice(2);
/**
 * 睡眠函数
 * @param ms 毫秒
 */
exports.sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
/**
 * 从环境变量中读取配置
 *
 */
exports.getOptionsFromEnv = () => {
    return {
        userPoolId: process.env.AUTHING_USERPOOL_ID,
        secret: process.env.AUTHING_USERPOOL_SECRET,
        host: {
            graphqlApiEndpoint: process.env.AUTHING_GRAPHQL_ENDPOINT ||
                'https://core.authing.cn/graphql',
            graphqlApiEndpointV2: process.env.AUTHING_GRAPHQL_ENDPOINT_V2 ||
                'https://core.authing.cn/v2/graphql',
            restApiBaseHost: process.env.AUTHING_RESTAPI_HOST =
                'https://core.authing.cn'
        },
        onError: (err) => {
            throw err;
        }
    };
};
/**
 * @description 生成随机字符串
 *
 */
function generateRandomString(length = 30) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateRandomString = generateRandomString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi91dGlscy9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN2QixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUMsQ0FBQztBQUVILGFBQWE7QUFDQSxRQUFBLFlBQVksR0FBRyxHQUFHLEVBQUUsQ0FDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtLQUNWLFFBQVEsQ0FBQyxFQUFFLENBQUM7S0FDWixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFZDs7O0dBR0c7QUFDVSxRQUFBLEtBQUssR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO0lBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1UsUUFBQSxpQkFBaUIsR0FBRyxHQUE0QixFQUFFO0lBQzdELE9BQU87UUFDTCxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7UUFDM0MsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCO1FBQzNDLElBQUksRUFBRTtZQUNKLGtCQUFrQixFQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QjtnQkFDcEMsaUNBQWlDO1lBQ25DLG9CQUFvQixFQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQjtnQkFDdkMsb0NBQW9DO1lBQ3RDLGVBQWUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQjtnQkFDL0MseUJBQXlCO1NBQzVCO1FBQ0QsT0FBTyxFQUFFLENBQUMsR0FBVSxFQUFFLEVBQUU7WUFDdEIsTUFBTSxHQUFHLENBQUM7UUFDWixDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGOzs7R0FHRztBQUNILFNBQWdCLG9CQUFvQixDQUFDLFNBQWlCLEVBQUU7SUFDdEQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sVUFBVSxHQUNkLGdFQUFnRSxDQUFDO0lBQ25FLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQztLQUMzRTtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFURCxvREFTQyJ9