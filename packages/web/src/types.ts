export type StrDict = Record<string, string>

export type RedirectResponseMode = 'fragment' | 'query'

export type ImplicitResponseType = 'id_token token' | 'id_token'

export type MayBePromise<T> = T | Promise<T>

export type MsgListener = (e: MessageEvent<any>) => void

export type PasswordEncryptType = 'none' | 'rsa' | 'sm2'

export type EncryptType = 'rsa' | 'sm2'

interface CommonLoginOptions {
    // 小程序端使用 none 和 rsa
    passwordEncryptType?: PasswordEncryptType
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
    // 客户端真实 IP 地址。默认情况下，Authing 会将请求来源的 IP 识别为用户登录的 IP 地址，如果你在后端服务器中调用此接口，需要将此 IP 设置为用户的真实请求 IP。
    clientIp?: string
    // 额外请求上下文，将会传递到认证前和认证后的 Pipeline 的 context 对象中。了解如何在 Pipeline 的 context 参数中获取传入的额外 context。
    context?: string
    // 租户 ID
    tenantId?: string
    // 设置额外的用户自定义数据，你需要先在 Authing 控制台配置自定义数据。
    customData?: Record<string, unknown>
    // 是否开启自动注册。如果设置为 true，当用户不存在的时候，会先自动为其创建一个账号。
    autoRegister?: boolean
  }
export interface PasswordLoginOptions {
  connection?: 'PASSWORD'
  passwordPayload: {
    password: string
    email: string
  }
  options?:CommonLoginOptions
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
  options?:CommonLoginOptions
}
