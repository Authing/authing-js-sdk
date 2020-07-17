"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuthenticationClient = void 0;
const auth_basic_register_1 = require("./../graphqlapi/auth.basic.register");
const encryption_1 = require("./../utils/encryption");
class BasicAuthenticationClient {
    constructor(options, graphqlClient, tokenProvider) {
        this.options = options;
        this.graphqlClient = graphqlClient;
        this.tokenProvider = tokenProvider;
    }
    /**
     * 注册
     *
     * @memberof BasicAuthenticationClient
     */
    async register(userInfo) {
        userInfo.registerInClient = this.options.userPoolId;
        if (userInfo.password) {
            userInfo.password = encryption_1.encrypt(userInfo.password, this.options.encrptionPublicKey);
        }
        const res = await auth_basic_register_1.register(this.graphqlClient, this.tokenProvider, {
            userInfo
        });
        return res.register;
    }
}
exports.BasicAuthenticationClient = BasicAuthenticationClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNBdXRoZW50aWNhdGlvbkNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXV0aC9CYXNpY0F1dGhlbnRpY2F0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZFQUErRDtBQUMvRCxzREFBZ0Q7QUFLaEQsTUFBYSx5QkFBeUI7SUFLcEMsWUFDRSxPQUFvQyxFQUNwQyxhQUE0QixFQUM1QixhQUEwQztRQUUxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBMkI7UUFDeEMsUUFBUSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3BELElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUNyQixRQUFRLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQ3pCLFFBQVEsQ0FBQyxRQUFRLEVBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQ2hDLENBQUM7U0FDSDtRQUVELE1BQU0sR0FBRyxHQUFHLE1BQU0sOEJBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDakUsUUFBUTtTQUNULENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFsQ0QsOERBa0NDIn0=