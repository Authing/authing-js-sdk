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
        const res = await CreateOIDCApp(this.graphqlClient, this.tokenProvider, app);
        return res.CreateOIDCApp;
    }
    async oidcProviderByDomain(domain) {
        const res = await oidcProviderByDomain(this.graphqlClient, this.tokenProvider, { domain });
        return res.QueryOIDCAppInfoByDomain;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQ29ubmVjdGlvbk1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQU1yRixNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQVksT0FBZ0MsRUFBRSxhQUE0QixFQUFFLGFBQXNDO1FBQ2hILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUU7UUFDdEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDakMsSUFBSTtZQUNKLEtBQUs7U0FDTixDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUE7SUFDM0IsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUE0QjtRQUNuRCxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDdEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsT0FBTyxFQUFFLEVBQUU7WUFDWCxhQUFhLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDO1lBQ3RFLDRCQUE0QixFQUFFLG9CQUFvQjtZQUNsRCxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUMxQiw4QkFBOEIsRUFBRSxPQUFPO1lBQ3ZDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsV0FBVyxFQUFFLEVBQUU7WUFDZiwyQkFBMkIsRUFBRSxLQUFLO1lBQ2xDLGlCQUFpQixFQUFFLE1BQU07WUFDekIscUJBQXFCLEVBQUUsTUFBTTtZQUM3QixZQUFZLEVBQUUsTUFBTTtZQUNwQixhQUFhLEVBQUUsRUFBRTtTQUNsQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBRVAsTUFBTSxHQUFHLEdBQUcsTUFBTSxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzVFLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQTtJQUMxQixDQUFDO0lBRUQsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE1BQWM7UUFDdkMsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQzFGLE9BQU8sR0FBRyxDQUFDLHdCQUF3QixDQUFBO0lBQ3JDLENBQUM7Q0FDRiJ9