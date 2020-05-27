"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgManagementClient = void 0;
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
    async searchNodes(_orgId, _metadataList) {
        return;
    }
}
exports.OrgManagementClient = OrgManagementClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JnTWFuYWdlbWVudENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvbWFuYWdlbWVudC9PcmdNYW5hZ2VtZW50Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFGQUFzRTtBQUN0RSxxRkFBMkU7QUFDM0UsaUZBQXdFO0FBQ3hFLHlGQUEwRTtBQUMxRSxxRkFBOEQ7QUFDOUQsbUZBQW9FO0FBQ3BFLGlGQUFrRTtBQUNsRSw2RUFBMkQ7QUFJM0QseURBQXNDO0FBQ3RDLG9EQUFzQjtBQUN0QiwrRUFBZ0U7QUFFaEUsTUFBYSxtQkFBbUI7SUFLOUIsWUFBWSxPQUFnQyxFQUFFLGFBQTRCLEVBQUUsYUFBc0M7UUFDaEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUE7SUFDcEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLEdBQUcsR0FBRyxNQUFNLDBCQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtRQUN2RyxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzdCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsY0FBUyxDQUFDLGdCQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQzdDO1FBQ0QsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBQ2pCLENBQUM7SUFHRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFrQjtRQUM3QixNQUFNLEdBQUcsR0FBRyxNQUFN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