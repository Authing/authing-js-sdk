import {
  GetStorageFailData,
  GetStorageSuccessData,
  IObject,
  RemoveStorageFailData,
  RemoveStorageSuccessData,
  SetStorageCallbackData
} from '@authing/authingmove-core'

export interface AuthingOptions {
  appId: string
  userPoolId: string
  host?: string
  encryptFunction?: EncryptFunction
}

export interface ModuleOptions {
  authingOptions: AuthingOptions
  storage: IStorageProvider
  encryptFunction?: EncryptFunction
}

export interface LoginState {
  idToken: string
  accessToken: string
}

export interface EncryptFunction {
  (plainText: string, publicKey: string): string
}

export declare abstract class IStorageProvider {
  get(key: string): Promise<GetStorageSuccessData | GetStorageFailData>

  set(key: string, data: unknown): Promise<SetStorageCallbackData>

  remove(key: string): Promise<RemoveStorageSuccessData | RemoveStorageFailData>
}

interface WxLoginOptions {
  connection?: string
  extIdpConnidentifier: string
  options?: {
    // openid：必须包含
    // profile：返回 birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, update_at, website, zoneinfo
    // username： 返回 username
    // email：返回 email、email_verified
    // phone：返回 phone_number, phone_number_verified
    // offline_access: 如果存在此参数，token 接口会返回 refresh_token 字段
    // roles: 返回用户的角色列表
    // external_id：用户在原有系统的用户 ID
    // extended_fields：返回用户的扩展字段信息，内容为一个对象，key 为扩展字段，value 为扩展字段值
    // tenant_id：返回用户的租户 id
    scope?: string
    // 额外请求上下文，将会传递到认证前和认证后的 [Pipeline](https://docs.authing.cn/v2/guides/pipeline/) 的 `context` 对象中。了解[如何在 Pipeline 的 `context` 参数中获取传入的额外 context](https://docs.authing.cn/v2/guides/pipeline/context-object.html)。
    // {
    //   source: 'utm',
    // }
    context?: IObject
    // 租户 ID
    tenantId?: string
    // 设置额外的用户自定义数据，你需要先在 Authing 控制台[配置自定义数据](https://docs.authing.cn/v2/guides/users/user-defined-field/)。
    // {
    //   school: 'pku',
    //   age: '20',
    // }
    customData?: IObject
  }
}

export interface WxCodeLoginOptions extends WxLoginOptions {
  connection?: 'wechat_mini_program_code'
  wechatMiniProgramCodePayload: {
    encryptedData: string
    iv: string
    code: string
  }
}

export interface WxPhoneLoginOptions extends WxLoginOptions {
  connection?: 'wechat_mini_program_phone'
  wechatMiniProgramPhonePayload: {
    encryptedData: string
    iv: string
    code: string
  }
}

export interface PasswordLoginOptions {
  connection?: 'PASSWORD'
  passwordPayload: {
    password: string
    // 以下账号选其一
    account?: string
    email?: string
    username?: string
    phone?: string
  }
  options?: {
    // 小程序端使用 none 和 rsa
    passwordEncryptType?: 'none' | 'rsa' | 'sm2'
    // openid：必须包含
    // profile：返回 birthdate, family_name, gender, given_name, locale, middle_name, name, nickname, picture, preferred_username, profile, update_at, website, zoneinfo
    // username： 返回 username
    // email：返回 email、email_verified
    // phone：返回 phone_number, phone_number_verified
    // offline_access: 如果存在此参数，token 接口会返回 refresh_token 字段
    // roles: 返回用户的角色列表
    // external_id：用户在原有系统的用户 ID
    // extended_fields：返回用户的扩展字段信息，内容为一个对象，key 为扩展字段，value 为扩展字段值
    // tenant_id：返回用户的租户 id
    scope?: string
  }
}

export interface PassCodeLoginOptions {
  connection?: 'PASSCODE'
  passCodePayload: {
    passCode: string
    email?: string
    phone?: string
    // 默认 +86,手机区号，中国大陆手机号可不填
    phoneCountryCode?: string
  }
}

export interface UserInfo {
  name?: string
  nickname?: string
  photo?: string
  externalId?: string
  birthdate?: string
  country?: string
  province?: string
  city?: string
  address?: string
  streetAddress?: string
  postalCode?: string
  gender?: string
  username?: string
  customData?: any
}

export interface GetPhoneOptions {
  extIdpConnidentifier: string
  code: string
}

export type SmsChannel =
  | 'CHANNEL_LOGIN'
  | 'CHANNEL_REGISTER'
  | 'CHANNEL_RESET_PASSWORD'
  | 'CHANNEL_BIND_PHONE'
  | 'CHANNEL_UNBIND_PHONE'
  | 'CHANNEL_BIND_MFA'
  | 'CHANNEL_VERIFY_MFA'
  | 'CHANNEL_UNBIND_MFA'
  | 'CHANNEL_COMPLETE_PHONE'
  | 'CHANNEL_IDENTITY_VERIFICATION'
  | 'CHANNEL_DELETE_ACCOUNT'

export interface SendSmsOptions {
  phoneNumber: string
  channel: SmsChannel
  // 默认 +86，手机区号，中国大陆手机号可不填
  phoneCountryCode?: string
}

export interface RefreshTokenOptions {
  grant_type: 'refresh_token'
  redirect_uri: string
  refresh_token: string
}

export interface UpdatePasswordOptions {
  newPassword: string
  oldPassword: string
  // 小程序端使用 none 和 rsa
  passwordEncryptType?: 'none' | 'rsa' | 'sm2'
}

export interface ChangeQrcodeStatusOptions {
  qrcodeId: string
  // SCAN: 修改二维码状态为已扫码状态，当移动 APP 扫了码之后，应当立即执行此操作；
  // CONFIRM: 修改二维码状态为已授权，执行此操作前必须先执行 `SCAN 操作；
  // CANCEL: 修改二维码状态为已取消，执行此操作前必须先执行 `SCAN 操作；
  action: 'SCAN' | 'CONFIRM' | 'CANCEL'
}

export interface LoginStateOptions {
  access_token: string
  expires_in: number
  expires_at: number
  id_token: string
  scope: string
  token_type: string
  refresh_token?: string
}

export interface RefreshTokenResponseData extends LoginStateOptions {
  refresh_token: string
}

export interface NormalResponseData {
  message: string
  statusCode: number
}

export interface GetUserPhoneResponseData {
  countryCode: string // '86'
  phoneNumber: string
  purePhoneNumber: string
  watermark: {
    appid: string
    timestamp: number
  }
}

export interface ChangeQrcodeStatusResponseData extends NormalResponseData {
  apiCode: number
}

export type LogoutResponseData =
  | RemoveStorageSuccessData
  | RemoveStorageFailData
  | void

export type EncryptType = 'rsa' | 'sm2'

export interface UploadFileResponseData {
  code: number
  message: string
  data: {
    key: string
    url: string
  }
}
