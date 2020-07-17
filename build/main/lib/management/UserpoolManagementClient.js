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
            permissionDescriptors = permissionList.list.map(p => ({
                permissionId: p._id,
                operationAllow: 15
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnBvb2xNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJwb29sTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyRkFBK0U7QUFDL0UsaUhBQTRGO0FBQzVGLDZHQUFzRjtBQU10RixNQUFhLHdCQUF3QjtJQUtuQyxZQUNFLE9BQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGFBQXNDO1FBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLEdBQUcsR0FBRyxNQUFNLDJEQUFtQixDQUNuQyxJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxFQUNsQixFQUFFLENBQ0gsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLG1CQUFtQixDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsZUFBZSxDQUNuQixrQkFBMEIsRUFDMUIsd0JBQThELEVBQUU7UUFFaEUsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDcEQscUJBQXFCLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxZQUFZLEVBQUUsQ0FBQyxDQUFDLEdBQUc7Z0JBQ25CLGNBQWMsRUFBRSxFQUFFO2FBQ25CLENBQUMsQ0FBQyxDQUFDO1NBQ0w7UUFDRCxNQUFNLEdBQUcsR0FBRyxNQUFNLHFEQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDbkMsa0JBQWtCO1lBQ2xCLHFCQUFxQjtTQUN0QixDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLEdBQUcsR0FBRyxNQUFNLDhDQUFpQixDQUNqQyxJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxFQUNsQjtZQUNFLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7U0FDNUIsQ0FDRixDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7Q0FDRjtBQXZFRCw0REF1RUMifQ==