import { getUserPoolDetail } from './../graphqlapi/management.userpool.detail';
import { queryPermissionList } from './../graphqlapi/management.userpool.getPermissionList';
import { addCollaborator } from './../graphqlapi/management.userpool.addCollaborator';
export class UserPoolManagementClient {
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
        const res = await queryPermissionList(this.graphqlClient, this.tokenProvider, {});
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
        const res = await addCollaborator(this.graphqlClient, this.tokenProvider, {
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
        const res = await getUserPoolDetail(this.graphqlClient, this.tokenProvider, {
            id: this.options.userPoolId
        });
        return res.client;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnBvb2xNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJwb29sTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFNdEYsTUFBTSxPQUFPLHdCQUF3QjtJQUtuQyxZQUNFLE9BQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGFBQXNDO1FBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLGlCQUFpQjtRQUNyQixNQUFNLEdBQUcsR0FBRyxNQUFNLG1CQUFtQixDQUNuQyxJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsYUFBYSxFQUNsQixFQUFFLENBQ0gsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDLG1CQUFtQixDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsZUFBZSxDQUNuQixrQkFBMEIsRUFDMUIsd0JBQThELEVBQUU7UUFFaEUsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDcEQscUJBQXFCLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxZQUFZLEVBQUUsQ0FBQyxDQUFDLEdBQUc7Z0JBQ25CLGNBQWMsRUFBRSxFQUFFO2FBQ25CLENBQUMsQ0FBQyxDQUFDO1NBQ0w7UUFDRCxNQUFNLEdBQUcsR0FBRyxNQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDeEUsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUNuQyxrQkFBa0I7WUFDbEIscUJBQXFCO1NBQ3RCLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLE1BQU0saUJBQWlCLENBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQ2xCO1lBQ0UsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtTQUM1QixDQUNGLENBQUM7UUFDRixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztDQUNGIn0=