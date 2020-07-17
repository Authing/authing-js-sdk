import { register } from './../graphqlapi/auth.basic.register';
import { encrypt } from './../utils/encryption';
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
        userInfo.registerInClient = this.options.userPoolId;
        if (userInfo.password) {
            userInfo.password = encrypt(userInfo.password, this.options.encrptionPublicKey);
        }
        const res = await register(this.graphqlClient, this.tokenProvider, {
            userInfo
        });
        return res.register;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNBdXRoZW50aWNhdGlvbkNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXV0aC9CYXNpY0F1dGhlbnRpY2F0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLaEQsTUFBTSxPQUFPLHlCQUF5QjtJQUtwQyxZQUNFLE9BQW9DLEVBQ3BDLGFBQTRCLEVBQzVCLGFBQTBDO1FBRTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUEyQjtRQUN4QyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDcEQsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFO1lBQ3JCLFFBQVEsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUN6QixRQUFRLENBQUMsUUFBUSxFQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUNoQyxDQUFDO1NBQ0g7UUFFRCxNQUFNLEdBQUcsR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDakUsUUFBUTtTQUNULENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0NBQ0YifQ==