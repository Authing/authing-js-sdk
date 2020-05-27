"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlManagementClient = void 0;
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
    async isUserInGroup(_options) {
        return false; // TODO: 接入实际接口
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
}
exports.AccessControlManagementClient = AccessControlManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUhBQXVGO0FBQ3ZGLHFIQUE2RjtBQUM3Rix5SEFBNkY7QUFDN0YsK0dBQXVGO0FBS3ZGLE1BQWEsNkJBQTZCO0lBS3hDLFlBQVksT0FBZ0MsRUFBRSxhQUE0QixFQUFFLGFBQXNDO1FBQ2hILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO0lBQ3BDLENBQUM7SUFHRDs7Ozs7OztPQU9HO0lBQ0gsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFZLEVBQUUsV0FBbUI7UUFDakQsTUFBTSxHQUFHLEdBQUcsTUFBTSxzREFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN4RSxLQUFLLEVBQUU7Z0JBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtnQkFDbkMsSUFBSTtnQkFDSixXQUFXO2FBQ1o7U0FDRixDQUFDLENBQUE7UUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFBO1FBQ2pDLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUdEOzs7Ozs7OztPQVFHO0lBQ0gsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQWUsRUFBRSxHQUFXLEVBQUUsS0FBVTtRQUM3RCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM5QjtRQUNELE1BQU0sR0FBRyxHQUFHLE1BQU0sNERBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3pFLE9BQU87WUFDUCxHQUFHO1lBQ0gsS0FBSztTQUNOLENBQUMsQ0FBQTtRQUNGLE9BQU8sR0FBRyxDQUFDLGdCQUFnQixDQUFBO0lBQzdCLENBQUM7SUFHRDs7Ozs7Ozs7O09BU0c7SUFDSCxLQUFLLENBQUMsY0FBYyxDQUFDLE9BR3BCO1FBQ0MsTUFBTSxHQUFHLEdBQUcsTUFBTSw0REFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUNoRyxPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQTtJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsUUFHbkI7UUFDQyxPQUFPLEtBQUssQ0FBQSxDQUFDLGVBQWU7SUFDOUIsQ0FBQztJQUdEOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFlLEVBQUUsT0FJcEM7UUFDQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN0QixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7U0FDVCxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ1gsTUFBTSxHQUFHLEdBQUcsTUFBTSxzREFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEgsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQTtJQUM1QixDQUFDO0NBQ0Y7QUEvR0Qsc0VBK0dDIn0=