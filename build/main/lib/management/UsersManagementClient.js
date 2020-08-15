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
    async create(userInfo, options) {
        options = options || {};
        options.invitationCode = options.invitationCode || '';
        options.keepPassword = options.keepPassword || false;
        if (!userInfo.phone &&
            !userInfo.email &&
            !userInfo.username &&
            !userInfo.unionid) {
            this.options.onError(new Error('Please provide at least phone, email, username or unionid'));
        }
        if (userInfo.password) {
            userInfo.password = encryption_1.encrypt(userInfo.password, this.options.encrptionPublicKey);
        }
        userInfo.registerInClient = this.options.userPoolId;
        const data = await management_users_create_1.register(this.graphqlClient, this.tokenProvider, Object.assign({ userInfo }, options));
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