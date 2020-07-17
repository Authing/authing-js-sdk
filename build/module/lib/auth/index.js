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
    onError: (err) => {
        throw err;
    },
    enableAccessTokenCache: true,
    host: {
        graphqlApiEndpoint: 'https://core.authing.cn/graphql',
        restApiBaseHost: 'https://core.authing.cn'
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
        const res = await checkLoginStatus(this.graphqlClient, this.tokenProvider, {
            token
        });
        return res.checkLoginStatus;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2F1dGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzFELE1BQU0sZUFBZSxHQUFHO0lBQ3RCLE9BQU8sRUFBRSxLQUFLO0lBQ2Qsa0JBQWtCLEVBQUU7Ozs7O3lCQUtHO0lBQ3ZCLE9BQU8sRUFBRSxDQUFDLEdBQVUsRUFBRSxFQUFFO1FBQ3RCLE1BQU0sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUNELHNCQUFzQixFQUFFLElBQUk7SUFDNUIsSUFBSSxFQUFFO1FBQ0osa0JBQWtCLEVBQUUsaUNBQWlDO1FBQ3JELGVBQWUsRUFBRSx5QkFBeUI7S0FDM0M7Q0FDRixDQUFDO0FBRUYsTUFBTSxPQUFPLG9CQUFvQjtJQVEvQixZQUFZLE9BQW9DO1FBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELCtEQUErRDtRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQ3hCLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksMkJBQTJCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx5QkFBeUIsQ0FDeEMsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ2xDLE1BQU0sR0FBRyxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3pFLEtBQUs7U0FDTixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0NBQ0YifQ==