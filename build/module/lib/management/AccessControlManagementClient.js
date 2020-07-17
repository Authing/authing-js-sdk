import { userGroupList } from './../graphqlapi/management.accesscontrol.userGroupList';
import { isUserInGroup } from './../graphqlapi/management.accesscontrol.isUserInGroup';
import { groupUserList } from './../graphqlapi/management.accesscontrol.groupUserList';
import { addUserToRBACGroup } from './../graphqlapi/management.accesscontrol.addUserToGroup';
import { addGroupMetadata } from './../graphqlapi/management.accesscontrol.addGroupMetadata';
import { createRBACGroup } from './../graphqlapi/management.accesscontrol.createGroup';
import { SortByEnum } from '../../types/codeGen';
export class AccessControlManagementClient {
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
        const res = await createRBACGroup(this.graphqlClient, this.tokenProvider, {
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
        const res = await addGroupMetadata(this.graphqlClient, this.tokenProvider, {
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
        const res = await addUserToRBACGroup(this.graphqlClient, this.tokenProvider, { input: options });
        return res.addUserToRBACGroup;
    }
    /**
     * 判断用户是否在 Group 中
     *
     * @memberof AccessControlManagementClient
     */
    async isUserInGroup(options) {
        const res = await isUserInGroup(this.graphqlClient, this.tokenProvider, options);
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
        sortBy: SortByEnum.CreatedatDesc,
        page: 0,
        count: 1
    }) {
        const res = await groupUserList(this.graphqlClient, this.tokenProvider, {
            _id: groupId,
            ...options
        });
        return res.rbacGroup.users;
    }
    /**
     * 查询用户所在的分组列表
     *
     */
    async userGroupList(userId) {
        const res = await userGroupList(this.graphqlClient, this.tokenProvider, {
            _id: userId
        });
        return res.userGroupList;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL21hbmFnZW1lbnQvQWNjZXNzQ29udHJvbE1hbmFnZW1lbnRDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN2RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDN0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDN0YsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBSXZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxNQUFNLE9BQU8sNkJBQTZCO0lBS3hDLFlBQ0UsT0FBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsYUFBc0M7UUFFdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQVksRUFBRSxXQUFtQjtRQUNqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEUsS0FBSyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7Z0JBQ25DLElBQUk7Z0JBQ0osV0FBVzthQUNaO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFlLEVBQUUsR0FBVyxFQUFFLEtBQVU7UUFDN0QsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7UUFDRCxNQUFNLEdBQUcsR0FBRyxNQUFNLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN6RSxPQUFPO1lBQ1AsR0FBRztZQUNILEtBQUs7U0FDTixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUE0QztRQUMvRCxNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFrQixDQUNsQyxJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxFQUNsQixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FDbkIsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ2hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUE0QztRQUM5RCxNQUFNLEdBQUcsR0FBRyxNQUFNLGFBQWEsQ0FDN0IsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsT0FBTyxDQUNSLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FDakIsT0FBZSxFQUNmLFVBSUk7UUFDRixNQUFNLEVBQUUsVUFBVSxDQUFDLGFBQWE7UUFDaEMsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztLQUNUO1FBRUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RFLEdBQUcsRUFBRSxPQUFPO1lBQ1osR0FBRyxPQUFPO1NBQ1gsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFjO1FBQ2hDLE1BQU0sR0FBRyxHQUFHLE1BQU0sYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0RSxHQUFHLEVBQUUsTUFBTTtTQUNaLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0NBQ0YifQ==