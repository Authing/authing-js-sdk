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
  code_String_NotNull_minLength_4_maxLength_6: any;
  username_String_NotNull_minLength_4_maxLength_50: any;
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
  emailTemplates: Array<EmailTemplate>;
  previewEmail: Scalars['String'];
  /** 获取函数模版 */
  templateCode: Scalars['String'];
  function?: Maybe<Function>;
  functions: PaginatedFunctions;
  groups: PaginatedGroups;
  addUserToGroup: PaginatedGroups;
  /** 查询 MFA 信息 */
  queryMfa?: Maybe<Mfa>;
  nodeById?: Maybe<Node>;
  /** 通过 code 查询节点 */
  nodeByCode?: Maybe<Node>;
  /** 查询组织机构详情 */
  org: Org;
  /** 查询用户池组织机构列表 */
  orgs: PaginatedOrgs;
  /** 查询子节点列表 */
  childrenNodes: Array<Node>;
  checkPasswordStrength: CheckPasswordStrengthResult;
  isActionAllowed: Scalars['Boolean'];
  isActionDenied: Scalars['Boolean'];
  policies: PaginatedPolicies;
  /** 通过 **code** 查询角色详情 */
  role: Role;
  /** 获取角色列表 */
  roles: PaginatedRoles;
  /** 查询某个实体定义的自定义数据 */
  udv: Array<UserDefinedData>;
  /** 查询用户池定义的自定义字段 */
  udf: Array<UserDefinedField>;
  user?: Maybe<User>;
  userBatch: Array<User>;
  users: PaginatedUsers;
  searchUser: PaginatedUsers;
  /** 查询用户池详情 */
  userpool: UserPool;
  /** 查询用户池列表 */
  userpools: PaginatedUserpool;
  userpoolTypes: Array<UserPoolType>;
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

export type QueryAddUserToGroupArgs = {
  userId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
};

export type QueryQueryMfaArgs = {
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
};

export type QueryNodeByIdArgs = {
  id: Scalars['String'];
};

export type QueryNodeByCodeArgs = {
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

export type QueryIsActionAllowedArgs = {
  resource: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
};

export type QueryIsActionDeniedArgs = {
  resource: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
};

export type QueryRoleArgs = {
  code: Scalars['String'];
};

export type QueryRolesArgs = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
};

export type QueryUdvArgs = {
  targetType: UdfTargetType;
  targetId: Scalars['String'];
};

