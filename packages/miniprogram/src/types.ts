import {
  GetStorageFailData,
  GetStorageSuccessData,
  RemoveStorageFailData,
  RemoveStorageSuccessData,
  SetStorageCallbackData
} from '@authing/authingmove-core'

export interface AuthingOptions {
  appId: string
  host?: string
}

export declare class AuthingPlugin {
  constructor(options?: any)
  apply(authing: IAuthing): void
}

export declare abstract class IAuthing {
  readonly options: AuthingOptions
  readonly storage: IStorageProvider
  static plugins: AuthingPlugin[]
  readonly client: Record<string, AuthingPlugin>

  constructor(options: AuthingOptions)

  tap(name: string, ctx: AuthingPlugin): void

  static use(plugins: AuthingPlugin[]): void
}

export declare abstract class IStorageProvider {
  get(key: string): Promise<GetStorageSuccessData | GetStorageFailData>

  set(key: string, data: unknown): Promise<SetStorageCallbackData>

  remove(key: string): Promise<RemoveStorageSuccessData | RemoveStorageFailData>
}

export interface LoginOptions {
  connection: 'wechat_mini_program_code' | 'wechat_mini_program_phone'
  extIdpConnidentifier: string
  wechatMiniProgramCodePayload: {
    encryptedData: string
    iv: string
    code: string
  }
}
