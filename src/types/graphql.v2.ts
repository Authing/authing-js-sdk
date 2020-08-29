export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  email_String_NotNull_format_email: any;
  username_String_NotNull_minLength_4_maxLength_20: any;
  phone_String_NotNull_pattern_130911457911503591166170358118091198911d8: any;
  code_String_NotNull_minLength_4_maxLength_6: any;
  ip_String_format_ipv4: any;
};

export type Query = {
  qiniuUptoken?: Maybe<Scalars['String']>;
  isDomainAvaliable?: Maybe<Scalars['Boolean']>;
  /** 获取社会化登录定义 */
  socialConnection?: Maybe<SocialConnection>;
  /** 获取所有社会化登录定义 */
  socialConnections: Array<SocialConnection>;
  /** 获取当前用户池的社会化登录配置 */
  socialConnectionInstance: SocialConnectionInstance;
  /** 获取当前用户池的所有社会化登录配置 */
  socialConnectionInstances: Array<SocialConnectionInstance>;
  /** 获取所有协作管理员 */
  cooperators: Array<Cooperator>;
  cooperatedUserpools: PaginatedUserPoolCooperation;
  emailTemplates: Array<EmailTemplate>;
  previewEmail: Scalars['String'];
  /** 获取函数模版 */
  templateCode: Scalars['String'];
  function?: Maybe<Function>;
  functions: PaginatedFunctions;
  groups: PaginatedGroups;
  /** 查询 MFA 信息 */
  queryMfa?: Maybe<Mfa>;
  /** 通过 code 查询节点 */
  node: Node;
  /** 查询组织机构详情 */
  org: Org;
  /** 查询用户池组织机构列表 */
  orgs: PaginatedOrgs;
  /** 查询子节点列表 */
  childrenNodes: Array<Node>;
  checkPasswordStrength: CheckPasswordStrengthResult;
  pipeline: Pipeline;
  pipelines: PaginatedPipeline;
  isActionAllowed: Scalars['Boolean'];
  isActionDenied: Scalars['Boolean'];
  policies: PaginatedPolicies;
  /** 通过 **code** 查询角色详情 */
  role: Role;
  /** 获取角色列表 */
  roles: PaginatedRoles;
  user: User;
  userBatch: PaginatedUsers;
  users: PaginatedUsers;
  searchUser: PaginatedUsers;
  /** 查询用户池详情 */
  userpool: UserPool;
  /** 查询用户池列表 */
  userpools: PaginatedUserpool;
  userpoolTypes: Array<UserPoolType>;
  webhook: Webhook;
  webhooks: PaginatedWebhook;
  webhookLog: WebhookLog;
  webhookLogs: PaginatedWebhookLog;
  webhookOptions: WebhookOptions;
  /** 用户池注册白名单列表 */
  whitelist: Array<WhiteList>;
};

export type QueryQiniuUptokenArgs = {
  type?: Maybe<Scalars['String']>;
};

export type QueryIsDomainAvaliableArgs = {
  domain: Scalars['String'];
};

export type QuerySocialConnectionArgs = {
  provider: Scalars['String'];
};

export type QuerySocialConnectionInstanceArgs = {
  provider: Scalars['String'];
};

export type QueryCooperatedUserpoolsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};

export type QueryPreviewEmailArgs = {
  type: EmailTemplateType;
};

export type QueryFunctionArgs = {
  id?: Maybe<Scalars['String']>;
};

export type QueryFunctionsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};

export type QueryGroupsArgs = {
  userId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};

export type QueryQueryMfaArgs = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
};

export type QueryNodeArgs = {
  orgId: Scalars['String'];
  code: Scalars['String'];
};

export type QueryOrgArgs = {
  id: Scalars['String'];
};

export type QueryOrgsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};

export type QueryChildrenNodesArgs = {
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
};

export type QueryCheckPasswordStrengthArgs = {
  password: Scalars['String'];
};

export type QueryPipelineArgs = {
  id: Scalars['String'];
};

export type QueryIsActionAllowedArgs = {
  resouceCode: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
};

export type QueryIsActionDeniedArgs = {
  resouceCode: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
};

export type QueryRoleArgs = {
  code: Scalars['String'];
};

export type QueryRolesArgs = {
  userId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type QueryUserBatchArgs = {
  ids: Array<Scalars['String']>;
};

export type QueryUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};

export type QuerySearchUserArgs = {
  query: Scalars['String'];
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryUserpoolsArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};

export type QueryWebhookArgs = {
  webhookId?: Maybe<Scalars['String']>;
};

export type QueryWebhookLogArgs = {
  webhookLogId?: Maybe<Scalars['String']>;
};

export type QueryWhitelistArgs = {
  type: WhitelistType;
};

export type SocialConnection = {
  /** 社会化登录服务商唯一标志 */
  provider: Scalars['String'];
  /** 名称 */
  name: Scalars['String'];
  /** logo */
  logo: Scalars['String'];
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 表单字段 */
  fields?: Maybe<Array<SocialConnectionField>>;
};

export type SocialConnectionField = {
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SocialConnectionField>>>;
};

export type SocialConnectionInstance = {
  provider: Scalars['String'];
  enabled: Scalars['Boolean'];
  fields?: Maybe<Array<Maybe<SocialConnectionInstanceField>>>;
};

export type SocialConnectionInstanceField = {
  key: Scalars['String'];
  value: Scalars['String'];
};

/** 协作管理员 */
export type Cooperator = {
  /** 管理员的角色 */
  roles: Array<Role>;
  /** 管理员用户信息 */
  user: User;
};

export type Role = {
  /** 唯一标志 code */
  code: Scalars['String'];
  /** 角色名称 */
  name?: Maybe<Scalars['String']>;
  /** 角色描述 */
  description?: Maybe<Scalars['String']>;
  /** 是否为系统内建，系统内建的角色不能删除 */
  isSystem?: Maybe<Scalars['Boolean']>;
  /** 创建时间 */
  createdAt?: Maybe<Scalars['String']>;
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['String']>;
  /** 被授予此角色的用户列表 */
  users: PaginatedUsers;
  /** 父角色 */
  parent?: Maybe<Role>;
};

export type PaginatedUsers = {
  totalCount: Scalars['Int'];
  list: Array<User>;
};

export type User = {
  /** 用户 ID */
  id: Scalars['String'];
  /** 用户池 ID */
  userPoolId: Scalars['String'];
  /** 用户名，用户池内唯一 */
  username?: Maybe<Scalars['String']>;
  /** 邮箱，用户池内唯一 */
  email?: Maybe<Scalars['String']>;
  /** 邮箱是否已验证 */
  emailVerified?: Maybe<Scalars['Boolean']>;
  /** 手机号，用户池内唯一 */
  phone?: Maybe<Scalars['String']>;
  /** 手机号是否已验证 */
  phoneVerified?: Maybe<Scalars['Boolean']>;
  unionid?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  /** 昵称，该字段不唯一。 */
  nickname?: Maybe<Scalars['String']>;
  /** 注册方式 */
  registerSource: Array<Scalars['String']>;
  /** 头像链接，默认为 https://usercontents.authing.cn/authing-avatar.png */
  photo?: Maybe<Scalars['String']>;
  /** 用户密码，数据库使用密钥加 salt 进行加密，非原文密码。 */
  password?: Maybe<Scalars['String']>;
  /** 用户社会化登录第三方身份提供商返回的原始用户信息，非社会化登录方式注册的用户此字段为空。 */
  oauth?: Maybe<Scalars['String']>;
  /** 用户登录凭证，开发者可以在后端检验该 token 的合法性，从而验证用户身份。详细文档请见：[验证 Token](https://docs.authing.co/advanced/verify-jwt-token.html) */
  token?: Maybe<Scalars['String']>;
  /** token 过期时间 */
  tokenExpiredAt?: Maybe<Scalars['String']>;
  /** 用户登录总次数 */
  loginsCount?: Maybe<Scalars['Int']>;
  /** 用户最近一次登录时间 */
  lastLogin?: Maybe<Scalars['String']>;
  /** 用户上一次登录时使用的 IP */
  lastIP?: Maybe<Scalars['String']>;
  /** 用户注册时间 */
  signedUp?: Maybe<Scalars['String']>;
  /** 该账号是否被禁用 */
  blocked?: Maybe<Scalars['Boolean']>;
  /** 账号是否被软删除 */
  isDeleted?: Maybe<Scalars['Boolean']>;
  device?: Maybe<Scalars['String']>;
  browser?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  zoneinfo?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 自定义用户数据，是一个 JSON 序列化过后的字符串 */
  customData?: Maybe<Scalars['String']>;
};

export enum SortByEnum {
  /** 按照创建时间降序（后创建的在前面） */
  CreatedatDesc = 'CREATEDAT_DESC',
  /** 按照创建时间升序（先创建的在前面） */
  CreatedatAsc = 'CREATEDAT_ASC',
  /** 按照更新时间降序（最近更新的在前面） */
  UpdatedatDesc = 'UPDATEDAT_DESC',
  /** 按照更新时间升序（最近更新的在后面） */
  UpdatedatAsc = 'UPDATEDAT_ASC'
}

export type PaginatedUserPoolCooperation = {
  list: Array<UserPoolCooperation>;
  totalCount: Scalars['Int'];
};

/** 用户池协作关系 */
export type UserPoolCooperation = {
  /** 用户池 */
  userpool: UserPool;
  /** 在该用户池中具备的角色，未来可以支持多个角色 */
  role?: Maybe<Role>;
};

export type UserPool = {
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  secret: Scalars['String'];
  userpoolTypes?: Maybe<Array<UserPoolType>>;
  logo: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 用户邮箱是否验证（用户的 emailVerified 字段）默认值，默认为 false */
  emailVerifiedDefault: Scalars['Boolean'];
  /** 用户注册之后是否发送欢迎邮件 */
  sendWelcomeEmail: Scalars['Boolean'];
  /** 是否关闭注册 */
  registerDisabled: Scalars['Boolean'];
  /**
   * 用户池禁止注册后，是否还显示微信小程序扫码登录。当 **showWXMPQRCode** 为 **true** 时，
   * 前端显示小程序码，此时只有以前允许注册时，扫码登录过的用户可以继续登录；新用户扫码无法登录。
   */
  showWxQRCodeWhenRegisterDisabled?: Maybe<Scalars['Boolean']>;
  /** 前端跨域请求白名单 */
  allowedOrigins?: Maybe<Scalars['String']>;
  /** 用户 **token** 有效时间，单位为秒，默认为 15 天。 */
  tokenExpiresAfter?: Maybe<Scalars['Int']>;
  /** 是否已删除 */
  isDeleted?: Maybe<Scalars['Boolean']>;
  /** 注册频繁检测 */
  frequentRegisterCheck?: Maybe<FrequentRegisterCheckConfig>;
  /** 登录失败检测 */
  loginFailCheck?: Maybe<LoginFailCheckConfig>;
  /** 手机号修改策略 */
  changePhoneStrategy?: Maybe<ChangePhoneStrategy>;
  /** 邮箱修改策略 */
  changeEmailStrategy?: Maybe<ChangeEmailStrategy>;
  /** APP 扫码登录配置 */
  qrcodeLoginStrategy?: Maybe<QrcodeLoginStrategy>;
  /** APP 拉起小程序登录配置 */
  app2WxappLoginStrategy?: Maybe<App2WxappLoginStrategy>;
  /** 注册白名单配置 */
  whitelist?: Maybe<RegisterWhiteListConfig>;
};

export type UserPoolType = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  sdks?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FrequentRegisterCheckConfig = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type LoginFailCheckConfig = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ChangePhoneStrategy = {
  verifyOldPhone?: Maybe<Scalars['Boolean']>;
};

export type ChangeEmailStrategy = {
  verifyOldEmail?: Maybe<Scalars['Boolean']>;
};

export type QrcodeLoginStrategy = {
  qrcodeExpiresAfter?: Maybe<Scalars['Int']>;
  returnFullUserInfo?: Maybe<Scalars['Boolean']>;
  allowExchangeUserInfoFromBrowser?: Maybe<Scalars['Boolean']>;
  ticketExpiresAfter?: Maybe<Scalars['Int']>;
};

export type App2WxappLoginStrategy = {
  ticketExpriresAfter?: Maybe<Scalars['Int']>;
  ticketExchangeUserInfoNeedSecret?: Maybe<Scalars['Boolean']>;
};

export type RegisterWhiteListConfig = {
  /** 是否开启手机号注册白名单 */
  phoneEnabled?: Maybe<Scalars['Boolean']>;
  /** 是否开启邮箱注册白名单 */
  emailEnabled?: Maybe<Scalars['Boolean']>;
  /** 是否开用户名注册白名单 */
  usernameEnabled?: Maybe<Scalars['Boolean']>;
};

export type EmailTemplate = {
  /** 邮件模版类型 */
  type: EmailTemplateType;
  /** 模版名称 */
  name: Scalars['String'];
  /** 邮件主题 */
  subject: Scalars['String'];
  /** 显示的邮件发送人 */
  sender: Scalars['String'];
  /** 邮件模版内容 */
  content: Scalars['String'];
  /** 重定向链接，操作成功后，用户将被重定向到此 URL。 */
  redirectTo?: Maybe<Scalars['String']>;
  hasURL?: Maybe<Scalars['Boolean']>;
  /** 验证码过期时间（单位为秒） */
  expiresIn?: Maybe<Scalars['Int']>;
  /** 是否开启（自定义模版） */
  enabled?: Maybe<Scalars['Boolean']>;
  /** 是否是系统默认模版 */
  isSystem?: Maybe<Scalars['Boolean']>;
};

export enum EmailTemplateType {
  /** 重置密码确认 */
  ResetPassword = 'RESET_PASSWORD',
  /** 重置密码通知 */
  PasswordResetedNotification = 'PASSWORD_RESETED_NOTIFICATION',
  /** 修改密码验证码 */
  ChangePassword = 'CHANGE_PASSWORD',
  /** 注册欢迎邮件 */
  Welcome = 'WELCOME',
  /** 验证邮箱 */
  VerifyEmail = 'VERIFY_EMAIL',
  /** 修改绑定邮箱 */
  ChangeEmail = 'CHANGE_EMAIL'
}

