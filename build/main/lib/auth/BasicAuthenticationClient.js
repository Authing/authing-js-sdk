"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAuthenticationClient = void 0;
const encryption_1 = require("./../utils/encryption");
const auth_basic_register_1 = require("./../graphqlapi/auth.basic.register");
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
        if (userInfo.password) {
            userInfo.password = encryption_1.encrypt(userInfo.password, this.options.encrptionPublicKey);
        }
        const res = await auth_basic_register_1.register(this.graphqlClient, this.tokenProvider, Object.assign(userInfo, { registerInClient: this.options.userPoolId }));
        return res.register;
    }
}
exports.BasicAuthenticationClient = BasicAuthenticationClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNBdXRoZW50aWNhdGlvbkNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXV0aC9CYXNpY0F1dGhlbnRpY2F0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFnRDtBQUNoRCw2RUFBK0Q7QUFLL0QsTUFBYSx5QkFBeUI7SUFLcEMsWUFBWSxPQUFvQyxFQUFFLGFBQTRCLEVBQUUsYUFBMEM7UUFDeEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQWE7UUFDMUIsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtTQUNoRjtRQUNELE1BQU0sR0FBRyxHQUFRLE1BQU0sOEJBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUE7SUFDckIsQ0FBQztDQUNGO0FBdkJELDhEQXVCQyJ9