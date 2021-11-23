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
  async list(params?: {
    page: number;
    limit: number;
  }) {
    const { page = 1, limit = 10 } = params || {};
    const result  = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/tenants?page=${page}&limit=${limit}`
    });

    return result;
  }


  /**
   * @name details
   * @name_zh  获取租户详情
   * @description 获取租户详情
   */
  async details(tenantId :string) {
    const result  = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/tenant/${tenantId}`
    });
    return result;
  }


  /**
   * @name create
   * @name_zh  创建租户
   * @description 创建租户
   */
  async create(options:{
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
  async members(tenantId:string, options?:{
    page?:number,
    limit?:number
  })  {
    const {
      page = 1,
      limit = 10,
    } = options
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

  /**
   * @name listExtIdp
   * @name_zh  获取身份源列表
   * @description 获取身份源列表
   */
   async listExtIdp(tenantId:string)   {
    const result  = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/extIdp?tenantId=${tenantId}`
    });
    return result;
  }

  /**
   * @name extIdpDetail
   * @name_zh  获取身份源详细信息
   * @description 获取身份源详细信息
   */
   async extIdpDetail(extIdpId:string)   {
    const result  = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/extIdp/${extIdpId}`
    });
    return result;
  }

  /**
   * @name createExtIdp
   * @name_zh  创建身份源
   * @description 创建身份源
   */
   async createExtIdp(options: {
     tenantId?:string,
     name: string,
     type: string,
     connections: [{
       type: string,
       identifier: string,
       displayName: string,
       fields: any,
       userMatchFields?: string[],
       logo?: string
     }]
   }){
    const result  = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/extIdp`,
      data:{...options}
    });
    return result;
  }

  /**
   * @name updateExtIdp
   * @name_zh  更新身份源配置
   * @description 更新身份源配置
   */
   async updateExtIdp(extIdpId:string, options:{
    name:string
  })   {
    const result  = await this.httpClient.request({
      method: 'PUT',
      url: `${this.options.host}/api/v2/extIdp/${extIdpId}`,
      data: {...options}
    });
    return result;
  }

  /**
   * @name deleteExtIdp
   * @name_zh  删除身份源
   * @description 删除身份源
   */
   async deleteExtIdp(extIdpId:string)   {
    const result  = await this.httpClient.request({
      method: 'DELETE',
      url: `${this.options.host}/api/v2/extIdp/${extIdpId}`
    });
    return result;
  }

  /**
   * @name createExtIdpConnection
   * @name_zh  创建身份源连接
   * @description 创建身份源连接
   */
   async createExtIdpConnection(options: {
    extIdpId: string,
    type: string,
    identifier: string,
    displayName: string,
    fields: object,
    userMatchFields?: string[],
    logo?: string
  }){
   const result  = await this.httpClient.request({
     method: 'POST',
     url: `${this.options.host}/api/v2/extIdpConn`,
     data:{...options}
   });
   return result;
 }

 /**
   * @name updateExtIdpConnection
   * @name_zh  更新身份源连接
   * @description 更新身份源连接
   */
  async updateExtIdpConnection(extIdpConnectionId: string, options: {
    displayName: string,
    fields: object,
    userMatchFields?: string[],
    logo?: string
  }){
   const result  = await this.httpClient.request({
     method: 'PUT',
     url: `${this.options.host}/api/v2/extIdpConn/${extIdpConnectionId}`,
     data:{...options}
   });
   return result;
 }

 /**
   * @name deleteExtIdpConnection
   * @name_zh  删除身份源连接
   * @description 删除身份源连接
   */
  async deleteExtIdpConnection(identifier: string){
   const result  = await this.httpClient.request({
     method: 'DELETE',
     url: `${this.options.host}/api/v2/extIdpConn/${identifier}`,
   });
   return result;
 }

 /**
   * @name checkExtIdpConnectionIdentifierUnique
   * @name_zh  检查连接唯一标识是否冲突
   * @description 检查连接唯一标识是否冲突
   */
  async checkExtIdpConnectionIdentifierUnique(identifier: string){
    const result  = await this.httpClient.request({
      method: 'POST',
      url: `${this.options.host}/api/v2/extIdpConn/identifier`,
      data: {
        identifier: identifier,
      }
    });
    return result;
  }

  /**
   * @name changeExtIdpConnectionState
   * @name_zh  开关身份源连接
   * @description 开关身份源连接
   */
   async changeExtIdpConnectionState(identifier: string, options: {
     appId?: string,
     tenantId?: string,
     enable: boolean
   }){
    const result  = await this.httpClient.request({
      method: 'PUT',
      url: `${this.options.host}/api/v2/extIdpConn/${identifier}/state`,
      data: {...options}
    });
    return result;
  }

  /**
   * @name batchChangeExtIdpConnectionState
   * @name_zh  批量开关身份源连接
   * @description 批量开关身份源连接
   */
   async batchChangeExtIdpConnectionState(extIdpId: string, options: {
    appId?: string,
    tenantId?: string,
    enable: boolean
  }){
   const result  = await this.httpClient.request({
     method: 'PUT',
     url: `${this.options.host}/api/v2/extIdp/${extIdpId}/connState`,
     data: {...options}
   });
   return result;
 }






}
