import {
  CommonMessage
} from '../../types/graphql.v2';

import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { HttpClient } from '../common/HttpClient';
import { PublicKeyManager } from '../common/PublicKeyManager';

/**
 * @name TenantManagementClient
 * @description 租户管理模块
 *
 */
export class TenantManagementClient {
  options: ManagementClientOptions;
  graphqlClient: GraphqlClient;
  httpClient: HttpClient;
  tokenProvider: ManagementTokenProvider;
  publickKeyManager: PublicKeyManager;

  constructor(
    options: ManagementClientOptions,
    graphqlClient: GraphqlClient,
    httpClient: HttpClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.graphqlClient = graphqlClient;
    this.tokenProvider = tokenProvider;
    this.httpClient = httpClient;
  }

  /**
   * @name list
   * @name_zh  获取用户池下租户列表
   * @description 获取用户池下租户列表
   */
  async list(page:number =1,limit:number =10) {
    const result  = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/tenants?page=${page}&limit=${limit}`
    });

    return result;
  }


  /**
   * @name details
   * @name_zh  获取用户池下租户列表
   * @description 获取用户池下租户列表
   */
  async details(tenantId :string) {
    const result  = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/tenant/${tenantId}`
    });
    return result;
  }


  /**
   * @name add
   * @name_zh  创建租户
   * @description 创建租户
   */
  async add(options:{
    name:string,
    appIds:string,
    logo?:string,
    description?:string
  }) {
    const result  = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/tenant`,
      data:{...options}
    });
    return result;
  }

  /**
   * @name update
   * @name_zh  修改租户
   * @description 修改租户
   */
  async update(tenantId:string,options:{
    name:string,
    appIds?:string,
    logo?:string,
    description?:string
  }) {
    const result  = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/tenant/${tenantId}`,
      data:{...options}
    });
    return result;
  }

  /**
   * @name delete
   * @name_zh  删除租户
   * @description 删除租户
   */
  async delete(tenantId:string):Promise<CommonMessage> {
    const result  = await this.httpClient.request({
      method: 'DELETE',
      url: `${this.options.host}/api/v2/tenant/${tenantId}`,
    });
    return result;
  }

  /**
   * @name config
   * @name_zh  配置租户品牌化
   * @description 配置租户品牌化
   */
  async config(tenantId:string,options:{
    css?:string,
    ssoPageCustomizationSettings?:{
      autoRegisterThenLogin?: boolean,
      hideForgetPassword?: boolean,
      hideIdp?: boolean,
      hideSocialLogin?: boolean
    }
  })  {
    const result  = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/tenant/${tenantId}`,
      data:{...options}
    });
    return result;
  }


  /**
   * @name members
   * @name_zh  获取租户成员列表
   * @description 获取租户成员列表
   */
  async members(tenantId:string, page:number = 1,limit:number =10)  {
    const result  = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/tenant/${tenantId}/users?page=${page}&limit=${limit}`
    });
    return result;
  }

  /**
   * @name addMembers
   * @name_zh  添加租户成员
   * @description 添加租户成员
   */
  async addMembers(tenantId:string, userIds:Array<string>)  {
    const result  = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/tenant/${tenantId}/user`,
      data:{
        userIds:userIds
      }
    });
    return result;
  }

  /**
   * @name removeMembers
   * @name_zh  移除租户成员
   * @description 移除租户成员
   */
  async removeMembers(tenantId:string, userId:string)   {
    const result  = await this.httpClient.request({
      method: 'DELETE',
      url: `${this.options.host}/api/v2/tenant/${tenantId}/user?userId=${userId}`
    });
    return result;
  }

}
