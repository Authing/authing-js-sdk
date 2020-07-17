import gql from 'graphql-tag';
export var OidcProviderDefaultLoginMethod;
(function (OidcProviderDefaultLoginMethod) {
    OidcProviderDefaultLoginMethod["Phone"] = "PHONE";
    OidcProviderDefaultLoginMethod["Password"] = "PASSWORD";
    OidcProviderDefaultLoginMethod["Qrcode"] = "QRCODE";
})(OidcProviderDefaultLoginMethod || (OidcProviderDefaultLoginMethod = {}));
export var IamType;
(function (IamType) {
    IamType["Eiam"] = "EIAM";
    IamType["Ciam"] = "CIAM";
})(IamType || (IamType = {}));
export var ProviderType;
(function (ProviderType) {
    ProviderType["Oidc"] = "OIDC";
    ProviderType["OAuth"] = "OAuth";
})(ProviderType || (ProviderType = {}));
export var SortByEnum;
(function (SortByEnum) {
    SortByEnum["CreatedatDesc"] = "CREATEDAT_DESC";
    SortByEnum["CreatedatAsc"] = "CREATEDAT_ASC";
    SortByEnum["UpdatedatDesc"] = "UPDATEDAT_DESC";
    SortByEnum["UpdatedatAsc"] = "UPDATEDAT_ASC";
})(SortByEnum || (SortByEnum = {}));
export var RuleTypes;
(function (RuleTypes) {
    RuleTypes["PreRegister"] = "PRE_REGISTER";
    RuleTypes["PostRegister"] = "POST_REGISTER";
    RuleTypes["PostAuthentication"] = "POST_AUTHENTICATION";
    RuleTypes["PreOidctokenissued"] = "PRE_OIDCTOKENISSUED";
})(RuleTypes || (RuleTypes = {}));
export const AddEmailProviderDocument = gql `
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
export const AddLdapServerDocument = gql `
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
export const AddOAuthListDocument = gql `
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
export const AddSystemPricingDocument = gql `
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
export const ClearAvatarSrcDocument = gql `
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
export const ContinuePayDocument = gql `
  mutation ContinuePay($order: String!) {
    ContinuePay(order: $order) {
      code
      url
      charge
    }
  }
`;
export const CreateDefaultSamlIdentityProviderSettingsDocument = gql `
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
export const CreateOAuthProviderDocument = gql `
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
export const CreateOidcAppDocument = gql `
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
export const CreateSamlIdentityProviderDocument = gql `
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
export const CreateSamlServiceProviderDocument = gql `
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
export const EnableSamlIdentityProviderDocument = gql `
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
export const EnableSamlServiceProviderDocument = gql `
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
export const IncClientFlowNumberDocument = gql `
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
export const LoginByLdapDocument = gql `
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
export const RemoveEmailProviderDocument = gql `
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
export const RemoveLdapServerDocument = gql `
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
export const RemoveOAuthListDocument = gql `
  mutation RemoveOAuthList($ids: [String]) {
    RemoveOAuthList(ids: $ids)
  }
`;
export const RemoveOAuthProviderDocument = gql `
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
export const RemoveOidcAppDocument = gql `
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
export const RemoveSamlIdentityProviderDocument = gql `
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
export const RemoveSamlServiceProviderDocument = gql `
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
export const RevokeUserAuthorizedAppDocument = gql `
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
export const SaveEmailProviderWithClientDocument = gql `
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
export const SendEmailDocument = gql `
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
export const SendEmailByTypeDocument = gql `
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
export const SendWebhookTestDocument = gql `
  mutation SendWebhookTest($id: String!) {
    SendWebhookTest(id: $id)
  }
`;
export const SetApplicationOAuthEnableOrDisableDocument = gql `
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
export const UpdateApplicationOAuthDocument = gql `
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
export const UpdateEmailProviderDocument = gql `
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
export const UpdateEmailTemplateDocument = gql `
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
export const UpdateEmailTemplateWithClientDocument = gql `
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
export const UpdateLdapServerDocument = gql `
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
export const UpdateOAuthListDocument = gql `
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
export const UpdateOAuthProviderDocument = gql `
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
export const UpdateOidcAppDocument = gql `
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
export const UpdateSamlIdentityProviderDocument = gql `
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
export const UpdateSamlServiceProviderDocument = gql `
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
export const UpdateSystemPricingDocument = gql `
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
export const UseDefaultEmailProviderDocument = gql `
  mutation UseDefaultEmailProvider($user: String!, $client: String!) {
    UseDefaultEmailProvider(user: $user, client: $client)
  }
`;
export const AddClientWebhookDocument = gql `
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
export const AddCollaboratorDocument = gql `
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
export const AddGroupMetadataDocument = gql `
  mutation addGroupMetadata($groupId: String!, $key: String!, $value: String!) {
    addGroupMetadata(groupId: $groupId, key: $key, value: $value) {
      key
      value
    }
  }
`;
export const AddOrgNodeDocument = gql `
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
export const AddPermissionDocument = gql `
  mutation addPermission($name: String!, $description: String) {
    addPermission(name: $name, description: $description) {
      _id
      name
      affect
      description
    }
  }
