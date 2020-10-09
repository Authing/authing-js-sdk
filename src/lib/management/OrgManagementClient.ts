import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ExtendedOrg, ManagementClientOptions } from './types';
import buildTree from '../utils';
import _ from 'lodash';
import {
  orgs,
  createOrg,
  org,
  deleteOrg,
  deleteNode,
  getChildrenNodes,
  addMember,
  getMembersByCode,
  getMembersById,
  addNode,
  updateNode,
  moveNode,
  removeMembers,
  isRootNode,
  rootNode
} from '../graphqlapi';
import Axios from 'axios';
import { SDK_VERSION } from '../version';
import { Org, PaginatedUsers, SortByEnum } from '../../types/graphql.v2';

export class OrgManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
  }

  buildTree(org: DeepPartial<Org>): ExtendedOrg {
    (org as any).tree = buildTree(_.cloneDeep(org.nodes) as any);
    return org as ExtendedOrg;
  }

  /**
   * @description 获取用户池组织机构列表
   * @param page 从 1 开始，默认为 1
   * @param limit 默认为 10
   *
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
   * 创建组织机构
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
   * 往组织机构中添加一个节点
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

  async updateNode(
    id: string,
    updates: {
      name: string;
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
   * 通过 ID 查询组织机构
   * @memberof OrgManagementClient
   */
  async findById(id: string) {
    const { org: data } = await org(this.graphqlClient, this.tokenProvider, {
      id
    });
    return this.buildTree(data);
  }

  /**
   * 删除组织机构树
   * @param {string} id
   * @returns
   * @memberof OrgManagementClient
   */
  async delete(id: string) {
    const res = await deleteOrg(this.graphqlClient, this.tokenProvider, {
      id
    });
    return res.deleteOrg;
  }

  /**
   * 删除组织机构树中的某一个节点
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
   * @description 移动节点
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
   * 判断一个节点是不是组织树的根节点
   * @param {string} orgId
   * @param {string} nodeId
   * @returns
   * @memberof OrgManagementClient
   */
  async isRootNode(orgId: string, nodeId: string) {
    const res = await isRootNode(this.graphqlClient, this.tokenProvider, {
      orgId,
      nodeId
    });
    return res.isRootNode;
  }

  /**
   * 查询节点子节点列表
   * @param {string} orgId
   * @param {string} nodeId
   * @returns
   * @memberof OrgManagementClient
   */
  async childrenNodes(orgId: string, nodeId: string) {
    const res = await getChildrenNodes(this.graphqlClient, this.tokenProvider, {
      orgId,
      nodeId
    });
    return res.childrenNodes;
  }

  /**
   * 查询组织机构树根节点
   * @memberof OrgManagementClient
   */
  async rootNode(orgId: string) {
    const res = await rootNode(this.graphqlClient, this.tokenProvider, {
      orgId
    });
    return res.rootNode;
  }

  /**
   * @description 通过一个 JSON 导入树机构
   *
   */
  async import(json: { [x: string]: any }) {
    const api = `${this.options.host}/v2/api/org/import-by-json`;
    const res = await Axios.post(api, json, {
      headers: {
        'x-authing-userpool-id': this.options.userPoolId,
        'x-authing-sdk-version': SDK_VERSION,
        'x-authing-request-from': 'sdk'
      }
    });
    return res.data as Org;
  }

  /**
   * @description 节点添加成员
   *
   */
  async addMember(
    nodeId: string,
    userId: string,
    isLeader?: boolean
  ): Promise<PaginatedUsers>;
  async addMember(
    orgId: string,
    nodeCode: string,
    userId: string,
    isLeader?: boolean
  ): Promise<PaginatedUsers>;
  async addMember(arg1: any, arg2: any, arg3?: any, arg4?: boolean) {
    if (arguments.length === 4) {
      const orgId = arg1;
      const nodeCode = arg2;
      const userId = arg3;
      const isLeader = arg4 || false;
      const { addMember: data } = await addMember(
        this.graphqlClient,
        this.tokenProvider,
        {
          orgId,
          nodeCode,
          userIds: [userId],
          isLeader
        }
      );
      return data.users;
    } else {
      const nodeId = arg1;
      const userId = arg2;
      const isLeader = arg3 || false;
      const { addMember: data } = await addMember(
        this.graphqlClient,
        this.tokenProvider,
        {
          nodeId,
          userIds: [userId],
          isLeader
        }
      );
      return data.users;
    }
  }

  /**
   * @description 节点批量添加成员
   *
   */
  async addMembers(
    nodeId: string,
    userIds: string[],
    isLeader?: boolean
  ): Promise<PaginatedUsers>;
  async addMembers(
    orgId: string,
    nodeCode: string,
    userIds: string[],
    isLeader?: boolean
  ): Promise<PaginatedUsers>;
  async addMembers(arg1: any, arg2: any, arg3?: any, arg4?: any) {
    if (typeof arg2 === 'string') {
      const orgId = arg1;
      const nodeCode = arg2;
      const userIds = arg3;
      const isLeader = arg4 || false;
      const res = await addMember(this.graphqlClient, this.tokenProvider, {
        orgId,
        nodeCode,
        userIds,
        isLeader
      });
      return res.addMember.users;
    } else {
      const nodeId = arg1;
      const userIds = arg2;
      const isLeader = arg3 || false;
      const res = await addMember(this.graphqlClient, this.tokenProvider, {
        nodeId,
        userIds,
        isLeader
      });
      return res.addMember.users;
    }
  }

  async getMembers(
    nodeId: string,
    options?: {
      page?: number;
      limit?: number;
      sortBy?: SortByEnum;
      includeChildrenNodes?: boolean;
    }
  ): Promise<PaginatedUsers>;
  async getMembers(
    orgId: string,
    nodeCode: string,
    options?: {
      page?: number;
      limit?: number;
      sortBy?: SortByEnum;
      includeChildrenNodes?: boolean;
    }
  ): Promise<PaginatedUsers>;
  async getMembers(arg1: any, arg2?: any, arg3?: any): Promise<PaginatedUsers> {
    if (arg3 || (arg2 && typeof arg2 === 'string')) {
      const orgId = arg1;
      const code = arg2;
      const options = arg3 || {};
      const { nodeByCode } = await getMembersByCode(
        this.graphqlClient,
        this.tokenProvider,
        {
          orgId,
          code,
          ...options
        }
      );
      return nodeByCode.users;
    } else {
      const id = arg1;
      const options = arg2 || {};
      const { nodeById } = await getMembersById(
        this.graphqlClient,
        this.tokenProvider,
        {
          id,
          ...options
        }
      );
      return nodeById.users;
    }
  }

  /**
   * @description 移除用户
   *
   */
  async removeMember(nodeId: string, userId: string): Promise<PaginatedUsers>;
  async removeMember(
    orgId: string,
    nodeCode: string,
    userId: string
  ): Promise<PaginatedUsers>;
  async removeMember(
    arg1: any,
    arg2: any,
    arg3?: any
  ): Promise<PaginatedUsers> {
    if (arg3) {
      const orgId = arg1;
      const code = arg2;
      const userId = arg3;
      const { removeMember: data } = await removeMembers(
        this.graphqlClient,
        this.tokenProvider,
        {
          orgId,
          nodeCode: code,
          userIds: [userId]
        }
      );
      return data.users;
    } else {
      const nodeId = arg1;
      const userId = arg2;
      const { removeMember: data } = await removeMembers(
        this.graphqlClient,
        this.tokenProvider,
        {
          nodeId,
          userIds: [userId]
        }
      );
      return data.users;
    }
  }

  /**
   * @description 批量移除用户
   *
   */
  async removeMembers(
    nodeId: string,
    userIds: string[]
  ): Promise<PaginatedUsers>;
  async removeMembers(
    orgId: string,
    nodeCode: string,
    userIds: string[]
  ): Promise<PaginatedUsers>;
  async removeMembers(
    arg1: any,
    arg2: any,
    arg3?: any
  ): Promise<PaginatedUsers> {
    if (arg3) {
      const orgId = arg1;
      const code = arg2;
      const userIds = arg3;
      const { removeMember: data } = await removeMembers(
        this.graphqlClient,
        this.tokenProvider,
        {
          orgId,
          nodeCode: code,
          userIds
        }
      );
      return data.users;
    } else {
      const nodeId = arg1;
      const userIds = arg2;
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
}
