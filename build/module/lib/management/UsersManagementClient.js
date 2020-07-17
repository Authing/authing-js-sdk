import { createUserWithoutAuthentication } from './../graphqlapi/management.users.createUserWithoutAuthentication';
import { passwordLessForceLogin } from './../graphqlapi/management.users.passwordLessForceLogin';
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
        const res = await removeUsers(this.graphqlClient, this.tokenProvider, {
            registerInClient: this.options.userPoolId,
            ids: [userId]
        });
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
        const res = await removeUsers(this.graphqlClient, this.tokenProvider, {
            registerInClient: this.options.userPoolId,
            ids: userIds
        });
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
        const res = await user(this.graphqlClient, this.tokenProvider, {
            registerInClient: this.options.userPoolId,
            id: userId
        });
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
        options.invitationCode = options.invitationCode || '';
        options.keepPassword = options.keepPassword || false;
        if (!userInfo.phone &&
            !userInfo.email &&
            !userInfo.username &&
            !userInfo.unionid) {
            this.options.onError(new Error('Please provide at least phone, email, username or unionid'));
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
    /**
     * 管理员让用户强制登录，无需检测任何账号密码、验证码
     *
     * @memberof UsersManagementClient
     */
    async passwordLessForceLogin(userId) {
        const res = await passwordLessForceLogin(this.graphqlClient, this.tokenProvider, {
            userPoolId: this.options.userPoolId,
            userId
        });
        return res.passwordLessForceLogin;
    }
    /**
     *
     *
     * @memberof UsersManagementClient
     */
    async createUserWithoutAuthentication(userInfo, forceLogin) {
        forceLogin = forceLogin || false;
        const res = await createUserWithoutAuthentication(this.graphqlClient, this.tokenProvider, {
            userPoolId: this.options.userPoolId,
            userInfo,
            forceLogin
        });
        return res.createUserWithoutAuthentication;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJzTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUNuSCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR2hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRzdGLE1BQU0sT0FBTyxxQkFBcUI7SUFLaEMsWUFDRSxPQUFnQyxFQUNoQyxhQUE0QixFQUM1QixhQUFzQztRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFjO1FBQ3pCLE1BQU0sR0FBRyxHQUFHLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFD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