`;
export const AddPermissionToRbacRoleDocument = gql `
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
export const AddPermissionToRbacRoleBatchDocument = gql `
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
export const AddRoleToRbacGroupDocument = gql `
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
export const AddRoleToRbacGroupBatchDocument = gql `
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
export const AddSuperAdminUserDocument = gql `
  mutation addSuperAdminUser($options: SuperAdminUpdateInput!) {
    addSuperAdminUser(options: $options) {
      email
      username
      _id
      upgrade
    }
  }
`;
export const AddToInvitationDocument = gql `
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
export const AddUserToRbacGroupDocument = gql `
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
export const AddUserToRbacGroupBatchDocument = gql `
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
export const AssignRbacRoleToUserDocument = gql `
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
export const AssignRbacRoleToUserBatchDocument = gql `
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
export const AssignUserToRoleDocument = gql `
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
export const BindOtherOAuthDocument = gql `
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
export const ChangeMfaDocument = gql `
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
export const ChangePasswordDocument = gql `
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
export const CreateAdConnectorDocument = gql `
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
export const CreateCustomMfaDocument = gql `
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
export const CreateInterConnectionDocument = gql `
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
export const CreateOrgDocument = gql `
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
export const CreateRbacGroupDocument = gql `
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
export const CreateRbacPermissionDocument = gql `
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
export const CreateRbacRoleDocument = gql `
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
export const CreateRoleDocument = gql `
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
export const CreateRuleDocument = gql `
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
export const CreateUserDocument = gql `
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
export const CreateUserWithoutAuthenticationDocument = gql `
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
export const DeleteClientWebhookDocument = gql `
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
export const DeleteOrgDocument = gql `
  mutation deleteOrg($_id: String!) {
    deleteOrg(_id: $_id) {
      message
      code
      status
    }
  }
`;
export const DeleteRbacGroupDocument = gql `
  mutation deleteRBACGroup($_id: String!) {
    deleteRBACGroup(_id: $_id) {
      message
      code
      status
    }
  }
`;
export const DeleteRbacGroupBatchDocument = gql `
  mutation deleteRBACGroupBatch($idList: [String!]!) {
    deleteRBACGroupBatch(idList: $idList) {
      message
      code
      status
    }
  }
`;
export const DeleteRbacPermissionDocument = gql `
  mutation deleteRBACPermission($_id: String!) {
    deleteRBACPermission(_id: $_id) {
      message
      code
      status
    }
  }
`;
export const DeleteRbacPermissionBatchDocument = gql `
  mutation deleteRBACPermissionBatch($idList: [String!]!) {
    deleteRBACPermissionBatch(idList: $idList) {
      message
      code
      status
    }
  }
`;
export const DeleteRbacRoleDocument = gql `
  mutation deleteRBACRole($_id: String!) {
    deleteRBACRole(_id: $_id) {
      message
      code
      status
    }
  }
`;
export const DeleteRbacRoleBatchDocument = gql `
  mutation deleteRBACRoleBatch($idList: [String!]!) {
    deleteRBACRoleBatch(idList: $idList) {
      message
      code
      status
    }
  }
`;
export const DeleteRuleDocument = gql `
  mutation deleteRule($_id: String!) {
    deleteRule(_id: $_id) {
      message
      code
      status
    }
  }
`;
export const DisableAdConnectorDocument = gql `
  mutation disableAdConnector($_id: String!) {
    disableAdConnector(_id: $_id)
  }
`;
export const DisableAdConnectorForProviderDocument = gql `
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
export const EnableAdConnectorDocument = gql `
  mutation enableAdConnector($_id: String!) {
    enableAdConnector(_id: $_id)
  }
