"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionsFromEnv = exports.sleep = exports.randomString = void 0;
require('dotenv').config({
    path: '.env'
});
/** 随机字符串 **/
exports.randomString = () => Math.random().toString(36).slice(2);
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
            graphqlApiEndpoint: process.env.AUTHING_GRAPHQL_ENDPOINT || "https://core.authing.cn/graphql",
            restApiBaseHost: process.env.AUTHING_RESTAPI_HOST = "https://core.authing.cn"
        },
        onError: (err) => { throw err; }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi91dGlscy9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUN2QixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUMsQ0FBQTtBQUVGLGFBQWE7QUFDQSxRQUFBLFlBQVksR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUVyRTs7O0dBR0c7QUFDVSxRQUFBLEtBQUssR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO0lBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFBO0FBRUQ7OztHQUdHO0FBQ1UsUUFBQSxpQkFBaUIsR0FBRyxHQUE0QixFQUFFO0lBQzdELE9BQU87UUFDTCxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7UUFDM0MsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCO1FBQzNDLElBQUksRUFBRTtZQUNKLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLElBQUksaUNBQWlDO1lBQzdGLGVBQWUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLHlCQUF5QjtTQUM5RTtRQUNELE9BQU8sRUFBRSxDQUFDLEdBQVUsRUFBRSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUEsQ0FBQyxDQUFDO0tBQ3ZDLENBQUE7QUFDSCxDQUFDLENBQUEifQ==