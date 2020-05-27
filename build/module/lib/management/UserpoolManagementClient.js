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
            permissionDescriptors = permissionList.list.map((p) => ({ permissionId: p._id, operationAllow: 15 }));
        }
        const res = await addCollaborator(this.graphqlClient, this.tokenProvider, {
            userPoolId: this.options.userPoolId,
            collaboratorUserId,
            permissionDescriptors
        });
        return res.addCollaborator;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnBvb2xNYW5hZ2VtZW50Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9tYW5hZ2VtZW50L1VzZXJwb29sTWFuYWdlbWVudENsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scURBQXFELENBQUM7QUFNdEYsTUFBTSxPQUFPLHdCQUF3QjtJQUtuQyxZQUFZLE9BQWdDLEVBQUUsYUFBNEIsRUFBRSxhQUFzQztRQUNoSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsTUFBTSxHQUFHLEdBQUcsTUFBTSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDakYsT0FBTyxHQUFHLENBQUMsbUJBQW1CLENBQUE7SUFDaEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxlQUFlLENBQUMsa0JBQTBCLEVBQUUsd0JBQWlELEVBQUU7UUFDbkcsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFDbkQscUJBQXFCLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQzNHO1FBQ0QsTUFBTSxHQUFHLEdBQVEsTUFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUMzRTtZQUNFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDbkMsa0JBQWtCO1lBQ2xCLHFCQUFxQjtTQUN0QixDQUFDLENBQUE7UUFDSixPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUE7SUFDNUIsQ0FBQztDQUNGIn0=