export type QueryUdfArgs = {
  targetType: UdfTargetType;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
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

export type PaginatedUsers = {
  totalCount: Scalars['Int'];
  list: Array<User>;
};

export type User = {
  /** 用户 ID */
  id: Scalars['String'];
  arn: Scalars['String'];
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
  /** 用户的身份信息 */
  identities?: Maybe<Array<Maybe<Identity>>>;
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
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  /** 自定义用户数据，是一个 JSON 序列化过后的字符串 */
  customData?: Maybe<Scalars['String']>;
  roles?: Maybe<PaginatedRoles>;
};

export type Identity = {
  openid?: Maybe<Scalars['String']>;
  userIdInIdp?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  connectionId?: Maybe<Scalars['String']>;
  isSocial?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
};

export type PaginatedRoles = {
  totalCount: Scalars['Int'];
  list: Array<Role>;
};

export type Role = {
  /** 唯一标志 code */
  code: Scalars['String'];
  /** 资源描述符 arn */
  arn: Scalars['String'];
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

export enum UdfTargetType {
  Node = 'NODE',
  Org = 'ORG',
  User = 'USER',
  Userpool = 'USERPOOL',
  Role = 'ROLE',
  Permission = 'PERMISSION',
  Application = 'APPLICATION'
}

export type UserDefinedData = {
  key: Scalars['String'];
  dataType: UdfDataType;
  value: Scalars['String'];
};

export enum UdfDataType {
  String = 'STRING',
  Number = 'NUMBER',
  Datetime = 'DATETIME',
  Boolean = 'BOOLEAN',
  Object = 'OBJECT'
}

export type UserDefinedField = {
  targetType: UdfTargetType;
  dataType: UdfDataType;
  key: Scalars['String'];
  label: Scalars['String'];
  options?: Maybe<Scalars['String']>;
};

export type UserPool = {
  id: Scalars['String'];
  name: Scalars['String'];
  domain: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  secret: Scalars['String'];
  jwtSecret: Scalars['String'];
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

export type PaginatedUserpool = {
  totalCount: Scalars['Int'];
  list: Array<UserPool>;
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
  deleteNode: CommonMessage;
  /** （批量）将成员添加到节点中 */
  addMember: Node;
  /** （批量）将成员从节点中移除 */
  removeMember: Node;
  moveNode: Org;
  resetPassword?: Maybe<CommonMessage>;
  createPolicy: Policy;
  /** 允许操作某个资源 */
  allow: CommonMessage;
  registerByUsername?: Maybe<User>;
  registerByEmail?: Maybe<User>;
  registerByPhoneCode?: Maybe<User>;
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
  addUdf: Array<UserDefinedField>;
  removeUdf: Array<UserDefinedField>;
  setUdv?: Maybe<Array<UserDefinedData>>;
  removeUdv?: Maybe<Array<UserDefinedData>>;
  refreshToken?: Maybe<RefreshToken>;
  /** 创建用户。此接口需要管理员权限，普通用户注册请使用 **register** 接口。 */
  createUser: User;
  /** 更新用户信息。 */
  updateUser: User;
  /** 修改用户密码，此接口需要验证原始密码，管理员直接修改请使用 **updateUser** 接口。 */
  updatePassword: User;
  /** 绑定手机号，调用此接口需要当前用户未绑定手机号 */
  bindPhone: User;
  /** 解绑定手机号，调用此接口需要当前用户已绑定手机号并且绑定了其他登录方式 */
  unbindPhone: User;
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
  nodeId?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  nodeCode?: Maybe<Scalars['String']>;
  userIds: Array<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
};

export type MutationRemoveMemberArgs = {
  nodeId?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  nodeCode?: Maybe<Scalars['String']>;
  userIds: Array<Scalars['String']>;
};

export type MutationMoveNodeArgs = {
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
  targetParentId: Scalars['String'];
};

export type MutationResetPasswordArgs = {
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  newPassword: Scalars['String'];
};

export type MutationCreatePolicyArgs = {
  code: Scalars['String'];
  resource: Scalars['String'];
  actions: Array<Scalars['String']>;
  effect: PolicyEffect;
};

export type MutationAllowArgs = {
  resource: Scalars['String'];
  action: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
  userIds?: Maybe<Array<Scalars['String']>>;
  roleCode?: Maybe<Scalars['String']>;
  roleCodes?: Maybe<Array<Scalars['String']>>;
};

export type MutationRegisterByUsernameArgs = {
  input: RegisterByUsernameInput;
};

export type MutationRegisterByEmailArgs = {
  input: RegisterByEmailInput;
};

export type MutationRegisterByPhoneCodeArgs = {
  input: RegisterByPhoneCodeInput;
};

export type MutationCreateRoleArgs = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
};

export type MutationUpdateRoleArgs = {
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  newCode?: Maybe<Scalars['String']>;
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

export type MutationAddUdfArgs = {
  targetType: UdfTargetType;
  key: Scalars['String'];
  dataType: UdfDataType;
  label: Scalars['String'];
  options?: Maybe<Scalars['String']>;
};

export type MutationRemoveUdfArgs = {
  targetType: UdfTargetType;
  key: Scalars['String'];
};

export type MutationSetUdvArgs = {
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type MutationRemoveUdvArgs = {
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  key: Scalars['String'];
};

export type MutationRefreshTokenArgs = {
  id?: Maybe<Scalars['String']>;
};

export type MutationCreateUserArgs = {
  userInfo: CreateUserInput;
  keepPassword?: Maybe<Scalars['Boolean']>;
};

export type MutationUpdateUserArgs = {
  id?: Maybe<Scalars['String']>;
  input: UpdateUserInput;
};

export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword?: Maybe<Scalars['String']>;
};

export type MutationBindPhoneArgs = {
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
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
  domain: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  userpoolTypes?: Maybe<Array<Scalars['String']>>;
};

export type MutationUpdateUserpoolArgs = {
  input: UpdateUserpoolInput;
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
  VerifyEmail = 'VERIFY_EMAIL',
  /** 发送修改邮箱邮件，邮件中包含验证码 */
  ChangeEmail = 'CHANGE_EMAIL'
}

export type CommonMessage = {
  /** 可读的接口响应说明，请以业务状态码 code 作为判断业务是否成功的标志 */
  message?: Maybe<Scalars['String']>;
  /**
   * 业务状态码（与 HTTP 响应码不同），但且仅当为 200 的时候表示操作成功表示，详细说明请见：
   * [Authing 错误代码列表](https://docs.authing.co/advanced/error-code.html)
   */
  code?: Maybe<Scalars['Int']>;
};

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
  /** 图形验证码 */
  captchaCode?: Maybe<Scalars['String']>;
  /** 如果用户不存在，是否自动创建一个账号 */
  autoRegister?: Maybe<Scalars['Boolean']>;
};

export type LoginByUsernameInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  /** 图形验证码 */
  captchaCode?: Maybe<Scalars['String']>;
  /** 如果用户不存在，是否自动创建一个账号 */
  autoRegister?: Maybe<Scalars['Boolean']>;
};

export type LoginByPhoneCodeInput = {
  phone: Scalars['String'];
  code: Scalars['code_String_NotNull_minLength_4_maxLength_6'];
  /** 如果用户不存在，是否自动创建一个账号 */
  autoRegister?: Maybe<Scalars['Boolean']>;
};

export type LoginByPhonePasswordInput = {
  phone: Scalars['String'];
  password: Scalars['String'];
  /** 图形验证码 */
  captchaCode?: Maybe<Scalars['String']>;
  /** 如果用户不存在，是否自动创建一个账号 */
  autoRegister?: Maybe<Scalars['Boolean']>;
};

export type RegisterByUsernameInput = {
  username: Scalars['username_String_NotNull_minLength_4_maxLength_50'];
  password: Scalars['String'];
  profile?: Maybe<RegisterProfile>;
  forceLogin?: Maybe<Scalars['Boolean']>;
  generateToken?: Maybe<Scalars['Boolean']>;
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
  forceLogin?: Maybe<Scalars['Boolean']>;
  generateToken?: Maybe<Scalars['Boolean']>;
};

export type RegisterByPhoneCodeInput = {
  phone: Scalars['String'];
  code: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<RegisterProfile>;
  forceLogin?: Maybe<Scalars['Boolean']>;
  generateToken?: Maybe<Scalars['Boolean']>;
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

export type RefreshToken = {
  token?: Maybe<Scalars['String']>;
  iat?: Maybe<Scalars['Int']>;
  exp?: Maybe<Scalars['Int']>;
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
  city?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type UpdateUserpoolInput = {
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
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

export type KeyValuePair = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AddMemberVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  nodeId?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  nodeCode?: Maybe<Scalars['String']>;
  userIds: Array<Scalars['String']>;
  isLeader?: Maybe<Scalars['Boolean']>;
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
    path: Array<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    children?: Maybe<Array<string>>;
    users: {
      totalCount: number;
      list: Array<{
        id: string;
        arn: string;
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

export type AddUdfVariables = Exact<{
  targetType: UdfTargetType;
  key: Scalars['String'];
  dataType: UdfDataType;
  label: Scalars['String'];
  options?: Maybe<Scalars['String']>;
}>;

export type AddUdfResponse = {
  addUdf: Array<{
    targetType: UdfTargetType;
    dataType: UdfDataType;
    key: string;
    label: string;
    options?: Maybe<string>;
  }>;
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

export type AllowVariables = Exact<{
  resource: Scalars['String'];
  action: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
  userIds?: Maybe<Array<Scalars['String']>>;
  roleCode?: Maybe<Scalars['String']>;
  roleCodes?: Maybe<Array<Scalars['String']>>;
}>;

export type AllowResponse = {
  allow: { message?: Maybe<string>; code?: Maybe<number> };
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
    arn: string;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    users: { totalCount: number };
    parent?: Maybe<{
      code: string;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type BindPhoneVariables = Exact<{
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
}>;

export type BindPhoneResponse = {
  bindPhone: {
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
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
  description?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
}>;

export type CreateRoleResponse = {
  createRole: {
    code: string;
    arn: string;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    users: { totalCount: number };
    parent?: Maybe<{
      code: string;
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

export type CreateUserVariables = Exact<{
  userInfo: CreateUserInput;
  keepPassword?: Maybe<Scalars['Boolean']>;
}>;

export type CreateUserResponse = {
  createUser: {
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  };
};

export type CreateUserpoolVariables = Exact<{
  name: Scalars['String'];
  domain: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  userpoolTypes?: Maybe<Array<Scalars['String']>>;
}>;

export type CreateUserpoolResponse = {
  createUserpool: {
    id: string;
    name: string;
    domain: string;
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
  deleteNode: { message?: Maybe<string>; code?: Maybe<number> };
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
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type LoginByPhoneCodeVariables = Exact<{
  input: LoginByPhoneCodeInput;
}>;

export type LoginByPhoneCodeResponse = {
  loginByPhoneCode?: Maybe<{
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type LoginByPhonePasswordVariables = Exact<{
  input: LoginByPhonePasswordInput;
}>;

export type LoginByPhonePasswordResponse = {
  loginByPhonePassword?: Maybe<{
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type LoginByUsernameVariables = Exact<{
  input: LoginByUsernameInput;
}>;

export type LoginByUsernameResponse = {
  loginByUsername?: Maybe<{
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type MoveNodeVariables = Exact<{
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
  targetParentId: Scalars['String'];
}>;

export type MoveNodeResponse = {
  moveNode: {
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

export type RefreshTokenVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;

export type RefreshTokenResponse = {
  refreshToken?: Maybe<{
    token?: Maybe<string>;
    iat?: Maybe<number>;
    exp?: Maybe<number>;
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
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type RegisterByPhoneCodeVariables = Exact<{
  input: RegisterByPhoneCodeInput;
}>;

export type RegisterByPhoneCodeResponse = {
  registerByPhoneCode?: Maybe<{
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type RegisterByUsernameVariables = Exact<{
  input: RegisterByUsernameInput;
}>;

export type RegisterByUsernameResponse = {
  registerByUsername?: Maybe<{
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type RemoveMemberVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  nodeId?: Maybe<Scalars['String']>;
  orgId?: Maybe<Scalars['String']>;
  nodeCode?: Maybe<Scalars['String']>;
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
        arn: string;
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

export type RemoveUdfVariables = Exact<{
  targetType: UdfTargetType;
  key: Scalars['String'];
}>;

export type RemoveUdfResponse = {
  removeUdf: Array<{
    targetType: UdfTargetType;
    dataType: UdfDataType;
    key: string;
    label: string;
    options?: Maybe<string>;
  }>;
};

export type RemoveUdvVariables = Exact<{
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  key: Scalars['String'];
}>;

export type RemoveUdvResponse = {
  removeUdv?: Maybe<
    Array<{ key: string; dataType: UdfDataType; value: string }>
  >;
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
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    users: { totalCount: number };
    parent?: Maybe<{
      code: string;
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

export type SetUdvVariables = Exact<{
  targetType: UdfTargetType;
  targetId: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
}>;

export type SetUdvResponse = {
  setUdv?: Maybe<Array<{ key: string; dataType: UdfDataType; value: string }>>;
};

export type UnbindPhoneVariables = Exact<{ [key: string]: never }>;

export type UnbindPhoneResponse = {
  unbindPhone: {
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  };
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
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
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
  newPassword: Scalars['String'];
  oldPassword?: Maybe<Scalars['String']>;
}>;

export type UpdatePasswordResponse = {
  updatePassword: {
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
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
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  };
};

export type UpdateRoleVariables = Exact<{
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  newCode?: Maybe<Scalars['String']>;
}>;

export type UpdateRoleResponse = {
  updateRole: {
    code: string;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    users: { totalCount: number };
    parent?: Maybe<{
      code: string;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type UpdateUserVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  input: UpdateUserInput;
}>;

export type UpdateUserResponse = {
  updateUser: {
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  };
};

export type UpdateUserpoolVariables = Exact<{
  input: UpdateUserpoolInput;
}>;

export type UpdateUserpoolResponse = {
  updateUserpool: {
    id: string;
    name: string;
    domain: string;
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

export type AddUserToGroupVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
}>;

export type AddUserToGroupResponse = {
  addUserToGroup: {
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

export type GetUserRolesVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetUserRolesResponse = {
  user?: Maybe<{
    roles?: Maybe<{
      totalCount: number;
      list: Array<{
        code: string;
        arn: string;
        description?: Maybe<string>;
        isSystem?: Maybe<boolean>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        parent?: Maybe<{
          code: string;
          description?: Maybe<string>;
          isSystem?: Maybe<boolean>;
          createdAt?: Maybe<string>;
          updatedAt?: Maybe<string>;
        }>;
      }>;
    }>;
  }>;
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
  resource: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
}>;

export type IsActionAllowedResponse = { isActionAllowed: boolean };

export type IsActionDeniedVariables = Exact<{
  resource: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
}>;

export type IsActionDeniedResponse = { isActionDenied: boolean };

export type IsDomainAvaliableVariables = Exact<{
  domain: Scalars['String'];
}>;

export type IsDomainAvaliableResponse = { isDomainAvaliable?: Maybe<boolean> };

export type NodeByCodeVariables = Exact<{
  orgId: Scalars['String'];
  code: Scalars['String'];
}>;

export type NodeByCodeResponse = {
  nodeByCode?: Maybe<{
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

export type NodeByCodeWithMembersVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  orgId: Scalars['String'];
  code: Scalars['String'];
}>;

export type NodeByCodeWithMembersResponse = {
  nodeByCode?: Maybe<{
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
        arn: string;
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
  }>;
};

export type NodeByIdVariables = Exact<{
  id: Scalars['String'];
}>;

export type NodeByIdResponse = {
  nodeById?: Maybe<{
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

export type NodeByIdWithMembersVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
}>;

export type NodeByIdWithMembersResponse = {
  nodeById?: Maybe<{
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
        arn: string;
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
  }>;
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
    arn: string;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    parent?: Maybe<{
      code: string;
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
    arn: string;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    parent?: Maybe<{
      code: string;
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
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type RolesResponse = {
  roles: {
    totalCount: number;
    list: Array<{
      code: string;
      arn: string;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      parent?: Maybe<{
        code: string;
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
      arn: string;
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
      createdAt?: Maybe<string>;
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

export type UdfVariables = Exact<{
  targetType: UdfTargetType;
}>;

export type UdfResponse = {
  udf: Array<{
    targetType: UdfTargetType;
    dataType: UdfDataType;
    key: string;
    label: string;
    options?: Maybe<string>;
  }>;
};

export type UdvVariables = Exact<{
  targetType: UdfTargetType;
  targetId: Scalars['String'];
}>;

export type UdvResponse = {
  udv: Array<{ key: string; dataType: UdfDataType; value: string }>;
};

export type UserVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;

export type UserResponse = {
  user?: Maybe<{
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type UserBatchVariables = Exact<{
  ids: Array<Scalars['String']>;
}>;

export type UserBatchResponse = {
  userBatch: Array<{
    id: string;
    arn: string;
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    customData?: Maybe<string>;
    identities?: Maybe<
      Array<
        Maybe<{
          openid?: Maybe<string>;
          userIdInIdp?: Maybe<string>;
          userId?: Maybe<string>;
          connectionId?: Maybe<string>;
          isSocial?: Maybe<boolean>;
          provider?: Maybe<string>;
          userPoolId?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type UserpoolVariables = Exact<{ [key: string]: never }>;

export type UserpoolResponse = {
  userpool: {
    id: string;
    name: string;
    domain: string;
    description?: Maybe<string>;
    secret: string;
    jwtSecret: string;
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
      domain: string;
      description?: Maybe<string>;
      secret: string;
      jwtSecret: string;
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
      arn: string;
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
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      customData?: Maybe<string>;
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

export const AddMemberDocument = `
    mutation addMember($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $nodeId: String, $orgId: String, $nodeCode: String, $userIds: [String!]!, $isLeader: Boolean) {
  addMember(nodeId: $nodeId, orgId: $orgId, nodeCode: $nodeCode, userIds: $userIds, isLeader: $isLeader) {
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
      list {
        id
        arn
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
export const AddUdfDocument = `
    mutation addUdf($targetType: UDFTargetType!, $key: String!, $dataType: UDFDataType!, $label: String!, $options: String) {
  addUdf(targetType: $targetType, key: $key, dataType: $dataType, label: $label, options: $options) {
    targetType
    dataType
    key
    label
    options
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
export const AllowDocument = `
    mutation allow($resource: String!, $action: String!, $userId: String, $userIds: [String!], $roleCode: String, $roleCodes: [String!]) {
  allow(resource: $resource, action: $action, userId: $userId, userIds: $userIds, roleCode: $roleCode, roleCodes: $roleCodes) {
    message
    code
  }
}
    `;
export const AssignRoleDocument = `
    mutation assignRole($code: String!, $userIds: [String!], $groupCodes: [String!], $nodeCodes: [String!]) {
  assignRole(code: $code, userIds: $userIds, groupCodes: $groupCodes, nodeCodes: $nodeCodes) {
    code
    arn
    description
    isSystem
    createdAt
    updatedAt
    users {
      totalCount
    }
    parent {
      code
      description
      isSystem
      createdAt
      updatedAt
    }
  }
}
    `;
export const BindPhoneDocument = `
    mutation bindPhone($phone: String!, $phoneCode: String!) {
  bindPhone(phone: $phone, phoneCode: $phoneCode) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
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
    mutation createRole($code: String!, $description: String, $parent: String) {
  createRole(code: $code, description: $description, parent: $parent) {
    code
    arn
    description
    isSystem
    createdAt
    updatedAt
    users {
      totalCount
    }
    parent {
      code
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
export const CreateUserDocument = `
    mutation createUser($userInfo: CreateUserInput!, $keepPassword: Boolean) {
  createUser(userInfo: $userInfo, keepPassword: $keepPassword) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const CreateUserpoolDocument = `
    mutation createUserpool($name: String!, $domain: String!, $description: String, $logo: String, $userpoolTypes: [String!]) {
  createUserpool(name: $name, domain: $domain, description: $description, logo: $logo, userpoolTypes: $userpoolTypes) {
    id
    name
    domain
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
    message
    code
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
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const LoginByPhoneCodeDocument = `
    mutation loginByPhoneCode($input: LoginByPhoneCodeInput!) {
  loginByPhoneCode(input: $input) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const LoginByPhonePasswordDocument = `
    mutation loginByPhonePassword($input: LoginByPhonePasswordInput!) {
  loginByPhonePassword(input: $input) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const LoginByUsernameDocument = `
    mutation loginByUsername($input: LoginByUsernameInput!) {
  loginByUsername(input: $input) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const MoveNodeDocument = `
    mutation moveNode($orgId: String!, $nodeId: String!, $targetParentId: String!) {
  moveNode(orgId: $orgId, nodeId: $nodeId, targetParentId: $targetParentId) {
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
export const RefreshTokenDocument = `
    mutation refreshToken($id: String) {
  refreshToken(id: $id) {
    token
    iat
    exp
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
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const RegisterByPhoneCodeDocument = `
    mutation registerByPhoneCode($input: RegisterByPhoneCodeInput!) {
  registerByPhoneCode(input: $input) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const RegisterByUsernameDocument = `
    mutation registerByUsername($input: RegisterByUsernameInput!) {
  registerByUsername(input: $input) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const RemoveMemberDocument = `
    mutation removeMember($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $nodeId: String, $orgId: String, $nodeCode: String, $userIds: [String!]!) {
  removeMember(nodeId: $nodeId, orgId: $orgId, nodeCode: $nodeCode, userIds: $userIds) {
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
        arn
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
export const RemoveUdfDocument = `
    mutation removeUdf($targetType: UDFTargetType!, $key: String!) {
  removeUdf(targetType: $targetType, key: $key) {
    targetType
    dataType
    key
    label
    options
  }
}
    `;
export const RemoveUdvDocument = `
    mutation removeUdv($targetType: UDFTargetType!, $targetId: String!, $key: String!) {
  removeUdv(targetType: $targetType, targetId: $targetId, key: $key) {
    key
    dataType
    value
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
    description
    isSystem
    createdAt
    updatedAt
    users {
      totalCount
    }
    parent {
      code
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
export const SetUdvDocument = `
    mutation setUdv($targetType: UDFTargetType!, $targetId: String!, $key: String!, $value: String!) {
  setUdv(targetType: $targetType, targetId: $targetId, key: $key, value: $value) {
    key
    dataType
    value
  }
}
    `;
export const UnbindPhoneDocument = `
    mutation unbindPhone {
  unbindPhone {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const UpdateEmailDocument = `
    mutation updateEmail($email: String!, $emailCode: String!, $oldEmail: String, $oldEmailCode: String) {
  updateEmail(email: $email, emailCode: $emailCode, oldEmail: $oldEmail, oldEmailCode: $oldEmailCode) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
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
    mutation updatePassword($newPassword: String!, $oldPassword: String) {
  updatePassword(newPassword: $newPassword, oldPassword: $oldPassword) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const UpdatePhoneDocument = `
    mutation updatePhone($phone: String!, $phoneCode: String!, $oldPhone: String, $oldPhoneCode: String) {
  updatePhone(phone: $phone, phoneCode: $phoneCode, oldPhone: $oldPhone, oldPhoneCode: $oldPhoneCode) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const UpdateRoleDocument = `
    mutation updateRole($code: String!, $description: String, $newCode: String) {
  updateRole(code: $code, description: $description, newCode: $newCode) {
    code
    description
    isSystem
    createdAt
    updatedAt
    users {
      totalCount
    }
    parent {
      code
      description
      isSystem
      createdAt
      updatedAt
    }
  }
}
    `;
export const UpdateUserDocument = `
    mutation updateUser($id: String, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
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
    domain
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
export const AddUserToGroupDocument = `
    query addUserToGroup($userId: String, $groupId: String) {
  addUserToGroup(userId: $userId, groupId: $groupId) {
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
export const GetUserRolesDocument = `
    query getUserRoles($id: String!) {
  user(id: $id) {
    roles {
      totalCount
      list {
        code
        arn
        description
        isSystem
        createdAt
        updatedAt
        parent {
          code
          description
          isSystem
          createdAt
          updatedAt
        }
      }
    }
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
    query isActionAllowed($resource: String!, $action: String!, $userId: String!) {
  isActionAllowed(resource: $resource, action: $action, userId: $userId)
}
    `;
export const IsActionDeniedDocument = `
    query isActionDenied($resource: String!, $action: String!, $userId: String!) {
  isActionDenied(resource: $resource, action: $action, userId: $userId)
}
    `;
export const IsDomainAvaliableDocument = `
    query isDomainAvaliable($domain: String!) {
  isDomainAvaliable(domain: $domain)
}
    `;
export const NodeByCodeDocument = `
    query nodeByCode($orgId: String!, $code: String!) {
  nodeByCode(orgId: $orgId, code: $code) {
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
    `;
export const NodeByCodeWithMembersDocument = `
    query nodeByCodeWithMembers($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $orgId: String!, $code: String!) {
  nodeByCode(orgId: $orgId, code: $code) {
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
        arn
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
export const NodeByIdDocument = `
    query nodeById($id: String!) {
  nodeById(id: $id) {
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
    `;
export const NodeByIdWithMembersDocument = `
    query nodeByIdWithMembers($page: Int, $limit: Int, $sortBy: SortByEnum, $includeChildrenNodes: Boolean, $id: String!) {
  nodeById(id: $id) {
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
        arn
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
    arn
    description
    isSystem
    createdAt
    updatedAt
    parent {
      code
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
    arn
    description
    isSystem
    createdAt
    updatedAt
    parent {
      code
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
    query roles($page: Int, $limit: Int, $sortBy: SortByEnum) {
  roles(page: $page, limit: $limit, sortBy: $sortBy) {
    totalCount
    list {
      code
      arn
      description
      isSystem
      createdAt
      updatedAt
      parent {
        code
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
      arn
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
      createdAt
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
export const UdfDocument = `
    query udf($targetType: UDFTargetType!) {
  udf(targetType: $targetType) {
    targetType
    dataType
    key
    label
    options
  }
}
    `;
export const UdvDocument = `
    query udv($targetType: UDFTargetType!, $targetId: String!) {
  udv(targetType: $targetType, targetId: $targetId) {
    key
    dataType
    value
  }
}
    `;
export const UserDocument = `
    query user($id: String) {
  user(id: $id) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const UserBatchDocument = `
    query userBatch($ids: [String!]!) {
  userBatch(ids: $ids) {
    id
    arn
    userPoolId
    username
    email
    emailVerified
    phone
    phoneVerified
    unionid
    openid
    identities {
      openid
      userIdInIdp
      userId
      connectionId
      isSocial
      provider
      userPoolId
    }
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
    createdAt
    updatedAt
    customData
  }
}
    `;
export const UserpoolDocument = `
    query userpool {
  userpool {
    id
    name
    domain
    description
    secret
    jwtSecret
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
      domain
      description
      secret
      jwtSecret
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
      arn
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
      createdAt
      updatedAt
      customData
    }
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
