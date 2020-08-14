"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlManagementClient = void 0;
const management_acl_userGroupList_1 = require("../graphqlapi/management.acl.userGroupList");
const management_acl_isUserInGroup_1 = require("../graphqlapi/management.acl.isUserInGroup");
const management_acl_groupUserList_1 = require("../graphqlapi/management.acl.groupUserList");
const management_acl_addUserToGroup_1 = require("../graphqlapi/management.acl.addUserToGroup");
const management_acl_addGroupMetadata_1 = require("../graphqlapi/management.acl.addGroupMetadata");
const management_acl_createGroup_1 = require("../graphqlapi/management.acl.createGroup");
const codeGen_1 = require("../../types/codeGen");
const management_acl_addRole_1 = require("../graphqlapi/management.acl.addRole");
const management_acl_addResource_1 = require("../graphqlapi/management.acl.addResource");
const management_acl_allow_1 = require("../graphqlapi/management.acl.allow");
const management_acl_isAllow_1 = require("../graphqlapi/management.acl.isAllow");
const management_acl_assignRole_1 = require("../graphqlapi/management.acl.assignRole");
const management_acl_isDenied_1 = require("../graphqlapi/management.acl.isDenied");
class AccessControlManagementClient {
    constructor(options, graphqlClient, graphqlClientV2, tokenProvider) {
        this.options = options;
        this.graphqlClientV2 = graphqlClientV2;
        this.graphqlClient = graphqlClient;
        this.tokenProvider = tokenProvider;
    }
    /**
     * 创建 Group
     *
     * @param {string} name
     * @param {string} description
     * @returns {Promise<AuthingGroup>}
     * @memberof AccessControlManagementClient
     */
    async createGroup(name, description) {
        const res = await management_acl_createGroup_1.createRBACGroup(this.graphqlClient, this.tokenProvider, {
            input: {
                userPoolId: this.options.userPoolId,
                name,
                description
            }
        });
        return res.createRBACGroup;
    }
    /**
     * 为 Group 添加自定义数据
     *
     * @param {string} groupId
     * @param {string} key
     * @param {*} value
     * @returns {Promise<{ key: string, value: string }>}
     * @memberof AccessControlManagementClient
     */
    async addGroupMetadata(groupId, key, value) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        const res = await management_acl_addGroupMetadata_1.addGroupMetadata(this.graphqlClient, this.tokenProvider, {
            groupId,
            key,
            value
        });
        return res.addGroupMetadata[0];
    }
    /**
     *  添加用户到分组中
     *
     * @param {{
     *     userId: string,
     *     groupId: string
     *   }} options
     * @returns
     * @memberof AccessControlManagementClient
     */
    async addUserToGroup(options) {
        const res = await management_acl_addUserToGroup_1.addUserToRBACGroup(this.graphqlClient, this.tokenProvider, { input: options });
        return res.addUserToRBACGroup;
    }
    /**
     * 判断用户是否在 Group 中
     *
     * @memberof AccessControlManagementClient
     */
    async isUserInGroup(options) {
        const res = await management_acl_isUserInGroup_1.isUserInGroup(this.graphqlClient, this.tokenProvider, options);
        return res.isUserInGroup;
    }
    /**
     * 查询 Group 用户列表
     *
     * @param {string} groupId
     * @param {{
     *     sortBy: string, 默认为 CREATEDAT_DESC
     *     page: number, 默认为 0
     *     count: number 默认为 10
     *   }} options
     * @returns
     * @memberof AccessControlManagementClient
     */
    async groupUserList(groupId, options = {
        sortBy: codeGen_1.SortByEnum.CreatedatDesc,
        page: 0,
        count: 1
    }) {
        const res = await management_acl_groupUserList_1.groupUserList(this.graphqlClient, this.tokenProvider, Object.assign({ _id: groupId }, options));
        return res.rbacGroup.users;
    }
    /**
     * 查询用户所在的分组列表
     *
     */
    async userGroupList(userId) {
        const res = await management_acl_userGroupList_1.userGroupList(this.graphqlClient, this.tokenProvider, {
            _id: userId
        });
        return res.userGroupList;
    }
    async assignRole(roleCode, userIds) {
        const {} = await management_acl_assignRole_1.assignRole(this.graphqlClientV2, this.tokenProvider, {
            code: roleCode,
            userIds
        });
    }
    /**
     * @description 添加角色
     *
     */
    async addRole(code, name, description) {
        const res = await management_acl_addRole_1.addRole(this.graphqlClientV2, this.tokenProvider, {
            code,
            name,
            description
        });
        return res.createRole;
    }
    /**
     * @description 添加资源
     *
     */
    async addResource(code, name, description) {
        const { createResource } = await management_acl_addResource_1.addResource(this.graphqlClientV2, this.tokenProvider, {
            code,
            name,
            description
        });
        return createResource;
    }
    /**
     * @description 允许某个用户/角色操作某个资源
     *
     * @param roleCode: 角色代码
     * @param action: 操作
     * @param resouceCode: 资源代码
     *
     */
    async allow(roleCode, action, resouceCode) {
        const { createResourceRule } = await management_acl_allow_1.allow(this.graphqlClientV2, this.tokenProvider, {
            resouceCode,
            action,
            allow: true,
            roleCode
        });
        return createResourceRule;
    }
    /**
     * @description 允许某个用户/角色操作某个资源
     *
     * @param roleCode: 角色代码
     * @param action: 操作
     * @param resouceCode: 资源代码
     *
     */
    async deny(roleCode, action, resouceCode) {
        const { createResourceRule } = await management_acl_allow_1.allow(this.graphqlClientV2, this.tokenProvider, {
            resouceCode,
            action,
            allow: false,
            roleCode
        });
        return createResourceRule;
    }
    /**
     * @description 判断某个用户是否对某个资源有某个操作权限
     *
     * @param userId: 用户ID
     * @param action: 操作
     * @param resouceCode: 资源代码
     *
     */
    async isAllowed(userId, action, resouceCode) {
        const { isActionAllowed } = await management_acl_isAllow_1.isAllowed(this.graphqlClientV2, this.tokenProvider, {
            resouceCode,
            action,
            userId
        });
        return isActionAllowed;
    }
    /**
     * @description 判断某个用户是否对某个资源没有某个操作权限
     *
     * @param userId: 用户ID
     * @param action: 操作
     * @param resouceCode: 资源代码
     *
     */
    async isDenied(userId, action, resouceCode) {
        const { isActionDenied } = await management_acl_isDenied_1.isDenied(this.graphqlClientV2, this.tokenProvider, {
            resouceCode,
            action,
            userId
        });
        return isActionDenied;
    }
}
exports.AccessControlManagementClient = AccessControlManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkZBQTJFO0FBQzNFLDZGQUEyRTtBQUMzRSw2RkFBMkU7QUFDM0UsK0ZBQWlGO0FBQ2pGLG1HQUFpRjtBQUNqRix5RkFBMkU7QUFJM0UsaURBQWlEO0FBQ2pELGlGQUErRDtBQUMvRCx5RkFBdUU7QUFDdkUsNkVBQTJEO0FBQzNELGlGQUFpRTtBQUNqRSx1RkFBcUU7QUFDckUsbUZBQWlFO0FBRWpFLE1BQWEsNkJBQTZCO0lBTXhDLFlBQ0UsT0FBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsZUFBOEIsRUFDOUIsYUFBc0M7UUFFdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQVksRUFBRSxXQUFtQjtRQUNqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLDRDQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hFLEtBQUssRUFBRTtnQkFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2dCQUNuQyxJQUFJO2dCQUNKLFdBQVc7YUFDWjtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLEdB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