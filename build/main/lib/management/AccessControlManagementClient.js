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
}
exports.AccessControlManagementClient = AccessControlManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkZBQTJFO0FBQzNFLDZGQUEyRTtBQUMzRSw2RkFBMkU7QUFDM0UsK0ZBQWlGO0FBQ2pGLG1HQUFpRjtBQUNqRix5RkFBMkU7QUFJM0UsaURBQWlEO0FBQ2pELGlGQUErRDtBQUMvRCx5RkFBdUU7QUFDdkUsNkVBQTJEO0FBQzNELGlGQUFpRTtBQUNqRSx1RkFBcUU7QUFFckUsTUFBYSw2QkFBNkI7SUFNeEMsWUFDRSxPQUFnQyxFQUNoQyxhQUE0QixFQUM1QixlQUE4QixFQUM5QixhQUFzQztRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBWSxFQUFFLFdBQW1CO1FBQ2pELE1BQU0sR0FBRyxHQUFHLE1BQU0sNENBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEUsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQ25DLElBQUk7Z0JBQ0osV0FBVzthQUNaO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFlLEVBQUUsR0FBVyxFQUFFLEtBQVU7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