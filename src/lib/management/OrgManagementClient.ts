import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ExtendedOrg, ManagementClientOptions } from './types';
import buildTree from '../utils';
import {
  orgs,
  createOrg,
  org,
  deleteOrg,
  deleteNode,
  getChildrenNodes,
  addMember,
  getMembersById,
  addNode,
  updateNode,
  moveNode,
  removeMembers,
  isRootNode,
  rootNode
} from '../graphqlapi';
import { CommonMessage, Org, PaginatedUsers } from '../../types/graphql.v2';
import { HttpClient } from '../common/HttpClient';

/**
 * @class OrgManagementClient 管理组织机构
 * @description 一个 Authing 用户池可以创建多个组织机构。此模块用于管理 Authing 组织机构，可以进行组织机构的增删改查、添加删除移动节点、导入组织机构等操作。
 *
 * @example
 *
 * 请使用以下方式使用该模块：
 * \`\`\`javascript
 * import { ManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.org.list // 获取用户池组织机构列表
 * managementClient.org.moveNode // 获取组织机构详情
 * managementClient.org.listMembers // 获取节点用户列表
 * \`\`\`
 *
 * @name OrgManagementClient
 */
export class OrgManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  tokenProvider: ManagementTokenProvider;
  httpClient: HttpClient;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    httpClient: HttpClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.httpClient = httpClient;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  private buildTree(org: DeepPartial<Org>): ExtendedOrg {
    (org as any).tree = buildTree(JSON.parse(JSON.stringify(org.nodes)) as any);
    return org as ExtendedOrg;
  }

  /**
   * @name create
   * @name_zh 创建组织机构
   * @description 创建组织机构，会创建一个只有一个节点的组织机构。
   * 如果你想将一个完整的组织树导入进来，请使用 importByJson 方法。
   *
   * @param {string} name 组织机构名称，该名称会作为该组织机构根节点的名称。
   * @param {string} [description] 根节点描述
   * @param {string} [code] 根节点唯一标志，必须为合法的英文字符。
   *
   * @example
   *
   * const org = await managementClient.org.create('北京非凡科技', '北京非凡科技有限公司', 'feifan');
   *
   * @memberof OrgManagementClient
   */
  async create(name: string, description?: string, code?: string) {
    const { createOrg: org } = await createOrg(
      this.graphqlClient,
      this.tokenProvider,
      {
        name,
        description,
        code
      }
    );
    return org;
  }

  /**
   * @name deleteById
   * @name_zh 删除组织机构
   * @description 删除组织机构树
   * @param {string} id 组织机构 ID
   *
   * @returns {Promise<CommonMessage>}
   * @memberof OrgManagementClient
   */
  async deleteById(id: string): Promise<CommonMessage> {
    const res = await deleteOrg(this.graphqlClient, this.tokenProvider, {
      id
    });
    return res.deleteOrg;
  }

  /**
   * @name list
   * @name_zh 获取用户池组织机构列表
   * @description 获取用户池组织机构列表
   *
   * @param {number} [page=1]
   * @param {number} [limit=10]
   *
   * @example
   *
   * const { totalCount, list } = await managementClient.org.list()
   *
   * @returns
   * @memberof OrgManagementClient
   */
  async list(page: number = 1, limit: number = 10) {
    const {
      orgs: { list, totalCount }
    } = await orgs(this.graphqlClient, this.tokenProvider, {
      page,
      limit
    });
    return {
      totalCount,
      list: list.map(org => this.buildTree(org))
    };
  }

  /**
   * @name addNode
   * @name_zh 添加节点
   * @description 在组织机构中添加一个节点
   *
   * @param {string} orgId 组织机构 ID
   * @param {string} parentNodeId 父节点 ID
   * @param {Object} data 节点数据
   * @param {string} data.name 节点名称
   * @param {string} [data.code] 节点唯一标志
   * @param {string} [data.description] 节点描述信息
   *
   * @example
   *
   * const org = await managementClient.org.create('北京非凡科技', '北京非凡科技有限公司', 'feifan');
   * const { id: orgId, rootNode } = org
   * const newOrg = await managementClient.org.addNode(orgId, rootNode.id, { name: '运营部门' })
   *
   * // newOrg.nodes.length 现在为 2
   *
   * @returns {Promise<Org>}
   * @memberof OrgManagementClient
   */
  async addNode(
    orgId: string,
    parentNodeId: string,
    data: {
      name: string;
      code?: string;
      order?: number;
      nameI18n?: string;
      description?: string;
      descriptionI18n?: string;
    }
  ) {
    const { name, code, order, nameI18n, description, descriptionI18n } = data;
    const { addNode: org } = await addNode(
      this.graphqlClient,
      this.tokenProvider,
      {
        orgId,
        parentNodeId,
        name,
        code,
        order,
        nameI18n,
        description,
        descriptionI18n
      }
    );
    return this.buildTree(org);
  }

  /**
   * @name updateNode
   * @name_zh 修改节点
   * @description 修改节点数据
   *
   * @param {string} id 节点 ID
   * @param {Object} updates 修改数据
   * @param {string} [updates.name] 节点名称
   * @param {string} [updates.code] 节点唯一标志
   * @param {string} [updates.description] 节点描述信息
   *
   * @example
   *
   * await managementClient.org.updateNode("NDOEID", {
   *    name: '新的节点名称'
   * })
   *
   * @returns {Promise<Org>}
   * @memberof OrgManagementClient
   */
  async updateNode(
    id: string,
    updates: {
      name?: string;
      code?: string;
      order?: number;
      nameI18n?: string;
      description?: string;
      descriptionI18n?: string;
    }
  ) {
    const { name, code, description } = updates;
    const { updateNode: node } = await updateNode(
      this.graphqlClient,
      this.tokenProvider,
      {
        id,
        name,
        code,
        description
      }
    );
    return node;
  }

  /**
   * @name findById
   * @name_zh 获取组织机构详情
   * @description 通过组织机构 ID 获取组织机构详情
   *
   * @param {string} id 组织机构 ID
   *
   * @returns {Promise<Org>}
   * @memberof OrgManagementClient
   */
  async findById(id: string) {
    const { org: data } = await org(this.graphqlClient, this.tokenProvider, {
      id
    });
    return this.buildTree(data);
  }

  /**
   * @name deleteNode
   * @name_zh 删除节点
   * @description 删除组织机构树中的某一个节点
   *
   * @param {string} orgId 组织机构 ID
   * @param {string} nodeId 节点 ID
   *
   * @returns {Promise<CommonMessage>}
   * @memberof OrgManagementClient
   */
  async deleteNode(orgId: string, nodeId: string) {
    const { deleteNode: data } = await deleteNode(
      this.graphqlClient,
      this.tokenProvider,
      {
        orgId,
        nodeId
      }
    );
    return data;
  }

  /**
   * @name moveNode 移动节点
   * @name_zh 移动节点
   * @description 移动组织机构节点，移动某节点时需要指定该节点新的父节点。注意不能将一个节点移动到自己的子节点下面。
   *
   * @param {string} orgId 组织机构 ID
   * @param {string} nodeId 需要移动的节点 ID
   * @param {string} targetParentId 目标父节点 ID
   *
   * @example
   *
   * await managementClient.org.moveNode("ORGID", "NODEID", "TRAGET_NODE_ID")
   *
   * @returns {Promise<Org>} 最新的树结构
   * @memberof OrgManagementClient
   *
   */
  async moveNode(orgId: string, nodeId: string, targetParentId: string) {
    const { moveNode: org } = await moveNode(
      this.graphqlClient,
      this.tokenProvider,
      {
        orgId,
        nodeId,
        targetParentId
      }
    );
    return this.buildTree(org);
  }

  /**
   * @name isRootNode
   * @name_zh 判断是否为根节点
   * @description 判断一个节点是不是组织树的根节点
   *
   * @param {string} orgId 组织机构 ID
   * @param {string} nodeId 组织机构 ID
   *
   *
   * @returns {Promise<boolean>}
   * @memberof OrgManagementClient
   */
  async isRootNode(orgId: string, nodeId: string): Promise<boolean> {
    const res = await isRootNode(this.graphqlClient, this.tokenProvider, {
      orgId,
      nodeId
    });
    return res.isRootNode;
  }

  /**
   * @name listChildren
   * @name_zh 获取子节点列表
   * @description 查询一个节点的子节点列表
   *
   * @param {string} orgId 组织机构 ID
   * @param {string} nodeId 组织机构 ID
   *
   * @example
   *
   * // 子节点列表
   * cosnt children = await managementClient.org.moveNode("ORGID", "NODEID")
   *
   *
   * @returns {Promise<Node[]>}
   * @memberof OrgManagementClient
   */
  async listChildren(orgId: string, nodeId: string) {
    const res = await getChildrenNodes(this.graphqlClient, this.tokenProvider, {
      orgId,
      nodeId
    });
    return res.childrenNodes;
  }

  /**
   * @name rootNode
   * @name_zh 获取根节点
   * @description 获取一个组织的根节点
   *
   * @param {string} orgId 组织机构 ID
   *
   * @example
   *
   * const rootNode = await managementClient.org.rootNode("ORGID")
   *
   * @returns {Promise<Node[]>}
   * @memberof OrgManagementClient
   */
  async rootNode(orgId: string) {
    const res = await rootNode(this.graphqlClient, this.tokenProvider, {
      orgId
    });
    return res.rootNode;
  }

  /**
   * @name importByJson
   * @name_zh 通过 JSON 导入
   * @description 通过一个 JSON 树结构导入组织机构
   *
   * @param {Object} json JSON 格式的树结构，详细格式请见示例代码。
   *
   * @example
   *
   * const tree = {
   *   name: '北京非凡科技有限公司',
   *   code: 'feifan',
   *   children: [
   *      {
   *          code: 'operation',
   *          name: '运营',
   *          description: '商业化部门'
   *       },
   *       {
   *         code: 'dev',
   *         name: '研发',
   *         description: '研发部门',
   *         children: [
   *           {
   *             code: 'backend',
   *             name: '后端',
   *             description: '后端研发部门'
   *           }
   *         ]
   *       }
   *     ]
   *   };
   * const org = await managementClient.org.importByJson(tree);
   *
   * @returns {Promise<Node[]>}
   * @memberof OrgManagementClient
   */
  async importByJson(json: { [x: string]: any }) {
    const data = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/orgs/import`,
      data: {
        filetype: 'json',
        file: json
      }
    });
    return data;
  }

  /**
   * @name addMembers
   * @name_zh 添加成功
   * @description 节点添加成员
   *
   * @param {string} nodeId 节点 ID
   * @param {string[]} userIds 用户 ID 列表
   *
   * @returns {Promise<PaginatedUsers>}
   * @memberof OrgManagementClient
   *
   */
  async addMembers(nodeId: string, userIds: string[]): Promise<PaginatedUsers> {
    const { addMember: data } = await addMember(
      this.graphqlClient,
      this.tokenProvider,
      {
        nodeId,
        userIds
      }
    );
    return data.users;
  }

  /**
   * @name listMembers
   * @name_zh 获取节点成员
   * @description 获取节点成员，可以获取直接添加到该节点中的用户，也可以获取到该节点子节点的用户。
   *
   * @param {string} nodeId 节点 ID
   * @param {Object} options 查询参数
   * @param {number} [options.page=1]
   * @param {number} [options.limit=10]
   * @param {boolean} [options.includeChildrenNodes=false] 是否获取所有子节点的成员
   *
   *
   * @returns {Promise<PaginatedUsers>}
   * @memberof OrgManagementClient
   *
   */
  async listMembers(
    nodeId: string,
    options?: {
      page?: number;
      limit?: number;
      includeChildrenNodes?: boolean;
    }
  ): Promise<PaginatedUsers> {
    const { nodeById } = await getMembersById(
      this.graphqlClient,
      this.tokenProvider,
      {
        id: nodeId,
        ...options
      }
    );
    return nodeById.users;
  }

  /**
   * @name removeMembers
   * @name_zh 删除成功
   * @description 删除节点成员
   *
   * @param {string} nodeId 节点 ID
   * @param {string[]} userIds 用户 ID 列表
   *
   * @returns {Promise<PaginatedUsers>}
   * @memberof OrgManagementClient
   *
   */
  async removeMembers(
    nodeId: string,
    userIds: string[]
  ): Promise<PaginatedUsers> {
    const { removeMember: data } = await removeMembers(
      this.graphqlClient,
      this.tokenProvider,
      {
        nodeId,
        userIds
      }
    );
    return data.users;
  }
}
