
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum RuleTypes {
  PRE_REGISTER = "PRE_REGISTER",
  POST_REGISTER = "POST_REGISTER",
  POST_AUTHENTICATION = "POST_AUTHENTICATION",
  PRE_OIDCTOKENISSUED = "PRE_OIDCTOKENISSUED"
}

export enum SortByEnum {
  CREATEDAT_DESC = "CREATEDAT_DESC",
  CREATEDAT_ASC = "CREATEDAT_ASC",
  UPDATEDAT_DESC = "UPDATEDAT_DESC",
  UPDATEDAT_ASC = "UPDATEDAT_ASC"
}

export class AddOrgNodeInput {
  orgId: string;
  groupId: string;
  parentGroupId: string;
}

export class AddPermissionToRBACRoleBatchInput {
  permissionIdList: string[];
  roleId: string;
}

export class AddPermissionToRBACRoleInput {
  permissionId: string;
  roleId: string;
}

export class AddRoleToRBACGroupBatchInput {
  roleIdList: string[];
  groupId: string;
}

export class AddRoleToRBACGroupInput {
  roleId: string;
  groupId: string;
}

export class AddUserToRBACGroupBatchInput {
  userIdList: string[];
  groupId: string;
}

export class AddUserToRBACGroupInput {
  userId: string;
  groupId: string;
}

export class App2WxappLoginStrategyInput {
  ticketExpriresAfter?: number;
  ticketExchangeUserInfoNeedSecret?: boolean;
}

export class AssertionConsumeServiceInputType {
  binding?: string;
  url?: string;
  isDefault?: boolean;
}

export class AssertionMapInputType {
  username?: string;
  nickname?: string;
  photo?: string;
  company?: string;
  providerName?: string;
  email?: string;
}

export class AssignUserToRBACRoleBatchInput {
  userIdList: string[];
  roleId: string;
}

export class AssignUserToRBACRoleInput {
  userId: string;
  roleId: string;
}

export class AuthenticationContextInput {
  protocol: string;
  connection: string;
  ldapConfiguration?: LdapConfigurationInput;
}

export class ChangeEmailStrategyInput {
  verifyOldEmail?: boolean;
}

export class ChangePhoneStrategyInput {
  verifyOldPhone?: boolean;
}

export class CreateOrgInput {
  rootGroupId: string;
  userPoolId: string;
}

export class CreateRBACGroupInput {
  userPoolId: string;
  name: string;
  description?: string;
}

export class CreateRBACPermissionInput {
  userPoolId: string;
  name: string;
  description?: string;
}

export class CreateRBACRoleInput {
  userPoolId: string;
  name: string;
  description?: string;
}

export class CreateRuleInput {
  userPoolId: string;
  name: string;
  description?: string;
  type: RuleTypes;
  code: string;
}

export class DeleteOrgInput {
  _id: string;
}

export class EmailProviderFormAddInput {
  label?: string;
  type?: string;
  placeholder?: string;
  help?: string;
  value?: string;
  options?: string[];
}

export class EmailProviderFormInput {
  label?: string;
  type?: string;
  placeholder?: string;
  help?: string;
  value?: string;
  options?: string[];
}

export class EmailProviderListInput {
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  fields?: EmailProviderFormInput[];
}

export class EmailProviderWithClientAddInput {
  _id?: string;
  user?: string;
  client?: string;
  status?: boolean;
  fields?: EmailProviderFormAddInput[];
  provider?: string;
}

export class EmailTemplateInput {
  _id?: string;
  type?: string;
  sender?: string;
  object?: string;
  hasURL?: boolean;
  URLExpireTime?: number;
  status?: boolean;
  redirectTo?: string;
  content?: string;
}

export class EmailTemplateWithClientInput {
  _id?: string;
  user?: string;
  client?: string;
  template?: string;
  sender?: string;
  object?: string;
  hasURL?: boolean;
  URLExpireTime?: number;
  redirectTo?: string;
  status?: boolean;
  content?: string;
}

export class FrequentRegisterCheckConfigInput {
  timeInterval?: number;
  limit?: number;
  enable?: boolean;
}

export class IsRootNodeOfOrgInput {
  groupId: string;
  orgId: string;
}

export class LdapConfigurationInput {
  _id: string;
  enabled: boolean;
  isDeleted: boolean;
  name: string;
  ldapLink: string;
  baseDN: string;
  searchStandard: string;
  username: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
}

export class LoginFailCheckConfigInput {
  timeInterval?: number;
  limit?: number;
  enable?: boolean;
}

export class NewUserClientInput {
  name: string;
  userId: string;
  logo?: string;
  clientTypeId?: string;
  userPoolTypeList?: string[];
}

export class OAuthListFieldsFormRecursionInput {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  children?: OAuthListFieldsFormRecursionInput[];
}

export class OAuthListFieldsFormUpdateInput {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  children?: OAuthListFieldsFormRecursionInput[];
  checked?: string[];
}

export class OAuthListUpdateInput {
  _id?: string;
  name?: string;
  alias?: string;
  image?: string;
  description?: string;
  enabled?: boolean;
  url?: string;
  client?: string;
  user?: string;
  oAuthUrl?: string;
  wxappLogo?: string;
}

export class OIDCProviderCustomStylesInput {
  forceLogin?: boolean;
  hideQRCode?: boolean;
  hideUP?: boolean;
  hideUsername?: boolean;
  hideRegister?: boolean;
  hidePhone?: boolean;
  hideSocial?: boolean;
  hideClose?: boolean;
  placeholder?: OIDCProviderCustomStylesPlaceholderInput;
  qrcodeScanning?: OIDCProviderCustomStylesQrcodeScanningInput;
}

export class OIDCProviderCustomStylesPlaceholderInput {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  verfiyCode?: string;
  newPassword?: string;
  phone?: string;
  phoneCode?: string;
}

export class OIDCProviderCustomStylesQrcodeScanningInput {
  redirect?: boolean;
  interval?: number;
  tips?: string;
}

export class OrderAddInput {
  user: string;
  client: string;
  pricing: string;
  flowNumber: number;
  price: number;
  timeOfPurchase: number;
}

export class OrgChildrenNodesInput {
  groupId: string;
  orgId: string;
}

export class PermissionDescriptorsInputType {
  permissionId?: string;
  operationAllow?: number;
}

export class PermissionDescriptorsListInputType {
  permissionId?: string;
  name?: string;
  operationAllow?: number;
}

export class PricingFieldsInput {
  _id?: string;
  type?: string;
  startNumber?: number;
  freeNumber?: number;
  startPrice?: number;
  maxNumber?: number;
  d?: number;
  features?: string[];
}

export class QrcodeLoginStrategyInput {
  qrcodeExpiresAfter?: number;
  returnFullUserInfo?: boolean;
  allowExchangeUserInfoFromBrowser?: boolean;
  ticketExpiresAfter?: number;
}

export class RemoveOrgNodeInput {
  orgId: string;
  groupId: string;
}

export class RemovePermissionFromRBACRoleBatchInput {
  permissionIdList: string[];
  roleId: string;
}

export class RemovePermissionFromRBACRoleInput {
  permissionId: string;
  roleId: string;
}

export class RemoveRoleFromRBACGroupBatchInput {
  roleIdList: string[];
  groupId: string;
}

export class RemoveRoleFromRBACGroupInput {
  roleId: string;
  groupId: string;
}

export class RemoveRuleEnvInput {
  userPoolId: string;
  key: string;
}

export class RemoveUserFromRBACGroupBatchInput {
  userIdList: string[];
  groupId: string;
}

export class RemoveUserFromRBACGroupInput {
  userId: string;
  groupId: string;
}

export class RemoveUserMetadataInput {
  _id: string;
  key: string;
}

export class RevokeRBACRoleFromUserBatchInput {
  userIdList: string[];
  roleId: string;
}

export class RevokeRBACRoleFromUserInput {
  userId: string;
  roleId: string;
}

export class SetRuleEnvInput {
  userPoolId: string;
  key: string;
  value: string;
}

export class SetUserMetadataInput {
  _id: string;
  key: string;
  value: string;
}

export class SuperAdminUpdateInput {
  _id?: string;
  username: string;
  email: string;
  password: string;
}

export class UpdateRBACGroupInput {
  _id: string;
  name?: string;
  description?: string;
}

export class UpdateRBACPermissionInput {
  _id: string;
  name?: string;
  description?: string;
}

export class UpdateRBACRoleInput {
  _id: string;
  name?: string;
  description?: string;
}

export class UpdateRuleInput {
  _id: string;
  name?: string;
  description?: string;
  type?: RuleTypes;
  enabled?: boolean;
  code?: string;
}

export class UpdateRuleOrderInput {
  list: UpdateRuleOrderItem[];
}

export class UpdateRuleOrderItem {
  id: string;
  order: number;
}

export class UpdateUserClientInput {
  _id: string;
  name?: string;
  userId: string;
  clientType?: string;
  userPoolTypeList?: string[];
  emailVerifiedDefault?: boolean;
  sendWelcomeEmail?: boolean;
  registerDisabled?: boolean;
  showWXMPQRCode?: boolean;
  useMiniLogin?: boolean;
  useSelfWxapp?: boolean;
  enableEmail?: boolean;
  allowedOrigins?: string;
  descriptions?: string;
  jwtExpired?: number;
  secret?: string;
  frequentRegisterCheck?: FrequentRegisterCheckConfigInput;
  loginFailCheck?: LoginFailCheckConfigInput;
  logo?: string;
  changePhoneStrategy?: ChangePhoneStrategyInput;
  changeEmailStrategy?: ChangeEmailStrategyInput;
  qrcodeLoginStrategy?: QrcodeLoginStrategyInput;
  app2WxappLoginStrategy?: App2WxappLoginStrategyInput;
}

