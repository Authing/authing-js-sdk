import { oidcProviderByDomain } from './../graphqlapi/management.connection.oidcProviderByDomain';
import { CreateOIDCApp } from './../graphqlapi/management.connection.createOidcProvider';
import { GetOIDCAppList } from './../graphqlapi/management.connection.oidcProviders';
export class ConnectionManagementClient {
    constructor(options, graphqlClient, tokenProvider) {
        this.options = options;
        this.graphqlClient = graphqlClient;
        this.tokenProvider = tokenProvider;
    }
    async oidcProviders(page = 0, count = 10) {
        const res = await GetOIDCAppList(this.graphqlClient, this.tokenProvider, {
            clientId: this.options.userPoolId,
            page,
            count
        });
        return res.GetOIDCAppList;
    }
    async createOidcProvider(app) {
        app = Object.assign({}, {
            description: '',
            image: '',
            grant_types: ['authorization_code', 'refresh_token', 'authingToken'],
            token_endpoint_auth_method: 'client_secret_post',
            response_types: ['code'],
            id_token_signed_response_alg: 'HS256',
            _jwks: '',
            _jwks_uri: '',
            authorization_code_expire: '600',
            id_token_expire: '3600',
            access_token_expire: '3600',
            cas_expire: '3600',
            custom_jwks: ''
        }, app);
        const res = await CreateOIDCApp(this.graphqlClient, this.tokenProvider, app);
        return res.CreateOIDCApp;
    }
    async oidcProviderByDomain(domain) {
        const res = await oidcProviderByDomain(this.graphqlClient, this.tokenProvider, { domain });
        return res.QueryOIDCAppInfoByDomain;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQU9yRixNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQ0UsT0FBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsYUFBc0M7UUFFdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRTtRQUN0QyxNQUFNLEdBQUcsR0FBRyxNQUFNLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUNqQyxJQUFJO1lBQ0osS0FBSztTQUNOLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQTJCO1FBQ2xELEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNqQixFQUFFLEVBQ0Y7WUFDRSxXQUFXLEVBQUUsRUFBRTtZQUNmLEtBQUssRUFBRSxFQUFFO1lBQ1QsV0FBVyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQztZQUNwRSwwQkFBMEIsRUFBRSxvQkFBb0I7WUFDaEQsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3hCLDRCQUE0QixFQUFFLE9BQU87WUFDckMsS0FBSyxFQUFFLEVBQUU7WUFDVCxTQUFTLEVBQUUsRUFBRTtZQUNiLHlCQUF5QixFQUFFLEtBQUs7WUFDaEMsZUFBZSxFQUFFLE1BQU07WUFDdkIsbUJBQW1CLEVBQUUsTUFBTTtZQUMzQixVQUFVLEVBQUUsTUFBTTtZQUNsQixXQUFXLEVBQUUsRUFBRTtTQUNoQixFQUNELEdBQUcsQ0FDSixDQUFDO1FBRUYsTUFBTSxHQUFHLEdBQUcsTUFBTSxhQUFhLENBQzdCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLEdBQUcsQ0FDSixDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFFRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsTUFBYztRQUN2QyxNQUFNLEdBQUcsR0FBRyxNQUFNLG9CQUFvQixDQUNwQyxJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxFQUNsQixFQUFFLE1BQU0sRUFBRSxDQUNYLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztJQUN0QyxDQUFDO0NBQ0YifQ==