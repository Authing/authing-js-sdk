import { GraphqlClient } from './../common/GraphqlClient';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { ManagementClientOptions } from './types';
import {
  CommonMessage,
  UdfDataType,
  UdfTargetType,
  UserDefinedField,
  UserDefinedData
} from '../../types/graphql.v2';
import { setUdf, removeUdf, udf, udv, setUdvBatch } from '../graphqlapi';
import { convertUdv } from '../utils';

/**
 * @name UdfManagementClient
 * @description Udf 是 User Defined Field（用户自定义字段） 的简称。Authing 的数据实体（如用户、角色、分组、组织机构等）可以添加自定义字段，你可以配置 Authing 默认不自带的字段，比如你需要创建以一个学校相关的应用，就可以添加一个自定义 \`school\` 字段。
 * 同时你可以在用户注册完成之后要求用户补充此字段的信息，详细文档请见 https://docs.authing.co/extensibility/user/extend-register-fields.html 。
 *
 * 此模块可以用于对自定义字段元数据进行管理。
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
 * managementClient.udf.list // 获取自定义字段元数据列表
 * managementClient.udf.set // 设置自定义字段
 * managementClient.udf.remove // 删除自定义字段
 * \`\`\`
 *
 * @class UdfManagementClient 管理自定义字段元数据
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
   * @name set
   * @name_zh 设置自定义字段元数据
   * @description 设置自定义字段元数据，如果该字段不存在会自动创建。
   *
   * @param {UdfTargetType} targetType 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
   * @param {string} key 字段 key
   * @param {UdfDataType} dataType 数据类型，目前共支持五种数据类型。STRING 为字符串、NUMBER 为数字、DATETIME 为日期、BOOLEAN 为 boolean 值、OBJECT 为对象。
   * @param {string} label 字段 Label，一般是一个 Human Readable 字符串。
   *
   * @example
   *
   * import { ManagementClient, UdfTargetType, UdfDataType  } from "authing-js-sdk"
   * const udf = await managementClient.udf.set(
   *    UdfTargetType.User,
   *    'school',
   *    UdfDataType.String,
   *    '学校'
   * );
   *
   * @example
   *
   * // 如果 age 这个自定义字段不存在，第一次会创建
   *
   * import { ManagementClient, UdfTargetType, UdfDataType  } from "authing-js-sdk"
   * const udf = await managementClient.udf.set(
   *    UdfTargetType.User,
   *    'age',
   *    UdfDataType.Number,
   *    '年龄'
   * );
   *
   * // 如果 age 字段之前创建过，会修改该字段的配置
   *
   * const udf = await managementClient.udf.set(
   *    UdfTargetType.User,
   *    'age',
   *    UdfDataType.Number,
   *    '新的描述信息'
   * );
   *
   * @returns {Promise<UserDefinedField[]>}
   * @memberof UdfManagementClient
   */
  async set(
    targetType: UdfTargetType,
    key: string,
    dataType: UdfDataType,
    label: string
  ): Promise<UserDefinedField> {
    const { setUdf: data } = await setUdf(
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
   * @name remove
   * @name_zh 删除自定义字段
   * @description 删除自定义字段
   *
   * @param {UdfTargetType} targetType 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
   * @param {string} key 字段 key
   *
   * @example
   *
   * await managementClient.udf.remove(UdfTargetType.User, 'school');
   *
   * @returns {Promise<UserDefinedField[]>}
   * @memberof UdfManagementClient
   */
  async remove(targetType: UdfTargetType, key: string): Promise<CommonMessage> {
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

  /**
   * @name list
   * @name_zh 获取自定义字段定义
   * @description 查询用户池定义的自定义字段
   *
   * @param {UdfTargetType} targetType 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
   * @example
   *
   * const list = await managementClient.udf.list(UdfTargetType.User);
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
   * @name listUdv
   * @name_zh 获取某一实体的自定义字段数据列表
   * @description 获取某一实体的自定义字段数据列表
   *
   *
   * @param {UdfTargetType} targetType 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
   * @param {string} targetId 自定义字段目标 id，如用户 ID
   * @example
   *
   * udfManagementClient.listUdv('USER', 'userId')
   *
   * @returns {Promise<Array<UserDefinedData>>}
   * @memberof UdfManagementClient
   */
  async listUdv(
    targetType: UdfTargetType,
    targetId: string
  ): Promise<Array<UserDefinedData>> {
    const { udv: list } = await udv(this.graphqlClient, this.tokenProvider, {
      targetType,
      targetId
    });
    return convertUdv(list);
  }

  /**
   * @name setUdvBatch
   * @name_zh 批量添加自定义数据
   * @description 批量添加自定义数据
   *
   * @param {UdfTargetType} targetType 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
   * @param {string} targetId 自定义字段目标 id，如用户 ID
   * @param {Object[]} [udvList]
   * @param {boolean} [udvList.key] 自定义字段的 key
   * @param {string} [udvList.value] 自定义字段的值
   *
   * @example
   *
   * udfManagementClient.setUdv('USER', 'userId', [{key: 'school', 'value': '清华大学'}])
   *
   * @returns {Promise<Array<UserDefinedData>>}
   * @memberof UdfManagementClient
   */
  async setUdvBatch(
    targetType: UdfTargetType,
    targetId: string,
    udvList: {
      key: string;
      value: any;
    }[]
  ): Promise<Array<UserDefinedData>> {
    const { setUdvBatch: list } = await setUdvBatch(
      this.graphqlClient,
      this.tokenProvider,
      {
        targetType,
        targetId,
        udvList: udvList.map(item => ({
          key: item.key,
          value: JSON.stringify(item.value)
        }))
      }
    );
    return convertUdv(list);
  }
}
