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
            "description": "",
            "image": "",
            "grant_types": ["authorization_code", "refresh_token", "authingToken"],
            "token_endpoint_auth_method": "client_secret_post",
            "response_types": ["code"],
            "id_token_signed_response_alg": "HS256",
            "_jwks": "",
            "_jwks_uri": "",
            "authorization_code_expire": "600",
            "id_token_expire": "3600",
            "access_token_expire": "3600",
            "cas_expire": "3600",
            "custom_jwks": "",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkhBQWtHO0FBQ2xHLHVIQUF5RjtBQUN6Riw2R0FBcUY7QUFNckYsTUFBYSwwQkFBMEI7SUFLckMsWUFBWSxPQUFnQyxFQUFFLGFBQTRCLEVBQUUsYUFBc0M7UUFDaEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7SUFDcEMsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRTtRQUN0QyxNQUFNLEdBQUcsR0FBRyxNQUFNLG9EQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDakMsSUFBSTtZQUNKLEtBQUs7U0FDTixDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUE7SUFDM0IsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUE0QjtRQUNuRCxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDdEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsT0FBTyxFQUFFLEVBQUU7WUFDWCxhQUFhLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDO1lBQ3RFLDRCQUE0QixFQUFFLG9CQUFvQjtZQUNsRCxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUMxQiw4QkFBOEIsRUFBRSxPQUFPO1lBQ3ZDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsV0FBVyxFQUFFLEVBQUU7WUFDZiwyQkFBMkIsRUFBRSxLQUFLO1lBQ2xDLGlCQUFpQixFQUFFLE1BQU07WUFDekIscUJBQXFCLEVBQUUsTUFBTTtZQUM3QixZQUFZLEVBQUUsTUFBTTtZQUNwQixhQUFhLEVBQUUsRUFBRTtTQUNsQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRVAsTUFBTSxHQUFHLEdBQUcsTUFBTSx3REFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM1RSxPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUE7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFjO1FBQ3ZDLE1BQU0sR0FBRyxHQUFHLE1BQU0saUVBQW9CLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUMxRixPQUFPLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQTtJQUNyQyxDQUFDO0NBQ0Y7QUE3Q0QsZ0VBNkNDIn0=