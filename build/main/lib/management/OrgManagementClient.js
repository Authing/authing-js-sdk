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
     * TODO: 添加 TypeScript 类型注解
     * @returns
     * @memberof OrgManagementClient
     */
    async list() {
        const res = await management_org_list_1.orgs(this.graphqlClient, this.tokenProvider, { userPoolId: this.options.userPoolId });
        for (let org of res.orgs.list) {
            org.tree = tree_1.default(lodash_1.default.cloneDeep(org.nodes));
        }
        return res.orgs;
    }
    /**
     * 创建组织机构
     * TODO: 添加 TypeScript 类型注解
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
     * TODO: 添加 TypeScript 类型注解
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
     * TODO: 添加 TypeScript 类型注解
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
     * TODO: 添加 TypeScript 类型注解
     * @param {string} id
     * @returns
     * @memberof OrgManagementClient
     */
    async delete(id) {
        const res = await management_org_delete_1.deleteOrg(this.graphqlClient, this.tokenProvider, { _id: id });
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
     * TODO: 添加 TypeScript 类型注解
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
     * TODO: 添加 TypeScript 类型注解
     * @param {string} orgId
     * @param {string} nodeId
     * @returns
     * @memberof OrgManagementClient
     */
    async children(orgId, nodeId) {
        const res = await management_org_children_1.orgChildrenNodes(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_rootNode_1.orgRootNode(this.graphqlClient, this.tokenProvider, {
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
        const res = await management_org_searchNodes_1.searchNodes(this.graphqlClient, this.tokenProvider, {
            orgId,
            name,
            metadataList
        });
        return res.searchOrgNodes;
    }
}
exports.OrgManagementClient = OrgManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnTWFuYWdlbWVudENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9PcmdNYW5hZ2VtZW50Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJGQUF5RTtBQUN6RSxxRkFBc0U7QUFDdEUscUZBQTJFO0FBQzNFLGlGQUF3RTtBQUN4RSx5RkFBMEU7QUFDMUUscUZBQThEO0FBQzlELG1GQUFvRTtBQUNwRSxpRkFBa0U7QUFDbEUsNkVBQTJEO0FBSTNELHlEQUFzQztBQUN0QyxvREFBc0I7QUFDdEIsK0VBQWdFO0FBRWhFLE1BQWEsbUJBQW1CO0lBSzlCLFlBQVksT0FBZ0MsRUFBRSxhQUE0QixFQUFFLGFBQXNDO1FBQ2hILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFBO0lBQ3BDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILEtBQUssQ0FBQyxJQUFJO1FBQ1IsTUFBTSxHQUFHLEdBQUcsTUFBTSwwQkFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7UUFDdkcsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUM3QixHQUFHLENBQUMsSUFBSSxHQUFHLGNBQVMsQ0FBQyxnQkFBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUM3QztRQUNELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQTtJQUNqQixDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBa0I7UUFDN0IsTUFBTSxH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