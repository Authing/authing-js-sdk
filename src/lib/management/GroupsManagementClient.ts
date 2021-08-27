import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import {
  addUserToGroup,
  createGroup,
  deleteGroups,
  getGroups,
  group,
  groupWithUsers,
  groupWithUsersWithCustomData,
  listGroupAuthorizedResources,
  removeUserFromGroup,
  updateGroup
} from '../graphqlapi';
import {
  CommonMessage,
  Group,
  PaginatedAuthorizedResources,
  PaginatedGroups,
  ResourceType
} from '../../types/graphql.v2';
import { DeepPartial, PaginatedUsers } from '../../types/index';
import { convertUdvToKeyValuePair, formatAuthorizedResources } from '../utils';

/**
 * @class GroupsManagementClient 管理分组
 * @description 此模块用于管理 Authing 分组，可以进行分组的增删改查、分组添加/删除用户、分组添加/删除策略 等操作。
 *
 * @example
 *
 * 请使用以下方式使用该模块，而不要直接初始化该模块：
 * \`\`\`javascript
 * import { ManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.groups.list // 获取分组列表
 * managementClient.groups.create // 创建分组
 * managementClient.groups.listUsers // 获取分组用户列表
 * \`\`\`
 *
 * @name GroupsManagementClient
 */
export class GroupsManagementClient {
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
   * @name create
   * @name_zh 创建分组
   * @description 创建分组
   *
   * @param {string} code 分组唯一标志符
   * @param {string} name 分组名称
   * @param {string} [description] 描述
   *
   * @example
   * managementClient.groups.create('group', '分组 xxx')
   *
   * @returns {Promise<DeepPartial<Group>>}
   * @memberof GroupsManagementClient
   */
  async create(
    code: string,
    name: string,
    description?: string
  ): Promise<DeepPartial<Group>> {
    const res = await createGroup(this.graphqlClient, this.tokenProvider, {
      code,
      name,
      description
    });
    return res.createGroup;
  }

  /**
   * @name delete
   * @name_zh 删除分组
   * @description 删除分组
   *
   * @param {string} code 分组唯一标志符
   *
   * @example
   * managementClient.groups.delete('rolea')
   *
   * @returns {Promise<CommonMessage>}
   * @memberof GroupsManagementClient
   */
  async delete(code: string): Promise<CommonMessage> {
    const { deleteGroups: data } = await deleteGroups(
      this.graphqlClient,
      this.tokenProvider,
      {
        codeList: [code]
      }
    );
    return data;
  }

