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
    async searchNodes(_orgId, _metadataList) {
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnTWFuYWdlbWVudENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9PcmdNYW5hZ2VtZW50Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUkzRCxPQUFPLFNBQVMsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFBO0FBQ3RCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVoRSxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLFlBQVksT0FBZ0MsRUFBRSxhQUE0QixFQUFFLGFBQXNDO1FBQ2hILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO0lBQ3BDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsVUFB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