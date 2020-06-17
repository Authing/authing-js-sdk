"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlManagementClient = void 0;
const management_accesscontrol_userGroupList_1 = require("./../graphqlapi/management.accesscontrol.userGroupList");
const management_accesscontrol_isUserInGroup_1 = require("./../graphqlapi/management.accesscontrol.isUserInGroup");
const management_accesscontrol_groupUserList_1 = require("./../graphqlapi/management.accesscontrol.groupUserList");
const management_accesscontrol_addUserToGroup_1 = require("./../graphqlapi/management.accesscontrol.addUserToGroup");
const management_accesscontrol_addGroupMetadata_1 = require("./../graphqlapi/management.accesscontrol.addGroupMetadata");
const management_accesscontrol_createGroup_1 = require("./../graphqlapi/management.accesscontrol.createGroup");
class AccessControlManagementClient {
    constructor(options, graphqlClient, tokenProvider) {
        this.options = options;
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
        const res = await management_accesscontrol_createGroup_1.createRBACGroup(this.graphqlClient, this.tokenProvider, {
            input: {
                userPoolId: this.options.userPoolId,
                name,
                description
            }
        });
        const group = res.createRBACGroup;
        return group;
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
        if (typeof value !== "string") {
            value = JSON.stringify(value);
        }
        const res = await management_accesscontrol_addGroupMetadata_1.addGroupMetadata(this.graphqlClient, this.tokenProvider, {
            groupId,
            key,
            value
        });
        return res.addGroupMetadata;
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
        const res = await management_accesscontrol_addUserToGroup_1.addUserToRBACGroup(this.graphqlClient, this.tokenProvider, { input: options });
        return res.addUserToRBACGroup;
    }
    /**
     * 判断用户是否在 Group 中
     *
     * @memberof AccessControlManagementClient
     */
    async isUserInGroup(options) {
        const res = await management_accesscontrol_isUserInGroup_1.isUserInGroup(this.graphqlClient, this.tokenProvider, options);
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
    async groupUserList(groupId, options) {
        options = Object.assign({
            sortBy: "CREATEDAT_DESC",
            page: 0,
            count: 1
        }, options);
        const res = await management_accesscontrol_groupUserList_1.groupUserList(this.graphqlClient, this.tokenProvider, Object.assign({}, options, { groupId }));
        return res.rbacGroup.users;
    }
    /**
     * 查询用户所在的分组列表
     *
     */
    async userGroupList(userId) {
        const res = await management_accesscontrol_userGroupList_1.userGroupList(this.graphqlClient, this.tokenProvider, {
            _id: userId
        });
        return res.userGroupList;
    }
}
exports.AccessControlManagementClient = AccessControlManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUhBQXVGO0FBQ3ZGLG1IQUF1RjtBQUN2RixtSEFBdUY7QUFDdkYscUhBQTZGO0FBQzdGLHlIQUE2RjtBQUM3RiwrR0FBdUY7QUFLdkYsTUFBYSw2QkFBNkI7SUFLeEMsWUFBWSxPQUFnQyxFQUFFLGFBQTRCLEVBQUUsYUFBc0M7UUFDaEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7SUFDcEMsQ0FBQztJQUdEOzs7Ozs7O09BT0c7SUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQVksRUFBRSxXQUFtQjtRQUNqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLHNEQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hFLEtBQUssRUFBRTtnQkFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2dCQUNuQyxJQUFJO2dCQUNKLFdBQVc7YUFDWjtTQUNGLENBQUMsQ0FBQTtRQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUE7UUFDakMsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBR0Q7Ozs7Ozs7O09BUUc7SUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLEdBQVcsRUFBRSxLQUFVO1FBQzdELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzlCO1FBQ0QsTUFBTSxHQUFHLEdBQUcsTUFBTSw0REFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDekUsT0FBTztZQUNQLEdBQUc7WUFDSCxLQUFLO1NBQ04sQ0FBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUE7SUFDN0IsQ0FBQztJQUdEOzs7Ozs7Ozs7T0FTRztJQUNILEtBQUssQ0FBQyxjQUFjLENBQUMsT0FHcEI7UUFDQyxNQUFNLEdBQUcsR0FBRyxNQUFNLDREQUFrQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1FBQ2hHLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFBO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUduQjtRQUNDLE1BQU0sR0FBRyxHQUFHLE1BQU0sc0RBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDaEYsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFBO0lBQzFCLENBQUM7SUFHRDs7Ozs7Ozs7Ozs7T0FXRztJQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBZSxFQUFFLE9BSXBDO1FBQ0MsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDdEIsTUFBTSxFQUFFLGdCQUFnQjtZQUN4QixJQUFJLEVBQUUsQ0FBQztZQUNQLEtBQUssRUFBRSxDQUFDO1NBQ1QsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNYLE1BQU0sR0FBRyxHQUFHLE1BQU0sc0RBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hILE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUE7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBYztRQUNoQyxNQUFNLEdBQUcsR0FBRyxNQUFNLHNEQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RFLEdBQUcsRUFBRSxNQUFNO1NBQ1osQ0FBQyxDQUFBO1FBQ0YsT0FBTyxHQUFHLENBQUMsYUFBYSxDQUFBO0lBQzFCLENBQUM7Q0FDRjtBQTNIRCxzRUEySEMifQ==