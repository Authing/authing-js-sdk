"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationClient = void 0;
const BasicAuthenticationClient_1 = require("./BasicAuthenticationClient");
const AuthenticationTokenProvider_1 = require("./AuthenticationTokenProvider");
const auth_checkLoginStatus_1 = require("./../graphqlapi/auth.checkLoginStatus");
const GraphqlClient_1 = require("./../common/GraphqlClient");
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
        restApiBaseHost: 'https://core.authing.cn'
    }
};
class AuthenticationClient {
    constructor(options) {
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
        // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
        this.graphqlClient = new GraphqlClient_1.GraphqlClient(this.options.host.graphqlApiEndpoint, this.options.userPoolId);
        this.tokenProvider = new AuthenticationTokenProvider_1.AuthenticationTokenProvider(this.options);
        this.basic = new BasicAuthenticationClient_1.BasicAuthenticationClient(this.options, this.graphqlClient, this.tokenProvider);
    }
    async checkLoginStatus(token) {
        const res = await auth_checkLoginStatus_1.checkLoginStatus(this.graphqlClient, this.tokenProvider, {
            token
        });
        return res.checkLoginStatus;
    }
}
exports.AuthenticationClient = AuthenticationClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2F1dGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkVBQXdFO0FBQ3hFLCtFQUE0RTtBQUM1RSxpRkFBeUU7QUFDekUsNkRBQTBEO0FBRzFELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLE9BQU8sRUFBRSxLQUFLO0lBQ2Qsa0JBQWtCLEVBQUU7Ozs7O3lCQUtHO0lBQ3ZCLE9BQU8sRUFBRSxDQUFDLEdBQVUsRUFBRSxFQUFFO1FBQ3RCLE1BQU0sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUNELHNCQUFzQixFQUFFLElBQUk7SUFDNUIsSUFBSSxFQUFFO1FBQ0osa0JBQWtCLEVBQUUsaUNBQWlDO1FBQ3JELGVBQWUsRUFBRSx5QkFBeUI7S0FDM0M7Q0FDRixDQUFDO0FBRUYsTUFBYSxvQkFBb0I7SUFRL0IsWUFBWSxPQUFvQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRCwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDeEIsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx5REFBMkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHFEQUF5QixDQUN4QyxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQWE7UUFDbEMsTUFBTSxHQUFHLEdBQUcsTUFBTSx3Q0FBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDekUsS0FBSztTQUNOLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7Q0FDRjtBQTdCRCxvREE2QkMifQ==