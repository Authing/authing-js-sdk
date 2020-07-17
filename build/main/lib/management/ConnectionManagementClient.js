"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionManagementClient = void 0;
const management_connection_oidcProviderByDomain_1 = require("./../graphqlapi/management.connection.oidcProviderByDomain");
const management_connection_createOidcProvider_1 = require("./../graphqlapi/management.connection.createOidcProvider");
const management_connection_oidcProviders_1 = require("./../graphqlapi/management.connection.oidcProviders");
class ConnectionManagementClient {
    constructor(options, graphqlClient, tokenProvider) {
        this.options = options;
        this.graphqlClient = graphqlClient;
        this.tokenProvider = tokenProvider;
    }
    async oidcProviders(page = 0, count = 10) {
        const res = await management_connection_oidcProviders_1.GetOIDCAppList(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_connection_createOidcProvider_1.CreateOIDCApp(this.graphqlClient, this.tokenProvider, app);
        return res.CreateOIDCApp;
    }
    async oidcProviderByDomain(domain) {
        const res = await management_connection_oidcProviderByDomain_1.oidcProviderByDomain(this.graphqlClient, this.tokenProvider, { domain });
        return res.QueryOIDCAppInfoByDomain;
    }
}
exports.ConnectionManagementClient = ConnectionManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkhBQWtHO0FBQ2xHLHVIQUF5RjtBQUN6Riw2R0FBcUY7QUFPckYsTUFBYSwwQkFBMEI7SUFLckMsWUFDRSxPQUFnQyxFQUNoQyxhQUE0QixFQUM1QixhQUFzQztRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFO1FBQ3RDLE1BQU0sR0FBRyxHQUFHLE1BQU0sb0RBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUNqQyxJQUFJO1lBQ0osS0FBSztTQUNOLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQTJCO1FBQ2xELEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNqQixFQUFFLEVBQ0Y7WUFDRSxXQUFXLEVBQUUsRUFBRTtZQUNmLEtBQUssRUFBRSxFQUFFO1lBQ1QsV0FBVyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQztZQUNwRSwwQkFBMEIsRUFBRSxvQkFBb0I7WUFDaEQsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3hCLDRCQUE0QixFQUFFLE9BQU87WUFDckMsS0FBSyxFQUFFLEVBQUU7WUFDVCxTQUFTLEVBQUUsRUFBRTtZQUNiLHlCQUF5QixFQUFFLEtBQUs7WUFDaEMsZUFBZSxFQUFFLE1BQU07WUFDdkIsbUJBQW1CLEVBQUUsTUFBTTtZQUMzQixVQUFVLEVBQUUsTUFBTTtZQUNsQixXQUFXLEVBQUUsRUFBRTtTQUNoQixFQUNELEdBQUcsQ0FDSixDQUFDO1FBRUYsTUFBTSxHQUFHLEdBQUcsTUFBTSx3REFBYSxDQUM3QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxFQUNsQixHQUFHLENBQ0osQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUQsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQWM7UUFDdkMsTUFBTSxHQUFHLEdBQUcsTUFBTSxpRUFBb0IsQ0FDcEMsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsRUFBRSxNQUFNLEVBQUUsQ0FDWCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUMsd0JBQXdCLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBN0RELGdFQTZEQyJ9