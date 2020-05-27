"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPoolManagementClient = void 0;
const management_userpool_getPermissionList_1 = require("./../graphqlapi/management.userpool.getPermissionList");
const management_userpool_addCollaborator_1 = require("./../graphqlapi/management.userpool.addCollaborator");
class UserPoolManagementClient {
    constructor(options, graphqlClient, tokenProvider) {
        this.options = options;
        this.graphqlClient = graphqlClient;
        this.tokenProvider = tokenProvider;
    }
    /**
     * 查询用户协作权限列表
     *
     * @memberof UserPoolManagementClient
     */
    async getPermissionList() {
        const res = await management_userpool_getPermissionList_1.queryPermissionList(this.graphqlClient, this.tokenProvider, {});
        return res.queryPermissionList;
    }
    /**
     * 添加用户池协作者
     *
     * @param {{ collaboratorUserId: string, permissionDescriptors?: PermissionDescriptors[] }} options
     * @returns
     * @memberof UserPoolManagementClient
     */
    async addCollaborator(collaboratorUserId, permissionDescriptors = []) {
        if (permissionDescriptors.length === 0) {
            let permissionList = await this.getPermissionList();
            permissionDescriptors = permissionList.list.map((p) => ({ permissionId: p._id, operationAllow: 15 }));
        }
        const res = await management_userpool_addCollaborator_1.addCollaborator(this.graphqlClient, this.tokenProvider, {
            userPoolId: this.options.userPoolId,
            collaboratorUserId,
            permissionDescriptors
        });
        return res.addCollaborator;
    }
}
exports.UserPoolManagementClient = UserPoolManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnBvb2xNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJwb29sTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpSEFBNEY7QUFDNUYsNkdBQXNGO0FBTXRGLE1BQWEsd0JBQXdCO0lBS25DLFlBQVksT0FBZ0MsRUFBRSxhQUE0QixFQUFFLGFBQXNDO1FBQ2hILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO0lBQ3BDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLEdBQUcsR0FBRyxNQUFNLDJEQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNqRixPQUFPLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQTtJQUNoQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsS0FBSyxDQUFDLGVBQWUsQ0FBQyxrQkFBMEIsRUFBRSx3QkFBaUQsRUFBRTtRQUNuRyxJQUFJLHFCQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtZQUNuRCxxQkFBcUIsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDM0c7UUFDRCxNQUFNLEdBQUcsR0FBUSxNQUFNLHFEQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUMzRTtZQUNFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDbkMsa0JBQWtCO1lBQ2xCLHFCQUFxQjtTQUN0QixDQUFDLENBQUE7UUFDSixPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUE7SUFDNUIsQ0FBQztDQUNGO0FBekNELDREQXlDQyJ9