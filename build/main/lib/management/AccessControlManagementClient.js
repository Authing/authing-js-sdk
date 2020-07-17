"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlManagementClient = void 0;
const management_accesscontrol_userGroupList_1 = require("./../graphqlapi/management.accesscontrol.userGroupList");
const management_accesscontrol_isUserInGroup_1 = require("./../graphqlapi/management.accesscontrol.isUserInGroup");
const management_accesscontrol_groupUserList_1 = require("./../graphqlapi/management.accesscontrol.groupUserList");
const management_accesscontrol_addUserToGroup_1 = require("./../graphqlapi/management.accesscontrol.addUserToGroup");
const management_accesscontrol_addGroupMetadata_1 = require("./../graphqlapi/management.accesscontrol.addGroupMetadata");
const management_accesscontrol_createGroup_1 = require("./../graphqlapi/management.accesscontrol.createGroup");
const codeGen_1 = require("../../types/codeGen");
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
        const res = await management_accesscontrol_addGroupMetadata_1.addGroupMetadata(this.graphqlClient, this.tokenProvider, {
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
    async groupUserList(groupId, options = {
        sortBy: codeGen_1.SortByEnum.CreatedatDesc,
        page: 0,
        count: 1
    }) {
        const res = await management_accesscontrol_groupUserList_1.groupUserList(this.graphqlClient, this.tokenProvider, Object.assign({ _id: groupId }, options));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUhBQXVGO0FBQ3ZGLG1IQUF1RjtBQUN2RixtSEFBdUY7QUFDdkYscUhBQTZGO0FBQzdGLHlIQUE2RjtBQUM3RiwrR0FBdUY7QUFJdkYsaURBQWlEO0FBRWpELE1BQWEsNkJBQTZCO0lBS3hDLFlBQ0UsT0FBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsYUFBc0M7UUFFdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQVksRUFBRSxXQUFtQjtRQUNqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLHNEQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hFLEtBQUssRUFBRTtnQkFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2dCQUNuQyxJQUFJO2dCQUNKLFdBQVc7YUFDWjtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLEdBQVcsRUFBRSxLQUFVO1FBQzdELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsTUFBTSxHQUFHLEdBQUcsTUFBTSw0REFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDekUsT0FBTztZQUNQLEdBQUc7WUFDSCxLQUFLO1NBQ04sQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBNEM7UUFDL0QsTUFBTSxHQUFHLEdBQUcsTUFBTSw0REFBa0IsQ0FDbEMsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQ25CLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBNEM7UUFDOUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxzREFBYSxDQUM3QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxFQUNsQixPQUFPLENBQ1IsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxLQUFLLENBQUMsYUFBYSxDQUNqQixPQUFlLEVBQ2YsVUFJSTtRQUNGLE1BQU0sRUFBRSxvQkFBVSxDQUFDLGFBQWE7UUFDaEMsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztLQUNUO1FBRUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxzREFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsa0JBQ3BFLEdBQUcsRUFBRSxPQUFPLElBQ1QsT0FBTyxFQUNWLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQWM7UUFDaEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxzREFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0RSxHQUFHLEVBQUUsTUFBTTtTQUNaLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFqSUQsc0VBaUlDIn0=