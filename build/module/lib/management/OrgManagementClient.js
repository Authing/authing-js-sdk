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
     * @returns
     * @memberof OrgManagementClient
     */
    async list() {
        const res = await orgs(this.graphqlClient, this.tokenProvider, {
            userPoolId: this.options.userPoolId
        });
        for (let org of res.orgs.list) {
            org.tree = buildTree(_.cloneDeep(org.nodes));
        }
        return res.orgs;
    }
    /**
     * 创建组织机构
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
     * @param {string} id
     * @returns
     * @memberof OrgManagementClient
     */
    async delete(id) {
        const res = await deleteOrg(this.graphqlClient, this.tokenProvider, {
            _id: id
        });
        return res.deleteOrg;
    }
    /**
     * 删除组织机构树中的某一个节点
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
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    async children(orgId, nodeId) {
        const res = await orgChildrenNodes(this.graphqlClient, this.tokenProvider, {
            input: {
                orgId,
                groupId: nodeId
            }
        });
        return res.orgChildrenNodes;
    }
    /**
     * 查询组织机构树根节点
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
     * @param {SearchOrgNodesVariables} options
     * @memberof OrgManagementClient
     */
    async searchNodes(options) {
        let { orgId, name = '', metadata = [] } = options;
        if (!name && metadata.length === 0) {
            this.options.onError(new Error('Plesas Provide name or metadata'));
        }
        if (metadata) {
            metadata = metadata.map(metadata => {
                if (typeof metadata.value !== 'string') {
                    metadata.value = JSON.stringify(metadata.value);
                }
                return metadata;
            });
        }
        const res = await searchNodes(this.graphqlClient, this.tokenProvider, {
            orgId,
            name,
            metadata
        });
        return res.searchOrgNodes;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnTWFuYWdlbWVudENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9PcmdNYW5hZ2VtZW50Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJM0QsT0FBTyxTQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHaEUsTUFBTSxPQUFPLG1CQUFtQjtJQUs5QixZQUNFLE9BQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGFBQXNDO1FBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJ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