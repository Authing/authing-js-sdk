import gql from 'graphql-tag';
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

export enum IdentityProviderProtocol {
  Saml = 'SAML',
  Ad = 'AD',
  Ldap = 'LDAP',
  Oidc = 'OIDC',
  Oauth = 'OAUTH'
}

export enum WhitelistType {
  Username = 'USERNAME',
  Email = 'EMAIL',
  Phone = 'PHONE'
}

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

export type IdpInput = {
  domain: Scalars['String'];
  type: Scalars['String'];
  config?: Maybe<Scalars['String']>;
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

export type CreatePermissionInput = {
  /** 名称（不唯一） */
  name: Scalars['String'];
  /** 唯一编码，推荐使用合法的 ASCII 字符。 */
  code: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 权限类型 */
  type?: Maybe<Scalars['String']>;
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
  registerMethod?: Maybe<Scalars['String']>;
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
  registerMethod?: Maybe<Scalars['String']>;
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

export type AddCooperatorVariables = Exact<{
  userId: Scalars['String'];
  roleId: Scalars['String'];
}>;

export type AddCooperator = {
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
      registerMethod?: Maybe<string>;
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

export type AddFunctionToPipeline = {
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
  nodeId: Scalars['String'];
  userIds: Array<Scalars['String']>;
}>;

export type AddMember = {
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
    users: { totalCount: number };
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

export type AddNode = {
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

export type AddWhitelist = {
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

export type AssignRole = {
  assignRole: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions: Array<{
      id: string;
      code: string;
      name: string;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      type?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
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

export type AttachPermissionVariables = Exact<{
  code: Scalars['String'];
  permissionIds: Array<Scalars['String']>;
}>;

export type AttachPermission = {
  attachPermission: {
    succeedCount: number;
    failedCount: number;
    message?: Maybe<string>;
    errors?: Maybe<Array<string>>;
  };
};

export type ChangeMfaVariables = Exact<{
  enable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  refresh?: Maybe<Scalars['Boolean']>;
}>;

export type ChangeMfa = {
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

export type ConfigEmailTemplate = {
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

export type CreateFunction = {
  createFunction?: Maybe<{
    id: string;
    name: string;
    sourceCode: string;
    description?: Maybe<string>;
    url?: Maybe<string>;
  }>;
};

export type CreateIdentityProviderVariables = Exact<{
  input: IdpInput;
}>;

export type CreateIdentityProvider = {
  createIdentityProvider: {
    id?: Maybe<string>;
    domain?: Maybe<string>;
    type?: Maybe<string>;
    config?: Maybe<string>;
    enabled?: Maybe<boolean>;
    userPoolId?: Maybe<string>;
  };
};

export type CreateOrgVariables = Exact<{
  name: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;

export type CreateOrg = {
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
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    }>;
  };
};

export type CreatePermissionVariables = Exact<{
  input: CreatePermissionInput;
}>;

export type CreatePermission = {
  createPermission: {
    id: string;
    code: string;
    name: string;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    type?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  };
};

export type CreatePermissionsVariables = Exact<{
  input: Array<CreatePermissionInput>;
}>;

export type CreatePermissions = {
  createPermissions: Array<{
    id: string;
    code: string;
    name: string;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    type?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type CreatePipelineVariables = Exact<{
  input: CreatePipelineInput;
}>;

export type CreatePipeline = {
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

export type CreateResourceVariables = Exact<{
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
}>;

export type CreateResource = {
  createResource: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  };
};

export type CreateResourceRuleVariables = Exact<{
  resouceCode: Scalars['String'];
  action: Scalars['String'];
  allow: Scalars['Boolean'];
  userId?: Maybe<Scalars['String']>;
  roleCode?: Maybe<Scalars['String']>;
}>;

export type CreateResourceRule = {
  createResourceRule: {
    action: string;
    allow: boolean;
    expiresIn?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    resouce: {
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    };
    user?: Maybe<{
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
      registerMethod?: Maybe<string>;
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
    role?: Maybe<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
    group?: Maybe<{
      code: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
    node?: Maybe<{
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
    }>;
  };
};

export type CreateRoleVariables = Exact<{
  code: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Scalars['String']>>;
  parent?: Maybe<Scalars['String']>;
}>;

export type CreateRole = {
  createRole: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions: Array<{
      id: string;
      code: string;
      name: string;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      type?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
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

export type CreateSocialConnection = {
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

export type CreateSocialConnectionInstance = {
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

export type CreateUserpool = {
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
      enable?: Maybe<boolean>;
    }>;
    loginFailCheck?: Maybe<{
      timeInterval?: Maybe<number>;
      limit?: Maybe<number>;
      enable?: Maybe<boolean>;
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

export type CreateWebhook = {
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

export type DeleteFunction = {
  deleteFunction: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeleteIdentityProviderVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteIdentityProvider = {
  deleteIdentityProvider: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeleteNodeVariables = Exact<{
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
}>;

export type DeleteNode = {
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
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children?: Maybe<Array<string>>;
    }>;
  };
};

export type DeleteOrgVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteOrg = {
  deleteOrg: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeletePermissionVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeletePermission = {
  deletePermission: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeletePermissionsVariables = Exact<{
  ids: Array<Scalars['String']>;
}>;

export type DeletePermissions = {
  deletePermissions: {
    succeedCount: number;
    failedCount: number;
    message?: Maybe<string>;
    errors?: Maybe<Array<string>>;
  };
};

export type DeleteRoleVariables = Exact<{
  code: Scalars['String'];
}>;

export type DeleteRole = {
  deleteRole: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeleteRolesVariables = Exact<{
  codes: Array<Scalars['String']>;
}>;

export type DeleteRoles = {
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

export type DeleteUser = {
  deleteUser?: Maybe<{ message?: Maybe<string>; code?: Maybe<number> }>;
};

export type DeleteUserpoolVariables = Exact<{ [key: string]: never }>;

export type DeleteUserpool = {
  deleteUserpool: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DeleteUsersVariables = Exact<{
  ids: Array<Scalars['String']>;
}>;

export type DeleteUsers = {
  deleteUsers?: Maybe<{ message?: Maybe<string>; code?: Maybe<number> }>;
};

export type DeleteWebhookVariables = Exact<{
  input: DeleteWebhookInput;
}>;

export type DeleteWebhook = {
  deleteWebhook: { message?: Maybe<string>; code?: Maybe<number> };
};

export type DetachPermissionVariables = Exact<{
  roleId: Scalars['String'];
  permissionIds: Array<Scalars['String']>;
}>;

export type DetachPermission = {
  detachPermission: {
    succeedCount: number;
    failedCount: number;
    message?: Maybe<string>;
    errors?: Maybe<Array<string>>;
  };
};

export type DisableEmailTemplateVariables = Exact<{
  type: EmailTemplateType;
}>;

export type DisableEmailTemplate = {
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

export type DisableIdentityProviderVariables = Exact<{
  id: Scalars['String'];
}>;

export type DisableIdentityProvider = {
  disableIdentityProvider: {
    id?: Maybe<string>;
    domain?: Maybe<string>;
    type?: Maybe<string>;
    config?: Maybe<string>;
    enabled?: Maybe<boolean>;
    userPoolId?: Maybe<string>;
  };
};

export type DisableSocialConnectionInstanceVariables = Exact<{
  provider: Scalars['String'];
}>;

export type DisableSocialConnectionInstance = {
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

export type DoRegisterProcess = {
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
    registerMethod?: Maybe<string>;
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

export type EnableEmailTemplate = {
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

export type EnableIdentityProviderVariables = Exact<{
  id: Scalars['String'];
}>;

export type EnableIdentityProvider = {
  enableIdentityProvider: {
    id?: Maybe<string>;
    domain?: Maybe<string>;
    type?: Maybe<string>;
    config?: Maybe<string>;
    enabled?: Maybe<boolean>;
    userPoolId?: Maybe<string>;
  };
};

export type EnableSocialConnectionInstanceVariables = Exact<{
  provider: Scalars['String'];
}>;

export type EnableSocialConnectionInstance = {
  enableSocialConnectionInstance: {
    provider: string;
    enabled: boolean;
    fields?: Maybe<Array<Maybe<{ key: string; value: string }>>>;
  };
};

export type LoginByEmailVariables = Exact<{
  input: LoginByEmailInput;
}>;

export type LoginByEmail = {
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
    registerMethod?: Maybe<string>;
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

export type LoginByPhoneCode = {
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
    registerMethod?: Maybe<string>;
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

export type LoginByPhonePassword = {
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
    registerMethod?: Maybe<string>;
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

export type LoginByUsername = {
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
    registerMethod?: Maybe<string>;
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

export type RefreshUserpoolSecret = { refreshUserpoolSecret: string };

export type RegisterByEmailVariables = Exact<{
  input: RegisterByEmailInput;
}>;

export type RegisterByEmail = {
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
    registerMethod?: Maybe<string>;
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

export type RegisterByPhonePassword = {
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
    registerMethod?: Maybe<string>;
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

export type RegisterByUsername = {
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
    registerMethod?: Maybe<string>;
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

export type RemoveCooperator = {
  removeCooperator: { message?: Maybe<string>; code?: Maybe<number> };
};

export type RemoveFunctionFromPipelineVariables = Exact<{
  input: RemoveFunctionFromPipelineInput;
}>;

export type RemoveFunctionFromPipeline = {
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

export type RemoveMember = {
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
    users: { totalCount: number };
  };
};

export type RemoveWhitelistVariables = Exact<{
  type: WhitelistType;
  list: Array<Scalars['String']>;
}>;

export type RemoveWhitelist = {
  removeWhitelist: Array<
    Maybe<{
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      value: string;
    }>
  >;
};

export type RevokeRoleVariables = Exact<{
  code: Scalars['String'];
  userIds?: Maybe<Array<Scalars['String']>>;
  groupCodes?: Maybe<Array<Scalars['String']>>;
  nodeCodes?: Maybe<Array<Scalars['String']>>;
}>;

export type RevokeRole = {
  revokeRole: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions: Array<{
      id: string;
      code: string;
      name: string;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      type?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
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

export type SendWebhookTestRequestVariables = Exact<{
  input: SendWebhookTestRequestInput;
}>;

export type SendWebhookTestRequest = {
  sendWebhookTestRequest: { message?: Maybe<string>; code?: Maybe<number> };
};

export type UpdateEmailVariables = Exact<{
  email: Scalars['String'];
  emailCode: Scalars['String'];
  oldEmail?: Maybe<Scalars['String']>;
  oldEmailCode?: Maybe<Scalars['String']>;
}>;

export type UpdateEmail = {
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
    registerMethod?: Maybe<string>;
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

export type UpdateFunction = {
  updateFunction: {
    id: string;
    name: string;
    sourceCode: string;
    description?: Maybe<string>;
    url?: Maybe<string>;
  };
};

export type UpdateIdentityProviderVariables = Exact<{
  input: IdpInput;
}>;

export type UpdateIdentityProvider = {
  updateIdentityProvider: {
    id?: Maybe<string>;
    domain?: Maybe<string>;
    type?: Maybe<string>;
    config?: Maybe<string>;
    enabled?: Maybe<boolean>;
    userPoolId?: Maybe<string>;
  };
};

export type UpdatePasswordVariables = Exact<{
  id: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword?: Maybe<Scalars['String']>;
}>;

export type UpdatePassword = {
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
    registerMethod?: Maybe<string>;
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

export type UpdatePhone = {
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
    registerMethod?: Maybe<string>;
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

export type UpdateRole = {
  updateRole: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions: Array<{
      id: string;
      code: string;
      name: string;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      type?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
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

export type UpdateUser = {
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
    registerMethod?: Maybe<string>;
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

export type UpdateUserpool = {
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
      enable?: Maybe<boolean>;
    }>;
    loginFailCheck?: Maybe<{
      timeInterval?: Maybe<number>;
      limit?: Maybe<number>;
      enable?: Maybe<boolean>;
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

export type UpdateWebhook = {
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

export type CheckPasswordStrength = {
  checkPasswordStrength: { valid: boolean; message?: Maybe<string> };
};

export type ChildrenNodesVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
}>;

export type ChildrenNodes = {
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
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    children?: Maybe<Array<string>>;
    users: { totalCount: number };
  }>;
};

export type CooperatedUserpoolsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type CooperatedUserpools = {
  cooperatedUserpools: { totalCount: number };
};

export type CooperatorsVariables = Exact<{ [key: string]: never }>;

export type Cooperators = {
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
      registerMethod?: Maybe<string>;
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

export type EmailTemplates = {
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

export type Function = {
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

export type Functions = {
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

export type IdentityProviderVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;

export type IdentityProvider = {
  identityProvider: {
    id?: Maybe<string>;
    domain?: Maybe<string>;
    type?: Maybe<string>;
    config?: Maybe<string>;
    enabled?: Maybe<boolean>;
    userPoolId?: Maybe<string>;
  };
};

export type IdentityProviderByDomainVariables = Exact<{
  domain?: Maybe<Scalars['String']>;
}>;

export type IdentityProviderByDomain = {
  identityProviderByDomain: {
    id?: Maybe<string>;
    domain?: Maybe<string>;
    type?: Maybe<string>;
    config?: Maybe<string>;
    enabled?: Maybe<boolean>;
    userPoolId?: Maybe<string>;
  };
};

export type IdentityProvidersVariables = Exact<{
  protocol: IdentityProviderProtocol;
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type IdentityProviders = {
  identityProviders?: Maybe<{
    totalCount: number;
    list: Array<
      Maybe<{
        id?: Maybe<string>;
        domain?: Maybe<string>;
        type?: Maybe<string>;
        config?: Maybe<string>;
        enabled?: Maybe<boolean>;
        userPoolId?: Maybe<string>;
      }>
    >;
  }>;
};

export type IsActionAllowedVariables = Exact<{
  resouceCode: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
}>;

export type IsActionAllowed = { isActionAllowed: boolean };

export type IsActionDeniedVariables = Exact<{
  resouceCode: Scalars['String'];
  action: Scalars['String'];
  userId: Scalars['String'];
}>;

export type IsActionDenied = { isActionDenied: boolean };

export type IsDomainAvaliableVariables = Exact<{
  domain: Scalars['String'];
}>;

export type IsDomainAvaliable = { isDomainAvaliable?: Maybe<boolean> };

export type NodeVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
}>;

export type Node = {
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
    users: { totalCount: number };
  };
};

export type NodeByCodeVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
  orgId: Scalars['String'];
  code: Scalars['String'];
}>;

export type NodeByCode = {
  nodeByCode: {
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
    users: { totalCount: number };
  };
};

export type OrgVariables = Exact<{
  id: Scalars['String'];
}>;

export type Org = {
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

export type Orgs = {
  orgs: { totalCount: number; list: Array<{ id: string }> };
};

export type PermissionVariables = Exact<{
  id: Scalars['String'];
}>;

export type Permission = {
  permission: {
    id: string;
    code: string;
    name: string;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    type?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  };
};

export type PermissionByCodeVariables = Exact<{
  code: Scalars['String'];
}>;

export type PermissionByCode = {
  permissionByCode: {
    id: string;
    code: string;
    name: string;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    type?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  };
};

export type PermissionsVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type Permissions = {
  permissions: {
    totalCount: number;
    list: Array<{
      id: string;
      code: string;
      name: string;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      type?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type PipelineVariables = Exact<{
  id: Scalars['String'];
}>;

export type Pipeline = {
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

export type Pipelines = {
  pipelines: {
    totalCount: number;
    list: Array<{ id: string; name: string; trigger: string }>;
  };
};

export type PreviewEmailVariables = Exact<{
  type: EmailTemplateType;
}>;

export type PreviewEmail = { previewEmail: string };

export type QiniuUptokenVariables = Exact<{
  type?: Maybe<Scalars['String']>;
}>;

export type QiniuUptoken = { qiniuUptoken?: Maybe<string> };

export type QueryMfaVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
}>;

export type QueryMfa = {
  queryMfa?: Maybe<{
    id: string;
    userId: string;
    userPoolId: string;
    enable: boolean;
    secret?: Maybe<string>;
  }>;
};

export type ResouceRulesVariables = Exact<{
  code?: Maybe<Scalars['String']>;
}>;

export type ResouceRules = {
  resouceRules: {
    totalCount: number;
    list: Array<{
      action: string;
      allow: boolean;
      expiresIn?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type RoleVariables = Exact<{
  code: Scalars['String'];
}>;

export type Role = {
  role: {
    code: string;
    name?: Maybe<string>;
    description?: Maybe<string>;
    isSystem?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions: Array<{
      id: string;
      code: string;
      name: string;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      type?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
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

export type RolesVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SortByEnum>;
}>;

export type Roles = {
  roles: {
    totalCount: number;
    list: Array<{
      code: string;
      name?: Maybe<string>;
      description?: Maybe<string>;
      isSystem?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type SearchUserVariables = Exact<{
  query: Scalars['String'];
  fields?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type SearchUser = {
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
      registerMethod?: Maybe<string>;
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

export type SocialConnection = {
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

export type SocialConnectionInstance = {
  socialConnectionInstance: {
    provider: string;
    enabled: boolean;
    fields?: Maybe<Array<Maybe<{ key: string; value: string }>>>;
  };
};

export type SocialConnectionInstancesVariables = Exact<{
  [key: string]: never;
}>;

export type SocialConnectionInstances = {
  socialConnectionInstances: Array<{
    provider: string;
    enabled: boolean;
    fields?: Maybe<Array<Maybe<{ key: string; value: string }>>>;
  }>;
};

export type SocialConnectionsVariables = Exact<{ [key: string]: never }>;

export type SocialConnections = {
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

export type TemplateCode = { templateCode: string };

export type UserVariables = Exact<{
  id: Scalars['String'];
}>;

export type User = {
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
    registerMethod?: Maybe<string>;
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

export type UserBatch = {
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
      registerMethod?: Maybe<string>;
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

export type Userpool = {
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
      enable?: Maybe<boolean>;
    }>;
    loginFailCheck?: Maybe<{
      timeInterval?: Maybe<number>;
      limit?: Maybe<number>;
      enable?: Maybe<boolean>;
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

export type UserpoolTypes = {
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

export type Userpools = {
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

export type Users = {
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
      registerMethod?: Maybe<string>;
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

export type Webhook = {
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

export type WebhookLog = {
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

export type WebhookLogs = {
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

export type WebhookOptions = {
  webhookOptions: {
    webhookEvents: Array<
      Maybe<{ name: string; label: string; description?: Maybe<string> }>
    >;
    contentTypes: Array<Maybe<{ name: string; label: string }>>;
  };
};

export type WebhooksVariables = Exact<{ [key: string]: never }>;

export type Webhooks = {
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

export type Whitelist = {
  whitelist: Array<{
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    value: string;
  }>;
};

export const AddCooperatorDocument = gql`
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
        registerMethod
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
export const AddFunctionToPipelineDocument = gql`
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
export const AddMemberDocument = gql`
  mutation addMember(
    $page: Int
    $limit: Int
    $sortBy: SortByEnum
    $includeChildrenNodes: Boolean
    $orgId: String!
    $nodeId: String!
    $userIds: [String!]!
  ) {
    addMember(orgId: $orgId, nodeId: $nodeId, userIds: $userIds) {
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
      users(
        page: $page
        limit: $limit
        sortBy: $sortBy
        includeChildrenNodes: $includeChildrenNodes
      ) {
        totalCount
      }
    }
  }
`;
export const AddNodeDocument = gql`
  mutation addNode(
    $orgId: String!
    $parentNodeId: String
    $name: String!
    $nameI18n: String
    $description: String
    $descriptionI18n: String
    $order: Int
    $code: String
  ) {
    addNode(
      orgId: $orgId
      parentNodeId: $parentNodeId
      name: $name
      nameI18n: $nameI18n
      description: $description
      descriptionI18n: $descriptionI18n
      order: $order
      code: $code
    ) {
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
        createdAt
        updatedAt
        children
      }
    }
  }
`;
export const AddWhitelistDocument = gql`
  mutation addWhitelist($type: WhitelistType!, $list: [String!]!) {
    addWhitelist(type: $type, list: $list) {
      createdAt
      updatedAt
      value
    }
  }
`;
export const AssignRoleDocument = gql`
  mutation assignRole(
    $code: String!
    $userIds: [String!]
    $groupCodes: [String!]
    $nodeCodes: [String!]
  ) {
    assignRole(
      code: $code
      userIds: $userIds
      groupCodes: $groupCodes
      nodeCodes: $nodeCodes
    ) {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
      permissions {
        id
        code
        name
        description
        isSystem
        type
        createdAt
        updatedAt
      }
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
export const AttachPermissionDocument = gql`
  mutation attachPermission($code: String!, $permissionIds: [String!]!) {
    attachPermission(code: $code, permissionIds: $permissionIds) {
      succeedCount
      failedCount
      message
      errors
    }
  }
`;
export const ChangeMfaDocument = gql`
  mutation changeMfa(
    $enable: Boolean
    $id: String
    $userId: String
    $userPoolId: String
    $refresh: Boolean
  ) {
    changeMfa(
      enable: $enable
      id: $id
      userId: $userId
      userPoolId: $userPoolId
      refresh: $refresh
    ) {
      id
      userId
      userPoolId
      enable
      secret
    }
  }
`;
export const ConfigEmailTemplateDocument = gql`
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
export const CreateFunctionDocument = gql`
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
export const CreateIdentityProviderDocument = gql`
  mutation createIdentityProvider($input: IdpInput!) {
    createIdentityProvider(input: $input) {
      id
      domain
      type
      config
      enabled
      userPoolId
    }
  }
`;
export const CreateOrgDocument = gql`
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
        createdAt
        updatedAt
        children
      }
    }
  }
`;
export const CreatePermissionDocument = gql`
  mutation createPermission($input: CreatePermissionInput!) {
    createPermission(input: $input) {
      id
      code
      name
      description
      isSystem
      type
      createdAt
      updatedAt
    }
  }
`;
export const CreatePermissionsDocument = gql`
  mutation createPermissions($input: [CreatePermissionInput!]!) {
    createPermissions(input: $input) {
      id
      code
      name
      description
      isSystem
      type
      createdAt
      updatedAt
    }
  }
`;
export const CreatePipelineDocument = gql`
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
export const CreateResourceDocument = gql`
  mutation createResource($code: String!, $name: String, $description: String) {
    createResource(code: $code, name: $name, description: $description) {
      code
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const CreateResourceRuleDocument = gql`
  mutation createResourceRule(
    $resouceCode: String!
    $action: String!
    $allow: Boolean!
    $userId: String
    $roleCode: String
  ) {
    createResourceRule(
      resouceCode: $resouceCode
      action: $action
      allow: $allow
      userId: $userId
      roleCode: $roleCode
    ) {
      resouce {
        code
        name
        description
        createdAt
        updatedAt
      }
      action
      allow
      expiresIn
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
        registerMethod
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
      role {
        code
        name
        description
        isSystem
        createdAt
        updatedAt
      }
      group {
        code
        name
        description
        createdAt
        updatedAt
      }
      node {
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
      createdAt
      updatedAt
    }
  }
`;
export const CreateRoleDocument = gql`
  mutation createRole(
    $code: String!
    $name: String
    $description: String
    $permissions: [String!]
    $parent: String
  ) {
    createRole(
      code: $code
      name: $name
      description: $description
      permissions: $permissions
      parent: $parent
    ) {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
      permissions {
        id
        code
        name
        description
        isSystem
        type
        createdAt
        updatedAt
      }
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
export const CreateSocialConnectionDocument = gql`
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
export const CreateSocialConnectionInstanceDocument = gql`
  mutation createSocialConnectionInstance(
    $input: CreateSocialConnectionInstanceInput!
  ) {
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
export const CreateUserpoolDocument = gql`
  mutation createUserpool(
    $name: String!
    $description: String
    $logo: String
    $userpoolTypes: [String!]
  ) {
    createUserpool(
      name: $name
      description: $description
      logo: $logo
      userpoolTypes: $userpoolTypes
    ) {
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
        enable
      }
      loginFailCheck {
        timeInterval
        limit
        enable
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
export const CreateWebhookDocument = gql`
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
export const DeleteFunctionDocument = gql`
  mutation deleteFunction($id: String!) {
    deleteFunction(id: $id) {
      message
      code
    }
  }
`;
export const DeleteIdentityProviderDocument = gql`
  mutation deleteIdentityProvider($id: String!) {
    deleteIdentityProvider(id: $id) {
      message
      code
    }
  }
`;
export const DeleteNodeDocument = gql`
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
        createdAt
        updatedAt
        children
      }
    }
  }
`;
export const DeleteOrgDocument = gql`
  mutation deleteOrg($id: String!) {
    deleteOrg(id: $id) {
      message
      code
    }
  }
`;
export const DeletePermissionDocument = gql`
  mutation deletePermission($id: String!) {
    deletePermission(id: $id) {
      message
      code
    }
  }
`;
export const DeletePermissionsDocument = gql`
  mutation deletePermissions($ids: [String!]!) {
    deletePermissions(ids: $ids) {
      succeedCount
      failedCount
      message
      errors
    }
  }
`;
export const DeleteRoleDocument = gql`
  mutation deleteRole($code: String!) {
    deleteRole(code: $code) {
      message
      code
    }
  }
`;
export const DeleteRolesDocument = gql`
  mutation deleteRoles($codes: [String!]!) {
    deleteRoles(codes: $codes) {
      succeedCount
      failedCount
      message
      errors
    }
  }
`;
export const DeleteUserDocument = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id) {
      message
      code
    }
  }
`;
export const DeleteUserpoolDocument = gql`
  mutation deleteUserpool {
    deleteUserpool {
      message
      code
    }
  }
`;
export const DeleteUsersDocument = gql`
  mutation deleteUsers($ids: [String!]!) {
    deleteUsers(ids: $ids) {
      message
      code
    }
  }
`;
export const DeleteWebhookDocument = gql`
  mutation deleteWebhook($input: DeleteWebhookInput!) {
    deleteWebhook(input: $input) {
      message
      code
    }
  }
`;
export const DetachPermissionDocument = gql`
  mutation detachPermission($roleId: String!, $permissionIds: [String!]!) {
    detachPermission(roleId: $roleId, permissionIds: $permissionIds) {
      succeedCount
      failedCount
      message
      errors
    }
  }
`;
export const DisableEmailTemplateDocument = gql`
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
export const DisableIdentityProviderDocument = gql`
  mutation disableIdentityProvider($id: String!) {
    disableIdentityProvider(id: $id) {
      id
      domain
      type
      config
      enabled
      userPoolId
    }
  }
`;
export const DisableSocialConnectionInstanceDocument = gql`
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
export const DoRegisterProcessDocument = gql`
  mutation doRegisterProcess(
    $userInfo: CreateUserInput!
    $keepPassword: Boolean
  ) {
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
      registerMethod
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
export const EnableEmailTemplateDocument = gql`
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
export const EnableIdentityProviderDocument = gql`
  mutation enableIdentityProvider($id: String!) {
    enableIdentityProvider(id: $id) {
      id
      domain
      type
      config
      enabled
      userPoolId
    }
  }
`;
export const EnableSocialConnectionInstanceDocument = gql`
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
export const LoginByEmailDocument = gql`
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
      registerMethod
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
export const LoginByPhoneCodeDocument = gql`
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
      registerMethod
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
export const LoginByPhonePasswordDocument = gql`
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
      registerMethod
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
export const LoginByUsernameDocument = gql`
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
      registerMethod
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
export const RefreshUserpoolSecretDocument = gql`
  mutation refreshUserpoolSecret {
    refreshUserpoolSecret
  }
`;
export const RegisterByEmailDocument = gql`
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
      registerMethod
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
export const RegisterByPhonePasswordDocument = gql`
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
      registerMethod
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
export const RegisterByUsernameDocument = gql`
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
      registerMethod
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
export const RemoveCooperatorDocument = gql`
  mutation removeCooperator($userId: String!, $roleId: String!) {
    removeCooperator(userId: $userId, roleId: $roleId) {
      message
      code
    }
  }
`;
export const RemoveFunctionFromPipelineDocument = gql`
  mutation removeFunctionFromPipeline(
    $input: RemoveFunctionFromPipelineInput!
  ) {
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
export const RemoveMemberDocument = gql`
  mutation removeMember(
    $page: Int
    $limit: Int
    $sortBy: SortByEnum
    $includeChildrenNodes: Boolean
    $orgId: String!
    $nodeId: String!
    $userIds: [String!]!
  ) {
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
      users(
        page: $page
        limit: $limit
        sortBy: $sortBy
        includeChildrenNodes: $includeChildrenNodes
      ) {
        totalCount
      }
    }
  }
`;
export const RemoveWhitelistDocument = gql`
  mutation removeWhitelist($type: WhitelistType!, $list: [String!]!) {
    removeWhitelist(type: $type, list: $list) {
      createdAt
      updatedAt
      value
    }
  }
`;
export const RevokeRoleDocument = gql`
  mutation revokeRole(
    $code: String!
    $userIds: [String!]
    $groupCodes: [String!]
    $nodeCodes: [String!]
  ) {
    revokeRole(
      code: $code
      userIds: $userIds
      groupCodes: $groupCodes
      nodeCodes: $nodeCodes
    ) {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
      permissions {
        id
        code
        name
        description
        isSystem
        type
        createdAt
        updatedAt
      }
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
export const SendWebhookTestRequestDocument = gql`
  mutation sendWebhookTestRequest($input: SendWebhookTestRequestInput!) {
    sendWebhookTestRequest(input: $input) {
      message
      code
    }
  }
`;
export const UpdateEmailDocument = gql`
  mutation updateEmail(
    $email: String!
    $emailCode: String!
    $oldEmail: String
    $oldEmailCode: String
  ) {
    updateEmail(
      email: $email
      emailCode: $emailCode
      oldEmail: $oldEmail
      oldEmailCode: $oldEmailCode
    ) {
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
      registerMethod
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
export const UpdateFunctionDocument = gql`
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
export const UpdateIdentityProviderDocument = gql`
  mutation updateIdentityProvider($input: IdpInput!) {
    updateIdentityProvider(input: $input) {
      id
      domain
      type
      config
      enabled
      userPoolId
    }
  }
`;
export const UpdatePasswordDocument = gql`
  mutation updatePassword(
    $id: String!
    $newPassword: String!
    $oldPassword: String
  ) {
    updatePassword(
      id: $id
      newPassword: $newPassword
      oldPassword: $oldPassword
    ) {
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
      registerMethod
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
export const UpdatePhoneDocument = gql`
  mutation updatePhone(
    $phone: String!
    $phoneCode: String!
    $oldPhone: String
    $oldPhoneCode: String
  ) {
    updatePhone(
      phone: $phone
      phoneCode: $phoneCode
      oldPhone: $oldPhone
      oldPhoneCode: $oldPhoneCode
    ) {
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
      registerMethod
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
export const UpdateRoleDocument = gql`
  mutation updateRole($code: String!, $name: String, $description: String) {
    updateRole(code: $code, name: $name, description: $description) {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
      permissions {
        id
        code
        name
        description
        isSystem
        type
        createdAt
        updatedAt
      }
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
export const UpdateUserDocument = gql`
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
      registerMethod
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
export const UpdateUserpoolDocument = gql`
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
        enable
      }
      loginFailCheck {
        timeInterval
        limit
        enable
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
export const UpdateWebhookDocument = gql`
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
export const CheckPasswordStrengthDocument = gql`
  query checkPasswordStrength($password: String!) {
    checkPasswordStrength(password: $password) {
      valid
      message
    }
  }
`;
export const ChildrenNodesDocument = gql`
  query childrenNodes(
    $page: Int
    $limit: Int
    $sortBy: SortByEnum
    $includeChildrenNodes: Boolean
    $orgId: String!
    $nodeId: String!
  ) {
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
      createdAt
      updatedAt
      children
      users(
        page: $page
        limit: $limit
        sortBy: $sortBy
        includeChildrenNodes: $includeChildrenNodes
      ) {
        totalCount
      }
    }
  }
`;
export const CooperatedUserpoolsDocument = gql`
  query cooperatedUserpools($page: Int, $limit: Int, $sortBy: SortByEnum) {
    cooperatedUserpools(page: $page, limit: $limit, sortBy: $sortBy) {
      totalCount
    }
  }
`;
export const CooperatorsDocument = gql`
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
        registerMethod
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
export const EmailTemplatesDocument = gql`
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
export const FunctionDocument = gql`
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
export const FunctionsDocument = gql`
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
export const IdentityProviderDocument = gql`
  query identityProvider($id: String) {
    identityProvider(id: $id) {
      id
      domain
      type
      config
      enabled
      userPoolId
    }
  }
`;
export const IdentityProviderByDomainDocument = gql`
  query identityProviderByDomain($domain: String) {
    identityProviderByDomain(domain: $domain) {
      id
      domain
      type
      config
      enabled
      userPoolId
    }
  }
`;
export const IdentityProvidersDocument = gql`
  query identityProviders(
    $protocol: IdentityProviderProtocol!
    $page: Int
    $limit: Int
    $sortBy: SortByEnum
  ) {
    identityProviders(
      protocol: $protocol
      page: $page
      limit: $limit
      sortBy: $sortBy
    ) {
      list {
        id
        domain
        type
        config
        enabled
        userPoolId
      }
      totalCount
    }
  }
`;
export const IsActionAllowedDocument = gql`
  query isActionAllowed(
    $resouceCode: String!
    $action: String!
    $userId: String!
  ) {
    isActionAllowed(resouceCode: $resouceCode, action: $action, userId: $userId)
  }
`;
export const IsActionDeniedDocument = gql`
  query isActionDenied(
    $resouceCode: String!
    $action: String!
    $userId: String!
  ) {
    isActionDenied(resouceCode: $resouceCode, action: $action, userId: $userId)
  }
`;
export const IsDomainAvaliableDocument = gql`
  query isDomainAvaliable($domain: String!) {
    isDomainAvaliable(domain: $domain)
  }
`;
export const NodeDocument = gql`
  query node(
    $page: Int
    $limit: Int
    $sortBy: SortByEnum
    $includeChildrenNodes: Boolean
    $id: String!
  ) {
    node(id: $id) {
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
      users(
        page: $page
        limit: $limit
        sortBy: $sortBy
        includeChildrenNodes: $includeChildrenNodes
      ) {
        totalCount
      }
    }
  }
`;
export const NodeByCodeDocument = gql`
  query nodeByCode(
    $page: Int
    $limit: Int
    $sortBy: SortByEnum
    $includeChildrenNodes: Boolean
    $orgId: String!
    $code: String!
  ) {
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
      users(
        page: $page
        limit: $limit
        sortBy: $sortBy
        includeChildrenNodes: $includeChildrenNodes
      ) {
        totalCount
      }
    }
  }
`;
export const OrgDocument = gql`
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
        createdAt
        updatedAt
        children
      }
    }
  }
`;
export const OrgsDocument = gql`
  query orgs($page: Int, $limit: Int, $sortBy: SortByEnum) {
    orgs(page: $page, limit: $limit, sortBy: $sortBy) {
      totalCount
      list {
        id
      }
    }
  }
`;
export const PermissionDocument = gql`
  query permission($id: String!) {
    permission(id: $id) {
      id
      code
      name
      description
      isSystem
      type
      createdAt
      updatedAt
    }
  }
`;
export const PermissionByCodeDocument = gql`
  query permissionByCode($code: String!) {
    permissionByCode(code: $code) {
      id
      code
      name
      description
      isSystem
      type
      createdAt
      updatedAt
    }
  }
`;
export const PermissionsDocument = gql`
  query permissions($page: Int, $limit: Int, $sortBy: SortByEnum) {
    permissions(page: $page, limit: $limit, sortBy: $sortBy) {
      totalCount
      list {
        id
        code
        name
        description
        isSystem
        type
        createdAt
        updatedAt
      }
    }
  }
`;
export const PipelineDocument = gql`
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
export const PipelinesDocument = gql`
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
export const PreviewEmailDocument = gql`
  query previewEmail($type: EmailTemplateType!) {
    previewEmail(type: $type)
  }
`;
export const QiniuUptokenDocument = gql`
  query qiniuUptoken($type: String) {
    qiniuUptoken(type: $type)
  }
`;
export const QueryMfaDocument = gql`
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
export const ResouceRulesDocument = gql`
  query resouceRules($code: String) {
    resouceRules(code: $code) {
      totalCount
      list {
        action
        allow
        expiresIn
        createdAt
        updatedAt
      }
    }
  }
`;
export const RoleDocument = gql`
  query role($code: String!) {
    role(code: $code) {
      code
      name
      description
      isSystem
      createdAt
      updatedAt
      permissions {
        id
        code
        name
        description
        isSystem
        type
        createdAt
        updatedAt
      }
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
export const RolesDocument = gql`
  query roles($page: Int, $limit: Int, $sortBy: SortByEnum) {
    roles(page: $page, limit: $limit, sortBy: $sortBy) {
      totalCount
      list {
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
export const SearchUserDocument = gql`
  query searchUser($query: String!, $fields: String, $page: Int, $count: Int) {
    searchUser(query: $query, fields: $fields, page: $page, count: $count) {
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
        registerMethod
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
export const SocialConnectionDocument = gql`
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
export const SocialConnectionInstanceDocument = gql`
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
export const SocialConnectionInstancesDocument = gql`
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
export const SocialConnectionsDocument = gql`
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
export const TemplateCodeDocument = gql`
  query templateCode {
    templateCode
  }
`;
export const UserDocument = gql`
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
      registerMethod
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
export const UserBatchDocument = gql`
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
        registerMethod
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
export const UserpoolDocument = gql`
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
        enable
      }
      loginFailCheck {
        timeInterval
        limit
        enable
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
export const UserpoolTypesDocument = gql`
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
export const UserpoolsDocument = gql`
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
export const UsersDocument = gql`
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
        registerMethod
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
export const WebhookDocument = gql`
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
export const WebhookLogDocument = gql`
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
export const WebhookLogsDocument = gql`
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
export const WebhookOptionsDocument = gql`
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
export const WebhooksDocument = gql`
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
export const WhitelistDocument = gql`
  query whitelist($type: WhitelistType!) {
    whitelist(type: $type) {
      createdAt
      updatedAt
      value
    }
  }
`;