`;
export const EnableAdConnectorForProviderDocument = gql `
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
export const EnablePasswordFaasDocument = gql `
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
export const EncryptPasswordDocument = gql `
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
export const GenerateInvitationCodeDocument = gql `
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
export const LoginDocument = gql `
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
export const LoginByAdDocument = gql `
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
export const NewClientDocument = gql `
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
export const OauthPasswordLoginDocument = gql `
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
export const OrderDocument = gql `
  mutation order($options: OrderAddInput!) {
    order(options: $options) {
      code
      url
      charge
    }
  }
`;
export const PasswordLessForceLoginDocument = gql `
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
export const RecordAuthAuditDocument = gql `
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
export const RecordRequestDocument = gql `
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
export const RefreshAdConnectorSecretDocument = gql `
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
export const RefreshAppSecretDocument = gql `
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
export const RefreshSignInTokenDocument = gql `
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
export const RefreshThirdPartyTokenDocument = gql `
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
export const RefreshTokenDocument = gql `
  mutation refreshToken($client: String!, $user: String!) {
    refreshToken(client: $client, user: $user) {
      token
      iat
      exp
    }
  }
`;
export const RegisterDocument = gql `
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
export const RemoveAdConnectorDocument = gql `
  mutation removeAdConnector($_id: String!) {
    removeAdConnector(_id: $_id)
  }
`;
export const RemoveCollaboratorDocument = gql `
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
export const RemoveCustomMfaDocument = gql `
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
export const RemoveFromInvitationDocument = gql `
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
export const RemoveOrgNodeDocument = gql `
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
export const RemovePermissionFromRbacRoleDocument = gql `
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
export const RemovePermissionFromRbacRoleBatchDocument = gql `
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
export const RemoveRoleFromRbacGroupDocument = gql `
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
export const RemoveRoleFromRbacGroupBatchDocument = gql `
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
export const RemoveRuleEnvDocument = gql `
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
export const RemoveSuperAdminUserDocument = gql `
  mutation removeSuperAdminUser($_id: String!, $username: String!) {
    removeSuperAdminUser(_id: $_id, username: $username) {
      email
      username
      _id
      upgrade
    }
  }
`;
export const RemoveUserClientsDocument = gql `
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
export const RemoveUserFromGroupDocument = gql `
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
export const RemoveUserFromRbacGroupDocument = gql `
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
export const RemoveUserFromRbacGroupBatchDocument = gql `
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
export const RemoveUserMetadataDocument = gql `
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
export const RemoveUsersDocument = gql `
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
export const ResetUserPoolFromWechatDocument = gql `
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
export const RevokeRbacRoleFromUserDocument = gql `
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
export const RevokeRbacRoleFromUserBatchDocument = gql `
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
export const SendChangeEmailVerifyCodeDocument = gql `
  mutation sendChangeEmailVerifyCode($userPoolId: String!, $email: String!) {
    sendChangeEmailVerifyCode(userPoolId: $userPoolId, email: $email) {
      message
      code
      status
    }
  }