export class UserRegisterInput {
  email?: string;
  unionid?: string;
  openid?: string;
  phone?: string;
  phoneCode?: string;
  password?: string;
  forceLogin?: boolean;
  lastIP?: string;
  registerInClient?: string;
  registerMethod?: string;
  oauth?: string;
  username?: string;
  nickname?: string;
  company?: string;
  photo?: string;
  device?: string;
  browser?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  middleName?: string;
  profile?: string;
  preferredUsername?: string;
  website?: string;
  gender?: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  address?: string;
  formatted?: string;
  streetAddress?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  updatedAt?: string;
  signedUp?: string;
  lastLogin?: string;
}

export class UserUpdateInput {
  _id?: string;
  email?: string;
  unionid?: string;
  openid?: string;
  emailVerified?: boolean;
  phone?: string;
  phoneVerified?: boolean;
  username?: string;
  nickname?: string;
  company?: string;
  photo?: string;
  browser?: string;
  device?: string;
  password?: string;
  registerInClient?: string;
  registerMethod?: string;
  oauth?: string;
  token?: string;
  tokenExpiredAt?: string;
  loginsCount?: number;
  lastLogin?: string;
  lastIP?: string;
  signedUp?: string;
  blocked?: boolean;
  isDeleted?: boolean;
  name?: string;
  givenName?: string;
  familyName?: string;
  middleName?: string;
  profile?: string;
  preferredUsername?: string;
  website?: string;
  gender?: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  address?: string;
  formatted?: string;
  streetAddress?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  updatedAt?: string;
  oldPassword?: string;
}

export class App2WxappLoginStrategy {
  ticketExpriresAfter?: number;
  ticketExchangeUserInfoNeedSecret?: boolean;
}

export class AppSecretByClientId {
  secret?: string;
  clientId?: string;
}

export class AssertionConsumeService {
  binding?: string;
  url?: string;
  isDefault?: boolean;
}

export class AssertionMap {
  username?: string;
  nickname?: string;
  photo?: string;
  company?: string;
  providerName?: string;
  email?: string;
}

export class AuthAuditRecord {
  userPoolId?: string;
  appType?: string;
  appId?: string;
  event?: string;
  userId?: string;
  createdAt?: string;
}

export class AuthAuditRecordsList {
  list?: AuthAuditRecord[];
  totalCount?: number;
}

export class BasicUserInfo {
  _id?: string;
  username?: string;
  photo?: string;
  email?: string;
}

export class ChangeEmailStrategy {
  verifyOldEmail?: boolean;
}

export class ChangePhoneStrategy {
  verifyOldPhone?: boolean;
}

export class ChildrenOAuthList {
  _id?: string;
  name?: string;
  alias?: string;
  image?: string;
  description?: string;
  enabled?: boolean;
  url?: string;
  client?: string;
  user?: string;
  oAuthUrl?: string;
  wxappLogo?: string;
  fields?: OAuthListFieldsForm[];
  oauth?: ChildrenOAuthList;
}

export class Client {
  _id?: string;
  name?: string;
  createdAt?: string;
  user?: User;
}

export class ClientHasLDAPConfigs {
  result?: boolean;
}

export class ClientInfoAndAccessToken {
  clientInfo?: UserClient;
  accessToken?: string;
}

export class ClientInWxQRCodeLogList {
  _id?: string;
  name?: string;
  createdAt?: string;
  user?: UserInClientInWxQRCodeLogList;
}

export class ClientWebhook {
  _id?: string;
  client: string;
  events: WebhookEvent[];
  url: string;
  isLastTimeSuccess?: boolean;
  contentType: string;
  secret?: string;
  enable: boolean;
}

export class Collaboration {
  _id?: string;
  createdAt?: string;
  owner?: User;
  collaborator?: User;
  userPool?: UserClient;
  permissionDescriptors?: PermissionDescriptors[];
}

export class CollaborativeUserPoolList {
  list?: Collaboration[];
  totalCount?: number;
}

export class CollaboratorPermissions {
  collaborator?: User;
  list?: PermissionDescriptors[];
}

export class Collaborators {
  collaborationId?: string;
  list?: Collaboration[];
}

export class CommonMessage {
  message?: string;
  code?: number;
  status?: boolean;
}

export class CustomMFA {
  _id?: string;
  userIdInMiniLogin?: string;
  userPoolId?: UserClient;
  remark?: string;
  name?: string;
  secret?: string;
}

export class DayServiceCallList {
  day?: string;
  count?: number;
}

export class DayServiceCallListOfAllServices {
  userService?: DayServiceCallList[];
  emailService?: DayServiceCallList[];
  oAuthService?: DayServiceCallList[];
  payService?: DayServiceCallList[];
}

export class DayUserGrowth {
  day?: string;
  count?: number;
}

export class DeleteRBACGroupBatchResult {
  success: boolean;
  requestCount: number;
  deletedCount: number;
}

export class DeleteRBACPermissionBatchResult {
  success: boolean;
  requestCount: number;
  deletedCount: number;
}

export class DeleteRBACRoleBatchResult {
  success: boolean;
  requestCount: number;
  deletedCount: number;
}

export class Email {
  list?: PopulatedEmailSentList[];
  totalCount?: number;
}

export class EmailListPaged {
  totalCount?: number;
  list?: EmailSentList[];
}

export class EmailProviderChildrenList {
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  fields?: EmailProviderForm[];
  client?: string;
  user?: string;
  status?: boolean;
  provider?: EmailProviderChildrenList;
}

export class EmailProviderForm {
  label?: string;
  type?: string;
  placeholder?: string;
  help?: string;
  value?: string;
  options?: string[];
}

export class EmailProviderList {
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  fields?: EmailProviderForm[];
  client?: string;
  user?: string;
  status?: boolean;
  provider?: EmailProviderChildrenList;
}

export class EmailProviderWithClient {
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
}

export class EmailProviderWithClientForm {
  label?: string;
  type?: string;
  placeholder?: string;
  help?: string;
  value?: string;
  options?: string[];
}

export class EmailProviderWithClientList {
  _id?: string;
  user?: string;
  client?: string;
  status?: boolean;
  fields?: EmailProviderWithClientForm[];
  provider?: EmailProviderWithClient;
}

export class EmailSentList {
  _id?: string;
  user?: string;
  subject?: string;
  content?: string;
  sender?: string;
  receivers?: string[];
  post?: string;
  createdAt?: string;
  rejected?: string[];
  isDeleted?: string;
  client?: string;
}

export class EmailTemplate {
  _id?: string;
  type?: string;
  sender?: string;
  object?: string;
  hasURL?: boolean;
  URLExpireTime?: number;
  status?: boolean;
  redirectTo?: string;
  content?: string;
}

export class EmailTemplateWithClient {
  _id?: string;
  user?: string;
  client?: string;
  template?: EmailTemplate;
  type?: string;
  sender?: string;
  object?: string;
  hasURL?: boolean;
  URLExpireTime?: number;
  redirectTo?: string;
  status?: boolean;
  content?: string;
}

export class EncryptPassword {
  _id?: string;
  encryptUrl?: string;
  decryptUrl?: string;
  client?: string;
  user?: string;
  logs?: string;
  enable?: boolean;
  createdAt?: string;
  updatedAt?: string;
  password?: string;
}

export class ExtendUser {
  _id?: string;
  email?: string;
  unionid?: string;
  openid?: string;
  emailVerified?: boolean;
  phone?: string;
  phoneVerified?: boolean;
  username?: string;
  nickname?: string;
  company?: string;
  photo?: string;
  browser?: string;
  device?: string;
  password?: string;
  registerInClient?: string;
  registerMethod?: string;
  oauth?: string;
  token?: string;
  tokenExpiredAt?: string;
  loginsCount?: number;
  lastLogin?: string;
  lastIP?: string;
  signedUp?: string;
  blocked?: boolean;
  isDeleted?: boolean;
  name?: string;
  givenName?: string;
  familyName?: string;
  middleName?: string;
  profile?: string;
  preferredUsername?: string;
  website?: string;
  gender?: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  address?: string;
  formatted?: string;
  streetAddress?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  updatedAt?: string;
  group?: Group;
  clientType?: UserClientType;
  userLocation?: UserLocation[];
  userLoginHistory?: PagedUserLoginHistory;
  systemApplicationType?: SystemApplicationType;
  thirdPartyIdentity?: ThirdPartyIdentity;
  customData?: string;
  metadata?: string;
}

export class FrequentRegisterCheckConfig {
  timeInterval?: number;
  limit?: number;
  enable?: boolean;
}

export class GeographicalDistributionList {
  city?: string;
  size?: number;
  point?: number[];
}

export class Group {
  _id?: string;
  name?: string;
  descriptions?: string;
  client?: string;
  permissions?: string;
  createdAt?: string;
}