  /**
   * @name update
   * @name_zh 修改分组
   * @description 修改分组
   *
   * @param {string} code 分组唯一标志符
   * @param {Object} input
   * @param {string} [input.name] 新的名称
   * @param {string} [input.description] 新的描述信息
   * @param {string} [input.newCode] 新的唯一标志符
   *
   * @example
   * managementClient.groups.update('group', {newCode: 'newcode'})
   *
   *
   * @returns {Promise<DeepPartial<Group>>}
   * @memberof GroupsManagementClient
   */
  async update(
    code: string,
    input: {
      description?: string;
      newCode?: string;
      name?: string;
    }
  ): Promise<DeepPartial<Group>> {
    const { description, newCode, name } = input;
    const { updateGroup: data } = await updateGroup(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        name,
        description,
        newCode
      }
    );
    return data;
  }

  /**
   * @name detail
   * @name_zh 获取分组详情
   * @description 获取分组详情
   *
   * @param {string} code 分组唯一标志符
   *
   * @example
   * managementClient.groups.detail('manager')
   *
   * @returns {Promise<DeepPartial<Group>>} 分组详情
   * @memberof GroupsManagementClient
   */
  async detail(code: string): Promise<DeepPartial<Group>> {
    const { group: data } = await group(
      this.graphqlClient,
      this.tokenProvider,
      {
        code
      }
    );
    return data;
  }

  /**
   * @name list
   * @name_zh 获取分组列表
   * @description 获取分组列表
   *
   * @param {number} [page=1] 页码数
   * @param {number} [limit=10] 每页个数
   *
   * @example
   *
   * managementClient.groups.list(1, 10)
   *
   * @returns {Promise<DeepPartial<PaginatedGroups>>}
   * @memberof GroupsManagementClient
   */
  async list(
    page: number = 1,
    limit: number = 10
  ): Promise<DeepPartial<PaginatedGroups>> {
    const { groups: data } = await getGroups(
      this.graphqlClient,
      this.tokenProvider,
      {
        page,
        limit
      }
    );
    return data;
  }

  /**
   * @name deleteMany
   * @name_zh 批量删除分组
   * @description 批量删除分组
   *
   * @param {string[]} codeList 分组唯一标志符列表
   *
   * @example
   * managementClient.groups.deleteMany(['groupa', 'groupb'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof GroupsManagementClient
   */
  async deleteMany(codeList: string[]): Promise<CommonMessage> {
    const { deleteGroups: data } = await deleteGroups(
      this.graphqlClient,
      this.tokenProvider,
      {
        codeList
      }
    );
    return data;
  }

  /**
   * @name listUsers
   * @name_zh 获取分组用户列表
   * @description 获取分组用户列表
   * @param {string} code 分组唯一标志符
   * @param {number} [page=1] 页码数
   * @param {number} [limit=10] 每页个数
   *
   * @example
   *
   * managementClient.groups.listUsers(code)
   *
   * @returns {Promise<DeepPartial<PaginatedUsers>>}
   * @memberof GroupsManagementClient
   */
  async listUsers(
    code: string,
    options?: {
      withCustomData?: boolean;
      page?: number;
      limit?: number;
    }
  ): Promise<DeepPartial<PaginatedUsers>> {
    const { withCustomData = false, page = 1, limit = 10 } = options || {};
    if (!withCustomData) {
      const { group: data } = await groupWithUsers(
        this.graphqlClient,
        this.tokenProvider,
        {
          code,
          page,
          limit
        }
      );
      return data.users;
    } else {
      const { group: data } = await groupWithUsersWithCustomData(
        this.graphqlClient,
        this.tokenProvider,
        {
          code,
          page,
          limit
        }
      );
      let { totalCount, list } = data.users;
      list = list.map(user => {
        // @ts-ignore
        user.customData = convertUdvToKeyValuePair(user.customData);
        return user;
      });
      return {
        totalCount,
        // @ts-ignore
        list
      };
    }
  }

  /**
   * @name addUsers
   * @name_zh 添加用户
   * @description 添加用户
   *
   * @param {string} code 分组唯一标志符
   * @param {string[]} userIds 用户 ID 列表
   *
   * @example
   * managementClient.groups.addUsers(code, ['USERID1', 'USERID2'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof GroupsManagementClient
   */
  async addUsers(code: string, userIds: string[]): Promise<CommonMessage> {
    const res = await addUserToGroup(this.graphqlClient, this.tokenProvider, {
      code,
      userIds
    });
    return res.addUserToGroup;
  }

  /**
   * @name removeUsers
   * @name_zh 移除用户
   *
   * @description 移除用户
   *
   * @param {string} code 分组唯一标志符
   * @param {string[]} userIds 用户 ID 列表
   * @example
   * managementClient.groups.removeUsers(code, ['USERID1', 'USERID2'])
   *
   * @returns {Promise<CommonMessage>}
   * @memberof GroupsManagementClient
   */
  async removeUsers(code: string, userIds: string[]): Promise<CommonMessage> {
    const res = await removeUserFromGroup(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        userIds
      }
    );
    return res.removeUserFromGroup;
  }

  /**
   * @description 获取分组被授权的所有资源
   *
   * @param code: 分组 code
   * @param namespace: 权限组 namespace code
   * @param options.resourceType 资源类型
   */
  public async listAuthorizedResources(
    code: string,
    namespace: string,
    options?: {
      resourceType?: ResourceType;
    }
  ): Promise<PaginatedAuthorizedResources> {
    const { resourceType } = options || {};
    const { group } = await listGroupAuthorizedResources(
      this.graphqlClient,
      this.tokenProvider,
      {
        code,
        namespace,
        resourceType
      }
    );
    if (!group) {
      throw new Error('分组不存在');
    }
    let {
      authorizedResources: { list, totalCount }
    } = group;
    list = formatAuthorizedResources(list);
    return {
      list,
      totalCount
    };
  }
}
