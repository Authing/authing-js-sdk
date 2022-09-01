import {
  GetStorageFailData,
  GetStorageSuccessData,
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

export interface WxLoginOptions {
  connection?: 'wechat_mini_program_code' | 'wechat_mini_program_phone'
  extIdpConnidentifier: string
  wechatMiniProgramCodePayload: {
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
    phone: string
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
