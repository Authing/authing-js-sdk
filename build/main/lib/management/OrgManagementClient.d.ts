import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
export declare class OrgManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider);
    /**
     * 获取用户池组织机构列表
     * TODO: 添加 TypeScript 类型注解
     * @returns
     * @memberof OrgManagementClient
     */
    list(): Promise<any>;
    /**
     * 创建组织机构
     * TODO: 添加 TypeScript 类型注解
     * @memberof OrgManagementClient
     */
    create(rootNodeId: string): Promise<any>;
    /**
     * 往组织机构中添加一个节点
     * TODO: 添加 TypeScript 类型注解
     * @memberof OrgManagementClient
     */
    addNode(options: {
        orgId: string;
        nodeId: string;
        parentNodeId: string;
    }): Promise<any>;
    /**
     * 通过 ID 查询组织机构
     * TODO: 添加 TypeScript 类型注解
     * @memberof OrgManagementClient
     */
    findById(id: string): Promise<any>;
    /**
     * 删除组织机构树
     * TODO: 添加 TypeScript 类型注解
     * @param {string} id
     * @returns
     * @memberof OrgManagementClient
     */
    delete(id: string): Promise<any>;
    /**
     * 删除组织机构树中的某一个节点
     * TODO: 添加 TypeScript 类型注解
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    removeNode(orgId: string, nodeId: string): Promise<any>;
    /**
     * 判断一个节点是不是组织树的根节点
     * TODO: 添加 TypeScript 类型注解
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    isRoot(orgId: string, nodeId: string): Promise<any>;
    /**
     * 查询节点子节点列表
     * TODO: 添加 TypeScript 类型注解
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    children(orgId: string, nodeId: string): Promise<any>;
    /**
     * 查询组织机构树根节点
     * TODO: 添加 TypeScript 类型注解
     * @memberof OrgManagementClient
     */
    rootNode(id: string): Promise<any>;
    /**
     * 根据 Group 的自定义字段查询节点
     *
     * @param {string} _orgId
     * @param {{
     *     key: string,
     *     value: any
     *   }[]} _metadataList
     * @memberof OrgManagementClient
     */
    searchNodes(options: {
        orgId: string;
        name?: string;
        metadataList?: {
            key: string;
            value: any;
        }[];
    }): Promise<any>;
}
