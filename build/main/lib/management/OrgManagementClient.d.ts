import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { SearchOrgNodesVariables } from '../../types/codeGen';
export declare class OrgManagementClient {
    options: ManagementClientOptions;
    graphqlClient: GraphqlClient;
    tokenProvider: ManagementTokenProvider;
    constructor(options: ManagementClientOptions, graphqlClient: GraphqlClient, tokenProvider: ManagementTokenProvider);
    /**
     * 获取用户池组织机构列表
     * @returns
     * @memberof OrgManagementClient
     */
    list(): Promise<{
        totalCount: number;
        list: {
            _id: string;
            logo?: string;
            nodes: {
                _id: string;
                name: string;
                description?: string;
                createdAt?: string;
                updatedAt?: string;
                children: string[];
                root?: boolean;
            }[];
        }[];
    }>;
    /**
     * 创建组织机构
     * @memberof OrgManagementClient
     */
    create(rootNodeId: string): Promise<{
        _id: string;
        nodes: {
            _id: string;
            name: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
            children: string[];
            root?: boolean;
        }[];
    }>;
    /**
     * 往组织机构中添加一个节点
     * @memberof OrgManagementClient
     */
    addNode(options: {
        orgId: string;
        nodeId: string;
        parentNodeId: string;
    }): Promise<{
        _id: string;
        nodes: {
            _id: string;
            name: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
            children: string[];
            root?: boolean;
        }[];
    }>;
    /**
     * 通过 ID 查询组织机构
     * @memberof OrgManagementClient
     */
    findById(id: string): Promise<{
        _id: string;
        nodes: {
            _id: string;
            name: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
            children: string[];
            root?: boolean;
        }[];
    }>;
    /**
     * 删除组织机构树
     * @param {string} id
     * @returns
     * @memberof OrgManagementClient
     */
    delete(id: string): Promise<{
        message?: string;
        code?: number;
        status?: boolean;
    }>;
    /**
     * 删除组织机构树中的某一个节点
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    removeNode(orgId: string, nodeId: string): Promise<{
        _id: string;
        nodes: {
            _id: string;
            name: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
            children: string[];
            root?: boolean;
        }[];
    }>;
    /**
     * 判断一个节点是不是组织树的根节点
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    isRoot(orgId: string, nodeId: string): Promise<boolean>;
    /**
     * 查询节点子节点列表
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    children(orgId: string, nodeId: string): Promise<{
        depth: number;
        group: {
            _id: string;
            userPoolId: string;
            name: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
        };
    }[]>;
    /**
     * 查询组织机构树根节点
     * @memberof OrgManagementClient
     */
    rootNode(id: string): Promise<{
        _id: string;
        userPoolId: string;
        name: string;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
        roles?: {
            totalCount?: number;
        };
        permissions?: {
            totalCount?: number;
        };
        users?: {
            totalCount?: number;
        };
    }>;
    /**
     * 根据 Group 的自定义字段查询节点
     *
     * @param {SearchOrgNodesVariables} options
     * @memberof OrgManagementClient
     */
    searchNodes(options: SearchOrgNodesVariables): Promise<{
        _id: string;
        name: string;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
    }[]>;
}