/** 函数 */
export type Function = {
  /** ID */
  id: Scalars['String'];
  /** 函数名称 */
  name: Scalars['String'];
  /** 源代码 */
  sourceCode: Scalars['String'];
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 云函数链接 */
  url?: Maybe<Scalars['String']>;
};

export type PaginatedFunctions = {
  list: Array<Function>;
  totalCount: Scalars['Int'];
};

export type PaginatedGroups = {
  totalCount: Scalars['Int'];
  list: Array<Group>;
};

export type Group = {
  /** 唯一标志 code */
  code: Scalars['String'];
  /** 名称 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 创建时间 */
  createdAt?: Maybe<Scalars['String']>;
  /** 修改时间 */
  updatedAt?: Maybe<Scalars['String']>;
  /** 包含的用户列表 */
  users: PaginatedUsers;
};

export type Mfa = {
  /** MFA ID */
  id: Scalars['String'];
  /** 用户 ID */
  userId: Scalars['String'];
  /** 用户池 ID */
  userPoolId: Scalars['String'];
  /** 是否开启 MFA */
  enable: Scalars['Boolean'];
  /** 密钥 */
  secret?: Maybe<Scalars['String']>;
};

export type Node = {
  id: Scalars['String'];
  /** 节点名称 */
  name: Scalars['String'];
  /** 多语言名称，**key** 为标准 **i18n** 语言编码，**value** 为对应语言的名称。 */
  nameI18n?: Maybe<Scalars['String']>;
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 多语言描述信息 */
  descriptionI18n?: Maybe<Scalars['String']>;
  /** 在父节点中的次序值。**order** 值大的排序靠前。有效的值范围是[0, 2^32) */
  order?: Maybe<Scalars['Int']>;
  /** 节点唯一标志码，可以通过 code 进行搜索 */
  code?: Maybe<Scalars['String']>;
  /** 是否为根节点 */
  root?: Maybe<Scalars['Boolean']>;
  /** 距离父节点的深度（如果是查询整棵树，返回的 **depth** 为距离根节点的深度，如果是查询某个节点的子节点，返回的 **depath** 指的是距离该节点的深度。） */
  depth?: Maybe<Scalars['Int']>;
  path: Array<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 该节点的子节点 **ID** 列表 */
  children?: Maybe<Array<Scalars['String']>>;
  /** 节点的用户列表 */
  users: PaginatedUsers;
};

export type NodeUsersArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
};

export type Org = {
  /** 组织机构 ID */
  id: Scalars['String'];
  /** 根节点 */
  rootNode: Node;
  /** 组织机构节点列表 */
  nodes: Array<Node>;
};

export type PaginatedOrgs = {
  totalCount: Scalars['Int'];
  list: Array<Org>;
};

