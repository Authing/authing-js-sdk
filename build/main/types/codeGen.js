"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WxQrCodeLogDocument = exports.ValidatePasswordDocument = exports.UsersInGroupDocument = exports.UsersByOidcAppDocument = exports.UsersDocument = exports.UserRoleListDocument = exports.UserPermissionListDocument = exports.UserPatchDocument = exports.UserOAuthCountDocument = exports.UserMetadataDocument = exports.UserGroupListDocument = exports.UserGroupDocument = exports.UserExistDocument = exports.UserClientsDocument = exports.UserClientTypesDocument = exports.UserClientListDocument = exports.UserAnalyticsDocument = exports.UserDocument = exports.TodayGeoDistributionDocument = exports.StatisticDocument = exports.SearchUserBasicInfoByIdDocument = exports.SearchUserDocument = exports.SearchOrgNodesDocument = exports.RulesDocument = exports.RuleEnvDocument = exports.RuleByIdDocument = exports.RequestListDocument = exports.RegisterMethodTopListDocument = exports.RegisterEveryDayCountDocument = exports.RecentServiceCallDocument = exports.RbacRoleListDocument = exports.RbacRoleDocument = exports.RbacPermissionListDocument = exports.RbacPermissionDocument = exports.RbacGroupListDocument = exports.QueryUserPoolCommonInfoDocument = exports.QuerySystemOAuthSettingDocument = exports.QuerySmsSendCountDocument = exports.QueryRoleByUserIdDocument = exports.QueryRbacGroupUserListDocument = exports.QueryProviderInfoByDomainDocument = exports.QueryProviderInfoByAppIdDocument = exports.QueryPermissionListDocument = exports.QueryPasswordStrengthSettingsByUserPoolIdDocument = exports.QueryPasswordFaasEnabledDocument = exports.QueryOperationLogsDocument = exports.QueryMfaDocument = exports.QueryInvitationStateDocument = exports.QueryInvitationDocument = exports.QueryCollaboratorsByUserPoolIdDocument = exports.QueryCollaboratorPermissionsDocument = exports.QueryCollaborativeUserPoolByUserIdDocument = exports.QueryCollaborationByUserPoolIdAndUserIdDocument = exports.QueryClientDocument = exports.QueryAuthorizedUserPoolDocument = exports.QueryAuthAuditRecordsDocument = exports.QpsByTimeDocument = exports.QiNiuUploadTokenDocument = exports.ProviderListByAdConnectorDocument = exports.PreviewEmailTemplateDocument = exports.PlatformUserGrowthTrendDocument = exports.OrgsDocument = exports.OrgRootNodeDocument = exports.OrgNodeUserListDocument = exports.OrgChildrenNodesDocument = exports.OrgDocument = exports.NotBindOAuthListDocument = exports.LoginHotDotPicDataDocument = exports.LoginCountDocument = exports.IsUserInGroupDocument = exports.IsRootNodeOfOrgDocument = exports.IsLoginExpiredDocument = exports.IsDomainAvaliableDocument = exports.IsClientOfUserDocument = exports.IsClientBelongToUserDocument = exports.IsAppAuthorizedByUserDocument = exports.IsAdConnectorAliveDocument = exports.InterConnectionsDocument = exports.GetWebhookSettingOptionsDocument = exports.GetWebhookLogsDocument = exports.GetWebhookLogDetailDocument = exports.GetWebhookDetailDocument = exports.GetUserPoolSettingsDocument = exports.GetUserLoginAreaStatisticOfClientDocument = exports.GetOAuthedAppListDocument = exports.GetOAuthedAppInfoDocument = exports.GetCustomMfaDocument = exports.GetClientWhenSdkInitDocument = exports.GetAppSecretByClientIdDocument = exports.GetAllWebhooksDocument = exports.GetAccessTokenByAppSecretDocument = exports.FindClientsByIdArrayDocument = exports.EmailDomainTopNListDocument = exports.DecodeJwtTokenDocument = exports.ClientRolesDocument = exports.ClientDocument = exports.CheckPhoneCodeDocument = exports.CheckLoginStatusDocument = exports.CheckIsReservedDomainDocument = exports.CheckAdConnectorStatusDocument = exports.BindedOAuthListDocument = exports.AdConnectorListDocument = exports.AdConnectorByProviderDocument = exports.TestLdapUserDocument = exports.TestLdapServerDocument = exports.ReadUserPricingDocument = exports.ReadSystemPricingDocument = exports.ReadSamlspListDocument = exports.ReadOrdersDocument = exports.ReadOauthListDocument = exports.ReadEmailTemplatesBySystemDocument = exports.ReadEmailTemplatesByClientDocument = exports.ReadEmailTemplateByClientAndTypeDocument = exports.ReadEmailSentListByClientDocument = exports.ReadEmailSentListDocument = exports.ReadEmailProviderWithClientDocument = exports.ReadEmailProviderByClientAndNameDocument = exports.ReadEmailProviderDocument = exports.QuerySamlServiceProviderInfoByDomainDocument = exports.QuerySamlServiceProviderInfoByAppIdDocument = exports.QuerySamlIdentityProviderInfoByDomainDocument = exports.QuerySamlIdentityProviderInfoByAppIdDocument = exports.QueryOidcAppInfoByDomainDocument = exports.QueryOidcAppInfoByAppIdDocument = exports.QueryLdapServerListDocument = exports.QueryDefaultSamlIdentityProviderSettingsListDocument = exports.QueryClientIdByAppIdDocument = exports.QueryClientHasLdapConfigsDocument = exports.QueryAppInfoByDomainDocument = exports.QueryAppInfoByAppIdDocument = exports.PreviewEmailByTypeDocument = exports.GetUserAuthorizedAppsDocument = exports.GetSamlServiceProviderListDocument = exports.GetSamlServiceProviderInfoDocument = exports.GetSamlIdentityProviderListDocument = exports.GetSamlIdentityProviderInfoDocument = exports.GetOidcAppListDocument = exports.GetOidcAppInfoDocument = exports.VerifyResetPasswordVerifyCodeDocument = exports.UpdateUserClientDocument = exports.UpdateUserDocument = exports.UpdateSuperAdminUserDocument = exports.UpdateRuleOrderDocument = exports.UpdateRuleDocument = exports.UpdateRoleDocument = exports.UpdateRbacRoleDocument = exports.UpdateRbacPermissionDocument = exports.UpdateRbacGroupDocument = exports.UpdatePhoneDocument = exports.UpdatePermissionsDocument = exports.UpdatePasswordStrengthSettingsByUserPoolIdDocument = exports.UpdateEmailDocument = exports.UpdateCollaboratorDocument = exports.UpdateClientWebhookDocument = exports.UpdateAdConnectorDocument = exports.UnbindOtherOAuthDocument = exports.UnbindEmailDocument = exports.SignInDocument = exports.SetUserMetadataDocument = exports.SetRuleEnvDocument = exports.SetInvitationStateDocument = exports.SendVerifyEmailDocument = exports.SendResetPasswordEmailDocument = exports.SendChangeEmailVerifyCodeDocument = exports.RevokeRbacRoleFromUserBatchDocument = exports.RevokeRbacRoleFromUserDocument = exports.ResetUserPoolFromWechatDocument = exports.RemoveUsersDocument = exports.RemoveUserMetadataDocument = exports.RemoveUserFromRbacGroupBatchDocument = exports.RemoveUserFromRbacGroupDocument = exports.RemoveUserFromGroupDocument = exports.RemoveUserClientsDocument = exports.RemoveSuperAdminUserDocument = exports.RemoveRuleEnvDocument = exports.RemoveRoleFromRbacGroupBatchDocument = exports.RemoveRoleFromRbacGroupDocument = exports.RemovePermissionFromRbacRoleBatchDocument = exports.RemovePermissionFromRbacRoleDocument = exports.RemoveOrgNodeDocument = exports.RemoveFromInvitationDocument = exports.RemoveCustomMfaDocument = exports.RemoveCollaboratorDocument = exports.RemoveAdConnectorDocument = exports.RegisterDocument = exports.RefreshTokenDocument = exports.RefreshThirdPartyTokenDocument = exports.RefreshSignInTokenDocument = exports.RefreshAppSecretDocument = exports.RefreshAdConnectorSecretDocument = exports.RecordRequestDocument = exports.RecordAuthAuditDocument = exports.PasswordLessForceLoginDocument = exports.OrderDocument = exports.OauthPasswordLoginDocument = exports.NewClientDocument = exports.LoginByAdDocument = exports.LoginDocument = exports.GenerateInvitationCodeDocument = exports.EncryptPasswordDocument = exports.EnablePasswordFaasDocument = exports.EnableAdConnectorForProviderDocument = exports.EnableAdConnectorDocument = exports.DisableAdConnectorForProviderDocument = exports.DisableAdConnectorDocument = exports.DeleteRuleDocument = exports.DeleteRbacRoleBatchDocument = exports.DeleteRbacRoleDocument = exports.DeleteRbacPermissionBatchDocument = exports.DeleteRbacPermissionDocument = exports.DeleteRbacGroupBatchDocument = exports.DeleteRbacGroupDocument = exports.DeleteOrgDocument = exports.DeleteClientWebhookDocument = exports.CreateUserWithoutAuthenticationDocument = exports.CreateUserDocument = exports.CreateRuleDocument = exports.CreateRoleDocument = exports.CreateRbacRoleDocument = exports.CreateRbacPermissionDocument = exports.CreateRbacGroupDocument = exports.CreateOrgDocument = exports.CreateInterConnectionDocument = exports.CreateCustomMfaDocument = exports.CreateAdConnectorDocument = exports.ChangePasswordDocument = exports.ChangeMfaDocument = exports.BindOtherOAuthDocument = exports.AssignUserToRoleDocument = exports.AssignRbacRoleToUserBatchDocument = exports.AssignRbacRoleToUserDocument = exports.AddUserToRbacGroupBatchDocument = exports.AddUserToRbacGroupDocument = exports.AddToInvitationDocument = exports.AddSuperAdminUserDocument = exports.AddRoleToRbacGroupBatchDocument = exports.AddRoleToRbacGroupDocument = exports.AddPermissionToRbacRoleBatchDocument = exports.AddPermissionToRbacRoleDocument = exports.AddPermissionDocument = exports.AddOrgNodeDocument = exports.AddGroupMetadataDocument = exports.AddCollaboratorDocument = exports.AddClientWebhookDocument = exports.UseDefaultEmailProviderDocument = exports.UpdateSystemPricingDocument = exports.UpdateSamlServiceProviderDocument = exports.UpdateSamlIdentityProviderDocument = exports.UpdateOidcAppDocument = exports.UpdateOAuthProviderDocument = exports.UpdateOAuthListDocument = exports.UpdateLdapServerDocument = exports.UpdateEmailTemplateWithClientDocument = exports.UpdateEmailTemplateDocument = exports.UpdateEmailProviderDocument = exports.UpdateApplicationOAuthDocument = exports.SetApplicationOAuthEnableOrDisableDocument = exports.SendWebhookTestDocument = exports.SendEmailByTypeDocument = exports.SendEmailDocument = exports.SaveEmailProviderWithClientDocument = exports.RevokeUserAuthorizedAppDocument = exports.RemoveSamlServiceProviderDocument = exports.RemoveSamlIdentityProviderDocument = exports.RemoveOidcAppDocument = exports.RemoveOAuthProviderDocument = exports.RemoveOAuthListDocument = exports.RemoveLdapServerDocument = exports.RemoveEmailProviderDocument = exports.LoginByLdapDocument = exports.IncClientFlowNumberDocument = exports.EnableSamlServiceProviderDocument = exports.EnableSamlIdentityProviderDocument = exports.CreateSamlServiceProviderDocument = exports.CreateSamlIdentityProviderDocument = exports.CreateOidcAppDocument = exports.CreateOAuthProviderDocument = exports.CreateDefaultSamlIdentityProviderSettingsDocument = exports.ContinuePayDocument = exports.ClearAvatarSrcDocument = exports.AddSystemPricingDocument = exports.AddOAuthListDocument = exports.AddLdapServerDocument = exports.AddEmailProviderDocument = exports.RuleTypes = exports.SortByEnum = exports.ProviderType = exports.IamType = exports.OidcProviderDefaultLoginMethod = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var OidcProviderDefaultLoginMethod;
(function (OidcProviderDefaultLoginMethod) {
    OidcProviderDefaultLoginMethod["Phone"] = "PHONE";
    OidcProviderDefaultLoginMethod["Password"] = "PASSWORD";
    OidcProviderDefaultLoginMethod["Qrcode"] = "QRCODE";
})(OidcProviderDefaultLoginMethod = exports.OidcProviderDefaultLoginMethod || (exports.OidcProviderDefaultLoginMethod = {}));
var IamType;
(function (IamType) {
    IamType["Eiam"] = "EIAM";
    IamType["Ciam"] = "CIAM";
})(IamType = exports.IamType || (exports.IamType = {}));
var ProviderType;
(function (ProviderType) {
    ProviderType["Oidc"] = "OIDC";
    ProviderType["OAuth"] = "OAuth";
})(ProviderType = exports.ProviderType || (exports.ProviderType = {}));
var SortByEnum;
(function (SortByEnum) {
    SortByEnum["CreatedatDesc"] = "CREATEDAT_DESC";
    SortByEnum["CreatedatAsc"] = "CREATEDAT_ASC";
    SortByEnum["UpdatedatDesc"] = "UPDATEDAT_DESC";
    SortByEnum["UpdatedatAsc"] = "UPDATEDAT_ASC";
})(SortByEnum = exports.SortByEnum || (exports.SortByEnum = {}));
var RuleTypes;
(function (RuleTypes) {
    RuleTypes["PreRegister"] = "PRE_REGISTER";
    RuleTypes["PostRegister"] = "POST_REGISTER";
    RuleTypes["PostAuthentication"] = "POST_AUTHENTICATION";
    RuleTypes["PreOidctokenissued"] = "PRE_OIDCTOKENISSUED";
})(RuleTypes = exports.RuleTypes || (exports.RuleTypes = {}));
exports.AddEmailProviderDocument = graphql_tag_1.default `
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
exports.AddLdapServerDocument = graphql_tag_1.default `
  mutation AddLDAPServer(
    $name: String!
    $clientId: String!
    $userId: String!
    $ldapLink: String!
    $baseDN: String!
    $searchStandard: String!
    $username: String!
    $password: String!
    $emailPostfix: String
    $description: String
    $enabled: Boolean
  ) {
    AddLDAPServer(
      name: $name
      clientId: $clientId
      userId: $userId
      ldapLink: $ldapLink
      baseDN: $baseDN
      searchStandard: $searchStandard
      username: $username
      password: $password
      emailPostfix: $emailPostfix
      description: $description
      enabled: $enabled
    ) {
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
exports.AddOAuthListDocument = graphql_tag_1.default `
  mutation AddOAuthList(
    $options: OAuthListUpdateInput
    $fields: [OAuthListFieldsFormUpdateInput]
  ) {
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
exports.AddSystemPricingDocument = graphql_tag_1.default `
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
exports.ClearAvatarSrcDocument = graphql_tag_1.default `
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
exports.ContinuePayDocument = graphql_tag_1.default `
  mutation ContinuePay($order: String!) {
    ContinuePay(order: $order) {
      code
      url
      charge
    }
  }
`;
exports.CreateDefaultSamlIdentityProviderSettingsDocument = graphql_tag_1.default `
  mutation CreateDefaultSAMLIdentityProviderSettings(
    $name: String!
    $image: String
    $description: String
    $mappings: AssertionMapInputType
  ) {
    CreateDefaultSAMLIdentityProviderSettings(
      name: $name
      image: $image
      description: $description
      mappings: $mappings
    ) {
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
exports.CreateOAuthProviderDocument = graphql_tag_1.default `
  mutation CreateOAuthProvider(
    $name: String!
    $domain: String!
    $redirectUris: [String]!
    $grants: [String!]!
    $clientId: String
    $image: String
    $description: String
    $homepageURL: String
    $casExpire: Int
  ) {
    CreateOAuthProvider(
      name: $name
      domain: $domain
      redirectUris: $redirectUris
      grants: $grants
      clientId: $clientId
      image: $image
      description: $description
      homepageURL: $homepageURL
      casExpire: $casExpire
    ) {
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
exports.CreateOidcAppDocument = graphql_tag_1.default `
  mutation CreateOIDCApp(
    $name: String!
    $domain: String!
    $redirect_uris: [String]!
    $grant_types: [String!]!
    $response_types: [String!]!
    $clientId: String
    $client_id: String
    $token_endpoint_auth_method: String
    $image: String
    $isDefault: Boolean
    $id_token_signed_response_alg: String
    $id_token_encrypted_response_alg: String
    $id_token_encrypted_response_enc: String
    $userinfo_signed_response_alg: String
    $userinfo_encrypted_response_alg: String
    $userinfo_encrypted_response_enc: String
    $request_object_signing_alg: String
    $request_object_encryption_alg: String
    $request_object_encryption_enc: String
    $jwks_uri: String
    $_jwks_uri: String
    $jwks: String
    $_jwks: String
    $custom_jwks: String
    $description: String
    $homepageURL: String
    $authorization_code_expire: String
    $id_token_expire: String
    $access_token_expire: String
    $cas_expire: String
    $customStyles: OIDCProviderCustomStylesInput
  ) {
    CreateOIDCApp(
      name: $name
      domain: $domain
      redirect_uris: $redirect_uris
      grant_types: $grant_types
      response_types: $response_types
      clientId: $clientId
      client_id: $client_id
      token_endpoint_auth_method: $token_endpoint_auth_method
      image: $image
      isDefault: $isDefault
      id_token_signed_response_alg: $id_token_signed_response_alg
      id_token_encrypted_response_alg: $id_token_encrypted_response_alg
      id_token_encrypted_response_enc: $id_token_encrypted_response_enc
      userinfo_signed_response_alg: $userinfo_signed_response_alg
      userinfo_encrypted_response_alg: $userinfo_encrypted_response_alg
      userinfo_encrypted_response_enc: $userinfo_encrypted_response_enc
      request_object_signing_alg: $request_object_signing_alg
      request_object_encryption_alg: $request_object_encryption_alg
      request_object_encryption_enc: $request_object_encryption_enc
      jwks_uri: $jwks_uri
      _jwks_uri: $_jwks_uri
      jwks: $jwks
      _jwks: $_jwks
      custom_jwks: $custom_jwks
      description: $description
      homepageURL: $homepageURL
      authorization_code_expire: $authorization_code_expire
      id_token_expire: $id_token_expire
      access_token_expire: $access_token_expire
      cas_expire: $cas_expire
      customStyles: $customStyles
    ) {
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
    }
  }
`;
exports.CreateSamlIdentityProviderDocument = graphql_tag_1.default `
  mutation CreateSAMLIdentityProvider(
    $name: String!
    $domain: String!
    $clientId: String!
    $image: String
    $description: String
    $SPMetadata: String
    $IdPMetadata: String
  ) {
    CreateSAMLIdentityProvider(
      name: $name
      domain: $domain
      clientId: $clientId
      image: $image
      description: $description
      SPMetadata: $SPMetadata
      IdPMetadata: $IdPMetadata
    ) {
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
exports.CreateSamlServiceProviderDocument = graphql_tag_1.default `
  mutation CreateSAMLServiceProvider(
    $name: String!
    $domain: String!
    $clientId: String!
    $redirectUrl: String!
    $description: String
    $SPMetadata: String
    $IdPMetadata: String
    $image: String
    $mappings: AssertionMapInputType
    $defaultIdPMapId: String
  ) {
    CreateSAMLServiceProvider(
      name: $name
      domain: $domain
      clientId: $clientId
      redirectUrl: $redirectUrl
      description: $description
      SPMetadata: $SPMetadata
      IdPMetadata: $IdPMetadata
      image: $image
      mappings: $mappings
      defaultIdPMapId: $defaultIdPMapId
    ) {
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
exports.EnableSamlIdentityProviderDocument = graphql_tag_1.default `
  mutation EnableSAMLIdentityProvider(
    $appId: String!
    $clientId: String!
    $enabled: Boolean
  ) {
    EnableSAMLIdentityProvider(
      appId: $appId
      clientId: $clientId
      enabled: $enabled
    ) {
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
exports.EnableSamlServiceProviderDocument = graphql_tag_1.default `
  mutation EnableSAMLServiceProvider(
    $appId: String!
    $clientId: String!
    $enabled: Boolean
  ) {
    EnableSAMLServiceProvider(
      appId: $appId
      clientId: $clientId
      enabled: $enabled
    ) {
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
exports.IncClientFlowNumberDocument = graphql_tag_1.default `
  mutation IncClientFlowNumber(
    $user: String
    $userInvitied: String
    $client: String
    $number: Int
  ) {
    IncClientFlowNumber(
      user: $user
      userInvitied: $userInvitied
      client: $client
      number: $number
    ) {
      code
      url
      charge
    }
  }
`;
exports.LoginByLdapDocument = graphql_tag_1.default `
  mutation LoginByLDAP(
    $username: String!
    $password: String!
    $clientId: String!
    $browser: String
  ) {
    LoginByLDAP(
      username: $username
      password: $password
      clientId: $clientId
      browser: $browser
    ) {
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
exports.RemoveEmailProviderDocument = graphql_tag_1.default `
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
exports.RemoveLdapServerDocument = graphql_tag_1.default `
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
exports.RemoveOAuthListDocument = graphql_tag_1.default `
  mutation RemoveOAuthList($ids: [String]) {
    RemoveOAuthList(ids: $ids)
  }
`;
exports.RemoveOAuthProviderDocument = graphql_tag_1.default `
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
exports.RemoveOidcAppDocument = graphql_tag_1.default `
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
    }
  }
`;
exports.RemoveSamlIdentityProviderDocument = graphql_tag_1.default `
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
exports.RemoveSamlServiceProviderDocument = graphql_tag_1.default `
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
exports.RevokeUserAuthorizedAppDocument = graphql_tag_1.default `
  mutation RevokeUserAuthorizedApp(
    $appId: String
    $userPoolId: String
    $userId: String
  ) {
    RevokeUserAuthorizedApp(
      appId: $appId
      userPoolId: $userPoolId
      userId: $userId
    ) {
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
exports.SaveEmailProviderWithClientDocument = graphql_tag_1.default `
  mutation SaveEmailProviderWithClient(
    $options: EmailProviderWithClientAddInput
  ) {
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
exports.SendEmailDocument = graphql_tag_1.default `
  mutation SendEmail(
    $receivers: [String]!
    $subject: String!
    $client: String!
    $user: String
    $testAvailable: Boolean
    $providerName: String
    $content: String
    $sender: String
    $meta_data: String
    $secret: String
  ) {
    SendEmail(
      receivers: $receivers
      subject: $subject
      client: $client
      user: $user
      testAvailable: $testAvailable
      providerName: $providerName
      content: $content
      sender: $sender
      meta_data: $meta_data
      secret: $secret
    ) {
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
exports.SendEmailByTypeDocument = graphql_tag_1.default `
  mutation SendEmailByType(
    $user: String!
    $type: String!
    $client: String!
    $receivers: [String]!
    $meta_data: String
  ) {
    SendEmailByType(
      user: $user
      type: $type
      client: $client
      receivers: $receivers
      meta_data: $meta_data
    ) {
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
exports.SendWebhookTestDocument = graphql_tag_1.default `
  mutation SendWebhookTest($id: String!) {
    SendWebhookTest(id: $id)
  }
`;
exports.SetApplicationOAuthEnableOrDisableDocument = graphql_tag_1.default `
  mutation SetApplicationOAuthEnableOrDisable(
    $client: String
    $oauth: String
    $user: String
    $enabled: Boolean
  ) {
    SetApplicationOAuthEnableOrDisable(
      client: $client
      oauth: $oauth
      user: $user
      enabled: $enabled
    ) {
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
exports.UpdateApplicationOAuthDocument = graphql_tag_1.default `
  mutation UpdateApplicationOAuth(
    $client: String
    $oauth: String
    $user: String
    $alias: String
    $fields: [OAuthListFieldsFormUpdateInput]
  ) {
    UpdateApplicationOAuth(
      client: $client
      oauth: $oauth
      user: $user
      alias: $alias
      fields: $fields
    ) {
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
exports.UpdateEmailProviderDocument = graphql_tag_1.default `
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
exports.UpdateEmailTemplateDocument = graphql_tag_1.default `
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
exports.UpdateEmailTemplateWithClientDocument = graphql_tag_1.default `
  mutation UpdateEmailTemplateWithClient(
    $options: EmailTemplateWithClientInput!
  ) {
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
exports.UpdateLdapServerDocument = graphql_tag_1.default `
  mutation UpdateLDAPServer(
    $ldapId: String!
    $name: String!
    $clientId: String!
    $userId: String!
    $ldapLink: String!
    $baseDN: String!
    $username: String!
    $searchStandard: String!
    $password: String!
    $emailPostfix: String
    $description: String
    $enabled: Boolean
  ) {
    UpdateLDAPServer(
      ldapId: $ldapId
      name: $name
      clientId: $clientId
      userId: $userId
      ldapLink: $ldapLink
      baseDN: $baseDN
      username: $username
      searchStandard: $searchStandard
      password: $password
      emailPostfix: $emailPostfix
      description: $description
      enabled: $enabled
    ) {
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
exports.UpdateOAuthListDocument = graphql_tag_1.default `
  mutation UpdateOAuthList(
    $options: OAuthListUpdateInput
    $fields: [OAuthListFieldsFormUpdateInput]
  ) {
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
exports.UpdateOAuthProviderDocument = graphql_tag_1.default `
  mutation UpdateOAuthProvider(
    $appId: String!
    $domain: String
    $name: String
    $image: String
    $redirectUris: [String]
    $grants: [String]
    $description: String
    $homepageURL: String
    $css: String
    $casExpire: Int
  ) {
    UpdateOAuthProvider(
      appId: $appId
      domain: $domain
      name: $name
      image: $image
      redirectUris: $redirectUris
      grants: $grants
      description: $description
      homepageURL: $homepageURL
      css: $css
      casExpire: $casExpire
    ) {
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
exports.UpdateOidcAppDocument = graphql_tag_1.default `
  mutation UpdateOIDCApp(
    $appId: String!
    $domain: String
    $name: String
    $image: String
    $redirect_uris: [String]
    $token_endpoint_auth_method: String
    $grant_types: [String]
    $response_types: [String]
    $id_token_signed_response_alg: String
    $id_token_encrypted_response_alg: String
    $id_token_encrypted_response_enc: String
    $userinfo_signed_response_alg: String
    $userinfo_encrypted_response_alg: String
    $userinfo_encrypted_response_enc: String
    $request_object_signing_alg: String
    $request_object_encryption_alg: String
    $request_object_encryption_enc: String
    $jwks_uri: String
    $_jwks_uri: String
    $custom_jwks: String
    $jwks: String
    $_jwks: String
    $description: String
    $homepageURL: String
    $css: String
    $authorization_code_expire: String
    $id_token_expire: String
    $access_token_expire: String
    $cas_expire: String
    $customStyles: OIDCProviderCustomStylesInput
  ) {
    UpdateOIDCApp(
      appId: $appId
      domain: $domain
      name: $name
      image: $image
      redirect_uris: $redirect_uris
      token_endpoint_auth_method: $token_endpoint_auth_method
      grant_types: $grant_types
      response_types: $response_types
      id_token_signed_response_alg: $id_token_signed_response_alg
      id_token_encrypted_response_alg: $id_token_encrypted_response_alg
      id_token_encrypted_response_enc: $id_token_encrypted_response_enc
      userinfo_signed_response_alg: $userinfo_signed_response_alg
      userinfo_encrypted_response_alg: $userinfo_encrypted_response_alg
      userinfo_encrypted_response_enc: $userinfo_encrypted_response_enc
      request_object_signing_alg: $request_object_signing_alg
      request_object_encryption_alg: $request_object_encryption_alg
      request_object_encryption_enc: $request_object_encryption_enc
      jwks_uri: $jwks_uri
      _jwks_uri: $_jwks_uri
      custom_jwks: $custom_jwks
      jwks: $jwks
      _jwks: $_jwks
      description: $description
      homepageURL: $homepageURL
      css: $css
      authorization_code_expire: $authorization_code_expire
      id_token_expire: $id_token_expire
      access_token_expire: $access_token_expire
      cas_expire: $cas_expire
      customStyles: $customStyles
    ) {
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
    }
  }
`;
exports.UpdateSamlIdentityProviderDocument = graphql_tag_1.default `
  mutation UpdateSAMLIdentityProvider(
    $appId: String!
    $clientId: String!
    $domain: String
    $image: String
    $name: String
    $description: String
    $SPMetadata: String
    $attributeNameFormat: String
    $customAttributes: String
    $emailDomainTransformation: String
    $authnContextClassRef: String
    $IdPMetadata: String
    $assertionConsumerUrl: String
    $bindings: [String]
    $nameIds: [String]
    $attributes: [String]
    $enableSignRes: Boolean
    $resSignAlgorithm: String
    $resAbstractAlgorithm: String
    $resSignPublicKey: String
    $resSignPrivateKey: String
    $resSignPrivateKeyPass: String
    $enableSignReq: Boolean
    $reqSignPublicKey: String
    $enableEncryptRes: Boolean
    $resEncryptPublicKey: String
    $css: String
  ) {
    UpdateSAMLIdentityProvider(
      appId: $appId
      clientId: $clientId
      domain: $domain
      image: $image
      name: $name
      description: $description
      SPMetadata: $SPMetadata
      attributeNameFormat: $attributeNameFormat
      customAttributes: $customAttributes
      emailDomainTransformation: $emailDomainTransformation
      authnContextClassRef: $authnContextClassRef
      IdPMetadata: $IdPMetadata
      assertionConsumerUrl: $assertionConsumerUrl
      bindings: $bindings
      nameIds: $nameIds
      attributes: $attributes
      enableSignRes: $enableSignRes
      resSignAlgorithm: $resSignAlgorithm
      resAbstractAlgorithm: $resAbstractAlgorithm
      resSignPublicKey: $resSignPublicKey
      resSignPrivateKey: $resSignPrivateKey
      resSignPrivateKeyPass: $resSignPrivateKeyPass
      enableSignReq: $enableSignReq
      reqSignPublicKey: $reqSignPublicKey
      enableEncryptRes: $enableEncryptRes
      resEncryptPublicKey: $resEncryptPublicKey
      css: $css
    ) {
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
exports.UpdateSamlServiceProviderDocument = graphql_tag_1.default `
  mutation UpdateSAMLServiceProvider(
    $appId: String!
    $name: String!
    $domain: String!
    $clientId: String!
    $redirectUrl: String!
    $loginUrl: String!
    $logoutUrl: String!
    $nameId: String!
    $IdPEntityID: String
    $assertionConsumeService: [AssertionConsumeServiceInputType]
    $image: String
    $mappings: AssertionMapInputType
    $defaultIdPMapId: String
    $description: String
    $SPMetadata: String
    $IdPMetadata: String
    $enableSignRes: Boolean
    $resSignPublicKey: String
    $hasResEncrypted: Boolean
    $resEncryptAlgorithm: String
    $resAbstractAlgorithm: String
    $resDecryptPrivateKey: String
    $resDecryptPrivateKeyPass: String
    $resEncryptPublicKey: String
    $enableSignReq: Boolean
    $reqSignAlgorithm: String
    $reqAbstractAlgorithm: String
    $reqSignPrivateKey: String
    $reqSignPrivateKeyPass: String
    $reqSignPublicKey: String
  ) {
    UpdateSAMLServiceProvider(
      appId: $appId
      name: $name
      domain: $domain
      clientId: $clientId
      redirectUrl: $redirectUrl
      loginUrl: $loginUrl
      logoutUrl: $logoutUrl
      nameId: $nameId
      IdPEntityID: $IdPEntityID
      assertionConsumeService: $assertionConsumeService
      image: $image
      mappings: $mappings
      defaultIdPMapId: $defaultIdPMapId
      description: $description
      SPMetadata: $SPMetadata
      IdPMetadata: $IdPMetadata
      enableSignRes: $enableSignRes
      resSignPublicKey: $resSignPublicKey
      hasResEncrypted: $hasResEncrypted
      resEncryptAlgorithm: $resEncryptAlgorithm
      resAbstractAlgorithm: $resAbstractAlgorithm
      resDecryptPrivateKey: $resDecryptPrivateKey
      resDecryptPrivateKeyPass: $resDecryptPrivateKeyPass
      resEncryptPublicKey: $resEncryptPublicKey
      enableSignReq: $enableSignReq
      reqSignAlgorithm: $reqSignAlgorithm
      reqAbstractAlgorithm: $reqAbstractAlgorithm
      reqSignPrivateKey: $reqSignPrivateKey
      reqSignPrivateKeyPass: $reqSignPrivateKeyPass
      reqSignPublicKey: $reqSignPublicKey
    ) {
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
exports.UpdateSystemPricingDocument = graphql_tag_1.default `
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
exports.UseDefaultEmailProviderDocument = graphql_tag_1.default `
  mutation UseDefaultEmailProvider($user: String!, $client: String!) {
    UseDefaultEmailProvider(user: $user, client: $client)
  }
`;
exports.AddClientWebhookDocument = graphql_tag_1.default `
  mutation addClientWebhook(
    $client: String!
    $events: [String!]!
    $url: String!
    $contentType: String!
    $enable: Boolean!
    $secret: String
    $isLastTimeSuccess: Boolean
  ) {
    addClientWebhook(
      client: $client
      events: $events
      url: $url
      contentType: $contentType
      enable: $enable
      secret: $secret
      isLastTimeSuccess: $isLastTimeSuccess
    ) {
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
exports.AddCollaboratorDocument = graphql_tag_1.default `
  mutation addCollaborator(
    $userPoolId: String!
    $collaboratorUserId: String!
    $permissionDescriptors: [PermissionDescriptorsInputType]!
  ) {
    addCollaborator(
      userPoolId: $userPoolId
      collaboratorUserId: $collaboratorUserId
      permissionDescriptors: $permissionDescriptors
    ) {
      _id
    }
  }
`;
exports.AddGroupMetadataDocument = graphql_tag_1.default `
  mutation addGroupMetadata($groupId: String!, $key: String!, $value: String!) {
    addGroupMetadata(groupId: $groupId, key: $key, value: $value) {
      key
      value
    }
  }
`;
exports.AddOrgNodeDocument = graphql_tag_1.default `
  mutation addOrgNode($input: AddOrgNodeInput!) {
    addOrgNode(input: $input) {
      _id
      nodes {
        _id
        name
        description
        createdAt
        updatedAt
        children
        root
      }
    }
  }
`;
exports.AddPermissionDocument = graphql_tag_1.default `
  mutation addPermission($name: String!, $description: String) {
    addPermission(name: $name, description: $description) {
      _id
      name
      affect
      description
    }
  }
`;
exports.AddPermissionToRbacRoleDocument = graphql_tag_1.default `
  mutation addPermissionToRBACRole(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: AddPermissionToRBACRoleInput!
  ) {
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
exports.AddPermissionToRbacRoleBatchDocument = graphql_tag_1.default `
  mutation addPermissionToRBACRoleBatch(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: AddPermissionToRBACRoleBatchInput
  ) {
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
exports.AddRoleToRbacGroupDocument = graphql_tag_1.default `
  mutation addRoleToRBACGroup(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: AddRoleToRBACGroupInput!
  ) {
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
exports.AddRoleToRbacGroupBatchDocument = graphql_tag_1.default `
  mutation addRoleToRBACGroupBatch(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: AddRoleToRBACGroupBatchInput!
  ) {
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
exports.AddSuperAdminUserDocument = graphql_tag_1.default `
  mutation addSuperAdminUser($options: SuperAdminUpdateInput!) {
    addSuperAdminUser(options: $options) {
      email
      username
      _id
      upgrade
    }
  }
`;
exports.AddToInvitationDocument = graphql_tag_1.default `
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
exports.AddUserToRbacGroupDocument = graphql_tag_1.default `
  mutation addUserToRBACGroup(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: AddUserToRBACGroupInput!
  ) {
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
exports.AddUserToRbacGroupBatchDocument = graphql_tag_1.default `
  mutation addUserToRBACGroupBatch(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: AddUserToRBACGroupBatchInput!
  ) {
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
exports.AssignRbacRoleToUserDocument = graphql_tag_1.default `
  mutation assignRBACRoleToUser(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: AssignUserToRBACRoleInput!
  ) {
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
exports.AssignRbacRoleToUserBatchDocument = graphql_tag_1.default `
  mutation assignRBACRoleToUserBatch(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: AssignUserToRBACRoleBatchInput!
  ) {
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
exports.AssignUserToRoleDocument = graphql_tag_1.default `
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
exports.BindOtherOAuthDocument = graphql_tag_1.default `
  mutation bindOtherOAuth(
    $type: String!
    $unionid: String!
    $userInfo: String!
    $client: String
    $user: String
  ) {
    bindOtherOAuth(
      type: $type
      unionid: $unionid
      userInfo: $userInfo
      client: $client
      user: $user
    ) {
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
exports.ChangeMfaDocument = graphql_tag_1.default `
  mutation changeMFA(
    $enable: Boolean!
    $userId: String
    $userPoolId: String
    $_id: String
    $refreshKey: Boolean
  ) {
    changeMFA(
      enable: $enable
      userId: $userId
      userPoolId: $userPoolId
      _id: $_id
      refreshKey: $refreshKey
    ) {
      _id
      userId
      userPoolId
      enable
      shareKey
    }
  }
`;
exports.ChangePasswordDocument = graphql_tag_1.default `
  mutation changePassword(
    $password: String!
    $email: String!
    $client: String!
    $verifyCode: String!
  ) {
    changePassword(
      password: $password
      email: $email
      client: $client
      verifyCode: $verifyCode
    ) {
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
    }
  }
`;
exports.CreateAdConnectorDocument = graphql_tag_1.default `
  mutation createAdConnector(
    $name: String!
    $logo: String
    $userPoolId: String!
  ) {
    createAdConnector(name: $name, logo: $logo, userPoolId: $userPoolId) {
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
exports.CreateCustomMfaDocument = graphql_tag_1.default `
  mutation createCustomMFA(
    $userIdInMiniLogin: String!
    $userPoolId: String!
    $name: String!
    $secret: String!
    $remark: String
  ) {
    createCustomMFA(
      userIdInMiniLogin: $userIdInMiniLogin
      userPoolId: $userPoolId
      name: $name
      secret: $secret
      remark: $remark
    ) {
      _id
      userIdInMiniLogin
      userPoolId {
        _id
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
exports.CreateInterConnectionDocument = graphql_tag_1.default `
  mutation createInterConnection(
    $sourceUserPoolId: String!
    $sourceUserId: String!
    $targetUserPoolId: String!
    $targetUserId: String!
    $maxAge: Int!
  ) {
    createInterConnection(
      sourceUserPoolId: $sourceUserPoolId
      sourceUserId: $sourceUserId
      targetUserId: $targetUserId
      targetUserPoolId: $targetUserPoolId
      maxAge: $maxAge
    ) {
      message
      code
      status
    }
  }
`;
exports.CreateOrgDocument = graphql_tag_1.default `
  mutation createOrg($input: CreateOrgInput!) {
    createOrg(input: $input) {
      _id
      nodes {
        _id
        name
        description
        createdAt
        updatedAt
        children
        root
      }
    }
  }
`;
exports.CreateRbacGroupDocument = graphql_tag_1.default `
  mutation createRBACGroup($input: CreateRBACGroupInput!) {
    createRBACGroup(input: $input) {
      _id
      userPoolId
      name
      description
      createdAt
      updatedAt
    }
  }
`;
exports.CreateRbacPermissionDocument = graphql_tag_1.default `
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
exports.CreateRbacRoleDocument = graphql_tag_1.default `
  mutation createRBACRole(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: CreateRBACRoleInput!
  ) {
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
exports.CreateRoleDocument = graphql_tag_1.default `
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
exports.CreateRuleDocument = graphql_tag_1.default `
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
exports.CreateUserDocument = graphql_tag_1.default `
  mutation createUser(
    $userInfo: UserRegisterInput!
    $invitationCode: String
    $keepPassword: Boolean
  ) {
    createUser(
      userInfo: $userInfo
      invitationCode: $invitationCode
      keepPassword: $keepPassword
    ) {
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
    }
  }
`;
exports.CreateUserWithoutAuthenticationDocument = graphql_tag_1.default `
  mutation createUserWithoutAuthentication(
    $userPoolId: String!
    $userInfo: UserRegisterInput!
    $forceLogin: Boolean
  ) {
    createUserWithoutAuthentication(
      userPoolId: $userPoolId
      userInfo: $userInfo
      forceLogin: $forceLogin
    ) {
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
      metadata
    }
  }
`;
exports.DeleteClientWebhookDocument = graphql_tag_1.default `
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
exports.DeleteOrgDocument = graphql_tag_1.default `
  mutation deleteOrg($_id: String!) {
    deleteOrg(_id: $_id) {
      message
      code
      status
    }
  }
`;
exports.DeleteRbacGroupDocument = graphql_tag_1.default `
  mutation deleteRBACGroup($_id: String!) {
    deleteRBACGroup(_id: $_id) {
      message
      code
      status
    }
  }
`;
exports.DeleteRbacGroupBatchDocument = graphql_tag_1.default `
  mutation deleteRBACGroupBatch($idList: [String!]!) {
    deleteRBACGroupBatch(idList: $idList) {
      message
      code
      status
    }
  }
`;
exports.DeleteRbacPermissionDocument = graphql_tag_1.default `
  mutation deleteRBACPermission($_id: String!) {
    deleteRBACPermission(_id: $_id) {
      message
      code
      status
    }
  }
`;
exports.DeleteRbacPermissionBatchDocument = graphql_tag_1.default `
  mutation deleteRBACPermissionBatch($idList: [String!]!) {
    deleteRBACPermissionBatch(idList: $idList) {
      message
      code
      status
    }
  }
`;
exports.DeleteRbacRoleDocument = graphql_tag_1.default `
  mutation deleteRBACRole($_id: String!) {
    deleteRBACRole(_id: $_id) {
      message
      code
      status
    }
  }
`;
exports.DeleteRbacRoleBatchDocument = graphql_tag_1.default `
  mutation deleteRBACRoleBatch($idList: [String!]!) {
    deleteRBACRoleBatch(idList: $idList) {
      message
      code
      status
    }
  }
`;
exports.DeleteRuleDocument = graphql_tag_1.default `
  mutation deleteRule($_id: String!) {
    deleteRule(_id: $_id) {
      message
      code
      status
    }
  }
`;
exports.DisableAdConnectorDocument = graphql_tag_1.default `
  mutation disableAdConnector($_id: String!) {
    disableAdConnector(_id: $_id)
  }
`;
exports.DisableAdConnectorForProviderDocument = graphql_tag_1.default `
  mutation disableAdConnectorForProvider(
    $providerId: String!
    $adConnectorId: String!
  ) {
    disableAdConnectorForProvider(
      providerId: $providerId
      adConnectorId: $adConnectorId
    )
  }
`;
exports.EnableAdConnectorDocument = graphql_tag_1.default `
  mutation enableAdConnector($_id: String!) {
    enableAdConnector(_id: $_id)
  }
`;
exports.EnableAdConnectorForProviderDocument = graphql_tag_1.default `
  mutation enableAdConnectorForProvider(
    $providerType: providerType!
    $providerId: String!
    $adConnectorId: String!
  ) {
    enableAdConnectorForProvider(
      providerType: $providerType
      providerId: $providerId
      adConnectorId: $adConnectorId
    )
  }
`;
exports.EnablePasswordFaasDocument = graphql_tag_1.default `
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
exports.EncryptPasswordDocument = graphql_tag_1.default `
  mutation encryptPassword(
    $password: String!
    $client: String!
    $isTest: Boolean
  ) {
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
exports.GenerateInvitationCodeDocument = graphql_tag_1.default `
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
exports.LoginDocument = graphql_tag_1.default `
  mutation login(
    $registerInClient: String!
    $phone: String
    $phoneCode: Int
    $unionid: String
    $openid: String
    $username: String
    $email: String
    $password: String
    $lastIP: String
    $verifyCode: String
    $MFACode: String
    $fromRegister: Boolean
    $device: String
    $browser: String
  ) {
    login(
      registerInClient: $registerInClient
      phone: $phone
      phoneCode: $phoneCode
      unionid: $unionid
      openid: $openid
      username: $username
      email: $email
      password: $password
      lastIP: $lastIP
      verifyCode: $verifyCode
      MFACode: $MFACode
      fromRegister: $fromRegister
      device: $device
      browser: $browser
    ) {
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
    }
  }
`;
exports.LoginByAdDocument = graphql_tag_1.default `
  mutation loginByAd(
    $adConnectorId: String!
    $username: String!
    $password: String!
  ) {
    loginByAd(
      adConnectorId: $adConnectorId
      username: $username
      password: $password
    ) {
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
exports.NewClientDocument = graphql_tag_1.default `
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
      clientType {
        _id
        name
        description
        image
        example
      }
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
exports.OauthPasswordLoginDocument = graphql_tag_1.default `
  mutation oauthPasswordLogin(
    $registerInClient: String!
    $phone: String
    $unionid: String
    $email: String
    $password: String
    $lastIP: String
    $verifyCode: String
  ) {
    oauthPasswordLogin(
      registerInClient: $registerInClient
      phone: $phone
      unionid: $unionid
      email: $email
      password: $password
      lastIP: $lastIP
      verifyCode: $verifyCode
    ) {
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
    }
  }
`;
exports.OrderDocument = graphql_tag_1.default `
  mutation order($options: OrderAddInput!) {
    order(options: $options) {
      code
      url
      charge
    }
  }
`;
exports.PasswordLessForceLoginDocument = graphql_tag_1.default `
  mutation passwordLessForceLogin($userPoolId: String!, $userId: String!) {
    passwordLessForceLogin(userPoolId: $userPoolId, userId: $userId) {
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
      metadata
    }
  }
`;
exports.RecordAuthAuditDocument = graphql_tag_1.default `
  mutation recordAuthAudit(
    $userPoolId: String!
    $appType: String!
    $appId: String!
    $userId: String!
    $event: String!
    $message: String
  ) {
    recordAuthAudit(
      userPoolId: $userPoolId
      appType: $appType
      appId: $appId
      userId: $userId
      event: $event
      message: $message
    ) {
      message
      code
      status
    }
  }
`;
exports.RecordRequestDocument = graphql_tag_1.default `
  mutation recordRequest(
    $when: String!
    $ip: String!
    $responseTime: Int!
    $size: Int!
    $from: String
  ) {
    recordRequest(
      when: $when
      ip: $ip
      responseTime: $responseTime
      size: $size
      from: $from
    ) {
      message
      code
      status
    }
  }
`;
exports.RefreshAdConnectorSecretDocument = graphql_tag_1.default `
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
exports.RefreshAppSecretDocument = graphql_tag_1.default `
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
      clientType {
        _id
        name
        description
        image
        example
      }
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
exports.RefreshSignInTokenDocument = graphql_tag_1.default `
  mutation refreshSignInToken(
    $oidcAppId: String
    $userPoolId: String
    $refreshToken: String!
  ) {
    refreshSignInToken(
      oidcAppId: $oidcAppId
      userPoolId: $userPoolId
      refreshToken: $refreshToken
    ) {
      access_token
      id_token
      refresh_token
      scope
      expires_in
    }
  }
`;
exports.RefreshThirdPartyTokenDocument = graphql_tag_1.default `
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
exports.RefreshTokenDocument = graphql_tag_1.default `
  mutation refreshToken($client: String!, $user: String!) {
    refreshToken(client: $client, user: $user) {
      token
      iat
      exp
    }
  }
`;
exports.RegisterDocument = graphql_tag_1.default `
  mutation register(
    $userInfo: UserRegisterInput!
    $invitationCode: String
    $keepPassword: Boolean
  ) {
    register(
      userInfo: $userInfo
      invitationCode: $invitationCode
      keepPassword: $keepPassword
    ) {
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
      metadata
    }
  }
`;
exports.RemoveAdConnectorDocument = graphql_tag_1.default `
  mutation removeAdConnector($_id: String!) {
    removeAdConnector(_id: $_id)
  }
`;
exports.RemoveCollaboratorDocument = graphql_tag_1.default `
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
exports.RemoveCustomMfaDocument = graphql_tag_1.default `
  mutation removeCustomMFA($_id: String!) {
    removeCustomMFA(_id: $_id) {
      _id
      userIdInMiniLogin
      userPoolId {
        _id
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
exports.RemoveFromInvitationDocument = graphql_tag_1.default `
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
exports.RemoveOrgNodeDocument = graphql_tag_1.default `
  mutation removeOrgNode($input: RemoveOrgNodeInput!) {
    removeOrgNode(input: $input) {
      _id
      nodes {
        _id
        name
        description
        createdAt
        updatedAt
        children
        root
      }
    }
  }
`;
exports.RemovePermissionFromRbacRoleDocument = graphql_tag_1.default `
  mutation removePermissionFromRBACRole(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: RemovePermissionFromRBACRoleInput!
  ) {
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
exports.RemovePermissionFromRbacRoleBatchDocument = graphql_tag_1.default `
  mutation removePermissionFromRBACRoleBatch(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: RemovePermissionFromRBACRoleBatchInput!
  ) {
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
exports.RemoveRoleFromRbacGroupDocument = graphql_tag_1.default `
  mutation removeRoleFromRBACGroup(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: RemoveRoleFromRBACGroupInput!
  ) {
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
exports.RemoveRoleFromRbacGroupBatchDocument = graphql_tag_1.default `
  mutation removeRoleFromRBACGroupBatch(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: RemoveRoleFromRBACGroupBatchInput!
  ) {
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
exports.RemoveRuleEnvDocument = graphql_tag_1.default `
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
exports.RemoveSuperAdminUserDocument = graphql_tag_1.default `
  mutation removeSuperAdminUser($_id: String!, $username: String!) {
    removeSuperAdminUser(_id: $_id, username: $username) {
      email
      username
      _id
      upgrade
    }
  }
`;
exports.RemoveUserClientsDocument = graphql_tag_1.default `
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
      clientType {
        _id
        name
        description
        image
        example
      }
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
exports.RemoveUserFromGroupDocument = graphql_tag_1.default `
  mutation removeUserFromGroup(
    $client: String!
    $user: String!
    $group: String!
  ) {
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
exports.RemoveUserFromRbacGroupDocument = graphql_tag_1.default `
  mutation removeUserFromRBACGroup(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: RemoveUserFromRBACGroupInput!
  ) {
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
exports.RemoveUserFromRbacGroupBatchDocument = graphql_tag_1.default `
  mutation removeUserFromRBACGroupBatch(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: RemoveUserFromRBACGroupBatchInput!
  ) {
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
exports.RemoveUserMetadataDocument = graphql_tag_1.default `
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
exports.RemoveUsersDocument = graphql_tag_1.default `
  mutation removeUsers(
    $ids: [String]
    $registerInClient: String
    $operator: String
  ) {
    removeUsers(
      ids: $ids
      registerInClient: $registerInClient
      operator: $operator
    ) {
      _id
    }
  }
`;
exports.ResetUserPoolFromWechatDocument = graphql_tag_1.default `
  mutation resetUserPoolFromWechat(
    $client: String!
    $registerMethod: String!
    $limit: Int!
  ) {
    resetUserPoolFromWechat(
      client: $client
      registerMethod: $registerMethod
      limit: $limit
    ) {
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
      }
      totalCount
    }
  }
`;
exports.RevokeRbacRoleFromUserDocument = graphql_tag_1.default `
  mutation revokeRBACRoleFromUser(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: RevokeRBACRoleFromUserInput!
  ) {
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
exports.RevokeRbacRoleFromUserBatchDocument = graphql_tag_1.default `
  mutation revokeRBACRoleFromUserBatch(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: RevokeRBACRoleFromUserBatchInput!
  ) {
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
exports.SendChangeEmailVerifyCodeDocument = graphql_tag_1.default `
  mutation sendChangeEmailVerifyCode($userPoolId: String!, $email: String!) {
    sendChangeEmailVerifyCode(userPoolId: $userPoolId, email: $email) {
      message
      code
      status
    }
  }
`;
exports.SendResetPasswordEmailDocument = graphql_tag_1.default `
  mutation sendResetPasswordEmail($client: String!, $email: String!) {
    sendResetPasswordEmail(client: $client, email: $email) {
      message
      code
      status
    }
  }
`;
exports.SendVerifyEmailDocument = graphql_tag_1.default `
  mutation sendVerifyEmail($email: String!, $client: String!, $token: String) {
    sendVerifyEmail(email: $email, client: $client, token: $token) {
      message
      code
      status
    }
  }
`;
exports.SetInvitationStateDocument = graphql_tag_1.default `
  mutation setInvitationState($client: String!, $enablePhone: Boolean) {
    setInvitationState(client: $client, enablePhone: $enablePhone) {
      client
      enablePhone
      createdAt
      updatedAt
    }
  }
`;
exports.SetRuleEnvDocument = graphql_tag_1.default `
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
exports.SetUserMetadataDocument = graphql_tag_1.default `
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
exports.SignInDocument = graphql_tag_1.default `
  mutation signIn(
    $oidcAppId: String
    $userPoolId: String
    $email: String
    $password: String
    $phone: String
    $unionid: String
    $username: String
  ) {
    signIn(
      oidcAppId: $oidcAppId
      userPoolId: $userPoolId
      email: $email
      password: $password
      phone: $phone
      unionid: $unionid
      username: $username
    ) {
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
exports.UnbindEmailDocument = graphql_tag_1.default `
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
exports.UnbindOtherOAuthDocument = graphql_tag_1.default `
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
exports.UpdateAdConnectorDocument = graphql_tag_1.default `
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
exports.UpdateClientWebhookDocument = graphql_tag_1.default `
  mutation updateClientWebhook(
    $id: String!
    $events: [String!]!
    $url: String!
    $contentType: String!
    $enable: Boolean!
    $secret: String
    $isLastTimeSuccess: Boolean
  ) {
    updateClientWebhook(
      id: $id
      events: $events
      url: $url
      contentType: $contentType
      enable: $enable
      secret: $secret
      isLastTimeSuccess: $isLastTimeSuccess
    ) {
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
exports.UpdateCollaboratorDocument = graphql_tag_1.default `
  mutation updateCollaborator(
    $collaborationId: String!
    $permissionDescriptors: [PermissionDescriptorsInputType]!
  ) {
    updateCollaborator(
      collaborationId: $collaborationId
      permissionDescriptors: $permissionDescriptors
    ) {
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
exports.UpdateEmailDocument = graphql_tag_1.default `
  mutation updateEmail(
    $userPoolId: String!
    $email: String!
    $emailCode: String!
    $oldEmail: String
    $oldEmailCode: String
  ) {
    updateEmail(
      userPoolId: $userPoolId
      email: $email
      emailCode: $emailCode
      oldEmail: $oldEmail
      oldEmailCode: $oldEmailCode
    ) {
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
exports.UpdatePasswordStrengthSettingsByUserPoolIdDocument = graphql_tag_1.default `
  mutation updatePasswordStrengthSettingsByUserPoolId(
    $userPoolId: String!
    $pwdStrength: Int
  ) {
    updatePasswordStrengthSettingsByUserPoolId(
      userPoolId: $userPoolId
      pwdStrength: $pwdStrength
    ) {
      userPoolId
      pwdStrength
    }
  }
`;
exports.UpdatePermissionsDocument = graphql_tag_1.default `
  mutation updatePermissions(
    $role: String!
    $client: String!
    $permissions: String
  ) {
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
exports.UpdatePhoneDocument = graphql_tag_1.default `
  mutation updatePhone(
    $userPoolId: String!
    $phone: String!
    $phoneCode: String!
    $oldPhone: String
    $oldPhoneCode: String
  ) {
    updatePhone(
      userPoolId: $userPoolId
      phone: $phone
      phoneCode: $phoneCode
      oldPhone: $oldPhone
      oldPhoneCode: $oldPhoneCode
    ) {
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
exports.UpdateRbacGroupDocument = graphql_tag_1.default `
  mutation updateRBACGroup(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: UpdateRBACGroupInput!
  ) {
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
exports.UpdateRbacPermissionDocument = graphql_tag_1.default `
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
exports.UpdateRbacRoleDocument = graphql_tag_1.default `
  mutation updateRBACRole(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $input: UpdateRBACRoleInput!
  ) {
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
exports.UpdateRoleDocument = graphql_tag_1.default `
  mutation updateRole(
    $_id: String!
    $client: String!
    $name: String!
    $descriptions: String
    $permissions: String
  ) {
    updateRole(
      _id: $_id
      client: $client
      name: $name
      descriptions: $descriptions
      permissions: $permissions
    ) {
      _id
      name
      descriptions
      client
      permissions
      createdAt
    }
  }
`;
exports.UpdateRuleDocument = graphql_tag_1.default `
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
exports.UpdateRuleOrderDocument = graphql_tag_1.default `
  mutation updateRuleOrder($input: UpdateRuleOrderInput!) {
    updateRuleOrder(input: $input) {
      message
      code
      status
    }
  }
`;
exports.UpdateSuperAdminUserDocument = graphql_tag_1.default `
  mutation updateSuperAdminUser($options: SuperAdminUpdateInput!) {
    updateSuperAdminUser(options: $options) {
      email
      username
      _id
      upgrade
    }
  }
`;
exports.UpdateUserDocument = graphql_tag_1.default `
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
exports.UpdateUserClientDocument = graphql_tag_1.default `
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
      clientType {
        _id
        name
        description
        image
        example
      }
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
exports.VerifyResetPasswordVerifyCodeDocument = graphql_tag_1.default `
  mutation verifyResetPasswordVerifyCode(
    $verifyCode: String!
    $email: String!
    $client: String!
  ) {
    verifyResetPasswordVerifyCode(
      verifyCode: $verifyCode
      email: $email
      client: $client
    ) {
      message
      code
      status
    }
  }
`;
exports.GetOidcAppInfoDocument = graphql_tag_1.default `
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
    }
  }
`;
exports.GetOidcAppListDocument = graphql_tag_1.default `
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
        cas_expire
        loginUrl
      }
    }
  }
`;
exports.GetSamlIdentityProviderInfoDocument = graphql_tag_1.default `
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
exports.GetSamlIdentityProviderListDocument = graphql_tag_1.default `
  query GetSAMLIdentityProviderList(
    $clientId: String
    $page: Int
    $count: Int
  ) {
    GetSAMLIdentityProviderList(
      clientId: $clientId
      page: $page
      count: $count
    ) {
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
exports.GetSamlServiceProviderInfoDocument = graphql_tag_1.default `
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
exports.GetSamlServiceProviderListDocument = graphql_tag_1.default `
  query GetSAMLServiceProviderList($clientId: String, $page: Int, $count: Int) {
    GetSAMLServiceProviderList(
      clientId: $clientId
      page: $page
      count: $count
    ) {
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
exports.GetUserAuthorizedAppsDocument = graphql_tag_1.default `
  query GetUserAuthorizedApps(
    $clientId: String
    $userId: String
    $page: Int
    $count: Int
  ) {
    GetUserAuthorizedApps(
      clientId: $clientId
      userId: $userId
      page: $page
      count: $count
    ) {
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
        cas_expire
        loginUrl
      }
    }
  }
`;
exports.PreviewEmailByTypeDocument = graphql_tag_1.default `
  query PreviewEmailByType(
    $type: String!
    $client: String!
    $meta_data: String
  ) {
    PreviewEmailByType(type: $type, client: $client, meta_data: $meta_data)
  }
`;
exports.QueryAppInfoByAppIdDocument = graphql_tag_1.default `
  query QueryAppInfoByAppID(
    $appId: String
    $responseType: String
    $redirectUrl: String
  ) {
    QueryAppInfoByAppID(
      appId: $appId
      responseType: $responseType
      redirectUrl: $redirectUrl
    ) {
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
exports.QueryAppInfoByDomainDocument = graphql_tag_1.default `
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
exports.QueryClientHasLdapConfigsDocument = graphql_tag_1.default `
  query QueryClientHasLDAPConfigs($clientId: String) {
    QueryClientHasLDAPConfigs(clientId: $clientId) {
      result
    }
  }
`;
exports.QueryClientIdByAppIdDocument = graphql_tag_1.default `
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
exports.QueryDefaultSamlIdentityProviderSettingsListDocument = graphql_tag_1.default `
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
exports.QueryLdapServerListDocument = graphql_tag_1.default `
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
exports.QueryOidcAppInfoByAppIdDocument = graphql_tag_1.default `
  query QueryOIDCAppInfoByAppID(
    $appId: String
    $responseType: String
    $redirectUrl: String
  ) {
    QueryOIDCAppInfoByAppID(
      appId: $appId
      responseType: $responseType
      redirectUrl: $redirectUrl
    ) {
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
    }
  }
`;
exports.QueryOidcAppInfoByDomainDocument = graphql_tag_1.default `
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
    }
  }
`;
exports.QuerySamlIdentityProviderInfoByAppIdDocument = graphql_tag_1.default `
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
exports.QuerySamlIdentityProviderInfoByDomainDocument = graphql_tag_1.default `
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
exports.QuerySamlServiceProviderInfoByAppIdDocument = graphql_tag_1.default `
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
exports.QuerySamlServiceProviderInfoByDomainDocument = graphql_tag_1.default `
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
exports.ReadEmailProviderDocument = graphql_tag_1.default `
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
exports.ReadEmailProviderByClientAndNameDocument = graphql_tag_1.default `
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
exports.ReadEmailProviderWithClientDocument = graphql_tag_1.default `
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
exports.ReadEmailSentListDocument = graphql_tag_1.default `
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
exports.ReadEmailSentListByClientDocument = graphql_tag_1.default `
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
exports.ReadEmailTemplateByClientAndTypeDocument = graphql_tag_1.default `
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
exports.ReadEmailTemplatesByClientDocument = graphql_tag_1.default `
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
exports.ReadEmailTemplatesBySystemDocument = graphql_tag_1.default `
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
exports.ReadOauthListDocument = graphql_tag_1.default `
  query ReadOauthList(
    $clientId: String
    $dontGetURL: Boolean
    $useGuard: Boolean
  ) {
    ReadOauthList(
      clientId: $clientId
      dontGetURL: $dontGetURL
      useGuard: $useGuard
    ) {
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
exports.ReadOrdersDocument = graphql_tag_1.default `
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
exports.ReadSamlspListDocument = graphql_tag_1.default `
  query ReadSAMLSPList($clientId: String!) {
    ReadSAMLSPList(clientId: $clientId) {
      providerName
      url
      logo
    }
  }
`;
exports.ReadSystemPricingDocument = graphql_tag_1.default `
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
exports.ReadUserPricingDocument = graphql_tag_1.default `
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
exports.TestLdapServerDocument = graphql_tag_1.default `
  query TestLDAPServer(
    $name: String!
    $clientId: String!
    $userId: String!
    $ldapLink: String!
    $baseDN: String!
    $searchStandard: String!
    $username: String!
    $password: String!
    $emailPostfix: String
    $description: String
    $enabled: Boolean
  ) {
    TestLDAPServer(
      name: $name
      clientId: $clientId
      userId: $userId
      ldapLink: $ldapLink
      baseDN: $baseDN
      searchStandard: $searchStandard
      username: $username
      password: $password
      emailPostfix: $emailPostfix
      description: $description
      enabled: $enabled
    ) {
      result
    }
  }
`;
exports.TestLdapUserDocument = graphql_tag_1.default `
  query TestLDAPUser(
    $testUsername: String!
    $testPassword: String!
    $name: String!
    $clientId: String!
    $userId: String!
    $ldapLink: String!
    $baseDN: String!
    $searchStandard: String!
    $username: String!
    $password: String!
    $emailPostfix: String
    $description: String
    $enabled: Boolean
  ) {
    TestLDAPUser(
      testUsername: $testUsername
      testPassword: $testPassword
      name: $name
      clientId: $clientId
      userId: $userId
      ldapLink: $ldapLink
      baseDN: $baseDN
      searchStandard: $searchStandard
      username: $username
      password: $password
      emailPostfix: $emailPostfix
      description: $description
      enabled: $enabled
    ) {
      result
    }
  }
`;
exports.AdConnectorByProviderDocument = graphql_tag_1.default `
  query adConnectorByProvider(
    $providerId: String!
    $providerType: providerType!
  ) {
    adConnectorByProvider(
      providerId: $providerId
      providerType: $providerType
    ) {
      _id
      name
      logo
      status
    }
  }
`;
exports.AdConnectorListDocument = graphql_tag_1.default `
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
exports.BindedOAuthListDocument = graphql_tag_1.default `
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
exports.CheckAdConnectorStatusDocument = graphql_tag_1.default `
  query checkAdConnectorStatus($adConnectorId: String!) {
    checkAdConnectorStatus(adConnectorId: $adConnectorId)
  }
`;
exports.CheckIsReservedDomainDocument = graphql_tag_1.default `
  query checkIsReservedDomain($domainValue: String!) {
    checkIsReservedDomain(domainValue: $domainValue) {
      domainValue
      isReserved
    }
  }
`;
exports.CheckLoginStatusDocument = graphql_tag_1.default `
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
exports.CheckPhoneCodeDocument = graphql_tag_1.default `
  query checkPhoneCode(
    $userPoolId: String!
    $phone: String!
    $phoneCode: String!
  ) {
    checkPhoneCode(
      userPoolId: $userPoolId
      phone: $phone
      phoneCode: $phoneCode
    ) {
      message
      code
      status
    }
  }
`;
exports.ClientDocument = graphql_tag_1.default `
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
      clientType {
        _id
        name
        description
        image
        example
      }
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
exports.ClientRolesDocument = graphql_tag_1.default `
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
exports.DecodeJwtTokenDocument = graphql_tag_1.default `
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
exports.EmailDomainTopNListDocument = graphql_tag_1.default `
  query emailDomainTopNList($userPoolId: String!) {
    emailDomainTopNList(userPoolId: $userPoolId) {
      domain
      count
    }
  }
`;
exports.FindClientsByIdArrayDocument = graphql_tag_1.default `
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
exports.GetAccessTokenByAppSecretDocument = graphql_tag_1.default `
  query getAccessTokenByAppSecret(
    $secret: String
    $clientId: String
    $retUserId: Boolean
    $timestamp: String
    $signature: String
    $nonce: Int
  ) {
    getAccessTokenByAppSecret(
      secret: $secret
      clientId: $clientId
      retUserId: $retUserId
      timestamp: $timestamp
      signature: $signature
      nonce: $nonce
    )
  }
`;
exports.GetAllWebhooksDocument = graphql_tag_1.default `
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
exports.GetAppSecretByClientIdDocument = graphql_tag_1.default `
  query getAppSecretByClientId($token: String, $clientId: String) {
    getAppSecretByClientId(token: $token, clientId: $clientId) {
      secret
      clientId
    }
  }
`;
exports.GetClientWhenSdkInitDocument = graphql_tag_1.default `
  query getClientWhenSdkInit(
    $secret: String
    $clientId: String
    $retUserId: Boolean
    $timestamp: String
    $signature: String
    $nonce: Int
  ) {
    getClientWhenSdkInit(
      secret: $secret
      clientId: $clientId
      retUserId: $retUserId
      timestamp: $timestamp
      signature: $signature
      nonce: $nonce
    ) {
      clientInfo {
        _id
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
exports.GetCustomMfaDocument = graphql_tag_1.default `
  query getCustomMFA($userIdInMiniLogin: String!, $page: Int, $count: Int) {
    getCustomMFA(
      userIdInMiniLogin: $userIdInMiniLogin
      page: $page
      count: $count
    ) {
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
exports.GetOAuthedAppInfoDocument = graphql_tag_1.default `
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
exports.GetOAuthedAppListDocument = graphql_tag_1.default `
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
exports.GetUserLoginAreaStatisticOfClientDocument = graphql_tag_1.default `
  query getUserLoginAreaStatisticOfClient(
    $userPool: String!
    $start: String
    $end: String
  ) {
    getUserLoginAreaStatisticOfClient(
      userPool: $userPool
      start: $start
      end: $end
    )
  }
`;
exports.GetUserPoolSettingsDocument = graphql_tag_1.default `
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
      clientType {
        _id
        name
        description
        image
        example
      }
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
exports.GetWebhookDetailDocument = graphql_tag_1.default `
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
exports.GetWebhookLogDetailDocument = graphql_tag_1.default `
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
exports.GetWebhookLogsDocument = graphql_tag_1.default `
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
exports.GetWebhookSettingOptionsDocument = graphql_tag_1.default `
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
exports.InterConnectionsDocument = graphql_tag_1.default `
  query interConnections($userPoolId: String!) {
    interConnections(userPoolId: $userPoolId) {
      sourceUserId
      sourceUserPoolId
      targetUserId
      targetUserPoolId
      enabled
      expiresdAt
    }
  }
`;
exports.IsAdConnectorAliveDocument = graphql_tag_1.default `
  query isAdConnectorAlive($adConnectorId: String) {
    isAdConnectorAlive(adConnectorId: $adConnectorId) {
      isAlive
    }
  }
`;
exports.IsAppAuthorizedByUserDocument = graphql_tag_1.default `
  query isAppAuthorizedByUser($userId: String, $appId: String) {
    isAppAuthorizedByUser(userId: $userId, appId: $appId) {
      authorized
    }
  }
`;
exports.IsClientBelongToUserDocument = graphql_tag_1.default `
  query isClientBelongToUser(
    $userId: String
    $clientId: String
    $permissionDescriptors: [PermissionDescriptorsListInputType]
  ) {
    isClientBelongToUser(
      userId: $userId
      clientId: $clientId
      permissionDescriptors: $permissionDescriptors
    )
  }
`;
exports.IsClientOfUserDocument = graphql_tag_1.default `
  query isClientOfUser($email: String, $password: String, $clientId: String) {
    isClientOfUser(email: $email, password: $password, clientId: $clientId)
  }
`;
exports.IsDomainAvaliableDocument = graphql_tag_1.default `
  query isDomainAvaliable($domain: String!) {
    isDomainAvaliable(domain: $domain)
  }
`;
exports.IsLoginExpiredDocument = graphql_tag_1.default `
  query isLoginExpired($id: String!) {
    isLoginExpired(id: $id)
  }
`;
exports.IsRootNodeOfOrgDocument = graphql_tag_1.default `
  query isRootNodeOfOrg($input: IsRootNodeOfOrgInput!) {
    isRootNodeOfOrg(input: $input)
  }
`;
exports.IsUserInGroupDocument = graphql_tag_1.default `
  query isUserInGroup($groupId: String!, $userId: String!) {
    isUserInGroup(groupId: $groupId, userId: $userId)
  }
`;
exports.LoginCountDocument = graphql_tag_1.default `
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
exports.LoginHotDotPicDataDocument = graphql_tag_1.default `
  query loginHotDotPicData($client: String) {
    loginHotDotPicData(client: $client) {
      list
    }
  }
`;
exports.NotBindOAuthListDocument = graphql_tag_1.default `
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
exports.OrgDocument = graphql_tag_1.default `
  query org($_id: String!) {
    org(_id: $_id) {
      _id
      nodes {
        _id
        name
        description
        createdAt
        updatedAt
        children
        root
      }
    }
  }
`;
exports.OrgChildrenNodesDocument = graphql_tag_1.default `
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
exports.OrgNodeUserListDocument = graphql_tag_1.default `
  query orgNodeUserList(
    $orgId: String!
    $nodeId: String!
    $page: Int
    $count: Int
    $includeChildrenNodes: Boolean
  ) {
    orgNodeUserList(
      orgId: $orgId
      nodeId: $nodeId
      page: $page
      count: $count
      includeChildrenNodes: $includeChildrenNodes
    ) {
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
      }
      totalCount
    }
  }
`;
exports.OrgRootNodeDocument = graphql_tag_1.default `
  query orgRootNode(
    $sortBy: SortByEnum
    $page: Int
    $count: Int
    $_id: String!
  ) {
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
exports.OrgsDocument = graphql_tag_1.default `
  query orgs($userPoolId: String!) {
    orgs(userPoolId: $userPoolId) {
      totalCount
      list {
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
        }
      }
    }
  }
`;
exports.PlatformUserGrowthTrendDocument = graphql_tag_1.default `
  query platformUserGrowthTrend($today: String) {
    platformUserGrowthTrend(today: $today) {
      day
      count
    }
  }
`;
exports.PreviewEmailTemplateDocument = graphql_tag_1.default `
  query previewEmailTemplate($type: String, $client: String) {
    previewEmailTemplate(type: $type, client: $client) {
      message
      code
      status
    }
  }
`;
exports.ProviderListByAdConnectorDocument = graphql_tag_1.default `
  query providerListByADConnector($_id: String!) {
    providerListByADConnector(_id: $_id) {
      providerType
      providerId
      userPoolId
      adConnectorId
    }
  }
`;
exports.QiNiuUploadTokenDocument = graphql_tag_1.default `
  query qiNiuUploadToken($type: String) {
    qiNiuUploadToken(type: $type)
  }
`;
exports.QpsByTimeDocument = graphql_tag_1.default `
  query qpsByTime($startTime: String, $endTime: String, $currentTime: String) {
    qpsByTime(
      startTime: $startTime
      endTime: $endTime
      currentTime: $currentTime
    ) {
      qps
      time
    }
  }
`;
exports.QueryAuthAuditRecordsDocument = graphql_tag_1.default `
  query queryAuthAuditRecords(
    $userPoolId: String!
    $sortBy: String
    $page: Int
    $count: Int
  ) {
    queryAuthAuditRecords(
      userPoolId: $userPoolId
      sortBy: $sortBy
      page: $page
      count: $count
    ) {
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
exports.QueryAuthorizedUserPoolDocument = graphql_tag_1.default `
  query queryAuthorizedUserPool(
    $unionid: String
    $phone: String
    $openid: String
    $page: Int
    $count: Int
  ) {
    queryAuthorizedUserPool(
      unionid: $unionid
      phone: $phone
      openid: $openid
      page: $page
      count: $count
    ) {
      list {
        userId
      }
      total
    }
  }
`;
exports.QueryClientDocument = graphql_tag_1.default `
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
      clientType {
        _id
        name
        description
        image
        example
      }
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
exports.QueryCollaborationByUserPoolIdAndUserIdDocument = graphql_tag_1.default `
  query queryCollaborationByUserPoolIdAndUserId(
    $userId: String!
    $userPoolId: String!
  ) {
    queryCollaborationByUserPoolIdAndUserId(
      userId: $userId
      userPoolId: $userPoolId
    ) {
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
exports.QueryCollaborativeUserPoolByUserIdDocument = graphql_tag_1.default `
  query queryCollaborativeUserPoolByUserId(
    $userId: String!
    $page: Int
    $count: Int
  ) {
    queryCollaborativeUserPoolByUserId(
      userId: $userId
      page: $page
      count: $count
    ) {
      list {
        _id
        createdAt
      }
      totalCount
    }
  }
`;
exports.QueryCollaboratorPermissionsDocument = graphql_tag_1.default `
  query queryCollaboratorPermissions(
    $userId: String
    $collaborationId: String
  ) {
    queryCollaboratorPermissions(
      userId: $userId
      collaborationId: $collaborationId
    ) {
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
exports.QueryCollaboratorsByUserPoolIdDocument = graphql_tag_1.default `
  query queryCollaboratorsByUserPoolId(
    $userPoolId: String!
    $count: Int
    $page: Int
  ) {
    queryCollaboratorsByUserPoolId(
      userPoolId: $userPoolId
      count: $count
      page: $page
    ) {
      collaborationId
      list {
        _id
        createdAt
      }
    }
  }
`;
exports.QueryInvitationDocument = graphql_tag_1.default `
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
exports.QueryInvitationStateDocument = graphql_tag_1.default `
  query queryInvitationState($client: String!) {
    queryInvitationState(client: $client) {
      client
      enablePhone
      createdAt
      updatedAt
    }
  }
`;
exports.QueryMfaDocument = graphql_tag_1.default `
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
exports.QueryOperationLogsDocument = graphql_tag_1.default `
  query queryOperationLogs(
    $userPoolId: String!
    $coll: String!
    $page: Int
    $count: Int
  ) {
    queryOperationLogs(
      userPoolId: $userPoolId
      coll: $coll
      page: $page
      count: $count
    ) {
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
exports.QueryPasswordFaasEnabledDocument = graphql_tag_1.default `
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
exports.QueryPasswordStrengthSettingsByUserPoolIdDocument = graphql_tag_1.default `
  query queryPasswordStrengthSettingsByUserPoolId($userPoolId: String!) {
    queryPasswordStrengthSettingsByUserPoolId(userPoolId: $userPoolId) {
      userPoolId
      pwdStrength
    }
  }
`;
exports.QueryPermissionListDocument = graphql_tag_1.default `
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
exports.QueryProviderInfoByAppIdDocument = graphql_tag_1.default `
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
exports.QueryProviderInfoByDomainDocument = graphql_tag_1.default `
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
exports.QueryRbacGroupUserListDocument = graphql_tag_1.default `
  query QueryRBACGroupUserList(
    $_id: String!
    $sortBy: SortByEnum = CREATEDAT_DESC
    $page: Int = 0
    $count: Int = 10
  ) {
    rbacGroup(_id: $_id) {
      users(sortBy: $sortBy, page: $page, count: $count) {
        totalCount
        list {
          _id
          unionid
          email
          emailVerified
          username
          nickname
          company
          photo
          phone
          browser
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
          metadata
        }
      }
    }
  }
`;
exports.QueryRoleByUserIdDocument = graphql_tag_1.default `
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
exports.QuerySmsSendCountDocument = graphql_tag_1.default `
  query querySMSSendCount($userPoolId: String!) {
    querySMSSendCount(userPoolId: $userPoolId) {
      count
      limitCount
    }
  }
`;
exports.QuerySystemOAuthSettingDocument = graphql_tag_1.default `
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
exports.QueryUserPoolCommonInfoDocument = graphql_tag_1.default `
  query queryUserPoolCommonInfo($userPoolId: String!) {
    queryUserPoolCommonInfo(userPoolId: $userPoolId) {
      _id
      changePhoneStrategy {
        verifyOldPhone
      }
      changeEmailStrategy {
        verifyOldEmail
      }
    }
  }
`;
exports.RbacGroupListDocument = graphql_tag_1.default `
  query rbacGroupList(
    $userPoolId: String!
    $sortBy: SortByEnum
    $page: Int
    $count: Int
  ) {
    rbacGroupList(
      userPoolId: $userPoolId
      sortBy: $sortBy
      page: $page
      count: $count
    ) {
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
exports.RbacPermissionDocument = graphql_tag_1.default `
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
exports.RbacPermissionListDocument = graphql_tag_1.default `
  query rbacPermissionList(
    $userPoolId: String!
    $sortBy: SortByEnum
    $page: Int
    $count: Int
  ) {
    rbacPermissionList(
      userPoolId: $userPoolId
      sortBy: $sortBy
      page: $page
      count: $count
    ) {
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
exports.RbacRoleDocument = graphql_tag_1.default `
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
exports.RbacRoleListDocument = graphql_tag_1.default `
  query rbacRoleList(
    $userPoolId: String!
    $sortBy: SortByEnum
    $page: Int
    $count: Int
  ) {
    rbacRoleList(
      userPoolId: $userPoolId
      sortBy: $sortBy
      page: $page
      count: $count
    ) {
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
exports.RecentServiceCallDocument = graphql_tag_1.default `
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
exports.RegisterEveryDayCountDocument = graphql_tag_1.default `
  query registerEveryDayCount($client: String) {
    registerEveryDayCount(client: $client) {
      list
    }
  }
`;
exports.RegisterMethodTopListDocument = graphql_tag_1.default `
  query registerMethodTopList($userPoolId: String!) {
    registerMethodTopList(userPoolId: $userPoolId) {
      method
      count
    }
  }
`;
exports.RequestListDocument = graphql_tag_1.default `
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
exports.RuleByIdDocument = graphql_tag_1.default `
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
exports.RuleEnvDocument = graphql_tag_1.default `
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
exports.RulesDocument = graphql_tag_1.default `
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
exports.SearchOrgNodesDocument = graphql_tag_1.default `
  query searchOrgNodes(
    $orgId: String!
    $name: String
    $metadata: [KeyValuePair!]
  ) {
    searchOrgNodes(orgId: $orgId, name: $name, metadata: $metadata) {
      _id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
exports.SearchUserDocument = graphql_tag_1.default `
  query searchUser(
    $type: String!
    $value: String!
    $registerInClient: String!
    $page: Int
    $count: Int
  ) {
    searchUser(
      type: $type
      value: $value
      registerInClient: $registerInClient
      page: $page
      count: $count
    ) {
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
      }
      totalCount
    }
  }
`;
exports.SearchUserBasicInfoByIdDocument = graphql_tag_1.default `
  query searchUserBasicInfoById($userId: String) {
    searchUserBasicInfoById(userId: $userId) {
      _id
      username
      photo
      email
    }
  }
`;
exports.StatisticDocument = graphql_tag_1.default `
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
exports.TodayGeoDistributionDocument = graphql_tag_1.default `
  query todayGeoDistribution($today: String) {
    todayGeoDistribution(today: $today) {
      city
      size
      point
    }
  }
`;
exports.UserDocument = graphql_tag_1.default `
  query user(
    $id: String
    $registerInClient: String
    $token: String
    $auth: Boolean
    $userLoginHistoryPage: Int
    $userLoginHistoryCount: Int
  ) {
    user(
      id: $id
      registerInClient: $registerInClient
      token: $token
      auth: $auth
      userLoginHistoryPage: $userLoginHistoryPage
      userLoginHistoryCount: $userLoginHistoryCount
    ) {
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
      metadata
    }
  }
`;
exports.UserAnalyticsDocument = graphql_tag_1.default `
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
exports.UserClientListDocument = graphql_tag_1.default `
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
exports.UserClientTypesDocument = graphql_tag_1.default `
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
exports.UserClientsDocument = graphql_tag_1.default `
  query userClients(
    $userId: String!
    $page: Int
    $count: Int
    $computeUsersCount: Boolean
  ) {
    userClients(
      userId: $userId
      page: $page
      count: $count
      computeUsersCount: $computeUsersCount
    ) {
      list {
        _id
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
exports.UserExistDocument = graphql_tag_1.default `
  query userExist(
    $userPoolId: String!
    $email: String
    $phone: String
    $username: String
  ) {
    userExist(
      userPoolId: $userPoolId
      email: $email
      phone: $phone
      username: $username
    )
  }
`;
exports.UserGroupDocument = graphql_tag_1.default `
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
exports.UserGroupListDocument = graphql_tag_1.default `
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
exports.UserMetadataDocument = graphql_tag_1.default `
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
exports.UserOAuthCountDocument = graphql_tag_1.default `
  query userOAuthCount($userIds: [String]) {
    userOAuthCount(userIds: $userIds)
  }
`;
exports.UserPatchDocument = graphql_tag_1.default `
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
      }
      totalCount
    }
  }
`;
exports.UserPermissionListDocument = graphql_tag_1.default `
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
exports.UserRoleListDocument = graphql_tag_1.default `
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
exports.UsersDocument = graphql_tag_1.default `
  query users(
    $registerInClient: String
    $page: Int
    $count: Int
    $populate: Boolean
  ) {
    users(
      registerInClient: $registerInClient
      page: $page
      count: $count
      populate: $populate
    ) {
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
      }
      totalCount
    }
  }
`;
exports.UsersByOidcAppDocument = graphql_tag_1.default `
  query usersByOidcApp(
    $userPoolId: String
    $page: Int
    $count: Int
    $appId: String
  ) {
    usersByOidcApp(
      userPoolId: $userPoolId
      page: $page
      count: $count
      appId: $appId
    ) {
      list
      totalCount
    }
  }
`;
exports.UsersInGroupDocument = graphql_tag_1.default `
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
exports.ValidatePasswordDocument = graphql_tag_1.default `
  query validatePassword(
    $userPool: String!
    $password: String!
    $encryptedPassword: String!
  ) {
    validatePassword(
      userPool: $userPool
      password: $password
      encryptedPassword: $encryptedPassword
    ) {
      isValid
    }
  }
`;
exports.WxQrCodeLogDocument = graphql_tag_1.default `
  query wxQRCodeLog(
    $page: Int
    $count: Int
    $clientId: String
    $sortBy: String
  ) {
    wxQRCodeLog(
      page: $page
      count: $count
      clientId: $clientId
      sortBy: $sortBy
    ) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZUdlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBlcy9jb2RlR2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUE4QjtBQVk5QixJQUFZLDhCQUlYO0FBSkQsV0FBWSw4QkFBOEI7SUFDeEMsaURBQWUsQ0FBQTtJQUNmLHVEQUFxQixDQUFBO0lBQ3JCLG1EQUFpQixDQUFBO0FBQ25CLENBQUMsRUFKVyw4QkFBOEIsR0FBOUIsc0NBQThCLEtBQTlCLHNDQUE4QixRQUl6QztBQUVELElBQVksT0FHWDtBQUhELFdBQVksT0FBTztJQUNqQix3QkFBYSxDQUFBO0lBQ2Isd0JBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFHbEI7QUFRRCxJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsNkJBQWEsQ0FBQTtJQUNiLCtCQUFlLENBQUE7QUFDakIsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCO0FBRUQsSUFBWSxVQUtYO0FBTEQsV0FBWSxVQUFVO0lBQ3BCLDhDQUFnQyxDQUFBO0lBQ2hDLDRDQUE4QixDQUFBO0lBQzlCLDhDQUFnQyxDQUFBO0lBQ2hDLDRDQUE4QixDQUFBO0FBQ2hDLENBQUMsRUFMVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUtyQjtBQWlCRCxJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDbkIseUNBQTRCLENBQUE7SUFDNUIsMkNBQThCLENBQUE7SUFDOUIsdURBQTBDLENBQUE7SUFDMUMsdURBQTBDLENBQUE7QUFDNUMsQ0FBQyxFQUxXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBS3BCO0FBczZSWSxRQUFBLHdCQUF3QixHQUFHLHFCQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNkIxQyxDQUFDO0FBQ1csUUFBQSxxQkFBcUIsR0FBRyxxQkFB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