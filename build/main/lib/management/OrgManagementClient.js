"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgManagementClient = void 0;
const management_org_searchNodes_1 = require("./../graphqlapi/management.org.searchNodes");
const management_org_rootNode_1 = require("./../graphqlapi/management.org.rootNode");
const management_org_children_1 = require("./../graphqlapi/management.org.children");
const management_org_isRoot_1 = require("./../graphqlapi/management.org.isRoot");
const management_org_removeNode_1 = require("./../graphqlapi/management.org.removeNode");
const management_org_findById_1 = require("./../graphqlapi/management.org.findById");
const management_org_addNode_1 = require("./../graphqlapi/management.org.addNode");
const management_org_create_1 = require("./../graphqlapi/management.org.create");
const management_org_list_1 = require("./../graphqlapi/management.org.list");
const tree_1 = __importDefault(require("../utils/tree"));
const lodash_1 = __importDefault(require("lodash"));
const management_org_delete_1 = require("../graphqlapi/management.org.delete");
class OrgManagementClient {
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
        const res = await management_org_list_1.orgs(this.graphqlClient, this.tokenProvider, {
            userPoolId: this.options.userPoolId
        });
        for (let org of res.orgs.list) {
            org.tree = tree_1.default(lodash_1.default.cloneDeep(org.nodes));
        }
        return res.orgs;
    }
    /**
     * 创建组织机构
     * @memberof OrgManagementClient
     */
    async create(rootNodeId) {
        const res = await management_org_create_1.createOrg(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_addNode_1.addOrgNode(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_findById_1.org(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_delete_1.deleteOrg(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_removeNode_1.removeOrgNode(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_isRoot_1.isRootNodeOfOrg(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_children_1.orgChildrenNodes(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_rootNode_1.orgRootNode(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_searchNodes_1.searchNodes(this.graphqlClient, this.tokenProvider, {
            orgId,
            name,
            metadata
        });
        return res.searchOrgNodes;
    }
}
exports.OrgManagementClient = OrgManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnTWFuYWdlbWVudENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9PcmdNYW5hZ2VtZW50Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJGQUF5RTtBQUN6RSxxRkFBc0U7QUFDdEUscUZBQTJFO0FBQzNFLGlGQUF3RTtBQUN4RSx5RkFBMEU7QUFDMUUscUZBQThEO0FBQzlELG1GQUFvRTtBQUNwRSxpRkFBa0U7QUFDbEUsNkVBQTJEO0FBSTNELHlEQUFzQztBQUN0QyxvREFBdUI7QUFDdkIsK0VBQWdFO0FBR2hFLE1BQWEsbUJBQW1CO0lBSzlCLFlBQ0UsT0FBZ0MsRUFDaEMsYUFBNEIsRUFDNUIsYUFBc0M7UUFFdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsSUFBSTtRQUNSLE1BQU0sR0FBRyxHQUFHLE1BQU0sMEJBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDN0QsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtTQUNwQyxDQUFDLENBQUM7UUFDSCxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzVCLEdBQVcsQ0FBQyxJQUFJLEdBQUcsY0FBUyxDQUFDLGdCQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQWtCO1FBQzdCLE1BQU0s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