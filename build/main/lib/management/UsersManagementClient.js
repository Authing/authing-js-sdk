"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersManagementClient = void 0;
const management_users_createUserWithoutAuthentication_1 = require("./../graphqlapi/management.users.createUserWithoutAuthentication");
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
        const res = await management_users_delete_1.removeUsers(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_users_delete_1.removeUsers(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_users_get_1.user(this.graphqlClient, this.tokenProvider, {
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
        options.invitationCode = options.invitationCode || '';
        options.keepPassword = options.keepPassword || false;
        if (!userInfo.phone &&
            !userInfo.email &&
            !userInfo.username &&
            !userInfo.unionid) {
            this.options.onError(new Error('Please provide at least phone, email, username or unionid'));
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
    /**
     *
     *
     * @memberof UsersManagementClient
     */
    async createUserWithoutAuthentication(userInfo, forceLogin) {
        forceLogin = forceLogin || false;
        const res = await management_users_createUserWithoutAuthentication_1.createUserWithoutAuthentication(this.graphqlClient, this.tokenProvider, {
            userPoolId: this.options.userPoolId,
            userInfo,
            forceLogin
        });
        return res.createUserWithoutAuthentication;
    }
}
exports.UsersManagementClient = UsersManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJzTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1SUFBbUg7QUFDbkgscUhBQWlHO0FBQ2pHLHlHQUFxRjtBQUNyRixxRkFBc0U7QUFDdEUsK0VBQTREO0FBQzVELGlGQUE4RDtBQUM5RCxxRkFBbUU7QUFFbkUsc0RBQWdEO0FBR2hELGlIQUE2RjtBQUc3RixNQUFhLHFCQUFxQjtJQUtoQyxZQUNFLE9BQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGFBQXNDO1FBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQWM7UUFDekIsTUFBTSxHQUFHLEdBQUcsTUFBTSxxQ0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDekMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQWlCO1FBQ2hDLE1BQU0sR0FBRyxHQUFHLE1BQU0scUNBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1lBQ3pDLEdBQUcsRUFBRSxPQUFPO1NBQ2IsQ0FB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