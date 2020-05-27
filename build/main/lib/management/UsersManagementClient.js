"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersManagementClient = void 0;
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
}
exports.UsersManagementClient = UsersManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJzTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5R0FBcUY7QUFDckYscUZBQXNFO0FBQ3RFLCtFQUE0RDtBQUU1RCxpRkFBOEQ7QUFDOUQscUZBQW1FO0FBRW5FLHNEQUFnRDtBQUloRCxpSEFBNkY7QUFFN0YsTUFBYSxxQkFBcUI7SUFLaEMsWUFBWSxPQUFnQyxFQUFFLGFBQTRCLEVBQUUsYUFBc0M7UUFDaEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7SUFDcEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBYztRQUN6QixNQUFNLEdBQUcsR0FBUSxNQUFNLHFDQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3hJLE9BQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQTtJQUN4QixDQUFDO0lBR0Q7Ozs7OztPQU1HO0lBQ0gsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFpQjtRQUNoQyxNQUFNLEdBQUcsR0FBUSxNQUFNLHFDQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDdkksT0FBTyxHQUFHLENBQUMsV0FB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