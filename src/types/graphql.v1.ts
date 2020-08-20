export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum OidcProviderDefaultLoginMethod {
  Phone = 'PHONE',
  Password = 'PASSWORD',
  Qrcode = 'QRCODE'
}

export enum IamType {
  Eiam = 'EIAM',
  Ciam = 'CIAM'
}

export type PermissionDescriptorsListInputType = {
  permissionId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  operationAllow?: Maybe<Scalars['Int']>;
};

export enum ProviderType {
  Oidc = 'OIDC',
  OAuth = 'OAuth'
}

export enum SortByEnum {
  CreatedatDesc = 'CREATEDAT_DESC',
  CreatedatAsc = 'CREATEDAT_ASC',
  UpdatedatDesc = 'UPDATEDAT_DESC',
  UpdatedatAsc = 'UPDATEDAT_ASC'
}

export type OrgChildrenNodesInput = {
  groupId: Scalars['String'];
  orgId: Scalars['String'];
};

export type IsRootNodeOfOrgInput = {
  groupId: Scalars['String'];
  orgId: Scalars['String'];
};

export type KeyValuePair = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export enum RuleTypes {
  PreRegister = 'PRE_REGISTER',
  PostRegister = 'POST_REGISTER',
  PostAuthentication = 'POST_AUTHENTICATION',
  PreOidctokenissued = 'PRE_OIDCTOKENISSUED'
}

export type EmailProviderListInput = {
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<EmailProviderFormInput>>>;
};

export type EmailProviderFormInput = {
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  help?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EmailProviderWithClientAddInput = {
  _id?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Array<Maybe<EmailProviderFormAddInput>>>;
  provider?: Maybe<Scalars['String']>;
};

export type EmailProviderFormAddInput = {
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  help?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EmailTemplateWithClientInput = {
  _id?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  hasURL?: Maybe<Scalars['Boolean']>;
  URLExpireTime?: Maybe<Scalars['Int']>;
  redirectTo?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Boolean']>;
  content?: Maybe<Scalars['String']>;
};

export type EmailTemplateInput = {
  _id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  hasURL?: Maybe<Scalars['Boolean']>;
  URLExpireTime?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Boolean']>;
  redirectTo?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type OAuthListUpdateInput = {
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  oAuthUrl?: Maybe<Scalars['String']>;
  wxappLogo?: Maybe<Scalars['String']>;
};

export type OAuthListFieldsFormUpdateInput = {
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<OAuthListFieldsFormRecursionInput>>>;
  checked?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OAuthListFieldsFormRecursionInput = {
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<OAuthListFieldsFormRecursionInput>>>;
};

export type OidcProviderCustomStylesInput = {
  forceLogin?: Maybe<Scalars['Boolean']>;
  hideQRCode?: Maybe<Scalars['Boolean']>;
  hideUP?: Maybe<Scalars['Boolean']>;
  hideUsername?: Maybe<Scalars['Boolean']>;
  hideRegister?: Maybe<Scalars['Boolean']>;
  hidePhone?: Maybe<Scalars['Boolean']>;
  hideSocial?: Maybe<Scalars['Boolean']>;
  hideClose?: Maybe<Scalars['Boolean']>;
  hidePhonePassword?: Maybe<Scalars['Boolean']>;
  placeholder?: Maybe<OidcProviderCustomStylesPlaceholderInput>;
  qrcodeScanning?: Maybe<OidcProviderCustomStylesQrcodeScanningInput>;
  defaultLoginMethod?: Maybe<OidcProviderDefaultLoginMethod>;
};

export type OidcProviderCustomStylesPlaceholderInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  confirmPassword?: Maybe<Scalars['String']>;
  verfiyCode?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
};

export type OidcProviderCustomStylesQrcodeScanningInput = {
  redirect?: Maybe<Scalars['Boolean']>;
  interval?: Maybe<Scalars['Int']>;
  tips?: Maybe<Scalars['String']>;
};

export type AssertionMapInputType = {
  username?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  providerName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type AssertionConsumeServiceInputType = {
  binding?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
};

export type PricingFieldsInput = {
  _id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  startNumber?: Maybe<Scalars['Int']>;
  freeNumber?: Maybe<Scalars['Int']>;
  startPrice?: Maybe<Scalars['Int']>;
  maxNumber?: Maybe<Scalars['Int']>;
  d?: Maybe<Scalars['Int']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrderAddInput = {
  user: Scalars['String'];
  client: Scalars['String'];
  pricing: Scalars['String'];
  flowNumber: Scalars['Int'];
  price: Scalars['Float'];
  timeOfPurchase: Scalars['Int'];
};

export type UserRegisterInput = {
  email?: Maybe<Scalars['String']>;
  unionid?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  forceLogin?: Maybe<Scalars['Boolean']>;
  lastIP?: Maybe<Scalars['String']>;
  registerInClient: Scalars['String'];
  registerMethod?: Maybe<Scalars['String']>;
  oauth?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
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
  updatedAt?: Maybe<Scalars['String']>;
  signedUp?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  _id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  unionid?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  phoneVerified?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  photo?: Maybe<Scalars['String']>;
  browser?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  registerInClient?: Maybe<Scalars['String']>;
  registerMethod?: Maybe<Scalars['String']>;
  oauth?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  tokenExpiredAt?: Maybe<Scalars['String']>;
  loginsCount?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['String']>;
  lastIP?: Maybe<Scalars['String']>;
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
  oldPassword?: Maybe<Scalars['String']>;
};

export type NewUserClientInput = {
  name: Scalars['String'];
  userId: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  clientTypeId?: Maybe<Scalars['String']>;
  userPoolTypeList?: Maybe<Array<Scalars['String']>>;
  iamType?: Maybe<IamType>;
  domain?: Maybe<Scalars['String']>;
};

export type UpdateUserClientInput = {
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
  clientType?: Maybe<Scalars['String']>;
  userPoolTypeList?: Maybe<Array<Scalars['String']>>;
  emailVerifiedDefault?: Maybe<Scalars['Boolean']>;
  sendWelcomeEmail?: Maybe<Scalars['Boolean']>;
  registerDisabled?: Maybe<Scalars['Boolean']>;
  showWXMPQRCode?: Maybe<Scalars['Boolean']>;
  useMiniLogin?: Maybe<Scalars['Boolean']>;
  useSelfWxapp?: Maybe<Scalars['Boolean']>;
  enableEmail?: Maybe<Scalars['Boolean']>;
  allowedOrigins?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Scalars['String']>;
  jwtExpired?: Maybe<Scalars['Int']>;
  secret?: Maybe<Scalars['String']>;
  frequentRegisterCheck?: Maybe<FrequentRegisterCheckConfigInput>;
  loginFailCheck?: Maybe<LoginFailCheckConfigInput>;
  logo?: Maybe<Scalars['String']>;
  changePhoneStrategy?: Maybe<ChangePhoneStrategyInput>;
  changeEmailStrategy?: Maybe<ChangeEmailStrategyInput>;
  qrcodeLoginStrategy?: Maybe<QrcodeLoginStrategyInput>;
  app2WxappLoginStrategy?: Maybe<App2WxappLoginStrategyInput>;
};

export type FrequentRegisterCheckConfigInput = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enable?: Maybe<Scalars['Boolean']>;
};

export type LoginFailCheckConfigInput = {
  timeInterval?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  enable?: Maybe<Scalars['Boolean']>;
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

export type SuperAdminUpdateInput = {
  _id?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type PermissionDescriptorsInputType = {
  permissionId?: Maybe<Scalars['String']>;
  operationAllow?: Maybe<Scalars['Int']>;
};

export type CreateRbacPermissionInput = {
  userPoolId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateRbacPermissionInput = {
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CreateRbacRoleInput = {
  userPoolId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateRbacRoleInput = {
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CreateRbacGroupInput = {
  userPoolId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateRbacGroupInput = {
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type AssignUserToRbacRoleInput = {
  userId: Scalars['String'];
  roleId: Scalars['String'];
};

export type AssignUserToRbacRoleBatchInput = {
  userIdList: Array<Scalars['String']>;
  roleId: Scalars['String'];
};

export type RevokeRbacRoleFromUserInput = {
  userId: Scalars['String'];
  roleId: Scalars['String'];
};

export type RevokeRbacRoleFromUserBatchInput = {
  userIdList: Array<Scalars['String']>;
  roleId: Scalars['String'];
};

export type AddPermissionToRbacRoleInput = {
  permissionId: Scalars['String'];
  roleId: Scalars['String'];
};

export type AddPermissionToRbacRoleBatchInput = {
  permissionIdList: Array<Scalars['String']>;
  roleId: Scalars['String'];
};

export type RemovePermissionFromRbacRoleInput = {
  permissionId: Scalars['String'];
  roleId: Scalars['String'];
};

export type RemovePermissionFromRbacRoleBatchInput = {
  permissionIdList: Array<Scalars['String']>;
  roleId: Scalars['String'];
};

export type AddRoleToRbacGroupInput = {
  roleId: Scalars['String'];
  groupId: Scalars['String'];
};

export type AddRoleToRbacGroupBatchInput = {
  roleIdList: Array<Scalars['String']>;
  groupId: Scalars['String'];
};

export type RemoveRoleFromRbacGroupInput = {
  roleId: Scalars['String'];
  groupId: Scalars['String'];
};

export type RemoveRoleFromRbacGroupBatchInput = {
  roleIdList: Array<Scalars['String']>;
  groupId: Scalars['String'];
};

export type AddUserToRbacGroupInput = {
  userId: Scalars['String'];
  groupId: Scalars['String'];
};

export type AddUserToRbacGroupBatchInput = {
  userIdList: Array<Scalars['String']>;
  groupId: Scalars['String'];
};

export type RemoveUserFromRbacGroupInput = {
  userId: Scalars['String'];
  groupId: Scalars['String'];
};

export type RemoveUserFromRbacGroupBatchInput = {
  userIdList: Array<Scalars['String']>;
  groupId: Scalars['String'];
};

export type CreateOrgInput = {
  rootGroupId: Scalars['String'];
  userPoolId: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
};

export type UpdateOrgInput = {
  userPoolId: Scalars['String'];
  orgId: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
};

export type AddOrgNodeInput = {
  orgId: Scalars['String'];
  groupId: Scalars['String'];
  parentGroupId: Scalars['String'];
};

export type RemoveOrgNodeInput = {
  orgId: Scalars['String'];
  groupId: Scalars['String'];
};

export type CreateDingTalkCorpInput = {
  userPoolId: Scalars['String'];
  corpId: Scalars['String'];
  twoWaySynchronizationOn: Scalars['Boolean'];
  appkey: Scalars['String'];
  secret: Scalars['String'];
};

export type CreateWechatWorkCorpInput = {
  userPoolId: Scalars['String'];
  corpId: Scalars['String'];
  twoWaySynchronizationOn: Scalars['Boolean'];
  addressBookSyncHelperSecret: Scalars['String'];
  addressBookSyncHelperToken: Scalars['String'];
  addressBookSyncHelperEncodingAESKey: Scalars['String'];
};

export type CreateRuleInput = {
  userPoolId: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: RuleTypes;
  code: Scalars['String'];
  async?: Maybe<Scalars['Boolean']>;
};

export type UpdateRuleInput = {
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<RuleTypes>;
  enabled?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
};

export type SetRuleEnvInput = {
  userPoolId: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type RemoveRuleEnvInput = {
  userPoolId: Scalars['String'];
  key: Scalars['String'];
};

export type UpdateRuleOrderInput = {
  list: Array<UpdateRuleOrderItem>;
};

export type UpdateRuleOrderItem = {
  id: Scalars['String'];
  order: Scalars['Int'];
};

export type SetUserMetadataInput = {
  _id: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type RemoveUserMetadataInput = {
  _id: Scalars['String'];
  key: Scalars['String'];
};

export type AuthenticationContextInput = {
  protocol: Scalars['String'];
  connection: Scalars['String'];
  ldapConfiguration?: Maybe<LdapConfigurationInput>;
};

export type LdapConfigurationInput = {
  _id: Scalars['String'];
  enabled: Scalars['Boolean'];
  isDeleted: Scalars['Boolean'];
  name: Scalars['String'];
  ldapLink: Scalars['String'];
  baseDN: Scalars['String'];
  searchStandard: Scalars['String'];
  username: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type DeleteOrgInput = {
  _id: Scalars['String'];
};

export type AddEmailProviderVariables = Exact<{
  options?: Maybe<EmailProviderListInput>;
}>;

export type AddEmailProvider = {
  AddEmailProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    image?: Maybe<string>;
    description?: Maybe<string>;
    client?: Maybe<string>;
    user?: Maybe<string>;
    status?: Maybe<boolean>;
    fields?: Maybe<
      Array<
        Maybe<{
          label?: Maybe<string>;
          type?: Maybe<string>;
          placeholder?: Maybe<string>;
          help?: Maybe<string>;
          value?: Maybe<string>;
          options?: Maybe<Array<Maybe<string>>>;
        }>
      >
    >;
    provider?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      client?: Maybe<string>;
      user?: Maybe<string>;
      status?: Maybe<boolean>;
    }>;
  }>;
};

export type AddLdapServerVariables = Exact<{
  name: Scalars['String'];
  clientId: Scalars['String'];
  userId: Scalars['String'];
  ldapLink: Scalars['String'];
  baseDN: Scalars['String'];
  searchStandard: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  emailPostfix?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
}>;

export type AddLdapServer = {
  AddLDAPServer?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    clientId?: Maybe<string>;
    userId?: Maybe<string>;
    ldapLink?: Maybe<string>;
    baseDN?: Maybe<string>;
    searchStandard?: Maybe<string>;
    emailPostfix?: Maybe<string>;
    username?: Maybe<string>;
    password?: Maybe<string>;
    description?: Maybe<string>;
    enabled?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type AddOAuthListVariables = Exact<{
  options?: Maybe<OAuthListUpdateInput>;
  fields?: Maybe<Array<Maybe<OAuthListFieldsFormUpdateInput>>>;
}>;

export type AddOAuthList = {
  AddOAuthList?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    alias?: Maybe<string>;
    image?: Maybe<string>;
    description?: Maybe<string>;
    enabled?: Maybe<boolean>;
    url?: Maybe<string>;
    client?: Maybe<string>;
    user?: Maybe<string>;
    oAuthUrl?: Maybe<string>;
    wxappLogo?: Maybe<string>;
    fields?: Maybe<
      Array<
        Maybe<{
          label?: Maybe<string>;
          type?: Maybe<string>;
          placeholder?: Maybe<string>;
          value?: Maybe<string>;
          checked?: Maybe<Array<Maybe<string>>>;
        }>
      >
    >;
    oauth?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      alias?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      enabled?: Maybe<boolean>;
      url?: Maybe<string>;
      client?: Maybe<string>;
      user?: Maybe<string>;
      oAuthUrl?: Maybe<string>;
      wxappLogo?: Maybe<string>;
    }>;
  }>;
};

export type AddSystemPricingVariables = Exact<{
  options?: Maybe<PricingFieldsInput>;
}>;

export type AddSystemPricing = {
  AddSystemPricing?: Maybe<{
    _id?: Maybe<string>;
    type?: Maybe<string>;
    startNumber?: Maybe<number>;
    freeNumber?: Maybe<number>;
    startPrice?: Maybe<number>;
    maxNumber?: Maybe<number>;
    d?: Maybe<number>;
    features?: Maybe<Array<Maybe<string>>>;
  }>;
};

export type ClearAvatarSrcVariables = Exact<{
  client?: Maybe<Scalars['String']>;
  oauth?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
}>;

export type ClearAvatarSrc = {
  ClearAvatarSrc?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    alias?: Maybe<string>;
    image?: Maybe<string>;
    description?: Maybe<string>;
    enabled?: Maybe<boolean>;
    url?: Maybe<string>;
    client?: Maybe<string>;
    user?: Maybe<string>;
    oAuthUrl?: Maybe<string>;
    wxappLogo?: Maybe<string>;
    fields?: Maybe<
      Array<
        Maybe<{
          label?: Maybe<string>;
          type?: Maybe<string>;
          placeholder?: Maybe<string>;
          value?: Maybe<string>;
          checked?: Maybe<Array<Maybe<string>>>;
        }>
      >
    >;
    oauth?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      alias?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      enabled?: Maybe<boolean>;
      url?: Maybe<string>;
      client?: Maybe<string>;
      user?: Maybe<string>;
      oAuthUrl?: Maybe<string>;
      wxappLogo?: Maybe<string>;
    }>;
  }>;
};

export type ContinuePayVariables = Exact<{
  order: Scalars['String'];
}>;

export type ContinuePay = {
  ContinuePay?: Maybe<{
    code?: Maybe<number>;
    url?: Maybe<string>;
    charge?: Maybe<string>;
  }>;
};

export type CreateDefaultSamlIdentityProviderSettingsVariables = Exact<{
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  mappings?: Maybe<AssertionMapInputType>;
}>;

export type CreateDefaultSamlIdentityProviderSettings = {
  CreateDefaultSAMLIdentityProviderSettings?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    image?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    mappings?: Maybe<{
      username?: Maybe<string>;
      nickname?: Maybe<string>;
      photo?: Maybe<string>;
      company?: Maybe<string>;
      providerName?: Maybe<string>;
      email?: Maybe<string>;
    }>;
  }>;
};

export type CreateOAuthProviderVariables = Exact<{
  name: Scalars['String'];
  domain: Scalars['String'];
  redirectUris: Array<Maybe<Scalars['String']>>;
  grants: Array<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  homepageURL?: Maybe<Scalars['String']>;
  casExpire?: Maybe<Scalars['Int']>;
}>;

export type CreateOAuthProvider = {
  CreateOAuthProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirectUris?: Maybe<Array<Maybe<string>>>;
    appSecret?: Maybe<string>;
    client_id?: Maybe<string>;
    clientId?: Maybe<string>;
    grants?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    loginUrl?: Maybe<string>;
    casExpire?: Maybe<number>;
  }>;
};

export type CreateOidcAppVariables = Exact<{
  name: Scalars['String'];
  domain: Scalars['String'];
  redirect_uris: Array<Maybe<Scalars['String']>>;
  grant_types: Array<Scalars['String']>;
  response_types: Array<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['String']>;
  token_endpoint_auth_method?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  isDefault?: Maybe<Scalars['Boolean']>;
  id_token_signed_response_alg?: Maybe<Scalars['String']>;
  id_token_encrypted_response_alg?: Maybe<Scalars['String']>;
  id_token_encrypted_response_enc?: Maybe<Scalars['String']>;
  userinfo_signed_response_alg?: Maybe<Scalars['String']>;
  userinfo_encrypted_response_alg?: Maybe<Scalars['String']>;
  userinfo_encrypted_response_enc?: Maybe<Scalars['String']>;
  request_object_signing_alg?: Maybe<Scalars['String']>;
  request_object_encryption_alg?: Maybe<Scalars['String']>;
  request_object_encryption_enc?: Maybe<Scalars['String']>;
  jwks_uri?: Maybe<Scalars['String']>;
  _jwks_uri?: Maybe<Scalars['String']>;
  jwks?: Maybe<Scalars['String']>;
  _jwks?: Maybe<Scalars['String']>;
  custom_jwks?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  homepageURL?: Maybe<Scalars['String']>;
  authorization_code_expire?: Maybe<Scalars['String']>;
  id_token_expire?: Maybe<Scalars['String']>;
  access_token_expire?: Maybe<Scalars['String']>;
  refresh_token_expire?: Maybe<Scalars['String']>;
  cas_expire?: Maybe<Scalars['String']>;
  customStyles?: Maybe<OidcProviderCustomStylesInput>;
  isForTeamory?: Maybe<Scalars['Boolean']>;
  confirmAuthorization?: Maybe<Scalars['Boolean']>;
}>;

export type CreateOidcApp = {
  CreateOIDCApp?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirect_uris?: Maybe<Array<Maybe<string>>>;
    client_id?: Maybe<string>;
    client_secret?: Maybe<string>;
    token_endpoint_auth_method?: Maybe<string>;
    id_token_signed_response_alg?: Maybe<string>;
    id_token_encrypted_response_alg?: Maybe<string>;
    id_token_encrypted_response_enc?: Maybe<string>;
    userinfo_signed_response_alg?: Maybe<string>;
    userinfo_encrypted_response_alg?: Maybe<string>;
    userinfo_encrypted_response_enc?: Maybe<string>;
    request_object_signing_alg?: Maybe<string>;
    request_object_encryption_alg?: Maybe<string>;
    request_object_encryption_enc?: Maybe<string>;
    jwks_uri?: Maybe<string>;
    _jwks_uri?: Maybe<string>;
    custom_jwks?: Maybe<string>;
    jwks?: Maybe<string>;
    _jwks?: Maybe<string>;
    clientId?: Maybe<string>;
    grant_types?: Maybe<Array<Maybe<string>>>;
    response_types?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    isDefault?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    authorization_code_expire?: Maybe<string>;
    id_token_expire?: Maybe<string>;
    access_token_expire?: Maybe<string>;
    refresh_token_expire?: Maybe<string>;
    cas_expire?: Maybe<string>;
    loginUrl?: Maybe<string>;
    isForTeamory?: Maybe<boolean>;
    confirmAuthorization?: Maybe<boolean>;
    customStyles?: Maybe<{
      forceLogin?: Maybe<boolean>;
      hideQRCode?: Maybe<boolean>;
      hideUP?: Maybe<boolean>;
      hideUsername?: Maybe<boolean>;
      hideRegister?: Maybe<boolean>;
      hidePhone?: Maybe<boolean>;
      hideSocial?: Maybe<boolean>;
      hideClose?: Maybe<boolean>;
      hidePhonePassword?: Maybe<boolean>;
      defaultLoginMethod?: Maybe<OidcProviderDefaultLoginMethod>;
    }>;
  }>;
};

export type CreateSamlIdentityProviderVariables = Exact<{
  name: Scalars['String'];
  domain: Scalars['String'];
  clientId: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  SPMetadata?: Maybe<Scalars['String']>;
  IdPMetadata?: Maybe<Scalars['String']>;
}>;

export type CreateSamlIdentityProvider = {
  CreateSAMLIdentityProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    attributeNameFormat?: Maybe<string>;
    customAttributes?: Maybe<string>;
    emailDomainTransformation?: Maybe<string>;
    authnContextClassRef?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    assertionConsumerUrl?: Maybe<string>;
    bindings?: Maybe<Array<Maybe<string>>>;
    nameIds?: Maybe<Array<Maybe<string>>>;
    attributes?: Maybe<Array<Maybe<string>>>;
    enableSignRes?: Maybe<boolean>;
    resSignAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resSignPublicKey?: Maybe<string>;
    resSignPrivateKey?: Maybe<string>;
    resSignPrivateKeyPass?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignPublicKey?: Maybe<string>;
    enableEncryptRes?: Maybe<boolean>;
    resEncryptPublicKey?: Maybe<string>;
    css?: Maybe<string>;
  }>;
};

export type CreateSamlServiceProviderVariables = Exact<{
  name: Scalars['String'];
  domain: Scalars['String'];
  clientId: Scalars['String'];
  redirectUrl: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  SPMetadata?: Maybe<Scalars['String']>;
  IdPMetadata?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  mappings?: Maybe<AssertionMapInputType>;
  defaultIdPMapId?: Maybe<Scalars['String']>;
}>;

export type CreateSamlServiceProvider = {
  CreateSAMLServiceProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    defaultIdPMapId?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    IdPEntityID?: Maybe<string>;
    redirectUrl: string;
    loginUrl: string;
    logoutUrl: string;
    nameId: string;
    enableSignRes?: Maybe<boolean>;
    resSignPublicKey?: Maybe<string>;
    hasResEncrypted?: Maybe<boolean>;
    resEncryptAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resDecryptPrivateKey?: Maybe<string>;
    resDecryptPrivateKeyPass?: Maybe<string>;
    resEncryptPublicKey?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignAlgorithm?: Maybe<string>;
    reqAbstractAlgorithm?: Maybe<string>;
    reqSignPrivateKey?: Maybe<string>;
    reqSignPrivateKeyPass?: Maybe<string>;
    reqSignPublicKey?: Maybe<string>;
    SPUrl?: Maybe<string>;
    defaultIdPMap?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
    }>;
    assertionConsumeService?: Maybe<
      Array<
        Maybe<{
          binding?: Maybe<string>;
          url?: Maybe<string>;
          isDefault?: Maybe<boolean>;
        }>
      >
    >;
    mappings?: Maybe<{
      username?: Maybe<string>;
      nickname?: Maybe<string>;
      photo?: Maybe<string>;
      company?: Maybe<string>;
      providerName?: Maybe<string>;
      email?: Maybe<string>;
    }>;
  }>;
};

export type EnableSamlIdentityProviderVariables = Exact<{
  appId: Scalars['String'];
  clientId: Scalars['String'];
  enabled?: Maybe<Scalars['Boolean']>;
}>;

export type EnableSamlIdentityProvider = {
  EnableSAMLIdentityProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    attributeNameFormat?: Maybe<string>;
    customAttributes?: Maybe<string>;
    emailDomainTransformation?: Maybe<string>;
    authnContextClassRef?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    assertionConsumerUrl?: Maybe<string>;
    bindings?: Maybe<Array<Maybe<string>>>;
    nameIds?: Maybe<Array<Maybe<string>>>;
    attributes?: Maybe<Array<Maybe<string>>>;
    enableSignRes?: Maybe<boolean>;
    resSignAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resSignPublicKey?: Maybe<string>;
    resSignPrivateKey?: Maybe<string>;
    resSignPrivateKeyPass?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignPublicKey?: Maybe<string>;
    enableEncryptRes?: Maybe<boolean>;
    resEncryptPublicKey?: Maybe<string>;
    css?: Maybe<string>;
  }>;
};

export type EnableSamlServiceProviderVariables = Exact<{
  appId: Scalars['String'];
  clientId: Scalars['String'];
  enabled?: Maybe<Scalars['Boolean']>;
}>;

export type EnableSamlServiceProvider = {
  EnableSAMLServiceProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    defaultIdPMapId?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    IdPEntityID?: Maybe<string>;
    redirectUrl: string;
    loginUrl: string;
    logoutUrl: string;
    nameId: string;
    enableSignRes?: Maybe<boolean>;
    resSignPublicKey?: Maybe<string>;
    hasResEncrypted?: Maybe<boolean>;
    resEncryptAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resDecryptPrivateKey?: Maybe<string>;
    resDecryptPrivateKeyPass?: Maybe<string>;
    resEncryptPublicKey?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignAlgorithm?: Maybe<string>;
    reqAbstractAlgorithm?: Maybe<string>;
    reqSignPrivateKey?: Maybe<string>;
    reqSignPrivateKeyPass?: Maybe<string>;
    reqSignPublicKey?: Maybe<string>;
    SPUrl?: Maybe<string>;
    defaultIdPMap?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
    }>;
    assertionConsumeService?: Maybe<
      Array<
        Maybe<{
          binding?: Maybe<string>;
          url?: Maybe<string>;
          isDefault?: Maybe<boolean>;
        }>
      >
    >;
    mappings?: Maybe<{
      username?: Maybe<string>;
      nickname?: Maybe<string>;
      photo?: Maybe<string>;
      company?: Maybe<string>;
      providerName?: Maybe<string>;
      email?: Maybe<string>;
    }>;
  }>;
};

export type IncClientFlowNumberVariables = Exact<{
  user?: Maybe<Scalars['String']>;
  userInvitied?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
}>;

export type IncClientFlowNumber = {
  IncClientFlowNumber?: Maybe<{
    code?: Maybe<number>;
    url?: Maybe<string>;
    charge?: Maybe<string>;
  }>;
};

export type LoginByLdapVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  clientId: Scalars['String'];
  browser?: Maybe<Scalars['String']>;
}>;

export type LoginByLdap = {
  LoginByLDAP?: Maybe<{
    _id?: Maybe<string>;
    username?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
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
    oldPassword?: Maybe<string>;
    metadata?: Maybe<string>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type RemoveEmailProviderVariables = Exact<{
  _ids: Array<Maybe<Scalars['String']>>;
}>;

export type RemoveEmailProvider = {
  RemoveEmailProvider?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        image?: Maybe<string>;
        description?: Maybe<string>;
        client?: Maybe<string>;
        user?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<
          Array<
            Maybe<{
              label?: Maybe<string>;
              type?: Maybe<string>;
              placeholder?: Maybe<string>;
              help?: Maybe<string>;
              value?: Maybe<string>;
              options?: Maybe<Array<Maybe<string>>>;
            }>
          >
        >;
        provider?: Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          image?: Maybe<string>;
          description?: Maybe<string>;
          client?: Maybe<string>;
          user?: Maybe<string>;
          status?: Maybe<boolean>;
        }>;
      }>
    >
  >;
};

export type RemoveLdapServerVariables = Exact<{
  ldapId: Scalars['String'];
  clientId: Scalars['String'];
}>;

export type RemoveLdapServer = {
  RemoveLDAPServer?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    clientId?: Maybe<string>;
    userId?: Maybe<string>;
    ldapLink?: Maybe<string>;
    baseDN?: Maybe<string>;
    searchStandard?: Maybe<string>;
    emailPostfix?: Maybe<string>;
    username?: Maybe<string>;
    password?: Maybe<string>;
    description?: Maybe<string>;
    enabled?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type RemoveOAuthListVariables = Exact<{
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;

export type RemoveOAuthList = { RemoveOAuthList?: Maybe<Array<Maybe<string>>> };

export type RemoveOAuthProviderVariables = Exact<{
  appId: Scalars['String'];
  clientId: Scalars['String'];
}>;

export type RemoveOAuthProvider = {
  RemoveOAuthProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirectUris?: Maybe<Array<Maybe<string>>>;
    appSecret?: Maybe<string>;
    client_id?: Maybe<string>;
    clientId?: Maybe<string>;
    grants?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    loginUrl?: Maybe<string>;
    casExpire?: Maybe<number>;
  }>;
};

export type RemoveOidcAppVariables = Exact<{
  appId: Scalars['String'];
  clientId: Scalars['String'];
}>;

export type RemoveOidcApp = {
  RemoveOIDCApp?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirect_uris?: Maybe<Array<Maybe<string>>>;
    client_id?: Maybe<string>;
    client_secret?: Maybe<string>;
    token_endpoint_auth_method?: Maybe<string>;
    id_token_signed_response_alg?: Maybe<string>;
    id_token_encrypted_response_alg?: Maybe<string>;
    id_token_encrypted_response_enc?: Maybe<string>;
    userinfo_signed_response_alg?: Maybe<string>;
    userinfo_encrypted_response_alg?: Maybe<string>;
    userinfo_encrypted_response_enc?: Maybe<string>;
    request_object_signing_alg?: Maybe<string>;
    request_object_encryption_alg?: Maybe<string>;
    request_object_encryption_enc?: Maybe<string>;
    jwks_uri?: Maybe<string>;
    _jwks_uri?: Maybe<string>;
    custom_jwks?: Maybe<string>;
    jwks?: Maybe<string>;
    _jwks?: Maybe<string>;
    clientId?: Maybe<string>;
    grant_types?: Maybe<Array<Maybe<string>>>;
    response_types?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    isDefault?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    authorization_code_expire?: Maybe<string>;
    id_token_expire?: Maybe<string>;
    access_token_expire?: Maybe<string>;
    refresh_token_expire?: Maybe<string>;
    cas_expire?: Maybe<string>;
    loginUrl?: Maybe<string>;
    isForTeamory?: Maybe<boolean>;
    confirmAuthorization?: Maybe<boolean>;
    customStyles?: Maybe<{
      forceLogin?: Maybe<boolean>;
      hideQRCode?: Maybe<boolean>;
      hideUP?: Maybe<boolean>;
      hideUsername?: Maybe<boolean>;
      hideRegister?: Maybe<boolean>;
      hidePhone?: Maybe<boolean>;
      hideSocial?: Maybe<boolean>;
      hideClose?: Maybe<boolean>;
      hidePhonePassword?: Maybe<boolean>;
      defaultLoginMethod?: Maybe<OidcProviderDefaultLoginMethod>;
    }>;
  }>;
};

export type RemoveSamlIdentityProviderVariables = Exact<{
  appId: Scalars['String'];
  clientId: Scalars['String'];
}>;

export type RemoveSamlIdentityProvider = {
  RemoveSAMLIdentityProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    attributeNameFormat?: Maybe<string>;
    customAttributes?: Maybe<string>;
    emailDomainTransformation?: Maybe<string>;
    authnContextClassRef?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    assertionConsumerUrl?: Maybe<string>;
    bindings?: Maybe<Array<Maybe<string>>>;
    nameIds?: Maybe<Array<Maybe<string>>>;
    attributes?: Maybe<Array<Maybe<string>>>;
    enableSignRes?: Maybe<boolean>;
    resSignAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resSignPublicKey?: Maybe<string>;
    resSignPrivateKey?: Maybe<string>;
    resSignPrivateKeyPass?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignPublicKey?: Maybe<string>;
    enableEncryptRes?: Maybe<boolean>;
    resEncryptPublicKey?: Maybe<string>;
    css?: Maybe<string>;
  }>;
};

export type RemoveSamlServiceProviderVariables = Exact<{
  appId: Scalars['String'];
  clientId: Scalars['String'];
}>;

export type RemoveSamlServiceProvider = {
  RemoveSAMLServiceProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    defaultIdPMapId?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    IdPEntityID?: Maybe<string>;
    redirectUrl: string;
    loginUrl: string;
    logoutUrl: string;
    nameId: string;
    enableSignRes?: Maybe<boolean>;
    resSignPublicKey?: Maybe<string>;
    hasResEncrypted?: Maybe<boolean>;
    resEncryptAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resDecryptPrivateKey?: Maybe<string>;
    resDecryptPrivateKeyPass?: Maybe<string>;
    resEncryptPublicKey?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignAlgorithm?: Maybe<string>;
    reqAbstractAlgorithm?: Maybe<string>;
    reqSignPrivateKey?: Maybe<string>;
    reqSignPrivateKeyPass?: Maybe<string>;
    reqSignPublicKey?: Maybe<string>;
    SPUrl?: Maybe<string>;
    defaultIdPMap?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
    }>;
    assertionConsumeService?: Maybe<
      Array<
        Maybe<{
          binding?: Maybe<string>;
          url?: Maybe<string>;
          isDefault?: Maybe<boolean>;
        }>
      >
    >;
    mappings?: Maybe<{
      username?: Maybe<string>;
      nickname?: Maybe<string>;
      photo?: Maybe<string>;
      company?: Maybe<string>;
      providerName?: Maybe<string>;
      email?: Maybe<string>;
    }>;
  }>;
};

export type RevokeUserAuthorizedAppVariables = Exact<{
  appId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
}>;

export type RevokeUserAuthorizedApp = {
  RevokeUserAuthorizedApp?: Maybe<{
    _id?: Maybe<string>;
    appId?: Maybe<string>;
    userId?: Maybe<string>;
    scope?: Maybe<string>;
    type?: Maybe<string>;
    isRevoked?: Maybe<string>;
    when?: Maybe<string>;
  }>;
};

export type SaveEmailProviderWithClientVariables = Exact<{
  options?: Maybe<EmailProviderWithClientAddInput>;
}>;

export type SaveEmailProviderWithClient = {
  SaveEmailProviderWithClient?: Maybe<{
    _id?: Maybe<string>;
    user?: Maybe<string>;
    client?: Maybe<string>;
    status?: Maybe<boolean>;
    fields?: Maybe<
      Array<
        Maybe<{
          label?: Maybe<string>;
          type?: Maybe<string>;
          placeholder?: Maybe<string>;
          help?: Maybe<string>;
          value?: Maybe<string>;
          options?: Maybe<Array<Maybe<string>>>;
        }>
      >
    >;
    provider?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
    }>;
  }>;
};

export type SendEmailVariables = Exact<{
  receivers: Array<Maybe<Scalars['String']>>;
  subject: Scalars['String'];
  client: Scalars['String'];
  user?: Maybe<Scalars['String']>;
  testAvailable?: Maybe<Scalars['Boolean']>;
  providerName?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  sender?: Maybe<Scalars['String']>;
  meta_data?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
}>;

export type SendEmail = {
  SendEmail?: Maybe<{
    _id?: Maybe<string>;
    user?: Maybe<string>;
    subject?: Maybe<string>;
    content?: Maybe<string>;
    sender?: Maybe<string>;
    receivers?: Maybe<Array<Maybe<string>>>;
    post?: Maybe<string>;
    createdAt?: Maybe<string>;
    rejected?: Maybe<Array<Maybe<string>>>;
    isDeleted?: Maybe<string>;
    client?: Maybe<string>;
  }>;
};

export type SendEmailByTypeVariables = Exact<{
  user: Scalars['String'];
  type: Scalars['String'];
  client: Scalars['String'];
  receivers: Array<Maybe<Scalars['String']>>;
  meta_data?: Maybe<Scalars['String']>;
}>;

export type SendEmailByType = {
  SendEmailByType?: Maybe<{
    _id?: Maybe<string>;
    user?: Maybe<string>;
    subject?: Maybe<string>;
    content?: Maybe<string>;
    sender?: Maybe<string>;
    receivers?: Maybe<Array<Maybe<string>>>;
    post?: Maybe<string>;
    createdAt?: Maybe<string>;
    rejected?: Maybe<Array<Maybe<string>>>;
    isDeleted?: Maybe<string>;
    client?: Maybe<string>;
  }>;
};

export type SendWebhookTestVariables = Exact<{
  id: Scalars['String'];
}>;

export type SendWebhookTest = { SendWebhookTest?: Maybe<boolean> };

export type SetApplicationOAuthEnableOrDisableVariables = Exact<{
  client?: Maybe<Scalars['String']>;
  oauth?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
}>;

export type SetApplicationOAuthEnableOrDisable = {
  SetApplicationOAuthEnableOrDisable?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    alias?: Maybe<string>;
    image?: Maybe<string>;
    description?: Maybe<string>;
    enabled?: Maybe<boolean>;
    url?: Maybe<string>;
    client?: Maybe<string>;
    user?: Maybe<string>;
    oAuthUrl?: Maybe<string>;
    wxappLogo?: Maybe<string>;
    fields?: Maybe<
      Array<
        Maybe<{
          label?: Maybe<string>;
          type?: Maybe<string>;
          placeholder?: Maybe<string>;
          value?: Maybe<string>;
          checked?: Maybe<Array<Maybe<string>>>;
        }>
      >
    >;
    oauth?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      alias?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      enabled?: Maybe<boolean>;
      url?: Maybe<string>;
      client?: Maybe<string>;
      user?: Maybe<string>;
      oAuthUrl?: Maybe<string>;
      wxappLogo?: Maybe<string>;
    }>;
  }>;
};