`;
export const SendResetPasswordEmailDocument = gql `
  mutation sendResetPasswordEmail($client: String!, $email: String!) {
    sendResetPasswordEmail(client: $client, email: $email) {
      message
      code
      status
    }
  }
`;
export const SendVerifyEmailDocument = gql `
  mutation sendVerifyEmail($email: String!, $client: String!, $token: String) {
    sendVerifyEmail(email: $email, client: $client, token: $token) {
      message
      code
      status
    }
  }
`;
export const SetInvitationStateDocument = gql `
  mutation setInvitationState($client: String!, $enablePhone: Boolean) {
    setInvitationState(client: $client, enablePhone: $enablePhone) {
      client
      enablePhone
      createdAt
      updatedAt
    }
  }
`;
export const SetRuleEnvDocument = gql `
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
export const SetUserMetadataDocument = gql `
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
export const SignInDocument = gql `
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
export const UnbindEmailDocument = gql `
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
export const UnbindOtherOAuthDocument = gql `
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
export const UpdateAdConnectorDocument = gql `
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
export const UpdateClientWebhookDocument = gql `
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
export const UpdateCollaboratorDocument = gql `
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
export const UpdateEmailDocument = gql `
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
export const UpdatePasswordStrengthSettingsByUserPoolIdDocument = gql `
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
export const UpdatePermissionsDocument = gql `
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
export const UpdatePhoneDocument = gql `
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
export const UpdateRbacGroupDocument = gql `
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
export const UpdateRbacPermissionDocument = gql `
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
export const UpdateRbacRoleDocument = gql `
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
export const UpdateRoleDocument = gql `
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
export const UpdateRuleDocument = gql `
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
export const UpdateRuleOrderDocument = gql `
  mutation updateRuleOrder($input: UpdateRuleOrderInput!) {
    updateRuleOrder(input: $input) {
      message
      code
      status
    }
  }
`;
export const UpdateSuperAdminUserDocument = gql `
  mutation updateSuperAdminUser($options: SuperAdminUpdateInput!) {
    updateSuperAdminUser(options: $options) {
      email
      username
      _id
      upgrade
    }
  }
`;
export const UpdateUserDocument = gql `
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
export const UpdateUserClientDocument = gql `
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
export const VerifyResetPasswordVerifyCodeDocument = gql `
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
export const GetOidcAppInfoDocument = gql `
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
export const GetOidcAppListDocument = gql `
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
export const GetSamlIdentityProviderInfoDocument = gql `
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
export const GetSamlIdentityProviderListDocument = gql `
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
export const GetSamlServiceProviderInfoDocument = gql `
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
export const GetSamlServiceProviderListDocument = gql `
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
export const GetUserAuthorizedAppsDocument = gql `
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
export const PreviewEmailByTypeDocument = gql `
  query PreviewEmailByType(
    $type: String!
    $client: String!
    $meta_data: String
  ) {
    PreviewEmailByType(type: $type, client: $client, meta_data: $meta_data)
  }
`;
export const QueryAppInfoByAppIdDocument = gql `
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
export const QueryAppInfoByDomainDocument = gql `
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
export const QueryClientHasLdapConfigsDocument = gql `
  query QueryClientHasLDAPConfigs($clientId: String) {
    QueryClientHasLDAPConfigs(clientId: $clientId) {
      result
    }
  }
`;
export const QueryClientIdByAppIdDocument = gql `
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
export const QueryDefaultSamlIdentityProviderSettingsListDocument = gql `
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
export const QueryLdapServerListDocument = gql `
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
export const QueryOidcAppInfoByAppIdDocument = gql `
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
export const QueryOidcAppInfoByDomainDocument = gql `
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
export const QuerySamlIdentityProviderInfoByAppIdDocument = gql `
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
export const QuerySamlIdentityProviderInfoByDomainDocument = gql `
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
export const QuerySamlServiceProviderInfoByAppIdDocument = gql `
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
export const QuerySamlServiceProviderInfoByDomainDocument = gql `
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
export const ReadEmailProviderDocument = gql `
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
export const ReadEmailProviderByClientAndNameDocument = gql `
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
export const ReadEmailProviderWithClientDocument = gql `
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
export const ReadEmailSentListDocument = gql `
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
export const ReadEmailSentListByClientDocument = gql `
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
export const ReadEmailTemplateByClientAndTypeDocument = gql `
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
export const ReadEmailTemplatesByClientDocument = gql `
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
export const ReadEmailTemplatesBySystemDocument = gql `
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
export const ReadOauthListDocument = gql `
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
export const ReadOrdersDocument = gql `
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
export const ReadSamlspListDocument = gql `
  query ReadSAMLSPList($clientId: String!) {
    ReadSAMLSPList(clientId: $clientId) {
      providerName
      url
      logo
    }
  }
`;
export const ReadSystemPricingDocument = gql `
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
export const ReadUserPricingDocument = gql `
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
export const TestLdapServerDocument = gql `
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
export const TestLdapUserDocument = gql `
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
export const AdConnectorByProviderDocument = gql `
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
export const AdConnectorListDocument = gql `
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
export const BindedOAuthListDocument = gql `
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
export const CheckAdConnectorStatusDocument = gql `
  query checkAdConnectorStatus($adConnectorId: String!) {
    checkAdConnectorStatus(adConnectorId: $adConnectorId)
  }
`;
export const CheckIsReservedDomainDocument = gql `
  query checkIsReservedDomain($domainValue: String!) {
    checkIsReservedDomain(domainValue: $domainValue) {
      domainValue
      isReserved
    }
  }
`;
export const CheckLoginStatusDocument = gql `
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
export const CheckPhoneCodeDocument = gql `
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
export const ClientDocument = gql `
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
export const ClientRolesDocument = gql `
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
export const DecodeJwtTokenDocument = gql `
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
export const EmailDomainTopNListDocument = gql `
  query emailDomainTopNList($userPoolId: String!) {
    emailDomainTopNList(userPoolId: $userPoolId) {
      domain
      count
    }
  }
`;
export const FindClientsByIdArrayDocument = gql `
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
export const GetAccessTokenByAppSecretDocument = gql `
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
export const GetAllWebhooksDocument = gql `
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
export const GetAppSecretByClientIdDocument = gql `
  query getAppSecretByClientId($token: String, $clientId: String) {
    getAppSecretByClientId(token: $token, clientId: $clientId) {
      secret
      clientId
    }
  }
`;
export const GetClientWhenSdkInitDocument = gql `
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
export const GetCustomMfaDocument = gql `
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
export const GetOAuthedAppInfoDocument = gql `
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
export const GetOAuthedAppListDocument = gql `
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
export const GetUserLoginAreaStatisticOfClientDocument = gql `
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
export const GetUserPoolSettingsDocument = gql `
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
export const GetWebhookDetailDocument = gql `
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
export const GetWebhookLogDetailDocument = gql `
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
export const GetWebhookLogsDocument = gql `
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
export const GetWebhookSettingOptionsDocument = gql `
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
export const InterConnectionsDocument = gql `
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
export const IsAdConnectorAliveDocument = gql `
  query isAdConnectorAlive($adConnectorId: String) {
    isAdConnectorAlive(adConnectorId: $adConnectorId) {
      isAlive
    }
  }
`;
export const IsAppAuthorizedByUserDocument = gql `
  query isAppAuthorizedByUser($userId: String, $appId: String) {
    isAppAuthorizedByUser(userId: $userId, appId: $appId) {
      authorized
    }
  }
`;
export const IsClientBelongToUserDocument = gql `
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
export const IsClientOfUserDocument = gql `
  query isClientOfUser($email: String, $password: String, $clientId: String) {
    isClientOfUser(email: $email, password: $password, clientId: $clientId)
  }
`;
export const IsDomainAvaliableDocument = gql `
  query isDomainAvaliable($domain: String!) {
    isDomainAvaliable(domain: $domain)
  }
`;
export const IsLoginExpiredDocument = gql `
  query isLoginExpired($id: String!) {
    isLoginExpired(id: $id)
  }
`;
export const IsRootNodeOfOrgDocument = gql `
  query isRootNodeOfOrg($input: IsRootNodeOfOrgInput!) {
    isRootNodeOfOrg(input: $input)
  }
`;
export const IsUserInGroupDocument = gql `
  query isUserInGroup($groupId: String!, $userId: String!) {
    isUserInGroup(groupId: $groupId, userId: $userId)
  }
`;
export const LoginCountDocument = gql `
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
export const LoginHotDotPicDataDocument = gql `
  query loginHotDotPicData($client: String) {
    loginHotDotPicData(client: $client) {
      list
    }
  }
`;
export const NotBindOAuthListDocument = gql `
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
export const OrgDocument = gql `
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
export const OrgChildrenNodesDocument = gql `
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
export const OrgNodeUserListDocument = gql `
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
export const OrgRootNodeDocument = gql `
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
export const OrgsDocument = gql `
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
export const PlatformUserGrowthTrendDocument = gql `
  query platformUserGrowthTrend($today: String) {
    platformUserGrowthTrend(today: $today) {
      day
      count
    }
  }
`;
export const PreviewEmailTemplateDocument = gql `
  query previewEmailTemplate($type: String, $client: String) {
    previewEmailTemplate(type: $type, client: $client) {
      message
      code
      status
    }
  }
`;
export const ProviderListByAdConnectorDocument = gql `
  query providerListByADConnector($_id: String!) {
    providerListByADConnector(_id: $_id) {
      providerType
      providerId
      userPoolId
      adConnectorId
    }
  }
`;
export const QiNiuUploadTokenDocument = gql `
  query qiNiuUploadToken($type: String) {
    qiNiuUploadToken(type: $type)
  }
`;
export const QpsByTimeDocument = gql `
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
export const QueryAuthAuditRecordsDocument = gql `
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
export const QueryAuthorizedUserPoolDocument = gql `
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
export const QueryClientDocument = gql `
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
export const QueryCollaborationByUserPoolIdAndUserIdDocument = gql `
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
export const QueryCollaborativeUserPoolByUserIdDocument = gql `
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
export const QueryCollaboratorPermissionsDocument = gql `
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
export const QueryCollaboratorsByUserPoolIdDocument = gql `
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
export const QueryInvitationDocument = gql `
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
export const QueryInvitationStateDocument = gql `
  query queryInvitationState($client: String!) {
    queryInvitationState(client: $client) {
      client
      enablePhone
      createdAt
      updatedAt
    }
  }
`;
export const QueryMfaDocument = gql `
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
export const QueryOperationLogsDocument = gql `
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
export const QueryPasswordFaasEnabledDocument = gql `
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
export const QueryPasswordStrengthSettingsByUserPoolIdDocument = gql `
  query queryPasswordStrengthSettingsByUserPoolId($userPoolId: String!) {
    queryPasswordStrengthSettingsByUserPoolId(userPoolId: $userPoolId) {
      userPoolId
      pwdStrength
    }
  }
