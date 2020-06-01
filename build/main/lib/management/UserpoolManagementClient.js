"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPoolManagementClient = void 0;
const management_userpool_detail_1 = require("./../graphqlapi/management.userpool.detail");
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
    /**
     * 查询用户池详情
     *
     * @returns
     * @memberof UserPoolManagementClient
     */
    async detail() {
        const res = await management_userpool_detail_1.getUserPoolDetail(this.graphqlClient, this.tokenProvider, {
            id: this.options.userPoolId
        });
        return res.client;
    }
}
exports.UserPoolManagementClient = UserPoolManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnBvb2xNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJwb29sTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyRkFBK0U7QUFDL0UsaUhBQTRGO0FBQzVGLDZHQUFzRjtBQU10RixNQUFhLHdCQUF3QjtJQUtuQyxZQUFZLE9BQWdDLEVBQUUsYUFBNEIsRUFBRSxhQUFzQztRQUNoSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsTUFBTSxHQUFHLEdBQUcsTUFBTSwyREFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDakYsT0FBTyxHQUFHLENBQUMsbUJBQW1CLENBQUE7SUFDaEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxlQUFlLENBQUMsa0JBQTBCLEVBQUUsd0JBQWlELEVBQUU7UUFDbkcsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFDbkQscUJBQXFCLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQzNHO1FBQ0QsTUFBTSxHQUFHLEdBQVEsTUFBTSxxREFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFDM0U7WUFDRSxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1lBQ25DLGtCQUFrQjtZQUNsQixxQkFBcUI7U0FDdEIsQ0FBQyxDQUFBO1FBQ0osT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFBO0lBQzVCLENBQUM7SUFHRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxNQUFNO1FBQ1YsTUFBTSxHQUFHLEdBQUcsTUFBTSw4Q0FBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDMUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtTQUM1QixDQUFDLENBQUE7UUFDRixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUE7SUFDbkIsQ0FBQztDQUNGO0FBdkRELDREQXVEQyJ9