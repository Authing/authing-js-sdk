"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersManagementClient = void 0;
const management_users_passwordLessForceLogin_1 = require("./../graphqlapi/management.users.passwordLessForceLogin");
const management_users_interConnections_1 = require("./../graphqlapi/management.users.interConnections");
const management_users_delete_1 = require("./../graphqlapi/management.users.delete");
const management_users_get_1 = require("./../graphqlapi/management.users.get");
const management_users_list_1 = require("./../graphqlapi/management.users.list");
const management_users_create_1 = require("./../graphqlapi/management.users.create");
const encryption_1 = require("./../utils/encryption");
const management_users_createInterConnection_1 = require("../graphqlapi/management.users.createInterConnection");
class UsersManagementClient {
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
        const res = await management_users_delete_1.removeUsers(this.graphqlClient, this.tokenProvider, { registerInClient: this.options.userPoolId, ids: [userId] });
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
        const res = await management_users_delete_1.removeUsers(this.graphqlClient, this.tokenProvider, { registerInClient: this.options.userPoolId, ids: userIds });
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
        const res = await management_users_get_1.user(this.graphqlClient, this.tokenProvider, { registerInClient: this.options.userPoolId, id: userId });
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
        const res = await management_users_list_1.users(this.graphqlClient, this.tokenProvider, Object.assign({}, { page, count }, { registerInClient: this.options.userPoolId }));
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
            options.userInfo.password = encryption_1.encrypt(options.userInfo.password, this.options.encrptionPublicKey);
        }
        userInfo.registerInClient = this.options.userPoolId;
        const data = await management_users_create_1.register(this.graphqlClient, this.tokenProvider, options);
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
        const res = await management_users_createInterConnection_1.createInterConnection(this.graphqlClient, this.tokenProvider, options);
        return res.createInterConnection;
    }
    /**
     * 查询用户池具备的跨用户池关联能力
     *
     * @returns
     * @memberof UsersManagementClient
     */
    async interConnections() {
        const res = await management_users_interConnections_1.interConnections(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_users_passwordLessForceLogin_1.passwordLessForceLogin(this.graphqlClient, this.tokenProvider, {
            userPoolId: this.options.userPoolId,
            userId
        });
        return res.passwordLessForceLogin;
    }
}
exports.UsersManagementClient = UsersManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJzTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxSEFBaUc7QUFDakcseUdBQXFGO0FBQ3JGLHFGQUFzRTtBQUN0RSwrRUFBNEQ7QUFFNUQsaUZBQThEO0FBQzlELHFGQUFtRTtBQUVuRSxzREFBZ0Q7QUFJaEQsaUhBQTZGO0FBRTdGLE1BQWEscUJBQXFCO0lBS2hDLFlBQVksT0FBZ0MsRUFBRSxhQUE0QixFQUFFLGFBQXNDO1FBQ2hILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO0lBQ3BDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQWM7UUFDekIsTUFBTSxHQUFHLEdBQVEsTUFBTSxxQ0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN4SSxPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUE7SUFDeEIsQ0FBQztJQUdEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBaUI7UUFDaEMsTUFBTSxHQUFHLEdBQVEsTUFBTSxxQ0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ3ZJLE9BQU8s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