"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementClient = void 0;
const ConnectionManagementClient_1 = require("./ConnectionManagementClient");
const management_isDomainAvaliable_1 = require("./../graphqlapi/management.isDomainAvaliable");
const OrgManagementClient_1 = require("./OrgManagementClient");
const AccessControlManagementClient_1 = require("./AccessControlManagementClient");
const GraphqlClient_1 = require("./../common/GraphqlClient");
const ManagementTokenProvider_1 = require("./ManagementTokenProvider");
const UserpoolManagementClient_1 = require("./UserpoolManagementClient");
const UsersManagementClient_1 = require("./UsersManagementClient");
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
class ManagementClient {
    constructor(options) {
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
        if (!this.options.secret && !this.options.accessToken) {
            this.options.onError(new Error('Init Management Client failed, must provide at least secret or accessToken !'));
        }
        // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
        this.graphqlClient = new GraphqlClient_1.GraphqlClient(this.options.host.graphqlApiEndpoint, this.options.userPoolId);
        this.graphqlClientV2 = new GraphqlClient_1.GraphqlClient(this.options.host.graphqlApiEndpointV2, this.options.userPoolId);
        this.tokenProvider = new ManagementTokenProvider_1.ManagementTokenProvider(this.options, this.graphqlClient);
        this.users = new UsersManagementClient_1.UsersManagementClient(this.options, this.graphqlClient, this.tokenProvider);
        this.userpool = new UserpoolManagementClient_1.UserPoolManagementClient(this.options, this.graphqlClient, this.tokenProvider);
        this.acl = new AccessControlManagementClient_1.AccessControlManagementClient(this.options, this.graphqlClient, this.graphqlClientV2, this.tokenProvider);
        this.org = new OrgManagementClient_1.OrgManagementClient(this.options, this.graphqlClient, this.tokenProvider);
        this.connections = new ConnectionManagementClient_1.ConnectionManagementClient(this.options, this.graphqlClient, this.tokenProvider);
    }
    async isDomainAvaliable(domain) {
        const res = await management_isDomainAvaliable_1.isDomainAvaliable(this.graphqlClient, this.tokenProvider, { domain });
        return res.isDomainAvaliable;
    }
}
exports.ManagementClient = ManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkVBQTBFO0FBQzFFLCtGQUFpRjtBQUNqRiwrREFBNEQ7QUFDNUQsbUZBQWdGO0FBQ2hGLDZEQUEwRDtBQUMxRCx1RUFBb0U7QUFFcEUseUVBQXNFO0FBQ3RFLG1FQUFnRTtBQUVoRSxNQUFNLGVBQWUsR0FBRztJQUN0QixPQUFPLEVBQUUsS0FBSztJQUNkLGtCQUFrQixFQUFFOzs7Ozt5QkFLRztJQUN2QixPQUFPLEVBQUUsQ0FBQyxHQUFVLEVBQUUsRUFBRTtRQUN0QixNQUFNLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFDRCxzQkFBc0IsRUFBRSxJQUFJO0lBQzVCLElBQUksRUFBRTtRQUNKLGtCQUFrQixFQUFFLGlDQUFpQztRQUNyRCxlQUFlLEVBQUUseUJBQXlCO0tBQzNDO0NBQ0YsQ0FBQztBQUVGLE1BQWEsZ0JBQWdCO0lBYzNCLFlBQVksT0FBZ0M7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQ2xCLElBQUksS0FBSyxDQUNQLDhFQUE4RSxDQUMvRSxDQUNGLENBQUM7U0FDSDtRQUVELCtEQUErRDtRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUN4QixDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDZCQUFhLENBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDeEIsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxpREFBdUIsQ0FDOUMsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDZDQUFxQixDQUNwQyxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbURBQXdCLENBQzFDLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSw2REFBNkIsQ0FDMUMsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsZUFBZSxFQUNwQixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLHlDQUFtQixDQUNoQyxJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksdURBQTBCLENBQy9DLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FDbkIsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBYztRQUNwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLGdEQUFpQixDQUNqQyxJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxFQUNsQixFQUFFLE1BQU0sRUFBRSxDQUNYLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUExRUQsNENBMEVDIn0=