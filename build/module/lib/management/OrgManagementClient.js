import { searchNodes } from './../graphqlapi/management.org.searchNodes';
import { orgRootNode } from './../graphqlapi/management.org.rootNode';
import { orgChildrenNodes } from './../graphqlapi/management.org.children';
import { isRootNodeOfOrg } from './../graphqlapi/management.org.isRoot';
import { removeOrgNode } from './../graphqlapi/management.org.removeNode';
import { org } from './../graphqlapi/management.org.findById';
import { addOrgNode } from './../graphqlapi/management.org.addNode';
import { createOrg } from './../graphqlapi/management.org.create';
import { orgs } from './../graphqlapi/management.org.list';
import buildTree from '../utils/tree';
import _ from 'lodash';
import { deleteOrg } from '../graphqlapi/management.org.delete';
export class OrgManagementClient {
    constructor(options, graphqlClient, tokenProvider) {
        this.options = options;
        this.graphqlClient = graphqlClient;
        this.tokenProvider = tokenProvider;
    }
    /**
     * 获取用户池组织机构列表
     * TODO: 添加 TypeScript 类型注解
     * @returns
     * @memberof OrgManagementClient
     */
    async list() {
        const res = await orgs(this.graphqlClient, this.tokenProvider, { userPoolId: this.options.userPoolId });
        for (let org of res.orgs.list) {
            org.tree = buildTree(_.cloneDeep(org.nodes));
        }
        return res.orgs;
    }
    /**
     * 创建组织机构
     * TODO: 添加 TypeScript 类型注解
     * @memberof OrgManagementClient
     */
    async create(rootNodeId) {
        const res = await createOrg(this.graphqlClient, this.tokenProvider, {
            input: {
                rootGroupId: rootNodeId,
                userPoolId: this.options.userPoolId
            }
        });
        return res.createOrg;
    }
    /**
     * 往组织机构中添加一个节点
     * TODO: 添加 TypeScript 类型注解
     * @memberof OrgManagementClient
     */
    async addNode(options) {
        const { orgId, nodeId, parentNodeId } = options;
        const res = await addOrgNode(this.graphqlClient, this.tokenProvider, {
            input: {
                orgId,
                groupId: nodeId,
                parentGroupId: parentNodeId
            }
        });
        return res.addOrgNode;
    }
    /**
     * 通过 ID 查询组织机构
     * TODO: 添加 TypeScript 类型注解
     * @memberof OrgManagementClient
     */
    async findById(id) {
        const res = await org(this.graphqlClient, this.tokenProvider, {
            _id: id
        });
        return res.org;
    }
    /**
     * 删除组织机构树
     * TODO: 添加 TypeScript 类型注解
     * @param {string} id
     * @returns
     * @memberof OrgManagementClient
     */
    async delete(id) {
        const res = await deleteOrg(this.graphqlClient, this.tokenProvider, { _id: id });
        return res.deleteOrg;
    }
    /**
     * 删除组织机构树中的某一个节点
     * TODO: 添加 TypeScript 类型注解
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    async removeNode(orgId, nodeId) {
        const res = await removeOrgNode(this.graphqlClient, this.tokenProvider, {
            input: {
                orgId,
                groupId: nodeId
            }
        });
        return res.removeOrgNode;
    }
    /**
     * 判断一个节点是不是组织树的根节点
     * TODO: 添加 TypeScript 类型注解
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    async isRoot(orgId, nodeId) {
        const res = await isRootNodeOfOrg(this.graphqlClient, this.tokenProvider, {
            input: {
                orgId,
                groupId: nodeId
            }
        });
        return res.isRootNodeOfOrg;
    }
    /**
     * 查询节点子节点列表
     * TODO: 添加 TypeScript 类型注解
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    async children(orgId, nodeId) {
        const res = await orgChildrenNodes(this.graphqlClient, this.tokenProvider, {
            input: {
                orgId,
                nodeId
            }
        });
        return res.orgChildrenNodes;
    }
    /**
     * 查询组织机构树根节点
     * TODO: 添加 TypeScript 类型注解
     * @memberof OrgManagementClient
     */
    async rootNode(id) {
        const res = await orgRootNode(this.graphqlClient, this.tokenProvider, {
            _id: id
        });
        return res.orgRootNode;
    }
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
    async searchNodes(options) {
        let { orgId, name = "", metadataList = [] } = options;
        if (!name && metadataList.length === 0) {
            this.options.onError(new Error('Plesas Provide name or metadataList'));
        }
        if (metadataList) {
            metadataList = metadataList.map(metadata => {
                if (typeof metadata.value !== "string") {
                    metadata.value = JSON.stringify(metadata.value);
                }
                return metadata;
            });
        }
        const res = await searchNodes(this.graphqlClient, this.tokenProvider, {
            orgId,
            name,
            metadataList
        });
        return res.searchOrgNodes;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnTWFuYWdlbWVudENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9PcmdNYW5hZ2VtZW50Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJM0QsT0FBTyxTQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQTtBQUN0QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFaEUsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QixZQUFZLE9BQWdDLEVBQUUsYUFBNEIsRUFBRSxhQUFzQztRQUNoSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQTtJQUNwQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUks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