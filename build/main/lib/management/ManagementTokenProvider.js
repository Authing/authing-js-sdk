"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementTokenProvider = void 0;
const graphql_1 = require("../utils/graphql");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
class ManagementTokenProvider {
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
        const res = await graphql_1.graphqlRequest({
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
        const res = await graphql_1.graphqlRequest({
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
        if (this._accessToken &&
            this._accessTokenExpriredAt - +new Date() >= 3600 * 1000) {
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
        const decoded = jwt_decode_1.default(this._accessToken);
        const { exp } = decoded;
        this._accessTokenExpriredAt = exp * 1000;
        return this._accessToken;
    }
}
exports.ManagementTokenProvider = ManagementTokenProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlbWVudFRva2VuUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvTWFuYWdlbWVudFRva2VuUHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsOENBQWtEO0FBRWxELDREQUFtQztBQUVuQyxNQUFhLHVCQUF1QjtJQVVsQyxZQUFZLE9BQWdDLEVBQUUsYUFBNEI7UUFDeEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLG9CQUFvQjtRQUN4QixNQUFNLEdBQUcsR0FBUSxNQUFNLHdCQUFjLENBQUM7WUFDcEMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtZQUM5QyxLQUFLLEVBQUUsK0pBQStKO1lBQ3RLLFNBQVMsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2dCQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO2FBQzVCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLFlBQVk7UUFDaEIsTUFBTSxHQUFHLEdBQVEsTUFBTSx3QkFBYyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0I7WUFDOUMsS0FBSyxFQUFFOzs7O1FBSUw7WUFDRixTQUFTLEVBQUU7Z0JBQ1QsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtnQkFDbkMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQy9CO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxjQUFjO1FBQ2xCLDZCQUE2QjtRQUM3QixJQUNFLElBQUksQ0FBQyxZQUFZO1lBQ2pCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLElBQUksRUFDeEQ7WUFDQSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUI7UUFDRCxPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLHlCQUF5QjtRQUM3QixZQUFZO1FBQ1osSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkIsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDakQ7YUFBTTtZQUNMLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLE1BQU0sT0FBTyxHQUF1QixvQkFBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUE1RkQsMERBNEZDIn0=