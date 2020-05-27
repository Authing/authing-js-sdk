"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionManagementClient = void 0;
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
            "grant_types": ["authorization_code", "refresh_token"],
            "token_endpoint_auth_method": "client_secret_post",
            "response_types": ["code"],
            "id_token_signed_response_alg": "HS256",
            "id_token_encrypted_response_alg": "不加密",
            "id_token_encrypted_response_enc": "不加密",
            "userinfo_signed_response_alg": "不加密",
            "userinfo_encrypted_response_alg": "不加密",
            "userinfo_encrypted_response_enc": "不加密",
            "request_object_signing_alg": "不加密",
            "request_object_encryption_alg": "不加密",
            "request_object_encryption_enc": "不加密",
            "jwks": "",
            "jwks_uri": "",
            "authorization_code_expire": "600",
            "id_token_expire": "3600",
            "access_token_expire": "3600",
            "cas_expire": "3600",
        }, app);
        const res = await management_connection_createOidcProvider_1.CreateOIDCApp(this.graphqlClient, this.tokenProvider, app);
        return res.CreateOIDCApp;
    }
}
exports.ConnectionManagementClient = ConnectionManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUhBQXlGO0FBQ3pGLDZHQUFxRjtBQU1yRixNQUFhLDBCQUEwQjtJQUtyQyxZQUFZLE9BQWdDLEVBQUUsYUFBNEIsRUFBRSxhQUFzQztRQUNoSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUNwQyxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFO1FBQ3RDLE1BQU0sR0FBRyxHQUFHLE1BQU0sb0RBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUNqQyxJQUFJO1lBQ0osS0FBSztTQUNOLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQTRCO1FBQ25ELEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUN0QixhQUFhLEVBQUUsRUFBRTtZQUNqQixPQUFPLEVBQUUsRUFBRTtZQUNYLGFBQWEsRUFBRSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQztZQUN0RCw0QkFBNEIsRUFBRSxvQkFBb0I7WUFDbEQsZ0JBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDMUIsOEJBQThCLEVBQUUsT0FBTztZQUN2QyxpQ0FBaUMsRUFBRSxLQUFLO1lBQ3hDLGlDQUFpQyxFQUFFLEtBQUs7WUFDeEMsOEJBQThCLEVBQUUsS0FBSztZQUNyQyxpQ0FBaUMsRUFBRSxLQUFLO1lBQ3hDLGlDQUFpQyxFQUFFLEtBQUs7WUFDeEMsNEJBQTRCLEVBQUUsS0FBSztZQUNuQywrQkFBK0IsRUFBRSxLQUFLO1lBQ3RDLCtCQUErQixFQUFFLEtBQUs7WUFDdEMsTUFBTSxFQUFFLEVBQUU7WUFDVixVQUFVLEVBQUUsRUFBRTtZQUNkLDJCQUEyQixFQUFFLEtBQUs7WUFDbEMsaUJBQWlCLEVBQUUsTUFBTTtZQUN6QixxQkFBcUIsRUFBRSxNQUFNO1lBQzdCLFlBQVksRUFBRSxNQUFNO1NBQ3JCLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDUCxNQUFNLEdBQUcsR0FBRyxNQUFNLHdEQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVFLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQTtJQUMxQixDQUFDO0NBQ0Y7QUE5Q0QsZ0VBOENDIn0=