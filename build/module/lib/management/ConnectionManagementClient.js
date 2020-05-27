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
        const res = await CreateOIDCApp(this.graphqlClient, this.tokenProvider, app);
        return res.CreateOIDCApp;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQU1yRixNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQVksT0FBZ0MsRUFBRSxhQUE0QixFQUFFLGFBQXNDO1FBQ2hILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUU7UUFDdEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDakMsSUFBSTtZQUNKLEtBQUs7U0FDTixDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUE7SUFDM0IsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUE0QjtRQUNuRCxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDdEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsT0FBTyxFQUFFLEVBQUU7WUFDWCxhQUFhLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLENBQUM7WUFDdEQsNEJBQTRCLEVBQUUsb0JBQW9CO1lBQ2xELGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDO1lBQzFCLDhCQUE4QixFQUFFLE9BQU87WUFDdkMsaUNBQWlDLEVBQUUsS0FBSztZQUN4QyxpQ0FBaUMsRUFBRSxLQUFLO1lBQ3hDLDhCQUE4QixFQUFFLEtBQUs7WUFDckMsaUNBQWlDLEVBQUUsS0FBSztZQUN4QyxpQ0FBaUMsRUFBRSxLQUFLO1lBQ3hDLDRCQUE0QixFQUFFLEtBQUs7WUFDbkMsK0JBQStCLEVBQUUsS0FBSztZQUN0QywrQkFBK0IsRUFBRSxLQUFLO1lBQ3RDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsVUFBVSxFQUFFLEVBQUU7WUFDZCwyQkFBMkIsRUFBRSxLQUFLO1lBQ2xDLGlCQUFpQixFQUFFLE1BQU07WUFDekIscUJBQXFCLEVBQUUsTUFBTTtZQUM3QixZQUFZLEVBQUUsTUFBTTtTQUNyQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ1AsTUFBTSxHQUFHLEdBQUcsTUFBTSxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVFLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQTtJQUMxQixDQUFDO0NBQ0YifQ==