export type UpdateApplicationOAuthVariables = Exact<{
  client?: Maybe<Scalars['String']>;
  oauth?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<OAuthListFieldsFormUpdateInput>>>;
}>;

export type UpdateApplicationOAuth = {
  UpdateApplicationOAuth?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    alias?: Maybe<string>;
    image?: Maybe<string>;
    description?: Maybe<string>;
    enabled?: Maybe<boolean>;
    url?: Maybe<string>;
    client?: Maybe<string>;
    user?: Maybe<string>;
    oAuthUrl?: Maybe<string>;
    wxappLogo?: Maybe<string>;
    fields?: Maybe<
      Array<
        Maybe<{
          label?: Maybe<string>;
          type?: Maybe<string>;
          placeholder?: Maybe<string>;
          value?: Maybe<string>;
          checked?: Maybe<Array<Maybe<string>>>;
        }>
      >
    >;
    oauth?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      alias?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      enabled?: Maybe<boolean>;
      url?: Maybe<string>;
      client?: Maybe<string>;
      user?: Maybe<string>;
      oAuthUrl?: Maybe<string>;
      wxappLogo?: Maybe<string>;
    }>;
  }>;
};

export type UpdateEmailProviderVariables = Exact<{
  options?: Maybe<EmailProviderListInput>;
}>;

export type UpdateEmailProvider = {
  UpdateEmailProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    image?: Maybe<string>;
    description?: Maybe<string>;
    client?: Maybe<string>;
    user?: Maybe<string>;
    status?: Maybe<boolean>;
    fields?: Maybe<
      Array<
        Maybe<{
          label?: Maybe<string>;
          type?: Maybe<string>;
          placeholder?: Maybe<string>;
          help?: Maybe<string>;
          value?: Maybe<string>;
          options?: Maybe<Array<Maybe<string>>>;
        }>
      >
    >;
    provider?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      client?: Maybe<string>;
      user?: Maybe<string>;
      status?: Maybe<boolean>;
    }>;
  }>;
};

export type UpdateEmailTemplateVariables = Exact<{
  options: EmailTemplateInput;
}>;

export type UpdateEmailTemplate = {
  UpdateEmailTemplate?: Maybe<{
    _id?: Maybe<string>;
    type?: Maybe<string>;
    sender?: Maybe<string>;
    object?: Maybe<string>;
    hasURL?: Maybe<boolean>;
    URLExpireTime?: Maybe<number>;
    status?: Maybe<boolean>;
    redirectTo?: Maybe<string>;
    content?: Maybe<string>;
  }>;
};

export type UpdateEmailTemplateWithClientVariables = Exact<{
  options: EmailTemplateWithClientInput;
}>;

export type UpdateEmailTemplateWithClient = {
  UpdateEmailTemplateWithClient?: Maybe<{
    _id?: Maybe<string>;
    user?: Maybe<string>;
    client?: Maybe<string>;
    status?: Maybe<boolean>;
    fields?: Maybe<
      Array<
        Maybe<{
          label?: Maybe<string>;
          type?: Maybe<string>;
          placeholder?: Maybe<string>;
          help?: Maybe<string>;
          value?: Maybe<string>;
          options?: Maybe<Array<Maybe<string>>>;
        }>
      >
    >;
    provider?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
    }>;
  }>;
};

export type UpdateLdapServerVariables = Exact<{
  ldapId: Scalars['String'];
  name: Scalars['String'];
  clientId: Scalars['String'];
  userId: Scalars['String'];
  ldapLink: Scalars['String'];
  baseDN: Scalars['String'];
  username: Scalars['String'];
  searchStandard: Scalars['String'];
  password: Scalars['String'];
  emailPostfix?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
}>;

export type UpdateLdapServer = {
  UpdateLDAPServer?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    clientId?: Maybe<string>;
    userId?: Maybe<string>;
    ldapLink?: Maybe<string>;
    baseDN?: Maybe<string>;
    searchStandard?: Maybe<string>;
    emailPostfix?: Maybe<string>;
    username?: Maybe<string>;
    password?: Maybe<string>;
    description?: Maybe<string>;
    enabled?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type UpdateOAuthListVariables = Exact<{
  options?: Maybe<OAuthListUpdateInput>;
  fields?: Maybe<Array<Maybe<OAuthListFieldsFormUpdateInput>>>;
}>;

export type UpdateOAuthList = {
  UpdateOAuthList?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    alias?: Maybe<string>;
    image?: Maybe<string>;
    description?: Maybe<string>;
    enabled?: Maybe<boolean>;
    url?: Maybe<string>;
    client?: Maybe<string>;
    user?: Maybe<string>;
    oAuthUrl?: Maybe<string>;
    wxappLogo?: Maybe<string>;
    fields?: Maybe<
      Array<
        Maybe<{
          label?: Maybe<string>;
          type?: Maybe<string>;
          placeholder?: Maybe<string>;
          value?: Maybe<string>;
          checked?: Maybe<Array<Maybe<string>>>;
        }>
      >
    >;
    oauth?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      alias?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      enabled?: Maybe<boolean>;
      url?: Maybe<string>;
      client?: Maybe<string>;
      user?: Maybe<string>;
      oAuthUrl?: Maybe<string>;
      wxappLogo?: Maybe<string>;
    }>;
  }>;
};

export type UpdateOAuthProviderVariables = Exact<{
  appId: Scalars['String'];
  domain?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  redirectUris?: Maybe<Array<Maybe<Scalars['String']>>>;
  grants?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  homepageURL?: Maybe<Scalars['String']>;
  css?: Maybe<Scalars['String']>;
  casExpire?: Maybe<Scalars['Int']>;
}>;

export type UpdateOAuthProvider = {
  UpdateOAuthProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirectUris?: Maybe<Array<Maybe<string>>>;
    appSecret?: Maybe<string>;
    client_id?: Maybe<string>;
    clientId?: Maybe<string>;
    grants?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    loginUrl?: Maybe<string>;
    casExpire?: Maybe<number>;
  }>;
};

export type UpdateOidcAppVariables = Exact<{
  appId: Scalars['String'];
  domain?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  redirect_uris?: Maybe<Array<Maybe<Scalars['String']>>>;
  token_endpoint_auth_method?: Maybe<Scalars['String']>;
  grant_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  response_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_token_signed_response_alg?: Maybe<Scalars['String']>;
  id_token_encrypted_response_alg?: Maybe<Scalars['String']>;
  id_token_encrypted_response_enc?: Maybe<Scalars['String']>;
  userinfo_signed_response_alg?: Maybe<Scalars['String']>;
  userinfo_encrypted_response_alg?: Maybe<Scalars['String']>;
  userinfo_encrypted_response_enc?: Maybe<Scalars['String']>;
  request_object_signing_alg?: Maybe<Scalars['String']>;
  request_object_encryption_alg?: Maybe<Scalars['String']>;
  request_object_encryption_enc?: Maybe<Scalars['String']>;
  jwks_uri?: Maybe<Scalars['String']>;
  _jwks_uri?: Maybe<Scalars['String']>;
  custom_jwks?: Maybe<Scalars['String']>;
  jwks?: Maybe<Scalars['String']>;
  _jwks?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  homepageURL?: Maybe<Scalars['String']>;
  css?: Maybe<Scalars['String']>;
  authorization_code_expire?: Maybe<Scalars['String']>;
  id_token_expire?: Maybe<Scalars['String']>;
  access_token_expire?: Maybe<Scalars['String']>;
  refresh_token_expire?: Maybe<Scalars['String']>;
  cas_expire?: Maybe<Scalars['String']>;
  customStyles?: Maybe<OidcProviderCustomStylesInput>;
  isForTeamory?: Maybe<Scalars['Boolean']>;
  confirmAuthorization?: Maybe<Scalars['Boolean']>;
}>;

export type UpdateOidcApp = {
  UpdateOIDCApp?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirect_uris?: Maybe<Array<Maybe<string>>>;
    client_id?: Maybe<string>;
    client_secret?: Maybe<string>;
    token_endpoint_auth_method?: Maybe<string>;
    id_token_signed_response_alg?: Maybe<string>;
    id_token_encrypted_response_alg?: Maybe<string>;
    id_token_encrypted_response_enc?: Maybe<string>;
    userinfo_signed_response_alg?: Maybe<string>;
    userinfo_encrypted_response_alg?: Maybe<string>;
    userinfo_encrypted_response_enc?: Maybe<string>;
    request_object_signing_alg?: Maybe<string>;
    request_object_encryption_alg?: Maybe<string>;
    request_object_encryption_enc?: Maybe<string>;
    jwks_uri?: Maybe<string>;
    _jwks_uri?: Maybe<string>;
    custom_jwks?: Maybe<string>;
    jwks?: Maybe<string>;
    _jwks?: Maybe<string>;
    clientId?: Maybe<string>;
    grant_types?: Maybe<Array<Maybe<string>>>;
    response_types?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    isDefault?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    authorization_code_expire?: Maybe<string>;
    id_token_expire?: Maybe<string>;
    access_token_expire?: Maybe<string>;
    refresh_token_expire?: Maybe<string>;
    cas_expire?: Maybe<string>;
    loginUrl?: Maybe<string>;
    isForTeamory?: Maybe<boolean>;
    confirmAuthorization?: Maybe<boolean>;
    customStyles?: Maybe<{
      forceLogin?: Maybe<boolean>;
      hideQRCode?: Maybe<boolean>;
      hideUP?: Maybe<boolean>;
      hideUsername?: Maybe<boolean>;
      hideRegister?: Maybe<boolean>;
      hidePhone?: Maybe<boolean>;
      hideSocial?: Maybe<boolean>;
      hideClose?: Maybe<boolean>;
      hidePhonePassword?: Maybe<boolean>;
      defaultLoginMethod?: Maybe<OidcProviderDefaultLoginMethod>;
    }>;
  }>;
};

export type UpdateSamlIdentityProviderVariables = Exact<{
  appId: Scalars['String'];
  clientId: Scalars['String'];
  domain?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  SPMetadata?: Maybe<Scalars['String']>;
  attributeNameFormat?: Maybe<Scalars['String']>;
  customAttributes?: Maybe<Scalars['String']>;
  emailDomainTransformation?: Maybe<Scalars['String']>;
  authnContextClassRef?: Maybe<Scalars['String']>;
  IdPMetadata?: Maybe<Scalars['String']>;
  assertionConsumerUrl?: Maybe<Scalars['String']>;
  bindings?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  attributes?: Maybe<Array<Maybe<Scalars['String']>>>;
  enableSignRes?: Maybe<Scalars['Boolean']>;
  resSignAlgorithm?: Maybe<Scalars['String']>;
  resAbstractAlgorithm?: Maybe<Scalars['String']>;
  resSignPublicKey?: Maybe<Scalars['String']>;
  resSignPrivateKey?: Maybe<Scalars['String']>;
  resSignPrivateKeyPass?: Maybe<Scalars['String']>;
  enableSignReq?: Maybe<Scalars['Boolean']>;
  reqSignPublicKey?: Maybe<Scalars['String']>;
  enableEncryptRes?: Maybe<Scalars['Boolean']>;
  resEncryptPublicKey?: Maybe<Scalars['String']>;
  css?: Maybe<Scalars['String']>;
}>;

export type UpdateSamlIdentityProvider = {
  UpdateSAMLIdentityProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    attributeNameFormat?: Maybe<string>;
    customAttributes?: Maybe<string>;
    emailDomainTransformation?: Maybe<string>;
    authnContextClassRef?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    assertionConsumerUrl?: Maybe<string>;
    bindings?: Maybe<Array<Maybe<string>>>;
    nameIds?: Maybe<Array<Maybe<string>>>;
    attributes?: Maybe<Array<Maybe<string>>>;
    enableSignRes?: Maybe<boolean>;
    resSignAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resSignPublicKey?: Maybe<string>;
    resSignPrivateKey?: Maybe<string>;
    resSignPrivateKeyPass?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignPublicKey?: Maybe<string>;
    enableEncryptRes?: Maybe<boolean>;
    resEncryptPublicKey?: Maybe<string>;
    css?: Maybe<string>;
  }>;
};

export type UpdateSamlServiceProviderVariables = Exact<{
  appId: Scalars['String'];
  name: Scalars['String'];
  domain: Scalars['String'];
  clientId: Scalars['String'];
  redirectUrl: Scalars['String'];
  loginUrl: Scalars['String'];
  logoutUrl: Scalars['String'];
  nameId: Scalars['String'];
  IdPEntityID?: Maybe<Scalars['String']>;
  assertionConsumeService?: Maybe<
    Array<Maybe<AssertionConsumeServiceInputType>>
  >;
  image?: Maybe<Scalars['String']>;
  mappings?: Maybe<AssertionMapInputType>;
  defaultIdPMapId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  SPMetadata?: Maybe<Scalars['String']>;
  IdPMetadata?: Maybe<Scalars['String']>;
  enableSignRes?: Maybe<Scalars['Boolean']>;
  resSignPublicKey?: Maybe<Scalars['String']>;
  hasResEncrypted?: Maybe<Scalars['Boolean']>;
  resEncryptAlgorithm?: Maybe<Scalars['String']>;
  resAbstractAlgorithm?: Maybe<Scalars['String']>;
  resDecryptPrivateKey?: Maybe<Scalars['String']>;
  resDecryptPrivateKeyPass?: Maybe<Scalars['String']>;
  resEncryptPublicKey?: Maybe<Scalars['String']>;
  enableSignReq?: Maybe<Scalars['Boolean']>;
  reqSignAlgorithm?: Maybe<Scalars['String']>;
  reqAbstractAlgorithm?: Maybe<Scalars['String']>;
  reqSignPrivateKey?: Maybe<Scalars['String']>;
  reqSignPrivateKeyPass?: Maybe<Scalars['String']>;
  reqSignPublicKey?: Maybe<Scalars['String']>;
}>;

export type UpdateSamlServiceProvider = {
  UpdateSAMLServiceProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    defaultIdPMapId?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    IdPEntityID?: Maybe<string>;
    redirectUrl: string;
    loginUrl: string;
    logoutUrl: string;
    nameId: string;
    enableSignRes?: Maybe<boolean>;
    resSignPublicKey?: Maybe<string>;
    hasResEncrypted?: Maybe<boolean>;
    resEncryptAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resDecryptPrivateKey?: Maybe<string>;
    resDecryptPrivateKeyPass?: Maybe<string>;
    resEncryptPublicKey?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignAlgorithm?: Maybe<string>;
    reqAbstractAlgorithm?: Maybe<string>;
    reqSignPrivateKey?: Maybe<string>;
    reqSignPrivateKeyPass?: Maybe<string>;
    reqSignPublicKey?: Maybe<string>;
    SPUrl?: Maybe<string>;
    defaultIdPMap?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
    }>;
    assertionConsumeService?: Maybe<
      Array<
        Maybe<{
          binding?: Maybe<string>;
          url?: Maybe<string>;
          isDefault?: Maybe<boolean>;
        }>
      >
    >;
    mappings?: Maybe<{
      username?: Maybe<string>;
      nickname?: Maybe<string>;
      photo?: Maybe<string>;
      company?: Maybe<string>;
      providerName?: Maybe<string>;
      email?: Maybe<string>;
    }>;
  }>;
};

export type UpdateSystemPricingVariables = Exact<{
  options?: Maybe<PricingFieldsInput>;
}>;

export type UpdateSystemPricing = {
  UpdateSystemPricing?: Maybe<{
    _id?: Maybe<string>;
    type?: Maybe<string>;
    startNumber?: Maybe<number>;
    freeNumber?: Maybe<number>;
    startPrice?: Maybe<number>;
    maxNumber?: Maybe<number>;
    d?: Maybe<number>;
    features?: Maybe<Array<Maybe<string>>>;
  }>;
};

export type UseDefaultEmailProviderVariables = Exact<{
  user: Scalars['String'];
  client: Scalars['String'];
}>;

export type UseDefaultEmailProvider = {
  UseDefaultEmailProvider?: Maybe<boolean>;
};

export type AddClientWebhookVariables = Exact<{
  client: Scalars['String'];
  events: Array<Scalars['String']>;
  url: Scalars['String'];
  contentType: Scalars['String'];
  enable: Scalars['Boolean'];
  secret?: Maybe<Scalars['String']>;
  isLastTimeSuccess?: Maybe<Scalars['Boolean']>;
}>;

export type AddClientWebhook = {
  addClientWebhook?: Maybe<{
    _id?: Maybe<string>;
    client: string;
    url: string;
    isLastTimeSuccess?: Maybe<boolean>;
    contentType: string;
    secret?: Maybe<string>;
    enable: boolean;
    events: Array<{ name: string; label: string; description?: Maybe<string> }>;
  }>;
};

export type AddCollaboratorVariables = Exact<{
  userPoolId: Scalars['String'];
  collaboratorUserId: Scalars['String'];
  permissionDescriptors: Array<Maybe<PermissionDescriptorsInputType>>;
}>;

export type AddCollaborator = {
  addCollaborator?: Maybe<{
    _id?: Maybe<string>;
    createdAt?: Maybe<string>;
    owner?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    collaborator?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    userPool?: Maybe<{
      _id?: Maybe<string>;
      iamType?: Maybe<IamType>;
      domain?: Maybe<string>;
      userLimit?: Maybe<number>;
      usersCount?: Maybe<number>;
      logo?: Maybe<string>;
      emailVerifiedDefault?: Maybe<boolean>;
      sendWelcomeEmail?: Maybe<boolean>;
      registerDisabled?: Maybe<boolean>;
      showWXMPQRCode?: Maybe<boolean>;
      useMiniLogin?: Maybe<boolean>;
      useSelfWxapp?: Maybe<boolean>;
      allowedOrigins?: Maybe<string>;
      name?: Maybe<string>;
      secret?: Maybe<string>;
      token?: Maybe<string>;
      descriptions?: Maybe<string>;
      jwtExpired?: Maybe<number>;
      createdAt?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
      enableEmail?: Maybe<boolean>;
    }>;
    permissionDescriptors?: Maybe<
      Array<
        Maybe<{
          permissionId?: Maybe<string>;
          name?: Maybe<string>;
          operationAllow?: Maybe<number>;
        }>
      >
    >;
  }>;
};

export type AddDingTalkCorpVariables = Exact<{
  input: CreateDingTalkCorpInput;
}>;

export type AddDingTalkCorp = {
  addDingTalkCorp?: Maybe<{
    corpId: string;
    twoWaySynchronizationOn: boolean;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    AESKey?: Maybe<string>;
    token?: Maybe<string>;
    orgId?: Maybe<string>;
  }>;
};

export type AddGroupMetadataVariables = Exact<{
  groupId: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
}>;

export type AddGroupMetadata = {
  addGroupMetadata: Array<{ key: string; value: string }>;
};

export type AddOrgNodeVariables = Exact<{
  input: AddOrgNodeInput;
}>;

export type AddOrgNode = {
  addOrgNode: {
    _id: string;
    logo?: Maybe<string>;
    nodes: Array<{
      _id: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children: Array<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
    }>;
  };
};

export type AddPermissionVariables = Exact<{
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;

export type AddPermission = {
  addPermission?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    affect?: Maybe<string>;
    description?: Maybe<string>;
  }>;
};

export type AddPermissionToRbacRoleVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: AddPermissionToRbacRoleInput;
}>;

export type AddPermissionToRbacRole = {
  addPermissionToRBACRole: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type AddPermissionToRbacRoleBatchVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input?: Maybe<AddPermissionToRbacRoleBatchInput>;
}>;

export type AddPermissionToRbacRoleBatch = {
  addPermissionToRBACRoleBatch: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type AddRoleToRbacGroupVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: AddRoleToRbacGroupInput;
}>;

export type AddRoleToRbacGroup = {
  addRoleToRBACGroup: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type AddRoleToRbacGroupBatchVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: AddRoleToRbacGroupBatchInput;
}>;

export type AddRoleToRbacGroupBatch = {
  addRoleToRBACGroupBatch: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type AddSuperAdminUserVariables = Exact<{
  options: SuperAdminUpdateInput;
}>;

export type AddSuperAdminUser = {
  addSuperAdminUser?: Maybe<{
    email?: Maybe<string>;
    username?: Maybe<string>;
    _id?: Maybe<string>;
    upgrade?: Maybe<boolean>;
  }>;
};

export type AddToInvitationVariables = Exact<{
  client: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
}>;

export type AddToInvitation = {
  addToInvitation?: Maybe<{
    client: string;
    phone?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type AddUserToRbacGroupVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: AddUserToRbacGroupInput;
}>;

export type AddUserToRbacGroup = {
  addUserToRBACGroup: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type AddUserToRbacGroupBatchVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: AddUserToRbacGroupBatchInput;
}>;

export type AddUserToRbacGroupBatch = {
  addUserToRBACGroupBatch: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type AddWechatWorkCorpVariables = Exact<{
  input: CreateWechatWorkCorpInput;
}>;

export type AddWechatWorkCorp = {
  addWechatWorkCorp?: Maybe<{
    corpId: string;
    corpName: string;
    addressBookSyncHelperSecret: string;
    addressBookSyncHelperToken: string;
    addressBookSyncHelperEncodingAESKey: string;
    twoWaySynchronizationOn: boolean;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    orgId?: Maybe<string>;
  }>;
};

export type AssignRbacRoleToUserVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: AssignUserToRbacRoleInput;
}>;

export type AssignRbacRoleToUser = {
  assignRBACRoleToUser: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type AssignRbacRoleToUserBatchVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: AssignUserToRbacRoleBatchInput;
}>;

export type AssignRbacRoleToUserBatch = {
  assignRBACRoleToUserBatch: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type AssignUserToRoleVariables = Exact<{
  client: Scalars['String'];
  user: Scalars['String'];
  group: Scalars['String'];
}>;

export type AssignUserToRole = {
  assignUserToRole?: Maybe<{
    totalCount: number;
    list?: Maybe<
      Array<Maybe<{ _id?: Maybe<string>; createdAt?: Maybe<string> }>>
    >;
  }>;
};

export type BindOtherOAuthVariables = Exact<{
  type: Scalars['String'];
  unionid: Scalars['String'];
  userInfo: Scalars['String'];
  client?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
}>;

export type BindOtherOAuth = {
  bindOtherOAuth?: Maybe<{
    _id?: Maybe<string>;
    user?: Maybe<string>;
    client?: Maybe<string>;
    type?: Maybe<string>;
    unionid?: Maybe<string>;
    userInfo?: Maybe<string>;
    createdAt?: Maybe<string>;
  }>;
};

export type ChangeMfaVariables = Exact<{
  enable: Scalars['Boolean'];
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  refreshKey?: Maybe<Scalars['Boolean']>;
}>;

export type ChangeMfa = {
  changeMFA?: Maybe<{
    _id?: Maybe<string>;
    userId?: Maybe<string>;
    userPoolId?: Maybe<string>;
    enable?: Maybe<boolean>;
    shareKey?: Maybe<string>;
  }>;
};

export type ChangePasswordVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
  client: Scalars['String'];
  verifyCode: Scalars['String'];
}>;

export type ChangePassword = {
  changePassword?: Maybe<{
    _id?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    username?: Maybe<string>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    device?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
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
    metadata?: Maybe<string>;
    salt?: Maybe<string>;
    group?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      client?: Maybe<string>;
      permissions?: Maybe<string>;
      createdAt?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userLocation?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          when?: Maybe<string>;
          where?: Maybe<string>;
        }>
      >
    >;
    userLoginHistory?: Maybe<{ totalCount: number }>;
    systemApplicationType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      price?: Maybe<number>;
    }>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type CreateAdConnectorVariables = Exact<{
  name: Scalars['String'];
  userPoolId: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
}>;

export type CreateAdConnector = {
  createAdConnector?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    salt?: Maybe<string>;
    logo?: Maybe<string>;
    enabled?: Maybe<boolean>;
    userPoolId?: Maybe<string>;
    status?: Maybe<boolean>;
    createdAt?: Maybe<string>;
  }>;
};

export type CreateCustomMfaVariables = Exact<{
  userIdInMiniLogin: Scalars['String'];
  userPoolId: Scalars['String'];
  name: Scalars['String'];
  secret: Scalars['String'];
  remark?: Maybe<Scalars['String']>;
}>;

export type CreateCustomMfa = {
  createCustomMFA?: Maybe<{
    _id?: Maybe<string>;
    userIdInMiniLogin?: Maybe<string>;
    remark?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    userPoolId?: Maybe<{
      _id?: Maybe<string>;
      iamType?: Maybe<IamType>;
      domain?: Maybe<string>;
      userLimit?: Maybe<number>;
      usersCount?: Maybe<number>;
      logo?: Maybe<string>;
      emailVerifiedDefault?: Maybe<boolean>;
      sendWelcomeEmail?: Maybe<boolean>;
      registerDisabled?: Maybe<boolean>;
      showWXMPQRCode?: Maybe<boolean>;
      useMiniLogin?: Maybe<boolean>;
      useSelfWxapp?: Maybe<boolean>;
      allowedOrigins?: Maybe<string>;
      name?: Maybe<string>;
      secret?: Maybe<string>;
      token?: Maybe<string>;
      descriptions?: Maybe<string>;
      jwtExpired?: Maybe<number>;
      createdAt?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
      enableEmail?: Maybe<boolean>;
    }>;
  }>;
};

export type CreateInterConnectionVariables = Exact<{
  sourceUserPoolId: Scalars['String'];
  sourceUserId: Scalars['String'];
  targetUserPoolId: Scalars['String'];
  targetUserId: Scalars['String'];
  maxAge: Scalars['Int'];
}>;

export type CreateInterConnection = {
  createInterConnection?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type CreateOrgVariables = Exact<{
  input: CreateOrgInput;
}>;

export type CreateOrg = {
  createOrg: {
    _id: string;
    logo?: Maybe<string>;
    nodes: Array<{
      _id: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children: Array<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
    }>;
  };
};

export type CreateRbacGroupVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: CreateRbacGroupInput;
}>;

export type CreateRbacGroup = {
  createRBACGroup?: Maybe<{
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  }>;
};

export type CreateRbacPermissionVariables = Exact<{
  input: CreateRbacPermissionInput;
}>;

export type CreateRbacPermission = {
  createRBACPermission?: Maybe<{
    _id: string;
    name: string;
    userPoolId: string;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    description?: Maybe<string>;
  }>;
};

export type CreateRbacRoleVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: CreateRbacRoleInput;
}>;

export type CreateRbacRole = {
  createRBACRole?: Maybe<{
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  }>;
};

export type CreateRoleVariables = Exact<{
  client: Scalars['String'];
  name: Scalars['String'];
  descriptions?: Maybe<Scalars['String']>;
}>;

export type CreateRole = {
  createRole?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    descriptions?: Maybe<string>;
    client?: Maybe<string>;
    permissions?: Maybe<string>;
    createdAt?: Maybe<string>;
  }>;
};

export type CreateRuleVariables = Exact<{
  input: CreateRuleInput;
}>;

export type CreateRule = {
  createRule: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    type: RuleTypes;
    enabled: boolean;
    faasUrl: string;
    code: string;
    order?: Maybe<number>;
    async?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  };
};

export type CreateUserVariables = Exact<{
  userInfo: UserRegisterInput;
  invitationCode?: Maybe<Scalars['String']>;
  keepPassword?: Maybe<Scalars['Boolean']>;
}>;

export type CreateUser = {
  createUser?: Maybe<{
    _id?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    username?: Maybe<string>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    device?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
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
    metadata?: Maybe<string>;
    salt?: Maybe<string>;
    group?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      client?: Maybe<string>;
      permissions?: Maybe<string>;
      createdAt?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userLocation?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          when?: Maybe<string>;
          where?: Maybe<string>;
        }>
      >
    >;
    userLoginHistory?: Maybe<{ totalCount: number }>;
    systemApplicationType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      price?: Maybe<number>;
    }>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type CreateUserWithoutAuthenticationVariables = Exact<{
  userPoolId: Scalars['String'];
  userInfo: UserRegisterInput;
  forceLogin?: Maybe<Scalars['Boolean']>;
  keepPassword?: Maybe<Scalars['Boolean']>;
}>;

export type CreateUserWithoutAuthentication = {
  createUserWithoutAuthentication: {
    _id?: Maybe<string>;
    username?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
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
    oldPassword?: Maybe<string>;
    metadata?: Maybe<string>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type DeleteClientWebhookVariables = Exact<{
  id: Scalars['String'];
}>;

export type DeleteClientWebhook = {
  deleteClientWebhook?: Maybe<{
    _id?: Maybe<string>;
    client: string;
    url: string;
    isLastTimeSuccess?: Maybe<boolean>;
    contentType: string;
    secret?: Maybe<string>;
    enable: boolean;
    events: Array<{ name: string; label: string; description?: Maybe<string> }>;
  }>;
};

export type DeleteOrgVariables = Exact<{
  _id: Scalars['String'];
}>;

export type DeleteOrg = {
  deleteOrg: {
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  };
};

export type DeleteRbacGroupVariables = Exact<{
  _id: Scalars['String'];
}>;

export type DeleteRbacGroup = {
  deleteRBACGroup: {
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  };
};

export type DeleteRbacGroupBatchVariables = Exact<{
  idList: Array<Scalars['String']>;
}>;

export type DeleteRbacGroupBatch = {
  deleteRBACGroupBatch: {
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  };
};

export type DeleteRbacPermissionVariables = Exact<{
  _id: Scalars['String'];
}>;

export type DeleteRbacPermission = {
  deleteRBACPermission: {
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  };
};

export type DeleteRbacPermissionBatchVariables = Exact<{
  idList: Array<Scalars['String']>;
}>;

export type DeleteRbacPermissionBatch = {
  deleteRBACPermissionBatch: {
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  };
};

export type DeleteRbacRoleVariables = Exact<{
  _id: Scalars['String'];
}>;

export type DeleteRbacRole = {
  deleteRBACRole?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type DeleteRbacRoleBatchVariables = Exact<{
  idList: Array<Scalars['String']>;
}>;

export type DeleteRbacRoleBatch = {
  deleteRBACRoleBatch: {
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  };
};

export type DeleteRuleVariables = Exact<{
  _id: Scalars['String'];
}>;

export type DeleteRule = {
  deleteRule: {
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  };
};

export type DisableAdConnectorVariables = Exact<{
  _id: Scalars['String'];
}>;

export type DisableAdConnector = { disableAdConnector?: Maybe<boolean> };

export type DisableAdConnectorForProviderVariables = Exact<{
  providerId: Scalars['String'];
  adConnectorId: Scalars['String'];
}>;

export type DisableAdConnectorForProvider = {
  disableAdConnectorForProvider?: Maybe<boolean>;
};

export type EnableAdConnectorVariables = Exact<{
  _id: Scalars['String'];
}>;

export type EnableAdConnector = { enableAdConnector?: Maybe<boolean> };

export type EnableAdConnectorForProviderVariables = Exact<{
  providerType: ProviderType;
  providerId: Scalars['String'];
  adConnectorId: Scalars['String'];
}>;

export type EnableAdConnectorForProvider = {
  enableAdConnectorForProvider?: Maybe<boolean>;
};

export type EnablePasswordFaasVariables = Exact<{
  client: Scalars['String'];
  enable: Scalars['Boolean'];
}>;

export type EnablePasswordFaas = {
  enablePasswordFaas?: Maybe<{
    encryptUrl?: Maybe<string>;
    decryptUrl?: Maybe<string>;
    user?: Maybe<string>;
    client?: Maybe<string>;
    logs?: Maybe<string>;
    enable?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type EncryptPasswordVariables = Exact<{
  password: Scalars['String'];
  client: Scalars['String'];
  isTest?: Maybe<Scalars['Boolean']>;
}>;

export type EncryptPassword = {
  encryptPassword?: Maybe<{
    _id?: Maybe<string>;
    encryptUrl?: Maybe<string>;
    decryptUrl?: Maybe<string>;
    client?: Maybe<string>;
    user?: Maybe<string>;
    logs?: Maybe<string>;
    enable?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    password?: Maybe<string>;
  }>;
};

export type GenerateInvitationCodeVariables = Exact<{
  user: Scalars['String'];
  client: Scalars['String'];
}>;

export type GenerateInvitationCode = {
  generateInvitationCode?: Maybe<{
    _id?: Maybe<string>;
    user?: Maybe<string>;
    client?: Maybe<string>;
    code?: Maybe<string>;
    createdAt?: Maybe<string>;
  }>;
};

export type LoginVariables = Exact<{
  registerInClient: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['Int']>;
  unionid?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lastIP?: Maybe<Scalars['String']>;
  verifyCode?: Maybe<Scalars['String']>;
  MFACode?: Maybe<Scalars['String']>;
  fromRegister?: Maybe<Scalars['Boolean']>;
  device?: Maybe<Scalars['String']>;
  browser?: Maybe<Scalars['String']>;
  params?: Maybe<Scalars['String']>;
}>;

export type Login = {
  login?: Maybe<{
    _id?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    username?: Maybe<string>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    device?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
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
    metadata?: Maybe<string>;
    salt?: Maybe<string>;
    group?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      client?: Maybe<string>;
      permissions?: Maybe<string>;
      createdAt?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userLocation?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          when?: Maybe<string>;
          where?: Maybe<string>;
        }>
      >
    >;
    userLoginHistory?: Maybe<{ totalCount: number }>;
    systemApplicationType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      price?: Maybe<number>;
    }>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type LoginByAdVariables = Exact<{
  adConnectorId: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginByAd = {
  loginByAd?: Maybe<{
    _id?: Maybe<string>;
    username?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
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
    oldPassword?: Maybe<string>;
    metadata?: Maybe<string>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type NewClientVariables = Exact<{
  client: NewUserClientInput;
}>;

export type NewClient = {
  newClient?: Maybe<{
    _id?: Maybe<string>;
    iamType?: Maybe<IamType>;
    domain?: Maybe<string>;
    userLimit?: Maybe<number>;
    usersCount?: Maybe<number>;
    logo?: Maybe<string>;
    emailVerifiedDefault?: Maybe<boolean>;
    sendWelcomeEmail?: Maybe<boolean>;
    registerDisabled?: Maybe<boolean>;
    showWXMPQRCode?: Maybe<boolean>;
    useMiniLogin?: Maybe<boolean>;
    useSelfWxapp?: Maybe<boolean>;
    allowedOrigins?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    token?: Maybe<string>;
    descriptions?: Maybe<string>;
    jwtExpired?: Maybe<number>;
    createdAt?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enableEmail?: Maybe<boolean>;
    user?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userPoolTypes?: Maybe<
      Array<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        example?: Maybe<string>;
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
  }>;
};

export type OauthPasswordLoginVariables = Exact<{
  registerInClient: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  unionid?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  lastIP?: Maybe<Scalars['String']>;
  verifyCode?: Maybe<Scalars['String']>;
}>;

export type OauthPasswordLogin = {
  oauthPasswordLogin?: Maybe<{
    _id?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    username?: Maybe<string>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    device?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
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
    metadata?: Maybe<string>;
    salt?: Maybe<string>;
    group?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      client?: Maybe<string>;
      permissions?: Maybe<string>;
      createdAt?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userLocation?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          when?: Maybe<string>;
          where?: Maybe<string>;
        }>
      >
    >;
    userLoginHistory?: Maybe<{ totalCount: number }>;
    systemApplicationType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      price?: Maybe<number>;
    }>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type OrderVariables = Exact<{
  options: OrderAddInput;
}>;

export type Order = {
  order?: Maybe<{
    code?: Maybe<number>;
    url?: Maybe<string>;
    charge?: Maybe<string>;
  }>;
};

export type PasswordLessForceLoginVariables = Exact<{
  userPoolId: Scalars['String'];
  userId: Scalars['String'];
}>;

export type PasswordLessForceLogin = {
  passwordLessForceLogin: {
    _id?: Maybe<string>;
    username?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
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
    oldPassword?: Maybe<string>;
    metadata?: Maybe<string>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type RecordAuthAuditVariables = Exact<{
  userPoolId: Scalars['String'];
  appType: Scalars['String'];
  appId: Scalars['String'];
  userId: Scalars['String'];
  event: Scalars['String'];
  message?: Maybe<Scalars['String']>;
}>;

export type RecordAuthAudit = {
  recordAuthAudit?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type RecordRequestVariables = Exact<{
  when: Scalars['String'];
  ip: Scalars['String'];
  responseTime: Scalars['Int'];
  size: Scalars['Int'];
  from?: Maybe<Scalars['String']>;
}>;

export type RecordRequest = {
  recordRequest?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type RefreshAccessTokenVariables = Exact<{
  userPoolId: Scalars['String'];
  accessToken: Scalars['String'];
}>;

export type RefreshAccessToken = {
  refreshAccessToken: { accessToken: string };
};

export type RefreshAdConnectorSecretVariables = Exact<{
  _id?: Maybe<Scalars['String']>;
}>;

export type RefreshAdConnectorSecret = {
  refreshAdConnectorSecret?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    salt?: Maybe<string>;
    logo?: Maybe<string>;
    enabled?: Maybe<boolean>;
    userPoolId?: Maybe<string>;
    status?: Maybe<boolean>;
    createdAt?: Maybe<string>;
  }>;
};

export type RefreshAppSecretVariables = Exact<{
  client: UpdateUserClientInput;
}>;

export type RefreshAppSecret = {
  refreshAppSecret?: Maybe<{
    _id?: Maybe<string>;
    iamType?: Maybe<IamType>;
    domain?: Maybe<string>;
    userLimit?: Maybe<number>;
    usersCount?: Maybe<number>;
    logo?: Maybe<string>;
    emailVerifiedDefault?: Maybe<boolean>;
    sendWelcomeEmail?: Maybe<boolean>;
    registerDisabled?: Maybe<boolean>;
    showWXMPQRCode?: Maybe<boolean>;
    useMiniLogin?: Maybe<boolean>;
    useSelfWxapp?: Maybe<boolean>;
    allowedOrigins?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    token?: Maybe<string>;
    descriptions?: Maybe<string>;
    jwtExpired?: Maybe<number>;
    createdAt?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enableEmail?: Maybe<boolean>;
    user?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userPoolTypes?: Maybe<
      Array<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        example?: Maybe<string>;
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
  }>;
};

export type RefreshSignInTokenVariables = Exact<{
  refreshToken: Scalars['String'];
  oidcAppId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
}>;

export type RefreshSignInToken = {
  refreshSignInToken?: Maybe<{
    access_token?: Maybe<string>;
    id_token?: Maybe<string>;
    refresh_token?: Maybe<string>;
    scope?: Maybe<string>;
    expires_in?: Maybe<number>;
  }>;
};

export type RefreshThirdPartyTokenVariables = Exact<{
  userPoolId: Scalars['String'];
  userId: Scalars['String'];
}>;

export type RefreshThirdPartyToken = {
  refreshThirdPartyToken?: Maybe<{
    refreshSuccess?: Maybe<boolean>;
    message?: Maybe<string>;
    provider?: Maybe<string>;
    refreshToken?: Maybe<string>;
    accessToken?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type RefreshTokenVariables = Exact<{
  client: Scalars['String'];
  user: Scalars['String'];
}>;

export type RefreshToken = {
  refreshToken?: Maybe<{
    token?: Maybe<string>;
    iat?: Maybe<number>;
    exp?: Maybe<number>;
  }>;
};

export type RegisterVariables = Exact<{
  userInfo: UserRegisterInput;
  invitationCode?: Maybe<Scalars['String']>;
  keepPassword?: Maybe<Scalars['Boolean']>;
}>;

export type Register = {
  register?: Maybe<{
    _id?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    username?: Maybe<string>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    device?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
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
    metadata?: Maybe<string>;
    salt?: Maybe<string>;
    group?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      client?: Maybe<string>;
      permissions?: Maybe<string>;
      createdAt?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userLocation?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          when?: Maybe<string>;
          where?: Maybe<string>;
        }>
      >
    >;
    userLoginHistory?: Maybe<{ totalCount: number }>;
    systemApplicationType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      price?: Maybe<number>;
    }>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type RemoveAdConnectorVariables = Exact<{
  _id: Scalars['String'];
}>;

export type RemoveAdConnector = { removeAdConnector?: Maybe<boolean> };

export type RemoveCollaboratorVariables = Exact<{
  collaborationId: Scalars['String'];
}>;

export type RemoveCollaborator = {
  removeCollaborator?: Maybe<{
    _id?: Maybe<string>;
    createdAt?: Maybe<string>;
    owner?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    collaborator?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    userPool?: Maybe<{
      _id?: Maybe<string>;
      iamType?: Maybe<IamType>;
      domain?: Maybe<string>;
      userLimit?: Maybe<number>;
      usersCount?: Maybe<number>;
      logo?: Maybe<string>;
      emailVerifiedDefault?: Maybe<boolean>;
      sendWelcomeEmail?: Maybe<boolean>;
      registerDisabled?: Maybe<boolean>;
      showWXMPQRCode?: Maybe<boolean>;
      useMiniLogin?: Maybe<boolean>;
      useSelfWxapp?: Maybe<boolean>;
      allowedOrigins?: Maybe<string>;
      name?: Maybe<string>;
      secret?: Maybe<string>;
      token?: Maybe<string>;
      descriptions?: Maybe<string>;
      jwtExpired?: Maybe<number>;
      createdAt?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
      enableEmail?: Maybe<boolean>;
    }>;
    permissionDescriptors?: Maybe<
      Array<
        Maybe<{
          permissionId?: Maybe<string>;
          name?: Maybe<string>;
          operationAllow?: Maybe<number>;
        }>
      >
    >;
  }>;
};

export type RemoveCustomMfaVariables = Exact<{
  _id: Scalars['String'];
}>;

export type RemoveCustomMfa = {
  removeCustomMFA?: Maybe<{
    _id?: Maybe<string>;
    userIdInMiniLogin?: Maybe<string>;
    remark?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    userPoolId?: Maybe<{
      _id?: Maybe<string>;
      iamType?: Maybe<IamType>;
      domain?: Maybe<string>;
      userLimit?: Maybe<number>;
      usersCount?: Maybe<number>;
      logo?: Maybe<string>;
      emailVerifiedDefault?: Maybe<boolean>;
      sendWelcomeEmail?: Maybe<boolean>;
      registerDisabled?: Maybe<boolean>;
      showWXMPQRCode?: Maybe<boolean>;
      useMiniLogin?: Maybe<boolean>;
      useSelfWxapp?: Maybe<boolean>;
      allowedOrigins?: Maybe<string>;
      name?: Maybe<string>;
      secret?: Maybe<string>;
      token?: Maybe<string>;
      descriptions?: Maybe<string>;
      jwtExpired?: Maybe<number>;
      createdAt?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
      enableEmail?: Maybe<boolean>;
    }>;
  }>;
};

export type RemoveFromInvitationVariables = Exact<{
  client: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
}>;

export type RemoveFromInvitation = {
  removeFromInvitation?: Maybe<{
    client: string;
    phone?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type RemoveGroupMetadataVariables = Exact<{
  groupId: Scalars['String'];
  key: Scalars['String'];
}>;

export type RemoveGroupMetadata = {
  removeGroupMetadata: Array<{ key: string; value: string }>;
};

export type RemoveOrgNodeVariables = Exact<{
  input: RemoveOrgNodeInput;
}>;

export type RemoveOrgNode = {
  removeOrgNode: {
    _id: string;
    logo?: Maybe<string>;
    nodes: Array<{
      _id: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children: Array<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
    }>;
  };
};

export type RemovePermissionFromRbacRoleVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: RemovePermissionFromRbacRoleInput;
}>;

export type RemovePermissionFromRbacRole = {
  removePermissionFromRBACRole: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type RemovePermissionFromRbacRoleBatchVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: RemovePermissionFromRbacRoleBatchInput;
}>;

export type RemovePermissionFromRbacRoleBatch = {
  removePermissionFromRBACRoleBatch: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type RemoveRoleFromRbacGroupVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: RemoveRoleFromRbacGroupInput;
}>;

export type RemoveRoleFromRbacGroup = {
  removeRoleFromRBACGroup: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type RemoveRoleFromRbacGroupBatchVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: RemoveRoleFromRbacGroupBatchInput;
}>;

export type RemoveRoleFromRbacGroupBatch = {
  removeRoleFromRBACGroupBatch: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type RemoveRuleEnvVariables = Exact<{
  input: RemoveRuleEnvInput;
}>;

export type RemoveRuleEnv = {
  removeRuleEnv: {
    totalCount: number;
    list: Array<{ key: string; value: string }>;
  };
};

export type RemoveSamlIdpFieldMappingVariables = Exact<{
  sourceExpression: Scalars['String'];
  idpId: Scalars['String'];
}>;

export type RemoveSamlIdpFieldMapping = {
  removeSAMLIdpFieldMapping?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type RemoveSuperAdminUserVariables = Exact<{
  _id: Scalars['String'];
  username: Scalars['String'];
}>;

export type RemoveSuperAdminUser = {
  removeSuperAdminUser?: Maybe<{
    email?: Maybe<string>;
    username?: Maybe<string>;
    _id?: Maybe<string>;
    upgrade?: Maybe<boolean>;
  }>;
};

export type RemoveUserClientsVariables = Exact<{
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;

export type RemoveUserClients = {
  removeUserClients?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        iamType?: Maybe<IamType>;
        domain?: Maybe<string>;
        userLimit?: Maybe<number>;
        usersCount?: Maybe<number>;
        logo?: Maybe<string>;
        emailVerifiedDefault?: Maybe<boolean>;
        sendWelcomeEmail?: Maybe<boolean>;
        registerDisabled?: Maybe<boolean>;
        showWXMPQRCode?: Maybe<boolean>;
        useMiniLogin?: Maybe<boolean>;
        useSelfWxapp?: Maybe<boolean>;
        allowedOrigins?: Maybe<string>;
        name?: Maybe<string>;
        secret?: Maybe<string>;
        token?: Maybe<string>;
        descriptions?: Maybe<string>;
        jwtExpired?: Maybe<number>;
        createdAt?: Maybe<string>;
        isDeleted?: Maybe<boolean>;
        enableEmail?: Maybe<boolean>;
        user?: Maybe<{
          _id?: Maybe<string>;
          username?: Maybe<string>;
          email?: Maybe<string>;
          unionid?: Maybe<string>;
          openid?: Maybe<string>;
          emailVerified?: Maybe<boolean>;
          phone?: Maybe<string>;
          phoneVerified?: Maybe<boolean>;
          nickname?: Maybe<string>;
          company?: Maybe<string>;
          photo?: Maybe<string>;
          browser?: Maybe<string>;
          password?: Maybe<string>;
          registerInClient?: Maybe<string>;
          registerMethod?: Maybe<string>;
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
          oldPassword?: Maybe<string>;
          metadata?: Maybe<string>;
        }>;
        clientType?: Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          description?: Maybe<string>;
          image?: Maybe<string>;
          example?: Maybe<string>;
        }>;
        userPoolTypes?: Maybe<
          Array<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            example?: Maybe<string>;
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
      }>
    >
  >;
};

export type RemoveUserFromGroupVariables = Exact<{
  client: Scalars['String'];
  user: Scalars['String'];
  group: Scalars['String'];
}>;

export type RemoveUserFromGroup = {
  removeUserFromGroup?: Maybe<{
    _id?: Maybe<string>;
    createdAt?: Maybe<string>;
    user?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    client?: Maybe<{
      _id?: Maybe<string>;
      iamType?: Maybe<IamType>;
      domain?: Maybe<string>;
      userLimit?: Maybe<number>;
      usersCount?: Maybe<number>;
      logo?: Maybe<string>;
      emailVerifiedDefault?: Maybe<boolean>;
      sendWelcomeEmail?: Maybe<boolean>;
      registerDisabled?: Maybe<boolean>;
      showWXMPQRCode?: Maybe<boolean>;
      useMiniLogin?: Maybe<boolean>;
      useSelfWxapp?: Maybe<boolean>;
      allowedOrigins?: Maybe<string>;
      name?: Maybe<string>;
      secret?: Maybe<string>;
      token?: Maybe<string>;
      descriptions?: Maybe<string>;
      jwtExpired?: Maybe<number>;
      createdAt?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
      enableEmail?: Maybe<boolean>;
    }>;
    group?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      client?: Maybe<string>;
      permissions?: Maybe<string>;
      createdAt?: Maybe<string>;
    }>;
  }>;
};

export type RemoveUserFromRbacGroupVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: RemoveUserFromRbacGroupInput;
}>;

export type RemoveUserFromRbacGroup = {
  removeUserFromRBACGroup: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type RemoveUserFromRbacGroupBatchVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: RemoveUserFromRbacGroupBatchInput;
}>;

export type RemoveUserFromRbacGroupBatch = {
  removeUserFromRBACGroupBatch: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type RemoveUserMetadataVariables = Exact<{
  input: RemoveUserMetadataInput;
}>;

export type RemoveUserMetadata = {
  removeUserMetadata: {
    totalCount: number;
    list: Array<{ key: string; value: string }>;
  };
};

export type RemoveUsersVariables = Exact<{
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  registerInClient?: Maybe<Scalars['String']>;
  operator?: Maybe<Scalars['String']>;
}>;

export type RemoveUsers = {
  removeUsers?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        username?: Maybe<string>;
        email?: Maybe<string>;
        unionid?: Maybe<string>;
        openid?: Maybe<string>;
        emailVerified?: Maybe<boolean>;
        phone?: Maybe<string>;
        phoneVerified?: Maybe<boolean>;
        nickname?: Maybe<string>;
        company?: Maybe<string>;
        photo?: Maybe<string>;
        browser?: Maybe<string>;
        password?: Maybe<string>;
        registerInClient?: Maybe<string>;
        registerMethod?: Maybe<string>;
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
        oldPassword?: Maybe<string>;
        metadata?: Maybe<string>;
        thirdPartyIdentity?: Maybe<{
          provider?: Maybe<string>;
          refreshToken?: Maybe<string>;
          accessToken?: Maybe<string>;
          expiresIn?: Maybe<number>;
          updatedAt?: Maybe<string>;
        }>;
      }>
    >
  >;
};

export type ResetUserPoolFromWechatVariables = Exact<{
  client: Scalars['String'];
  registerMethod: Scalars['String'];
  limit: Scalars['Int'];
}>;

export type ResetUserPoolFromWechat = {
  resetUserPoolFromWechat?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          email?: Maybe<string>;
          unionid?: Maybe<string>;
          openid?: Maybe<string>;
          emailVerified?: Maybe<boolean>;
          phone?: Maybe<string>;
          phoneVerified?: Maybe<boolean>;
          username?: Maybe<string>;
          nickname?: Maybe<string>;
          company?: Maybe<string>;
          photo?: Maybe<string>;
          browser?: Maybe<string>;
          device?: Maybe<string>;
          password?: Maybe<string>;
          registerInClient?: Maybe<string>;
          registerMethod?: Maybe<string>;
          oauth?: Maybe<string>;
          token?: Maybe<string>;
          tokenExpiredAt?: Maybe<string>;
          loginsCount?: Maybe<number>;
          lastLogin?: Maybe<string>;
          lastIP?: Maybe<string>;
          signedUp?: Maybe<string>;
          blocked?: Maybe<boolean>;
          isDeleted?: Maybe<boolean>;
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
          metadata?: Maybe<string>;
          salt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type RevokeRbacRoleFromUserVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: RevokeRbacRoleFromUserInput;
}>;

export type RevokeRbacRoleFromUser = {
  revokeRBACRoleFromUser: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type RevokeRbacRoleFromUserBatchVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: RevokeRbacRoleFromUserBatchInput;
}>;

export type RevokeRbacRoleFromUserBatch = {
  revokeRBACRoleFromUserBatch: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type SendChangeEmailVerifyCodeVariables = Exact<{
  userPoolId: Scalars['String'];
  email: Scalars['String'];
}>;

export type SendChangeEmailVerifyCode = {
  sendChangeEmailVerifyCode?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type SendResetPasswordEmailVariables = Exact<{
  client: Scalars['String'];
  email: Scalars['String'];
}>;

export type SendResetPasswordEmail = {
  sendResetPasswordEmail?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type SendVerifyEmailVariables = Exact<{
  email: Scalars['String'];
  client: Scalars['String'];
  token?: Maybe<Scalars['String']>;
}>;

export type SendVerifyEmail = {
  sendVerifyEmail?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type SetInvitationStateVariables = Exact<{
  client: Scalars['String'];
  enablePhone?: Maybe<Scalars['Boolean']>;
}>;

export type SetInvitationState = {
  setInvitationState?: Maybe<{
    client: string;
    enablePhone?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type SetRuleEnvVariables = Exact<{
  input: SetRuleEnvInput;
}>;

export type SetRuleEnv = {
  setRuleEnv: {
    totalCount: number;
    list: Array<{ key: string; value: string }>;
  };
};

export type SetSamlIdPFieldMappingVariables = Exact<{
  idpId: Scalars['String'];
  sourceExpression: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  targetField: Scalars['String'];
}>;

export type SetSamlIdPFieldMapping = {
  setSAMLIdPFieldMapping: {
    sourceExpression: string;
    description?: Maybe<string>;
    type: string;
    targetField: string;
  };
};

export type SetUserMetadataVariables = Exact<{
  input: SetUserMetadataInput;
}>;

export type SetUserMetadata = {
  setUserMetadata: {
    totalCount: number;
    list: Array<{ key: string; value: string }>;
  };
};

export type SignInVariables = Exact<{
  oidcAppId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  unionid?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}>;

export type SignIn = {
  signIn?: Maybe<{
    sub?: Maybe<string>;
    birthdate?: Maybe<string>;
    family_name?: Maybe<string>;
    gender?: Maybe<string>;
    given_name?: Maybe<string>;
    locale?: Maybe<string>;
    middle_name?: Maybe<string>;
    name?: Maybe<string>;
    nickname?: Maybe<string>;
    picture?: Maybe<string>;
    preferred_username?: Maybe<string>;
    profile?: Maybe<string>;
    updated_at?: Maybe<string>;
    website?: Maybe<string>;
    zoneinfo?: Maybe<string>;
    username?: Maybe<string>;
    _id?: Maybe<string>;
    company?: Maybe<string>;
    browser?: Maybe<string>;
    device?: Maybe<string>;
    logins_count?: Maybe<number>;
    register_method?: Maybe<string>;
    blocked?: Maybe<boolean>;
    last_ip?: Maybe<string>;
    register_in_userpool?: Maybe<string>;
    last_login?: Maybe<string>;
    signed_up?: Maybe<string>;
    email?: Maybe<string>;
    email_verified?: Maybe<boolean>;
    phone_number?: Maybe<string>;
    phone_number_verified?: Maybe<boolean>;
    token?: Maybe<string>;
    access_token?: Maybe<string>;
    id_token?: Maybe<string>;
    refresh_token?: Maybe<string>;
    expires_in?: Maybe<number>;
    token_type?: Maybe<string>;
    scope?: Maybe<string>;
  }>;
};

export type StartDingTalkCorpInitialSyncVariables = Exact<{
  userPoolId: Scalars['String'];
  corpId: Scalars['String'];
}>;

export type StartDingTalkCorpInitialSync = {
  startDingTalkCorpInitialSync?: Maybe<{
    code: number;
    message: string;
    orgId: string;
  }>;
};

export type StartWechatWorkCorpInitialSyncVariables = Exact<{
  userPoolId: Scalars['String'];
  corpId: Scalars['String'];
}>;

export type StartWechatWorkCorpInitialSync = {
  startWechatWorkCorpInitialSync?: Maybe<{
    code: number;
    message: string;
    orgId: string;
  }>;
};

export type UnbindEmailVariables = Exact<{
  user?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
}>;

export type UnbindEmail = {
  unbindEmail?: Maybe<{
    _id?: Maybe<string>;
    username?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
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
    oldPassword?: Maybe<string>;
    metadata?: Maybe<string>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type UnbindOtherOAuthVariables = Exact<{
  type: Scalars['String'];
  client?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
}>;

export type UnbindOtherOAuth = {
  unbindOtherOAuth?: Maybe<{
    _id?: Maybe<string>;
    user?: Maybe<string>;
    client?: Maybe<string>;
    type?: Maybe<string>;
    unionid?: Maybe<string>;
    userInfo?: Maybe<string>;
    createdAt?: Maybe<string>;
  }>;
};

export type UpdateAdConnectorVariables = Exact<{
  _id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
}>;

export type UpdateAdConnector = {
  updateAdConnector?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    salt?: Maybe<string>;
    logo?: Maybe<string>;
    enabled?: Maybe<boolean>;
    userPoolId?: Maybe<string>;
    status?: Maybe<boolean>;
    createdAt?: Maybe<string>;
  }>;
};

export type UpdateClientWebhookVariables = Exact<{
  id: Scalars['String'];
  events: Array<Scalars['String']>;
  url: Scalars['String'];
  contentType: Scalars['String'];
  enable: Scalars['Boolean'];
  secret?: Maybe<Scalars['String']>;
  isLastTimeSuccess?: Maybe<Scalars['Boolean']>;
}>;

export type UpdateClientWebhook = {
  updateClientWebhook?: Maybe<{
    _id?: Maybe<string>;
    client: string;
    url: string;
    isLastTimeSuccess?: Maybe<boolean>;
    contentType: string;
    secret?: Maybe<string>;
    enable: boolean;
    events: Array<{ name: string; label: string; description?: Maybe<string> }>;
  }>;
};

export type UpdateCollaboratorVariables = Exact<{
  collaborationId: Scalars['String'];
  permissionDescriptors: Array<Maybe<PermissionDescriptorsInputType>>;
}>;

export type UpdateCollaborator = {
  updateCollaborator?: Maybe<{
    _id?: Maybe<string>;
    createdAt?: Maybe<string>;
    owner?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    collaborator?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    userPool?: Maybe<{
      _id?: Maybe<string>;
      iamType?: Maybe<IamType>;
      domain?: Maybe<string>;
      userLimit?: Maybe<number>;
      usersCount?: Maybe<number>;
      logo?: Maybe<string>;
      emailVerifiedDefault?: Maybe<boolean>;
      sendWelcomeEmail?: Maybe<boolean>;
      registerDisabled?: Maybe<boolean>;
      showWXMPQRCode?: Maybe<boolean>;
      useMiniLogin?: Maybe<boolean>;
      useSelfWxapp?: Maybe<boolean>;
      allowedOrigins?: Maybe<string>;
      name?: Maybe<string>;
      secret?: Maybe<string>;
      token?: Maybe<string>;
      descriptions?: Maybe<string>;
      jwtExpired?: Maybe<number>;
      createdAt?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
      enableEmail?: Maybe<boolean>;
    }>;
    permissionDescriptors?: Maybe<
      Array<
        Maybe<{
          permissionId?: Maybe<string>;
          name?: Maybe<string>;
          operationAllow?: Maybe<number>;
        }>
      >
    >;
  }>;
};

export type UpdateEmailVariables = Exact<{
  userPoolId: Scalars['String'];
  email: Scalars['String'];
  emailCode: Scalars['String'];
  oldEmail?: Maybe<Scalars['String']>;
  oldEmailCode?: Maybe<Scalars['String']>;
}>;

export type UpdateEmail = {
  updateEmail?: Maybe<{
    _id?: Maybe<string>;
    username?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
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
    oldPassword?: Maybe<string>;
    metadata?: Maybe<string>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type UpdateOrgVariables = Exact<{
  input: UpdateOrgInput;
}>;

export type UpdateOrg = {
  updateOrg: {
    _id: string;
    logo?: Maybe<string>;
    nodes: Array<{
      _id: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children: Array<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
    }>;
  };
};

export type UpdatePasswordStrengthSettingsByUserPoolIdVariables = Exact<{
  userPoolId: Scalars['String'];
  pwdStrength?: Maybe<Scalars['Int']>;
}>;

export type UpdatePasswordStrengthSettingsByUserPoolId = {
  updatePasswordStrengthSettingsByUserPoolId?: Maybe<{
    userPoolId?: Maybe<string>;
    pwdStrength?: Maybe<number>;
  }>;
};

export type UpdatePermissionsVariables = Exact<{
  role: Scalars['String'];
  client: Scalars['String'];
  permissions?: Maybe<Scalars['String']>;
}>;

export type UpdatePermissions = {
  updatePermissions?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    descriptions?: Maybe<string>;
    client?: Maybe<string>;
    permissions?: Maybe<string>;
    createdAt?: Maybe<string>;
  }>;
};

export type UpdatePhoneVariables = Exact<{
  userPoolId: Scalars['String'];
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
  oldPhone?: Maybe<Scalars['String']>;
  oldPhoneCode?: Maybe<Scalars['String']>;
}>;

export type UpdatePhone = {
  updatePhone?: Maybe<{
    _id?: Maybe<string>;
    username?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
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
    oldPassword?: Maybe<string>;
    metadata?: Maybe<string>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type UpdateRbacGroupVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: UpdateRbacGroupInput;
}>;

export type UpdateRbacGroup = {
  updateRBACGroup?: Maybe<{
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  }>;
};

export type UpdateRbacPermissionVariables = Exact<{
  input: UpdateRbacPermissionInput;
}>;

export type UpdateRbacPermission = {
  updateRBACPermission?: Maybe<{
    _id: string;
    name: string;
    userPoolId: string;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    description?: Maybe<string>;
  }>;
};

export type UpdateRbacRoleVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  input: UpdateRbacRoleInput;
}>;

export type UpdateRbacRole = {
  updateRBACRole?: Maybe<{
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  }>;
};

export type UpdateRoleVariables = Exact<{
  _id: Scalars['String'];
  client: Scalars['String'];
  name: Scalars['String'];
  descriptions?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['String']>;
}>;

export type UpdateRole = {
  updateRole?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    descriptions?: Maybe<string>;
    client?: Maybe<string>;
    permissions?: Maybe<string>;
    createdAt?: Maybe<string>;
  }>;
};

export type UpdateRuleVariables = Exact<{
  input: UpdateRuleInput;
}>;

export type UpdateRule = {
  updateRule: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    type: RuleTypes;
    enabled: boolean;
    faasUrl: string;
    code: string;
    order?: Maybe<number>;
    async?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  };
};

export type UpdateRuleOrderVariables = Exact<{
  input: UpdateRuleOrderInput;
}>;

export type UpdateRuleOrder = {
  updateRuleOrder?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type UpdateSuperAdminUserVariables = Exact<{
  options: SuperAdminUpdateInput;
}>;

export type UpdateSuperAdminUser = {
  updateSuperAdminUser?: Maybe<{
    email?: Maybe<string>;
    username?: Maybe<string>;
    _id?: Maybe<string>;
    upgrade?: Maybe<boolean>;
  }>;
};

export type UpdateUserVariables = Exact<{
  options: UserUpdateInput;
}>;

export type UpdateUser = {
  updateUser?: Maybe<{
    _id?: Maybe<string>;
    username?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
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
    oldPassword?: Maybe<string>;
    metadata?: Maybe<string>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type UpdateUserClientVariables = Exact<{
  client: UpdateUserClientInput;
}>;

export type UpdateUserClient = {
  updateUserClient?: Maybe<{
    _id?: Maybe<string>;
    iamType?: Maybe<IamType>;
    domain?: Maybe<string>;
    userLimit?: Maybe<number>;
    usersCount?: Maybe<number>;
    logo?: Maybe<string>;
    emailVerifiedDefault?: Maybe<boolean>;
    sendWelcomeEmail?: Maybe<boolean>;
    registerDisabled?: Maybe<boolean>;
    showWXMPQRCode?: Maybe<boolean>;
    useMiniLogin?: Maybe<boolean>;
    useSelfWxapp?: Maybe<boolean>;
    allowedOrigins?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    token?: Maybe<string>;
    descriptions?: Maybe<string>;
    jwtExpired?: Maybe<number>;
    createdAt?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enableEmail?: Maybe<boolean>;
    user?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userPoolTypes?: Maybe<
      Array<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        example?: Maybe<string>;
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
  }>;
};

export type VerifyResetPasswordVerifyCodeVariables = Exact<{
  verifyCode: Scalars['String'];
  email: Scalars['String'];
  client: Scalars['String'];
}>;

export type VerifyResetPasswordVerifyCode = {
  verifyResetPasswordVerifyCode?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type DingTalkCorpVariables = Exact<{
  userPoolId: Scalars['String'];
  corpId: Scalars['String'];
}>;

export type DingTalkCorp = {
  DingTalkCorp?: Maybe<{
    corpId: string;
    twoWaySynchronizationOn: boolean;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    AESKey?: Maybe<string>;
    token?: Maybe<string>;
    orgId?: Maybe<string>;
  }>;
};

export type GetOidcAppInfoVariables = Exact<{
  appId: Scalars['String'];
}>;

export type GetOidcAppInfo = {
  GetOIDCAppInfo?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirect_uris?: Maybe<Array<Maybe<string>>>;
    client_id?: Maybe<string>;
    client_secret?: Maybe<string>;
    token_endpoint_auth_method?: Maybe<string>;
    id_token_signed_response_alg?: Maybe<string>;
    id_token_encrypted_response_alg?: Maybe<string>;
    id_token_encrypted_response_enc?: Maybe<string>;
    userinfo_signed_response_alg?: Maybe<string>;
    userinfo_encrypted_response_alg?: Maybe<string>;
    userinfo_encrypted_response_enc?: Maybe<string>;
    request_object_signing_alg?: Maybe<string>;
    request_object_encryption_alg?: Maybe<string>;
    request_object_encryption_enc?: Maybe<string>;
    jwks_uri?: Maybe<string>;
    _jwks_uri?: Maybe<string>;
    custom_jwks?: Maybe<string>;
    jwks?: Maybe<string>;
    _jwks?: Maybe<string>;
    clientId?: Maybe<string>;
    grant_types?: Maybe<Array<Maybe<string>>>;
    response_types?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    isDefault?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    authorization_code_expire?: Maybe<string>;
    id_token_expire?: Maybe<string>;
    access_token_expire?: Maybe<string>;
    refresh_token_expire?: Maybe<string>;
    cas_expire?: Maybe<string>;
    loginUrl?: Maybe<string>;
    isForTeamory?: Maybe<boolean>;
    confirmAuthorization?: Maybe<boolean>;
    customStyles?: Maybe<{
      forceLogin?: Maybe<boolean>;
      hideQRCode?: Maybe<boolean>;
      hideUP?: Maybe<boolean>;
      hideUsername?: Maybe<boolean>;
      hideRegister?: Maybe<boolean>;
      hidePhone?: Maybe<boolean>;
      hideSocial?: Maybe<boolean>;
      hideClose?: Maybe<boolean>;
      hidePhonePassword?: Maybe<boolean>;
      defaultLoginMethod?: Maybe<OidcProviderDefaultLoginMethod>;
    }>;
  }>;
};

export type GetOidcAppListVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type GetOidcAppList = {
  GetOIDCAppList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          domain?: Maybe<string>;
          image?: Maybe<string>;
          redirect_uris?: Maybe<Array<Maybe<string>>>;
          client_id?: Maybe<string>;
          client_secret?: Maybe<string>;
          token_endpoint_auth_method?: Maybe<string>;
          id_token_signed_response_alg?: Maybe<string>;
          id_token_encrypted_response_alg?: Maybe<string>;
          id_token_encrypted_response_enc?: Maybe<string>;
          userinfo_signed_response_alg?: Maybe<string>;
          userinfo_encrypted_response_alg?: Maybe<string>;
          userinfo_encrypted_response_enc?: Maybe<string>;
          request_object_signing_alg?: Maybe<string>;
          request_object_encryption_alg?: Maybe<string>;
          request_object_encryption_enc?: Maybe<string>;
          jwks_uri?: Maybe<string>;
          _jwks_uri?: Maybe<string>;
          custom_jwks?: Maybe<string>;
          jwks?: Maybe<string>;
          _jwks?: Maybe<string>;
          clientId?: Maybe<string>;
          grant_types?: Maybe<Array<Maybe<string>>>;
          response_types?: Maybe<Array<Maybe<string>>>;
          description?: Maybe<string>;
          homepageURL?: Maybe<string>;
          isDeleted?: Maybe<boolean>;
          isDefault?: Maybe<boolean>;
          when?: Maybe<string>;
          css?: Maybe<string>;
          authorization_code_expire?: Maybe<string>;
          id_token_expire?: Maybe<string>;
          access_token_expire?: Maybe<string>;
          refresh_token_expire?: Maybe<string>;
          cas_expire?: Maybe<string>;
          loginUrl?: Maybe<string>;
          isForTeamory?: Maybe<boolean>;
          confirmAuthorization?: Maybe<boolean>;
        }>
      >
    >;
  }>;
};

export type GetSamlIdentityProviderInfoVariables = Exact<{
  appId: Scalars['String'];
}>;

export type GetSamlIdentityProviderInfo = {
  GetSAMLIdentityProviderInfo?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    attributeNameFormat?: Maybe<string>;
    customAttributes?: Maybe<string>;
    emailDomainTransformation?: Maybe<string>;
    authnContextClassRef?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    assertionConsumerUrl?: Maybe<string>;
    bindings?: Maybe<Array<Maybe<string>>>;
    nameIds?: Maybe<Array<Maybe<string>>>;
    attributes?: Maybe<Array<Maybe<string>>>;
    enableSignRes?: Maybe<boolean>;
    resSignAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resSignPublicKey?: Maybe<string>;
    resSignPrivateKey?: Maybe<string>;
    resSignPrivateKeyPass?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignPublicKey?: Maybe<string>;
    enableEncryptRes?: Maybe<boolean>;
    resEncryptPublicKey?: Maybe<string>;
    css?: Maybe<string>;
  }>;
};

export type GetSamlIdentityProviderListVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type GetSamlIdentityProviderList = {
  GetSAMLIdentityProviderList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          domain?: Maybe<string>;
          image?: Maybe<string>;
          appSecret?: Maybe<string>;
          appId?: Maybe<string>;
          clientId?: Maybe<string>;
          description?: Maybe<string>;
          isDeleted?: Maybe<boolean>;
          enabled?: Maybe<boolean>;
          when?: Maybe<string>;
          SPMetadata?: Maybe<string>;
          attributeNameFormat?: Maybe<string>;
          customAttributes?: Maybe<string>;
          emailDomainTransformation?: Maybe<string>;
          authnContextClassRef?: Maybe<string>;
          IdPMetadata?: Maybe<string>;
          assertionConsumerUrl?: Maybe<string>;
          bindings?: Maybe<Array<Maybe<string>>>;
          nameIds?: Maybe<Array<Maybe<string>>>;
          attributes?: Maybe<Array<Maybe<string>>>;
          enableSignRes?: Maybe<boolean>;
          resSignAlgorithm?: Maybe<string>;
          resAbstractAlgorithm?: Maybe<string>;
          resSignPublicKey?: Maybe<string>;
          resSignPrivateKey?: Maybe<string>;
          resSignPrivateKeyPass?: Maybe<string>;
          enableSignReq?: Maybe<boolean>;
          reqSignPublicKey?: Maybe<string>;
          enableEncryptRes?: Maybe<boolean>;
          resEncryptPublicKey?: Maybe<string>;
          css?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type GetSamlServiceProviderInfoVariables = Exact<{
  appId: Scalars['String'];
}>;

export type GetSamlServiceProviderInfo = {
  GetSAMLServiceProviderInfo?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    defaultIdPMapId?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    IdPEntityID?: Maybe<string>;
    redirectUrl: string;
    loginUrl: string;
    logoutUrl: string;
    nameId: string;
    enableSignRes?: Maybe<boolean>;
    resSignPublicKey?: Maybe<string>;
    hasResEncrypted?: Maybe<boolean>;
    resEncryptAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resDecryptPrivateKey?: Maybe<string>;
    resDecryptPrivateKeyPass?: Maybe<string>;
    resEncryptPublicKey?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignAlgorithm?: Maybe<string>;
    reqAbstractAlgorithm?: Maybe<string>;
    reqSignPrivateKey?: Maybe<string>;
    reqSignPrivateKeyPass?: Maybe<string>;
    reqSignPublicKey?: Maybe<string>;
    SPUrl?: Maybe<string>;
    defaultIdPMap?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
    }>;
    assertionConsumeService?: Maybe<
      Array<
        Maybe<{
          binding?: Maybe<string>;
          url?: Maybe<string>;
          isDefault?: Maybe<boolean>;
        }>
      >
    >;
    mappings?: Maybe<{
      username?: Maybe<string>;
      nickname?: Maybe<string>;
      photo?: Maybe<string>;
      company?: Maybe<string>;
      providerName?: Maybe<string>;
      email?: Maybe<string>;
    }>;
  }>;
};

export type GetSamlServiceProviderListVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type GetSamlServiceProviderList = {
  GetSAMLServiceProviderList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          domain?: Maybe<string>;
          image?: Maybe<string>;
          appSecret?: Maybe<string>;
          defaultIdPMapId?: Maybe<string>;
          appId?: Maybe<string>;
          clientId?: Maybe<string>;
          description?: Maybe<string>;
          isDeleted?: Maybe<boolean>;
          enabled?: Maybe<boolean>;
          when?: Maybe<string>;
          SPMetadata?: Maybe<string>;
          IdPMetadata?: Maybe<string>;
          IdPEntityID?: Maybe<string>;
          redirectUrl: string;
          loginUrl: string;
          logoutUrl: string;
          nameId: string;
          enableSignRes?: Maybe<boolean>;
          resSignPublicKey?: Maybe<string>;
          hasResEncrypted?: Maybe<boolean>;
          resEncryptAlgorithm?: Maybe<string>;
          resAbstractAlgorithm?: Maybe<string>;
          resDecryptPrivateKey?: Maybe<string>;
          resDecryptPrivateKeyPass?: Maybe<string>;
          resEncryptPublicKey?: Maybe<string>;
          enableSignReq?: Maybe<boolean>;
          reqSignAlgorithm?: Maybe<string>;
          reqAbstractAlgorithm?: Maybe<string>;
          reqSignPrivateKey?: Maybe<string>;
          reqSignPrivateKeyPass?: Maybe<string>;
          reqSignPublicKey?: Maybe<string>;
          SPUrl?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type GetUserAuthorizedAppsVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type GetUserAuthorizedApps = {
  GetUserAuthorizedApps?: Maybe<{
    totalCount?: Maybe<number>;
    OAuthApps?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          domain?: Maybe<string>;
          image?: Maybe<string>;
          redirectUris?: Maybe<Array<Maybe<string>>>;
          appSecret?: Maybe<string>;
          client_id?: Maybe<string>;
          clientId?: Maybe<string>;
          grants?: Maybe<Array<Maybe<string>>>;
          description?: Maybe<string>;
          homepageURL?: Maybe<string>;
          isDeleted?: Maybe<boolean>;
          when?: Maybe<string>;
          css?: Maybe<string>;
          loginUrl?: Maybe<string>;
          casExpire?: Maybe<number>;
        }>
      >
    >;
    OIDCApps?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          domain?: Maybe<string>;
          image?: Maybe<string>;
          redirect_uris?: Maybe<Array<Maybe<string>>>;
          client_id?: Maybe<string>;
          client_secret?: Maybe<string>;
          token_endpoint_auth_method?: Maybe<string>;
          id_token_signed_response_alg?: Maybe<string>;
          id_token_encrypted_response_alg?: Maybe<string>;
          id_token_encrypted_response_enc?: Maybe<string>;
          userinfo_signed_response_alg?: Maybe<string>;
          userinfo_encrypted_response_alg?: Maybe<string>;
          userinfo_encrypted_response_enc?: Maybe<string>;
          request_object_signing_alg?: Maybe<string>;
          request_object_encryption_alg?: Maybe<string>;
          request_object_encryption_enc?: Maybe<string>;
          jwks_uri?: Maybe<string>;
          _jwks_uri?: Maybe<string>;
          custom_jwks?: Maybe<string>;
          jwks?: Maybe<string>;
          _jwks?: Maybe<string>;
          clientId?: Maybe<string>;
          grant_types?: Maybe<Array<Maybe<string>>>;
          response_types?: Maybe<Array<Maybe<string>>>;
          description?: Maybe<string>;
          homepageURL?: Maybe<string>;
          isDeleted?: Maybe<boolean>;
          isDefault?: Maybe<boolean>;
          when?: Maybe<string>;
          css?: Maybe<string>;
          authorization_code_expire?: Maybe<string>;
          id_token_expire?: Maybe<string>;
          access_token_expire?: Maybe<string>;
          refresh_token_expire?: Maybe<string>;
          cas_expire?: Maybe<string>;
          loginUrl?: Maybe<string>;
          isForTeamory?: Maybe<boolean>;
          confirmAuthorization?: Maybe<boolean>;
        }>
      >
    >;
  }>;
};

export type PreviewEmailByTypeVariables = Exact<{
  type: Scalars['String'];
  client: Scalars['String'];
  meta_data?: Maybe<Scalars['String']>;
}>;

export type PreviewEmailByType = { PreviewEmailByType?: Maybe<string> };

export type QueryAppInfoByAppIdVariables = Exact<{
  appId?: Maybe<Scalars['String']>;
  responseType?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
}>;

export type QueryAppInfoByAppId = {
  QueryAppInfoByAppID?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirectUris?: Maybe<Array<Maybe<string>>>;
    appSecret?: Maybe<string>;
    client_id?: Maybe<string>;
    clientId?: Maybe<string>;
    grants?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    loginUrl?: Maybe<string>;
    casExpire?: Maybe<number>;
  }>;
};

export type QueryAppInfoByDomainVariables = Exact<{
  domain?: Maybe<Scalars['String']>;
}>;

export type QueryAppInfoByDomain = {
  QueryAppInfoByDomain?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirectUris?: Maybe<Array<Maybe<string>>>;
    appSecret?: Maybe<string>;
    client_id?: Maybe<string>;
    clientId?: Maybe<string>;
    grants?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    loginUrl?: Maybe<string>;
    casExpire?: Maybe<number>;
  }>;
};

export type QueryClientHasLdapConfigsVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
}>;

export type QueryClientHasLdapConfigs = {
  QueryClientHasLDAPConfigs?: Maybe<{ result?: Maybe<boolean> }>;
};

export type QueryClientIdByAppIdVariables = Exact<{
  appId?: Maybe<Scalars['String']>;
}>;

export type QueryClientIdByAppId = {
  QueryClientIdByAppId?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirectUris?: Maybe<Array<Maybe<string>>>;
    appSecret?: Maybe<string>;
    client_id?: Maybe<string>;
    clientId?: Maybe<string>;
    grants?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    loginUrl?: Maybe<string>;
    casExpire?: Maybe<number>;
  }>;
};

export type QueryDefaultSamlIdentityProviderSettingsListVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type QueryDefaultSamlIdentityProviderSettingsList = {
  QueryDefaultSAMLIdentityProviderSettingsList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          image?: Maybe<string>;
          description?: Maybe<string>;
          isDeleted?: Maybe<boolean>;
        }>
      >
    >;
  }>;
};

export type QueryLdapServerListVariables = Exact<{
  clientId: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type QueryLdapServerList = {
  QueryLDAPServerList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          clientId?: Maybe<string>;
          userId?: Maybe<string>;
          ldapLink?: Maybe<string>;
          baseDN?: Maybe<string>;
          searchStandard?: Maybe<string>;
          emailPostfix?: Maybe<string>;
          username?: Maybe<string>;
          password?: Maybe<string>;
          description?: Maybe<string>;
          enabled?: Maybe<boolean>;
          isDeleted?: Maybe<boolean>;
          createdAt?: Maybe<string>;
          updatedAt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type QueryOidcAppInfoByAppIdVariables = Exact<{
  appId?: Maybe<Scalars['String']>;
  responseType?: Maybe<Scalars['String']>;
  redirectUrl?: Maybe<Scalars['String']>;
}>;

export type QueryOidcAppInfoByAppId = {
  QueryOIDCAppInfoByAppID?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirect_uris?: Maybe<Array<Maybe<string>>>;
    client_id?: Maybe<string>;
    client_secret?: Maybe<string>;
    token_endpoint_auth_method?: Maybe<string>;
    id_token_signed_response_alg?: Maybe<string>;
    id_token_encrypted_response_alg?: Maybe<string>;
    id_token_encrypted_response_enc?: Maybe<string>;
    userinfo_signed_response_alg?: Maybe<string>;
    userinfo_encrypted_response_alg?: Maybe<string>;
    userinfo_encrypted_response_enc?: Maybe<string>;
    request_object_signing_alg?: Maybe<string>;
    request_object_encryption_alg?: Maybe<string>;
    request_object_encryption_enc?: Maybe<string>;
    jwks_uri?: Maybe<string>;
    _jwks_uri?: Maybe<string>;
    custom_jwks?: Maybe<string>;
    jwks?: Maybe<string>;
    _jwks?: Maybe<string>;
    clientId?: Maybe<string>;
    grant_types?: Maybe<Array<Maybe<string>>>;
    response_types?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    isDefault?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    authorization_code_expire?: Maybe<string>;
    id_token_expire?: Maybe<string>;
    access_token_expire?: Maybe<string>;
    refresh_token_expire?: Maybe<string>;
    cas_expire?: Maybe<string>;
    loginUrl?: Maybe<string>;
    isForTeamory?: Maybe<boolean>;
    confirmAuthorization?: Maybe<boolean>;
    customStyles?: Maybe<{
      forceLogin?: Maybe<boolean>;
      hideQRCode?: Maybe<boolean>;
      hideUP?: Maybe<boolean>;
      hideUsername?: Maybe<boolean>;
      hideRegister?: Maybe<boolean>;
      hidePhone?: Maybe<boolean>;
      hideSocial?: Maybe<boolean>;
      hideClose?: Maybe<boolean>;
      hidePhonePassword?: Maybe<boolean>;
      defaultLoginMethod?: Maybe<OidcProviderDefaultLoginMethod>;
    }>;
  }>;
};

export type QueryOidcAppInfoByDomainVariables = Exact<{
  domain?: Maybe<Scalars['String']>;
}>;

export type QueryOidcAppInfoByDomain = {
  QueryOIDCAppInfoByDomain?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirect_uris?: Maybe<Array<Maybe<string>>>;
    client_id?: Maybe<string>;
    client_secret?: Maybe<string>;
    token_endpoint_auth_method?: Maybe<string>;
    id_token_signed_response_alg?: Maybe<string>;
    id_token_encrypted_response_alg?: Maybe<string>;
    id_token_encrypted_response_enc?: Maybe<string>;
    userinfo_signed_response_alg?: Maybe<string>;
    userinfo_encrypted_response_alg?: Maybe<string>;
    userinfo_encrypted_response_enc?: Maybe<string>;
    request_object_signing_alg?: Maybe<string>;
    request_object_encryption_alg?: Maybe<string>;
    request_object_encryption_enc?: Maybe<string>;
    jwks_uri?: Maybe<string>;
    _jwks_uri?: Maybe<string>;
    custom_jwks?: Maybe<string>;
    jwks?: Maybe<string>;
    _jwks?: Maybe<string>;
    clientId?: Maybe<string>;
    grant_types?: Maybe<Array<Maybe<string>>>;
    response_types?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    isDefault?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    authorization_code_expire?: Maybe<string>;
    id_token_expire?: Maybe<string>;
    access_token_expire?: Maybe<string>;
    refresh_token_expire?: Maybe<string>;
    cas_expire?: Maybe<string>;
    loginUrl?: Maybe<string>;
    isForTeamory?: Maybe<boolean>;
    confirmAuthorization?: Maybe<boolean>;
    customStyles?: Maybe<{
      forceLogin?: Maybe<boolean>;
      hideQRCode?: Maybe<boolean>;
      hideUP?: Maybe<boolean>;
      hideUsername?: Maybe<boolean>;
      hideRegister?: Maybe<boolean>;
      hidePhone?: Maybe<boolean>;
      hideSocial?: Maybe<boolean>;
      hideClose?: Maybe<boolean>;
      hidePhonePassword?: Maybe<boolean>;
      defaultLoginMethod?: Maybe<OidcProviderDefaultLoginMethod>;
    }>;
  }>;
};

export type QuerySamlIdentityProviderInfoByAppIdVariables = Exact<{
  appId?: Maybe<Scalars['String']>;
}>;

export type QuerySamlIdentityProviderInfoByAppId = {
  QuerySAMLIdentityProviderInfoByAppID?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    attributeNameFormat?: Maybe<string>;
    customAttributes?: Maybe<string>;
    emailDomainTransformation?: Maybe<string>;
    authnContextClassRef?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    assertionConsumerUrl?: Maybe<string>;
    bindings?: Maybe<Array<Maybe<string>>>;
    nameIds?: Maybe<Array<Maybe<string>>>;
    attributes?: Maybe<Array<Maybe<string>>>;
    enableSignRes?: Maybe<boolean>;
    resSignAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resSignPublicKey?: Maybe<string>;
    resSignPrivateKey?: Maybe<string>;
    resSignPrivateKeyPass?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignPublicKey?: Maybe<string>;
    enableEncryptRes?: Maybe<boolean>;
    resEncryptPublicKey?: Maybe<string>;
    css?: Maybe<string>;
  }>;
};

export type QuerySamlIdentityProviderInfoByDomainVariables = Exact<{
  domain?: Maybe<Scalars['String']>;
}>;

export type QuerySamlIdentityProviderInfoByDomain = {
  QuerySAMLIdentityProviderInfoByDomain?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    attributeNameFormat?: Maybe<string>;
    customAttributes?: Maybe<string>;
    emailDomainTransformation?: Maybe<string>;
    authnContextClassRef?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    assertionConsumerUrl?: Maybe<string>;
    bindings?: Maybe<Array<Maybe<string>>>;
    nameIds?: Maybe<Array<Maybe<string>>>;
    attributes?: Maybe<Array<Maybe<string>>>;
    enableSignRes?: Maybe<boolean>;
    resSignAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resSignPublicKey?: Maybe<string>;
    resSignPrivateKey?: Maybe<string>;
    resSignPrivateKeyPass?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignPublicKey?: Maybe<string>;
    enableEncryptRes?: Maybe<boolean>;
    resEncryptPublicKey?: Maybe<string>;
    css?: Maybe<string>;
  }>;
};

export type QuerySamlServiceProviderInfoByAppIdVariables = Exact<{
  appId: Scalars['String'];
}>;

export type QuerySamlServiceProviderInfoByAppId = {
  QuerySAMLServiceProviderInfoByAppID?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    defaultIdPMapId?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    IdPEntityID?: Maybe<string>;
    redirectUrl: string;
    loginUrl: string;
    logoutUrl: string;
    nameId: string;
    enableSignRes?: Maybe<boolean>;
    resSignPublicKey?: Maybe<string>;
    hasResEncrypted?: Maybe<boolean>;
    resEncryptAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resDecryptPrivateKey?: Maybe<string>;
    resDecryptPrivateKeyPass?: Maybe<string>;
    resEncryptPublicKey?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignAlgorithm?: Maybe<string>;
    reqAbstractAlgorithm?: Maybe<string>;
    reqSignPrivateKey?: Maybe<string>;
    reqSignPrivateKeyPass?: Maybe<string>;
    reqSignPublicKey?: Maybe<string>;
    SPUrl?: Maybe<string>;
    defaultIdPMap?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
    }>;
    assertionConsumeService?: Maybe<
      Array<
        Maybe<{
          binding?: Maybe<string>;
          url?: Maybe<string>;
          isDefault?: Maybe<boolean>;
        }>
      >
    >;
    mappings?: Maybe<{
      username?: Maybe<string>;
      nickname?: Maybe<string>;
      photo?: Maybe<string>;
      company?: Maybe<string>;
      providerName?: Maybe<string>;
      email?: Maybe<string>;
    }>;
  }>;
};

export type QuerySamlServiceProviderInfoByDomainVariables = Exact<{
  domain: Scalars['String'];
}>;

export type QuerySamlServiceProviderInfoByDomain = {
  QuerySAMLServiceProviderInfoByDomain?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    appSecret?: Maybe<string>;
    defaultIdPMapId?: Maybe<string>;
    appId?: Maybe<string>;
    clientId?: Maybe<string>;
    description?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enabled?: Maybe<boolean>;
    when?: Maybe<string>;
    SPMetadata?: Maybe<string>;
    IdPMetadata?: Maybe<string>;
    IdPEntityID?: Maybe<string>;
    redirectUrl: string;
    loginUrl: string;
    logoutUrl: string;
    nameId: string;
    enableSignRes?: Maybe<boolean>;
    resSignPublicKey?: Maybe<string>;
    hasResEncrypted?: Maybe<boolean>;
    resEncryptAlgorithm?: Maybe<string>;
    resAbstractAlgorithm?: Maybe<string>;
    resDecryptPrivateKey?: Maybe<string>;
    resDecryptPrivateKeyPass?: Maybe<string>;
    resEncryptPublicKey?: Maybe<string>;
    enableSignReq?: Maybe<boolean>;
    reqSignAlgorithm?: Maybe<string>;
    reqAbstractAlgorithm?: Maybe<string>;
    reqSignPrivateKey?: Maybe<string>;
    reqSignPrivateKeyPass?: Maybe<string>;
    reqSignPublicKey?: Maybe<string>;
    SPUrl?: Maybe<string>;
    defaultIdPMap?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      image?: Maybe<string>;
      description?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
    }>;
    assertionConsumeService?: Maybe<
      Array<
        Maybe<{
          binding?: Maybe<string>;
          url?: Maybe<string>;
          isDefault?: Maybe<boolean>;
        }>
      >
    >;
    mappings?: Maybe<{
      username?: Maybe<string>;
      nickname?: Maybe<string>;
      photo?: Maybe<string>;
      company?: Maybe<string>;
      providerName?: Maybe<string>;
      email?: Maybe<string>;
    }>;
  }>;
};

export type ReadEmailProviderVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
}>;

export type ReadEmailProvider = {
  ReadEmailProvider?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        image?: Maybe<string>;
        description?: Maybe<string>;
        client?: Maybe<string>;
        user?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<
          Array<
            Maybe<{
              label?: Maybe<string>;
              type?: Maybe<string>;
              placeholder?: Maybe<string>;
              help?: Maybe<string>;
              value?: Maybe<string>;
              options?: Maybe<Array<Maybe<string>>>;
            }>
          >
        >;
        provider?: Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          image?: Maybe<string>;
          description?: Maybe<string>;
          client?: Maybe<string>;
          user?: Maybe<string>;
          status?: Maybe<boolean>;
        }>;
      }>
    >
  >;
};

export type ReadEmailProviderByClientAndNameVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
}>;

export type ReadEmailProviderByClientAndName = {
  ReadEmailProviderByClientAndName?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<
          Array<
            Maybe<{
              label?: Maybe<string>;
              type?: Maybe<string>;
              placeholder?: Maybe<string>;
              help?: Maybe<string>;
              value?: Maybe<string>;
              options?: Maybe<Array<Maybe<string>>>;
            }>
          >
        >;
        provider?: Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          image?: Maybe<string>;
          description?: Maybe<string>;
        }>;
      }>
    >
  >;
};

export type ReadEmailProviderWithClientVariables = Exact<{
  [key: string]: never;
}>;

export type ReadEmailProviderWithClient = {
  ReadEmailProviderWithClient?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<
          Array<
            Maybe<{
              label?: Maybe<string>;
              type?: Maybe<string>;
              placeholder?: Maybe<string>;
              help?: Maybe<string>;
              value?: Maybe<string>;
              options?: Maybe<Array<Maybe<string>>>;
            }>
          >
        >;
        provider?: Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          image?: Maybe<string>;
          description?: Maybe<string>;
        }>;
      }>
    >
  >;
};

export type ReadEmailSentListVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<Scalars['String']>;
}>;

export type ReadEmailSentList = {
  ReadEmailSentList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          subject?: Maybe<string>;
          content?: Maybe<string>;
          sender?: Maybe<string>;
          receivers?: Maybe<Array<Maybe<string>>>;
          createdAt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type ReadEmailSentListByClientVariables = Exact<{
  client: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type ReadEmailSentListByClient = {
  ReadEmailSentListByClient?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          user?: Maybe<string>;
          subject?: Maybe<string>;
          content?: Maybe<string>;
          sender?: Maybe<string>;
          receivers?: Maybe<Array<Maybe<string>>>;
          post?: Maybe<string>;
          createdAt?: Maybe<string>;
          rejected?: Maybe<Array<Maybe<string>>>;
          isDeleted?: Maybe<string>;
          client?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type ReadEmailTemplateByClientAndTypeVariables = Exact<{
  type: Scalars['String'];
  client: Scalars['String'];
}>;

export type ReadEmailTemplateByClientAndType = {
  ReadEmailTemplateByClientAndType?: Maybe<{
    _id?: Maybe<string>;
    type?: Maybe<string>;
    sender?: Maybe<string>;
    object?: Maybe<string>;
    hasURL?: Maybe<boolean>;
    URLExpireTime?: Maybe<number>;
    status?: Maybe<boolean>;
    redirectTo?: Maybe<string>;
    content?: Maybe<string>;
  }>;
};

export type ReadEmailTemplatesByClientVariables = Exact<{
  clientId: Scalars['String'];
}>;

export type ReadEmailTemplatesByClient = {
  ReadEmailTemplatesByClient?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        type?: Maybe<string>;
        sender?: Maybe<string>;
        object?: Maybe<string>;
        hasURL?: Maybe<boolean>;
        URLExpireTime?: Maybe<number>;
        redirectTo?: Maybe<string>;
        status?: Maybe<boolean>;
        content?: Maybe<string>;
        template?: Maybe<{
          _id?: Maybe<string>;
          type?: Maybe<string>;
          sender?: Maybe<string>;
          object?: Maybe<string>;
          hasURL?: Maybe<boolean>;
          URLExpireTime?: Maybe<number>;
          status?: Maybe<boolean>;
          redirectTo?: Maybe<string>;
          content?: Maybe<string>;
        }>;
      }>
    >
  >;
};

export type ReadEmailTemplatesBySystemVariables = Exact<{
  [key: string]: never;
}>;

export type ReadEmailTemplatesBySystem = {
  ReadEmailTemplatesBySystem?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        type?: Maybe<string>;
        sender?: Maybe<string>;
        object?: Maybe<string>;
        hasURL?: Maybe<boolean>;
        URLExpireTime?: Maybe<number>;
        redirectTo?: Maybe<string>;
        status?: Maybe<boolean>;
        content?: Maybe<string>;
        template?: Maybe<{
          _id?: Maybe<string>;
          type?: Maybe<string>;
          sender?: Maybe<string>;
          object?: Maybe<string>;
          hasURL?: Maybe<boolean>;
          URLExpireTime?: Maybe<number>;
          status?: Maybe<boolean>;
          redirectTo?: Maybe<string>;
          content?: Maybe<string>;
        }>;
      }>
    >
  >;
};

export type ReadOauthListVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
  dontGetURL?: Maybe<Scalars['Boolean']>;
  useGuard?: Maybe<Scalars['Boolean']>;
}>;

export type ReadOauthList = {
  ReadOauthList?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        alias?: Maybe<string>;
        image?: Maybe<string>;
        description?: Maybe<string>;
        enabled?: Maybe<boolean>;
        url?: Maybe<string>;
        client?: Maybe<string>;
        user?: Maybe<string>;
        oAuthUrl?: Maybe<string>;
        wxappLogo?: Maybe<string>;
        fields?: Maybe<
          Array<
            Maybe<{
              label?: Maybe<string>;
              type?: Maybe<string>;
              placeholder?: Maybe<string>;
              value?: Maybe<string>;
              checked?: Maybe<Array<Maybe<string>>>;
            }>
          >
        >;
        oauth?: Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          alias?: Maybe<string>;
          image?: Maybe<string>;
          description?: Maybe<string>;
          enabled?: Maybe<boolean>;
          url?: Maybe<string>;
          client?: Maybe<string>;
          user?: Maybe<string>;
          oAuthUrl?: Maybe<string>;
          wxappLogo?: Maybe<string>;
        }>;
      }>
    >
  >;
};

export type ReadOrdersVariables = Exact<{
  user?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type ReadOrders = {
  ReadOrders?: Maybe<{
    totalCount: number;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          client?: Maybe<string>;
          user?: Maybe<string>;
          timeOfPurchase?: Maybe<number>;
          flowNumber?: Maybe<number>;
          price?: Maybe<number>;
          createdAt?: Maybe<string>;
          completed?: Maybe<boolean>;
          payMethod?: Maybe<string>;
          endAt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type ReadSamlspListVariables = Exact<{
  clientId: Scalars['String'];
}>;

export type ReadSamlspList = {
  ReadSAMLSPList?: Maybe<
    Array<
      Maybe<{
        providerName?: Maybe<string>;
        url?: Maybe<string>;
        logo?: Maybe<string>;
      }>
    >
  >;
};

export type ReadSystemPricingVariables = Exact<{ [key: string]: never }>;

export type ReadSystemPricing = {
  ReadSystemPricing?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        type?: Maybe<string>;
        startNumber?: Maybe<number>;
        freeNumber?: Maybe<number>;
        startPrice?: Maybe<number>;
        maxNumber?: Maybe<number>;
        d?: Maybe<number>;
        features?: Maybe<Array<Maybe<string>>>;
      }>
    >
  >;
};

export type ReadUserPricingVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
}>;

export type ReadUserPricing = {
  ReadUserPricing?: Maybe<{
    user?: Maybe<string>;
    client?: Maybe<string>;
    isFree?: Maybe<boolean>;
    freeNumber?: Maybe<number>;
    pricing?: Maybe<{ number?: Maybe<number> }>;
  }>;
};

export type TestLdapServerVariables = Exact<{
  name: Scalars['String'];
  clientId: Scalars['String'];
  userId: Scalars['String'];
  ldapLink: Scalars['String'];
  baseDN: Scalars['String'];
  searchStandard: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  emailPostfix?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
}>;

export type TestLdapServer = {
  TestLDAPServer?: Maybe<{ result?: Maybe<boolean> }>;
};

export type TestLdapUserVariables = Exact<{
  testUsername: Scalars['String'];
  testPassword: Scalars['String'];
  name: Scalars['String'];
  clientId: Scalars['String'];
  userId: Scalars['String'];
  ldapLink: Scalars['String'];
  baseDN: Scalars['String'];
  searchStandard: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  emailPostfix?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
}>;

export type TestLdapUser = {
  TestLDAPUser?: Maybe<{ result?: Maybe<boolean> }>;
};

export type AdConnectorByProviderVariables = Exact<{
  providerId: Scalars['String'];
  providerType: ProviderType;
}>;

export type AdConnectorByProvider = {
  adConnectorByProvider?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    logo?: Maybe<string>;
    status?: Maybe<boolean>;
  }>;
};

export type AdConnectorListVariables = Exact<{
  userPoolId: Scalars['String'];
  providerType?: Maybe<ProviderType>;
}>;

export type AdConnectorList = {
  adConnectorList?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        secret?: Maybe<string>;
        salt?: Maybe<string>;
        logo?: Maybe<string>;
        enabled?: Maybe<boolean>;
        userPoolId?: Maybe<string>;
        status?: Maybe<boolean>;
        createdAt?: Maybe<string>;
      }>
    >
  >;
};

export type BindedOAuthListVariables = Exact<{
  client: Scalars['String'];
  user?: Maybe<Scalars['String']>;
}>;

export type BindedOAuthList = {
  bindedOAuthList?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        type?: Maybe<string>;
        unionid?: Maybe<string>;
        userInfo?: Maybe<string>;
        createdAt?: Maybe<string>;
      }>
    >
  >;
};

export type CheckAdConnectorStatusVariables = Exact<{
  adConnectorId: Scalars['String'];
}>;

export type CheckAdConnectorStatus = {
  checkAdConnectorStatus?: Maybe<boolean>;
};

export type CheckIsReservedDomainVariables = Exact<{
  domainValue: Scalars['String'];
}>;

export type CheckIsReservedDomain = {
  checkIsReservedDomain?: Maybe<{
    domainValue?: Maybe<string>;
    isReserved?: Maybe<boolean>;
  }>;
};

export type CheckLoginStatusVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;

export type CheckLoginStatus = {
  checkLoginStatus?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
    token?: Maybe<{ iat?: Maybe<number>; exp?: Maybe<number> }>;
  }>;
};

export type CheckPhoneCodeVariables = Exact<{
  userPoolId: Scalars['String'];
  phone: Scalars['String'];
  phoneCode: Scalars['String'];
}>;

export type CheckPhoneCode = {
  checkPhoneCode?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type ClientVariables = Exact<{
  id: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
  fromAdmin?: Maybe<Scalars['Boolean']>;
}>;

export type Client = {
  client?: Maybe<{
    _id?: Maybe<string>;
    iamType?: Maybe<IamType>;
    domain?: Maybe<string>;
    userLimit?: Maybe<number>;
    usersCount?: Maybe<number>;
    logo?: Maybe<string>;
    emailVerifiedDefault?: Maybe<boolean>;
    sendWelcomeEmail?: Maybe<boolean>;
    registerDisabled?: Maybe<boolean>;
    showWXMPQRCode?: Maybe<boolean>;
    useMiniLogin?: Maybe<boolean>;
    useSelfWxapp?: Maybe<boolean>;
    allowedOrigins?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    token?: Maybe<string>;
    descriptions?: Maybe<string>;
    jwtExpired?: Maybe<number>;
    createdAt?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enableEmail?: Maybe<boolean>;
    user?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userPoolTypes?: Maybe<
      Array<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        example?: Maybe<string>;
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
  }>;
};

export type ClientRolesVariables = Exact<{
  client: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type ClientRoles = {
  clientRoles?: Maybe<{
    totalCount: number;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          descriptions?: Maybe<string>;
          client?: Maybe<string>;
          permissions?: Maybe<string>;
          createdAt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type DecodeJwtTokenVariables = Exact<{
  token?: Maybe<Scalars['String']>;
}>;

export type DecodeJwtToken = {
  decodeJwtToken?: Maybe<{
    iat?: Maybe<string>;
    exp?: Maybe<number>;
    data?: Maybe<{
      email?: Maybe<string>;
      id?: Maybe<string>;
      clientId?: Maybe<string>;
      unionid?: Maybe<string>;
    }>;
    status?: Maybe<{
      message?: Maybe<string>;
      code?: Maybe<number>;
      status?: Maybe<boolean>;
    }>;
  }>;
};

export type EmailDomainTopNListVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type EmailDomainTopNList = {
  emailDomainTopNList?: Maybe<
    Array<Maybe<{ domain?: Maybe<string>; count?: Maybe<number> }>>
  >;
};

export type FindClientsByIdArrayVariables = Exact<{
  clientsId?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;

export type FindClientsByIdArray = {
  findClientsByIdArray?: Maybe<{
    totalCount: number;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          createdAt?: Maybe<string>;
          usersCount?: Maybe<number>;
        }>
      >
    >;
  }>;
};

export type GetAccessTokenByAppSecretVariables = Exact<{
  secret?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  retUserId?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
}>;

export type GetAccessTokenByAppSecret = {
  getAccessTokenByAppSecret?: Maybe<string>;
};

export type GetAllWebhooksVariables = Exact<{
  client: Scalars['String'];
}>;

export type GetAllWebhooks = {
  getAllWebhooks?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        client: string;
        url: string;
        isLastTimeSuccess?: Maybe<boolean>;
        contentType: string;
        secret?: Maybe<string>;
        enable: boolean;
        events: Array<{
          name: string;
          label: string;
          description?: Maybe<string>;
        }>;
      }>
    >
  >;
};

export type GetAppSecretByClientIdVariables = Exact<{
  token?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
}>;

export type GetAppSecretByClientId = {
  getAppSecretByClientId?: Maybe<{
    secret?: Maybe<string>;
    clientId?: Maybe<string>;
  }>;
};

export type GetClientWhenSdkInitVariables = Exact<{
  secret?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  retUserId?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['Int']>;
}>;

export type GetClientWhenSdkInit = {
  getClientWhenSdkInit?: Maybe<{
    accessToken?: Maybe<string>;
    clientInfo?: Maybe<{
      _id?: Maybe<string>;
      iamType?: Maybe<IamType>;
      domain?: Maybe<string>;
      userLimit?: Maybe<number>;
      usersCount?: Maybe<number>;
      logo?: Maybe<string>;
      emailVerifiedDefault?: Maybe<boolean>;
      sendWelcomeEmail?: Maybe<boolean>;
      registerDisabled?: Maybe<boolean>;
      showWXMPQRCode?: Maybe<boolean>;
      useMiniLogin?: Maybe<boolean>;
      useSelfWxapp?: Maybe<boolean>;
      allowedOrigins?: Maybe<string>;
      name?: Maybe<string>;
      secret?: Maybe<string>;
      token?: Maybe<string>;
      descriptions?: Maybe<string>;
      jwtExpired?: Maybe<number>;
      createdAt?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
      enableEmail?: Maybe<boolean>;
    }>;
  }>;
};

export type GetCustomMfaVariables = Exact<{
  userIdInMiniLogin: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type GetCustomMfa = {
  getCustomMFA?: Maybe<{
    total?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          userIdInMiniLogin?: Maybe<string>;
          remark?: Maybe<string>;
          name?: Maybe<string>;
          secret?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type GetOAuthedAppInfoVariables = Exact<{
  appId: Scalars['String'];
}>;

export type GetOAuthedAppInfo = {
  getOAuthedAppInfo?: Maybe<{
    _id?: Maybe<string>;
    name?: Maybe<string>;
    domain?: Maybe<string>;
    image?: Maybe<string>;
    redirectUris?: Maybe<Array<Maybe<string>>>;
    appSecret?: Maybe<string>;
    client_id?: Maybe<string>;
    clientId?: Maybe<string>;
    grants?: Maybe<Array<Maybe<string>>>;
    description?: Maybe<string>;
    homepageURL?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    when?: Maybe<string>;
    css?: Maybe<string>;
    loginUrl?: Maybe<string>;
    casExpire?: Maybe<number>;
  }>;
};

export type GetOAuthedAppListVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type GetOAuthedAppList = {
  getOAuthedAppList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          domain?: Maybe<string>;
          image?: Maybe<string>;
          redirectUris?: Maybe<Array<Maybe<string>>>;
          appSecret?: Maybe<string>;
          client_id?: Maybe<string>;
          clientId?: Maybe<string>;
          grants?: Maybe<Array<Maybe<string>>>;
          description?: Maybe<string>;
          homepageURL?: Maybe<string>;
          isDeleted?: Maybe<boolean>;
          when?: Maybe<string>;
          css?: Maybe<string>;
          loginUrl?: Maybe<string>;
          casExpire?: Maybe<number>;
        }>
      >
    >;
  }>;
};

export type GetUserLoginAreaStatisticOfClientVariables = Exact<{
  userPool: Scalars['String'];
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
}>;

export type GetUserLoginAreaStatisticOfClient = {
  getUserLoginAreaStatisticOfClient?: Maybe<string>;
};

export type GetUserPoolByDomainVariables = Exact<{
  domain: Scalars['String'];
}>;

export type GetUserPoolByDomain = {
  getUserPoolByDomain?: Maybe<{
    _id: string;
    name: string;
    domain?: Maybe<string>;
    logo: string;
    iamType?: Maybe<IamType>;
    userLimit?: Maybe<number>;
    createdAt?: Maybe<string>;
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
  }>;
};

export type GetUserPoolSettingsVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type GetUserPoolSettings = {
  getUserPoolSettings?: Maybe<{
    _id?: Maybe<string>;
    iamType?: Maybe<IamType>;
    domain?: Maybe<string>;
    userLimit?: Maybe<number>;
    usersCount?: Maybe<number>;
    logo?: Maybe<string>;
    emailVerifiedDefault?: Maybe<boolean>;
    sendWelcomeEmail?: Maybe<boolean>;
    registerDisabled?: Maybe<boolean>;
    showWXMPQRCode?: Maybe<boolean>;
    useMiniLogin?: Maybe<boolean>;
    useSelfWxapp?: Maybe<boolean>;
    allowedOrigins?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    token?: Maybe<string>;
    descriptions?: Maybe<string>;
    jwtExpired?: Maybe<number>;
    createdAt?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enableEmail?: Maybe<boolean>;
    user?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userPoolTypes?: Maybe<
      Array<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        example?: Maybe<string>;
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
  }>;
};

export type GetWebhookDetailVariables = Exact<{
  client: Scalars['String'];
}>;

export type GetWebhookDetail = {
  getWebhookDetail?: Maybe<{
    _id?: Maybe<string>;
    client: string;
    url: string;
    isLastTimeSuccess?: Maybe<boolean>;
    contentType: string;
    secret?: Maybe<string>;
    enable: boolean;
    events: Array<{ name: string; label: string; description?: Maybe<string> }>;
  }>;
};

export type GetWebhookLogDetailVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetWebhookLogDetail = {
  getWebhookLogDetail?: Maybe<{
    _id: string;
    webhook: string;
    client: string;
    event: string;
    errorMessage?: Maybe<string>;
    when?: Maybe<string>;
    request?: Maybe<{ headers?: Maybe<string>; payload?: Maybe<string> }>;
    response?: Maybe<{
      headers?: Maybe<string>;
      body?: Maybe<string>;
      statusCode?: Maybe<number>;
    }>;
  }>;
};

export type GetWebhookLogsVariables = Exact<{
  webhook: Scalars['String'];
}>;

export type GetWebhookLogs = {
  getWebhookLogs?: Maybe<
    Array<
      Maybe<{
        _id: string;
        webhook: string;
        client: string;
        event: string;
        errorMessage?: Maybe<string>;
        when?: Maybe<string>;
        request?: Maybe<{ headers?: Maybe<string>; payload?: Maybe<string> }>;
        response?: Maybe<{
          headers?: Maybe<string>;
          body?: Maybe<string>;
          statusCode?: Maybe<number>;
        }>;
      }>
    >
  >;
};

export type GetWebhookSettingOptionsVariables = Exact<{ [key: string]: never }>;

export type GetWebhookSettingOptions = {
  getWebhookSettingOptions?: Maybe<{
    webhookEvents: Array<
      Maybe<{ name: string; label: string; description?: Maybe<string> }>
    >;
    contentTypes: Array<Maybe<{ name: string; label: string }>>;
  }>;
};

export type GroupMetadataVariables = Exact<{
  _id: Scalars['String'];
}>;

export type GroupMetadata = {
  groupMetadata: Array<{ key: string; value: string }>;
};

export type InterConnectionsVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type InterConnections = {
  interConnections: Array<{
    sourceUserPoolId: string;
    sourceUserId: string;
    targetUserPoolId: string;
    targetUserId: string;
    enabled: boolean;
    expiresdAt?: Maybe<string>;
  }>;
};

export type IsAdConnectorAliveVariables = Exact<{
  adConnectorId?: Maybe<Scalars['String']>;
}>;

export type IsAdConnectorAlive = {
  isAdConnectorAlive?: Maybe<{ isAlive?: Maybe<boolean> }>;
};

export type IsAppAuthorizedByUserVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  appId?: Maybe<Scalars['String']>;
}>;

export type IsAppAuthorizedByUser = {
  isAppAuthorizedByUser?: Maybe<{ authorized?: Maybe<boolean> }>;
};

export type IsClientBelongToUserVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  permissionDescriptors?: Maybe<
    Array<Maybe<PermissionDescriptorsListInputType>>
  >;
}>;

export type IsClientBelongToUser = { isClientBelongToUser?: Maybe<boolean> };

export type IsClientOfUserVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
}>;

export type IsClientOfUser = { isClientOfUser?: Maybe<boolean> };

export type IsDomainAvaliableVariables = Exact<{
  domain: Scalars['String'];
}>;

export type IsDomainAvaliable = { isDomainAvaliable?: Maybe<boolean> };

export type IsLoginExpiredVariables = Exact<{
  id: Scalars['String'];
}>;

export type IsLoginExpired = { isLoginExpired?: Maybe<boolean> };

export type IsRootNodeOfOrgVariables = Exact<{
  input: IsRootNodeOfOrgInput;
}>;

export type IsRootNodeOfOrg = { isRootNodeOfOrg?: Maybe<boolean> };

export type IsUserInGroupVariables = Exact<{
  groupId: Scalars['String'];
  userId: Scalars['String'];
}>;

export type IsUserInGroup = { isUserInGroup?: Maybe<boolean> };

export type LoginCountVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
}>;

export type LoginCount = {
  loginCount?: Maybe<{
    _id?: Maybe<string>;
    client?: Maybe<string>;
    count?: Maybe<number>;
    month?: Maybe<string>;
    isError?: Maybe<boolean>;
    totalNumber?: Maybe<number>;
  }>;
};

export type LoginHotDotPicDataVariables = Exact<{
  client?: Maybe<Scalars['String']>;
}>;

export type LoginHotDotPicData = {
  loginHotDotPicData?: Maybe<{
    list?: Maybe<Array<Maybe<Array<Maybe<string>>>>>;
  }>;
};

export type NotBindOAuthListVariables = Exact<{
  client?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
}>;

export type NotBindOAuthList = {
  notBindOAuthList?: Maybe<
    Array<
      Maybe<{
        type?: Maybe<string>;
        oAuthUrl?: Maybe<string>;
        image?: Maybe<string>;
        name?: Maybe<string>;
        binded?: Maybe<boolean>;
      }>
    >
  >;
};

export type OrgVariables = Exact<{
  _id: Scalars['String'];
}>;

export type Org = {
  org: {
    _id: string;
    logo?: Maybe<string>;
    nodes: Array<{
      _id: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      children: Array<string>;
      root?: Maybe<boolean>;
      depth?: Maybe<number>;
    }>;
  };
};

export type OrgChildrenNodesVariables = Exact<{
  input: OrgChildrenNodesInput;
}>;

export type OrgChildrenNodes = {
  orgChildrenNodes: Array<{
    depth: number;
    group: {
      _id: string;
      userPoolId: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    };
  }>;
};

export type OrgNodeUserListVariables = Exact<{
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
}>;

export type OrgNodeUserList = {
  orgNodeUserList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          email?: Maybe<string>;
          unionid?: Maybe<string>;
          openid?: Maybe<string>;
          emailVerified?: Maybe<boolean>;
          phone?: Maybe<string>;
          phoneVerified?: Maybe<boolean>;
          username?: Maybe<string>;
          nickname?: Maybe<string>;
          company?: Maybe<string>;
          photo?: Maybe<string>;
          browser?: Maybe<string>;
          device?: Maybe<string>;
          password?: Maybe<string>;
          registerInClient?: Maybe<string>;
          registerMethod?: Maybe<string>;
          oauth?: Maybe<string>;
          token?: Maybe<string>;
          tokenExpiredAt?: Maybe<string>;
          loginsCount?: Maybe<number>;
          lastLogin?: Maybe<string>;
          lastIP?: Maybe<string>;
          signedUp?: Maybe<string>;
          blocked?: Maybe<boolean>;
          isDeleted?: Maybe<boolean>;
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
          metadata?: Maybe<string>;
          salt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type OrgRootNodeVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  _id: Scalars['String'];
}>;

export type OrgRootNode = {
  orgRootNode: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  };
};

export type OrgsVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type Orgs = {
  orgs: {
    totalCount: number;
    list: Array<{ _id: string; logo?: Maybe<string> }>;
  };
};

export type PlatformUserGrowthTrendVariables = Exact<{
  today?: Maybe<Scalars['String']>;
}>;

export type PlatformUserGrowthTrend = {
  platformUserGrowthTrend?: Maybe<
    Array<Maybe<{ day?: Maybe<string>; count?: Maybe<number> }>>
  >;
};

export type PreviewEmailTemplateVariables = Exact<{
  type?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
}>;

export type PreviewEmailTemplate = {
  previewEmailTemplate?: Maybe<{
    message?: Maybe<string>;
    code?: Maybe<number>;
    status?: Maybe<boolean>;
  }>;
};

export type ProviderListByAdConnectorVariables = Exact<{
  _id: Scalars['String'];
}>;

export type ProviderListByAdConnector = {
  providerListByADConnector?: Maybe<
    Array<
      Maybe<{
        providerType: string;
        providerId: string;
        userPoolId: string;
        adConnectorId: string;
      }>
    >
  >;
};

export type QiNiuUploadTokenVariables = Exact<{
  type?: Maybe<Scalars['String']>;
}>;