export class Invitation {
  client: string;
  phone?: string;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export class InvitationCode {
  _id?: string;
  user?: string;
  client?: string;
  code?: string;
  createdAt?: string;
}

export class InvitationState {
  client: string;
  enablePhone?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export class IsAppAuthorizedByUser {
  authorized?: boolean;
}

export class IsReservedDomain {
  domainValue?: string;
  isReserved?: boolean;
}

export class JwtDecodedData {
  data?: JwtPayloadData;
  status?: CommonMessage;
  iat?: string;
  exp?: number;
}

export class JWTDecodedDataCheckLogin {
  message?: string;
  code?: number;
  status?: boolean;
  token?: TokenWholeInfo;
}

export class JwtPayloadData {
  email?: string;
  id?: string;
  clientId?: string;
  unionid?: string;
}

export class LDAPServerList {
  list?: LDAPSingleServer[];
  totalCount?: number;
}

export class LDAPServerTesterType {
  result?: boolean;
}

export class LDAPSingleServer {
  _id?: string;
  name?: string;
  clientId?: string;
  userId?: string;
  ldapLink?: string;
  baseDN?: string;
  searchStandard?: string;
  emailPostfix?: string;
  username?: string;
  password?: string;
  description?: string;
  enabled?: boolean;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export class LDAPUserTesterType {
  result?: boolean;
}

export class LoginFailCheckConfig {
  timeInterval?: number;
  limit?: number;
  enable?: boolean;
}

export class LoginHotDotPicData {
  list?: undefined[];
}

export class LoginTopEmailList {
  domain?: string;
  count?: number;
}

export class MFA {
  _id?: string;
  userId?: string;
  userPoolId?: string;
  enable?: boolean;
  shareKey?: string;
}

export abstract class IMutation {
  abstract SendEmail(receivers: string[], subject: string, client: string, user?: string, testAvailable?: boolean, providerName?: string, content?: string, sender?: string, meta_data?: string, secret?: string): EmailSentList | Promise<EmailSentList>;

  abstract AddEmailProvider(options?: EmailProviderListInput): EmailProviderList | Promise<EmailProviderList>;

  abstract RemoveEmailProvider(_ids: string[]): EmailProviderList[] | Promise<EmailProviderList[]>;

  abstract UpdateEmailProvider(options?: EmailProviderListInput): EmailProviderList | Promise<EmailProviderList>;

  abstract SaveEmailProviderWithClient(options?: EmailProviderWithClientAddInput): EmailProviderWithClientList | Promise<EmailProviderWithClientList>;

  abstract UpdateEmailTemplateWithClient(options: EmailTemplateWithClientInput): EmailProviderWithClientList | Promise<EmailProviderWithClientList>;

  abstract SendEmailByType(user: string, type: string, client: string, receivers: string[], meta_data?: string): EmailSentList | Promise<EmailSentList>;

  abstract UseDefaultEmailProvider(user: string, client: string): boolean | Promise<boolean>;

  abstract UpdateEmailTemplate(options: EmailTemplateInput): EmailTemplate | Promise<EmailTemplate>;

  abstract AddOAuthList(options?: OAuthListUpdateInput, fields?: OAuthListFieldsFormUpdateInput[]): OAuthList | Promise<OAuthList>;

  abstract RemoveOAuthList(ids?: string[]): string[] | Promise<string[]>;

  abstract RemoveOAuthProvider(appId: string, clientId: string): OAuthProviderClient | Promise<OAuthProviderClient>;

  abstract UpdateOAuthList(options?: OAuthListUpdateInput, fields?: OAuthListFieldsFormUpdateInput[]): OAuthList | Promise<OAuthList>;

  abstract UpdateApplicationOAuth(client?: string, oauth?: string, user?: string, alias?: string, fields?: OAuthListFieldsFormUpdateInput[]): OAuthList | Promise<OAuthList>;

  abstract SetApplicationOAuthEnableOrDisable(client?: string, oauth?: string, user?: string, enabled?: boolean): OAuthList | Promise<OAuthList>;

  abstract CreateOAuthProvider(name: string, domain: string, redirectUris: string[], grants: string[], clientId?: string, image?: string, description?: string, homepageURL?: string, casExpire?: number): OAuthProviderClient | Promise<OAuthProviderClient>;

  abstract UpdateOAuthProvider(appId: string, domain?: string, name?: string, image?: string, redirectUris?: string[], grants?: string[], description?: string, homepageURL?: string, css?: string, casExpire?: number): OAuthProviderClient | Promise<OAuthProviderClient>;

  abstract CreateOIDCApp(name: string, domain: string, redirect_uris: string[], grant_types: string[], response_types: string[], clientId?: string, client_id?: string, token_endpoint_auth_method?: string, image?: string, isDefault?: boolean, id_token_signed_response_alg?: string, id_token_encrypted_response_alg?: string, id_token_encrypted_response_enc?: string, userinfo_signed_response_alg?: string, userinfo_encrypted_response_alg?: string, userinfo_encrypted_response_enc?: string, request_object_signing_alg?: string, request_object_encryption_alg?: string, request_object_encryption_enc?: string, jwks_uri?: string, _jwks_uri?: string, jwks?: string, _jwks?: string, custom_jwks?: string, description?: string, homepageURL?: string, authorization_code_expire?: string, id_token_expire?: string, access_token_expire?: string, cas_expire?: string, customStyles?: OIDCProviderCustomStylesInput): OIDCProviderClient | Promise<OIDCProviderClient>;

  abstract UpdateOIDCApp(appId: string, domain?: string, name?: string, image?: string, redirect_uris?: string[], token_endpoint_auth_method?: string, grant_types?: string[], response_types?: string[], id_token_signed_response_alg?: string, id_token_encrypted_response_alg?: string, id_token_encrypted_response_enc?: string, userinfo_signed_response_alg?: string, userinfo_encrypted_response_alg?: string, userinfo_encrypted_response_enc?: string, request_object_signing_alg?: string, request_object_encryption_alg?: string, request_object_encryption_enc?: string, jwks_uri?: string, _jwks_uri?: string, custom_jwks?: string, jwks?: string, _jwks?: string, description?: string, homepageURL?: string, css?: string, authorization_code_expire?: string, id_token_expire?: string, access_token_expire?: string, cas_expire?: string, customStyles?: OIDCProviderCustomStylesInput): OIDCProviderClient | Promise<OIDCProviderClient>;

  abstract RemoveOIDCApp(appId: string, clientId: string): OIDCProviderClient | Promise<OIDCProviderClient>;

  abstract CreateSAMLServiceProvider(name: string, domain: string, clientId: string, redirectUrl: string, description?: string, SPMetadata?: string, IdPMetadata?: string, image?: string, mappings?: AssertionMapInputType, defaultIdPMapId?: string): SAMLServiceProviderClient | Promise<SAMLServiceProviderClient>;

  abstract UpdateSAMLServiceProvider(appId: string, name: string, domain: string, clientId: string, redirectUrl: string, loginUrl: string, logoutUrl: string, nameId: string, IdPEntityID?: string, assertionConsumeService?: AssertionConsumeServiceInputType[], image?: string, mappings?: AssertionMapInputType, defaultIdPMapId?: string, description?: string, SPMetadata?: string, IdPMetadata?: string, enableSignRes?: boolean, resSignPublicKey?: string, hasResEncrypted?: boolean, resEncryptAlgorithm?: string, resAbstractAlgorithm?: string, resDecryptPrivateKey?: string, resDecryptPrivateKeyPass?: string, resEncryptPublicKey?: string, enableSignReq?: boolean, reqSignAlgorithm?: string, reqAbstractAlgorithm?: string, reqSignPrivateKey?: string, reqSignPrivateKeyPass?: string, reqSignPublicKey?: string): SAMLServiceProviderClient | Promise<SAMLServiceProviderClient>;

  abstract RemoveSAMLServiceProvider(appId: string, clientId: string): SAMLServiceProviderClient | Promise<SAMLServiceProviderClient>;

  abstract EnableSAMLServiceProvider(appId: string, clientId: string, enabled?: boolean): SAMLServiceProviderClient | Promise<SAMLServiceProviderClient>;

  abstract CreateSAMLIdentityProvider(name: string, domain: string, clientId: string, image?: string, description?: string, SPMetadata?: string, IdPMetadata?: string): SAMLIdentityProviderClient | Promise<SAMLIdentityProviderClient>;

  abstract UpdateSAMLIdentityProvider(appId: string, clientId: string, domain?: string, image?: string, name?: string, description?: string, SPMetadata?: string, attributeNameFormat?: string, customAttributes?: string, emailDomainTransformation?: string, authnContextClassRef?: string, IdPMetadata?: string, assertionConsumerUrl?: string, bindings?: string[], nameIds?: string[], attributes?: string[], enableSignRes?: boolean, resSignAlgorithm?: string, resAbstractAlgorithm?: string, resSignPublicKey?: string, resSignPrivateKey?: string, resSignPrivateKeyPass?: string, enableSignReq?: boolean, reqSignPublicKey?: string, enableEncryptRes?: boolean, resEncryptPublicKey?: string, css?: string): SAMLIdentityProviderClient | Promise<SAMLIdentityProviderClient>;

  abstract RemoveSAMLIdentityProvider(appId: string, clientId: string): SAMLIdentityProviderClient | Promise<SAMLIdentityProviderClient>;

  abstract EnableSAMLIdentityProvider(appId: string, clientId: string, enabled?: boolean): SAMLIdentityProviderClient | Promise<SAMLIdentityProviderClient>;

  abstract CreateDefaultSAMLIdentityProviderSettings(name: string, image?: string, description?: string, mappings?: AssertionMapInputType): SAMLDefaultIdentityProviderSettings | Promise<SAMLDefaultIdentityProviderSettings>;

  abstract AddLDAPServer(name: string, clientId: string, userId: string, ldapLink: string, baseDN: string, searchStandard: string, username: string, password: string, emailPostfix?: string, description?: string, enabled?: boolean): LDAPSingleServer | Promise<LDAPSingleServer>;

  abstract UpdateLDAPServer(ldapId: string, name: string, clientId: string, userId: string, ldapLink: string, baseDN: string, username: string, searchStandard: string, password: string, emailPostfix?: string, description?: string, enabled?: boolean): LDAPSingleServer | Promise<LDAPSingleServer>;

