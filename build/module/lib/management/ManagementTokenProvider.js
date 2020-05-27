import { graphqlRequest } from '../utils/graphql';
import jwtDecode from "jwt-decode";
export class ManagementTokenProvider {
    constructor(options, graphqlClient) {
        this.options = options;
        this.graphqlClient = graphqlClient;
    }
    /**
     * 发送 GraphQL 接口请求获取 accessToken
     *
     * @returns
     * @memberof ManagementTokenProvider
     */
    async getClientWhenSdkInit() {
        const res = await graphqlRequest({
            endpoint: this.options.host.graphqlApiEndpoint,
            query: `query getClientWhenSdkInit($clientId: String!, $secret: String!) {\n  getClientWhenSdkInit(clientId: $clientId, secret: $secret) {\n    accessToken\n  }\n}\n`,
            variables: {
                clientId: this.options.userPoolId,
                secret: this.options.secret
            }
        });
        return res.getClientWhenSdkInit.accessToken;
    }
    /**
     * 刷新 accessToken
     *
     * @memberof ManagementTokenProvider
     */
    async refreshToken() {
        const res = await graphqlRequest({
            endpoint: this.options.host.graphqlApiEndpoint,
            query: `mutation refreshAccessToken($userPoolId: String!, $accessToken: String!){
        refreshAccessToken(userPoolId: $userPoolId, accessToken: $accessToken) {
          accessToken
        }
      }`,
            variables: {
                userPoolId: this.options.userPoolId,
                accessToken: this._accessToken
            }
        });
        return res.refreshAccessToken.accessToken;
    }
    /**
     * 获取用户池 accessToken
     *
     * @returns {Promise<string>}
     * @memberof ManagementTokenProvider
     */
    async getAccessToken() {
        // 缓存到 accessToken 过期前 3600 s
        if (this._accessToken && this._accessTokenExpriredAt - (+new Date()) >= 3600 * 1000) {
            return this._accessToken;
        }
        return await this.getAccessTokenFromServver();
    }
    /**
     * 刷新用户池 accessToken
     *
     * @returns
     * @memberof ManagementTokenProvider
     */
    async getAccessTokenFromServver() {
        // 如果是通过密钥刷新 
        let accessToken = null;
        if (this.options.secret) {
            accessToken = await this.getClientWhenSdkInit();
        }
        else {
            accessToken = await this.refreshToken();
        }
        this._accessToken = accessToken;
        const decoded = jwtDecode(this._accessToken);
        const { exp } = decoded;
        this._accessTokenExpriredAt = exp * 1000;
        return this._accessToken;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlbWVudFRva2VuUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvTWFuYWdlbWVudFRva2VuUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQTtBQUVsQyxNQUFNLE9BQU8sdUJBQXVCO0lBV2xDLFlBQVksT0FBZ0MsRUFBRSxhQUE0QjtRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUNwQyxDQUFDO0lBR0Q7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsb0JBQW9CO1FBQ3hCLE1BQU0sR0FBRyxHQUFRLE1BQU0sY0FBYyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFDOUMsS0FBSyxFQUFFLCtKQUErSjtZQUN0SyxTQUFTLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtnQkFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTthQUM1QjtTQUNGLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQTtJQUM3QyxDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxZQUFZO1FBQ2hCLE1BQU0sR0FBRyxHQUFRLE1BQU0sY0FBYyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFDOUMsS0FBSyxFQUFFOzs7O1FBSUw7WUFDRixTQUFTLEVBQUU7Z0JBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtnQkFDbkMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQy9CO1NBQ0YsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFBO0lBQzNDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxjQUFjO1FBQ2xCLDZCQUE2QjtRQUM3QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksRUFBRTtZQUNuRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7U0FDekI7UUFDRCxPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUE7SUFDL0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLHlCQUF5QjtRQUU3QixhQUFhO1FBQ2IsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFBO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkIsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7U0FDaEQ7YUFBTTtZQUNMLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtTQUN4QztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFBO1FBQy9CLE1BQU0sT0FBTyxHQUF1QixTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2hFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUE7UUFDdkIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUE7UUFDeEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQzFCLENBQUM7Q0FDRiJ9