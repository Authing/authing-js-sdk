import { AdminLogsInfo, ManagementClientOptions, UserLogsInfo } from './types';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { HttpClient } from '../common/HttpClient';

/**
 * @class StatisticsManagementClient 管理日志统计信息
 * @name StatisticsManagementClient
 * @description 管理日志统计信息
 *
 * @example
 *
 * 请使用以下方式使用该模块：
 * \`\`\`javascript
 * import { StatisticsManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: "YOUR_USERPOOL_ID",
 *    secret: "YOUR_USERPOOL_SECRET",
 * })
 * managementClient.statistics.listUserActions // 查看用户操作日志
 * managementClient.statistics.listAuditLogs // 查看审计日志
 * \`\`\`
 *
 */
export class StatisticsManagementClient {
  options: ManagementClientOptions;
  httpClient: HttpClient;
  tokenProvider: ManagementTokenProvider;

  constructor(
    options: ManagementClientOptions,
    httpClient: HttpClient,
    tokenProvider: ManagementTokenProvider
  ) {
    this.options = options;
    this.httpClient = httpClient;
    this.tokenProvider = tokenProvider;
  }

  /**
   * 查看用户操作日志
   * @param options.operationNames SupportedUserActionEnum
   */
  async listUserActions(options?: {
    clientIp?: string;
    operationNames?: string[];
    userIds?: string[];
    page?: number;
  }): Promise<{ totalCount: number; list: UserLogsInfo[] }> {
    let requestParam: any = {};
    if (options?.clientIp) {
      requestParam.clientip = options.clientIp;
    }
    if (options?.operationNames) {
      requestParam.operation_name = options.operationNames;
    }
    if (options?.userIds) {
      requestParam.operator_arn = options.userIds.map(userId => {
        return `arn:cn:authing:${this.options.userPoolId}:user:${userId}`;
      });
    }
    if (options?.page) {
      requestParam.page = options.page;
    }
    const result: any = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/analysis/user-action`,
      params: { ...requestParam }
    });
    const { list, totalCount } = result;
    return {
      list: list.map((log: any) => {
        return {
          userpoolId: log.userpool_id,
          userId: log.user.id,
          username: log.user.displayName,
          cityName: log.geoip.city_name,
          regionName: log.geoip.region_name,
          clientIp: log.geoip.ip,
          operationDesc: log.operation_desc,
          operationName: log.operation_name,
          timestamp: log.timestamp,
          appId: log.app_id,
          appName: log.app?.name
        };
      }),
      totalCount
    };
  }

  /**
   * 查看审计日志
   * @param options.operationNames  SupportedAdminActionEnum
   */
  async listAuditLogs(options?: {
    clientIp?: string;
    operationNames?: string[];
    operatorArns?: string[];
    page?: number;
  }): Promise<{ list: AdminLogsInfo[]; totalCount: number }> {
    let requestParam: any = {};
    if (options?.clientIp) {
      requestParam.clientip = options.clientIp;
    }
    if (options?.operationNames) {
      requestParam.operation_name = options.operationNames;
    }
    if (options?.operatorArns) {
      requestParam.operator_arn = options.operatorArns;
    }
    if (options?.page) {
      requestParam.page = options.page;
    }
    const result: any = await this.httpClient.request({
      method: 'GET',
      url: `${this.options.host}/api/v2/analysis/audit`,
      params: { ...requestParam }
    });
    const { list, totalCount } = result;
    return {
      list: list.map((log: any) => {
        return {
          userpoolId: log.userpool_id,
          operatorType: log.operator_type,
          operatorId: log.operator_detail.id,
          operatorName: log.operator_detail.displayName,
          operationName: log.operation_name,
          cityName: log.geoip.city_name,
          regionName: log.geoip.region_name,
          clientIp: log.geoip.ip,
          resourceType: log.resource_type,
          resourceDesc: log.resource_desc,
          resource_arn: log.resource_arn,
          timestamp: log.timestamp
        };
      }),
      totalCount
    };
  }
}
