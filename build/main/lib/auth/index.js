"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationClient = void 0;
const BasicAuthenticationClient_1 = require("./BasicAuthenticationClient");
const AuthenticationTokenProvider_1 = require("./AuthenticationTokenProvider");
const auth_checkLoginStatus_1 = require("./../graphqlapi/auth.checkLoginStatus");
const GraphqlClient_1 = require("./../common/GraphqlClient");
const auth_sendVerifyEmail_1 = require("../graphqlapi/auth.sendVerifyEmail");
const DEFAULT_OPTIONS = {
    timeout: 10000,
    encrptionPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`,
    onError: (err) => {
        throw err;
    },
    enableAccessTokenCache: true,
    host: {
        graphqlApiEndpoint: 'https://core.authing.cn/graphql',
        restApiBaseHost: 'https://core.authing.cn',
    },
};
class AuthenticationClient {
    constructor(options) {
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
        // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
        this.graphqlClient = new GraphqlClient_1.GraphqlClient(this.options.host.graphqlApiEndpoint, this.options.userPoolId);
        this.tokenProvider = new AuthenticationTokenProvider_1.AuthenticationTokenProvider(this.options);
        this.basic = new BasicAuthenticationClient_1.BasicAuthenticationClient(this.options, this.graphqlClient, this.tokenProvider);
    }
    /**
     * 检测 AccessToken 所属用户的登录状态
     * @param token 用户 AccessToken
     */
    async checkLoginStatus(token) {
        const res = await auth_checkLoginStatus_1.checkLoginStatus(this.graphqlClient, this.tokenProvider, {
            token,
        });
        return res.checkLoginStatus;
    }
    /**
     * 想邮箱中发送验证邮件
     * @param email 用户邮箱
     */
    async sendVerifyEmail(email) {
        const res = await auth_sendVerifyEmail_1.sendVerifyEmail(this.graphqlClient, this.tokenProvider, {
            email,
            client: this.options.userPoolId,
        });
        return res.sendVerifyEmail;
    }
}
exports.AuthenticationClient = AuthenticationClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2F1dGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkVBQXdFO0FBQ3hFLCtFQUE0RTtBQUM1RSxpRkFBeUU7QUFDekUsNkRBQTBEO0FBRTFELDZFQUFxRTtBQUVyRSxNQUFNLGVBQWUsR0FBRztJQUN0QixPQUFPLEVBQUUsS0FBSztJQUNkLGtCQUFrQixFQUFFOzs7Ozt5QkFLRztJQUN2QixPQUFPLEVBQUUsQ0FBQyxHQUFVLEVBQUUsRUFBRTtRQUN0QixNQUFNLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFDRCxzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLElBQUksRUFBRTtRQUNKLGtCQUFrQixFQUFFLGlDQUFpQztRQUNyRCxlQUFlLEVBQUUseUJBQXlCO0tBQzNDO0NBQ0YsQ0FBQztBQUVGLE1BQWEsb0JBQW9CO0lBUS9CLFlBQVksT0FBb0M7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDM0QsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQ3hCLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUkseURBQTJCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxxREFBeUIsQ0FDeEMsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLE1BQU0sd0NBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3pFLEtBQUs7U0FDTixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFhO1FBQ2pDLE1BQU0sR0FBRyxHQUFHLE1BQU0sc0NBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEUsS0FBSztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7U0FDaEMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7Q0FDRjtBQTdDRCxvREE2Q0MifQ==