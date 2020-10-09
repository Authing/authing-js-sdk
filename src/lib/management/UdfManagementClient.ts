import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import { UdfDataType, UdfTargetType } from '../../types/graphql.v2';
import { addUdf, removeUdf, udf } from '../graphqlapi';

export class UdfManagementClient {
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
   * @description 查询用户池定义的自定义字段
   *
   */
  async list(targetType: UdfTargetType) {
    const { udf: list } = await udf(this.graphqlClient, this.tokenProvider, {
      targetType
    });
    return list;
  }

  /**
   * @description 添加自定义字段
   *
   */
  async create(
    /** 目标类型 */
    targetType: UdfTargetType,
    /** 字段 key */
    key: string,
    /** 数据类型 */
    dataType: UdfDataType,
    /** 字段 label */
    label: string
  ) {
    const { addUdf: list } = await addUdf(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType,
        dataType,
        key,
        label
      }
    );
    return list;
  }

  /**
   * @description 删除自定义字段
   *
   */
  async remove(
    /** 目标类型 */
    targetType: UdfTargetType,
    /** 字段 key */
    key: string
  ) {
    const { removeUdf: list } = await removeUdf(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType,
        key
      }
    );
    return list;
  }
}
