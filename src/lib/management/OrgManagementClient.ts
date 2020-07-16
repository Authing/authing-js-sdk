import { searchNodes } from './../graphqlapi/management.org.searchNodes';
import { orgRootNode } from './../graphqlapi/management.org.rootNode';
import { orgChildrenNodes } from './../graphqlapi/management.org.children';
import { isRootNodeOfOrg } from './../graphqlapi/management.org.isRoot';
import { removeOrgNode } from './../graphqlapi/management.org.removeNode';
import { org } from './../graphqlapi/management.org.findById';
import { addOrgNode } from './../graphqlapi/management.org.addNode';
import { createOrg } from './../graphqlapi/management.org.create';
import { orgs } from './../graphqlapi/management.org.list';
import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import buildTree from '../utils/tree';
import _ from 'lodash';
import { deleteOrg } from '../graphqlapi/management.org.delete';
import { SearchOrgNodesVariables } from '../../types/codeGen';

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
      (org as any).tree = buildTree(_.cloneDeep(org.nodes));
    }
    return res.orgs;
  }

  /**
   * 创建组织机构
   * @memberof OrgManagementClient
   */
  async create(rootNodeId: string) {
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
  async addNode(options: {
    orgId: string;
    nodeId: string;
    parentNodeId: string;
  }) {
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
  async findById(id: string) {
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
  async delete(id: string) {
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
  async removeNode(orgId: string, nodeId: string) {
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
  async isRoot(orgId: string, nodeId: string) {
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
  async children(orgId: string, nodeId: string) {
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
  async rootNode(id: string) {
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
  async searchNodes(options: SearchOrgNodesVariables) {
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
