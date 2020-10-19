import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import {
  CommonMessage,
  UdfDataType,
  UdfTargetType,
  UserDefinedField
} from '../../types/graphql.v2';
import { addUdf, removeUdf, udf } from '../graphqlapi';

/**
 * @name UdfManagementClient
 * @description Udf 是 User Defined Field（用户自定义字段） 的简称。Authing 的数据实体（如用户、角色、分组、组织机构等）可以添加自定义字段，你可以配置 Authing 默认不自带的字段，比如你需要创建以一个学校相关的应用，就可以添加一个自定义 \`school\` 字段。
 * 同时你可以在用户注册完成之后要求用户补充此字段的信息，详细文档请见 https://docs.authing.co/extensibility/user/extend-register-fields.html 。
 *
 * 此模块可以用于对自定义字段元数据进行管理。
 *
 * 请使用以下方式使用该模块：
 * \`\`\`javascript
 * import { ManagementClient } from "authing-js-sdk"
 * const managementClient = new ManagementClient({
 *    userPoolId: process.env.AUTHING_USERPOOL_ID,
 *    secret: process.env.AUTHING_USERPOOL_SECRET,
 *    host: process.env.AUTHING_HOST
 * })
 * managementClient.udf.list // 获取自定义字段元数据列表
 * managementClient.udf.create // 创建自定义字段
 * managementClient.udf.delete // 删除自定义字段
 * \`\`\`
 *
 * @class UdfManagementClient 自定义字段元数据管理
 */
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
   * @name create
   * @name_zh 添加自定义字段定义
   * @description 添加自定义字段定义，会返回用户池最新的自定义字段定义列表。
   *
   * @param {UdfTargetType} 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
   * @param {string} key 字段 key
   * @param {UdfDataType} dataType 数据类型，目前共支持五种数据类型。STRING 为字符串、NUMBER 为数字、DATETIME 为日期、BOOLEAN 为 boolean 值、OBJECT 为对象。
   * @param {string} label 字段 Label，一般是一个 Human Readable 字符串。
   *
   * @example
   *
   * import { ManagementClient, UdfTargetType, UdfDataType  } from "authing-js-sdk"
   * const udf = await management.udf.create(
   *    UdfTargetType.User,
   *    'school',
   *    UdfDataType.String,
   *    '学校'
   * );
   *
   * @example
   *
   * import { ManagementClient, UdfTargetType, UdfDataType  } from "authing-js-sdk"
   * const udf = await management.udf.create(
   *    UdfTargetType.User,
   *    'age',
   *    UdfDataType.Number,
   *    '年龄'
   * );
   *
   * @returns {Promise<UserDefinedField[]>}
   * @memberof UdfManagementClient
   */
  async create(
    targetType: UdfTargetType,
    key: string,
    dataType: UdfDataType,
    label: string
  ): Promise<UserDefinedField> {
    const { addUdf: data } = await addUdf(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType,
        dataType,
        key,
        label
      }
    );
    return data;
  }

  /**
   * @name list
   * @name_zh 获取自定义字段定义
   * @description 查询用户池定义的自定义字段
   *
   * @param {UdfTargetType} targetType 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
   * @example
   *
   * const list = await management.udf.list(UdfTargetType.User);
   *
   * @returns {Promise<UserDefinedField[]>}
   * @memberof UdfManagementClient
   */
  async list(targetType: UdfTargetType): Promise<UserDefinedField[]> {
    const { udf: list } = await udf(this.graphqlClient, this.tokenProvider, {
      targetType
    });
    return list;
  }

  /**
   * @name delete
   * @name_zh 删除自定义字段
   * @description 删除自定义字段
   *
   * @param {UdfTargetType} 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
   * @param {string} key 字段 key
   *
   * @example
   *
   * await management.udf.delete(UdfTargetType.User, 'school');
   *
   * @returns {Promise<UserDefinedField[]>}
   * @memberof UdfManagementClient
   */
  async delete(targetType: UdfTargetType, key: string): Promise<CommonMessage> {
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
