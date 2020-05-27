import { BasicAuthenticationClient } from './BasicAuthenticationClient';
import { AuthenticationTokenProvider } from './AuthenticationTokenProvider';
import { checkLoginStatus } from './../graphqlapi/auth.checkLoginStatus';
import { GraphqlClient } from './../common/GraphqlClient';
const DEFAULT_OPTIONS = {
    timeout: 10000,
    encrptionPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`,
    onError: (err) => { throw err; },
    enableAccessTokenCache: true,
    host: {
        graphqlApiEndpoint: "https://core.authing.cn/graphql",
        restApiBaseHost: "https://core.authing.cn"
    }
};
export class AuthenticationClient {
    constructor(options) {
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
        // 子模块初始化顺序: GraphqlClient -> ManagementTokenProvider -> Others
        this.graphqlClient = new GraphqlClient(this.options.host.graphqlApiEndpoint, this.options.userPoolId);
        this.tokenProvider = new AuthenticationTokenProvider(this.options);
        this.basic = new BasicAuthenticationClient(this.options, this.graphqlClient, this.tokenProvider);
    }
    async checkLoginStatus(token) {
        const res = await checkLoginStatus(this.graphqlClient, this.tokenProvider, { token });
        return res.checkLoginStatus;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2F1dGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzFELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLE9BQU8sRUFBRSxLQUFLO0lBQ2Qsa0JBQWtCLEVBQUU7Ozs7O3lCQUtHO0lBQ3ZCLE9BQU8sRUFBRSxDQUFDLEdBQVUsRUFBRSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUEsQ0FBQyxDQUFDO0lBQ3RDLHNCQUFzQixFQUFFLElBQUk7SUFDNUIsSUFBSSxFQUFFO1FBQ0osa0JBQWtCLEVBQUUsaUNBQWlDO1FBQ3JELGVBQWUsRUFBRSx5QkFBeUI7S0FDM0M7Q0FDRixDQUFBO0FBRUQsTUFBTSxPQUFPLG9CQUFvQjtJQVMvQixZQUFZLE9BQW9DO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQzFELCtEQUErRDtRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDckcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDJCQUEyQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUkseUJBQXlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNsRyxDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQWE7UUFDbEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQ3JGLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFBO0lBQzdCLENBQUM7Q0FDRiJ9