export type QiNiuUploadToken = { qiNiuUploadToken?: Maybe<string> };

export type QpsByTimeVariables = Exact<{
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  currentTime?: Maybe<Scalars['String']>;
}>;

export type QpsByTime = {
  qpsByTime?: Maybe<
    Array<Maybe<{ qps?: Maybe<number>; time?: Maybe<string> }>>
  >;
};

export type QueryAuthAuditRecordsVariables = Exact<{
  userPoolId: Scalars['String'];
  sortBy?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type QueryAuthAuditRecords = {
  queryAuthAuditRecords?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          userPoolId?: Maybe<string>;
          appType?: Maybe<string>;
          appId?: Maybe<string>;
          event?: Maybe<string>;
          userId?: Maybe<string>;
          createdAt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type QueryAuthorizedUserPoolVariables = Exact<{
  unionid?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  openid?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type QueryAuthorizedUserPool = {
  queryAuthorizedUserPool?: Maybe<{
    total?: Maybe<number>;
    list?: Maybe<Array<Maybe<{ userId?: Maybe<string> }>>>;
  }>;
};

export type QueryClientVariables = Exact<{
  id: Scalars['String'];
}>;

export type QueryClient = {
  queryClient?: Maybe<{
    _id?: Maybe<string>;
    iamType?: Maybe<IamType>;
    domain?: Maybe<string>;
    userLimit?: Maybe<number>;
    usersCount?: Maybe<number>;
    logo?: Maybe<string>;
    emailVerifiedDefault?: Maybe<boolean>;
    sendWelcomeEmail?: Maybe<boolean>;
    registerDisabled?: Maybe<boolean>;
    showWXMPQRCode?: Maybe<boolean>;
    useMiniLogin?: Maybe<boolean>;
    useSelfWxapp?: Maybe<boolean>;
    allowedOrigins?: Maybe<string>;
    name?: Maybe<string>;
    secret?: Maybe<string>;
    token?: Maybe<string>;
    descriptions?: Maybe<string>;
    jwtExpired?: Maybe<number>;
    createdAt?: Maybe<string>;
    isDeleted?: Maybe<boolean>;
    enableEmail?: Maybe<boolean>;
    user?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userPoolTypes?: Maybe<
      Array<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        example?: Maybe<string>;
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
  }>;
};

export type QueryCollaborationByUserPoolIdAndUserIdVariables = Exact<{
  userId: Scalars['String'];
  userPoolId: Scalars['String'];
}>;

export type QueryCollaborationByUserPoolIdAndUserId = {
  queryCollaborationByUserPoolIdAndUserId?: Maybe<{
    _id?: Maybe<string>;
    createdAt?: Maybe<string>;
    owner?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    collaborator?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    userPool?: Maybe<{
      _id?: Maybe<string>;
      iamType?: Maybe<IamType>;
      domain?: Maybe<string>;
      userLimit?: Maybe<number>;
      usersCount?: Maybe<number>;
      logo?: Maybe<string>;
      emailVerifiedDefault?: Maybe<boolean>;
      sendWelcomeEmail?: Maybe<boolean>;
      registerDisabled?: Maybe<boolean>;
      showWXMPQRCode?: Maybe<boolean>;
      useMiniLogin?: Maybe<boolean>;
      useSelfWxapp?: Maybe<boolean>;
      allowedOrigins?: Maybe<string>;
      name?: Maybe<string>;
      secret?: Maybe<string>;
      token?: Maybe<string>;
      descriptions?: Maybe<string>;
      jwtExpired?: Maybe<number>;
      createdAt?: Maybe<string>;
      isDeleted?: Maybe<boolean>;
      enableEmail?: Maybe<boolean>;
    }>;
    permissionDescriptors?: Maybe<
      Array<
        Maybe<{
          permissionId?: Maybe<string>;
          name?: Maybe<string>;
          operationAllow?: Maybe<number>;
        }>
      >
    >;
  }>;
};

export type QueryCollaborativeUserPoolByUserIdVariables = Exact<{
  userId: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type QueryCollaborativeUserPoolByUserId = {
  queryCollaborativeUserPoolByUserId?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<Maybe<{ _id?: Maybe<string>; createdAt?: Maybe<string> }>>
    >;
  }>;
};

export type QueryCollaboratorPermissionsVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  collaborationId?: Maybe<Scalars['String']>;
}>;

export type QueryCollaboratorPermissions = {
  queryCollaboratorPermissions?: Maybe<{
    collaborator?: Maybe<{
      _id?: Maybe<string>;
      username?: Maybe<string>;
      email?: Maybe<string>;
      unionid?: Maybe<string>;
      openid?: Maybe<string>;
      emailVerified?: Maybe<boolean>;
      phone?: Maybe<string>;
      phoneVerified?: Maybe<boolean>;
      nickname?: Maybe<string>;
      company?: Maybe<string>;
      photo?: Maybe<string>;
      browser?: Maybe<string>;
      password?: Maybe<string>;
      registerInClient?: Maybe<string>;
      registerMethod?: Maybe<string>;
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
      oldPassword?: Maybe<string>;
      metadata?: Maybe<string>;
    }>;
    list?: Maybe<
      Array<
        Maybe<{
          permissionId?: Maybe<string>;
          name?: Maybe<string>;
          operationAllow?: Maybe<number>;
        }>
      >
    >;
  }>;
};

export type QueryCollaboratorsByUserPoolIdVariables = Exact<{
  userPoolId: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}>;

export type QueryCollaboratorsByUserPoolId = {
  queryCollaboratorsByUserPoolId?: Maybe<{
    collaborationId?: Maybe<string>;
    list?: Maybe<
      Array<Maybe<{ _id?: Maybe<string>; createdAt?: Maybe<string> }>>
    >;
  }>;
};

export type QueryInvitationVariables = Exact<{
  client: Scalars['String'];
}>;

export type QueryInvitation = {
  queryInvitation?: Maybe<
    Array<
      Maybe<{
        client: string;
        phone?: Maybe<string>;
        isDeleted?: Maybe<boolean>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
      }>
    >
  >;
};

export type QueryInvitationStateVariables = Exact<{
  client: Scalars['String'];
}>;

export type QueryInvitationState = {
  queryInvitationState?: Maybe<{
    client: string;
    enablePhone?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type QueryMfaVariables = Exact<{
  _id?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userPoolId?: Maybe<Scalars['String']>;
}>;

export type QueryMfa = {
  queryMFA?: Maybe<{
    _id?: Maybe<string>;
    userId?: Maybe<string>;
    userPoolId?: Maybe<string>;
    enable?: Maybe<boolean>;
    shareKey?: Maybe<string>;
  }>;
};

export type QueryOperationLogsVariables = Exact<{
  userPoolId: Scalars['String'];
  coll: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type QueryOperationLogs = {
  queryOperationLogs?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          operatorId?: Maybe<string>;
          operatorName?: Maybe<string>;
          operatorAvatar?: Maybe<string>;
          isAdmin?: Maybe<boolean>;
          isCollaborator?: Maybe<boolean>;
          isOwner?: Maybe<boolean>;
          operationType?: Maybe<string>;
          updatedFields?: Maybe<string>;
          removedFields?: Maybe<Array<Maybe<string>>>;
          operateAt?: Maybe<string>;
          fullDocument?: Maybe<string>;
          coll?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type QueryPasswordFaasEnabledVariables = Exact<{
  client: Scalars['String'];
}>;

export type QueryPasswordFaasEnabled = {
  queryPasswordFaasEnabled?: Maybe<{
    encryptUrl?: Maybe<string>;
    decryptUrl?: Maybe<string>;
    user?: Maybe<string>;
    client?: Maybe<string>;
    logs?: Maybe<string>;
    enable?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  }>;
};

export type QueryPasswordStrengthSettingsByUserPoolIdVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type QueryPasswordStrengthSettingsByUserPoolId = {
  queryPasswordStrengthSettingsByUserPoolId?: Maybe<{
    userPoolId?: Maybe<string>;
    pwdStrength?: Maybe<number>;
  }>;
};

export type QueryPermissionListVariables = Exact<{ [key: string]: never }>;

export type QueryPermissionList = {
  queryPermissionList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          affect?: Maybe<string>;
          description?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type QueryProviderInfoByAppIdVariables = Exact<{
  appId?: Maybe<Scalars['String']>;
}>;

export type QueryProviderInfoByAppId = {
  queryProviderInfoByAppId?: Maybe<{
    _id?: Maybe<string>;
    type?: Maybe<string>;
    name?: Maybe<string>;
    image?: Maybe<string>;
    domain?: Maybe<string>;
    clientId?: Maybe<string>;
    client_id?: Maybe<string>;
    css?: Maybe<string>;
    redirect_uris?: Maybe<Array<Maybe<string>>>;
  }>;
};

export type QueryProviderInfoByDomainVariables = Exact<{
  domain?: Maybe<Scalars['String']>;
}>;

export type QueryProviderInfoByDomain = {
  queryProviderInfoByDomain?: Maybe<{
    _id?: Maybe<string>;
    type?: Maybe<string>;
    name?: Maybe<string>;
    image?: Maybe<string>;
    domain?: Maybe<string>;
    clientId?: Maybe<string>;
    client_id?: Maybe<string>;
    css?: Maybe<string>;
    redirect_uris?: Maybe<Array<Maybe<string>>>;
  }>;
};

export type QueryRoleByUserIdVariables = Exact<{
  user: Scalars['String'];
  client: Scalars['String'];
}>;

export type QueryRoleByUserId = {
  queryRoleByUserId?: Maybe<{
    totalCount: number;
    list?: Maybe<
      Array<Maybe<{ _id?: Maybe<string>; createdAt?: Maybe<string> }>>
    >;
  }>;
};

export type QuerySmsSendCountVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type QuerySmsSendCount = {
  querySMSSendCount?: Maybe<{
    count?: Maybe<number>;
    limitCount?: Maybe<number>;
  }>;
};

export type QuerySystemOAuthSettingVariables = Exact<{ [key: string]: never }>;

export type QuerySystemOAuthSetting = {
  querySystemOAuthSetting?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        alias?: Maybe<string>;
        image?: Maybe<string>;
        description?: Maybe<string>;
        enabled?: Maybe<boolean>;
        url?: Maybe<string>;
        client?: Maybe<string>;
        user?: Maybe<string>;
        oAuthUrl?: Maybe<string>;
        wxappLogo?: Maybe<string>;
        fields?: Maybe<
          Array<
            Maybe<{
              label?: Maybe<string>;
              type?: Maybe<string>;
              placeholder?: Maybe<string>;
              value?: Maybe<string>;
              checked?: Maybe<Array<Maybe<string>>>;
            }>
          >
        >;
        oauth?: Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          alias?: Maybe<string>;
          image?: Maybe<string>;
          description?: Maybe<string>;
          enabled?: Maybe<boolean>;
          url?: Maybe<string>;
          client?: Maybe<string>;
          user?: Maybe<string>;
          oAuthUrl?: Maybe<string>;
          wxappLogo?: Maybe<string>;
        }>;
      }>
    >
  >;
};

export type QueryUserPoolCommonInfoVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type QueryUserPoolCommonInfo = {
  queryUserPoolCommonInfo?: Maybe<{
    _id: string;
    name: string;
    domain?: Maybe<string>;
    logo: string;
    iamType?: Maybe<IamType>;
    userLimit?: Maybe<number>;
    createdAt?: Maybe<string>;
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
  }>;
};

export type RbacGroupVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  _id: Scalars['String'];
}>;

export type RbacGroup = {
  rbacGroup?: Maybe<{
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  }>;
};

export type RbacGroupListVariables = Exact<{
  userPoolId: Scalars['String'];
  sortBy?: Maybe<SortByEnum>;
  dissociative?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type RbacGroupList = {
  rbacGroupList?: Maybe<{
    totalCount?: Maybe<number>;
    list: Array<{
      _id: string;
      userPoolId: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type RbacPermissionVariables = Exact<{
  _id: Scalars['String'];
}>;

export type RbacPermission = {
  rbacPermission?: Maybe<{
    _id: string;
    name: string;
    userPoolId: string;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    description?: Maybe<string>;
  }>;
};

export type RbacPermissionListVariables = Exact<{
  userPoolId: Scalars['String'];
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type RbacPermissionList = {
  rbacPermissionList?: Maybe<{
    totalCount?: Maybe<number>;
    list: Array<{
      _id: string;
      name: string;
      userPoolId: string;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      description?: Maybe<string>;
    }>;
  }>;
};

export type RbacRoleVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  _id: Scalars['String'];
}>;

export type RbacRole = {
  rbacRole?: Maybe<{
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  }>;
};

export type RbacRoleListVariables = Exact<{
  userPoolId: Scalars['String'];
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type RbacRoleList = {
  rbacRoleList?: Maybe<{
    totalCount?: Maybe<number>;
    list: Array<{
      _id: string;
      userPoolId: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type RecentServiceCallVariables = Exact<{
  today?: Maybe<Scalars['String']>;
}>;

export type RecentServiceCall = {
  recentServiceCall?: Maybe<{
    userService?: Maybe<
      Array<Maybe<{ day?: Maybe<string>; count?: Maybe<number> }>>
    >;
    emailService?: Maybe<
      Array<Maybe<{ day?: Maybe<string>; count?: Maybe<number> }>>
    >;
    oAuthService?: Maybe<
      Array<Maybe<{ day?: Maybe<string>; count?: Maybe<number> }>>
    >;
    payService?: Maybe<
      Array<Maybe<{ day?: Maybe<string>; count?: Maybe<number> }>>
    >;
  }>;
};

export type RegisterEveryDayCountVariables = Exact<{
  client?: Maybe<Scalars['String']>;
}>;

export type RegisterEveryDayCount = {
  registerEveryDayCount?: Maybe<{
    list?: Maybe<Array<Maybe<Array<Maybe<string>>>>>;
  }>;
};

export type RegisterMethodTopListVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type RegisterMethodTopList = {
  registerMethodTopList?: Maybe<
    Array<Maybe<{ method?: Maybe<string>; count?: Maybe<number> }>>
  >;
};

export type RequestListVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type RequestList = {
  requestList?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          when?: Maybe<string>;
          where?: Maybe<string>;
          ip?: Maybe<string>;
          size?: Maybe<number>;
          responseTime?: Maybe<number>;
          service?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type RuleByIdVariables = Exact<{
  _id: Scalars['String'];
}>;

export type RuleById = {
  ruleById: {
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    type: RuleTypes;
    enabled: boolean;
    faasUrl: string;
    code: string;
    order?: Maybe<number>;
    async?: Maybe<boolean>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
  };
};

export type RuleEnvVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type RuleEnv = {
  ruleEnv: { totalCount: number; list: Array<{ key: string; value: string }> };
};

export type RulesVariables = Exact<{
  userPoolId: Scalars['String'];
}>;

export type Rules = {
  rules: {
    totalCount: number;
    list: Array<{
      _id: string;
      userPoolId: string;
      name: string;
      description?: Maybe<string>;
      type: RuleTypes;
      enabled: boolean;
      faasUrl: string;
      code: string;
      order?: Maybe<number>;
      async?: Maybe<boolean>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type SamlIdPFieldMappingsVariables = Exact<{
  _id: Scalars['String'];
}>;

export type SamlIdPFieldMappings = {
  samlIdPFieldMappings: Array<{
    sourceExpression: string;
    description?: Maybe<string>;
    type: string;
    targetField: string;
  }>;
};

export type SearchGroupByMetadataVariables = Exact<{
  userPoolId: Scalars['String'];
  key: Scalars['String'];
  value: Scalars['String'];
}>;

export type SearchGroupByMetadata = {
  searchGroupByMetadata: {
    totalCount?: Maybe<number>;
    list: Array<{
      _id: string;
      userPoolId: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type SearchOrgNodeUserVariables = Exact<{
  orgId: Scalars['String'];
  nodeId: Scalars['String'];
  query: Scalars['String'];
  includeChildrenNodes?: Maybe<Scalars['Boolean']>;
}>;

export type SearchOrgNodeUser = {
  searchOrgNodeUser?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          email?: Maybe<string>;
          unionid?: Maybe<string>;
          openid?: Maybe<string>;
          emailVerified?: Maybe<boolean>;
          phone?: Maybe<string>;
          phoneVerified?: Maybe<boolean>;
          username?: Maybe<string>;
          nickname?: Maybe<string>;
          company?: Maybe<string>;
          photo?: Maybe<string>;
          browser?: Maybe<string>;
          device?: Maybe<string>;
          password?: Maybe<string>;
          registerInClient?: Maybe<string>;
          registerMethod?: Maybe<string>;
          oauth?: Maybe<string>;
          token?: Maybe<string>;
          tokenExpiredAt?: Maybe<string>;
          loginsCount?: Maybe<number>;
          lastLogin?: Maybe<string>;
          lastIP?: Maybe<string>;
          signedUp?: Maybe<string>;
          blocked?: Maybe<boolean>;
          isDeleted?: Maybe<boolean>;
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
          metadata?: Maybe<string>;
          salt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type SearchOrgNodesVariables = Exact<{
  sortBy?: Maybe<SortByEnum>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  orgId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<KeyValuePair>>;
}>;

export type SearchOrgNodes = {
  searchOrgNodes: Array<{
    _id: string;
    userPoolId: string;
    name: string;
    description?: Maybe<string>;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    roles?: Maybe<{ totalCount?: Maybe<number> }>;
    permissions?: Maybe<{ totalCount?: Maybe<number> }>;
    users?: Maybe<{ totalCount?: Maybe<number> }>;
  }>;
};

export type SearchUserVariables = Exact<{
  type: Scalars['String'];
  value: Scalars['String'];
  registerInClient: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type SearchUser = {
  searchUser?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          email?: Maybe<string>;
          unionid?: Maybe<string>;
          openid?: Maybe<string>;
          emailVerified?: Maybe<boolean>;
          phone?: Maybe<string>;
          phoneVerified?: Maybe<boolean>;
          username?: Maybe<string>;
          nickname?: Maybe<string>;
          company?: Maybe<string>;
          photo?: Maybe<string>;
          browser?: Maybe<string>;
          device?: Maybe<string>;
          password?: Maybe<string>;
          registerInClient?: Maybe<string>;
          registerMethod?: Maybe<string>;
          oauth?: Maybe<string>;
          token?: Maybe<string>;
          tokenExpiredAt?: Maybe<string>;
          loginsCount?: Maybe<number>;
          lastLogin?: Maybe<string>;
          lastIP?: Maybe<string>;
          signedUp?: Maybe<string>;
          blocked?: Maybe<boolean>;
          isDeleted?: Maybe<boolean>;
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
          metadata?: Maybe<string>;
          salt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type SearchUserBasicInfoByIdVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;

export type SearchUserBasicInfoById = {
  searchUserBasicInfoById?: Maybe<{
    _id?: Maybe<string>;
    username?: Maybe<string>;
    photo?: Maybe<string>;
    email?: Maybe<string>;
  }>;
};

export type StatisticVariables = Exact<{
  sortBy?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type Statistic = {
  statistic?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          username?: Maybe<string>;
          email?: Maybe<string>;
          loginsCount?: Maybe<number>;
          appsCount?: Maybe<number>;
          OAuthCount?: Maybe<number>;
        }>
      >
    >;
  }>;
};

export type SupportedSamlFieldMappingsVariables = Exact<{
  [key: string]: never;
}>;

export type SupportedSamlFieldMappings = {
  supportedSAMLFieldMappings: Array<{
    name: string;
    type: string;
    description?: Maybe<string>;
    editable: boolean;
  }>;
};

export type TodayGeoDistributionVariables = Exact<{
  today?: Maybe<Scalars['String']>;
}>;

export type TodayGeoDistribution = {
  todayGeoDistribution?: Maybe<
    Array<
      Maybe<{
        city?: Maybe<string>;
        size?: Maybe<number>;
        point?: Maybe<Array<Maybe<number>>>;
      }>
    >
  >;
};

export type UserVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  registerInClient?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  auth?: Maybe<Scalars['Boolean']>;
  userLoginHistoryPage?: Maybe<Scalars['Int']>;
  userLoginHistoryCount?: Maybe<Scalars['Int']>;
}>;

export type User = {
  user?: Maybe<{
    _id?: Maybe<string>;
    email?: Maybe<string>;
    unionid?: Maybe<string>;
    openid?: Maybe<string>;
    emailVerified?: Maybe<boolean>;
    phone?: Maybe<string>;
    phoneVerified?: Maybe<boolean>;
    username?: Maybe<string>;
    nickname?: Maybe<string>;
    company?: Maybe<string>;
    photo?: Maybe<string>;
    browser?: Maybe<string>;
    device?: Maybe<string>;
    password?: Maybe<string>;
    registerInClient?: Maybe<string>;
    registerMethod?: Maybe<string>;
    oauth?: Maybe<string>;
    token?: Maybe<string>;
    tokenExpiredAt?: Maybe<string>;
    loginsCount?: Maybe<number>;
    lastLogin?: Maybe<string>;
    lastIP?: Maybe<string>;
    signedUp?: Maybe<string>;
    blocked?: Maybe<boolean>;
    isDeleted?: Maybe<boolean>;
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
    metadata?: Maybe<string>;
    salt?: Maybe<string>;
    group?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      client?: Maybe<string>;
      permissions?: Maybe<string>;
      createdAt?: Maybe<string>;
    }>;
    clientType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      description?: Maybe<string>;
      image?: Maybe<string>;
      example?: Maybe<string>;
    }>;
    userLocation?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          when?: Maybe<string>;
          where?: Maybe<string>;
        }>
      >
    >;
    userLoginHistory?: Maybe<{ totalCount: number }>;
    systemApplicationType?: Maybe<{
      _id?: Maybe<string>;
      name?: Maybe<string>;
      descriptions?: Maybe<string>;
      price?: Maybe<number>;
    }>;
    thirdPartyIdentity?: Maybe<{
      provider?: Maybe<string>;
      refreshToken?: Maybe<string>;
      accessToken?: Maybe<string>;
      expiresIn?: Maybe<number>;
      updatedAt?: Maybe<string>;
    }>;
  }>;
};

export type UserAnalyticsVariables = Exact<{
  clientId?: Maybe<Scalars['String']>;
}>;

export type UserAnalytics = {
  userAnalytics?: Maybe<{
    allUsers?: Maybe<number>;
    totalApps?: Maybe<number>;
    usersAddedToday?: Maybe<{ length?: Maybe<number> }>;
    usersAddedLastWeek?: Maybe<{ length?: Maybe<number> }>;
    usersLoginLastWeek?: Maybe<{ length?: Maybe<number> }>;
    totalUsers?: Maybe<{ length?: Maybe<number> }>;
  }>;
};

export type UserClientListVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<Scalars['String']>;
}>;

export type UserClientList = {
  userClientList?: Maybe<{
    totalCount: number;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          name?: Maybe<string>;
          createdAt?: Maybe<string>;
          usersCount?: Maybe<number>;
        }>
      >
    >;
  }>;
};

export type UserClientTypesVariables = Exact<{ [key: string]: never }>;

export type UserClientTypes = {
  userClientTypes?: Maybe<
    Array<
      Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        example?: Maybe<string>;
      }>
    >
  >;
};

export type UserClientsVariables = Exact<{
  userId: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  computeUsersCount?: Maybe<Scalars['Boolean']>;
}>;

export type UserClients = {
  userClients?: Maybe<{
    totalCount: number;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          iamType?: Maybe<IamType>;
          domain?: Maybe<string>;
          userLimit?: Maybe<number>;
          usersCount?: Maybe<number>;
          logo?: Maybe<string>;
          emailVerifiedDefault?: Maybe<boolean>;
          sendWelcomeEmail?: Maybe<boolean>;
          registerDisabled?: Maybe<boolean>;
          showWXMPQRCode?: Maybe<boolean>;
          useMiniLogin?: Maybe<boolean>;
          useSelfWxapp?: Maybe<boolean>;
          allowedOrigins?: Maybe<string>;
          name?: Maybe<string>;
          secret?: Maybe<string>;
          token?: Maybe<string>;
          descriptions?: Maybe<string>;
          jwtExpired?: Maybe<number>;
          createdAt?: Maybe<string>;
          isDeleted?: Maybe<boolean>;
          enableEmail?: Maybe<boolean>;
        }>
      >
    >;
  }>;
};

export type UserExistVariables = Exact<{
  userPoolId: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}>;

export type UserExist = { userExist?: Maybe<boolean> };

export type UserGroupVariables = Exact<{
  group: Scalars['String'];
  client: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type UserGroup = {
  userGroup?: Maybe<{
    totalCount: number;
    list?: Maybe<
      Array<Maybe<{ _id?: Maybe<string>; createdAt?: Maybe<string> }>>
    >;
  }>;
};

export type UserGroupListVariables = Exact<{
  _id: Scalars['String'];
}>;

export type UserGroupList = {
  userGroupList: {
    totalCount: number;
    rawList: Array<Maybe<string>>;
    list: Array<{
      _id: string;
      userPoolId: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type UserMetadataVariables = Exact<{
  _id: Scalars['String'];
}>;

export type UserMetadata = {
  userMetadata: {
    totalCount: number;
    list: Array<{ key: string; value: string }>;
  };
};

export type UserOAuthCountVariables = Exact<{
  userIds?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;

export type UserOAuthCount = { userOAuthCount?: Maybe<Array<Maybe<number>>> };

export type UserPatchVariables = Exact<{
  ids?: Maybe<Scalars['String']>;
}>;

export type UserPatch = {
  userPatch?: Maybe<{
    totalCount: number;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          email?: Maybe<string>;
          unionid?: Maybe<string>;
          openid?: Maybe<string>;
          emailVerified?: Maybe<boolean>;
          phone?: Maybe<string>;
          phoneVerified?: Maybe<boolean>;
          username?: Maybe<string>;
          nickname?: Maybe<string>;
          company?: Maybe<string>;
          photo?: Maybe<string>;
          browser?: Maybe<string>;
          device?: Maybe<string>;
          password?: Maybe<string>;
          registerInClient?: Maybe<string>;
          registerMethod?: Maybe<string>;
          oauth?: Maybe<string>;
          token?: Maybe<string>;
          tokenExpiredAt?: Maybe<string>;
          loginsCount?: Maybe<number>;
          lastLogin?: Maybe<string>;
          lastIP?: Maybe<string>;
          signedUp?: Maybe<string>;
          blocked?: Maybe<boolean>;
          isDeleted?: Maybe<boolean>;
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
          metadata?: Maybe<string>;
          salt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type UserPermissionListVariables = Exact<{
  _id: Scalars['String'];
}>;

export type UserPermissionList = {
  userPermissionList: {
    totalCount: number;
    rawList: Array<Maybe<string>>;
    list: Array<{
      _id: string;
      name: string;
      userPoolId: string;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
      description?: Maybe<string>;
    }>;
  };
};

export type UserRoleListVariables = Exact<{
  _id: Scalars['String'];
}>;

export type UserRoleList = {
  userRoleList: {
    totalCount: number;
    rawList: Array<Maybe<string>>;
    list: Array<{
      _id: string;
      userPoolId: string;
      name: string;
      description?: Maybe<string>;
      createdAt?: Maybe<string>;
      updatedAt?: Maybe<string>;
    }>;
  };
};

export type UsersVariables = Exact<{
  registerInClient?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  populate?: Maybe<Scalars['Boolean']>;
}>;

export type Users = {
  users?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          _id?: Maybe<string>;
          email?: Maybe<string>;
          unionid?: Maybe<string>;
          openid?: Maybe<string>;
          emailVerified?: Maybe<boolean>;
          phone?: Maybe<string>;
          phoneVerified?: Maybe<boolean>;
          username?: Maybe<string>;
          nickname?: Maybe<string>;
          company?: Maybe<string>;
          photo?: Maybe<string>;
          browser?: Maybe<string>;
          device?: Maybe<string>;
          password?: Maybe<string>;
          registerInClient?: Maybe<string>;
          registerMethod?: Maybe<string>;
          oauth?: Maybe<string>;
          token?: Maybe<string>;
          tokenExpiredAt?: Maybe<string>;
          loginsCount?: Maybe<number>;
          lastLogin?: Maybe<string>;
          lastIP?: Maybe<string>;
          signedUp?: Maybe<string>;
          blocked?: Maybe<boolean>;
          isDeleted?: Maybe<boolean>;
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
          metadata?: Maybe<string>;
          salt?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export type UsersByOidcAppVariables = Exact<{
  userPoolId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  appId?: Maybe<Scalars['String']>;
}>;

export type UsersByOidcApp = {
  usersByOidcApp?: Maybe<{
    list?: Maybe<Array<Maybe<string>>>;
    totalCount?: Maybe<number>;
  }>;
};

export type UsersInGroupVariables = Exact<{
  group?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
}>;

export type UsersInGroup = {
  usersInGroup?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          email?: Maybe<string>;
          username?: Maybe<string>;
          _id?: Maybe<string>;
          upgrade?: Maybe<boolean>;
        }>
      >
    >;
  }>;
};

export type ValidatePasswordVariables = Exact<{
  userPool: Scalars['String'];
  password: Scalars['String'];
  encryptedPassword: Scalars['String'];
}>;

export type ValidatePassword = {
  validatePassword?: Maybe<{ isValid?: Maybe<boolean> }>;
};

export type WechatWorkCorpVariables = Exact<{
  userPoolId: Scalars['String'];
  corpId: Scalars['String'];
}>;

export type WechatWorkCorp = {
  wechatWorkCorp?: Maybe<{
    corpId: string;
    corpName: string;
    addressBookSyncHelperSecret: string;
    addressBookSyncHelperToken: string;
    addressBookSyncHelperEncodingAESKey: string;
    twoWaySynchronizationOn: boolean;
    createdAt?: Maybe<string>;
    updatedAt?: Maybe<string>;
    orgId?: Maybe<string>;
  }>;
};

export type WxQrCodeLogVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  clientId?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Scalars['String']>;
}>;

export type WxQrCodeLog = {
  wxQRCodeLog?: Maybe<{
    totalCount?: Maybe<number>;
    list?: Maybe<
      Array<
        Maybe<{
          random?: Maybe<string>;
          expiredAt?: Maybe<string>;
          createdAt?: Maybe<string>;
          success?: Maybe<boolean>;
          qrcode?: Maybe<string>;
          used?: Maybe<boolean>;
          accessToken?: Maybe<string>;
          openid?: Maybe<string>;
          userInfo?: Maybe<string>;
          redirect?: Maybe<string>;
        }>
      >
    >;
  }>;
};

export const AddEmailProviderDocument = `
    mutation AddEmailProvider($options: EmailProviderListInput) {
  AddEmailProvider(options: $options) {
    _id
    name
    image
    description
    fields {
      label
      type
      placeholder
      help
      value
      options
    }
    client
    user
    status
    provider {
      _id
      name
      image
      description
      client
      user
      status
    }
  }
}
    `;
export const AddLdapServerDocument = `
    mutation AddLDAPServer($name: String!, $clientId: String!, $userId: String!, $ldapLink: String!, $baseDN: String!, $searchStandard: String!, $username: String!, $password: String!, $emailPostfix: String, $description: String, $enabled: Boolean) {
  AddLDAPServer(name: $name, clientId: $clientId, userId: $userId, ldapLink: $ldapLink, baseDN: $baseDN, searchStandard: $searchStandard, username: $username, password: $password, emailPostfix: $emailPostfix, description: $description, enabled: $enabled) {
    _id
    name
    clientId
    userId
    ldapLink
    baseDN
    searchStandard
    emailPostfix
    username
    password
    description
    enabled
    isDeleted
    createdAt
    updatedAt
  }
}
    `;
export const AddOAuthListDocument = `
    mutation AddOAuthList($options: OAuthListUpdateInput, $fields: [OAuthListFieldsFormUpdateInput]) {
  AddOAuthList(options: $options, fields: $fields) {
    _id
    name
    alias
    image
    description
    enabled
    url
    client
    user
    oAuthUrl
    wxappLogo
    fields {
      label
      type
      placeholder
      value
      checked
    }
    oauth {
      _id
      name
      alias
      image
      description
      enabled
      url
      client
      user
      oAuthUrl
      wxappLogo
    }
  }
}
    `;
export const AddSystemPricingDocument = `
    mutation AddSystemPricing($options: PricingFieldsInput) {
  AddSystemPricing(options: $options) {
    _id
    type
    startNumber
    freeNumber
    startPrice
    maxNumber
    d
    features
  }
}
    `;
export const ClearAvatarSrcDocument = `
    mutation ClearAvatarSrc($client: String, $oauth: String, $user: String) {
  ClearAvatarSrc(client: $client, oauth: $oauth, user: $user) {
    _id
    name
    alias
    image
    description
    enabled
    url
    client
    user
    oAuthUrl
    wxappLogo
    fields {
      label
      type
      placeholder
      value
      checked
    }
    oauth {
      _id
      name
      alias
      image
      description
      enabled
      url
      client
      user
      oAuthUrl
      wxappLogo
    }
  }
}
    `;
export const ContinuePayDocument = `
    mutation ContinuePay($order: String!) {
  ContinuePay(order: $order) {
    code
    url
    charge
  }
}
    `;
export const CreateDefaultSamlIdentityProviderSettingsDocument = `
    mutation CreateDefaultSAMLIdentityProviderSettings($name: String!, $image: String, $description: String, $mappings: AssertionMapInputType) {
  CreateDefaultSAMLIdentityProviderSettings(name: $name, image: $image, description: $description, mappings: $mappings) {
    _id
    name
    image
    description
    mappings {
      username
      nickname
      photo
      company
      providerName
      email
    }
    isDeleted
  }
}
    `;
export const CreateOAuthProviderDocument = `
    mutation CreateOAuthProvider($name: String!, $domain: String!, $redirectUris: [String]!, $grants: [String!]!, $clientId: String, $image: String, $description: String, $homepageURL: String, $casExpire: Int) {
  CreateOAuthProvider(name: $name, domain: $domain, redirectUris: $redirectUris, grants: $grants, clientId: $clientId, image: $image, description: $description, homepageURL: $homepageURL, casExpire: $casExpire) {
    _id
    name
    domain
    image
    redirectUris
    appSecret
    client_id
    clientId
    grants
    description
    homepageURL
    isDeleted
    when
    css
    loginUrl
    casExpire
  }
}
    `;
export const CreateOidcAppDocument = `
    mutation CreateOIDCApp($name: String!, $domain: String!, $redirect_uris: [String]!, $grant_types: [String!]!, $response_types: [String!]!, $clientId: String, $client_id: String, $token_endpoint_auth_method: String, $image: String, $isDefault: Boolean, $id_token_signed_response_alg: String, $id_token_encrypted_response_alg: String, $id_token_encrypted_response_enc: String, $userinfo_signed_response_alg: String, $userinfo_encrypted_response_alg: String, $userinfo_encrypted_response_enc: String, $request_object_signing_alg: String, $request_object_encryption_alg: String, $request_object_encryption_enc: String, $jwks_uri: String, $_jwks_uri: String, $jwks: String, $_jwks: String, $custom_jwks: String, $description: String, $homepageURL: String, $authorization_code_expire: String, $id_token_expire: String, $access_token_expire: String, $refresh_token_expire: String, $cas_expire: String, $customStyles: OIDCProviderCustomStylesInput, $isForTeamory: Boolean, $confirmAuthorization: Boolean) {
  CreateOIDCApp(name: $name, domain: $domain, redirect_uris: $redirect_uris, grant_types: $grant_types, response_types: $response_types, clientId: $clientId, client_id: $client_id, token_endpoint_auth_method: $token_endpoint_auth_method, image: $image, isDefault: $isDefault, id_token_signed_response_alg: $id_token_signed_response_alg, id_token_encrypted_response_alg: $id_token_encrypted_response_alg, id_token_encrypted_response_enc: $id_token_encrypted_response_enc, userinfo_signed_response_alg: $userinfo_signed_response_alg, userinfo_encrypted_response_alg: $userinfo_encrypted_response_alg, userinfo_encrypted_response_enc: $userinfo_encrypted_response_enc, request_object_signing_alg: $request_object_signing_alg, request_object_encryption_alg: $request_object_encryption_alg, request_object_encryption_enc: $request_object_encryption_enc, jwks_uri: $jwks_uri, _jwks_uri: $_jwks_uri, jwks: $jwks, _jwks: $_jwks, custom_jwks: $custom_jwks, description: $description, homepageURL: $homepageURL, authorization_code_expire: $authorization_code_expire, id_token_expire: $id_token_expire, access_token_expire: $access_token_expire, refresh_token_expire: $refresh_token_expire, cas_expire: $cas_expire, customStyles: $customStyles, isForTeamory: $isForTeamory, confirmAuthorization: $confirmAuthorization) {
    _id
    name
    domain
    image
    redirect_uris
    client_id
    client_secret
    token_endpoint_auth_method
    id_token_signed_response_alg
    id_token_encrypted_response_alg
    id_token_encrypted_response_enc
    userinfo_signed_response_alg
    userinfo_encrypted_response_alg
    userinfo_encrypted_response_enc
    request_object_signing_alg
    request_object_encryption_alg
    request_object_encryption_enc
    jwks_uri
    _jwks_uri
    custom_jwks
    jwks
    _jwks
    clientId
    grant_types
    response_types
    description
    homepageURL
    isDeleted
    isDefault
    when
    css
    authorization_code_expire
    id_token_expire
    access_token_expire
    refresh_token_expire
    cas_expire
    loginUrl
    customStyles {
      forceLogin
      hideQRCode
      hideUP
      hideUsername
      hideRegister
      hidePhone
      hideSocial
      hideClose
      hidePhonePassword
      defaultLoginMethod
    }
    isForTeamory
    confirmAuthorization
  }
}
    `;
export const CreateSamlIdentityProviderDocument = `
    mutation CreateSAMLIdentityProvider($name: String!, $domain: String!, $clientId: String!, $image: String, $description: String, $SPMetadata: String, $IdPMetadata: String) {
  CreateSAMLIdentityProvider(name: $name, domain: $domain, clientId: $clientId, image: $image, description: $description, SPMetadata: $SPMetadata, IdPMetadata: $IdPMetadata) {
    _id
    name
    domain
    image
    appSecret
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    attributeNameFormat
    customAttributes
    emailDomainTransformation
    authnContextClassRef
    IdPMetadata
    assertionConsumerUrl
    bindings
    nameIds
    attributes
    enableSignRes
    resSignAlgorithm
    resAbstractAlgorithm
    resSignPublicKey
    resSignPrivateKey
    resSignPrivateKeyPass
    enableSignReq
    reqSignPublicKey
    enableEncryptRes
    resEncryptPublicKey
    css
  }
}
    `;
export const CreateSamlServiceProviderDocument = `
    mutation CreateSAMLServiceProvider($name: String!, $domain: String!, $clientId: String!, $redirectUrl: String!, $description: String, $SPMetadata: String, $IdPMetadata: String, $image: String, $mappings: AssertionMapInputType, $defaultIdPMapId: String) {
  CreateSAMLServiceProvider(name: $name, domain: $domain, clientId: $clientId, redirectUrl: $redirectUrl, description: $description, SPMetadata: $SPMetadata, IdPMetadata: $IdPMetadata, image: $image, mappings: $mappings, defaultIdPMapId: $defaultIdPMapId) {
    _id
    name
    domain
    image
    appSecret
    defaultIdPMap {
      _id
      name
      image
      description
      isDeleted
    }
    defaultIdPMapId
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    IdPMetadata
    IdPEntityID
    assertionConsumeService {
      binding
      url
      isDefault
    }
    mappings {
      username
      nickname
      photo
      company
      providerName
      email
    }
    redirectUrl
    loginUrl
    logoutUrl
    nameId
    enableSignRes
    resSignPublicKey
    hasResEncrypted
    resEncryptAlgorithm
    resAbstractAlgorithm
    resDecryptPrivateKey
    resDecryptPrivateKeyPass
    resEncryptPublicKey
    enableSignReq
    reqSignAlgorithm
    reqAbstractAlgorithm
    reqSignPrivateKey
    reqSignPrivateKeyPass
    reqSignPublicKey
    SPUrl
  }
}
    `;
export const EnableSamlIdentityProviderDocument = `
    mutation EnableSAMLIdentityProvider($appId: String!, $clientId: String!, $enabled: Boolean) {
  EnableSAMLIdentityProvider(appId: $appId, clientId: $clientId, enabled: $enabled) {
    _id
    name
    domain
    image
    appSecret
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    attributeNameFormat
    customAttributes
    emailDomainTransformation
    authnContextClassRef
    IdPMetadata
    assertionConsumerUrl
    bindings
    nameIds
    attributes
    enableSignRes
    resSignAlgorithm
    resAbstractAlgorithm
    resSignPublicKey
    resSignPrivateKey
    resSignPrivateKeyPass
    enableSignReq
    reqSignPublicKey
    enableEncryptRes
    resEncryptPublicKey
    css
  }
}
    `;
export const EnableSamlServiceProviderDocument = `
    mutation EnableSAMLServiceProvider($appId: String!, $clientId: String!, $enabled: Boolean) {
  EnableSAMLServiceProvider(appId: $appId, clientId: $clientId, enabled: $enabled) {
    _id
    name
    domain
    image
    appSecret
    defaultIdPMap {
      _id
      name
      image
      description
      isDeleted
    }
    defaultIdPMapId
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    IdPMetadata
    IdPEntityID
    assertionConsumeService {
      binding
      url
      isDefault
    }
    mappings {
      username
      nickname
      photo
      company
      providerName
      email
    }
    redirectUrl
    loginUrl
    logoutUrl
    nameId
    enableSignRes
    resSignPublicKey
    hasResEncrypted
    resEncryptAlgorithm
    resAbstractAlgorithm
    resDecryptPrivateKey
    resDecryptPrivateKeyPass
    resEncryptPublicKey
    enableSignReq
    reqSignAlgorithm
    reqAbstractAlgorithm
    reqSignPrivateKey
    reqSignPrivateKeyPass
    reqSignPublicKey
    SPUrl
  }
}
    `;
export const IncClientFlowNumberDocument = `
    mutation IncClientFlowNumber($user: String, $userInvitied: String, $client: String, $number: Int) {
  IncClientFlowNumber(user: $user, userInvitied: $userInvitied, client: $client, number: $number) {
    code
    url
    charge
  }
}
    `;
export const LoginByLdapDocument = `
    mutation LoginByLDAP($username: String!, $password: String!, $clientId: String!, $browser: String) {
  LoginByLDAP(username: $username, password: $password, clientId: $clientId, browser: $browser) {
    _id
    username
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    nickname
    company
    photo
    browser
    password
    registerInClient
    registerMethod
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
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    oldPassword
    metadata
  }
}
    `;
export const RemoveEmailProviderDocument = `
    mutation RemoveEmailProvider($_ids: [String]!) {
  RemoveEmailProvider(_ids: $_ids) {
    _id
    name
    image
    description
    fields {
      label
      type
      placeholder
      help
      value
      options
    }
    client
    user
    status
    provider {
      _id
      name
      image
      description
      client
      user
      status
    }
  }
}
    `;
export const RemoveLdapServerDocument = `
    mutation RemoveLDAPServer($ldapId: String!, $clientId: String!) {
  RemoveLDAPServer(ldapId: $ldapId, clientId: $clientId) {
    _id
    name
    clientId
    userId
    ldapLink
    baseDN
    searchStandard
    emailPostfix
    username
    password
    description
    enabled
    isDeleted
    createdAt
    updatedAt
  }
}
    `;
export const RemoveOAuthListDocument = `
    mutation RemoveOAuthList($ids: [String]) {
  RemoveOAuthList(ids: $ids)
}
    `;
export const RemoveOAuthProviderDocument = `
    mutation RemoveOAuthProvider($appId: String!, $clientId: String!) {
  RemoveOAuthProvider(appId: $appId, clientId: $clientId) {
    _id
    name
    domain
    image
    redirectUris
    appSecret
    client_id
    clientId
    grants
    description
    homepageURL
    isDeleted
    when
    css
    loginUrl
    casExpire
  }
}
    `;
export const RemoveOidcAppDocument = `
    mutation RemoveOIDCApp($appId: String!, $clientId: String!) {
  RemoveOIDCApp(appId: $appId, clientId: $clientId) {
    _id
    name
    domain
    image
    redirect_uris
    client_id
    client_secret
    token_endpoint_auth_method
    id_token_signed_response_alg
    id_token_encrypted_response_alg
    id_token_encrypted_response_enc
    userinfo_signed_response_alg
    userinfo_encrypted_response_alg
    userinfo_encrypted_response_enc
    request_object_signing_alg
    request_object_encryption_alg
    request_object_encryption_enc
    jwks_uri
    _jwks_uri
    custom_jwks
    jwks
    _jwks
    clientId
    grant_types
    response_types
    description
    homepageURL
    isDeleted
    isDefault
    when
    css
    authorization_code_expire
    id_token_expire
    access_token_expire
    refresh_token_expire
    cas_expire
    loginUrl
    customStyles {
      forceLogin
      hideQRCode
      hideUP
      hideUsername
      hideRegister
      hidePhone
      hideSocial
      hideClose
      hidePhonePassword
      defaultLoginMethod
    }
    isForTeamory
    confirmAuthorization
  }
}
    `;
export const RemoveSamlIdentityProviderDocument = `
    mutation RemoveSAMLIdentityProvider($appId: String!, $clientId: String!) {
  RemoveSAMLIdentityProvider(appId: $appId, clientId: $clientId) {
    _id
    name
    domain
    image
    appSecret
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    attributeNameFormat
    customAttributes
    emailDomainTransformation
    authnContextClassRef
    IdPMetadata
    assertionConsumerUrl
    bindings
    nameIds
    attributes
    enableSignRes
    resSignAlgorithm
    resAbstractAlgorithm
    resSignPublicKey
    resSignPrivateKey
    resSignPrivateKeyPass
    enableSignReq
    reqSignPublicKey
    enableEncryptRes
    resEncryptPublicKey
    css
  }
}
    `;
export const RemoveSamlServiceProviderDocument = `
    mutation RemoveSAMLServiceProvider($appId: String!, $clientId: String!) {
  RemoveSAMLServiceProvider(appId: $appId, clientId: $clientId) {
    _id
    name
    domain
    image
    appSecret
    defaultIdPMap {
      _id
      name
      image
      description
      isDeleted
    }
    defaultIdPMapId
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    IdPMetadata
    IdPEntityID
    assertionConsumeService {
      binding
      url
      isDefault
    }
    mappings {
      username
      nickname
      photo
      company
      providerName
      email
    }
    redirectUrl
    loginUrl
    logoutUrl
    nameId
    enableSignRes
    resSignPublicKey
    hasResEncrypted
    resEncryptAlgorithm
    resAbstractAlgorithm
    resDecryptPrivateKey
    resDecryptPrivateKeyPass
    resEncryptPublicKey
    enableSignReq
    reqSignAlgorithm
    reqAbstractAlgorithm
    reqSignPrivateKey
    reqSignPrivateKeyPass
    reqSignPublicKey
    SPUrl
  }
}
    `;
export const RevokeUserAuthorizedAppDocument = `
    mutation RevokeUserAuthorizedApp($appId: String, $userPoolId: String, $userId: String) {
  RevokeUserAuthorizedApp(appId: $appId, userPoolId: $userPoolId, userId: $userId) {
    _id
    appId
    userId
    scope
    type
    isRevoked
    when
  }
}
    `;
export const SaveEmailProviderWithClientDocument = `
    mutation SaveEmailProviderWithClient($options: EmailProviderWithClientAddInput) {
  SaveEmailProviderWithClient(options: $options) {
    _id
    user
    client
    status
    fields {
      label
      type
      placeholder
      help
      value
      options
    }
    provider {
      _id
      name
      image
      description
    }
  }
}
    `;
export const SendEmailDocument = `
    mutation SendEmail($receivers: [String]!, $subject: String!, $client: String!, $user: String, $testAvailable: Boolean, $providerName: String, $content: String, $sender: String, $meta_data: String, $secret: String) {
  SendEmail(receivers: $receivers, subject: $subject, client: $client, user: $user, testAvailable: $testAvailable, providerName: $providerName, content: $content, sender: $sender, meta_data: $meta_data, secret: $secret) {
    _id
    user
    subject
    content
    sender
    receivers
    post
    createdAt
    rejected
    isDeleted
    client
  }
}
    `;
export const SendEmailByTypeDocument = `
    mutation SendEmailByType($user: String!, $type: String!, $client: String!, $receivers: [String]!, $meta_data: String) {
  SendEmailByType(user: $user, type: $type, client: $client, receivers: $receivers, meta_data: $meta_data) {
    _id
    user
    subject
    content
    sender
    receivers
    post
    createdAt
    rejected
    isDeleted
    client
  }
}
    `;
export const SendWebhookTestDocument = `
    mutation SendWebhookTest($id: String!) {
  SendWebhookTest(id: $id)
}
    `;
export const SetApplicationOAuthEnableOrDisableDocument = `
    mutation SetApplicationOAuthEnableOrDisable($client: String, $oauth: String, $user: String, $enabled: Boolean) {
  SetApplicationOAuthEnableOrDisable(client: $client, oauth: $oauth, user: $user, enabled: $enabled) {
    _id
    name
    alias
    image
    description
    enabled
    url
    client
    user
    oAuthUrl
    wxappLogo
    fields {
      label
      type
      placeholder
      value
      checked
    }
    oauth {
      _id
      name
      alias
      image
      description
      enabled
      url
      client
      user
      oAuthUrl
      wxappLogo
    }
  }
}
    `;
export const UpdateApplicationOAuthDocument = `
    mutation UpdateApplicationOAuth($client: String, $oauth: String, $user: String, $alias: String, $fields: [OAuthListFieldsFormUpdateInput]) {
  UpdateApplicationOAuth(client: $client, oauth: $oauth, user: $user, alias: $alias, fields: $fields) {
    _id
    name
    alias
    image
    description
    enabled
    url
    client
    user
    oAuthUrl
    wxappLogo
    fields {
      label
      type
      placeholder
      value
      checked
    }
    oauth {
      _id
      name
      alias
      image
      description
      enabled
      url
      client
      user
      oAuthUrl
      wxappLogo
    }
  }
}
    `;
export const UpdateEmailProviderDocument = `
    mutation UpdateEmailProvider($options: EmailProviderListInput) {
  UpdateEmailProvider(options: $options) {
    _id
    name
    image
    description
    fields {
      label
      type
      placeholder
      help
      value
      options
    }
    client
    user
    status
    provider {
      _id
      name
      image
      description
      client
      user
      status
    }
  }
}
    `;
export const UpdateEmailTemplateDocument = `
    mutation UpdateEmailTemplate($options: EmailTemplateInput!) {
  UpdateEmailTemplate(options: $options) {
    _id
    type
    sender
    object
    hasURL
    URLExpireTime
    status
    redirectTo
    content
  }
}
    `;
export const UpdateEmailTemplateWithClientDocument = `
    mutation UpdateEmailTemplateWithClient($options: EmailTemplateWithClientInput!) {
  UpdateEmailTemplateWithClient(options: $options) {
    _id
    user
    client
    status
    fields {
      label
      type
      placeholder
      help
      value
      options
    }
    provider {
      _id
      name
      image
      description
    }
  }
}
    `;
export const UpdateLdapServerDocument = `
    mutation UpdateLDAPServer($ldapId: String!, $name: String!, $clientId: String!, $userId: String!, $ldapLink: String!, $baseDN: String!, $username: String!, $searchStandard: String!, $password: String!, $emailPostfix: String, $description: String, $enabled: Boolean) {
  UpdateLDAPServer(ldapId: $ldapId, name: $name, clientId: $clientId, userId: $userId, ldapLink: $ldapLink, baseDN: $baseDN, username: $username, searchStandard: $searchStandard, password: $password, emailPostfix: $emailPostfix, description: $description, enabled: $enabled) {
    _id
    name
    clientId
    userId
    ldapLink
    baseDN
    searchStandard
    emailPostfix
    username
    password
    description
    enabled
    isDeleted
    createdAt
    updatedAt
  }
}
    `;
export const UpdateOAuthListDocument = `
    mutation UpdateOAuthList($options: OAuthListUpdateInput, $fields: [OAuthListFieldsFormUpdateInput]) {
  UpdateOAuthList(options: $options, fields: $fields) {
    _id
    name
    alias
    image
    description
    enabled
    url
    client
    user
    oAuthUrl
    wxappLogo
    fields {
      label
      type
      placeholder
      value
      checked
    }
    oauth {
      _id
      name
      alias
      image
      description
      enabled
      url
      client
      user
      oAuthUrl
      wxappLogo
    }
  }
}
    `;
export const UpdateOAuthProviderDocument = `
    mutation UpdateOAuthProvider($appId: String!, $domain: String, $name: String, $image: String, $redirectUris: [String], $grants: [String], $description: String, $homepageURL: String, $css: String, $casExpire: Int) {
  UpdateOAuthProvider(appId: $appId, domain: $domain, name: $name, image: $image, redirectUris: $redirectUris, grants: $grants, description: $description, homepageURL: $homepageURL, css: $css, casExpire: $casExpire) {
    _id
    name
    domain
    image
    redirectUris
    appSecret
    client_id
    clientId
    grants
    description
    homepageURL
    isDeleted
    when
    css
    loginUrl
    casExpire
  }
}
    `;
export const UpdateOidcAppDocument = `
    mutation UpdateOIDCApp($appId: String!, $domain: String, $name: String, $image: String, $redirect_uris: [String], $token_endpoint_auth_method: String, $grant_types: [String], $response_types: [String], $id_token_signed_response_alg: String, $id_token_encrypted_response_alg: String, $id_token_encrypted_response_enc: String, $userinfo_signed_response_alg: String, $userinfo_encrypted_response_alg: String, $userinfo_encrypted_response_enc: String, $request_object_signing_alg: String, $request_object_encryption_alg: String, $request_object_encryption_enc: String, $jwks_uri: String, $_jwks_uri: String, $custom_jwks: String, $jwks: String, $_jwks: String, $description: String, $homepageURL: String, $css: String, $authorization_code_expire: String, $id_token_expire: String, $access_token_expire: String, $refresh_token_expire: String, $cas_expire: String, $customStyles: OIDCProviderCustomStylesInput, $isForTeamory: Boolean, $confirmAuthorization: Boolean) {
  UpdateOIDCApp(appId: $appId, domain: $domain, name: $name, image: $image, redirect_uris: $redirect_uris, token_endpoint_auth_method: $token_endpoint_auth_method, grant_types: $grant_types, response_types: $response_types, id_token_signed_response_alg: $id_token_signed_response_alg, id_token_encrypted_response_alg: $id_token_encrypted_response_alg, id_token_encrypted_response_enc: $id_token_encrypted_response_enc, userinfo_signed_response_alg: $userinfo_signed_response_alg, userinfo_encrypted_response_alg: $userinfo_encrypted_response_alg, userinfo_encrypted_response_enc: $userinfo_encrypted_response_enc, request_object_signing_alg: $request_object_signing_alg, request_object_encryption_alg: $request_object_encryption_alg, request_object_encryption_enc: $request_object_encryption_enc, jwks_uri: $jwks_uri, _jwks_uri: $_jwks_uri, custom_jwks: $custom_jwks, jwks: $jwks, _jwks: $_jwks, description: $description, homepageURL: $homepageURL, css: $css, authorization_code_expire: $authorization_code_expire, id_token_expire: $id_token_expire, access_token_expire: $access_token_expire, refresh_token_expire: $refresh_token_expire, cas_expire: $cas_expire, customStyles: $customStyles, isForTeamory: $isForTeamory, confirmAuthorization: $confirmAuthorization) {
    _id
    name
    domain
    image
    redirect_uris
    client_id
    client_secret
    token_endpoint_auth_method
    id_token_signed_response_alg
    id_token_encrypted_response_alg
    id_token_encrypted_response_enc
    userinfo_signed_response_alg
    userinfo_encrypted_response_alg
    userinfo_encrypted_response_enc
    request_object_signing_alg
    request_object_encryption_alg
    request_object_encryption_enc
    jwks_uri
    _jwks_uri
    custom_jwks
    jwks
    _jwks
    clientId
    grant_types
    response_types
    description
    homepageURL
    isDeleted
    isDefault
    when
    css
    authorization_code_expire
    id_token_expire
    access_token_expire
    refresh_token_expire
    cas_expire
    loginUrl
    customStyles {
      forceLogin
      hideQRCode
      hideUP
      hideUsername
      hideRegister
      hidePhone
      hideSocial
      hideClose
      hidePhonePassword
      defaultLoginMethod
    }
    isForTeamory
    confirmAuthorization
  }
}
    `;
export const UpdateSamlIdentityProviderDocument = `
    mutation UpdateSAMLIdentityProvider($appId: String!, $clientId: String!, $domain: String, $image: String, $name: String, $description: String, $SPMetadata: String, $attributeNameFormat: String, $customAttributes: String, $emailDomainTransformation: String, $authnContextClassRef: String, $IdPMetadata: String, $assertionConsumerUrl: String, $bindings: [String], $nameIds: [String], $attributes: [String], $enableSignRes: Boolean, $resSignAlgorithm: String, $resAbstractAlgorithm: String, $resSignPublicKey: String, $resSignPrivateKey: String, $resSignPrivateKeyPass: String, $enableSignReq: Boolean, $reqSignPublicKey: String, $enableEncryptRes: Boolean, $resEncryptPublicKey: String, $css: String) {
  UpdateSAMLIdentityProvider(appId: $appId, clientId: $clientId, domain: $domain, image: $image, name: $name, description: $description, SPMetadata: $SPMetadata, attributeNameFormat: $attributeNameFormat, customAttributes: $customAttributes, emailDomainTransformation: $emailDomainTransformation, authnContextClassRef: $authnContextClassRef, IdPMetadata: $IdPMetadata, assertionConsumerUrl: $assertionConsumerUrl, bindings: $bindings, nameIds: $nameIds, attributes: $attributes, enableSignRes: $enableSignRes, resSignAlgorithm: $resSignAlgorithm, resAbstractAlgorithm: $resAbstractAlgorithm, resSignPublicKey: $resSignPublicKey, resSignPrivateKey: $resSignPrivateKey, resSignPrivateKeyPass: $resSignPrivateKeyPass, enableSignReq: $enableSignReq, reqSignPublicKey: $reqSignPublicKey, enableEncryptRes: $enableEncryptRes, resEncryptPublicKey: $resEncryptPublicKey, css: $css) {
    _id
    name
    domain
    image
    appSecret
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    attributeNameFormat
    customAttributes
    emailDomainTransformation
    authnContextClassRef
    IdPMetadata
    assertionConsumerUrl
    bindings
    nameIds
    attributes
    enableSignRes
    resSignAlgorithm
    resAbstractAlgorithm
    resSignPublicKey
    resSignPrivateKey
    resSignPrivateKeyPass
    enableSignReq
    reqSignPublicKey
    enableEncryptRes
    resEncryptPublicKey
    css
  }
}
    `;
export const UpdateSamlServiceProviderDocument = `
    mutation UpdateSAMLServiceProvider($appId: String!, $name: String!, $domain: String!, $clientId: String!, $redirectUrl: String!, $loginUrl: String!, $logoutUrl: String!, $nameId: String!, $IdPEntityID: String, $assertionConsumeService: [AssertionConsumeServiceInputType], $image: String, $mappings: AssertionMapInputType, $defaultIdPMapId: String, $description: String, $SPMetadata: String, $IdPMetadata: String, $enableSignRes: Boolean, $resSignPublicKey: String, $hasResEncrypted: Boolean, $resEncryptAlgorithm: String, $resAbstractAlgorithm: String, $resDecryptPrivateKey: String, $resDecryptPrivateKeyPass: String, $resEncryptPublicKey: String, $enableSignReq: Boolean, $reqSignAlgorithm: String, $reqAbstractAlgorithm: String, $reqSignPrivateKey: String, $reqSignPrivateKeyPass: String, $reqSignPublicKey: String) {
  UpdateSAMLServiceProvider(appId: $appId, name: $name, domain: $domain, clientId: $clientId, redirectUrl: $redirectUrl, loginUrl: $loginUrl, logoutUrl: $logoutUrl, nameId: $nameId, IdPEntityID: $IdPEntityID, assertionConsumeService: $assertionConsumeService, image: $image, mappings: $mappings, defaultIdPMapId: $defaultIdPMapId, description: $description, SPMetadata: $SPMetadata, IdPMetadata: $IdPMetadata, enableSignRes: $enableSignRes, resSignPublicKey: $resSignPublicKey, hasResEncrypted: $hasResEncrypted, resEncryptAlgorithm: $resEncryptAlgorithm, resAbstractAlgorithm: $resAbstractAlgorithm, resDecryptPrivateKey: $resDecryptPrivateKey, resDecryptPrivateKeyPass: $resDecryptPrivateKeyPass, resEncryptPublicKey: $resEncryptPublicKey, enableSignReq: $enableSignReq, reqSignAlgorithm: $reqSignAlgorithm, reqAbstractAlgorithm: $reqAbstractAlgorithm, reqSignPrivateKey: $reqSignPrivateKey, reqSignPrivateKeyPass: $reqSignPrivateKeyPass, reqSignPublicKey: $reqSignPublicKey) {
    _id
    name
    domain
    image
    appSecret
    defaultIdPMap {
      _id
      name
      image
      description
      isDeleted
    }
    defaultIdPMapId
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    IdPMetadata
    IdPEntityID
    assertionConsumeService {
      binding
      url
      isDefault
    }
    mappings {
      username
      nickname
      photo
      company
      providerName
      email
    }
    redirectUrl
    loginUrl
    logoutUrl
    nameId
    enableSignRes
    resSignPublicKey
    hasResEncrypted
    resEncryptAlgorithm
    resAbstractAlgorithm
    resDecryptPrivateKey
    resDecryptPrivateKeyPass
    resEncryptPublicKey
    enableSignReq
    reqSignAlgorithm
    reqAbstractAlgorithm
    reqSignPrivateKey
    reqSignPrivateKeyPass
    reqSignPublicKey
    SPUrl
  }
}
    `;
export const UpdateSystemPricingDocument = `
    mutation UpdateSystemPricing($options: PricingFieldsInput) {
  UpdateSystemPricing(options: $options) {
    _id
    type
    startNumber
    freeNumber
    startPrice
    maxNumber
    d
    features
  }
}
    `;
export const UseDefaultEmailProviderDocument = `
    mutation UseDefaultEmailProvider($user: String!, $client: String!) {
  UseDefaultEmailProvider(user: $user, client: $client)
}
    `;
export const AddClientWebhookDocument = `
    mutation addClientWebhook($client: String!, $events: [String!]!, $url: String!, $contentType: String!, $enable: Boolean!, $secret: String, $isLastTimeSuccess: Boolean) {
  addClientWebhook(client: $client, events: $events, url: $url, contentType: $contentType, enable: $enable, secret: $secret, isLastTimeSuccess: $isLastTimeSuccess) {
    _id
    client
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
export const AddCollaboratorDocument = `
    mutation addCollaborator($userPoolId: String!, $collaboratorUserId: String!, $permissionDescriptors: [PermissionDescriptorsInputType]!) {
  addCollaborator(userPoolId: $userPoolId, collaboratorUserId: $collaboratorUserId, permissionDescriptors: $permissionDescriptors) {
    _id
    createdAt
    owner {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    collaborator {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    userPool {
      _id
      iamType
      domain
      userLimit
      usersCount
      logo
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWXMPQRCode
      useMiniLogin
      useSelfWxapp
      allowedOrigins
      name
      secret
      token
      descriptions
      jwtExpired
      createdAt
      isDeleted
      enableEmail
    }
    permissionDescriptors {
      permissionId
      name
      operationAllow
    }
  }
}
    `;
export const AddDingTalkCorpDocument = `
    mutation addDingTalkCorp($input: CreateDingTalkCorpInput!) {
  addDingTalkCorp(input: $input) {
    corpId
    twoWaySynchronizationOn
    createdAt
    updatedAt
    AESKey
    token
    orgId
  }
}
    `;
export const AddGroupMetadataDocument = `
    mutation addGroupMetadata($groupId: String!, $key: String!, $value: String!) {
  addGroupMetadata(groupId: $groupId, key: $key, value: $value) {
    key
    value
  }
}
    `;
export const AddOrgNodeDocument = `
    mutation addOrgNode($input: AddOrgNodeInput!) {
  addOrgNode(input: $input) {
    _id
    logo
    nodes {
      _id
      name
      description
      createdAt
      updatedAt
      children
      root
      depth
    }
  }
}
    `;
export const AddPermissionDocument = `
    mutation addPermission($name: String!, $description: String) {
  addPermission(name: $name, description: $description) {
    _id
    name
    affect
    description
  }
}
    `;
export const AddPermissionToRbacRoleDocument = `
    mutation addPermissionToRBACRole($sortBy: SortByEnum, $page: Int, $count: Int, $input: AddPermissionToRBACRoleInput!) {
  addPermissionToRBACRole(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const AddPermissionToRbacRoleBatchDocument = `
    mutation addPermissionToRBACRoleBatch($sortBy: SortByEnum, $page: Int, $count: Int, $input: AddPermissionToRBACRoleBatchInput) {
  addPermissionToRBACRoleBatch(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const AddRoleToRbacGroupDocument = `
    mutation addRoleToRBACGroup($sortBy: SortByEnum, $page: Int, $count: Int, $input: AddRoleToRBACGroupInput!) {
  addRoleToRBACGroup(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const AddRoleToRbacGroupBatchDocument = `
    mutation addRoleToRBACGroupBatch($sortBy: SortByEnum, $page: Int, $count: Int, $input: AddRoleToRBACGroupBatchInput!) {
  addRoleToRBACGroupBatch(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const AddSuperAdminUserDocument = `
    mutation addSuperAdminUser($options: SuperAdminUpdateInput!) {
  addSuperAdminUser(options: $options) {
    email
    username
    _id
    upgrade
  }
}
    `;
export const AddToInvitationDocument = `
    mutation addToInvitation($client: String!, $phone: String) {
  addToInvitation(client: $client, phone: $phone) {
    client
    phone
    isDeleted
    createdAt
    updatedAt
  }
}
    `;
export const AddUserToRbacGroupDocument = `
    mutation addUserToRBACGroup($sortBy: SortByEnum, $page: Int, $count: Int, $input: AddUserToRBACGroupInput!) {
  addUserToRBACGroup(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const AddUserToRbacGroupBatchDocument = `
    mutation addUserToRBACGroupBatch($sortBy: SortByEnum, $page: Int, $count: Int, $input: AddUserToRBACGroupBatchInput!) {
  addUserToRBACGroupBatch(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const AddWechatWorkCorpDocument = `
    mutation addWechatWorkCorp($input: CreateWechatWorkCorpInput!) {
  addWechatWorkCorp(input: $input) {
    corpId
    corpName
    addressBookSyncHelperSecret
    addressBookSyncHelperToken
    addressBookSyncHelperEncodingAESKey
    twoWaySynchronizationOn
    createdAt
    updatedAt
    orgId
  }
}
    `;
export const AssignRbacRoleToUserDocument = `
    mutation assignRBACRoleToUser($sortBy: SortByEnum, $page: Int, $count: Int, $input: AssignUserToRBACRoleInput!) {
  assignRBACRoleToUser(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const AssignRbacRoleToUserBatchDocument = `
    mutation assignRBACRoleToUserBatch($sortBy: SortByEnum, $page: Int, $count: Int, $input: AssignUserToRBACRoleBatchInput!) {
  assignRBACRoleToUserBatch(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const AssignUserToRoleDocument = `
    mutation assignUserToRole($client: String!, $user: String!, $group: String!) {
  assignUserToRole(client: $client, user: $user, group: $group) {
    list {
      _id
      createdAt
    }
    totalCount
  }
}
    `;
export const BindOtherOAuthDocument = `
    mutation bindOtherOAuth($type: String!, $unionid: String!, $userInfo: String!, $client: String, $user: String) {
  bindOtherOAuth(type: $type, unionid: $unionid, userInfo: $userInfo, client: $client, user: $user) {
    _id
    user
    client
    type
    unionid
    userInfo
    createdAt
  }
}
    `;
export const ChangeMfaDocument = `
    mutation changeMFA($enable: Boolean!, $userId: String, $userPoolId: String, $_id: String, $refreshKey: Boolean) {
  changeMFA(enable: $enable, userId: $userId, userPoolId: $userPoolId, _id: $_id, refreshKey: $refreshKey) {
    _id
    userId
    userPoolId
    enable
    shareKey
  }
}
    `;
export const ChangePasswordDocument = `
    mutation changePassword($password: String!, $email: String!, $client: String!, $verifyCode: String!) {
  changePassword(password: $password, email: $email, client: $client, verifyCode: $verifyCode) {
    _id
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    username
    nickname
    company
    photo
    browser
    device
    password
    registerInClient
    registerMethod
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
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
    group {
      _id
      name
      descriptions
      client
      permissions
      createdAt
    }
    clientType {
      _id
      name
      description
      image
      example
    }
    userLocation {
      _id
      when
      where
    }
    userLoginHistory {
      totalCount
    }
    systemApplicationType {
      _id
      name
      descriptions
      price
    }
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    customData
    metadata
    salt
  }
}
    `;
export const CreateAdConnectorDocument = `
    mutation createAdConnector($name: String!, $userPoolId: String!, $logo: String) {
  createAdConnector(name: $name, userPoolId: $userPoolId, logo: $logo) {
    _id
    name
    secret
    salt
    logo
    enabled
    userPoolId
    status
    createdAt
  }
}
    `;
export const CreateCustomMfaDocument = `
    mutation createCustomMFA($userIdInMiniLogin: String!, $userPoolId: String!, $name: String!, $secret: String!, $remark: String) {
  createCustomMFA(userIdInMiniLogin: $userIdInMiniLogin, userPoolId: $userPoolId, name: $name, secret: $secret, remark: $remark) {
    _id
    userIdInMiniLogin
    userPoolId {
      _id
      iamType
      domain
      userLimit
      usersCount
      logo
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWXMPQRCode
      useMiniLogin
      useSelfWxapp
      allowedOrigins
      name
      secret
      token
      descriptions
      jwtExpired
      createdAt
      isDeleted
      enableEmail
    }
    remark
    name
    secret
  }
}
    `;
export const CreateInterConnectionDocument = `
    mutation createInterConnection($sourceUserPoolId: String!, $sourceUserId: String!, $targetUserPoolId: String!, $targetUserId: String!, $maxAge: Int!) {
  createInterConnection(sourceUserPoolId: $sourceUserPoolId, sourceUserId: $sourceUserId, targetUserPoolId: $targetUserPoolId, targetUserId: $targetUserId, maxAge: $maxAge) {
    message
    code
    status
  }
}
    `;
export const CreateOrgDocument = `
    mutation createOrg($input: CreateOrgInput!) {
  createOrg(input: $input) {
    _id
    logo
    nodes {
      _id
      name
      description
      createdAt
      updatedAt
      children
      root
      depth
    }
  }
}
    `;
export const CreateRbacGroupDocument = `
    mutation createRBACGroup($sortBy: SortByEnum, $page: Int, $count: Int, $input: CreateRBACGroupInput!) {
  createRBACGroup(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const CreateRbacPermissionDocument = `
    mutation createRBACPermission($input: CreateRBACPermissionInput!) {
  createRBACPermission(input: $input) {
    _id
    name
    userPoolId
    createdAt
    updatedAt
    description
  }
}
    `;
export const CreateRbacRoleDocument = `
    mutation createRBACRole($sortBy: SortByEnum, $page: Int, $count: Int, $input: CreateRBACRoleInput!) {
  createRBACRole(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const CreateRoleDocument = `
    mutation createRole($client: String!, $name: String!, $descriptions: String) {
  createRole(client: $client, name: $name, descriptions: $descriptions) {
    _id
    name
    descriptions
    client
    permissions
    createdAt
  }
}
    `;
export const CreateRuleDocument = `
    mutation createRule($input: CreateRuleInput!) {
  createRule(input: $input) {
    _id
    userPoolId
    name
    description
    type
    enabled
    faasUrl
    code
    order
    async
    createdAt
    updatedAt
  }
}
    `;
export const CreateUserDocument = `
    mutation createUser($userInfo: UserRegisterInput!, $invitationCode: String, $keepPassword: Boolean) {
  createUser(userInfo: $userInfo, invitationCode: $invitationCode, keepPassword: $keepPassword) {
    _id
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    username
    nickname
    company
    photo
    browser
    device
    password
    registerInClient
    registerMethod
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
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
    group {
      _id
      name
      descriptions
      client
      permissions
      createdAt
    }
    clientType {
      _id
      name
      description
      image
      example
    }
    userLocation {
      _id
      when
      where
    }
    userLoginHistory {
      totalCount
    }
    systemApplicationType {
      _id
      name
      descriptions
      price
    }
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    customData
    metadata
    salt
  }
}
    `;
export const CreateUserWithoutAuthenticationDocument = `
    mutation createUserWithoutAuthentication($userPoolId: String!, $userInfo: UserRegisterInput!, $forceLogin: Boolean, $keepPassword: Boolean) {
  createUserWithoutAuthentication(userPoolId: $userPoolId, userInfo: $userInfo, forceLogin: $forceLogin, keepPassword: $keepPassword) {
    _id
    username
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    nickname
    company
    photo
    browser
    password
    registerInClient
    registerMethod
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
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    oldPassword
    metadata
  }
}
    `;
export const DeleteClientWebhookDocument = `
    mutation deleteClientWebhook($id: String!) {
  deleteClientWebhook(id: $id) {
    _id
    client
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
export const DeleteOrgDocument = `
    mutation deleteOrg($_id: String!) {
  deleteOrg(_id: $_id) {
    message
    code
    status
  }
}
    `;
export const DeleteRbacGroupDocument = `
    mutation deleteRBACGroup($_id: String!) {
  deleteRBACGroup(_id: $_id) {
    message
    code
    status
  }
}
    `;
export const DeleteRbacGroupBatchDocument = `
    mutation deleteRBACGroupBatch($idList: [String!]!) {
  deleteRBACGroupBatch(idList: $idList) {
    message
    code
    status
  }
}
    `;
export const DeleteRbacPermissionDocument = `
    mutation deleteRBACPermission($_id: String!) {
  deleteRBACPermission(_id: $_id) {
    message
    code
    status
  }
}
    `;
export const DeleteRbacPermissionBatchDocument = `
    mutation deleteRBACPermissionBatch($idList: [String!]!) {
  deleteRBACPermissionBatch(idList: $idList) {
    message
    code
    status
  }
}
    `;
export const DeleteRbacRoleDocument = `
    mutation deleteRBACRole($_id: String!) {
  deleteRBACRole(_id: $_id) {
    message
    code
    status
  }
}
    `;
export const DeleteRbacRoleBatchDocument = `
    mutation deleteRBACRoleBatch($idList: [String!]!) {
  deleteRBACRoleBatch(idList: $idList) {
    message
    code
    status
  }
}
    `;
export const DeleteRuleDocument = `
    mutation deleteRule($_id: String!) {
  deleteRule(_id: $_id) {
    message
    code
    status
  }
}
    `;
export const DisableAdConnectorDocument = `
    mutation disableAdConnector($_id: String!) {
  disableAdConnector(_id: $_id)
}
    `;
export const DisableAdConnectorForProviderDocument = `
    mutation disableAdConnectorForProvider($providerId: String!, $adConnectorId: String!) {
  disableAdConnectorForProvider(providerId: $providerId, adConnectorId: $adConnectorId)
}
    `;
export const EnableAdConnectorDocument = `
    mutation enableAdConnector($_id: String!) {
  enableAdConnector(_id: $_id)
}
    `;
export const EnableAdConnectorForProviderDocument = `
    mutation enableAdConnectorForProvider($providerType: providerType!, $providerId: String!, $adConnectorId: String!) {
  enableAdConnectorForProvider(providerType: $providerType, providerId: $providerId, adConnectorId: $adConnectorId)
}
    `;
export const EnablePasswordFaasDocument = `
    mutation enablePasswordFaas($client: String!, $enable: Boolean!) {
  enablePasswordFaas(client: $client, enable: $enable) {
    encryptUrl
    decryptUrl
    user
    client
    logs
    enable
    createdAt
    updatedAt
  }
}
    `;
export const EncryptPasswordDocument = `
    mutation encryptPassword($password: String!, $client: String!, $isTest: Boolean) {
  encryptPassword(password: $password, client: $client, isTest: $isTest) {
    _id
    encryptUrl
    decryptUrl
    client
    user
    logs
    enable
    createdAt
    updatedAt
    password
  }
}
    `;
export const GenerateInvitationCodeDocument = `
    mutation generateInvitationCode($user: String!, $client: String!) {
  generateInvitationCode(user: $user, client: $client) {
    _id
    user
    client
    code
    createdAt
  }
}
    `;
export const LoginDocument = `
    mutation login($registerInClient: String!, $phone: String, $phoneCode: Int, $unionid: String, $openid: String, $username: String, $email: String, $password: String, $lastIP: String, $verifyCode: String, $MFACode: String, $fromRegister: Boolean, $device: String, $browser: String, $params: String) {
  login(registerInClient: $registerInClient, phone: $phone, phoneCode: $phoneCode, unionid: $unionid, openid: $openid, username: $username, email: $email, password: $password, lastIP: $lastIP, verifyCode: $verifyCode, MFACode: $MFACode, fromRegister: $fromRegister, device: $device, browser: $browser, params: $params) {
    _id
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    username
    nickname
    company
    photo
    browser
    device
    password
    registerInClient
    registerMethod
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
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
    group {
      _id
      name
      descriptions
      client
      permissions
      createdAt
    }
    clientType {
      _id
      name
      description
      image
      example
    }
    userLocation {
      _id
      when
      where
    }
    userLoginHistory {
      totalCount
    }
    systemApplicationType {
      _id
      name
      descriptions
      price
    }
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    customData
    metadata
    salt
  }
}
    `;
export const LoginByAdDocument = `
    mutation loginByAd($adConnectorId: String!, $username: String!, $password: String!) {
  loginByAd(adConnectorId: $adConnectorId, username: $username, password: $password) {
    _id
    username
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    nickname
    company
    photo
    browser
    password
    registerInClient
    registerMethod
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
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    oldPassword
    metadata
  }
}
    `;
export const NewClientDocument = `
    mutation newClient($client: NewUserClientInput!) {
  newClient(client: $client) {
    _id
    user {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    iamType
    domain
    clientType {
      _id
      name
      description
      image
      example
    }
    userLimit
    userPoolTypes {
      _id
      name
      description
      image
      example
    }
    usersCount
    logo
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWXMPQRCode
    useMiniLogin
    useSelfWxapp
    allowedOrigins
    name
    secret
    token
    descriptions
    jwtExpired
    createdAt
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
    enableEmail
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
  }
}
    `;
export const OauthPasswordLoginDocument = `
    mutation oauthPasswordLogin($registerInClient: String!, $phone: String, $unionid: String, $email: String, $password: String, $lastIP: String, $verifyCode: String) {
  oauthPasswordLogin(registerInClient: $registerInClient, phone: $phone, unionid: $unionid, email: $email, password: $password, lastIP: $lastIP, verifyCode: $verifyCode) {
    _id
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    username
    nickname
    company
    photo
    browser
    device
    password
    registerInClient
    registerMethod
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
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
    group {
      _id
      name
      descriptions
      client
      permissions
      createdAt
    }
    clientType {
      _id
      name
      description
      image
      example
    }
    userLocation {
      _id
      when
      where
    }
    userLoginHistory {
      totalCount
    }
    systemApplicationType {
      _id
      name
      descriptions
      price
    }
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    customData
    metadata
    salt
  }
}
    `;
export const OrderDocument = `
    mutation order($options: OrderAddInput!) {
  order(options: $options) {
    code
    url
    charge
  }
}
    `;
export const PasswordLessForceLoginDocument = `
    mutation passwordLessForceLogin($userPoolId: String!, $userId: String!) {
  passwordLessForceLogin(userPoolId: $userPoolId, userId: $userId) {
    _id
    username
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    nickname
    company
    photo
    browser
    password
    registerInClient
    registerMethod
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
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    oldPassword
    metadata
  }
}
    `;
export const RecordAuthAuditDocument = `
    mutation recordAuthAudit($userPoolId: String!, $appType: String!, $appId: String!, $userId: String!, $event: String!, $message: String) {
  recordAuthAudit(userPoolId: $userPoolId, appType: $appType, appId: $appId, userId: $userId, event: $event, message: $message) {
    message
    code
    status
  }
}
    `;
export const RecordRequestDocument = `
    mutation recordRequest($when: String!, $ip: String!, $responseTime: Int!, $size: Int!, $from: String) {
  recordRequest(when: $when, ip: $ip, responseTime: $responseTime, size: $size, from: $from) {
    message
    code
    status
  }
}
    `;
export const RefreshAccessTokenDocument = `
    mutation refreshAccessToken($userPoolId: String!, $accessToken: String!) {
  refreshAccessToken(userPoolId: $userPoolId, accessToken: $accessToken) {
    accessToken
  }
}
    `;
export const RefreshAdConnectorSecretDocument = `
    mutation refreshAdConnectorSecret($_id: String) {
  refreshAdConnectorSecret(_id: $_id) {
    _id
    name
    secret
    salt
    logo
    enabled
    userPoolId
    status
    createdAt
  }
}
    `;
export const RefreshAppSecretDocument = `
    mutation refreshAppSecret($client: UpdateUserClientInput!) {
  refreshAppSecret(client: $client) {
    _id
    user {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    iamType
    domain
    clientType {
      _id
      name
      description
      image
      example
    }
    userLimit
    userPoolTypes {
      _id
      name
      description
      image
      example
    }
    usersCount
    logo
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWXMPQRCode
    useMiniLogin
    useSelfWxapp
    allowedOrigins
    name
    secret
    token
    descriptions
    jwtExpired
    createdAt
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
    enableEmail
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
  }
}
    `;
export const RefreshSignInTokenDocument = `
    mutation refreshSignInToken($refreshToken: String!, $oidcAppId: String, $userPoolId: String) {
  refreshSignInToken(refreshToken: $refreshToken, oidcAppId: $oidcAppId, userPoolId: $userPoolId) {
    access_token
    id_token
    refresh_token
    scope
    expires_in
  }
}
    `;
export const RefreshThirdPartyTokenDocument = `
    mutation refreshThirdPartyToken($userPoolId: String!, $userId: String!) {
  refreshThirdPartyToken(userPoolId: $userPoolId, userId: $userId) {
    refreshSuccess
    message
    provider
    refreshToken
    accessToken
    updatedAt
  }
}
    `;
export const RefreshTokenDocument = `
    mutation refreshToken($client: String!, $user: String!) {
  refreshToken(client: $client, user: $user) {
    token
    iat
    exp
  }
}
    `;
export const RegisterDocument = `
    mutation register($userInfo: UserRegisterInput!, $invitationCode: String, $keepPassword: Boolean) {
  register(userInfo: $userInfo, invitationCode: $invitationCode, keepPassword: $keepPassword) {
    _id
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    username
    nickname
    company
    photo
    browser
    device
    password
    registerInClient
    registerMethod
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
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
    group {
      _id
      name
      descriptions
      client
      permissions
      createdAt
    }
    clientType {
      _id
      name
      description
      image
      example
    }
    userLocation {
      _id
      when
      where
    }
    userLoginHistory {
      totalCount
    }
    systemApplicationType {
      _id
      name
      descriptions
      price
    }
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    customData
    metadata
    salt
  }
}
    `;
export const RemoveAdConnectorDocument = `
    mutation removeAdConnector($_id: String!) {
  removeAdConnector(_id: $_id)
}
    `;
export const RemoveCollaboratorDocument = `
    mutation removeCollaborator($collaborationId: String!) {
  removeCollaborator(collaborationId: $collaborationId) {
    _id
    createdAt
    owner {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    collaborator {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    userPool {
      _id
      iamType
      domain
      userLimit
      usersCount
      logo
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWXMPQRCode
      useMiniLogin
      useSelfWxapp
      allowedOrigins
      name
      secret
      token
      descriptions
      jwtExpired
      createdAt
      isDeleted
      enableEmail
    }
    permissionDescriptors {
      permissionId
      name
      operationAllow
    }
  }
}
    `;
export const RemoveCustomMfaDocument = `
    mutation removeCustomMFA($_id: String!) {
  removeCustomMFA(_id: $_id) {
    _id
    userIdInMiniLogin
    userPoolId {
      _id
      iamType
      domain
      userLimit
      usersCount
      logo
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWXMPQRCode
      useMiniLogin
      useSelfWxapp
      allowedOrigins
      name
      secret
      token
      descriptions
      jwtExpired
      createdAt
      isDeleted
      enableEmail
    }
    remark
    name
    secret
  }
}
    `;
export const RemoveFromInvitationDocument = `
    mutation removeFromInvitation($client: String!, $phone: String) {
  removeFromInvitation(client: $client, phone: $phone) {
    client
    phone
    isDeleted
    createdAt
    updatedAt
  }
}
    `;
export const RemoveGroupMetadataDocument = `
    mutation removeGroupMetadata($groupId: String!, $key: String!) {
  removeGroupMetadata(groupId: $groupId, key: $key) {
    key
    value
  }
}
    `;
export const RemoveOrgNodeDocument = `
    mutation removeOrgNode($input: RemoveOrgNodeInput!) {
  removeOrgNode(input: $input) {
    _id
    logo
    nodes {
      _id
      name
      description
      createdAt
      updatedAt
      children
      root
      depth
    }
  }
}
    `;
export const RemovePermissionFromRbacRoleDocument = `
    mutation removePermissionFromRBACRole($sortBy: SortByEnum, $page: Int, $count: Int, $input: RemovePermissionFromRBACRoleInput!) {
  removePermissionFromRBACRole(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const RemovePermissionFromRbacRoleBatchDocument = `
    mutation removePermissionFromRBACRoleBatch($sortBy: SortByEnum, $page: Int, $count: Int, $input: RemovePermissionFromRBACRoleBatchInput!) {
  removePermissionFromRBACRoleBatch(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const RemoveRoleFromRbacGroupDocument = `
    mutation removeRoleFromRBACGroup($sortBy: SortByEnum, $page: Int, $count: Int, $input: RemoveRoleFromRBACGroupInput!) {
  removeRoleFromRBACGroup(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const RemoveRoleFromRbacGroupBatchDocument = `
    mutation removeRoleFromRBACGroupBatch($sortBy: SortByEnum, $page: Int, $count: Int, $input: RemoveRoleFromRBACGroupBatchInput!) {
  removeRoleFromRBACGroupBatch(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const RemoveRuleEnvDocument = `
    mutation removeRuleEnv($input: RemoveRuleEnvInput!) {
  removeRuleEnv(input: $input) {
    totalCount
    list {
      key
      value
    }
  }
}
    `;
export const RemoveSamlIdpFieldMappingDocument = `
    mutation removeSAMLIdpFieldMapping($sourceExpression: String!, $idpId: String!) {
  removeSAMLIdpFieldMapping(sourceExpression: $sourceExpression, idpId: $idpId) {
    message
    code
    status
  }
}
    `;
export const RemoveSuperAdminUserDocument = `
    mutation removeSuperAdminUser($_id: String!, $username: String!) {
  removeSuperAdminUser(_id: $_id, username: $username) {
    email
    username
    _id
    upgrade
  }
}
    `;
export const RemoveUserClientsDocument = `
    mutation removeUserClients($ids: [String]) {
  removeUserClients(ids: $ids) {
    _id
    user {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    iamType
    domain
    clientType {
      _id
      name
      description
      image
      example
    }
    userLimit
    userPoolTypes {
      _id
      name
      description
      image
      example
    }
    usersCount
    logo
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWXMPQRCode
    useMiniLogin
    useSelfWxapp
    allowedOrigins
    name
    secret
    token
    descriptions
    jwtExpired
    createdAt
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
    enableEmail
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
  }
}
    `;
export const RemoveUserFromGroupDocument = `
    mutation removeUserFromGroup($client: String!, $user: String!, $group: String!) {
  removeUserFromGroup(client: $client, user: $user, group: $group) {
    _id
    user {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    client {
      _id
      iamType
      domain
      userLimit
      usersCount
      logo
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWXMPQRCode
      useMiniLogin
      useSelfWxapp
      allowedOrigins
      name
      secret
      token
      descriptions
      jwtExpired
      createdAt
      isDeleted
      enableEmail
    }
    group {
      _id
      name
      descriptions
      client
      permissions
      createdAt
    }
    createdAt
  }
}
    `;
export const RemoveUserFromRbacGroupDocument = `
    mutation removeUserFromRBACGroup($sortBy: SortByEnum, $page: Int, $count: Int, $input: RemoveUserFromRBACGroupInput!) {
  removeUserFromRBACGroup(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const RemoveUserFromRbacGroupBatchDocument = `
    mutation removeUserFromRBACGroupBatch($sortBy: SortByEnum, $page: Int, $count: Int, $input: RemoveUserFromRBACGroupBatchInput!) {
  removeUserFromRBACGroupBatch(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const RemoveUserMetadataDocument = `
    mutation removeUserMetadata($input: RemoveUserMetadataInput!) {
  removeUserMetadata(input: $input) {
    totalCount
    list {
      key
      value
    }
  }
}
    `;
export const RemoveUsersDocument = `
    mutation removeUsers($ids: [String], $registerInClient: String, $operator: String) {
  removeUsers(ids: $ids, registerInClient: $registerInClient, operator: $operator) {
    _id
    username
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    nickname
    company
    photo
    browser
    password
    registerInClient
    registerMethod
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
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    oldPassword
    metadata
  }
}
    `;
export const ResetUserPoolFromWechatDocument = `
    mutation resetUserPoolFromWechat($client: String!, $registerMethod: String!, $limit: Int!) {
  resetUserPoolFromWechat(client: $client, registerMethod: $registerMethod, limit: $limit) {
    list {
      _id
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      username
      nickname
      company
      photo
      browser
      device
      password
      registerInClient
      registerMethod
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
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
      metadata
      salt
    }
    totalCount
  }
}
    `;
export const RevokeRbacRoleFromUserDocument = `
    mutation revokeRBACRoleFromUser($sortBy: SortByEnum, $page: Int, $count: Int, $input: RevokeRBACRoleFromUserInput!) {
  revokeRBACRoleFromUser(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const RevokeRbacRoleFromUserBatchDocument = `
    mutation revokeRBACRoleFromUserBatch($sortBy: SortByEnum, $page: Int, $count: Int, $input: RevokeRBACRoleFromUserBatchInput!) {
  revokeRBACRoleFromUserBatch(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const SendChangeEmailVerifyCodeDocument = `
    mutation sendChangeEmailVerifyCode($userPoolId: String!, $email: String!) {
  sendChangeEmailVerifyCode(userPoolId: $userPoolId, email: $email) {
    message
    code
    status
  }
}
    `;
export const SendResetPasswordEmailDocument = `
    mutation sendResetPasswordEmail($client: String!, $email: String!) {
  sendResetPasswordEmail(client: $client, email: $email) {
    message
    code
    status
  }
}
    `;
export const SendVerifyEmailDocument = `
    mutation sendVerifyEmail($email: String!, $client: String!, $token: String) {
  sendVerifyEmail(email: $email, client: $client, token: $token) {
    message
    code
    status
  }
}
    `;
export const SetInvitationStateDocument = `
    mutation setInvitationState($client: String!, $enablePhone: Boolean) {
  setInvitationState(client: $client, enablePhone: $enablePhone) {
    client
    enablePhone
    createdAt
    updatedAt
  }
}
    `;
export const SetRuleEnvDocument = `
    mutation setRuleEnv($input: SetRuleEnvInput!) {
  setRuleEnv(input: $input) {
    totalCount
    list {
      key
      value
    }
  }
}
    `;
export const SetSamlIdPFieldMappingDocument = `
    mutation setSAMLIdPFieldMapping($idpId: String!, $sourceExpression: String!, $description: String, $type: String!, $targetField: String!) {
  setSAMLIdPFieldMapping(idpId: $idpId, sourceExpression: $sourceExpression, description: $description, type: $type, targetField: $targetField) {
    sourceExpression
    description
    type
    targetField
  }
}
    `;
export const SetUserMetadataDocument = `
    mutation setUserMetadata($input: SetUserMetadataInput!) {
  setUserMetadata(input: $input) {
    totalCount
    list {
      key
      value
    }
  }
}
    `;
export const SignInDocument = `
    mutation signIn($oidcAppId: String, $userPoolId: String, $email: String, $password: String, $phone: String, $unionid: String, $username: String) {
  signIn(oidcAppId: $oidcAppId, userPoolId: $userPoolId, email: $email, password: $password, phone: $phone, unionid: $unionid, username: $username) {
    sub
    birthdate
    family_name
    gender
    given_name
    locale
    middle_name
    name
    nickname
    picture
    preferred_username
    profile
    updated_at
    website
    zoneinfo
    username
    _id
    company
    browser
    device
    logins_count
    register_method
    blocked
    last_ip
    register_in_userpool
    last_login
    signed_up
    email
    email_verified
    phone_number
    phone_number_verified
    token
    access_token
    id_token
    refresh_token
    expires_in
    token_type
    scope
  }
}
    `;
export const StartDingTalkCorpInitialSyncDocument = `
    mutation startDingTalkCorpInitialSync($userPoolId: String!, $corpId: String!) {
  startDingTalkCorpInitialSync(userPoolId: $userPoolId, corpId: $corpId) {
    code
    message
    orgId
  }
}
    `;
export const StartWechatWorkCorpInitialSyncDocument = `
    mutation startWechatWorkCorpInitialSync($userPoolId: String!, $corpId: String!) {
  startWechatWorkCorpInitialSync(userPoolId: $userPoolId, corpId: $corpId) {
    code
    message
    orgId
  }
}
    `;
export const UnbindEmailDocument = `
    mutation unbindEmail($user: String, $client: String) {
  unbindEmail(user: $user, client: $client) {
    _id
    username
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    nickname
    company
    photo
    browser
    password
    registerInClient
    registerMethod
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
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    oldPassword
    metadata
  }
}
    `;
export const UnbindOtherOAuthDocument = `
    mutation unbindOtherOAuth($type: String!, $client: String, $user: String) {
  unbindOtherOAuth(type: $type, client: $client, user: $user) {
    _id
    user
    client
    type
    unionid
    userInfo
    createdAt
  }
}
    `;
export const UpdateAdConnectorDocument = `
    mutation updateAdConnector($_id: String!, $name: String, $logo: String) {
  updateAdConnector(_id: $_id, name: $name, logo: $logo) {
    _id
    name
    secret
    salt
    logo
    enabled
    userPoolId
    status
    createdAt
  }
}
    `;
export const UpdateClientWebhookDocument = `
    mutation updateClientWebhook($id: String!, $events: [String!]!, $url: String!, $contentType: String!, $enable: Boolean!, $secret: String, $isLastTimeSuccess: Boolean) {
  updateClientWebhook(id: $id, events: $events, url: $url, contentType: $contentType, enable: $enable, secret: $secret, isLastTimeSuccess: $isLastTimeSuccess) {
    _id
    client
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
export const UpdateCollaboratorDocument = `
    mutation updateCollaborator($collaborationId: String!, $permissionDescriptors: [PermissionDescriptorsInputType]!) {
  updateCollaborator(collaborationId: $collaborationId, permissionDescriptors: $permissionDescriptors) {
    _id
    createdAt
    owner {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    collaborator {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    userPool {
      _id
      iamType
      domain
      userLimit
      usersCount
      logo
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWXMPQRCode
      useMiniLogin
      useSelfWxapp
      allowedOrigins
      name
      secret
      token
      descriptions
      jwtExpired
      createdAt
      isDeleted
      enableEmail
    }
    permissionDescriptors {
      permissionId
      name
      operationAllow
    }
  }
}
    `;
export const UpdateEmailDocument = `
    mutation updateEmail($userPoolId: String!, $email: String!, $emailCode: String!, $oldEmail: String, $oldEmailCode: String) {
  updateEmail(userPoolId: $userPoolId, email: $email, emailCode: $emailCode, oldEmail: $oldEmail, oldEmailCode: $oldEmailCode) {
    _id
    username
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    nickname
    company
    photo
    browser
    password
    registerInClient
    registerMethod
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
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    oldPassword
    metadata
  }
}
    `;
export const UpdateOrgDocument = `
    mutation updateOrg($input: UpdateOrgInput!) {
  updateOrg(input: $input) {
    _id
    logo
    nodes {
      _id
      name
      description
      createdAt
      updatedAt
      children
      root
      depth
    }
  }
}
    `;
export const UpdatePasswordStrengthSettingsByUserPoolIdDocument = `
    mutation updatePasswordStrengthSettingsByUserPoolId($userPoolId: String!, $pwdStrength: Int) {
  updatePasswordStrengthSettingsByUserPoolId(userPoolId: $userPoolId, pwdStrength: $pwdStrength) {
    userPoolId
    pwdStrength
  }
}
    `;
export const UpdatePermissionsDocument = `
    mutation updatePermissions($role: String!, $client: String!, $permissions: String) {
  updatePermissions(role: $role, client: $client, permissions: $permissions) {
    _id
    name
    descriptions
    client
    permissions
    createdAt
  }
}
    `;
export const UpdatePhoneDocument = `
    mutation updatePhone($userPoolId: String!, $phone: String!, $phoneCode: String!, $oldPhone: String, $oldPhoneCode: String) {
  updatePhone(userPoolId: $userPoolId, phone: $phone, phoneCode: $phoneCode, oldPhone: $oldPhone, oldPhoneCode: $oldPhoneCode) {
    _id
    username
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    nickname
    company
    photo
    browser
    password
    registerInClient
    registerMethod
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
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    oldPassword
    metadata
  }
}
    `;
export const UpdateRbacGroupDocument = `
    mutation updateRBACGroup($sortBy: SortByEnum, $page: Int, $count: Int, $input: UpdateRBACGroupInput!) {
  updateRBACGroup(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const UpdateRbacPermissionDocument = `
    mutation updateRBACPermission($input: UpdateRBACPermissionInput!) {
  updateRBACPermission(input: $input) {
    _id
    name
    userPoolId
    createdAt
    updatedAt
    description
  }
}
    `;
export const UpdateRbacRoleDocument = `
    mutation updateRBACRole($sortBy: SortByEnum, $page: Int, $count: Int, $input: UpdateRBACRoleInput!) {
  updateRBACRole(input: $input) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const UpdateRoleDocument = `
    mutation updateRole($_id: String!, $client: String!, $name: String!, $descriptions: String, $permissions: String) {
  updateRole(_id: $_id, client: $client, name: $name, descriptions: $descriptions, permissions: $permissions) {
    _id
    name
    descriptions
    client
    permissions
    createdAt
  }
}
    `;
export const UpdateRuleDocument = `
    mutation updateRule($input: UpdateRuleInput!) {
  updateRule(input: $input) {
    _id
    userPoolId
    name
    description
    type
    enabled
    faasUrl
    code
    order
    async
    createdAt
    updatedAt
  }
}
    `;
export const UpdateRuleOrderDocument = `
    mutation updateRuleOrder($input: UpdateRuleOrderInput!) {
  updateRuleOrder(input: $input) {
    message
    code
    status
  }
}
    `;
export const UpdateSuperAdminUserDocument = `
    mutation updateSuperAdminUser($options: SuperAdminUpdateInput!) {
  updateSuperAdminUser(options: $options) {
    email
    username
    _id
    upgrade
  }
}
    `;
export const UpdateUserDocument = `
    mutation updateUser($options: UserUpdateInput!) {
  updateUser(options: $options) {
    _id
    username
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    nickname
    company
    photo
    browser
    password
    registerInClient
    registerMethod
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
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    oldPassword
    metadata
  }
}
    `;
export const UpdateUserClientDocument = `
    mutation updateUserClient($client: UpdateUserClientInput!) {
  updateUserClient(client: $client) {
    _id
    user {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    iamType
    domain
    clientType {
      _id
      name
      description
      image
      example
    }
    userLimit
    userPoolTypes {
      _id
      name
      description
      image
      example
    }
    usersCount
    logo
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWXMPQRCode
    useMiniLogin
    useSelfWxapp
    allowedOrigins
    name
    secret
    token
    descriptions
    jwtExpired
    createdAt
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
    enableEmail
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
  }
}
    `;
export const VerifyResetPasswordVerifyCodeDocument = `
    mutation verifyResetPasswordVerifyCode($verifyCode: String!, $email: String!, $client: String!) {
  verifyResetPasswordVerifyCode(verifyCode: $verifyCode, email: $email, client: $client) {
    message
    code
    status
  }
}
    `;
export const DingTalkCorpDocument = `
    query DingTalkCorp($userPoolId: String!, $corpId: String!) {
  DingTalkCorp(userPoolId: $userPoolId, corpId: $corpId) {
    corpId
    twoWaySynchronizationOn
    createdAt
    updatedAt
    AESKey
    token
    orgId
  }
}
    `;
export const GetOidcAppInfoDocument = `
    query GetOIDCAppInfo($appId: String!) {
  GetOIDCAppInfo(appId: $appId) {
    _id
    name
    domain
    image
    redirect_uris
    client_id
    client_secret
    token_endpoint_auth_method
    id_token_signed_response_alg
    id_token_encrypted_response_alg
    id_token_encrypted_response_enc
    userinfo_signed_response_alg
    userinfo_encrypted_response_alg
    userinfo_encrypted_response_enc
    request_object_signing_alg
    request_object_encryption_alg
    request_object_encryption_enc
    jwks_uri
    _jwks_uri
    custom_jwks
    jwks
    _jwks
    clientId
    grant_types
    response_types
    description
    homepageURL
    isDeleted
    isDefault
    when
    css
    authorization_code_expire
    id_token_expire
    access_token_expire
    refresh_token_expire
    cas_expire
    loginUrl
    customStyles {
      forceLogin
      hideQRCode
      hideUP
      hideUsername
      hideRegister
      hidePhone
      hideSocial
      hideClose
      hidePhonePassword
      defaultLoginMethod
    }
    isForTeamory
    confirmAuthorization
  }
}
    `;
export const GetOidcAppListDocument = `
    query GetOIDCAppList($clientId: String, $page: Int, $count: Int) {
  GetOIDCAppList(clientId: $clientId, page: $page, count: $count) {
    totalCount
    list {
      _id
      name
      domain
      image
      redirect_uris
      client_id
      client_secret
      token_endpoint_auth_method
      id_token_signed_response_alg
      id_token_encrypted_response_alg
      id_token_encrypted_response_enc
      userinfo_signed_response_alg
      userinfo_encrypted_response_alg
      userinfo_encrypted_response_enc
      request_object_signing_alg
      request_object_encryption_alg
      request_object_encryption_enc
      jwks_uri
      _jwks_uri
      custom_jwks
      jwks
      _jwks
      clientId
      grant_types
      response_types
      description
      homepageURL
      isDeleted
      isDefault
      when
      css
      authorization_code_expire
      id_token_expire
      access_token_expire
      refresh_token_expire
      cas_expire
      loginUrl
      isForTeamory
      confirmAuthorization
    }
  }
}
    `;
export const GetSamlIdentityProviderInfoDocument = `
    query GetSAMLIdentityProviderInfo($appId: String!) {
  GetSAMLIdentityProviderInfo(appId: $appId) {
    _id
    name
    domain
    image
    appSecret
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    attributeNameFormat
    customAttributes
    emailDomainTransformation
    authnContextClassRef
    IdPMetadata
    assertionConsumerUrl
    bindings
    nameIds
    attributes
    enableSignRes
    resSignAlgorithm
    resAbstractAlgorithm
    resSignPublicKey
    resSignPrivateKey
    resSignPrivateKeyPass
    enableSignReq
    reqSignPublicKey
    enableEncryptRes
    resEncryptPublicKey
    css
  }
}
    `;
export const GetSamlIdentityProviderListDocument = `
    query GetSAMLIdentityProviderList($clientId: String, $page: Int, $count: Int) {
  GetSAMLIdentityProviderList(clientId: $clientId, page: $page, count: $count) {
    totalCount
    list {
      _id
      name
      domain
      image
      appSecret
      appId
      clientId
      description
      isDeleted
      enabled
      when
      SPMetadata
      attributeNameFormat
      customAttributes
      emailDomainTransformation
      authnContextClassRef
      IdPMetadata
      assertionConsumerUrl
      bindings
      nameIds
      attributes
      enableSignRes
      resSignAlgorithm
      resAbstractAlgorithm
      resSignPublicKey
      resSignPrivateKey
      resSignPrivateKeyPass
      enableSignReq
      reqSignPublicKey
      enableEncryptRes
      resEncryptPublicKey
      css
    }
  }
}
    `;
export const GetSamlServiceProviderInfoDocument = `
    query GetSAMLServiceProviderInfo($appId: String!) {
  GetSAMLServiceProviderInfo(appId: $appId) {
    _id
    name
    domain
    image
    appSecret
    defaultIdPMap {
      _id
      name
      image
      description
      isDeleted
    }
    defaultIdPMapId
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    IdPMetadata
    IdPEntityID
    assertionConsumeService {
      binding
      url
      isDefault
    }
    mappings {
      username
      nickname
      photo
      company
      providerName
      email
    }
    redirectUrl
    loginUrl
    logoutUrl
    nameId
    enableSignRes
    resSignPublicKey
    hasResEncrypted
    resEncryptAlgorithm
    resAbstractAlgorithm
    resDecryptPrivateKey
    resDecryptPrivateKeyPass
    resEncryptPublicKey
    enableSignReq
    reqSignAlgorithm
    reqAbstractAlgorithm
    reqSignPrivateKey
    reqSignPrivateKeyPass
    reqSignPublicKey
    SPUrl
  }
}
    `;
export const GetSamlServiceProviderListDocument = `
    query GetSAMLServiceProviderList($clientId: String, $page: Int, $count: Int) {
  GetSAMLServiceProviderList(clientId: $clientId, page: $page, count: $count) {
    totalCount
    list {
      _id
      name
      domain
      image
      appSecret
      defaultIdPMapId
      appId
      clientId
      description
      isDeleted
      enabled
      when
      SPMetadata
      IdPMetadata
      IdPEntityID
      redirectUrl
      loginUrl
      logoutUrl
      nameId
      enableSignRes
      resSignPublicKey
      hasResEncrypted
      resEncryptAlgorithm
      resAbstractAlgorithm
      resDecryptPrivateKey
      resDecryptPrivateKeyPass
      resEncryptPublicKey
      enableSignReq
      reqSignAlgorithm
      reqAbstractAlgorithm
      reqSignPrivateKey
      reqSignPrivateKeyPass
      reqSignPublicKey
      SPUrl
    }
  }
}
    `;
export const GetUserAuthorizedAppsDocument = `
    query GetUserAuthorizedApps($clientId: String, $userId: String, $page: Int, $count: Int) {
  GetUserAuthorizedApps(clientId: $clientId, userId: $userId, page: $page, count: $count) {
    totalCount
    OAuthApps {
      _id
      name
      domain
      image
      redirectUris
      appSecret
      client_id
      clientId
      grants
      description
      homepageURL
      isDeleted
      when
      css
      loginUrl
      casExpire
    }
    OIDCApps {
      _id
      name
      domain
      image
      redirect_uris
      client_id
      client_secret
      token_endpoint_auth_method
      id_token_signed_response_alg
      id_token_encrypted_response_alg
      id_token_encrypted_response_enc
      userinfo_signed_response_alg
      userinfo_encrypted_response_alg
      userinfo_encrypted_response_enc
      request_object_signing_alg
      request_object_encryption_alg
      request_object_encryption_enc
      jwks_uri
      _jwks_uri
      custom_jwks
      jwks
      _jwks
      clientId
      grant_types
      response_types
      description
      homepageURL
      isDeleted
      isDefault
      when
      css
      authorization_code_expire
      id_token_expire
      access_token_expire
      refresh_token_expire
      cas_expire
      loginUrl
      isForTeamory
      confirmAuthorization
    }
  }
}
    `;
export const PreviewEmailByTypeDocument = `
    query PreviewEmailByType($type: String!, $client: String!, $meta_data: String) {
  PreviewEmailByType(type: $type, client: $client, meta_data: $meta_data)
}
    `;
export const QueryAppInfoByAppIdDocument = `
    query QueryAppInfoByAppID($appId: String, $responseType: String, $redirectUrl: String) {
  QueryAppInfoByAppID(appId: $appId, responseType: $responseType, redirectUrl: $redirectUrl) {
    _id
    name
    domain
    image
    redirectUris
    appSecret
    client_id
    clientId
    grants
    description
    homepageURL
    isDeleted
    when
    css
    loginUrl
    casExpire
  }
}
    `;
export const QueryAppInfoByDomainDocument = `
    query QueryAppInfoByDomain($domain: String) {
  QueryAppInfoByDomain(domain: $domain) {
    _id
    name
    domain
    image
    redirectUris
    appSecret
    client_id
    clientId
    grants
    description
    homepageURL
    isDeleted
    when
    css
    loginUrl
    casExpire
  }
}
    `;
export const QueryClientHasLdapConfigsDocument = `
    query QueryClientHasLDAPConfigs($clientId: String) {
  QueryClientHasLDAPConfigs(clientId: $clientId) {
    result
  }
}
    `;
export const QueryClientIdByAppIdDocument = `
    query QueryClientIdByAppId($appId: String) {
  QueryClientIdByAppId(appId: $appId) {
    _id
    name
    domain
    image
    redirectUris
    appSecret
    client_id
    clientId
    grants
    description
    homepageURL
    isDeleted
    when
    css
    loginUrl
    casExpire
  }
}
    `;
export const QueryDefaultSamlIdentityProviderSettingsListDocument = `
    query QueryDefaultSAMLIdentityProviderSettingsList($page: Int, $count: Int) {
  QueryDefaultSAMLIdentityProviderSettingsList(page: $page, count: $count) {
    list {
      _id
      name
      image
      description
      isDeleted
    }
    totalCount
  }
}
    `;
export const QueryLdapServerListDocument = `
    query QueryLDAPServerList($clientId: String!, $page: Int, $count: Int) {
  QueryLDAPServerList(clientId: $clientId, page: $page, count: $count) {
    list {
      _id
      name
      clientId
      userId
      ldapLink
      baseDN
      searchStandard
      emailPostfix
      username
      password
      description
      enabled
      isDeleted
      createdAt
      updatedAt
    }
    totalCount
  }
}
    `;
export const QueryOidcAppInfoByAppIdDocument = `
    query QueryOIDCAppInfoByAppID($appId: String, $responseType: String, $redirectUrl: String) {
  QueryOIDCAppInfoByAppID(appId: $appId, responseType: $responseType, redirectUrl: $redirectUrl) {
    _id
    name
    domain
    image
    redirect_uris
    client_id
    client_secret
    token_endpoint_auth_method
    id_token_signed_response_alg
    id_token_encrypted_response_alg
    id_token_encrypted_response_enc
    userinfo_signed_response_alg
    userinfo_encrypted_response_alg
    userinfo_encrypted_response_enc
    request_object_signing_alg
    request_object_encryption_alg
    request_object_encryption_enc
    jwks_uri
    _jwks_uri
    custom_jwks
    jwks
    _jwks
    clientId
    grant_types
    response_types
    description
    homepageURL
    isDeleted
    isDefault
    when
    css
    authorization_code_expire
    id_token_expire
    access_token_expire
    refresh_token_expire
    cas_expire
    loginUrl
    customStyles {
      forceLogin
      hideQRCode
      hideUP
      hideUsername
      hideRegister
      hidePhone
      hideSocial
      hideClose
      hidePhonePassword
      defaultLoginMethod
    }
    isForTeamory
    confirmAuthorization
  }
}
    `;
export const QueryOidcAppInfoByDomainDocument = `
    query QueryOIDCAppInfoByDomain($domain: String) {
  QueryOIDCAppInfoByDomain(domain: $domain) {
    _id
    name
    domain
    image
    redirect_uris
    client_id
    client_secret
    token_endpoint_auth_method
    id_token_signed_response_alg
    id_token_encrypted_response_alg
    id_token_encrypted_response_enc
    userinfo_signed_response_alg
    userinfo_encrypted_response_alg
    userinfo_encrypted_response_enc
    request_object_signing_alg
    request_object_encryption_alg
    request_object_encryption_enc
    jwks_uri
    _jwks_uri
    custom_jwks
    jwks
    _jwks
    clientId
    grant_types
    response_types
    description
    homepageURL
    isDeleted
    isDefault
    when
    css
    authorization_code_expire
    id_token_expire
    access_token_expire
    refresh_token_expire
    cas_expire
    loginUrl
    customStyles {
      forceLogin
      hideQRCode
      hideUP
      hideUsername
      hideRegister
      hidePhone
      hideSocial
      hideClose
      hidePhonePassword
      defaultLoginMethod
    }
    isForTeamory
    confirmAuthorization
  }
}
    `;
export const QuerySamlIdentityProviderInfoByAppIdDocument = `
    query QuerySAMLIdentityProviderInfoByAppID($appId: String) {
  QuerySAMLIdentityProviderInfoByAppID(appId: $appId) {
    _id
    name
    domain
    image
    appSecret
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    attributeNameFormat
    customAttributes
    emailDomainTransformation
    authnContextClassRef
    IdPMetadata
    assertionConsumerUrl
    bindings
    nameIds
    attributes
    enableSignRes
    resSignAlgorithm
    resAbstractAlgorithm
    resSignPublicKey
    resSignPrivateKey
    resSignPrivateKeyPass
    enableSignReq
    reqSignPublicKey
    enableEncryptRes
    resEncryptPublicKey
    css
  }
}
    `;
export const QuerySamlIdentityProviderInfoByDomainDocument = `
    query QuerySAMLIdentityProviderInfoByDomain($domain: String) {
  QuerySAMLIdentityProviderInfoByDomain(domain: $domain) {
    _id
    name
    domain
    image
    appSecret
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    attributeNameFormat
    customAttributes
    emailDomainTransformation
    authnContextClassRef
    IdPMetadata
    assertionConsumerUrl
    bindings
    nameIds
    attributes
    enableSignRes
    resSignAlgorithm
    resAbstractAlgorithm
    resSignPublicKey
    resSignPrivateKey
    resSignPrivateKeyPass
    enableSignReq
    reqSignPublicKey
    enableEncryptRes
    resEncryptPublicKey
    css
  }
}
    `;
export const QuerySamlServiceProviderInfoByAppIdDocument = `
    query QuerySAMLServiceProviderInfoByAppID($appId: String!) {
  QuerySAMLServiceProviderInfoByAppID(appId: $appId) {
    _id
    name
    domain
    image
    appSecret
    defaultIdPMap {
      _id
      name
      image
      description
      isDeleted
    }
    defaultIdPMapId
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    IdPMetadata
    IdPEntityID
    assertionConsumeService {
      binding
      url
      isDefault
    }
    mappings {
      username
      nickname
      photo
      company
      providerName
      email
    }
    redirectUrl
    loginUrl
    logoutUrl
    nameId
    enableSignRes
    resSignPublicKey
    hasResEncrypted
    resEncryptAlgorithm
    resAbstractAlgorithm
    resDecryptPrivateKey
    resDecryptPrivateKeyPass
    resEncryptPublicKey
    enableSignReq
    reqSignAlgorithm
    reqAbstractAlgorithm
    reqSignPrivateKey
    reqSignPrivateKeyPass
    reqSignPublicKey
    SPUrl
  }
}
    `;
export const QuerySamlServiceProviderInfoByDomainDocument = `
    query QuerySAMLServiceProviderInfoByDomain($domain: String!) {
  QuerySAMLServiceProviderInfoByDomain(domain: $domain) {
    _id
    name
    domain
    image
    appSecret
    defaultIdPMap {
      _id
      name
      image
      description
      isDeleted
    }
    defaultIdPMapId
    appId
    clientId
    description
    isDeleted
    enabled
    when
    SPMetadata
    IdPMetadata
    IdPEntityID
    assertionConsumeService {
      binding
      url
      isDefault
    }
    mappings {
      username
      nickname
      photo
      company
      providerName
      email
    }
    redirectUrl
    loginUrl
    logoutUrl
    nameId
    enableSignRes
    resSignPublicKey
    hasResEncrypted
    resEncryptAlgorithm
    resAbstractAlgorithm
    resDecryptPrivateKey
    resDecryptPrivateKeyPass
    resEncryptPublicKey
    enableSignReq
    reqSignAlgorithm
    reqAbstractAlgorithm
    reqSignPrivateKey
    reqSignPrivateKeyPass
    reqSignPublicKey
    SPUrl
  }
}
    `;
export const ReadEmailProviderDocument = `
    query ReadEmailProvider($clientId: String) {
  ReadEmailProvider(clientId: $clientId) {
    _id
    name
    image
    description
    fields {
      label
      type
      placeholder
      help
      value
      options
    }
    client
    user
    status
    provider {
      _id
      name
      image
      description
      client
      user
      status
    }
  }
}
    `;
export const ReadEmailProviderByClientAndNameDocument = `
    query ReadEmailProviderByClientAndName($clientId: String) {
  ReadEmailProviderByClientAndName(clientId: $clientId) {
    _id
    user
    client
    status
    fields {
      label
      type
      placeholder
      help
      value
      options
    }
    provider {
      _id
      name
      image
      description
    }
  }
}
    `;
export const ReadEmailProviderWithClientDocument = `
    query ReadEmailProviderWithClient {
  ReadEmailProviderWithClient {
    _id
    user
    client
    status
    fields {
      label
      type
      placeholder
      help
      value
      options
    }
    provider {
      _id
      name
      image
      description
    }
  }
}
    `;
export const ReadEmailSentListDocument = `
    query ReadEmailSentList($page: Int, $count: Int, $sortBy: String) {
  ReadEmailSentList(page: $page, count: $count, sortBy: $sortBy) {
    list {
      _id
      subject
      content
      sender
      receivers
      createdAt
    }
    totalCount
  }
}
    `;
export const ReadEmailSentListByClientDocument = `
    query ReadEmailSentListByClient($client: String!, $page: Int, $count: Int) {
  ReadEmailSentListByClient(client: $client, page: $page, count: $count) {
    totalCount
    list {
      _id
      user
      subject
      content
      sender
      receivers
      post
      createdAt
      rejected
      isDeleted
      client
    }
  }
}
    `;
export const ReadEmailTemplateByClientAndTypeDocument = `
    query ReadEmailTemplateByClientAndType($type: String!, $client: String!) {
  ReadEmailTemplateByClientAndType(type: $type, client: $client) {
    _id
    type
    sender
    object
    hasURL
    URLExpireTime
    status
    redirectTo
    content
  }
}
    `;
export const ReadEmailTemplatesByClientDocument = `
    query ReadEmailTemplatesByClient($clientId: String!) {
  ReadEmailTemplatesByClient(clientId: $clientId) {
    _id
    user
    client
    template {
      _id
      type
      sender
      object
      hasURL
      URLExpireTime
      status
      redirectTo
      content
    }
    type
    sender
    object
    hasURL
    URLExpireTime
    redirectTo
    status
    content
  }
}
    `;
export const ReadEmailTemplatesBySystemDocument = `
    query ReadEmailTemplatesBySystem {
  ReadEmailTemplatesBySystem {
    _id
    user
    client
    template {
      _id
      type
      sender
      object
      hasURL
      URLExpireTime
      status
      redirectTo
      content
    }
    type
    sender
    object
    hasURL
    URLExpireTime
    redirectTo
    status
    content
  }
}
    `;
export const ReadOauthListDocument = `
    query ReadOauthList($clientId: String, $dontGetURL: Boolean, $useGuard: Boolean) {
  ReadOauthList(clientId: $clientId, dontGetURL: $dontGetURL, useGuard: $useGuard) {
    _id
    name
    alias
    image
    description
    enabled
    url
    client
    user
    oAuthUrl
    wxappLogo
    fields {
      label
      type
      placeholder
      value
      checked
    }
    oauth {
      _id
      name
      alias
      image
      description
      enabled
      url
      client
      user
      oAuthUrl
      wxappLogo
    }
  }
}
    `;
export const ReadOrdersDocument = `
    query ReadOrders($user: String, $page: Int, $count: Int) {
  ReadOrders(user: $user, page: $page, count: $count) {
    list {
      _id
      client
      user
      timeOfPurchase
      flowNumber
      price
      createdAt
      completed
      payMethod
      endAt
    }
    totalCount
  }
}
    `;
export const ReadSamlspListDocument = `
    query ReadSAMLSPList($clientId: String!) {
  ReadSAMLSPList(clientId: $clientId) {
    providerName
    url
    logo
  }
}
    `;
export const ReadSystemPricingDocument = `
    query ReadSystemPricing {
  ReadSystemPricing {
    _id
    type
    startNumber
    freeNumber
    startPrice
    maxNumber
    d
    features
  }
}
    `;
export const ReadUserPricingDocument = `
    query ReadUserPricing($userId: String, $clientId: String) {
  ReadUserPricing(userId: $userId, clientId: $clientId) {
    user
    client
    isFree
    pricing {
      number
    }
    freeNumber
  }
}
    `;
export const TestLdapServerDocument = `
    query TestLDAPServer($name: String!, $clientId: String!, $userId: String!, $ldapLink: String!, $baseDN: String!, $searchStandard: String!, $username: String!, $password: String!, $emailPostfix: String, $description: String, $enabled: Boolean) {
  TestLDAPServer(name: $name, clientId: $clientId, userId: $userId, ldapLink: $ldapLink, baseDN: $baseDN, searchStandard: $searchStandard, username: $username, password: $password, emailPostfix: $emailPostfix, description: $description, enabled: $enabled) {
    result
  }
}
    `;
export const TestLdapUserDocument = `
    query TestLDAPUser($testUsername: String!, $testPassword: String!, $name: String!, $clientId: String!, $userId: String!, $ldapLink: String!, $baseDN: String!, $searchStandard: String!, $username: String!, $password: String!, $emailPostfix: String, $description: String, $enabled: Boolean) {
  TestLDAPUser(testUsername: $testUsername, testPassword: $testPassword, name: $name, clientId: $clientId, userId: $userId, ldapLink: $ldapLink, baseDN: $baseDN, searchStandard: $searchStandard, username: $username, password: $password, emailPostfix: $emailPostfix, description: $description, enabled: $enabled) {
    result
  }
}
    `;
export const AdConnectorByProviderDocument = `
    query adConnectorByProvider($providerId: String!, $providerType: providerType!) {
  adConnectorByProvider(providerId: $providerId, providerType: $providerType) {
    _id
    name
    logo
    status
  }
}
    `;
export const AdConnectorListDocument = `
    query adConnectorList($userPoolId: String!, $providerType: providerType) {
  adConnectorList(userPoolId: $userPoolId, providerType: $providerType) {
    _id
    name
    secret
    salt
    logo
    enabled
    userPoolId
    status
    createdAt
  }
}
    `;
export const BindedOAuthListDocument = `
    query bindedOAuthList($client: String!, $user: String) {
  bindedOAuthList(client: $client, user: $user) {
    _id
    user
    client
    type
    unionid
    userInfo
    createdAt
  }
}
    `;
export const CheckAdConnectorStatusDocument = `
    query checkAdConnectorStatus($adConnectorId: String!) {
  checkAdConnectorStatus(adConnectorId: $adConnectorId)
}
    `;
export const CheckIsReservedDomainDocument = `
    query checkIsReservedDomain($domainValue: String!) {
  checkIsReservedDomain(domainValue: $domainValue) {
    domainValue
    isReserved
  }
}
    `;
export const CheckLoginStatusDocument = `
    query checkLoginStatus($token: String) {
  checkLoginStatus(token: $token) {
    message
    code
    status
    token {
      iat
      exp
    }
  }
}
    `;
export const CheckPhoneCodeDocument = `
    query checkPhoneCode($userPoolId: String!, $phone: String!, $phoneCode: String!) {
  checkPhoneCode(userPoolId: $userPoolId, phone: $phone, phoneCode: $phoneCode) {
    message
    code
    status
  }
}
    `;
export const ClientDocument = `
    query client($id: String!, $userId: String, $fromAdmin: Boolean) {
  client(id: $id, userId: $userId, fromAdmin: $fromAdmin) {
    _id
    user {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    iamType
    domain
    clientType {
      _id
      name
      description
      image
      example
    }
    userLimit
    userPoolTypes {
      _id
      name
      description
      image
      example
    }
    usersCount
    logo
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWXMPQRCode
    useMiniLogin
    useSelfWxapp
    allowedOrigins
    name
    secret
    token
    descriptions
    jwtExpired
    createdAt
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
    enableEmail
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
  }
}
    `;
export const ClientRolesDocument = `
    query clientRoles($client: String!, $page: Int, $count: Int) {
  clientRoles(client: $client, page: $page, count: $count) {
    list {
      _id
      name
      descriptions
      client
      permissions
      createdAt
    }
    totalCount
  }
}
    `;
export const DecodeJwtTokenDocument = `
    query decodeJwtToken($token: String) {
  decodeJwtToken(token: $token) {
    data {
      email
      id
      clientId
      unionid
    }
    status {
      message
      code
      status
    }
    iat
    exp
  }
}
    `;
export const EmailDomainTopNListDocument = `
    query emailDomainTopNList($userPoolId: String!) {
  emailDomainTopNList(userPoolId: $userPoolId) {
    domain
    count
  }
}
    `;
export const FindClientsByIdArrayDocument = `
    query findClientsByIdArray($clientsId: [String]) {
  findClientsByIdArray(clientsId: $clientsId) {
    list {
      _id
      name
      createdAt
      usersCount
    }
    totalCount
  }
}
    `;
export const GetAccessTokenByAppSecretDocument = `
    query getAccessTokenByAppSecret($secret: String, $clientId: String, $retUserId: Boolean, $timestamp: String, $signature: String, $nonce: Int) {
  getAccessTokenByAppSecret(secret: $secret, clientId: $clientId, retUserId: $retUserId, timestamp: $timestamp, signature: $signature, nonce: $nonce)
}
    `;
export const GetAllWebhooksDocument = `
    query getAllWebhooks($client: String!) {
  getAllWebhooks(client: $client) {
    _id
    client
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
export const GetAppSecretByClientIdDocument = `
    query getAppSecretByClientId($token: String, $clientId: String) {
  getAppSecretByClientId(token: $token, clientId: $clientId) {
    secret
    clientId
  }
}
    `;
export const GetClientWhenSdkInitDocument = `
    query getClientWhenSdkInit($secret: String, $clientId: String, $retUserId: Boolean, $timestamp: String, $signature: String, $nonce: Int) {
  getClientWhenSdkInit(secret: $secret, clientId: $clientId, retUserId: $retUserId, timestamp: $timestamp, signature: $signature, nonce: $nonce) {
    clientInfo {
      _id
      iamType
      domain
      userLimit
      usersCount
      logo
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWXMPQRCode
      useMiniLogin
      useSelfWxapp
      allowedOrigins
      name
      secret
      token
      descriptions
      jwtExpired
      createdAt
      isDeleted
      enableEmail
    }
    accessToken
  }
}
    `;
export const GetCustomMfaDocument = `
    query getCustomMFA($userIdInMiniLogin: String!, $page: Int, $count: Int) {
  getCustomMFA(userIdInMiniLogin: $userIdInMiniLogin, page: $page, count: $count) {
    list {
      _id
      userIdInMiniLogin
      remark
      name
      secret
    }
    total
  }
}
    `;
export const GetOAuthedAppInfoDocument = `
    query getOAuthedAppInfo($appId: String!) {
  getOAuthedAppInfo(appId: $appId) {
    _id
    name
    domain
    image
    redirectUris
    appSecret
    client_id
    clientId
    grants
    description
    homepageURL
    isDeleted
    when
    css
    loginUrl
    casExpire
  }
}
    `;
export const GetOAuthedAppListDocument = `
    query getOAuthedAppList($clientId: String, $page: Int, $count: Int) {
  getOAuthedAppList(clientId: $clientId, page: $page, count: $count) {
    totalCount
    list {
      _id
      name
      domain
      image
      redirectUris
      appSecret
      client_id
      clientId
      grants
      description
      homepageURL
      isDeleted
      when
      css
      loginUrl
      casExpire
    }
  }
}
    `;
export const GetUserLoginAreaStatisticOfClientDocument = `
    query getUserLoginAreaStatisticOfClient($userPool: String!, $start: String, $end: String) {
  getUserLoginAreaStatisticOfClient(userPool: $userPool, start: $start, end: $end)
}
    `;
export const GetUserPoolByDomainDocument = `
    query getUserPoolByDomain($domain: String!) {
  getUserPoolByDomain(domain: $domain) {
    _id
    name
    domain
    logo
    iamType
    userLimit
    createdAt
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
  }
}
    `;
export const GetUserPoolSettingsDocument = `
    query getUserPoolSettings($userPoolId: String!) {
  getUserPoolSettings(userPoolId: $userPoolId) {
    _id
    user {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    iamType
    domain
    clientType {
      _id
      name
      description
      image
      example
    }
    userLimit
    userPoolTypes {
      _id
      name
      description
      image
      example
    }
    usersCount
    logo
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWXMPQRCode
    useMiniLogin
    useSelfWxapp
    allowedOrigins
    name
    secret
    token
    descriptions
    jwtExpired
    createdAt
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
    enableEmail
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
  }
}
    `;
export const GetWebhookDetailDocument = `
    query getWebhookDetail($client: String!) {
  getWebhookDetail(client: $client) {
    _id
    client
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
export const GetWebhookLogDetailDocument = `
    query getWebhookLogDetail($id: String!) {
  getWebhookLogDetail(id: $id) {
    _id
    webhook
    client
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
    when
  }
}
    `;
export const GetWebhookLogsDocument = `
    query getWebhookLogs($webhook: String!) {
  getWebhookLogs(webhook: $webhook) {
    _id
    webhook
    client
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
    when
  }
}
    `;
export const GetWebhookSettingOptionsDocument = `
    query getWebhookSettingOptions {
  getWebhookSettingOptions {
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
export const GroupMetadataDocument = `
    query groupMetadata($_id: String!) {
  groupMetadata(_id: $_id) {
    key
    value
  }
}
    `;
export const InterConnectionsDocument = `
    query interConnections($userPoolId: String!) {
  interConnections(userPoolId: $userPoolId) {
    sourceUserPoolId
    sourceUserId
    targetUserPoolId
    targetUserId
    enabled
    expiresdAt
  }
}
    `;
export const IsAdConnectorAliveDocument = `
    query isAdConnectorAlive($adConnectorId: String) {
  isAdConnectorAlive(adConnectorId: $adConnectorId) {
    isAlive
  }
}
    `;
export const IsAppAuthorizedByUserDocument = `
    query isAppAuthorizedByUser($userId: String, $appId: String) {
  isAppAuthorizedByUser(userId: $userId, appId: $appId) {
    authorized
  }
}
    `;
export const IsClientBelongToUserDocument = `
    query isClientBelongToUser($userId: String, $clientId: String, $permissionDescriptors: [PermissionDescriptorsListInputType]) {
  isClientBelongToUser(userId: $userId, clientId: $clientId, permissionDescriptors: $permissionDescriptors)
}
    `;
export const IsClientOfUserDocument = `
    query isClientOfUser($email: String, $password: String, $clientId: String) {
  isClientOfUser(email: $email, password: $password, clientId: $clientId)
}
    `;
export const IsDomainAvaliableDocument = `
    query isDomainAvaliable($domain: String!) {
  isDomainAvaliable(domain: $domain)
}
    `;
export const IsLoginExpiredDocument = `
    query isLoginExpired($id: String!) {
  isLoginExpired(id: $id)
}
    `;
export const IsRootNodeOfOrgDocument = `
    query isRootNodeOfOrg($input: IsRootNodeOfOrgInput!) {
  isRootNodeOfOrg(input: $input)
}
    `;
export const IsUserInGroupDocument = `
    query isUserInGroup($groupId: String!, $userId: String!) {
  isUserInGroup(groupId: $groupId, userId: $userId)
}
    `;
export const LoginCountDocument = `
    query loginCount($userId: String, $clientId: String, $month: String) {
  loginCount(userId: $userId, clientId: $clientId, month: $month) {
    _id
    client
    count
    month
    isError
    totalNumber
  }
}
    `;
export const LoginHotDotPicDataDocument = `
    query loginHotDotPicData($client: String) {
  loginHotDotPicData(client: $client) {
    list
  }
}
    `;
export const NotBindOAuthListDocument = `
    query notBindOAuthList($client: String, $user: String) {
  notBindOAuthList(client: $client, user: $user) {
    type
    oAuthUrl
    image
    name
    binded
  }
}
    `;
export const OrgDocument = `
    query org($_id: String!) {
  org(_id: $_id) {
    _id
    logo
    nodes {
      _id
      name
      description
      createdAt
      updatedAt
      children
      root
      depth
    }
  }
}
    `;
export const OrgChildrenNodesDocument = `
    query orgChildrenNodes($input: OrgChildrenNodesInput!) {
  orgChildrenNodes(input: $input) {
    group {
      _id
      userPoolId
      name
      description
      createdAt
      updatedAt
    }
    depth
  }
}
    `;
export const OrgNodeUserListDocument = `
    query orgNodeUserList($orgId: String!, $nodeId: String!, $page: Int, $count: Int, $includeChildrenNodes: Boolean) {
  orgNodeUserList(orgId: $orgId, nodeId: $nodeId, page: $page, count: $count, includeChildrenNodes: $includeChildrenNodes) {
    list {
      _id
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      username
      nickname
      company
      photo
      browser
      device
      password
      registerInClient
      registerMethod
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
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
      metadata
      salt
    }
    totalCount
  }
}
    `;
export const OrgRootNodeDocument = `
    query orgRootNode($sortBy: SortByEnum, $page: Int, $count: Int, $_id: String!) {
  orgRootNode(_id: $_id) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const OrgsDocument = `
    query orgs($userPoolId: String!) {
  orgs(userPoolId: $userPoolId) {
    totalCount
    list {
      _id
      logo
    }
  }
}
    `;
export const PlatformUserGrowthTrendDocument = `
    query platformUserGrowthTrend($today: String) {
  platformUserGrowthTrend(today: $today) {
    day
    count
  }
}
    `;
export const PreviewEmailTemplateDocument = `
    query previewEmailTemplate($type: String, $client: String) {
  previewEmailTemplate(type: $type, client: $client) {
    message
    code
    status
  }
}
    `;
export const ProviderListByAdConnectorDocument = `
    query providerListByADConnector($_id: String!) {
  providerListByADConnector(_id: $_id) {
    providerType
    providerId
    userPoolId
    adConnectorId
  }
}
    `;
export const QiNiuUploadTokenDocument = `
    query qiNiuUploadToken($type: String) {
  qiNiuUploadToken(type: $type)
}
    `;
export const QpsByTimeDocument = `
    query qpsByTime($startTime: String, $endTime: String, $currentTime: String) {
  qpsByTime(startTime: $startTime, endTime: $endTime, currentTime: $currentTime) {
    qps
    time
  }
}
    `;
export const QueryAuthAuditRecordsDocument = `
    query queryAuthAuditRecords($userPoolId: String!, $sortBy: String, $page: Int, $count: Int) {
  queryAuthAuditRecords(userPoolId: $userPoolId, sortBy: $sortBy, page: $page, count: $count) {
    list {
      userPoolId
      appType
      appId
      event
      userId
      createdAt
    }
    totalCount
  }
}
    `;
export const QueryAuthorizedUserPoolDocument = `
    query queryAuthorizedUserPool($unionid: String, $phone: String, $openid: String, $page: Int, $count: Int) {
  queryAuthorizedUserPool(unionid: $unionid, phone: $phone, openid: $openid, page: $page, count: $count) {
    list {
      userId
    }
    total
  }
}
    `;
export const QueryClientDocument = `
    query queryClient($id: String!) {
  queryClient(id: $id) {
    _id
    user {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    iamType
    domain
    clientType {
      _id
      name
      description
      image
      example
    }
    userLimit
    userPoolTypes {
      _id
      name
      description
      image
      example
    }
    usersCount
    logo
    emailVerifiedDefault
    sendWelcomeEmail
    registerDisabled
    showWXMPQRCode
    useMiniLogin
    useSelfWxapp
    allowedOrigins
    name
    secret
    token
    descriptions
    jwtExpired
    createdAt
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
    enableEmail
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
  }
}
    `;
export const QueryCollaborationByUserPoolIdAndUserIdDocument = `
    query queryCollaborationByUserPoolIdAndUserId($userId: String!, $userPoolId: String!) {
  queryCollaborationByUserPoolIdAndUserId(userId: $userId, userPoolId: $userPoolId) {
    _id
    createdAt
    owner {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    collaborator {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    userPool {
      _id
      iamType
      domain
      userLimit
      usersCount
      logo
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWXMPQRCode
      useMiniLogin
      useSelfWxapp
      allowedOrigins
      name
      secret
      token
      descriptions
      jwtExpired
      createdAt
      isDeleted
      enableEmail
    }
    permissionDescriptors {
      permissionId
      name
      operationAllow
    }
  }
}
    `;
export const QueryCollaborativeUserPoolByUserIdDocument = `
    query queryCollaborativeUserPoolByUserId($userId: String!, $page: Int, $count: Int) {
  queryCollaborativeUserPoolByUserId(userId: $userId, page: $page, count: $count) {
    list {
      _id
      createdAt
    }
    totalCount
  }
}
    `;
export const QueryCollaboratorPermissionsDocument = `
    query queryCollaboratorPermissions($userId: String, $collaborationId: String) {
  queryCollaboratorPermissions(userId: $userId, collaborationId: $collaborationId) {
    collaborator {
      _id
      username
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      nickname
      company
      photo
      browser
      password
      registerInClient
      registerMethod
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
      oldPassword
      metadata
    }
    list {
      permissionId
      name
      operationAllow
    }
  }
}
    `;
export const QueryCollaboratorsByUserPoolIdDocument = `
    query queryCollaboratorsByUserPoolId($userPoolId: String!, $count: Int, $page: Int) {
  queryCollaboratorsByUserPoolId(userPoolId: $userPoolId, count: $count, page: $page) {
    collaborationId
    list {
      _id
      createdAt
    }
  }
}
    `;
export const QueryInvitationDocument = `
    query queryInvitation($client: String!) {
  queryInvitation(client: $client) {
    client
    phone
    isDeleted
    createdAt
    updatedAt
  }
}
    `;
export const QueryInvitationStateDocument = `
    query queryInvitationState($client: String!) {
  queryInvitationState(client: $client) {
    client
    enablePhone
    createdAt
    updatedAt
  }
}
    `;
export const QueryMfaDocument = `
    query queryMFA($_id: String, $userId: String, $userPoolId: String) {
  queryMFA(_id: $_id, userId: $userId, userPoolId: $userPoolId) {
    _id
    userId
    userPoolId
    enable
    shareKey
  }
}
    `;
export const QueryOperationLogsDocument = `
    query queryOperationLogs($userPoolId: String!, $coll: String!, $page: Int, $count: Int) {
  queryOperationLogs(userPoolId: $userPoolId, coll: $coll, page: $page, count: $count) {
    totalCount
    list {
      operatorId
      operatorName
      operatorAvatar
      isAdmin
      isCollaborator
      isOwner
      operationType
      updatedFields
      removedFields
      operateAt
      fullDocument
      coll
    }
  }
}
    `;
export const QueryPasswordFaasEnabledDocument = `
    query queryPasswordFaasEnabled($client: String!) {
  queryPasswordFaasEnabled(client: $client) {
    encryptUrl
    decryptUrl
    user
    client
    logs
    enable
    createdAt
    updatedAt
  }
}
    `;
export const QueryPasswordStrengthSettingsByUserPoolIdDocument = `
    query queryPasswordStrengthSettingsByUserPoolId($userPoolId: String!) {
  queryPasswordStrengthSettingsByUserPoolId(userPoolId: $userPoolId) {
    userPoolId
    pwdStrength
  }
}
    `;
export const QueryPermissionListDocument = `
    query queryPermissionList {
  queryPermissionList {
    list {
      _id
      name
      affect
      description
    }
    totalCount
  }
}
    `;
export const QueryProviderInfoByAppIdDocument = `
    query queryProviderInfoByAppId($appId: String) {
  queryProviderInfoByAppId(appId: $appId) {
    _id
    type
    name
    image
    domain
    clientId
    client_id
    css
    redirect_uris
  }
}
    `;
export const QueryProviderInfoByDomainDocument = `
    query queryProviderInfoByDomain($domain: String) {
  queryProviderInfoByDomain(domain: $domain) {
    _id
    type
    name
    image
    domain
    clientId
    client_id
    css
    redirect_uris
  }
}
    `;
export const QueryRoleByUserIdDocument = `
    query queryRoleByUserId($user: String!, $client: String!) {
  queryRoleByUserId(user: $user, client: $client) {
    list {
      _id
      createdAt
    }
    totalCount
  }
}
    `;
export const QuerySmsSendCountDocument = `
    query querySMSSendCount($userPoolId: String!) {
  querySMSSendCount(userPoolId: $userPoolId) {
    count
    limitCount
  }
}
    `;
export const QuerySystemOAuthSettingDocument = `
    query querySystemOAuthSetting {
  querySystemOAuthSetting {
    _id
    name
    alias
    image
    description
    enabled
    url
    client
    user
    oAuthUrl
    wxappLogo
    fields {
      label
      type
      placeholder
      value
      checked
    }
    oauth {
      _id
      name
      alias
      image
      description
      enabled
      url
      client
      user
      oAuthUrl
      wxappLogo
    }
  }
}
    `;
export const QueryUserPoolCommonInfoDocument = `
    query queryUserPoolCommonInfo($userPoolId: String!) {
  queryUserPoolCommonInfo(userPoolId: $userPoolId) {
    _id
    name
    domain
    logo
    iamType
    userLimit
    createdAt
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
  }
}
    `;
export const RbacGroupDocument = `
    query rbacGroup($sortBy: SortByEnum, $page: Int, $count: Int, $_id: String!) {
  rbacGroup(_id: $_id) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const RbacGroupListDocument = `
    query rbacGroupList($userPoolId: String!, $sortBy: SortByEnum, $dissociative: Boolean, $page: Int, $count: Int) {
  rbacGroupList(userPoolId: $userPoolId, sortBy: $sortBy, dissociative: $dissociative, page: $page, count: $count) {
    totalCount
    list {
      _id
      userPoolId
      name
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const RbacPermissionDocument = `
    query rbacPermission($_id: String!) {
  rbacPermission(_id: $_id) {
    _id
    name
    userPoolId
    createdAt
    updatedAt
    description
  }
}
    `;
export const RbacPermissionListDocument = `
    query rbacPermissionList($userPoolId: String!, $sortBy: SortByEnum, $page: Int, $count: Int) {
  rbacPermissionList(userPoolId: $userPoolId, sortBy: $sortBy, page: $page, count: $count) {
    totalCount
    list {
      _id
      name
      userPoolId
      createdAt
      updatedAt
      description
    }
  }
}
    `;
export const RbacRoleDocument = `
    query rbacRole($sortBy: SortByEnum, $page: Int, $count: Int, $_id: String!) {
  rbacRole(_id: $_id) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const RbacRoleListDocument = `
    query rbacRoleList($userPoolId: String!, $sortBy: SortByEnum, $page: Int, $count: Int) {
  rbacRoleList(userPoolId: $userPoolId, sortBy: $sortBy, page: $page, count: $count) {
    totalCount
    list {
      _id
      userPoolId
      name
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const RecentServiceCallDocument = `
    query recentServiceCall($today: String) {
  recentServiceCall(today: $today) {
    userService {
      day
      count
    }
    emailService {
      day
      count
    }
    oAuthService {
      day
      count
    }
    payService {
      day
      count
    }
  }
}
    `;
export const RegisterEveryDayCountDocument = `
    query registerEveryDayCount($client: String) {
  registerEveryDayCount(client: $client) {
    list
  }
}
    `;
export const RegisterMethodTopListDocument = `
    query registerMethodTopList($userPoolId: String!) {
  registerMethodTopList(userPoolId: $userPoolId) {
    method
    count
  }
}
    `;
export const RequestListDocument = `
    query requestList($page: Int, $count: Int) {
  requestList(page: $page, count: $count) {
    totalCount
    list {
      _id
      when
      where
      ip
      size
      responseTime
      service
    }
  }
}
    `;
export const RuleByIdDocument = `
    query ruleById($_id: String!) {
  ruleById(_id: $_id) {
    _id
    userPoolId
    name
    description
    type
    enabled
    faasUrl
    code
    order
    async
    createdAt
    updatedAt
  }
}
    `;
export const RuleEnvDocument = `
    query ruleEnv($userPoolId: String!) {
  ruleEnv(userPoolId: $userPoolId) {
    totalCount
    list {
      key
      value
    }
  }
}
    `;
export const RulesDocument = `
    query rules($userPoolId: String!) {
  rules(userPoolId: $userPoolId) {
    totalCount
    list {
      _id
      userPoolId
      name
      description
      type
      enabled
      faasUrl
      code
      order
      async
      createdAt
      updatedAt
    }
  }
}
    `;
export const SamlIdPFieldMappingsDocument = `
    query samlIdPFieldMappings($_id: String!) {
  samlIdPFieldMappings(_id: $_id) {
    sourceExpression
    description
    type
    targetField
  }
}
    `;
export const SearchGroupByMetadataDocument = `
    query searchGroupByMetadata($userPoolId: String!, $key: String!, $value: String!) {
  searchGroupByMetadata(userPoolId: $userPoolId, key: $key, value: $value) {
    totalCount
    list {
      _id
      userPoolId
      name
      description
      createdAt
      updatedAt
    }
  }
}
    `;
export const SearchOrgNodeUserDocument = `
    query searchOrgNodeUser($orgId: String!, $nodeId: String!, $query: String!, $includeChildrenNodes: Boolean) {
  searchOrgNodeUser(orgId: $orgId, nodeId: $nodeId, query: $query, includeChildrenNodes: $includeChildrenNodes) {
    list {
      _id
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      username
      nickname
      company
      photo
      browser
      device
      password
      registerInClient
      registerMethod
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
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
      metadata
      salt
    }
    totalCount
  }
}
    `;
export const SearchOrgNodesDocument = `
    query searchOrgNodes($sortBy: SortByEnum, $page: Int, $count: Int, $orgId: String!, $name: String, $metadata: [KeyValuePair!]) {
  searchOrgNodes(orgId: $orgId, name: $name, metadata: $metadata) {
    _id
    userPoolId
    name
    description
    createdAt
    updatedAt
    roles {
      totalCount
    }
    permissions {
      totalCount
    }
    users(sortBy: $sortBy, page: $page, count: $count) {
      totalCount
    }
  }
}
    `;
export const SearchUserDocument = `
    query searchUser($type: String!, $value: String!, $registerInClient: String!, $page: Int, $count: Int) {
  searchUser(type: $type, value: $value, registerInClient: $registerInClient, page: $page, count: $count) {
    list {
      _id
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      username
      nickname
      company
      photo
      browser
      device
      password
      registerInClient
      registerMethod
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
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
      metadata
      salt
    }
    totalCount
  }
}
    `;
export const SearchUserBasicInfoByIdDocument = `
    query searchUserBasicInfoById($userId: String) {
  searchUserBasicInfoById(userId: $userId) {
    _id
    username
    photo
    email
  }
}
    `;
export const StatisticDocument = `
    query statistic($sortBy: String, $page: Int, $count: Int) {
  statistic(sortBy: $sortBy, page: $page, count: $count) {
    list {
      _id
      username
      email
      loginsCount
      appsCount
      OAuthCount
    }
    totalCount
  }
}
    `;
export const SupportedSamlFieldMappingsDocument = `
    query supportedSAMLFieldMappings {
  supportedSAMLFieldMappings {
    name
    type
    description
    editable
  }
}
    `;
export const TodayGeoDistributionDocument = `
    query todayGeoDistribution($today: String) {
  todayGeoDistribution(today: $today) {
    city
    size
    point
  }
}
    `;
export const UserDocument = `
    query user($id: String, $registerInClient: String, $token: String, $auth: Boolean, $userLoginHistoryPage: Int, $userLoginHistoryCount: Int) {
  user(id: $id, registerInClient: $registerInClient, token: $token, auth: $auth, userLoginHistoryPage: $userLoginHistoryPage, userLoginHistoryCount: $userLoginHistoryCount) {
    _id
    email
    unionid
    openid
    emailVerified
    phone
    phoneVerified
    username
    nickname
    company
    photo
    browser
    device
    password
    registerInClient
    registerMethod
    oauth
    token
    tokenExpiredAt
    loginsCount
    lastLogin
    lastIP
    signedUp
    blocked
    isDeleted
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
    group {
      _id
      name
      descriptions
      client
      permissions
      createdAt
    }
    clientType {
      _id
      name
      description
      image
      example
    }
    userLocation {
      _id
      when
      where
    }
    userLoginHistory {
      totalCount
    }
    systemApplicationType {
      _id
      name
      descriptions
      price
    }
    thirdPartyIdentity {
      provider
      refreshToken
      accessToken
      expiresIn
      updatedAt
    }
    customData
    metadata
    salt
  }
}
    `;
export const UserAnalyticsDocument = `
    query userAnalytics($clientId: String) {
  userAnalytics(clientId: $clientId) {
    usersAddedToday {
      length
    }
    usersAddedLastWeek {
      length
    }
    usersLoginLastWeek {
      length
    }
    totalUsers {
      length
    }
    allUsers
    totalApps
  }
}
    `;
export const UserClientListDocument = `
    query userClientList($page: Int, $count: Int, $sortBy: String) {
  userClientList(page: $page, count: $count, sortBy: $sortBy) {
    list {
      _id
      name
      createdAt
      usersCount
    }
    totalCount
  }
}
    `;
export const UserClientTypesDocument = `
    query userClientTypes {
  userClientTypes {
    _id
    name
    description
    image
    example
  }
}
    `;
export const UserClientsDocument = `
    query userClients($userId: String!, $page: Int, $count: Int, $computeUsersCount: Boolean) {
  userClients(userId: $userId, page: $page, count: $count, computeUsersCount: $computeUsersCount) {
    list {
      _id
      iamType
      domain
      userLimit
      usersCount
      logo
      emailVerifiedDefault
      sendWelcomeEmail
      registerDisabled
      showWXMPQRCode
      useMiniLogin
      useSelfWxapp
      allowedOrigins
      name
      secret
      token
      descriptions
      jwtExpired
      createdAt
      isDeleted
      enableEmail
    }
    totalCount
  }
}
    `;
export const UserExistDocument = `
    query userExist($userPoolId: String!, $email: String, $phone: String, $username: String) {
  userExist(userPoolId: $userPoolId, email: $email, phone: $phone, username: $username)
}
    `;
export const UserGroupDocument = `
    query userGroup($group: String!, $client: String!, $page: Int, $count: Int) {
  userGroup(group: $group, client: $client, page: $page, count: $count) {
    list {
      _id
      createdAt
    }
    totalCount
  }
}
    `;
export const UserGroupListDocument = `
    query userGroupList($_id: String!) {
  userGroupList(_id: $_id) {
    totalCount
    list {
      _id
      userPoolId
      name
      description
      createdAt
      updatedAt
    }
    rawList
  }
}
    `;
export const UserMetadataDocument = `
    query userMetadata($_id: String!) {
  userMetadata(_id: $_id) {
    totalCount
    list {
      key
      value
    }
  }
}
    `;
export const UserOAuthCountDocument = `
    query userOAuthCount($userIds: [String]) {
  userOAuthCount(userIds: $userIds)
}
    `;
export const UserPatchDocument = `
    query userPatch($ids: String) {
  userPatch(ids: $ids) {
    list {
      _id
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      username
      nickname
      company
      photo
      browser
      device
      password
      registerInClient
      registerMethod
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
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
      metadata
      salt
    }
    totalCount
  }
}
    `;
export const UserPermissionListDocument = `
    query userPermissionList($_id: String!) {
  userPermissionList(_id: $_id) {
    totalCount
    list {
      _id
      name
      userPoolId
      createdAt
      updatedAt
      description
    }
    rawList
  }
}
    `;
export const UserRoleListDocument = `
    query userRoleList($_id: String!) {
  userRoleList(_id: $_id) {
    totalCount
    list {
      _id
      userPoolId
      name
      description
      createdAt
      updatedAt
    }
    rawList
  }
}
    `;
export const UsersDocument = `
    query users($registerInClient: String, $page: Int, $count: Int, $populate: Boolean) {
  users(registerInClient: $registerInClient, page: $page, count: $count, populate: $populate) {
    list {
      _id
      email
      unionid
      openid
      emailVerified
      phone
      phoneVerified
      username
      nickname
      company
      photo
      browser
      device
      password
      registerInClient
      registerMethod
      oauth
      token
      tokenExpiredAt
      loginsCount
      lastLogin
      lastIP
      signedUp
      blocked
      isDeleted
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
      metadata
      salt
    }
    totalCount
  }
}
    `;
export const UsersByOidcAppDocument = `
    query usersByOidcApp($userPoolId: String, $page: Int, $count: Int, $appId: String) {
  usersByOidcApp(userPoolId: $userPoolId, page: $page, count: $count, appId: $appId) {
    list
    totalCount
  }
}
    `;
export const UsersInGroupDocument = `
    query usersInGroup($group: String, $page: Int, $count: Int) {
  usersInGroup(group: $group, page: $page, count: $count) {
    list {
      email
      username
      _id
      upgrade
    }
    totalCount
  }
}
    `;
export const ValidatePasswordDocument = `
    query validatePassword($userPool: String!, $password: String!, $encryptedPassword: String!) {
  validatePassword(userPool: $userPool, password: $password, encryptedPassword: $encryptedPassword) {
    isValid
  }
}
    `;
export const WechatWorkCorpDocument = `
    query wechatWorkCorp($userPoolId: String!, $corpId: String!) {
  wechatWorkCorp(userPoolId: $userPoolId, corpId: $corpId) {
    corpId
    corpName
    addressBookSyncHelperSecret
    addressBookSyncHelperToken
    addressBookSyncHelperEncodingAESKey
    twoWaySynchronizationOn
    createdAt
    updatedAt
    orgId
  }
}
    `;
export const WxQrCodeLogDocument = `
    query wxQRCodeLog($page: Int, $count: Int, $clientId: String, $sortBy: String) {
  wxQRCodeLog(page: $page, count: $count, clientId: $clientId, sortBy: $sortBy) {
    list {
      random
      expiredAt
      createdAt
      success
      qrcode
      used
      accessToken
      openid
      userInfo
      redirect
    }
    totalCount
  }
}
    `;
