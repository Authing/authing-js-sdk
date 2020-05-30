"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessControlManagementClient = void 0;
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
}
exports.AccessControlManagementClient = AccessControlManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUhBQXVGO0FBQ3ZGLG1IQUF1RjtBQUN2RixxSEFBNkY7QUFDN0YseUhBQTZGO0FBQzdGLCtHQUF1RjtBQUt2RixNQUFhLDZCQUE2QjtJQUt4QyxZQUFZLE9BQWdDLEVBQUUsYUFBNEIsRUFBRSxhQUFzQztRQUNoSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUNwQyxDQUFDO0lBR0Q7Ozs7Ozs7T0FPRztJQUNILEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBWSxFQUFFLFdBQW1CO1FBQ2pELE1BQU0sR0FBRyxHQUFHLE1BQU0sc0RBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEUsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQ25DLElBQUk7Z0JBQ0osV0FBVzthQUNaO1NBQ0YsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQTtRQUNqQyxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFHRDs7Ozs7Ozs7T0FRRztJQUNILEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFlLEVBQUUsR0FBVyxFQUFFLEtBQVU7UUFDN0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDOUI7UUFDRCxNQUFNLEdBQUcsR0FBRyxNQUFNLDREQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN6RSxPQUFPO1lBQ1AsR0FBRztZQUNILEtBQUs7U0FDTixDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUM3QixDQUFDO0lBR0Q7Ozs7Ozs7OztPQVNHO0lBQ0gsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUdwQjtRQUNDLE1BQU0sR0FBRyxHQUFHLE1BQU0sNERBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDaEcsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUE7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsYUFBYSxDQUFDLE9BR25CO1FBQ0MsTUFBTSxHQUFHLEdBQUcsTUFBTSxzREFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNoRixPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUE7SUFDMUIsQ0FBQztJQUdEOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFlLEVBQUUsT0FJcEM7UUFDQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN0QixNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7U0FDVCxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ1gsTUFBTSxHQUFHLEdBQUcsTUFBTSxzREFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEgsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQTtJQUM1QixDQUFDO0NBQ0Y7QUFoSEQsc0VBZ0hDIn0=