export type CheckPasswordStrengthResult = {
  valid: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type Pipeline = {
  id: Scalars['String'];
  name: Scalars['String'];
  trigger: Scalars['String'];
  functions: Array<PipelineFunction>;
};

export type PipelineFunction = {
  funcId: Scalars['String'];
  asynchronous: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
  function: Function;
};

export type PaginatedPipeline = {
  list: Array<Pipeline>;
  totalCount: Scalars['Int'];
};

export type PaginatedPolicies = {
  totalCount: Scalars['Int'];
  list: Array<Policy>;
};

/** 资源操作规则 */
export type Policy = {
  code: Scalars['String'];
  /** 资源 */
  resource: Scalars['String'];
  /** 操作 */
  actions: Array<Scalars['String']>;
  effect: PolicyEffect;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export enum PolicyEffect {
  Allow = 'ALLOW',
  Deny = 'DENY'
}

export type PaginatedRoles = {
  totalCount: Scalars['Int'];
  list: Array<Role>;
};

export type PaginatedUserpool = {
  totalCount: Scalars['Int'];
  list: Array<UserPool>;
};

export type Webhook = {
  id?: Maybe<Scalars['String']>;
  userPoolId: Scalars['String'];
  events: Array<WebhookEvent>;
  url: Scalars['String'];
  isLastTimeSuccess?: Maybe<Scalars['Boolean']>;
  contentType: Scalars['String'];
  secret?: Maybe<Scalars['String']>;
  enable: Scalars['Boolean'];
};

export type WebhookEvent = {
  name: Scalars['String'];
  label: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type PaginatedWebhook = {
  list: Array<Webhook>;
  totalCount: Scalars['Int'];
};

export type WebhookLog = {
  id: Scalars['String'];
  webhookId: Scalars['String'];
  userPoolId: Scalars['String'];
  event: Scalars['String'];
  request?: Maybe<WebhookRequestType>;
  response?: Maybe<WebhookResponseType>;
  errorMessage?: Maybe<Scalars['String']>;
};

export type WebhookRequestType = {
  headers?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['String']>;
};

export type WebhookResponseType = {
  headers?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  statusCode?: Maybe<Scalars['Int']>;
};

export type PaginatedWebhookLog = {
  list: Array<WebhookLog>;
  totalCount: Scalars['Int'];
};

export type WebhookOptions = {
  webhookEvents: Array<Maybe<WebhookEvent>>;
  contentTypes: Array<Maybe<WebhookContentType>>;
};

export type WebhookContentType = {
  name: Scalars['String'];
  label: Scalars['String'];
};

export enum WhitelistType {
  Username = 'USERNAME',
  Email = 'EMAIL',
  Phone = 'PHONE'
}

export type WhiteList = {
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type Mutation = {
  /** 创建社会化登录服务商 */
  createSocialConnection: SocialConnection;
  /** 配置社会化登录 */
  createSocialConnectionInstance: SocialConnectionInstance;
  /** 开启社会化登录 */
  enableSocialConnectionInstance: SocialConnectionInstance;
  /** 关闭社会化登录 */
  disableSocialConnectionInstance: SocialConnectionInstance;
  /** 添加协作管理员 */
  addCooperator: Cooperator;
  removeCooperator: CommonMessage;
  /** 配置自定义邮件模版 */
  configEmailTemplate: EmailTemplate;
  /** 启用自定义邮件模版 */
  enableEmailTemplate: EmailTemplate;
  /** 停用自定义邮件模版（将会使用系统默认邮件模版） */
  disableEmailTemplate: EmailTemplate;
  /** 发送邮件 */
  sendEmail: CommonMessage;
  /** 创建函数 */
  createFunction?: Maybe<Function>;
  /** 修改函数 */
  updateFunction: Function;
  deleteFunction: CommonMessage;
  loginByEmail?: Maybe<User>;
  loginByUsername?: Maybe<User>;
  loginByPhoneCode?: Maybe<User>;
  loginByPhonePassword?: Maybe<User>;
  /** 修改 MFA 信息 */
  changeMfa?: Maybe<Mfa>;
  /** 创建组织机构 */
  createOrg: Org;
  /** 删除组织机构 */
  deleteOrg: CommonMessage;
  /** 添加子节点 */
  addNode: Org;
  /** 修改节点 */
  updateNode: Node;
  /** 删除节点（会一并删掉子节点） */
  deleteNode: Org;
  /** （批量）将成员添加到节点中 */
  addMember: Node;
  /** （批量）将成员从节点中移除 */
  removeMember: Node;
  resetPassword?: Maybe<CommonMessage>;
  createPipeline: Pipeline;
  addFunctionToPipeline: Pipeline;
  removeFunctionFromPipeline: Pipeline;
  createPolicy: Policy;
  registerByUsername?: Maybe<User>;
  registerByEmail?: Maybe<User>;
  registerByPhonePassword?: Maybe<User>;
  /** 创建角色 */
  createRole: Role;
  /** 修改角色 */
  updateRole: Role;
  /** 删除角色 */
  deleteRole: CommonMessage;
  /** 批量删除角色 */
  deleteRoles: BatchOperationResult;
  /** 给用户授权角色 */
  assignRole: Role;
  /** 撤销角色 */
  revokeRole: Role;
  /** 创建用户。此接口需要管理员权限，普通用户注册请使用 **register** 接口。 */
  doRegisterProcess: User;
  /** 更新用户信息。 */
  updateUser: User;
  /** 修改用户密码，此接口需要验证原始密码，管理员直接修改请使用 **updateUser** 接口。 */
  updatePassword: User;
  /** 修改手机号。此接口需要验证手机号验证码，管理员直接修改请使用 **updateUser** 接口。 */
  updatePhone: User;
  /** 修改邮箱。此接口需要验证邮箱验证码，管理员直接修改请使用 updateUser 接口。 */
  updateEmail: User;
  /** 删除用户 */
  deleteUser?: Maybe<CommonMessage>;
  /** 批量删除用户 */
  deleteUsers?: Maybe<CommonMessage>;
  /** 创建用户池 */
  createUserpool: UserPool;
  updateUserpool: UserPool;
  refreshUserpoolSecret: Scalars['String'];
  deleteUserpool: CommonMessage;
  createWebhook: Webhook;
  updateWebhook: Webhook;
  deleteWebhook: CommonMessage;
  sendWebhookTestRequest: CommonMessage;
  addWhitelist: Array<Maybe<WhiteList>>;
  removeWhitelist: Array<Maybe<WhiteList>>;
};

export type MutationCreateSocialConnectionArgs = {
  input: CreateSocialConnectionInput;
};

export type MutationCreateSocialConnectionInstanceArgs = {
  input: CreateSocialConnectionInstanceInput;
};

export type MutationEnableSocialConnectionInstanceArgs = {
  provider: Scalars['String'];
};

export type MutationDisableSocialConnectionInstanceArgs = {
  provider: Scalars['String'];
};

export type MutationAddCooperatorArgs = {
  userId: Scalars['String'];
  roleId: Scalars['String'];
};

export type MutationRemoveCooperatorArgs = {
  userId: Scalars['String'];
  roleId: Scalars['String'];
};

export type MutationConfigEmailTemplateArgs = {
  input: ConfigEmailTemplateInput;
};

export type MutationEnableEmailTemplateArgs = {
  type: EmailTemplateType;
};

export type MutationDisableEmailTemplateArgs = {
  type: EmailTemplateType;
};

export type MutationSendEmailArgs = {
  email: Scalars['String'];
  scene: EmailScene;
};

export type MutationCreateFunctionArgs = {
  input: CreateFunctionInput;
};

export type MutationUpdateFunctionArgs = {
  input: UpdateFunctionInput;
};

export type MutationDeleteFunctionArgs = {
  id: Scalars['String'];
};

export type MutationLoginByEmailArgs = {
  input: LoginByEmailInput;
};

export type MutationLoginByUsernameArgs = {
  input: LoginByUsernameInput;
};

export type MutationLoginByPhoneCodeArgs = {
  input: LoginByPhoneCodeInput;
};

export type MutationLoginByPhonePasswordArgs = {
  input: LoginByPhonePasswordInput;
};

export type MutationChangeMfaArgs = {
  enable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateOrgArgs = {
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MutationDeleteOrgArgs = {
  id: Scalars['String'];
};

export type MutationAddNodeArgs = {
  orgId: Scalars['String'];
  parentNodeId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameI18n?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionI18n?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
};

export type MutationUpdateNodeArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MutationDeleteNodeArgs = {
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
};

export type MutationAddMemberArgs = {
  orgId: Scalars['String'];
  nodeCode: Scalars['String'];
  userIds: Array<Scalars['String']>;
};

export type MutationRemoveMemberArgs = {
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
  userIds: Array<Scalars['String']>;
};

export type MutationResetPasswordArgs = {
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  newPassword: Scalars['String'];
};

export type MutationCreatePipelineArgs = {
  input: CreatePipelineInput;
};

export type MutationAddFunctionToPipelineArgs = {
  input: AddFunctionToPipelineInput;
};

export type MutationRemoveFunctionFromPipelineArgs = {
  input: RemoveFunctionFromPipelineInput;
};

export type MutationCreatePolicyArgs = {
  code: Scalars['String'];
  resource: Scalars['String'];
  actions: Array<Scalars['String']>;
  effect: PolicyEffect;
};

export type MutationRegisterByUsernameArgs = {
  input: RegisterByUsernameInput;
};

export type MutationRegisterByEmailArgs = {
  input: RegisterByEmailInput;
};

export type MutationRegisterByPhonePasswordArgs = {
  input: RegisterByPhonePasswordInput;
};

export type MutationCreateRoleArgs = {
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
};

export type MutationUpdateRoleArgs = {
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MutationDeleteRoleArgs = {
  code: Scalars['String'];
};

export type MutationDeleteRolesArgs = {
  codes: Array<Scalars['String']>;
};

export type MutationAssignRoleArgs = {
  code: Scalars['String'];
  userIds?: Maybe<Array<Scalars['String']>>;
  groupCodes?: Maybe<Array<Scalars['String']>>;
  nodeCodes?: Maybe<Array<Scalars['String']>>;
};

export type MutationRevokeRoleArgs = {
  code: Scalars['String'];
  userIds?: Maybe<Array<Scalars['String']>>;
  groupCodes?: Maybe<Array<Scalars['String']>>;
  nodeCodes?: Maybe<Array<Scalars['String']>>;
};

export type MutationDoRegisterProcessArgs = {
  userInfo: CreateUserInput;
  keepPassword?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  input: UpdateUserInput;
};

export type MutationUpdatePasswordArgs = {
  id: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword?: Maybe<Scalars['String']>;
};

export type MutationUpdatePhoneArgs = {
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
  oldPhone?: Maybe<Scalars['String']>;
  oldPhoneCode?: Maybe<Scalars['String']>;
};

export type MutationUpdateEmailArgs = {
  email: Scalars['String'];
  emailCode: Scalars['String'];
  oldEmail?: Maybe<Scalars['String']>;
  oldEmailCode?: Maybe<Scalars['String']>;
};

export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};

export type MutationDeleteUsersArgs = {
  ids: Array<Scalars['String']>;
};

export type MutationCreateUserpoolArgs = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  userpoolTypes?: Maybe<Array<Scalars['String']>>;
};

export type MutationUpdateUserpoolArgs = {
  input: UpdateUserpoolInput;
};

export type MutationCreateWebhookArgs = {
  input: CreateWebhookInput;
};

export type MutationUpdateWebhookArgs = {
  input: UpdateWebhookInput;
};

export type MutationDeleteWebhookArgs = {
  input: DeleteWebhookInput;
};

export type MutationSendWebhookTestRequestArgs = {
  input: SendWebhookTestRequestInput;
};

export type MutationAddWhitelistArgs = {
  type: WhitelistType;
  list: Array<Scalars['String']>;
};

export type MutationRemoveWhitelistArgs = {
  type: WhitelistType;
  list: Array<Scalars['String']>;
};

export type CreateSocialConnectionInput = {
  provider: Scalars['String'];
  name: Scalars['String'];
  logo: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<SocialConnectionFieldInput>>;
};

export type SocialConnectionFieldInput = {
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SocialConnectionFieldInput>>>;
};

export type CreateSocialConnectionInstanceInput = {
  /** 社会化登录 provider */
  provider: Scalars['String'];
  fields?: Maybe<Array<Maybe<CreateSocialConnectionInstanceFieldInput>>>;
};

export type CreateSocialConnectionInstanceFieldInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type CommonMessage = {
  /** 可读的接口响应说明，请以业务状态码 code 作为判断业务是否成功的标志 */
  message?: Maybe<Scalars['String']>;
  /**
   * 业务状态码（与 HTTP 响应码不同），但且仅当为 200 的时候表示操作成功表示，详细说明请见：
   * [Authing 错误代码列表](https://docs.authing.co/advanced/error-code.html)
   */
  code?: Maybe<Scalars['Int']>;
};

export type ConfigEmailTemplateInput = {
  /** 邮件模版类型 */
  type: EmailTemplateType;
  /** 模版名称 */
  name: Scalars['String'];
  /** 邮件主题 */
  subject: Scalars['String'];
  /** 显示的邮件发送人 */
  sender: Scalars['String'];
  /** 邮件模版内容 */
  content: Scalars['String'];
  /** 重定向链接，操作成功后，用户将被重定向到此 URL。 */
  redirectTo?: Maybe<Scalars['String']>;
  hasURL?: Maybe<Scalars['Boolean']>;
  /** 验证码过期时间（单位为秒） */
  expiresIn?: Maybe<Scalars['Int']>;
};

/** 邮件使用场景 */
export enum EmailScene {
  /** 发送重置密码邮件，邮件中包含验证码 */
  ResetPassword = 'RESET_PASSWORD',
  /** 发送短信验证邮件 */
  VerifyEmail = 'VERIFY_EMAIL'
}

export type CreateFunctionInput = {
  /** 函数名称 */
  name: Scalars['String'];
  /** 源代码 */
  sourceCode: Scalars['String'];
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 云函数链接 */
  url?: Maybe<Scalars['String']>;
};

export type UpdateFunctionInput = {
  /** ID */
  id: Scalars['String'];
  /** 函数名称 */
  name?: Maybe<Scalars['String']>;
  /** 源代码 */
  sourceCode?: Maybe<Scalars['String']>;
  /** 描述信息 */
  description?: Maybe<Scalars['String']>;
  /** 云函数链接 */
  url?: Maybe<Scalars['String']>;
};

export type LoginByEmailInput = {
  email: Scalars['email_String_NotNull_format_email'];
  password: Scalars['String'];
};

export type LoginByUsernameInput = {
  username: Scalars['username_String_NotNull_minLength_4_maxLength_20'];
  password: Scalars['String'];
};

export type LoginByPhoneCodeInput = {
  phone: Scalars['phone_String_NotNull_pattern_130911457911503591166170358118091198911d8'];
  code: Scalars['code_String_NotNull_minLength_4_maxLength_6'];
};

export type LoginByPhonePasswordInput = {
  phone: Scalars['phone_String_NotNull_pattern_130911457911503591166170358118091198911d8'];
  password: Scalars['String'];
};

export type CreatePipelineInput = {
  name: Scalars['String'];
  /** 函数触发时机 */
  trigger: EPipelineTrigger;
  functions?: Maybe<Array<Maybe<PipelineFunctionInput>>>;
};

export enum EPipelineTrigger {
  PreRegister = 'PRE_REGISTER',
  PostRegister = 'POST_REGISTER',
  PreAuthentication = 'PRE_AUTHENTICATION',
  PostAuthentication = 'POST_AUTHENTICATION',
  PreOidctokenissued = 'PRE_OIDCTOKENISSUED'
}

export type PipelineFunctionInput = {
  funcId: Scalars['String'];
  asynchronous: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
};

export type AddFunctionToPipelineInput = {
  pipelineId: Scalars['String'];
  funcId: Scalars['String'];
  asynchronous: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
};

export type RemoveFunctionFromPipelineInput = {
  pipelineId: Scalars['String'];
  funcId: Scalars['String'];
};

export type RegisterByUsernameInput = {
  username: Scalars['username_String_NotNull_minLength_4_maxLength_20'];
  password: Scalars['String'];
  profile?: Maybe<RegisterProfile>;
};

export type RegisterProfile = {
  ip?: Maybe<Scalars['ip_String_format_ipv4']>;
  oauth?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  browser?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  zoneinfo?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  udf?: Maybe<Array<UserDdfInput>>;
};

export type UserDdfInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type RegisterByEmailInput = {
  email: Scalars['email_String_NotNull_format_email'];
  password: Scalars['String'];
  profile?: Maybe<RegisterProfile>;
};

export type RegisterByPhonePasswordInput = {
  phone: Scalars['phone_String_NotNull_pattern_130911457911503591166170358118091198911d8'];
  password: Scalars['String'];
  profile?: Maybe<RegisterProfile>;
};

/** 批量删除返回结果 */
export type BatchOperationResult = {
  /** 删除成功的个数 */
  succeedCount: Scalars['Int'];
  /** 删除失败的个数 */
  failedCount: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Scalars['String']>>;
};

export type CreateUserInput = {
  /** 用户名，用户池内唯一 */
  username?: Maybe<Scalars['String']>;
  /** 邮箱，用户池内唯一 */
  email?: Maybe<Scalars['String']>;
  /** 邮箱是否已验证 */
  emailVerified?: Maybe<Scalars['Boolean']>;
  /** 手机号，用户池内唯一 */
  phone?: Maybe<Scalars['String']>;
  /** 手机号是否已验证 */
  phoneVerified?: Maybe<Scalars['Boolean']>;
  unionid?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  /** 昵称，该字段不唯一。 */
  nickname?: Maybe<Scalars['String']>;
  /** 头像链接，默认为 https://usercontents.authing.cn/authing-avatar.png */
  photo?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** 注册方式 */
  registerSource?: Maybe<Array<Scalars['String']>>;
  browser?: Maybe<Scalars['String']>;
  /** 用户社会化登录第三方身份提供商返回的原始用户信息，非社会化登录方式注册的用户此字段为空。 */
  oauth?: Maybe<Scalars['String']>;
  /** 用户累计登录次数，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
  loginsCount?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  lastIP?: Maybe<Scalars['String']>;
  /** 用户注册时间，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
  signedUp?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  device?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  zoneinfo?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  /** 邮箱。直接修改用户邮箱需要管理员权限，普通用户修改邮箱请使用 **updateEmail** 接口。 */
  email?: Maybe<Scalars['String']>;
  unionid?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  /** 邮箱是否已验证。直接修改 emailVerified 需要管理员权限。 */
  emailVerified?: Maybe<Scalars['Boolean']>;
  /** 手机号。直接修改用户手机号需要管理员权限，普通用户修改邮箱请使用 **updatePhone** 接口。 */
  phone?: Maybe<Scalars['String']>;
  /** 手机号是否已验证。直接修改 **phoneVerified** 需要管理员权限。 */
  phoneVerified?: Maybe<Scalars['Boolean']>;
  /** 用户名，用户池内唯一 */
  username?: Maybe<Scalars['String']>;
  /** 昵称，该字段不唯一。 */
  nickname?: Maybe<Scalars['String']>;
  /** 密码。直接修改用户密码需要管理员权限，普通用户修改邮箱请使用 **updatePassword** 接口。 */
  password?: Maybe<Scalars['String']>;
  /** 头像链接，默认为 https://usercontents.authing.cn/authing-avatar.png */
  photo?: Maybe<Scalars['String']>;
  /** 注册方式 */
  registerSource?: Maybe<Array<Scalars['String']>>;
  company?: Maybe<Scalars['String']>;
  browser?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  oauth?: Maybe<Scalars['String']>;
  tokenExpiredAt?: Maybe<Scalars['String']>;
  /** 用户累计登录次数，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
  loginsCount?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['String']>;
  lastIP?: Maybe<Scalars['String']>;
  /** 用户注册时间，当你从你原有用户系统向 Authing 迁移的时候可以设置此字段。 */
  signedUp?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  preferredUsername?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  zoneinfo?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  formatted?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UpdateUserpoolInput = {
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  userpoolTypes?: Maybe<Array<Scalars['String']>>;
  emailVerifiedDefault?: Maybe<Scalars['Boolean']>;
  sendWelcomeEmail?: Maybe<Scalars['Boolean']>;
  registerDisabled?: Maybe<Scalars['Boolean']>;
  allowedOrigins?: Maybe<Scalars['String']>;
  tokenExpiresAfter?: Maybe<Scalars['Int']>;
  emailWhitelistEnabled?: Maybe<Scalars['Boolean']>;
  phoneWhitelistEnabled?: Maybe<Scalars['Boolean']>;
  frequentRegisterCheck?: Maybe<FrequentRegisterCheckConfigInput>;
  loginFailCheck?: Maybe<LoginFailCheckConfigInput>;
  changePhoneStrategy?: Maybe<ChangePhoneStrategyInput>;
  changeEmailStrategy?: Maybe<ChangeEmailStrategyInput>;
  qrcodeLoginStrategy?: Maybe<QrcodeLoginStrategyInput>;
  app2WxappLoginStrategy?: Maybe<App2WxappLoginStrategyInput>;
  whitelist?: Maybe<RegisterWhiteListConfigInput>;
};

export type FrequentRegisterCheckConfigInput = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type LoginFailCheckConfigInput = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ChangePhoneStrategyInput = {
  verifyOldPhone?: Maybe<Scalars['Boolean']>;
};

export type ChangeEmailStrategyInput = {
  verifyOldEmail?: Maybe<Scalars['Boolean']>;
};

export type QrcodeLoginStrategyInput = {
  qrcodeExpiresAfter?: Maybe<Scalars['Int']>;
  returnFullUserInfo?: Maybe<Scalars['Boolean']>;
  allowExchangeUserInfoFromBrowser?: Maybe<Scalars['Boolean']>;
  ticketExpiresAfter?: Maybe<Scalars['Int']>;
};

export type App2WxappLoginStrategyInput = {
  ticketExpriresAfter?: Maybe<Scalars['Int']>;
  ticketExchangeUserInfoNeedSecret?: Maybe<Scalars['Boolean']>;
};

export type RegisterWhiteListConfigInput = {
  phoneEnabled?: Maybe<Scalars['Boolean']>;
  emailEnabled?: Maybe<Scalars['Boolean']>;
  usernameEnabled?: Maybe<Scalars['Boolean']>;
};

export type CreateWebhookInput = {
  url: Scalars['String'];
  secret: Scalars['String'];
  contentType: Scalars['String'];
  events: Array<Scalars['String']>;
  enabled: Scalars['Boolean'];
};

export type UpdateWebhookInput = {
  id: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  events?: Maybe<Array<Maybe<Scalars['String']>>>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type DeleteWebhookInput = {
  id: Scalars['String'];
};

export type SendWebhookTestRequestInput = {
  webhookId: Scalars['String'];
};

export type KeyValuePair = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AddCooperatorVariables = Exact<{
  userId: Scalars['String'];
  roleId: Scalars['String'];
}>;

export type AddCooperatorResponse = {
  addCooperator: {
    roles: Array<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
    user: {
      id: string;
      userPoolId: string;
      username?: Maybe<string>;
      email?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      nickname?: Maybe<string>;
      registerSource: Array<string>;
      photo?: Maybe<string>;
      password?: Maybe<string>;
      oauth?: Maybe<string>;
      token?: Maybe<string>;
      tokenExpiredAt?: Maybe<string>;
      loginsCount?: Maybe<number>;
      lastLogin?: Maybe<string>;
      lastIP?: Maybe<string>;
      signedUp?: Maybe<string>;
      blocked?: Maybe<boolean>;
      isDeleted?: Maybe<boolean>;
      device?: Maybe<string>;
      browser?: Maybe<string>;
      company?: Maybe<string>;
      name?: Maybe<string>;
      givenName?: Maybe<string>;
      familyName?: Maybe<string>;
      middleName?: Maybe<string>;
      profile?: Maybe<string>;
      preferredUsername?: Maybe<string>;
      website?: Maybe<string>;
      gender?: Maybe<string>;
      birthdate?: Maybe<string>;
      zoneinfo?: Maybe<string>;
      locale?: Maybe<string>;
      address?: Maybe<string>;
      formatted?: Maybe<string>;
      streetAddress?: Maybe<string>;
      locality?: Maybe<string>;
      region?: Maybe<string>;
      postalCode?: Maybe<string>;
      country?: Maybe<string>;
      updatedAt?: Maybe<string>;
      customData?: Maybe<string>;
    };
  };
};

export type AddFunctionToPipelineVariables = Exact<{
  input: AddFunctionToPipelineInput;
}>;

export type AddFunctionToPipelineResponse = {
  addFunctionToPipeline: {
    id: string;
    name: string;
    trigger: string;
    functions: Array<{
      funcId: string;
      asynchronous: boolean;
      enabled: boolean;
    }>;
  };
};

export type AddMemberVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  orgId: Scalars['String'];
  nodeCode: Scalars['String'];
  userIds: Array<Scalars['String']>;
}>;

export type AddMemberResponse = {
  addMember: {
    id: string;
    name: string;
    nameI18n?: Maybe<string>;
    description?: Maybe<string>;
    descriptionI18n?: Maybe<string>;
    order?: Maybe<number>;
    code?: Maybe<string>;
    root?: Maybe<boolean>;
    depth?: Maybe<number>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    children?: Maybe<Array<string>>;
    users: {
      totalCount: number;
      list: Array<{
        id: string;
        userPoolId: string;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource: Array<string>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        country?: Maybe<string>;
        updatedAt?: Maybe<string>;
        customData?: Maybe<string>;
      }>;
    };
  };
};

export type AddNodeVariables = Exact<{
  orgId: Scalars['String'];
  parentNodeId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nameI18n?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionI18n?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
}>;

export type AddNodeResponse = {
  addNode: {
    id: string;
    rootNode: {
      id: string;
      name: string;
      nameI18n?: Maybe<string>;
      description?: Maybe<string>;
      descriptionI18n?: Maybe<string>;
      order?: Maybe<number>;
      code?: Maybe<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
      path: Array<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    };
    nodes: Array<{
      id: string;
      name: string;
      nameI18n?: Maybe<string>;
      description?: Maybe<string>;
      descriptionI18n?: Maybe<string>;
      order?: Maybe<number>;
      code?: Maybe<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
      path: Array<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    }>;
  };
};

export type AddWhitelistVariables = Exact<{
  type: WhitelistType;
  list: Array<Scalars['String']>;
}>;

export type AddWhitelistResponse = {
  addWhitelist: Array<
    Maybe<{
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      value: string;
    }>
  >;
};

export type AssignRoleVariables = Exact<{
  code: Scalars['String'];
  userIds?: Maybe<Array<Scalars['String']>>;
  groupCodes?: Maybe<Array<Scalars['String']>>;
  nodeCodes?: Maybe<Array<Scalars['String']>>;
}>;

export type AssignRoleResponse = {
  assignRole: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    users: { totalCount: number };
    parent?: Maybe<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type ChangeMfaVariables = Exact<{
  enable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['Boolean']>;
}>;

export type ChangeMfaResponse = {
  changeMfa?: Maybe<{
    id: string;
    userId: string;
    userPoolId: string;
    enable: boolean;
    secret?: Maybe<string>;
  }>;
};

export type ConfigEmailTemplateVariables = Exact<{
  input: ConfigEmailTemplateInput;
}>;

export type ConfigEmailTemplateResponse = {
  configEmailTemplate: {
    type: EmailTemplateType;
    name: string;
    subject: string;
    sender: string;
    content: string;
    redirectTo?: Maybe<string>;
    hasURL?: Maybe<boolean>;
    expiresIn?: Maybe<number>;
    enabled?: Maybe<boolean>;
    isSystem?: Maybe<boolean>;
  };
};

export type CreateFunctionVariables = Exact<{
  input: CreateFunctionInput;
}>;

export type CreateFunctionResponse = {
  createFunction?: Maybe<{
    id: string;
    name: string;
    sourceCode: string;
    description?: Maybe<string>;
    url?: Maybe<string>;
  }>;
};

export type CreateOrgVariables = Exact<{
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;

export type CreateOrgResponse = {
  createOrg: {
    id: string;
    rootNode: {
      id: string;
      name: string;
      nameI18n?: Maybe<string>;
      description?: Maybe<string>;
      descriptionI18n?: Maybe<string>;
      order?: Maybe<number>;
      code?: Maybe<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
      path: Array<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    };
    nodes: Array<{
      id: string;
      name: string;
      nameI18n?: Maybe<string>;
      description?: Maybe<string>;
      descriptionI18n?: Maybe<string>;
      order?: Maybe<number>;
      code?: Maybe<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
      path: Array<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    }>;
  };
};

export type CreatePipelineVariables = Exact<{
  input: CreatePipelineInput;
}>;

export type CreatePipelineResponse = {
  createPipeline: {
    id: string;
    name: string;
    trigger: string;
    functions: Array<{
      funcId: string;
      asynchronous: boolean;
      enabled: boolean;
    }>;
  };
};

export type CreatePolicyVariables = Exact<{
  code: Scalars['String'];
  resource: Scalars['String'];
  actions: Array<Scalars['String']>;
  effect: PolicyEffect;
}>;

export type CreatePolicyResponse = {
  createPolicy: {
    code: string;
    resource: string;
    actions: Array<string>;
    effect: PolicyEffect;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  };
};

export type CreateRoleVariables = Exact<{
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
}>;

export type CreateRoleResponse = {
  createRole: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    users: { totalCount: number };
    parent?: Maybe<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type CreateSocialConnectionVariables = Exact<{
  input: CreateSocialConnectionInput;
}>;

export type CreateSocialConnectionResponse = {
  createSocialConnection: {
    provider: string;
    name: string;
    logo: string;
    description?: Maybe<string>;
    fields?: Maybe<
      Array<{
        key?: Maybe<string>;
        label?: Maybe<string>;
        type?: Maybe<string>;
        placeholder?: Maybe<string>;
      }>
    >;
  };
};

export type CreateSocialConnectionInstanceVariables = Exact<{
  input: CreateSocialConnectionInstanceInput;
}>;

export type CreateSocialConnectionInstanceResponse = {
  createSocialConnectionInstance: {
    provider: string;
    enabled: boolean;
    fields?: Maybe<Array<Maybe<{ key: string; value: string }>>>;
  };
};

export type CreateUserpoolVariables = Exact<{
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  userpoolTypes?: Maybe<Array<Scalars['String']>>;
}>;

export type CreateUserpoolResponse = {
  createUserpool: {
    id: string;
    name: string;
    description?: Maybe<string>;
    secret: string;
    logo: string;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    emailVerifiedDefault: boolean;
    sendWelcomeEmail: boolean;
    registerDisabled: boolean;
    showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>;
    allowedOrigins?: Maybe<string>;
    tokenExpiresAfter?: Maybe<number>;
    isDeleted?: Maybe<boolean>;
    userpoolTypes?: Maybe<
      Array<{
        code?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        sdks?: Maybe<Array<Maybe<string>>>;
      }>
    >;
    frequentRegisterCheck?: Maybe<{
      timeInterval?: Maybe<number>;
      limit?: Maybe<number>;
      enabled?: Maybe<boolean>;
    }>;
    loginFailCheck?: Maybe<{
      timeInterval?: Maybe<number>;
      limit?: Maybe<number>;
      enabled?: Maybe<boolean>;
    }>;
    changePhoneStrategy?: Maybe<{ verifyOldPhone?: Maybe<boolean> }>;
    changeEmailStrategy?: Maybe<{ verifyOldEmail?: Maybe<boolean> }>;
    qrcodeLoginStrategy?: Maybe<{
      qrcodeExpiresAfter?: Maybe<number>;
      returnFullUserInfo?: Maybe<boolean>;
      allowExchangeUserInfoFromBrowser?: Maybe<boolean>;
      ticketExpiresAfter?: Maybe<number>;
    }>;
    app2WxappLoginStrategy?: Maybe<{
      ticketExpriresAfter?: Maybe<number>;
      ticketExchangeUserInfoNeedSecret?: Maybe<boolean>;
    }>;
    whitelist?: Maybe<{
      phoneEnabled?: Maybe<boolean>;
      emailEnabled?: Maybe<boolean>;
      usernameEnabled?: Maybe<boolean>;
    }>;
  };
};

export type CreateWebhookVariables = Exact<{
  input: CreateWebhookInput;
}>;

export type CreateWebhookResponse = {
  createWebhook: {
    id?: Maybe<string>;
    userPoolId: string;
    url: string;
    isLastTimeSuccess?: Maybe<boolean>;
    contentType: string;
    secret?: Maybe<string>;
    enable: boolean;
    events: Array<{ name: string; label: string; description?: Maybe<string> }>;
  };
};

export type DeleteFunctionVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteFunctionResponse = {
  deleteFunction: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeleteNodeVariables = Exact<{
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
}>;

export type DeleteNodeResponse = {
  deleteNode: {
    id: string;
    rootNode: {
      id: string;
      name: string;
      nameI18n?: Maybe<string>;
      description?: Maybe<string>;
      descriptionI18n?: Maybe<string>;
      order?: Maybe<number>;
      code?: Maybe<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
      path: Array<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    };
    nodes: Array<{
      id: string;
      name: string;
      nameI18n?: Maybe<string>;
      description?: Maybe<string>;
      descriptionI18n?: Maybe<string>;
      order?: Maybe<number>;
      code?: Maybe<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
      path: Array<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    }>;
  };
};

export type DeleteOrgVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteOrgResponse = {
  deleteOrg: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeleteRoleVariables = Exact<{
  code: Scalars['String'];
}>;

export type DeleteRoleResponse = {
  deleteRole: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeleteRolesVariables = Exact<{
  codes: Array<Scalars['String']>;
}>;

export type DeleteRolesResponse = {
  deleteRoles: {
    succeedCount: number;
    failedCount: number;
    message?: Maybe<string>;
    errors?: Maybe<Array<string>>;
  };
};

export type DeleteUserVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteUserResponse = {
  deleteUser?: Maybe<{ message?: Maybe<string>; code?: Maybe<number> }>;
};

export type DeleteUserpoolVariables = Exact<{ [key: string]: never }>;

export type DeleteUserpoolResponse = {
  deleteUserpool: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeleteUsersVariables = Exact<{
  ids: Array<Scalars['String']>;
}>;

export type DeleteUsersResponse = {
  deleteUsers?: Maybe<{ message?: Maybe<string>; code?: Maybe<number> }>;
};

export type DeleteWebhookVariables = Exact<{
  input: DeleteWebhookInput;
}>;

export type DeleteWebhookResponse = {
  deleteWebhook: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DisableEmailTemplateVariables = Exact<{
  type: EmailTemplateType;
}>;

export type DisableEmailTemplateResponse = {
  disableEmailTemplate: {
    type: EmailTemplateType;
    name: string;
    subject: string;
    sender: string;
    content: string;
    redirectTo?: Maybe<string>;
    hasURL?: Maybe<boolean>;
    expiresIn?: Maybe<number>;
    enabled?: Maybe<boolean>;
    isSystem?: Maybe<boolean>;
  };
};

export type DisableSocialConnectionInstanceVariables = Exact<{
  provider: Scalars['String'];
}>;

export type DisableSocialConnectionInstanceResponse = {
  disableSocialConnectionInstance: {
    provider: string;
    enabled: boolean;
    fields?: Maybe<Array<Maybe<{ key: string; value: string }>>>;
  };
};

export type DoRegisterProcessVariables = Exact<{
  userInfo: CreateUserInput;
  keepPassword?: Maybe<Scalars['Boolean']>;
}>;

export type DoRegisterProcessResponse = {
  doRegisterProcess: {
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  };
};

export type EnableEmailTemplateVariables = Exact<{
  type: EmailTemplateType;
}>;

export type EnableEmailTemplateResponse = {
  enableEmailTemplate: {
    type: EmailTemplateType;
    name: string;
    subject: string;
    sender: string;
    content: string;
    redirectTo?: Maybe<string>;
    hasURL?: Maybe<boolean>;
    expiresIn?: Maybe<number>;
    enabled?: Maybe<boolean>;
    isSystem?: Maybe<boolean>;
  };
};

export type EnableSocialConnectionInstanceVariables = Exact<{
  provider: Scalars['String'];
}>;

export type EnableSocialConnectionInstanceResponse = {
  enableSocialConnectionInstance: {
    provider: string;
    enabled: boolean;
    fields?: Maybe<Array<Maybe<{ key: string; value: string }>>>;
  };
};

export type LoginByEmailVariables = Exact<{
  input: LoginByEmailInput;
}>;

export type LoginByEmailResponse = {
  loginByEmail?: Maybe<{
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  }>;
};

export type LoginByPhoneCodeVariables = Exact<{
  input: LoginByPhoneCodeInput;
}>;

export type LoginByPhoneCodeResponse = {
  loginByPhoneCode?: Maybe<{
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  }>;
};

export type LoginByPhonePasswordVariables = Exact<{
  input: LoginByPhonePasswordInput;
}>;

export type LoginByPhonePasswordResponse = {
  loginByPhonePassword?: Maybe<{
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  }>;
};

export type LoginByUsernameVariables = Exact<{
  input: LoginByUsernameInput;
}>;

export type LoginByUsernameResponse = {
  loginByUsername?: Maybe<{
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  }>;
};

export type RefreshUserpoolSecretVariables = Exact<{ [key: string]: never }>;

export type RefreshUserpoolSecretResponse = { refreshUserpoolSecret: string };

export type RegisterByEmailVariables = Exact<{
  input: RegisterByEmailInput;
}>;

export type RegisterByEmailResponse = {
  registerByEmail?: Maybe<{
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  }>;
};

export type RegisterByPhonePasswordVariables = Exact<{
  input: RegisterByPhonePasswordInput;
}>;

export type RegisterByPhonePasswordResponse = {
  registerByPhonePassword?: Maybe<{
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  }>;
};

export type RegisterByUsernameVariables = Exact<{
  input: RegisterByUsernameInput;
}>;

export type RegisterByUsernameResponse = {
  registerByUsername?: Maybe<{
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  }>;
};

export type RemoveCooperatorVariables = Exact<{
  userId: Scalars['String'];
  roleId: Scalars['String'];
}>;

export type RemoveCooperatorResponse = {
  removeCooperator: { message?: Maybe<string>; code?: Maybe<number> };
};

export type RemoveFunctionFromPipelineVariables = Exact<{
  input: RemoveFunctionFromPipelineInput;
}>;

export type RemoveFunctionFromPipelineResponse = {
  removeFunctionFromPipeline: {
    id: string;
    name: string;
    trigger: string;
    functions: Array<{
      funcId: string;
      asynchronous: boolean;
      enabled: boolean;
    }>;
  };
};

export type RemoveMemberVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
  userIds: Array<Scalars['String']>;
}>;

export type RemoveMemberResponse = {
  removeMember: {
    id: string;
    name: string;
    nameI18n?: Maybe<string>;
    description?: Maybe<string>;
    descriptionI18n?: Maybe<string>;
    order?: Maybe<number>;
    code?: Maybe<string>;
    root?: Maybe<boolean>;
    depth?: Maybe<number>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    children?: Maybe<Array<string>>;
    users: {
      totalCount: number;
      list: Array<{
        id: string;
        userPoolId: string;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource: Array<string>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        country?: Maybe<string>;
        updatedAt?: Maybe<string>;
        customData?: Maybe<string>;
      }>;
    };
  };
};

export type RemoveWhitelistVariables = Exact<{
  type: WhitelistType;
  list: Array<Scalars['String']>;
}>;

export type RemoveWhitelistResponse = {
  removeWhitelist: Array<
    Maybe<{
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      value: string;
    }>
  >;
};

export type ResetPasswordVariables = Exact<{
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  newPassword: Scalars['String'];
}>;

export type ResetPasswordResponse = {
  resetPassword?: Maybe<{ message?: Maybe<string>; code?: Maybe<number> }>;
};

export type RevokeRoleVariables = Exact<{
  code: Scalars['String'];
  userIds?: Maybe<Array<Scalars['String']>>;
  groupCodes?: Maybe<Array<Scalars['String']>>;
  nodeCodes?: Maybe<Array<Scalars['String']>>;
}>;

export type RevokeRoleResponse = {
  revokeRole: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    users: { totalCount: number };
    parent?: Maybe<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type SendEmailVariables = Exact<{
  email: Scalars['String'];
  scene: EmailScene;
}>;

export type SendEmailResponse = {
  sendEmail: { message?: Maybe<string>; code?: Maybe<number> };
};

export type SendWebhookTestRequestVariables = Exact<{
  input: SendWebhookTestRequestInput;
}>;

export type SendWebhookTestRequestResponse = {
  sendWebhookTestRequest: { message?: Maybe<string>; code?: Maybe<number> };
};

export type UpdateEmailVariables = Exact<{
  email: Scalars['String'];
  emailCode: Scalars['String'];
  oldEmail?: Maybe<Scalars['String']>;
  oldEmailCode?: Maybe<Scalars['String']>;
}>;

export type UpdateEmailResponse = {
  updateEmail: {
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  };
};

export type UpdateFunctionVariables = Exact<{
  input: UpdateFunctionInput;
}>;

export type UpdateFunctionResponse = {
  updateFunction: {
    id: string;
    name: string;
    sourceCode: string;
    description?: Maybe<string>;
    url?: Maybe<string>;
  };
};

export type UpdateNodeVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;

export type UpdateNodeResponse = {
  updateNode: {
    id: string;
    name: string;
    nameI18n?: Maybe<string>;
    description?: Maybe<string>;
    descriptionI18n?: Maybe<string>;
    order?: Maybe<number>;
    code?: Maybe<string>;
    root?: Maybe<boolean>;
    depth?: Maybe<number>;
    path: Array<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    children?: Maybe<Array<string>>;
    users: { totalCount: number };
  };
};

export type UpdatePasswordVariables = Exact<{
  id: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword?: Maybe<Scalars['String']>;
}>;

export type UpdatePasswordResponse = {
  updatePassword: {
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  };
};

export type UpdatePhoneVariables = Exact<{
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
  oldPhone?: Maybe<Scalars['String']>;
  oldPhoneCode?: Maybe<Scalars['String']>;
}>;

export type UpdatePhoneResponse = {
  updatePhone: {
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  };
};

export type UpdateRoleVariables = Exact<{
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;

export type UpdateRoleResponse = {
  updateRole: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    users: { totalCount: number };
    parent?: Maybe<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type UpdateUserVariables = Exact<{
  id: Scalars['String'];
  input: UpdateUserInput;
}>;

export type UpdateUserResponse = {
  updateUser: {
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  };
};

export type UpdateUserpoolVariables = Exact<{
  input: UpdateUserpoolInput;
}>;

export type UpdateUserpoolResponse = {
  updateUserpool: {
    id: string;
    name: string;
    description?: Maybe<string>;
    secret: string;
    logo: string;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    emailVerifiedDefault: boolean;
    sendWelcomeEmail: boolean;
    registerDisabled: boolean;
    showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>;
    allowedOrigins?: Maybe<string>;
    tokenExpiresAfter?: Maybe<number>;
    isDeleted?: Maybe<boolean>;
    userpoolTypes?: Maybe<
      Array<{
        code?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        sdks?: Maybe<Array<Maybe<string>>>;
      }>
    >;
    frequentRegisterCheck?: Maybe<{
      timeInterval?: Maybe<number>;
      limit?: Maybe<number>;
      enabled?: Maybe<boolean>;
    }>;
    loginFailCheck?: Maybe<{
      timeInterval?: Maybe<number>;
      limit?: Maybe<number>;
      enabled?: Maybe<boolean>;
    }>;
    changePhoneStrategy?: Maybe<{ verifyOldPhone?: Maybe<boolean> }>;
    changeEmailStrategy?: Maybe<{ verifyOldEmail?: Maybe<boolean> }>;
    qrcodeLoginStrategy?: Maybe<{
      qrcodeExpiresAfter?: Maybe<number>;
      returnFullUserInfo?: Maybe<boolean>;
      allowExchangeUserInfoFromBrowser?: Maybe<boolean>;
      ticketExpiresAfter?: Maybe<number>;
    }>;
    app2WxappLoginStrategy?: Maybe<{
      ticketExpriresAfter?: Maybe<number>;
      ticketExchangeUserInfoNeedSecret?: Maybe<boolean>;
    }>;
    whitelist?: Maybe<{
      phoneEnabled?: Maybe<boolean>;
      emailEnabled?: Maybe<boolean>;
      usernameEnabled?: Maybe<boolean>;
    }>;
  };
};

export type UpdateWebhookVariables = Exact<{
  input: UpdateWebhookInput;
}>;

export type UpdateWebhookResponse = {
  updateWebhook: {
    id?: Maybe<string>;
    userPoolId: string;
    url: string;
    isLastTimeSuccess?: Maybe<boolean>;
    contentType: string;
    secret?: Maybe<string>;
    enable: boolean;
    events: Array<{ name: string; label: string; description?: Maybe<string> }>;
  };
};

export type CheckPasswordStrengthVariables = Exact<{
  password: Scalars['String'];
}>;

export type CheckPasswordStrengthResponse = {
  checkPasswordStrength: { valid: boolean; message?: Maybe<string> };
};

export type ChildrenNodesVariables = Exact<{
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
}>;

export type ChildrenNodesResponse = {
  childrenNodes: Array<{
    name: string;
    nameI18n?: Maybe<string>;
    description?: Maybe<string>;
    descriptionI18n?: Maybe<string>;
    order?: Maybe<number>;
    code?: Maybe<string>;
    root?: Maybe<boolean>;
    depth?: Maybe<number>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    children?: Maybe<Array<string>>;
  }>;
};

export type CooperatedUserpoolsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type CooperatedUserpoolsResponse = {
  cooperatedUserpools: { totalCount: number };
};

export type CooperatorsVariables = Exact<{ [key: string]: never }>;

export type CooperatorsResponse = {
  cooperators: Array<{
    roles: Array<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
    user: {
      id: string;
      userPoolId: string;
      username?: Maybe<string>;
      email?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      nickname?: Maybe<string>;
      registerSource: Array<string>;
      photo?: Maybe<string>;
      password?: Maybe<string>;
      oauth?: Maybe<string>;
      token?: Maybe<string>;
      tokenExpiredAt?: Maybe<string>;
      loginsCount?: Maybe<number>;
      lastLogin?: Maybe<string>;
      lastIP?: Maybe<string>;
      signedUp?: Maybe<string>;
      blocked?: Maybe<boolean>;
      isDeleted?: Maybe<boolean>;
      device?: Maybe<string>;
      browser?: Maybe<string>;
      company?: Maybe<string>;
      name?: Maybe<string>;
      givenName?: Maybe<string>;
      familyName?: Maybe<string>;
      middleName?: Maybe<string>;
      profile?: Maybe<string>;
      preferredUsername?: Maybe<string>;
      website?: Maybe<string>;
      gender?: Maybe<string>;
      birthdate?: Maybe<string>;
      zoneinfo?: Maybe<string>;
      locale?: Maybe<string>;
      address?: Maybe<string>;
      formatted?: Maybe<string>;
      streetAddress?: Maybe<string>;
      locality?: Maybe<string>;
      region?: Maybe<string>;
      postalCode?: Maybe<string>;
      country?: Maybe<string>;
      updatedAt?: Maybe<string>;
      customData?: Maybe<string>;
    };
  }>;
};

export type EmailTemplatesVariables = Exact<{ [key: string]: never }>;

export type EmailTemplatesResponse = {
  emailTemplates: Array<{
    type: EmailTemplateType;
    name: string;
    subject: string;
    sender: string;
    content: string;
    redirectTo?: Maybe<string>;
    hasURL?: Maybe<boolean>;
    expiresIn?: Maybe<number>;
    enabled?: Maybe<boolean>;
    isSystem?: Maybe<boolean>;
  }>;
};

export type FunctionVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;

export type FunctionResponse = {
  function?: Maybe<{
    id: string;
    name: string;
    sourceCode: string;
    description?: Maybe<string>;
    url?: Maybe<string>;
  }>;
};

export type FunctionsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type FunctionsResponse = {
  functions: {
    totalCount: number;
    list: Array<{
      id: string;
      name: string;
      sourceCode: string;
      description?: Maybe<string>;
      url?: Maybe<string>;
    }>;
  };
};

export type GroupsVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type GroupsResponse = {
  groups: {
    totalCount: number;
    list: Array<{
      code: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type IsActionAllowedVariables = Exact<{
  resouceCode: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
}>;

export type IsActionAllowedResponse = { isActionAllowed: boolean };

export type IsActionDeniedVariables = Exact<{
  resouceCode: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
}>;

export type IsActionDeniedResponse = { isActionDenied: boolean };

export type IsDomainAvaliableVariables = Exact<{
  domain: Scalars['String'];
}>;

export type IsDomainAvaliableResponse = { isDomainAvaliable?: Maybe<boolean> };

export type NodeVariables = Exact<{
  orgId: Scalars['String'];
  code: Scalars['String'];
}>;

export type NodeResponse = {
  node: {
    id: string;
    name: string;
    nameI18n?: Maybe<string>;
    description?: Maybe<string>;
    descriptionI18n?: Maybe<string>;
    order?: Maybe<number>;
    code?: Maybe<string>;
    root?: Maybe<boolean>;
    depth?: Maybe<number>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    children?: Maybe<Array<string>>;
  };
};

export type NodeWithMembersVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  orgId: Scalars['String'];
  code: Scalars['String'];
}>;

export type NodeWithMembersResponse = {
  node: {
    id: string;
    name: string;
    nameI18n?: Maybe<string>;
    description?: Maybe<string>;
    descriptionI18n?: Maybe<string>;
    order?: Maybe<number>;
    code?: Maybe<string>;
    root?: Maybe<boolean>;
    depth?: Maybe<number>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    children?: Maybe<Array<string>>;
    users: {
      totalCount: number;
      list: Array<{
        id: string;
        userPoolId: string;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource: Array<string>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        country?: Maybe<string>;
        updatedAt?: Maybe<string>;
        customData?: Maybe<string>;
      }>;
    };
  };
};

export type OrgVariables = Exact<{
  id: Scalars['String'];
}>;

export type OrgResponse = {
  org: {
    id: string;
    rootNode: {
      id: string;
      name: string;
      nameI18n?: Maybe<string>;
      description?: Maybe<string>;
      descriptionI18n?: Maybe<string>;
      order?: Maybe<number>;
      code?: Maybe<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
      path: Array<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    };
    nodes: Array<{
      id: string;
      name: string;
      nameI18n?: Maybe<string>;
      description?: Maybe<string>;
      descriptionI18n?: Maybe<string>;
      order?: Maybe<number>;
      code?: Maybe<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
      path: Array<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    }>;
  };
};

export type OrgsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type OrgsResponse = {
  orgs: {
    totalCount: number;
    list: Array<{
      id: string;
      rootNode: {
        id: string;
        name: string;
        nameI18n?: Maybe<string>;
        path: Array<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
      };
      nodes: Array<{
        id: string;
        name: string;
        path: Array<string>;
        nameI18n?: Maybe<string>;
        description?: Maybe<string>;
        descriptionI18n?: Maybe<string>;
        order?: Maybe<number>;
        code?: Maybe<string>;
        root?: Maybe<boolean>;
        depth?: Maybe<number>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        children?: Maybe<Array<string>>;
      }>;
    }>;
  };
};

export type PipelineVariables = Exact<{
  id: Scalars['String'];
}>;

export type PipelineResponse = {
  pipeline: {
    id: string;
    name: string;
    trigger: string;
    functions: Array<{
      funcId: string;
      asynchronous: boolean;
      enabled: boolean;
    }>;
  };
};

export type PipelinesVariables = Exact<{ [key: string]: never }>;

export type PipelinesResponse = {
  pipelines: {
    totalCount: number;
    list: Array<{ id: string; name: string; trigger: string }>;
  };
};

export type PoliciesVariables = Exact<{ [key: string]: never }>;

export type PoliciesResponse = {
  policies: {
    totalCount: number;
    list: Array<{
      code: string;
      resource: string;
      actions: Array<string>;
      effect: PolicyEffect;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type PreviewEmailVariables = Exact<{
  type: EmailTemplateType;
}>;

export type PreviewEmailResponse = { previewEmail: string };

export type QiniuUptokenVariables = Exact<{
  type?: Maybe<Scalars['String']>;
}>;

export type QiniuUptokenResponse = { qiniuUptoken?: Maybe<string> };

export type QueryMfaVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
}>;

export type QueryMfaResponse = {
  queryMfa?: Maybe<{
    id: string;
    userId: string;
    userPoolId: string;
    enable: boolean;
    secret?: Maybe<string>;
  }>;
};

export type RoleVariables = Exact<{
  code: Scalars['String'];
}>;

export type RoleResponse = {
  role: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    parent?: Maybe<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type RoleWithUsersVariables = Exact<{
  code: Scalars['String'];
}>;

export type RoleWithUsersResponse = {
  role: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    parent?: Maybe<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
    users: {
      totalCount: number;
      list: Array<{
        id: string;
        userPoolId: string;
        username?: Maybe<string>;
        email?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        nickname?: Maybe<string>;
        registerSource: Array<string>;
        photo?: Maybe<string>;
        password?: Maybe<string>;
        oauth?: Maybe<string>;
        token?: Maybe<string>;
        tokenExpiredAt?: Maybe<string>;
        loginsCount?: Maybe<number>;
        lastLogin?: Maybe<string>;
        lastIP?: Maybe<string>;
        signedUp?: Maybe<string>;
        blocked?: Maybe<boolean>;
        isDeleted?: Maybe<boolean>;
        device?: Maybe<string>;
        browser?: Maybe<string>;
        company?: Maybe<string>;
        name?: Maybe<string>;
        givenName?: Maybe<string>;
        familyName?: Maybe<string>;
        middleName?: Maybe<string>;
        profile?: Maybe<string>;
        preferredUsername?: Maybe<string>;
        website?: Maybe<string>;
        gender?: Maybe<string>;
        birthdate?: Maybe<string>;
        zoneinfo?: Maybe<string>;
        locale?: Maybe<string>;
        address?: Maybe<string>;
        formatted?: Maybe<string>;
        streetAddress?: Maybe<string>;
        locality?: Maybe<string>;
        region?: Maybe<string>;
        postalCode?: Maybe<string>;
        country?: Maybe<string>;
        updatedAt?: Maybe<string>;
        customData?: Maybe<string>;
      }>;
    };
  };
};

export type RolesVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type RolesResponse = {
  roles: {
    totalCount: number;
    list: Array<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      parent?: Maybe<{
        code: string;
        name?: Maybe<string>;
        description?: Maybe<string>;
        isSystem?: Maybe<boolean>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
      }>;
    }>;
  };
};

export type SearchUserVariables = Exact<{
  query: Scalars['String'];
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type SearchUserResponse = {
  searchUser: {
    totalCount: number;
    list: Array<{
      id: string;
      userPoolId: string;
      username?: Maybe<string>;
      email?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      nickname?: Maybe<string>;
      registerSource: Array<string>;
      photo?: Maybe<string>;
      password?: Maybe<string>;
      oauth?: Maybe<string>;
      token?: Maybe<string>;
      tokenExpiredAt?: Maybe<string>;
      loginsCount?: Maybe<number>;
      lastLogin?: Maybe<string>;
      lastIP?: Maybe<string>;
      signedUp?: Maybe<string>;
      blocked?: Maybe<boolean>;
      isDeleted?: Maybe<boolean>;
      device?: Maybe<string>;
      browser?: Maybe<string>;
      company?: Maybe<string>;
      name?: Maybe<string>;
      givenName?: Maybe<string>;
      familyName?: Maybe<string>;
      middleName?: Maybe<string>;
      profile?: Maybe<string>;
      preferredUsername?: Maybe<string>;
      website?: Maybe<string>;
      gender?: Maybe<string>;
      birthdate?: Maybe<string>;
      zoneinfo?: Maybe<string>;
      locale?: Maybe<string>;
      address?: Maybe<string>;
      formatted?: Maybe<string>;
      streetAddress?: Maybe<string>;
      locality?: Maybe<string>;
      region?: Maybe<string>;
      postalCode?: Maybe<string>;
      country?: Maybe<string>;
      updatedAt?: Maybe<string>;
      customData?: Maybe<string>;
    }>;
  };
};

export type SocialConnectionVariables = Exact<{
  provider: Scalars['String'];
}>;

export type SocialConnectionResponse = {
  socialConnection?: Maybe<{
    provider: string;
    name: string;
    logo: string;
    description?: Maybe<string>;
    fields?: Maybe<
      Array<{
        key?: Maybe<string>;
        label?: Maybe<string>;
        type?: Maybe<string>;
        placeholder?: Maybe<string>;
      }>
    >;
  }>;
};

export type SocialConnectionInstanceVariables = Exact<{
  provider: Scalars['String'];
}>;

export type SocialConnectionInstanceResponse = {
  socialConnectionInstance: {
    provider: string;
    enabled: boolean;
    fields?: Maybe<Array<Maybe<{ key: string; value: string }>>>;
  };
};

export type SocialConnectionInstancesVariables = Exact<{
  [key: string]: never;
}>;

export type SocialConnectionInstancesResponse = {
  socialConnectionInstances: Array<{
    provider: string;
    enabled: boolean;
    fields?: Maybe<Array<Maybe<{ key: string; value: string }>>>;
  }>;
};

export type SocialConnectionsVariables = Exact<{ [key: string]: never }>;

export type SocialConnectionsResponse = {
  socialConnections: Array<{
    provider: string;
    name: string;
    logo: string;
    description?: Maybe<string>;
    fields?: Maybe<
      Array<{
        key?: Maybe<string>;
        label?: Maybe<string>;
        type?: Maybe<string>;
        placeholder?: Maybe<string>;
      }>
    >;
  }>;
};

export type TemplateCodeVariables = Exact<{ [key: string]: never }>;

export type TemplateCodeResponse = { templateCode: string };

export type UserVariables = Exact<{
  id: Scalars['String'];
}>;

export type UserResponse = {
  user: {
    id: string;
    userPoolId: string;
    username?: Maybe<string>;
    email?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    nickname?: Maybe<string>;
    registerSource: Array<string>;
    photo?: Maybe<string>;
    password?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    device?: Maybe<string>;
    browser?: Maybe<string>;
    company?: Maybe<string>;
    name?: Maybe<string>;
    givenName?: Maybe<string>;
    familyName?: Maybe<string>;
    middleName?: Maybe<string>;
    profile?: Maybe<string>;
    preferredUsername?: Maybe<string>;
    website?: Maybe<string>;
    gender?: Maybe<string>;
    birthdate?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    locale?: Maybe<string>;
    address?: Maybe<string>;
    formatted?: Maybe<string>;
    streetAddress?: Maybe<string>;
    locality?: Maybe<string>;
    region?: Maybe<string>;
    postalCode?: Maybe<string>;
    country?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
  };
};

export type UserBatchVariables = Exact<{
  ids: Array<Scalars['String']>;
}>;

export type UserBatchResponse = {
  userBatch: {
    totalCount: number;
    list: Array<{
      id: string;
      userPoolId: string;
      username?: Maybe<string>;
      email?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      nickname?: Maybe<string>;
      registerSource: Array<string>;
      photo?: Maybe<string>;
      password?: Maybe<string>;
      oauth?: Maybe<string>;
      token?: Maybe<string>;
      tokenExpiredAt?: Maybe<string>;
      loginsCount?: Maybe<number>;
      lastLogin?: Maybe<string>;
      lastIP?: Maybe<string>;
      signedUp?: Maybe<string>;
      blocked?: Maybe<boolean>;
      isDeleted?: Maybe<boolean>;
      device?: Maybe<string>;
      browser?: Maybe<string>;
      company?: Maybe<string>;
      name?: Maybe<string>;
      givenName?: Maybe<string>;
      familyName?: Maybe<string>;
      middleName?: Maybe<string>;
      profile?: Maybe<string>;
      preferredUsername?: Maybe<string>;
      website?: Maybe<string>;
      gender?: Maybe<string>;
      birthdate?: Maybe<string>;
      zoneinfo?: Maybe<string>;
      locale?: Maybe<string>;
      address?: Maybe<string>;
      formatted?: Maybe<string>;
      streetAddress?: Maybe<string>;
      locality?: Maybe<string>;
      region?: Maybe<string>;
      postalCode?: Maybe<string>;
      country?: Maybe<string>;
      updatedAt?: Maybe<string>;
      customData?: Maybe<string>;
    }>;
  };
};

export type UserpoolVariables = Exact<{ [key: string]: never }>;

export type UserpoolResponse = {
  userpool: {
    id: string;
    name: string;
    description?: Maybe<string>;
    secret: string;
    logo: string;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    emailVerifiedDefault: boolean;
    sendWelcomeEmail: boolean;
    registerDisabled: boolean;
    showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>;
    allowedOrigins?: Maybe<string>;
    tokenExpiresAfter?: Maybe<number>;
    isDeleted?: Maybe<boolean>;
    userpoolTypes?: Maybe<
      Array<{
        code?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        sdks?: Maybe<Array<Maybe<string>>>;
      }>
    >;
    frequentRegisterCheck?: Maybe<{
      timeInterval?: Maybe<number>;
      limit?: Maybe<number>;
      enabled?: Maybe<boolean>;
    }>;
    loginFailCheck?: Maybe<{
      timeInterval?: Maybe<number>;
      limit?: Maybe<number>;
      enabled?: Maybe<boolean>;
    }>;
    changePhoneStrategy?: Maybe<{ verifyOldPhone?: Maybe<boolean> }>;
    changeEmailStrategy?: Maybe<{ verifyOldEmail?: Maybe<boolean> }>;
    qrcodeLoginStrategy?: Maybe<{
      qrcodeExpiresAfter?: Maybe<number>;
      returnFullUserInfo?: Maybe<boolean>;
      allowExchangeUserInfoFromBrowser?: Maybe<boolean>;
      ticketExpiresAfter?: Maybe<number>;
    }>;
    app2WxappLoginStrategy?: Maybe<{
      ticketExpriresAfter?: Maybe<number>;
      ticketExchangeUserInfoNeedSecret?: Maybe<boolean>;
    }>;
    whitelist?: Maybe<{
      phoneEnabled?: Maybe<boolean>;
      emailEnabled?: Maybe<boolean>;
      usernameEnabled?: Maybe<boolean>;
    }>;
  };
};

export type UserpoolTypesVariables = Exact<{ [key: string]: never }>;

export type UserpoolTypesResponse = {
  userpoolTypes: Array<{
    code?: Maybe<string>;
    name?: Maybe<string>;
    description?: Maybe<string>;
    image?: Maybe<string>;
    sdks?: Maybe<Array<Maybe<string>>>;
  }>;
};

export type UserpoolsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type UserpoolsResponse = {
  userpools: {
    totalCount: number;
    list: Array<{
      id: string;
      name: string;
      description?: Maybe<string>;
      secret: string;
      logo: string;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      emailVerifiedDefault: boolean;
      sendWelcomeEmail: boolean;
      registerDisabled: boolean;
      showWxQRCodeWhenRegisterDisabled?: Maybe<boolean>;
      allowedOrigins?: Maybe<string>;
      tokenExpiresAfter?: Maybe<number>;
      isDeleted?: Maybe<boolean>;
    }>;
  };
};

export type UsersVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type UsersResponse = {
  users: {
    totalCount: number;
    list: Array<{
      id: string;
      userPoolId: string;
      username?: Maybe<string>;
      email?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      nickname?: Maybe<string>;
      registerSource: Array<string>;
      photo?: Maybe<string>;
      password?: Maybe<string>;
      oauth?: Maybe<string>;
      token?: Maybe<string>;
      tokenExpiredAt?: Maybe<string>;
      loginsCount?: Maybe<number>;
      lastLogin?: Maybe<string>;
      lastIP?: Maybe<string>;
      signedUp?: Maybe<string>;
      blocked?: Maybe<boolean>;
      isDeleted?: Maybe<boolean>;
      device?: Maybe<string>;
      browser?: Maybe<string>;
      company?: Maybe<string>;
      name?: Maybe<string>;
      givenName?: Maybe<string>;
      familyName?: Maybe<string>;
      middleName?: Maybe<string>;
      profile?: Maybe<string>;
      preferredUsername?: Maybe<string>;
      website?: Maybe<string>;
      gender?: Maybe<string>;
      birthdate?: Maybe<string>;
      zoneinfo?: Maybe<string>;
      locale?: Maybe<string>;
      address?: Maybe<string>;
      formatted?: Maybe<string>;
      streetAddress?: Maybe<string>;
      locality?: Maybe<string>;
      region?: Maybe<string>;
      postalCode?: Maybe<string>;
      country?: Maybe<string>;
      updatedAt?: Maybe<string>;
      customData?: Maybe<string>;
    }>;
  };
};

export type WebhookVariables = Exact<{
  webhookId?: Maybe<Scalars['String']>;
}>;

export type WebhookResponse = {
  webhook: {
    id?: Maybe<string>;
    userPoolId: string;
    url: string;
    isLastTimeSuccess?: Maybe<boolean>;
    contentType: string;
    secret?: Maybe<string>;
    enable: boolean;
    events: Array<{ name: string; label: string; description?: Maybe<string> }>;
  };
};

export type WebhookLogVariables = Exact<{
  webhookLogId?: Maybe<Scalars['String']>;
}>;

export type WebhookLogResponse = {
  webhookLog: {
    id: string;
    webhookId: string;
    userPoolId: string;
    event: string;
    errorMessage?: Maybe<string>;
    request?: Maybe<{ headers?: Maybe<string>; payload?: Maybe<string> }>;
    response?: Maybe<{
      headers?: Maybe<string>;
      body?: Maybe<string>;
      statusCode?: Maybe<number>;
    }>;
  };
};

export type WebhookLogsVariables = Exact<{ [key: string]: never }>;

export type WebhookLogsResponse = {
  webhookLogs: {
    totalCount: number;
    list: Array<{
      id: string;
      webhookId: string;
      userPoolId: string;
      event: string;
      errorMessage?: Maybe<string>;
    }>;
  };
};

export type WebhookOptionsVariables = Exact<{ [key: string]: never }>;

export type WebhookOptionsResponse = {
  webhookOptions: {
    webhookEvents: Array<
      Maybe<{ name: string; label: string; description?: Maybe<string> }>
    >;
    contentTypes: Array<Maybe<{ name: string; label: string }>>;
  };
};

export type WebhooksVariables = Exact<{ [key: string]: never }>;

export type WebhooksResponse = {
  webhooks: {
    totalCount: number;
    list: Array<{
      id?: Maybe<string>;
      userPoolId: string;
      url: string;
      isLastTimeSuccess?: Maybe<boolean>;
      contentType: string;
      secret?: Maybe<string>;
      enable: boolean;
    }>;
  };
};

export type WhitelistVariables = Exact<{
  type: WhitelistType;
}>;

export type WhitelistResponse = {
  whitelist: Array<{
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    value: string;
  }>;
};

export const AddCooperatorDocument = `
    mutation addCooperator($userId: String!, $roleId: String!) {
  addCooperator(userId: $userId, roleId: $roleId) {
    roles {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
    }
    user {
      id
      userPoolId
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      country
      updatedAt
      customData
    }
  }
}
    `;
export const AddFunctionToPipelineDocument = `
    mutation addFunctionToPipeline($input: AddFunctionToPipelineInput!) {
  addFunctionToPipeline(input: $input) {
    id
    name
    trigger
    functions {
      funcId
      asynchronous
      enabled
    }
  }
}
    `;
export const AddMemberDocument = `
    mutation addMember($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $orgId: String!, $nodeCode: String!, $userIds: [String!]!) {
  addMember(orgId: $orgId, nodeCode: $nodeCode, userIds: $userIds) {
    id
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    createdAt
    updatedAt
    children
    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {
      totalCount
      list {
        id
        userPoolId
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        country
        updatedAt
        customData
      }
    }
  }
}
    `;
export const AddNodeDocument = `
    mutation addNode($orgId: String!, $parentNodeId: String, $name: String!, $nameI18n: String, $description: String, $descriptionI18n: String, $order: Int, $code: String) {
  addNode(orgId: $orgId, parentNodeId: $parentNodeId, name: $name, nameI18n: $nameI18n, description: $description, descriptionI18n: $descriptionI18n, order: $order, code: $code) {
    id
    rootNode {
      id
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
    nodes {
      id
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
  }
}
    `;
export const AddWhitelistDocument = `
    mutation addWhitelist($type: WhitelistType!, $list: [String!]!) {
  addWhitelist(type: $type, list: $list) {
    createdAt
    updatedAt
    value
  }
}
    `;
export const AssignRoleDocument = `
    mutation assignRole($code: String!, $userIds: [String!], $groupCodes: [String!], $nodeCodes: [String!]) {
  assignRole(code: $code, userIds: $userIds, groupCodes: $groupCodes, nodeCodes: $nodeCodes) {
    code
    name
    description
    isSystem
    createdAt
    updatedAt
    users {
      totalCount
    }
    parent {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
    }
  }
}
    `;
export const ChangeMfaDocument = `
    mutation changeMfa($enable: Boolean, $id: String, $userId: String, $userPoolId: String, $refresh: Boolean) {
  changeMfa(enable: $enable, id: $id, userId: $userId, userPoolId: $userPoolId, refresh: $refresh) {
    id
    userId
    userPoolId
    enable
    secret
  }
}
    `;
export const ConfigEmailTemplateDocument = `
    mutation configEmailTemplate($input: ConfigEmailTemplateInput!) {
  configEmailTemplate(input: $input) {
    type
    name
    subject
    sender
    content
    redirectTo
    hasURL
    expiresIn
    enabled
    isSystem
  }
}
    `;
export const CreateFunctionDocument = `
    mutation createFunction($input: CreateFunctionInput!) {
  createFunction(input: $input) {
    id
    name
    sourceCode
    description
    url
  }
}
    `;
export const CreateOrgDocument = `
    mutation createOrg($name: String!, $code: String, $description: String) {
  createOrg(name: $name, code: $code, description: $description) {
    id
    rootNode {
      id
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
    nodes {
      id
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
  }
}
    `;
export const CreatePipelineDocument = `
    mutation createPipeline($input: CreatePipelineInput!) {
  createPipeline(input: $input) {
    id
    name
    trigger
    functions {
      funcId
      asynchronous
      enabled
    }
  }
}
    `;
export const CreatePolicyDocument = `
    mutation createPolicy($code: String!, $resource: String!, $actions: [String!]!, $effect: PolicyEffect!) {
  createPolicy(code: $code, resource: $resource, actions: $actions, effect: $effect) {
    code
    resource
    actions
    effect
    createdAt
    updatedAt
  }
}
    `;
export const CreateRoleDocument = `
    mutation createRole($code: String!, $name: String, $description: String, $parent: String) {
  createRole(code: $code, name: $name, description: $description, parent: $parent) {
    code
    name
    description
    isSystem
    createdAt
    updatedAt
    users {
      totalCount
    }
    parent {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
    }
  }
}
    `;
export const CreateSocialConnectionDocument = `
    mutation createSocialConnection($input: CreateSocialConnectionInput!) {
  createSocialConnection(input: $input) {
    provider
    name
    logo
    description
    fields {
      key
      label
      type
      placeholder
    }
  }
}
    `;
export const CreateSocialConnectionInstanceDocument = `
    mutation createSocialConnectionInstance($input: CreateSocialConnectionInstanceInput!) {
  createSocialConnectionInstance(input: $input) {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const CreateUserpoolDocument = `
    mutation createUserpool($name: String!, $description: String, $logo: String, $userpoolTypes: [String!]) {
  createUserpool(name: $name, description: $description, logo: $logo, userpoolTypes: $userpoolTypes) {
    id
    name
    description
    secret
    userpoolTypes {
      code
      name
      description
      image
      sdks
    }
    logo
    createdAt
    updatedAt
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWxQRCodeWhenRegisterDisabled
    allowedOrigins
    tokenExpiresAfter
    isDeleted
    frequentRegisterCheck {
      timeInterval
      limit
      enabled
    }
    loginFailCheck {
      timeInterval
      limit
      enabled
    }
    changePhoneStrategy {
      verifyOldPhone
    }
    changeEmailStrategy {
      verifyOldEmail
    }
    qrcodeLoginStrategy {
      qrcodeExpiresAfter
      returnFullUserInfo
      allowExchangeUserInfoFromBrowser
      ticketExpiresAfter
    }
    app2WxappLoginStrategy {
      ticketExpriresAfter
      ticketExchangeUserInfoNeedSecret
    }
    whitelist {
      phoneEnabled
      emailEnabled
      usernameEnabled
    }
  }
}
    `;
export const CreateWebhookDocument = `
    mutation createWebhook($input: CreateWebhookInput!) {
  createWebhook(input: $input) {
    id
    userPoolId
    events {
      name
      label
      description
    }
    url
    isLastTimeSuccess
    contentType
    secret
    enable
  }
}
    `;
export const DeleteFunctionDocument = `
    mutation deleteFunction($id: String!) {
  deleteFunction(id: $id) {
    message
    code
  }
}
    `;
export const DeleteNodeDocument = `
    mutation deleteNode($orgId: String!, $nodeId: String!) {
  deleteNode(orgId: $orgId, nodeId: $nodeId) {
    id
    rootNode {
      id
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
    nodes {
      id
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
  }
}
    `;
export const DeleteOrgDocument = `
    mutation deleteOrg($id: String!) {
  deleteOrg(id: $id) {
    message
    code
  }
}
    `;
export const DeleteRoleDocument = `
    mutation deleteRole($code: String!) {
  deleteRole(code: $code) {
    message
    code
  }
}
    `;
export const DeleteRolesDocument = `
    mutation deleteRoles($codes: [String!]!) {
  deleteRoles(codes: $codes) {
    succeedCount
    failedCount
    message
    errors
  }
}
    `;
export const DeleteUserDocument = `
    mutation deleteUser($id: String!) {
  deleteUser(id: $id) {
    message
    code
  }
}
    `;
export const DeleteUserpoolDocument = `
    mutation deleteUserpool {
  deleteUserpool {
    message
    code
  }
}
    `;
export const DeleteUsersDocument = `
    mutation deleteUsers($ids: [String!]!) {
  deleteUsers(ids: $ids) {
    message
    code
  }
}
    `;
export const DeleteWebhookDocument = `
    mutation deleteWebhook($input: DeleteWebhookInput!) {
  deleteWebhook(input: $input) {
    message
    code
  }
}
    `;
export const DisableEmailTemplateDocument = `
    mutation disableEmailTemplate($type: EmailTemplateType!) {
  disableEmailTemplate(type: $type) {
    type
    name
    subject
    sender
    content
    redirectTo
    hasURL
    expiresIn
    enabled
    isSystem
  }
}
    `;
export const DisableSocialConnectionInstanceDocument = `
    mutation disableSocialConnectionInstance($provider: String!) {
  disableSocialConnectionInstance(provider: $provider) {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const DoRegisterProcessDocument = `
    mutation doRegisterProcess($userInfo: CreateUserInput!, $keepPassword: Boolean) {
  doRegisterProcess(userInfo: $userInfo, keepPassword: $keepPassword) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const EnableEmailTemplateDocument = `
    mutation enableEmailTemplate($type: EmailTemplateType!) {
  enableEmailTemplate(type: $type) {
    type
    name
    subject
    sender
    content
    redirectTo
    hasURL
    expiresIn
    enabled
    isSystem
  }
}
    `;
export const EnableSocialConnectionInstanceDocument = `
    mutation enableSocialConnectionInstance($provider: String!) {
  enableSocialConnectionInstance(provider: $provider) {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const LoginByEmailDocument = `
    mutation loginByEmail($input: LoginByEmailInput!) {
  loginByEmail(input: $input) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const LoginByPhoneCodeDocument = `
    mutation loginByPhoneCode($input: LoginByPhoneCodeInput!) {
  loginByPhoneCode(input: $input) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const LoginByPhonePasswordDocument = `
    mutation loginByPhonePassword($input: LoginByPhonePasswordInput!) {
  loginByPhonePassword(input: $input) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const LoginByUsernameDocument = `
    mutation loginByUsername($input: LoginByUsernameInput!) {
  loginByUsername(input: $input) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const RefreshUserpoolSecretDocument = `
    mutation refreshUserpoolSecret {
  refreshUserpoolSecret
}
    `;
export const RegisterByEmailDocument = `
    mutation registerByEmail($input: RegisterByEmailInput!) {
  registerByEmail(input: $input) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const RegisterByPhonePasswordDocument = `
    mutation registerByPhonePassword($input: RegisterByPhonePasswordInput!) {
  registerByPhonePassword(input: $input) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const RegisterByUsernameDocument = `
    mutation registerByUsername($input: RegisterByUsernameInput!) {
  registerByUsername(input: $input) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const RemoveCooperatorDocument = `
    mutation removeCooperator($userId: String!, $roleId: String!) {
  removeCooperator(userId: $userId, roleId: $roleId) {
    message
    code
  }
}
    `;
export const RemoveFunctionFromPipelineDocument = `
    mutation removeFunctionFromPipeline($input: RemoveFunctionFromPipelineInput!) {
  removeFunctionFromPipeline(input: $input) {
    id
    name
    trigger
    functions {
      funcId
      asynchronous
      enabled
    }
  }
}
    `;
export const RemoveMemberDocument = `
    mutation removeMember($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $orgId: String!, $nodeId: String!, $userIds: [String!]!) {
  removeMember(orgId: $orgId, nodeId: $nodeId, userIds: $userIds) {
    id
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    createdAt
    updatedAt
    children
    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {
      totalCount
      list {
        id
        userPoolId
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        country
        updatedAt
        customData
      }
    }
  }
}
    `;
export const RemoveWhitelistDocument = `
    mutation removeWhitelist($type: WhitelistType!, $list: [String!]!) {
  removeWhitelist(type: $type, list: $list) {
    createdAt
    updatedAt
    value
  }
}
    `;
export const ResetPasswordDocument = `
    mutation resetPassword($phone: String, $email: String, $code: String!, $newPassword: String!) {
  resetPassword(phone: $phone, email: $email, code: $code, newPassword: $newPassword) {
    message
    code
  }
}
    `;
export const RevokeRoleDocument = `
    mutation revokeRole($code: String!, $userIds: [String!], $groupCodes: [String!], $nodeCodes: [String!]) {
  revokeRole(code: $code, userIds: $userIds, groupCodes: $groupCodes, nodeCodes: $nodeCodes) {
    code
    name
    description
    isSystem
    createdAt
    updatedAt
    users {
      totalCount
    }
    parent {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
    }
  }
}
    `;
export const SendEmailDocument = `
    mutation sendEmail($email: String!, $scene: EmailScene!) {
  sendEmail(email: $email, scene: $scene) {
    message
    code
  }
}
    `;
export const SendWebhookTestRequestDocument = `
    mutation sendWebhookTestRequest($input: SendWebhookTestRequestInput!) {
  sendWebhookTestRequest(input: $input) {
    message
    code
  }
}
    `;
export const UpdateEmailDocument = `
    mutation updateEmail($email: String!, $emailCode: String!, $oldEmail: String, $oldEmailCode: String) {
  updateEmail(email: $email, emailCode: $emailCode, oldEmail: $oldEmail, oldEmailCode: $oldEmailCode) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const UpdateFunctionDocument = `
    mutation updateFunction($input: UpdateFunctionInput!) {
  updateFunction(input: $input) {
    id
    name
    sourceCode
    description
    url
  }
}
    `;
export const UpdateNodeDocument = `
    mutation updateNode($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $id: String!, $name: String, $code: String, $description: String) {
  updateNode(id: $id, name: $name, code: $code, description: $description) {
    id
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    path
    createdAt
    updatedAt
    children
    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {
      totalCount
    }
  }
}
    `;
export const UpdatePasswordDocument = `
    mutation updatePassword($id: String!, $newPassword: String!, $oldPassword: String) {
  updatePassword(id: $id, newPassword: $newPassword, oldPassword: $oldPassword) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const UpdatePhoneDocument = `
    mutation updatePhone($phone: String!, $phoneCode: String!, $oldPhone: String, $oldPhoneCode: String) {
  updatePhone(phone: $phone, phoneCode: $phoneCode, oldPhone: $oldPhone, oldPhoneCode: $oldPhoneCode) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const UpdateRoleDocument = `
    mutation updateRole($code: String!, $name: String, $description: String) {
  updateRole(code: $code, name: $name, description: $description) {
    code
    name
    description
    isSystem
    createdAt
    updatedAt
    users {
      totalCount
    }
    parent {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
    }
  }
}
    `;
export const UpdateUserDocument = `
    mutation updateUser($id: String!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const UpdateUserpoolDocument = `
    mutation updateUserpool($input: UpdateUserpoolInput!) {
  updateUserpool(input: $input) {
    id
    name
    description
    secret
    userpoolTypes {
      code
      name
      description
      image
      sdks
    }
    logo
    createdAt
    updatedAt
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWxQRCodeWhenRegisterDisabled
    allowedOrigins
    tokenExpiresAfter
    isDeleted
    frequentRegisterCheck {
      timeInterval
      limit
      enabled
    }
    loginFailCheck {
      timeInterval
      limit
      enabled
    }
    changePhoneStrategy {
      verifyOldPhone
    }
    changeEmailStrategy {
      verifyOldEmail
    }
    qrcodeLoginStrategy {
      qrcodeExpiresAfter
      returnFullUserInfo
      allowExchangeUserInfoFromBrowser
      ticketExpiresAfter
    }
    app2WxappLoginStrategy {
      ticketExpriresAfter
      ticketExchangeUserInfoNeedSecret
    }
    whitelist {
      phoneEnabled
      emailEnabled
      usernameEnabled
    }
  }
}
    `;
export const UpdateWebhookDocument = `
    mutation updateWebhook($input: UpdateWebhookInput!) {
  updateWebhook(input: $input) {
    id
    userPoolId
    events {
      name
      label
      description
    }
    url
    isLastTimeSuccess
    contentType
    secret
    enable
  }
}
    `;
export const CheckPasswordStrengthDocument = `
    query checkPasswordStrength($password: String!) {
  checkPasswordStrength(password: $password) {
    valid
    message
  }
}
    `;
export const ChildrenNodesDocument = `
    query childrenNodes($orgId: String!, $nodeId: String!) {
  childrenNodes(orgId: $orgId, nodeId: $nodeId) {
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    createdAt
    updatedAt
    children
  }
}
    `;
export const CooperatedUserpoolsDocument = `
    query cooperatedUserpools($page: Int, $limit: Int, $sortBy: SortByEnum) {
  cooperatedUserpools(page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
  }
}
    `;
export const CooperatorsDocument = `
    query cooperators {
  cooperators {
    roles {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
    }
    user {
      id
      userPoolId
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      country
      updatedAt
      customData
    }
  }
}
    `;
export const EmailTemplatesDocument = `
    query emailTemplates {
  emailTemplates {
    type
    name
    subject
    sender
    content
    redirectTo
    hasURL
    expiresIn
    enabled
    isSystem
  }
}
    `;
export const FunctionDocument = `
    query function($id: String) {
  function(id: $id) {
    id
    name
    sourceCode
    description
    url
  }
}
    `;
export const FunctionsDocument = `
    query functions($page: Int, $limit: Int, $sortBy: SortByEnum) {
  functions(page: $page, limit: $limit, sortBy: $sortBy) {
    list {
      id
      name
      sourceCode
      description
      url
    }
    totalCount
  }
}
    `;
export const GroupsDocument = `
    query groups($userId: String, $page: Int, $limit: Int, $sortBy: SortByEnum) {
  groups(userId: $userId, page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      code
      name
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const IsActionAllowedDocument = `
    query isActionAllowed($resouceCode: String!, $action: String!, $userId: String!) {
  isActionAllowed(resouceCode: $resouceCode, action: $action, userId: $userId)
}
    `;
export const IsActionDeniedDocument = `
    query isActionDenied($resouceCode: String!, $action: String!, $userId: String!) {
  isActionDenied(resouceCode: $resouceCode, action: $action, userId: $userId)
}
    `;
export const IsDomainAvaliableDocument = `
    query isDomainAvaliable($domain: String!) {
  isDomainAvaliable(domain: $domain)
}
    `;
export const NodeDocument = `
    query node($orgId: String!, $code: String!) {
  node(orgId: $orgId, code: $code) {
    id
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    createdAt
    updatedAt
    children
  }
}
    `;
export const NodeWithMembersDocument = `
    query nodeWithMembers($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $orgId: String!, $code: String!) {
  node(orgId: $orgId, code: $code) {
    id
    name
    nameI18n
    description
    descriptionI18n
    order
    code
    root
    depth
    createdAt
    updatedAt
    children
    users(page: $page, limit: $limit, sortBy: $sortBy, includeChildrenNodes: $includeChildrenNodes) {
      totalCount
      list {
        id
        userPoolId
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        country
        updatedAt
        customData
      }
    }
  }
}
    `;
export const OrgDocument = `
    query org($id: String!) {
  org(id: $id) {
    id
    rootNode {
      id
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
    nodes {
      id
      name
      nameI18n
      description
      descriptionI18n
      order
      code
      root
      depth
      path
      createdAt
      updatedAt
      children
    }
  }
}
    `;
export const OrgsDocument = `
    query orgs($page: Int, $limit: Int, $sortBy: SortByEnum) {
  orgs(page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      id
      rootNode {
        id
        name
        nameI18n
        path
        description
        descriptionI18n
        order
        code
        root
        depth
        createdAt
        updatedAt
        children
      }
      nodes {
        id
        name
        path
        nameI18n
        description
        descriptionI18n
        order
        code
        root
        depth
        createdAt
        updatedAt
        children
      }
    }
  }
}
    `;
export const PipelineDocument = `
    query pipeline($id: String!) {
  pipeline(id: $id) {
    id
    name
    trigger
    functions {
      funcId
      asynchronous
      enabled
    }
  }
}
    `;
export const PipelinesDocument = `
    query pipelines {
  pipelines {
    list {
      id
      name
      trigger
    }
    totalCount
  }
}
    `;
export const PoliciesDocument = `
    query policies {
  policies {
    totalCount
    list {
      code
      resource
      actions
      effect
      createdAt
      updatedAt
    }
  }
}
    `;
export const PreviewEmailDocument = `
    query previewEmail($type: EmailTemplateType!) {
  previewEmail(type: $type)
}
    `;
export const QiniuUptokenDocument = `
    query qiniuUptoken($type: String) {
  qiniuUptoken(type: $type)
}
    `;
export const QueryMfaDocument = `
    query queryMfa($id: String, $userId: String, $userPoolId: String) {
  queryMfa(id: $id, userId: $userId, userPoolId: $userPoolId) {
    id
    userId
    userPoolId
    enable
    secret
  }
}
    `;
export const RoleDocument = `
    query role($code: String!) {
  role(code: $code) {
    code
    name
    description
    isSystem
    createdAt
    updatedAt
    parent {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
    }
  }
}
    `;
export const RoleWithUsersDocument = `
    query roleWithUsers($code: String!) {
  role(code: $code) {
    code
    name
    description
    isSystem
    createdAt
    updatedAt
    parent {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
    }
    users {
      totalCount
      list {
        id
        userPoolId
        username
        email
        emailVerified
        phone
        phoneVerified
        unionid
        openid
        nickname
        registerSource
        photo
        password
        oauth
        token
        tokenExpiredAt
        loginsCount
        lastLogin
        lastIP
        signedUp
        blocked
        isDeleted
        device
        browser
        company
        name
        givenName
        familyName
        middleName
        profile
        preferredUsername
        website
        gender
        birthdate
        zoneinfo
        locale
        address
        formatted
        streetAddress
        locality
        region
        postalCode
        country
        updatedAt
        customData
      }
    }
  }
}
    `;
export const RolesDocument = `
    query roles($userId: String, $page: Int, $limit: Int, $sortBy: SortByEnum) {
  roles(userId: $userId, page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
      parent {
        code
        name
        description
        isSystem
        createdAt
        updatedAt
      }
    }
  }
}
    `;
export const SearchUserDocument = `
    query searchUser($query: String!, $fields: [String], $page: Int, $limit: Int) {
  searchUser(query: $query, fields: $fields, page: $page, limit: $limit) {
    totalCount
    list {
      id
      userPoolId
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      country
      updatedAt
      customData
    }
  }
}
    `;
export const SocialConnectionDocument = `
    query socialConnection($provider: String!) {
  socialConnection(provider: $provider) {
    provider
    name
    logo
    description
    fields {
      key
      label
      type
      placeholder
    }
  }
}
    `;
export const SocialConnectionInstanceDocument = `
    query socialConnectionInstance($provider: String!) {
  socialConnectionInstance(provider: $provider) {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const SocialConnectionInstancesDocument = `
    query socialConnectionInstances {
  socialConnectionInstances {
    provider
    enabled
    fields {
      key
      value
    }
  }
}
    `;
export const SocialConnectionsDocument = `
    query socialConnections {
  socialConnections {
    provider
    name
    logo
    description
    fields {
      key
      label
      type
      placeholder
    }
  }
}
    `;
export const TemplateCodeDocument = `
    query templateCode {
  templateCode
}
    `;
export const UserDocument = `
    query user($id: String!) {
  user(id: $id) {
    id
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    nickname
    registerSource
    photo
    password
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
    device
    browser
    company
    name
    givenName
    familyName
    middleName
    profile
    preferredUsername
    website
    gender
    birthdate
    zoneinfo
    locale
    address
    formatted
    streetAddress
    locality
    region
    postalCode
    country
    updatedAt
    customData
  }
}
    `;
export const UserBatchDocument = `
    query userBatch($ids: [String!]!) {
  userBatch(ids: $ids) {
    totalCount
    list {
      id
      userPoolId
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      country
      updatedAt
      customData
    }
  }
}
    `;
export const UserpoolDocument = `
    query userpool {
  userpool {
    id
    name
    description
    secret
    userpoolTypes {
      code
      name
      description
      image
      sdks
    }
    logo
    createdAt
    updatedAt
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWxQRCodeWhenRegisterDisabled
    allowedOrigins
    tokenExpiresAfter
    isDeleted
    frequentRegisterCheck {
      timeInterval
      limit
      enabled
    }
    loginFailCheck {
      timeInterval
      limit
      enabled
    }
    changePhoneStrategy {
      verifyOldPhone
    }
    changeEmailStrategy {
      verifyOldEmail
    }
    qrcodeLoginStrategy {
      qrcodeExpiresAfter
      returnFullUserInfo
      allowExchangeUserInfoFromBrowser
      ticketExpiresAfter
    }
    app2WxappLoginStrategy {
      ticketExpriresAfter
      ticketExchangeUserInfoNeedSecret
    }
    whitelist {
      phoneEnabled
      emailEnabled
      usernameEnabled
    }
  }
}
    `;
export const UserpoolTypesDocument = `
    query userpoolTypes {
  userpoolTypes {
    code
    name
    description
    image
    sdks
  }
}
    `;
export const UserpoolsDocument = `
    query userpools($page: Int, $limit: Int, $sortBy: SortByEnum) {
  userpools(page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      id
      name
      description
      secret
      logo
      createdAt
      updatedAt
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWxQRCodeWhenRegisterDisabled
      allowedOrigins
      tokenExpiresAfter
      isDeleted
    }
  }
}
    `;
export const UsersDocument = `
    query users($page: Int, $limit: Int, $sortBy: SortByEnum) {
  users(page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      id
      userPoolId
      username
      email
      emailVerified
      phone
      phoneVerified
      unionid
      openid
      nickname
      registerSource
      photo
      password
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
      device
      browser
      company
      name
      givenName
      familyName
      middleName
      profile
      preferredUsername
      website
      gender
      birthdate
      zoneinfo
      locale
      address
      formatted
      streetAddress
      locality
      region
      postalCode
      country
      updatedAt
      customData
    }
  }
}
    `;
export const WebhookDocument = `
    query webhook($webhookId: String) {
  webhook(webhookId: $webhookId) {
    id
    userPoolId
    events {
      name
      label
      description
    }
    url
    isLastTimeSuccess
    contentType
    secret
    enable
  }
}
    `;
export const WebhookLogDocument = `
    query webhookLog($webhookLogId: String) {
  webhookLog(webhookLogId: $webhookLogId) {
    id
    webhookId
    userPoolId
    event
    request {
      headers
      payload
    }
    response {
      headers
      body
      statusCode
    }
    errorMessage
  }
}
    `;
export const WebhookLogsDocument = `
    query webhookLogs {
  webhookLogs {
    list {
      id
      webhookId
      userPoolId
      event
      errorMessage
    }
    totalCount
  }
}
    `;
export const WebhookOptionsDocument = `
    query webhookOptions {
  webhookOptions {
    webhookEvents {
      name
      label
      description
    }
    contentTypes {
      name
      label
    }
  }
}
    `;
export const WebhooksDocument = `
    query webhooks {
  webhooks {
    list {
      id
      userPoolId
      url
      isLastTimeSuccess
      contentType
      secret
      enable
    }
    totalCount
  }
}
    `;
export const WhitelistDocument = `
    query whitelist($type: WhitelistType!) {
  whitelist(type: $type) {
    createdAt
    updatedAt
    value
  }
}
    `;