  abstract RemoveLDAPServer(ldapId: string, clientId: string): LDAPSingleServer | Promise<LDAPSingleServer>;

  abstract LoginByLDAP(username: string, password: string, clientId: string, browser?: string): User | Promise<User>;

  abstract ClearAvatarSrc(client?: string, oauth?: string, user?: string): OAuthList | Promise<OAuthList>;

  abstract RevokeUserAuthorizedApp(appId?: string, userPoolId?: string, userId?: string): UserAuthorizedApp | Promise<UserAuthorizedApp>;

  abstract UpdateSystemPricing(options?: PricingFieldsInput): PricingList | Promise<PricingList>;

  abstract AddSystemPricing(options?: PricingFieldsInput): PricingList | Promise<PricingList>;

  abstract order(options: OrderAddInput): OrderSuccess | Promise<OrderSuccess>;

  abstract ContinuePay(order: string): OrderSuccess | Promise<OrderSuccess>;

  abstract IncClientFlowNumber(user?: string, userInvitied?: string, client?: string, number?: number): OrderSuccess | Promise<OrderSuccess>;

  abstract register(userInfo: UserRegisterInput, invitationCode?: string, keepPassword?: boolean): ExtendUser | Promise<ExtendUser>;

  abstract createUser(userInfo: UserRegisterInput, invitationCode?: string, keepPassword?: boolean): ExtendUser | Promise<ExtendUser>;

  abstract login(registerInClient: string, phone?: string, phoneCode?: number, unionid?: string, openid?: string, username?: string, email?: string, password?: string, lastIP?: string, verifyCode?: string, MFACode?: string, fromRegister?: boolean, device?: string, browser?: string): ExtendUser | Promise<ExtendUser>;

  abstract updateUser(options: UserUpdateInput): User | Promise<User>;

  abstract removeUsers(ids?: string[], registerInClient?: string, operator?: string): User[] | Promise<User[]>;

  abstract newClient(client: NewUserClientInput): UserClient | Promise<UserClient>;

  abstract removeUserClients(ids?: string[]): UserClient[] | Promise<UserClient[]>;

  abstract updateUserClient(client: UpdateUserClientInput): UserClient | Promise<UserClient>;

  abstract changePassword(password: string, email: string, client: string, verifyCode: string): ExtendUser | Promise<ExtendUser>;

  abstract sendResetPasswordEmail(client: string, email: string): CommonMessage | Promise<CommonMessage>;

  abstract verifyResetPasswordVerifyCode(verifyCode: string, email: string, client: string): CommonMessage | Promise<CommonMessage>;

  abstract sendVerifyEmail(email: string, client: string, token?: string): CommonMessage | Promise<CommonMessage>;

  abstract generateInvitationCode(user: string, client: string): InvitationCode | Promise<InvitationCode>;

  abstract refreshAppSecret(client: UpdateUserClientInput): UserClient | Promise<UserClient>;

  abstract updateSuperAdminUser(options: SuperAdminUpdateInput): UsersInGroupListItem | Promise<UsersInGroupListItem>;

  abstract addSuperAdminUser(options: SuperAdminUpdateInput): UsersInGroupListItem | Promise<UsersInGroupListItem>;

  abstract removeSuperAdminUser(_id: string, username: string): UsersInGroupListItem | Promise<UsersInGroupListItem>;

  abstract recordRequest(when: string, ip: string, responseTime: number, size: number, from?: string): CommonMessage | Promise<CommonMessage>;

  abstract bindOtherOAuth(type: string, unionid: string, userInfo: string, client?: string, user?: string): UserOAuthBind | Promise<UserOAuthBind>;

  abstract unbindOtherOAuth(type: string, client?: string, user?: string): UserOAuthBind | Promise<UserOAuthBind>;

  abstract unbindEmail(user?: string, client?: string): User | Promise<User>;

  abstract oauthPasswordLogin(registerInClient: string, phone?: string, unionid?: string, email?: string, password?: string, lastIP?: string, verifyCode?: string): ExtendUser | Promise<ExtendUser>;

  abstract createRole(client: string, name: string, descriptions?: string): Group | Promise<Group>;

  abstract updateRole(_id: string, client: string, name: string, descriptions?: string, permissions?: string): Group | Promise<Group>;

  abstract updatePermissions(role: string, client: string, permissions?: string): Group | Promise<Group>;

  abstract assignUserToRole(client: string, user: string, group: string): PagedUserGroup | Promise<PagedUserGroup>;

  abstract removeUserFromGroup(client: string, user: string, group: string): UserGroup | Promise<UserGroup>;

  abstract addClientWebhook(client: string, events: string[], url: string, contentType: string, enable: boolean, secret?: string, isLastTimeSuccess?: boolean): ClientWebhook | Promise<ClientWebhook>;

  abstract updateClientWebhook(id: string, events: string[], url: string, contentType: string, enable: boolean, secret?: string, isLastTimeSuccess?: boolean): ClientWebhook | Promise<ClientWebhook>;

  abstract deleteClientWebhook(id: string): ClientWebhook | Promise<ClientWebhook>;

  abstract SendWebhookTest(id: string): boolean | Promise<boolean>;

  abstract refreshToken(client: string, user: string): RefreshToken | Promise<RefreshToken>;

  abstract addCollaborator(userPoolId: string, collaboratorUserId: string, permissionDescriptors: PermissionDescriptorsInputType[]): Collaboration | Promise<Collaboration>;

  abstract removeCollaborator(collaborationId: string): Collaboration | Promise<Collaboration>;

  abstract updateCollaborator(collaborationId: string, permissionDescriptors: PermissionDescriptorsInputType[]): Collaboration | Promise<Collaboration>;

  abstract addPermission(name: string, description?: string): Permission | Promise<Permission>;

  abstract updatePasswordStrengthSettingsByUserPoolId(userPoolId: string, pwdStrength?: number): PasswordStrengthSettings | Promise<PasswordStrengthSettings>;

  abstract resetUserPoolFromWechat(client: string, registerMethod: string, limit: number): PagedUsers | Promise<PagedUsers>;

  abstract encryptPassword(password: string, client: string, isTest?: boolean): EncryptPassword | Promise<EncryptPassword>;

  abstract enablePasswordFaas(client: string, enable: boolean): PaaswordFaas | Promise<PaaswordFaas>;

  abstract addToInvitation(client: string, phone?: string): Invitation | Promise<Invitation>;

  abstract removeFromInvitation(client: string, phone?: string): Invitation | Promise<Invitation>;

  abstract setInvitationState(client: string, enablePhone?: boolean): InvitationState | Promise<InvitationState>;

  abstract changeMFA(enable: boolean, userId?: string, userPoolId?: string, _id?: string, refreshKey?: boolean): MFA | Promise<MFA>;

  abstract createCustomMFA(userIdInMiniLogin: string, userPoolId: string, name: string, secret: string, remark?: string): CustomMFA | Promise<CustomMFA>;

  abstract removeCustomMFA(_id: string): CustomMFA | Promise<CustomMFA>;

  abstract recordAuthAudit(userPoolId: string, appType: string, appId: string, userId: string, event: string, message?: string): CommonMessage | Promise<CommonMessage>;

  abstract refreshThirdPartyToken(userPoolId: string, userId: string): RefreshThirdPartyIdentityResult | Promise<RefreshThirdPartyIdentityResult>;

  abstract signIn(oidcAppId: string, email?: string, password?: string, phone?: string, unionid?: string, username?: string): OidcPasswordModeUserInfo | Promise<OidcPasswordModeUserInfo>;

  abstract createRBACPermission(input: CreateRBACPermissionInput): RBACPermission | Promise<RBACPermission>;

  abstract updateRBACPermission(input: UpdateRBACPermissionInput): RBACPermission | Promise<RBACPermission>;

  abstract deleteRBACPermission(_id: string): CommonMessage | Promise<CommonMessage>;

  abstract deleteRBACPermissionBatch(idList: string[]): CommonMessage | Promise<CommonMessage>;

  abstract createRBACRole(input: CreateRBACRoleInput): RBACRole | Promise<RBACRole>;

  abstract updateRBACRole(input: UpdateRBACRoleInput): RBACRole | Promise<RBACRole>;

  abstract deleteRBACRole(_id: string): CommonMessage | Promise<CommonMessage>;

  abstract deleteRBACRoleBatch(idList: string[]): CommonMessage | Promise<CommonMessage>;

  abstract createRBACGroup(input: CreateRBACGroupInput): RBACGroup | Promise<RBACGroup>;

  abstract updateRBACGroup(input: UpdateRBACGroupInput): RBACGroup | Promise<RBACGroup>;

  abstract deleteRBACGroup(_id: string): CommonMessage | Promise<CommonMessage>;

  abstract deleteRBACGroupBatch(idList: string[]): CommonMessage | Promise<CommonMessage>;

  abstract assignRBACRoleToUser(input: AssignUserToRBACRoleInput): RBACRole | Promise<RBACRole>;

  abstract assignRBACRoleToUserBatch(input: AssignUserToRBACRoleBatchInput): RBACRole | Promise<RBACRole>;

  abstract revokeRBACRoleFromUser(input: RevokeRBACRoleFromUserInput): RBACRole | Promise<RBACRole>;

  abstract revokeRBACRoleFromUserBatch(input: RevokeRBACRoleFromUserBatchInput): RBACRole | Promise<RBACRole>;

  abstract addPermissionToRBACRole(input: AddPermissionToRBACRoleInput): RBACRole | Promise<RBACRole>;

  abstract addPermissionToRBACRoleBatch(input?: AddPermissionToRBACRoleBatchInput): RBACRole | Promise<RBACRole>;

  abstract removePermissionFromRBACRole(input: RemovePermissionFromRBACRoleInput): RBACRole | Promise<RBACRole>;

  abstract removePermissionFromRBACRoleBatch(input: RemovePermissionFromRBACRoleBatchInput): RBACRole | Promise<RBACRole>;

  abstract addRoleToRBACGroup(input: AddRoleToRBACGroupInput): RBACGroup | Promise<RBACGroup>;

  abstract addRoleToRBACGroupBatch(input: AddRoleToRBACGroupBatchInput): RBACGroup | Promise<RBACGroup>;

  abstract removeRoleFromRBACGroup(input: RemoveRoleFromRBACGroupInput): RBACGroup | Promise<RBACGroup>;

  abstract removeRoleFromRBACGroupBatch(input: RemoveRoleFromRBACGroupBatchInput): RBACGroup | Promise<RBACGroup>;

  abstract addUserToRBACGroup(input: AddUserToRBACGroupInput): RBACGroup | Promise<RBACGroup>;

  abstract addUserToRBACGroupBatch(input: AddUserToRBACGroupBatchInput): RBACGroup | Promise<RBACGroup>;

  abstract removeUserFromRBACGroup(input: RemoveUserFromRBACGroupInput): RBACGroup | Promise<RBACGroup>;

  abstract removeUserFromRBACGroupBatch(input: RemoveUserFromRBACGroupBatchInput): RBACGroup | Promise<RBACGroup>;

  abstract createOrg(input: CreateOrgInput): Org | Promise<Org>;

  abstract deleteOrg(_id: string): CommonMessage | Promise<CommonMessage>;

  abstract addOrgNode(input: AddOrgNodeInput): Org | Promise<Org>;

  abstract removeOrgNode(input: RemoveOrgNodeInput): Org | Promise<Org>;

  abstract createRule(input: CreateRuleInput): Rule | Promise<Rule>;

  abstract updateRule(input: UpdateRuleInput): Rule | Promise<Rule>;

  abstract deleteRule(_id: string): CommonMessage | Promise<CommonMessage>;

  abstract setRuleEnv(input: SetRuleEnvInput): PagedRuleEnvVariable | Promise<PagedRuleEnvVariable>;

  abstract removeRuleEnv(input: RemoveRuleEnvInput): PagedRuleEnvVariable | Promise<PagedRuleEnvVariable>;

  abstract updateRuleOrder(input: UpdateRuleOrderInput): CommonMessage | Promise<CommonMessage>;

  abstract updatePhone(userPoolId: string, phone: string, phoneCode: string, oldPhone?: string, oldPhoneCode?: string): User | Promise<User>;

  abstract updateEmail(userPoolId: string, email: string, emailCode: string, oldEmail?: string, oldEmailCode?: string): User | Promise<User>;

  abstract sendChangeEmailVerifyCode(userPoolId: string, email: string): CommonMessage | Promise<CommonMessage>;

  abstract setUserMetadata(input: SetUserMetadataInput): UserMetaDataList | Promise<UserMetaDataList>;

  abstract removeUserMetadata(input: RemoveUserMetadataInput): UserMetaDataList | Promise<UserMetaDataList>;
}

export class NotBindOAuth {
  type?: string;
  oAuthUrl?: string;
  image?: string;
  name?: string;
  binded?: boolean;
}

export class OAuthAppPagedList {
  totalCount?: number;
  list?: OAuthProviderClient[];
}

export class OAuthList {
  _id?: string;
  name?: string;
  alias?: string;
  image?: string;
  description?: string;
  enabled?: boolean;
  url?: string;
  client?: string;
  user?: string;
  oAuthUrl?: string;
  wxappLogo?: string;
  fields?: OAuthListFieldsForm[];
  oauth?: ChildrenOAuthList;
}

export class OAuthListFieldsForm {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  children?: OAuthListFieldsFormRecursion[];
  checked?: string[];
}

export class OAuthListFieldsFormRecursion {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  children?: OAuthListFieldsFormRecursion[];
}

export class OAuthProviderClient {
  _id?: string;
  name?: string;
  domain?: string;
  image?: string;
  redirectUris?: string[];
  appSecret?: string;
  client_id?: string;
  clientId?: string;
  grants?: string[];
  description?: string;
  homepageURL?: string;
  isDeleted?: boolean;
  when?: string;
  css?: string;
  loginUrl?: string;
  casExpire?: number;
}

export class OIDCAppPagedList {
  totalCount?: number;
  list?: OIDCProviderClient[];
}

export class OidcPasswordModeUserInfo {
  sub?: string;
  birthdate?: string;
  family_name?: string;
  gender?: string;
  given_name?: string;
  locale?: string;
  middle_name?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  preferred_username?: string;
  profile?: string;
  updated_at?: string;
  website?: string;
  zoneinfo?: string;
  username?: string;
  _id?: string;
  company?: string;
  browser?: string;
  device?: string;
  logins_count?: number;
  register_method?: string;
  blocked?: boolean;
  last_ip?: string;
  register_in_userpool?: string;
  last_login?: string;
  signed_up?: string;
  email?: string;
  email_verified?: boolean;
  phone_number?: string;
  phone_number_verified?: boolean;
  token?: string;
  access_token?: string;
  id_token?: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
  scope?: string;
}

export class OIDCProviderClient {
  _id?: string;
  name?: string;
  domain?: string;
  image?: string;
  redirect_uris?: string[];
  client_id?: string;
  client_secret?: string;
  token_endpoint_auth_method?: string;
  id_token_signed_response_alg?: string;
  id_token_encrypted_response_alg?: string;
  id_token_encrypted_response_enc?: string;
  userinfo_signed_response_alg?: string;
  userinfo_encrypted_response_alg?: string;
  userinfo_encrypted_response_enc?: string;
  request_object_signing_alg?: string;
  request_object_encryption_alg?: string;
  request_object_encryption_enc?: string;
  jwks_uri?: string;
  _jwks_uri?: string;
  custom_jwks?: string;
  jwks?: string;
  _jwks?: string;
  clientId?: string;
  grant_types?: string[];
  response_types?: string[];
  description?: string;
  homepageURL?: string;
  isDeleted?: boolean;
  isDefault?: boolean;
  when?: string;
  css?: string;
  authorization_code_expire?: string;
  id_token_expire?: string;
  access_token_expire?: string;
  cas_expire?: string;
  loginUrl?: string;
  customStyles?: OIDCProviderCustomStyles;
}

export class OIDCProviderCustomStyles {
  forceLogin?: boolean;
  hideQRCode?: boolean;
  hideUP?: boolean;
  hideUsername?: boolean;
  hideRegister?: boolean;
  hidePhone?: boolean;
  hideSocial?: boolean;
  hideClose?: boolean;
  placeholder?: OIDCProviderCustomStylesPlaceholder;
  qrcodeScanning?: OIDCProviderCustomStylesQrcodeScanning;
}

export class OIDCProviderCustomStylesPlaceholder {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  verfiyCode?: string;
  newPassword?: string;
  phone?: string;
  phoneCode?: string;
}

export class OIDCProviderCustomStylesQrcodeScanning {
  redirect?: boolean;
  interval?: number;
  tips?: string;
}

export class OperationLog {
  operatorId?: string;
  operatorName?: string;
  operatorAvatar?: string;
  isAdmin?: boolean;
  isCollaborator?: boolean;
  isOwner?: boolean;
  operationType?: string;
  updatedFields?: string;
  removedFields?: string[];
  operateAt?: string;
  fullDocument?: string;
  coll?: string;
}

export class OperationLogsList {
  totalCount?: number;
  list?: OperationLog[];
}

export class OrderClient {
  _id?: string;
  name?: string;
  secret?: string;
  descriptions?: string;
  jwtExpired?: number;
  createdAt?: string;
  isDeleted?: boolean;
}

export class OrderList {
  _id?: string;
  client?: string;
  user?: string;
  timeOfPurchase?: number;
  flowNumber?: number;
  price?: number;
  pricing?: OrderPricing;
  createdAt?: string;
  completed?: boolean;
  payMethod?: string;
  endAt?: string;
  clientInfo?: OrderClient;
}

export class OrderPricing {
  _id?: string;
  type?: string;
  startNumber?: number;
  freeNumber?: number;
  startPrice?: number;
  maxNumber?: number;
  d?: number;
  features?: string[];
}

export class OrderSuccess {
  code?: number;
  url?: string;
  charge?: string;
}

export class Org {
  _id: string;
  nodes: OrgNode[];
}

export class OrgChildNode {
  group: RBACGroup;
  depth: number;
}

export class OrgNode {
  _id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  children: string[];
  root?: boolean;
}

export class PaaswordFaas {
  encryptUrl?: string;
  decryptUrl?: string;
  user?: string;
  client?: string;
  logs?: string;
  enable?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export class PagedCustomMFAList {
  list?: CustomMFA[];
  total?: number;
}

export class PagedOrders {
  list?: OrderList[];
  totalCount: number;
}

export class PagedOrg {
  totalCount: number;
  list: Org[];
}

export class PagedRBACGroup {
  totalCount?: number;
  list: RBACGroup[];
}

export class PagedRBACPermission {
  totalCount?: number;
  list: RBACPermission[];
}

export class PagedRBACRole {
  totalCount?: number;
  list: RBACRole[];
}

export class PagedRequestList {
  totalCount?: number;
  list?: Request[];
}

export class PagedRoles {
  list?: Group[];
  totalCount: number;
}

export class PagedRuleEnvVariable {
  totalCount: number;
  list: RuleEnvVariable[];
}

export class PagedRules {
  totalCount: number;
  list: Rule[];
}

export class PagedUserClientList {
  list?: PagedUserClientListItem[];
  totalCount: number;
}

export class PagedUserClientListItem {
  _id?: string;
  name?: string;
  createdAt?: string;
  usersCount?: number;
  user?: UserBrief;
}

export class PagedUserClients {
  list?: UserClient[];
  totalCount: number;
}

export class PagedUserGroup {
  list?: UserGroup[];
  totalCount: number;
}

export class PagedUserLoginHistory {
  list?: UserLoginHistory[];
  totalCount: number;
}

export class PagedUserPoolWithMFA {
  list?: UserPoolWithMFA[];
  total?: number;
}

export class PagedUsers {
  list?: ExtendUser[];
  totalCount?: number;
}

export class PasswordStrengthSettings {
  userPoolId?: string;
  pwdStrength?: number;
}

export class PatchExtendUser {
  list?: ExtendUser[];
  totalCount: number;
}

export class Permission {
  _id?: string;
  name?: string;
  affect?: string;
  description?: string;
}

export class PermissionDescriptors {
  permissionId?: string;
  name?: string;
  operationAllow?: number;
}

export class PermissionList {
  list?: Permission[];
  totalCount?: number;
}

export class PopulatedEmailSentList {
  _id?: string;
  subject?: string;
  content?: string;
  sender?: string;
  receivers?: string[];
  createdAt?: string;
  client?: Client;
}

export class PricingList {
  _id?: string;
  type?: string;
  startNumber?: number;
  freeNumber?: number;
  startPrice?: number;
  maxNumber?: number;
  d?: number;
  features?: string[];
}

export class QpsByTime {
  qps?: number;
  time?: string;
}

export class QrcodeLoginStrategy {
  qrcodeExpiresAfter?: number;
  returnFullUserInfo?: boolean;
  allowExchangeUserInfoFromBrowser?: boolean;
  ticketExpiresAfter?: number;
}

export abstract class IQuery {
  abstract ReadEmailSentList(page?: number, count?: number, sortBy?: string): Email | Promise<Email>;

  abstract ReadEmailSentListByClient(client: string, page?: number, count?: number): EmailListPaged | Promise<EmailListPaged>;

  abstract ReadEmailProvider(clientId?: string): EmailProviderList[] | Promise<EmailProviderList[]>;

  abstract ReadEmailProviderByClientAndName(clientId?: string): EmailProviderWithClientList[] | Promise<EmailProviderWithClientList[]>;

  abstract ReadEmailTemplatesByClient(clientId: string): EmailTemplateWithClient[] | Promise<EmailTemplateWithClient[]>;

  abstract ReadEmailProviderWithClient(): EmailProviderWithClientList[] | Promise<EmailProviderWithClientList[]>;

  abstract ReadEmailTemplateByClientAndType(type: string, client: string): EmailTemplate | Promise<EmailTemplate>;

  abstract PreviewEmailByType(type: string, client: string, meta_data?: string): string | Promise<string>;

  abstract ReadEmailTemplatesBySystem(): EmailTemplateWithClient[] | Promise<EmailTemplateWithClient[]>;

  abstract ReadOauthList(clientId?: string, dontGetURL?: boolean, useGuard?: boolean): OAuthList[] | Promise<OAuthList[]>;

  abstract ReadSAMLSPList(clientId: string): SAMLSPListItem[] | Promise<SAMLSPListItem[]>;

  abstract userOAuthCount(userIds?: string[]): number[] | Promise<number[]>;

  abstract wxQRCodeLog(page?: number, count?: number, clientId?: string, sortBy?: string): WxQRCodeLog | Promise<WxQRCodeLog>;

  abstract querySystemOAuthSetting(): OAuthList[] | Promise<OAuthList[]>;

  abstract notBindOAuthList(client?: string, user?: string): NotBindOAuth[] | Promise<NotBindOAuth[]>;

  abstract QueryClientIdByAppId(appId?: string): OAuthProviderClient | Promise<OAuthProviderClient>;

  abstract getOAuthedAppInfo(appId: string): OAuthProviderClient | Promise<OAuthProviderClient>;

  abstract getOAuthedAppList(clientId?: string, page?: number, count?: number): OAuthAppPagedList | Promise<OAuthAppPagedList>;

  abstract GetOIDCAppInfo(appId: string): OIDCProviderClient | Promise<OIDCProviderClient>;

  abstract GetOIDCAppList(clientId?: string, page?: number, count?: number): OIDCAppPagedList | Promise<OIDCAppPagedList>;

  abstract QueryAppInfoByAppID(appId?: string, responseType?: string, redirectUrl?: string): OAuthProviderClient | Promise<OAuthProviderClient>;

  abstract QueryAppInfoByDomain(domain?: string): OAuthProviderClient | Promise<OAuthProviderClient>;

  abstract QueryOIDCAppInfoByDomain(domain?: string): OIDCProviderClient | Promise<OIDCProviderClient>;

  abstract QueryOIDCAppInfoByAppID(appId?: string, responseType?: string, redirectUrl?: string): OIDCProviderClient | Promise<OIDCProviderClient>;

  abstract QuerySAMLServiceProviderInfoByAppID(appId: string): SAMLServiceProviderClient | Promise<SAMLServiceProviderClient>;

  abstract QuerySAMLServiceProviderInfoByDomain(domain: string): SAMLServiceProviderClient | Promise<SAMLServiceProviderClient>;

  abstract QuerySAMLIdentityProviderInfoByAppID(appId?: string): SAMLIdentityProviderClient | Promise<SAMLIdentityProviderClient>;

  abstract QuerySAMLIdentityProviderInfoByDomain(domain?: string): SAMLIdentityProviderClient | Promise<SAMLIdentityProviderClient>;

  abstract QueryDefaultSAMLIdentityProviderSettingsList(page?: number, count?: number): SAMLDefaultIdentityProviderSettingsList | Promise<SAMLDefaultIdentityProviderSettingsList>;

  abstract GetSAMLServiceProviderList(clientId?: string, page?: number, count?: number): SAMLServiceProviderAppPagedList | Promise<SAMLServiceProviderAppPagedList>;

  abstract GetSAMLServiceProviderInfo(appId: string): SAMLServiceProviderClient | Promise<SAMLServiceProviderClient>;

  abstract GetSAMLIdentityProviderInfo(appId: string): SAMLIdentityProviderClient | Promise<SAMLIdentityProviderClient>;

  abstract GetSAMLIdentityProviderList(clientId?: string, page?: number, count?: number): SAMLIdentityProviderAppPagedList | Promise<SAMLIdentityProviderAppPagedList>;

  abstract QueryLDAPServerList(clientId: string, page?: number, count?: number): LDAPServerList | Promise<LDAPServerList>;

  abstract TestLDAPServer(name: string, clientId: string, userId: string, ldapLink: string, baseDN: string, searchStandard: string, username: string, password: string, emailPostfix?: string, description?: string, enabled?: boolean): LDAPServerTesterType | Promise<LDAPServerTesterType>;

  abstract TestLDAPUser(testUsername: string, testPassword: string, name: string, clientId: string, userId: string, ldapLink: string, baseDN: string, searchStandard: string, username: string, password: string, emailPostfix?: string, description?: string, enabled?: boolean): LDAPUserTesterType | Promise<LDAPUserTesterType>;

  abstract QueryClientHasLDAPConfigs(clientId?: string): ClientHasLDAPConfigs | Promise<ClientHasLDAPConfigs>;

  abstract GetUserAuthorizedApps(clientId?: string, userId?: string, page?: number, count?: number): UserAuthorizedAppPagedList | Promise<UserAuthorizedAppPagedList>;

  abstract isAppAuthorizedByUser(userId?: string, appId?: string): IsAppAuthorizedByUser | Promise<IsAppAuthorizedByUser>;

  abstract checkIsReservedDomain(domainValue: string): IsReservedDomain | Promise<IsReservedDomain>;

  abstract ReadSystemPricing(): PricingList[] | Promise<PricingList[]>;

  abstract ReadOrders(user?: string, page?: number, count?: number): PagedOrders | Promise<PagedOrders>;

  abstract ReadUserPricing(userId?: string, clientId?: string): UserPricingType | Promise<UserPricingType>;

  abstract users(registerInClient?: string, page?: number, count?: number, populate?: boolean): PagedUsers | Promise<PagedUsers>;

  abstract user(id?: string, registerInClient?: string, token?: string, auth?: boolean, userLoginHistoryPage?: number, userLoginHistoryCount?: number): ExtendUser | Promise<ExtendUser>;

  abstract userAnalytics(clientId?: string): UserAnalytics | Promise<UserAnalytics>;

  abstract isLoginExpired(id: string): boolean | Promise<boolean>;

  abstract client(id: string, userId: string, fromAdmin?: boolean): UserClient | Promise<UserClient>;

  abstract userClients(userId: string, page?: number, count?: number, computeUsersCount?: boolean): PagedUserClients | Promise<PagedUserClients>;

  abstract searchUser(type: string, value: string, registerInClient: string, page?: number, count?: number): PagedUsers | Promise<PagedUsers>;

  abstract userClientTypes(): UserClientType[] | Promise<UserClientType[]>;

  abstract isClientOfUser(email?: string, password?: string, clientId?: string): boolean | Promise<boolean>;

  abstract getAccessTokenByAppSecret(secret?: string, clientId?: string, retUserId?: boolean, timestamp?: string, signature?: string, nonce?: number): string | Promise<string>;

  abstract loginCount(userId?: string, clientId?: string, month?: string): UserLoginCount | Promise<UserLoginCount>;

  abstract qiNiuUploadToken(type?: string): string | Promise<string>;

  abstract decodeJwtToken(token?: string): JwtDecodedData | Promise<JwtDecodedData>;

  abstract checkLoginStatus(token?: string): JWTDecodedDataCheckLogin | Promise<JWTDecodedDataCheckLogin>;

  abstract getAppSecretByClientId(token?: string, clientId?: string): AppSecretByClientId | Promise<AppSecretByClientId>;

  abstract previewEmailTemplate(type?: string, client?: string): CommonMessage | Promise<CommonMessage>;

  abstract loginHotDotPicData(client?: string): LoginHotDotPicData | Promise<LoginHotDotPicData>;

  abstract registerEveryDayCount(client?: string): RegisterEveryDayCount | Promise<RegisterEveryDayCount>;

  abstract statistic(sortBy?: string, page?: number, count?: number): Statistic | Promise<Statistic>;

  abstract userClientList(page?: number, count?: number, sortBy?: string): PagedUserClientList | Promise<PagedUserClientList>;

  abstract usersInGroup(group?: string, page?: number, count?: number): UsersInGroup | Promise<UsersInGroup>;

  abstract qpsByTime(startTime?: string, endTime?: string, currentTime?: string): QpsByTime[] | Promise<QpsByTime[]>;

  abstract todayGeoDistribution(today?: string): GeographicalDistributionList[] | Promise<GeographicalDistributionList[]>;

  abstract findClientsByIdArray(clientsId?: string[]): PagedUserClientList | Promise<PagedUserClientList>;

  abstract recentServiceCall(today?: string): DayServiceCallListOfAllServices | Promise<DayServiceCallListOfAllServices>;

  abstract platformUserGrowthTrend(today?: string): DayUserGrowth[] | Promise<DayUserGrowth[]>;

  abstract requestList(page?: number, count?: number): PagedRequestList | Promise<PagedRequestList>;

  abstract bindedOAuthList(client: string, user?: string): UserOAuthBind[] | Promise<UserOAuthBind[]>;

  abstract userPatch(ids?: string): PatchExtendUser | Promise<PatchExtendUser>;

  abstract isClientBelongToUser(userId?: string, clientId?: string, permissionDescriptors?: PermissionDescriptorsListInputType[]): boolean | Promise<boolean>;

  abstract queryClient(id: string): UserClient | Promise<UserClient>;

  abstract clientRoles(client: string, page?: number, count?: number): PagedRoles | Promise<PagedRoles>;

  abstract userGroup(group: string, client: string, page?: number, count?: number): PagedUserGroup | Promise<PagedUserGroup>;

  abstract queryRoleByUserId(user: string, client: string): PagedUserGroup | Promise<PagedUserGroup>;

  abstract getClientWhenSdkInit(secret?: string, clientId?: string, retUserId?: boolean, timestamp?: string, signature?: string, nonce?: number): ClientInfoAndAccessToken | Promise<ClientInfoAndAccessToken>;

  abstract getWebhookDetail(client: string): ClientWebhook | Promise<ClientWebhook>;

  abstract getAllWebhooks(client: string): ClientWebhook[] | Promise<ClientWebhook[]>;

  abstract getWebhookLogDetail(id: string): WebhookLog | Promise<WebhookLog>;

  abstract getWebhookLogs(webhook: string): WebhookLog[] | Promise<WebhookLog[]>;

  abstract getWebhookSettingOptions(): WebhookSettingOptions | Promise<WebhookSettingOptions>;

  abstract queryCollaborativeUserPoolByUserId(userId: string, page?: number, count?: number): CollaborativeUserPoolList | Promise<CollaborativeUserPoolList>;

  abstract queryCollaboratorsByUserPoolId(userPoolId: string, count?: number, page?: number): Collaborators | Promise<Collaborators>;

  abstract queryCollaboratorPermissions(userId?: string, collaborationId?: string): CollaboratorPermissions | Promise<CollaboratorPermissions>;

  abstract queryPasswordStrengthSettingsByUserPoolId(userPoolId: string): PasswordStrengthSettings | Promise<PasswordStrengthSettings>;

  abstract queryCollaborationByUserPoolIdAndUserId(userId: string, userPoolId: string): Collaboration | Promise<Collaboration>;

  abstract queryPermissionList(): PermissionList | Promise<PermissionList>;

  abstract searchUserBasicInfoById(userId?: string): BasicUserInfo | Promise<BasicUserInfo>;

  abstract queryPasswordFaasEnabled(client: string): PaaswordFaas | Promise<PaaswordFaas>;

  abstract emailDomainTopNList(userPoolId: string): LoginTopEmailList[] | Promise<LoginTopEmailList[]>;

  abstract registerMethodTopList(userPoolId: string): RegisterMethodList[] | Promise<RegisterMethodList[]>;

  abstract querySMSSendCount(userPoolId: string): SMSCountInfo | Promise<SMSCountInfo>;

  abstract queryInvitation(client: string): Invitation[] | Promise<Invitation[]>;

  abstract queryInvitationState(client: string): InvitationState | Promise<InvitationState>;

  abstract queryMFA(_id?: string, userId?: string, userPoolId?: string): MFA | Promise<MFA>;

  abstract queryAuthorizedUserPool(unionid?: string, phone?: string, openid?: string, page?: number, count?: number): PagedUserPoolWithMFA | Promise<PagedUserPoolWithMFA>;

  abstract getCustomMFA(userIdInMiniLogin: string, page?: number, count?: number): PagedCustomMFAList | Promise<PagedCustomMFAList>;

  abstract validatePassword(userPool: string, password: string, encryptedPassword: string): ValidateResult | Promise<ValidateResult>;

  abstract getUserLoginAreaStatisticOfClient(userPool: string, start?: string, end?: string): string | Promise<string>;

  abstract getUserPoolSettings(userPoolId: string): UserClient | Promise<UserClient>;

  abstract queryAuthAuditRecords(userPoolId: string, sortBy?: string, page?: number, count?: number): AuthAuditRecordsList | Promise<AuthAuditRecordsList>;

  abstract queryUserPoolCommonInfo(userPoolId: string): UserPoolCommonInfo | Promise<UserPoolCommonInfo>;

  abstract rbacRole(_id: string): RBACRole | Promise<RBACRole>;

  abstract rbacRoleList(userPoolId: string, sortBy?: SortByEnum, page?: number, count?: number): PagedRBACRole | Promise<PagedRBACRole>;

  abstract rbacGroup(_id: string): RBACGroup | Promise<RBACGroup>;

  abstract rbacGroupList(userPoolId: string, sortBy?: SortByEnum, page?: number, count?: number): PagedRBACGroup | Promise<PagedRBACGroup>;

  abstract rbacPermission(_id: string): RBACPermission | Promise<RBACPermission>;

  abstract rbacPermissionList(userPoolId: string, sortBy?: SortByEnum, page?: number, count?: number): PagedRBACPermission | Promise<PagedRBACPermission>;

  abstract userPermissionList(_id: string): UserPermissionList | Promise<UserPermissionList>;

  abstract userGroupList(_id: string): UserGroupList | Promise<UserGroupList>;

  abstract userRoleList(_id: string): UserRoleList | Promise<UserRoleList>;

  abstract org(_id: string): Org | Promise<Org>;

  abstract orgs(userPoolId: string): PagedOrg | Promise<PagedOrg>;

  abstract orgRootNode(_id: string): RBACGroup | Promise<RBACGroup>;

  abstract orgChildrenNodes(input: OrgChildrenNodesInput): OrgChildNode[] | Promise<OrgChildNode[]>;

  abstract isRootNodeOfOrg(input: IsRootNodeOfOrgInput): boolean | Promise<boolean>;

  abstract ruleById(_id: string): Rule | Promise<Rule>;

  abstract rules(userPoolId: string): PagedRules | Promise<PagedRules>;

  abstract ruleEnv(userPoolId: string): PagedRuleEnvVariable | Promise<PagedRuleEnvVariable>;

  abstract queryOperationLogs(userPoolId: string, coll: string, page?: number, count?: number): OperationLogsList | Promise<OperationLogsList>;

