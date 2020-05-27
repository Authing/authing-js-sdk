import { ManagementClientOptions } from "./types";
import { GraphqlClient } from "../common/GraphqlClient";
import { ManagementTokenProvider } from "./ManagementTokenProvider";
import { PermissionDescriptors } from "../../types/graphql";
export declare class UserPoolManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider);
    /**
     * 查询用户协作权限列表
     *
     * @memberof UserPoolManagementClient
     */
    getPermissionList(): Promise<any>;
    /**
     * 添加用户池协作者
     *
     * @param {{ collaboratorUserId: string, permissionDescriptors?: PermissionDescriptors[] }} options
     * @returns
     * @memberof UserPoolManagementClient
     */
    addCollaborator(collaboratorUserId: string, permissionDescriptors?: PermissionDescriptors[]): Promise<any>;
}
