import { interConnections } from './../graphqlapi/management.users.interConnections';
import { removeUsers } from './../graphqlapi/management.users.delete';
import { user } from './../graphqlapi/management.users.get';
import { users } from './../graphqlapi/management.users.list';
import { register } from './../graphqlapi/management.users.create';
import { encrypt } from './../utils/encryption';
import { createInterConnection } from '../graphqlapi/management.users.createInterConnection';
export class UsersManagementClient {
    constructor(options, graphqlClient, tokenProvider) {
        this.options = options;
        this.graphqlClient = graphqlClient;
        this.tokenProvider = tokenProvider;
    }
    /**
     * 删除用户
     *
     * @param {string} userId
     * @returns
     * @memberof UsersManagementClient
     */
    async delete(userId) {
        const res = await removeUsers(this.graphqlClient, this.tokenProvider, { registerInClient: this.options.userPoolId, ids: [userId] });
        return res.removeUsers;
    }
    /**
     * 批量删除用户
     *
     * @param {string[]} userIds
     * @returns
     * @memberof UsersManagementClient
     */
    async deleteMany(userIds) {
        const res = await removeUsers(this.graphqlClient, this.tokenProvider, { registerInClient: this.options.userPoolId, ids: userIds });
        return res.removeUsers;
    }
    /**
     * 获取用户详情
     *
     * @param {string} userId
     * @returns
     * @memberof UsersManagementClient
     */
    async get(userId) {
        const res = await user(this.graphqlClient, this.tokenProvider, { registerInClient: this.options.userPoolId, id: userId });
        return res.user;
    }
    /**
     * page: 页码数, 从 0 开始
     *
     * @param {{ page: number, count: number }} options
     * @returns
     * @memberof UsersManagementClient
     */
    async list(page, count) {
        page = page || 0;
        count = count || 10;
        const res = await users(this.graphqlClient, this.tokenProvider, Object.assign({}, { page, count }, { registerInClient: this.options.userPoolId }));
        return res.users;
    }
    /**
     *
     * 以管理员身份创建用户
     * @param {{
     *     userInfo: UserRegisterInput,
     *     invitationCode?: string,
     *     keepPassword?: boolean
     *   }} options
     * @returns
     * @memberof UsersManagementClient
     */
    async create(options) {
        let { userInfo } = options;
        options.invitationCode = options.invitationCode || "";
        options.keepPassword = options.keepPassword || false;
        if (!userInfo.phone && !userInfo.email && !userInfo.username && !userInfo.unionid) {
            this.options.onError(new Error("Please provide at least phone, email, username or unionid"));
        }
        if (options.userInfo.password) {
            options.userInfo.password = encrypt(options.userInfo.password, this.options.encrptionPublicKey);
        }
        userInfo.registerInClient = this.options.userPoolId;
        const data = await register(this.graphqlClient, this.tokenProvider, options);
        return data.register;
    }
    /**
     * 建立跨用户池的用户关联
     *
     * maxAge 单位为 s
     *
     * @param {{
     *     sourceUserPoolId: string,
     *     sourceUserId: string,
     *     targetUserPoolId: string,
     *     targetUserId: string,
     *     maxAge: number
     *   }} options
     * @memberof UsersManagementClient
     */
    async createInterConnection(options) {
        const res = await createInterConnection(this.graphqlClient, this.tokenProvider, options);
        return res.createInterConnection;
    }
    /**
     * 查询用户池具备的跨用户池关联能力
     *
     * @returns
     * @memberof UsersManagementClient
     */
    async interConnections() {
        const res = await interConnections(this.graphqlClient, this.tokenProvider, {
            userPoolId: this.options.userPoolId
        });
        return res.interConnections;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJzTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSWhELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTdGLE1BQU0sT0FBTyxxQkFBcUI7SUFLaEMsWUFBWSxPQUFnQyxFQUFFLGFBQTRCLEVBQUUsYUFBc0M7UUFDaEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7SUFDcEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBYztRQUN6QixNQUFNLEdBQUcsR0FBUSxNQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDeEksT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFBO0lBQ3hCLENBQUM7SUFHRDs7Ozs7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