  abstract userMetadata(_id: string): UserMetaDataList | Promise<UserMetaDataList>;
}

export class RBACGroup {
  _id: string;
  userPoolId: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  roles?: PagedRBACRole;
  permissions?: PagedRBACPermission;
  users?: PagedUsers;
}

export class RBACPermission {
  _id: string;
  name: string;
  userPoolId: string;
  createdAt: string;
  updatedAt: string;
  description?: string;
}

export class RBACRole {
  _id: string;
  userPoolId: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  permissions?: PagedRBACPermission;
  users?: PagedUsers;
}

export class RefreshThirdPartyIdentityResult {
  refreshSuccess?: boolean;
  message?: string;
  provider?: string;
  refreshToken?: string;
  accessToken?: string;
  updatedAt?: string;
}

export class RefreshToken {
  token?: string;
  iat?: number;
  exp?: number;
}

export class RegisterEveryDayCount {
  list?: undefined[];
}

export class RegisterMethodList {
  method?: string;
  count?: number;
}

export class Request {
  _id?: string;
  when?: string;
  where?: string;
  ip?: string;
  size?: number;
  responseTime?: number;
  service?: string;
}

export class Rule {
  _id: string;
  userPoolId: string;
  name: string;
  description?: string;
  type: RuleTypes;
  enabled: boolean;
  faasUrl: string;
  code: string;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
}

export class RuleEnvVariable {
  key: string;
  value: string;
}

export class SAMLDefaultIdentityProviderSettings {
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  mappings?: AssertionMap;
  isDeleted?: boolean;
}

export class SAMLDefaultIdentityProviderSettingsList {
  list?: SAMLDefaultIdentityProviderSettings[];
  totalCount?: number;
}

export class SAMLIdentityProviderAppPagedList {
  totalCount?: number;
  list?: SAMLIdentityProviderClient[];
}

export class SAMLIdentityProviderClient {
  _id?: string;
  name?: string;
  domain?: string;
  image?: string;
  appSecret?: string;
  appId?: string;
  clientId?: string;
  description?: string;
  isDeleted?: boolean;
  enabled?: boolean;
  when?: string;
  SPMetadata?: string;
  attributeNameFormat?: string;
  customAttributes?: string;
  emailDomainTransformation?: string;
  authnContextClassRef?: string;
  IdPMetadata?: string;
  assertionConsumerUrl?: string;
  bindings?: string[];
  nameIds?: string[];
  attributes?: string[];
  enableSignRes?: boolean;
  resSignAlgorithm?: string;
  resAbstractAlgorithm?: string;
  resSignPublicKey?: string;
  resSignPrivateKey?: string;
  resSignPrivateKeyPass?: string;
  enableSignReq?: boolean;
  reqSignPublicKey?: string;
  enableEncryptRes?: boolean;
  resEncryptPublicKey?: string;
  css?: string;
}

export class SAMLServiceProviderAppPagedList {
  totalCount?: number;
  list?: SAMLServiceProviderClient[];
}

export class SAMLServiceProviderClient {
  _id?: string;
  name?: string;
  domain?: string;
  image?: string;
  appSecret?: string;
  defaultIdPMap?: SAMLDefaultIdentityProviderSettings;
  defaultIdPMapId?: string;
  appId?: string;
  clientId?: string;
  description?: string;
  isDeleted?: boolean;
  enabled?: boolean;
  when?: string;
  SPMetadata?: string;
  IdPMetadata?: string;
  IdPEntityID?: string;
  assertionConsumeService?: AssertionConsumeService[];
  mappings?: AssertionMap;
  redirectUrl: string;
  loginUrl: string;
  logoutUrl: string;
  nameId: string;
  enableSignRes?: boolean;
  resSignPublicKey?: string;
  hasResEncrypted?: boolean;
  resEncryptAlgorithm?: string;
  resAbstractAlgorithm?: string;
  resDecryptPrivateKey?: string;
  resDecryptPrivateKeyPass?: string;
  resEncryptPublicKey?: string;
  enableSignReq?: boolean;
  reqSignAlgorithm?: string;
  reqAbstractAlgorithm?: string;
  reqSignPrivateKey?: string;
  reqSignPrivateKeyPass?: string;
  reqSignPublicKey?: string;
  SPUrl?: string;
}

export class SAMLSPListItem {
  providerName?: string;
  url?: string;
  logo?: string;
}

export class SMSCountInfo {
  count?: number;
  limitCount?: number;
}

export class Statistic {
  list?: StatisticInfo[];
  totalCount?: number;
}

export class StatisticInfo {
  _id?: string;
  username?: string;
  email?: string;
  loginsCount?: number;
  appsCount?: number;
  OAuthCount?: number;
}

export class SystemApplicationType {
  _id?: string;
  name?: string;
  descriptions?: string;
  price?: number;
}

export class ThirdPartyIdentity {
  provider?: string;
  refreshToken?: string;
  accessToken?: string;
  expiresIn?: number;
  updatedAt?: string;
}

export class TokenMoreInfo {
  email?: string;
  id?: string;
  clientId?: string;
  unionid?: string;
}

export class TokenWholeInfo {
  data?: TokenMoreInfo;
  iat?: number;
  exp?: number;
}

export class User {
  _id?: string;
  username?: string;
  email?: string;
  unionid?: string;
  openid?: string;
  emailVerified?: boolean;
  phone?: string;
  phoneVerified?: boolean;
  nickname?: string;
  company?: string;
  photo?: string;
  browser?: string;
  password?: string;
  registerInClient?: string;
  registerMethod?: string;
  oauth?: string;
  token?: string;
  tokenExpiredAt?: string;
  loginsCount?: number;
  lastLogin?: string;
  lastIP?: string;
  signedUp?: string;
  blocked?: boolean;
  isDeleted?: boolean;
  device?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  middleName?: string;
  profile?: string;
  preferredUsername?: string;
  website?: string;
  gender?: string;
  birthdate?: string;
  zoneinfo?: string;
  locale?: string;
  address?: string;
  formatted?: string;
  streetAddress?: string;
  locality?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  updatedAt?: string;
  thirdPartyIdentity?: ThirdPartyIdentity;
  oldPassword?: string;
  metadata?: string;
}

export class UserAnalytics {
  usersAddedToday?: UserAnalyticsItem;
  usersAddedLastWeek?: UserAnalyticsItem;
  usersLoginLastWeek?: UserAnalyticsItem;
  totalUsers?: UserAnalyticsItem;
  allUsers?: number;
  totalApps?: number;
}

export class UserAnalyticsItem {
  list?: User[];
  length?: number;
}

export class UserAuthorizedApp {
  _id?: string;
  appId?: string;
  userId?: string;
  scope?: string;
  type?: string;
  isRevoked?: string;
  when?: string;
}

export class UserAuthorizedAppPagedList {
  totalCount?: number;
  OAuthApps?: OAuthProviderClient[];
  OIDCApps?: OIDCProviderClient[];
}

export class UserBrief {
  _id?: string;
  username?: string;
}

export class UserClient {
  _id?: string;
  user?: User;
  clientType?: UserClientType;
  userPoolTypes?: UserClientType[];
  usersCount?: number;
  logo?: string;
  emailVerifiedDefault?: boolean;
  sendWelcomeEmail?: boolean;
  registerDisabled?: boolean;
  showWXMPQRCode?: boolean;
  useMiniLogin?: boolean;
  useSelfWxapp?: boolean;
  allowedOrigins?: string;
  name?: string;
  secret?: string;
  token?: string;
  descriptions?: string;
  jwtExpired?: number;
  createdAt?: string;
  isDeleted?: boolean;
  frequentRegisterCheck?: FrequentRegisterCheckConfig;
  loginFailCheck?: LoginFailCheckConfig;
  enableEmail?: boolean;
  changePhoneStrategy?: ChangePhoneStrategy;
  changeEmailStrategy?: ChangeEmailStrategy;
  qrcodeLoginStrategy?: QrcodeLoginStrategy;
  app2WxappLoginStrategy?: App2WxappLoginStrategy;
}

export class UserClientType {
  _id?: string;
  name?: string;
  description?: string;
  image?: string;
  example?: string;
}

export class UserGroup {
  _id?: string;
  user?: User;
  client?: UserClient;
  group?: Group;
  createdAt?: string;
}

export class UserGroupList {
  totalCount: number;
  list: RBACGroup[];
  rawList: string[];
}

export class UserInClientInWxQRCodeLogList {
  _id?: string;
  username?: string;
}

export class UserLocation {
  _id?: string;
  user?: User;
  userPool?: UserClient;
  when?: string;
  where?: string;
}

export class UserLoginCount {
  _id?: string;
  client?: string;
  count?: number;
  month?: string;
  isError?: boolean;
  totalNumber?: number;
}

export class UserLoginHistory {
  _id?: string;
  user?: User;
  when?: string;
  client?: UserClient;
  success?: boolean;
  ip?: string;
  result?: string;
  device?: string;
  browser?: string;
}

export class UserMetaData {
  key: string;
  value: string;
}

export class UserMetaDataList {
  totalCount: number;
  list: UserMetaData[];
}

export class UserOAuthBind {
  _id?: string;
  user?: string;
  client?: string;
  type?: string;
  unionid?: string;
  userInfo?: string;
  createdAt?: string;
}

export class UserPermissionList {
  totalCount: number;
  list: RBACPermission[];
  rawList: string[];
}

export class UserPoolCommonInfo {
  _id?: string;
  changePhoneStrategy?: ChangePhoneStrategy;
  changeEmailStrategy?: ChangeEmailStrategy;
}

export class UserPoolWithMFA {
  userId?: string;
  userPool?: UserClient;
  MFA?: MFA;
}

export class UserPricingNotFreeType {
  number?: number;
}

export class UserPricingType {
  user?: string;
  client?: string;
  isFree?: boolean;
  pricing?: UserPricingNotFreeType;
  freeNumber?: number;
}

export class UserRoleList {
  totalCount: number;
  list: RBACRole[];
  rawList: string[];
}

export class UsersInGroup {
  list?: UsersInGroupListItem[];
  totalCount?: number;
}

export class UsersInGroupListItem {
  email?: string;
  username?: string;
  _id?: string;
  upgrade?: boolean;
}

export class ValidateResult {
  isValid?: boolean;
}

export class WebhookContentType {
  name: string;
  label: string;
}

export class WebhookEvent {
  name: string;
  label: string;
  description?: string;
}

export class WebhookLog {
  _id: string;
  webhook: string;
  client: string;
  event: string;
  request?: WebhookRequestType;
  response?: WebhookResponseType;
  errorMessage?: string;
  when?: string;
}

export class WebhookRequestType {
  headers?: string;
  payload?: string;
}

export class WebhookResponseType {
  headers?: string;
  body?: string;
  statusCode?: number;
}

export class WebhookSettingOptions {
  webhookEvents: WebhookEvent[];
  contentTypes: WebhookContentType[];
}

export class WxQRCodeLog {
  list?: WxQRCodeLogList[];
  totalCount?: number;
}

export class WxQRCodeLogList {
  random?: string;
  expiredAt?: string;
  createdAt?: string;
  success?: boolean;
  qrcode?: string;
  used?: boolean;
  accessToken?: string;
  openid?: string;
  userInfo?: string;
  redirect?: string;
  client?: ClientInWxQRCodeLogList;
}