`;
export const QueryPermissionListDocument = gql `
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
export const QueryProviderInfoByAppIdDocument = gql `
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
export const QueryProviderInfoByDomainDocument = gql `
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
export const QueryRbacGroupUserListDocument = gql `
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
export const QueryRoleByUserIdDocument = gql `
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
export const QuerySmsSendCountDocument = gql `
  query querySMSSendCount($userPoolId: String!) {
    querySMSSendCount(userPoolId: $userPoolId) {
      count
      limitCount
    }
  }
`;
export const QuerySystemOAuthSettingDocument = gql `
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
export const QueryUserPoolCommonInfoDocument = gql `
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
export const RbacGroupListDocument = gql `
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
export const RbacPermissionDocument = gql `
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
export const RbacPermissionListDocument = gql `
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
export const RbacRoleDocument = gql `
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
export const RbacRoleListDocument = gql `
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
export const RecentServiceCallDocument = gql `
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
export const RegisterEveryDayCountDocument = gql `
  query registerEveryDayCount($client: String) {
    registerEveryDayCount(client: $client) {
      list
    }
  }
`;
export const RegisterMethodTopListDocument = gql `
  query registerMethodTopList($userPoolId: String!) {
    registerMethodTopList(userPoolId: $userPoolId) {
      method
      count
    }
  }
`;
export const RequestListDocument = gql `
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
export const RuleByIdDocument = gql `
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
export const RuleEnvDocument = gql `
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
export const RulesDocument = gql `
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
export const SearchOrgNodesDocument = gql `
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
export const SearchUserDocument = gql `
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
export const SearchUserBasicInfoByIdDocument = gql `
  query searchUserBasicInfoById($userId: String) {
    searchUserBasicInfoById(userId: $userId) {
      _id
      username
      photo
      email
    }
  }
`;
export const StatisticDocument = gql `
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
export const TodayGeoDistributionDocument = gql `
  query todayGeoDistribution($today: String) {
    todayGeoDistribution(today: $today) {
      city
      size
      point
    }
  }
`;
export const UserDocument = gql `
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
export const UserAnalyticsDocument = gql `
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
export const UserClientListDocument = gql `
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
export const UserClientTypesDocument = gql `
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
export const UserClientsDocument = gql `
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
export const UserExistDocument = gql `
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
export const UserGroupDocument = gql `
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
export const UserGroupListDocument = gql `
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
export const UserMetadataDocument = gql `
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
export const UserOAuthCountDocument = gql `
  query userOAuthCount($userIds: [String]) {
    userOAuthCount(userIds: $userIds)
  }
`;
export const UserPatchDocument = gql `
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
export const UserPermissionListDocument = gql `
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
export const UserRoleListDocument = gql `
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
export const UsersDocument = gql `
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
export const UsersByOidcAppDocument = gql `
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
export const UsersInGroupDocument = gql `
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
export const ValidatePasswordDocument = gql `
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
export const WxQrCodeLogDocument = gql `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZUdlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBlcy9jb2RlR2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQVk5QixNQUFNLENBQU4sSUFBWSw4QkFJWDtBQUpELFdBQVksOEJBQThCO0lBQ3hDLGlEQUFlLENBQUE7SUFDZix1REFBcUIsQ0FBQTtJQUNyQixtREFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSlcsOEJBQThCLEtBQTlCLDhCQUE4QixRQUl6QztBQUVELE1BQU0sQ0FBTixJQUFZLE9BR1g7QUFIRCxXQUFZLE9BQU87SUFDakIsd0JBQWEsQ0FBQTtJQUNiLHdCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsT0FBTyxLQUFQLE9BQU8sUUFHbEI7QUFRRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLDZCQUFhLENBQUE7SUFDYiwrQkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUVELE1BQU0sQ0FBTixJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDcEIsOENBQWdDLENBQUE7SUFDaEMsNENBQThCLENBQUE7SUFDOUIsOENBQWdDLENBQUE7SUFDaEMsNENBQThCLENBQUE7QUFDaEMsQ0FBQyxFQUxXLFVBQVUsS0FBVixVQUFVLFFBS3JCO0FBaUJELE1BQU0sQ0FBTixJQUFZLFNBS1g7QUFMRCxXQUFZLFNBQVM7SUFDbkIseUNBQTRCLENBQUE7SUFDNUIsMkNBQThCLENBQUE7SUFDOUIsdURBQTBDLENBQUE7SUFDMUMsdURBQTBDLENBQUE7QUFDNUMsQ0FBQyxFQUxXLFNBQVMsS0FBVCxTQUFTLFFBS3BCO0FBczZSRCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNkIxQyxDQUFDO0FBQ0YsTUFBTSxDQUFD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