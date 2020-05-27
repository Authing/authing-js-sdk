import { encrypt } from './../utils/encryption';
import { register } from './../graphqlapi/auth.basic.register';
export class BasicAuthenticationClient {
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
            userInfo.password = encrypt(userInfo.password, this.options.encrptionPublicKey);
        }
        const res = await register(this.graphqlClient, this.tokenProvider, Object.assign(userInfo, { registerInClient: this.options.userPoolId }));
        return res.register;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNBdXRoZW50aWNhdGlvbkNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXV0aC9CYXNpY0F1dGhlbnRpY2F0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLL0QsTUFBTSxPQUFPLHlCQUF5QjtJQUtwQyxZQUFZLE9BQW9DLEVBQUUsYUFBNEIsRUFBRSxhQUEwQztRQUN4SCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBYTtRQUMxQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDckIsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDaEY7UUFDRCxNQUFNLEdBQUcsR0FBUSxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUE7SUFDckIsQ0FBQztDQUNGIn0=