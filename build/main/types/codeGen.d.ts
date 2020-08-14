export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: any;
}> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare enum OidcProviderDefaultLoginMethod {
    Phone = "PHONE",
    Password = "PASSWORD",
    Qrcode = "QRCODE"
}
export declare enum IamType {
    Eiam = "EIAM",
    Ciam = "CIAM"
}
export declare type PermissionDescriptorsListInputType = {
    permissionId?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    operationAllow?: Maybe<Scalars['Int']>;
};
export declare enum ProviderType {
    Oidc = "OIDC",
    OAuth = "OAuth"
}
export declare enum SortByEnum {
    CreatedatDesc = "CREATEDAT_DESC",
    CreatedatAsc = "CREATEDAT_ASC",
    UpdatedatDesc = "UPDATEDAT_DESC",
    UpdatedatAsc = "UPDATEDAT_ASC"
}
export declare type OrgChildrenNodesInput = {
    groupId: Scalars['String'];
    orgId: Scalars['String'];
};
export declare type IsRootNodeOfOrgInput = {
    groupId: Scalars['String'];
    orgId: Scalars['String'];
};
export declare type KeyValuePair = {
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare enum RuleTypes {
    PreRegister = "PRE_REGISTER",
    PostRegister = "POST_REGISTER",
    PostAuthentication = "POST_AUTHENTICATION",
    PreOidctokenissued = "PRE_OIDCTOKENISSUED"
}
export declare type EmailProviderListInput = {
    _id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    fields?: Maybe<Array<Maybe<EmailProviderFormInput>>>;
};
export declare type EmailProviderFormInput = {
    label?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    placeholder?: Maybe<Scalars['String']>;
    help?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    options?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare type EmailProviderWithClientAddInput = {
    _id?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
    client?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['Boolean']>;
    fields?: Maybe<Array<Maybe<EmailProviderFormAddInput>>>;
    provider?: Maybe<Scalars['String']>;
};
export declare type EmailProviderFormAddInput = {
    label?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    placeholder?: Maybe<Scalars['String']>;
    help?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    options?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare type EmailTemplateWithClientInput = {
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
export declare type EmailTemplateInput = {
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
export declare type OAuthListUpdateInput = {
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
export declare type OAuthListFieldsFormUpdateInput = {
    label?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    placeholder?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    children?: Maybe<Array<Maybe<OAuthListFieldsFormRecursionInput>>>;
    checked?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare type OAuthListFieldsFormRecursionInput = {
    label?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    placeholder?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    children?: Maybe<Array<Maybe<OAuthListFieldsFormRecursionInput>>>;
};
export declare type OidcProviderCustomStylesInput = {
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
export declare type OidcProviderCustomStylesPlaceholderInput = {
    username?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    confirmPassword?: Maybe<Scalars['String']>;
    verfiyCode?: Maybe<Scalars['String']>;
    newPassword?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    phoneCode?: Maybe<Scalars['String']>;
};
export declare type OidcProviderCustomStylesQrcodeScanningInput = {
    redirect?: Maybe<Scalars['Boolean']>;
    interval?: Maybe<Scalars['Int']>;
    tips?: Maybe<Scalars['String']>;
};
export declare type AssertionMapInputType = {
    username?: Maybe<Scalars['String']>;
    nickname?: Maybe<Scalars['String']>;
    photo?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    providerName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
};
export declare type AssertionConsumeServiceInputType = {
    binding?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
    isDefault?: Maybe<Scalars['Boolean']>;
};
export declare type PricingFieldsInput = {
    _id?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    startNumber?: Maybe<Scalars['Int']>;
    freeNumber?: Maybe<Scalars['Int']>;
    startPrice?: Maybe<Scalars['Int']>;
    maxNumber?: Maybe<Scalars['Int']>;
    d?: Maybe<Scalars['Int']>;
    features?: Maybe<Array<Maybe<Scalars['String']>>>;
};
export declare type OrderAddInput = {
    user: Scalars['String'];
    client: Scalars['String'];
    pricing: Scalars['String'];
    flowNumber: Scalars['Int'];
    price: Scalars['Float'];
    timeOfPurchase: Scalars['Int'];
};
export declare type UserRegisterInput = {
    email?: Maybe<Scalars['String']>;
    unionid?: Maybe<Scalars['String']>;
    openid?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    phoneCode?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    salt?: Maybe<Scalars['String']>;
    forceLogin?: Maybe<Scalars['Boolean']>;
    lastIP?: Maybe<Scalars['String']>;
    registerInClient?: Scalars['String'];
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
};
export declare type UserUpdateInput = {
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
export declare type NewUserClientInput = {
    name: Scalars['String'];
    userId: Scalars['String'];
    logo?: Maybe<Scalars['String']>;
    clientTypeId?: Maybe<Scalars['String']>;
    userPoolTypeList?: Maybe<Array<Scalars['String']>>;
    iamType?: Maybe<IamType>;
    domain?: Maybe<Scalars['String']>;
};
export declare type UpdateUserClientInput = {
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
export declare type FrequentRegisterCheckConfigInput = {
    timeInterval?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    enable?: Maybe<Scalars['Boolean']>;
};
export declare type LoginFailCheckConfigInput = {
    timeInterval?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    enable?: Maybe<Scalars['Boolean']>;
};
export declare type ChangePhoneStrategyInput = {
    verifyOldPhone?: Maybe<Scalars['Boolean']>;
};
export declare type ChangeEmailStrategyInput = {
    verifyOldEmail?: Maybe<Scalars['Boolean']>;
};
export declare type QrcodeLoginStrategyInput = {
    qrcodeExpiresAfter?: Maybe<Scalars['Int']>;
    returnFullUserInfo?: Maybe<Scalars['Boolean']>;
    allowExchangeUserInfoFromBrowser?: Maybe<Scalars['Boolean']>;
    ticketExpiresAfter?: Maybe<Scalars['Int']>;
};
export declare type App2WxappLoginStrategyInput = {
    ticketExpriresAfter?: Maybe<Scalars['Int']>;
    ticketExchangeUserInfoNeedSecret?: Maybe<Scalars['Boolean']>;
};
export declare type SuperAdminUpdateInput = {
    _id?: Maybe<Scalars['String']>;
    username: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type PermissionDescriptorsInputType = {
    permissionId?: Maybe<Scalars['String']>;
    operationAllow?: Maybe<Scalars['Int']>;
};
export declare type CreateRbacPermissionInput = {
    userPoolId: Scalars['String'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
};
export declare type UpdateRbacPermissionInput = {
    _id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};
export declare type CreateRbacRoleInput = {
    userPoolId: Scalars['String'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
};
export declare type UpdateRbacRoleInput = {
    _id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};
export declare type CreateRbacGroupInput = {
    userPoolId: Scalars['String'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
};
export declare type UpdateRbacGroupInput = {
    _id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};
export declare type AssignUserToRbacRoleInput = {
    userId: Scalars['String'];
    roleId: Scalars['String'];
};
export declare type AssignUserToRbacRoleBatchInput = {
    userIdList: Array<Scalars['String']>;
    roleId: Scalars['String'];
};
export declare type RevokeRbacRoleFromUserInput = {
    userId: Scalars['String'];
    roleId: Scalars['String'];
};
export declare type RevokeRbacRoleFromUserBatchInput = {
    userIdList: Array<Scalars['String']>;
    roleId: Scalars['String'];
};
export declare type AddPermissionToRbacRoleInput = {
    permissionId: Scalars['String'];
    roleId: Scalars['String'];
};
export declare type AddPermissionToRbacRoleBatchInput = {
    permissionIdList: Array<Scalars['String']>;
    roleId: Scalars['String'];
};
export declare type RemovePermissionFromRbacRoleInput = {
    permissionId: Scalars['String'];
    roleId: Scalars['String'];
};
export declare type RemovePermissionFromRbacRoleBatchInput = {
    permissionIdList: Array<Scalars['String']>;
    roleId: Scalars['String'];
};
export declare type AddRoleToRbacGroupInput = {
    roleId: Scalars['String'];
    groupId: Scalars['String'];
};
export declare type AddRoleToRbacGroupBatchInput = {
    roleIdList: Array<Scalars['String']>;
    groupId: Scalars['String'];
};
export declare type RemoveRoleFromRbacGroupInput = {
    roleId: Scalars['String'];
    groupId: Scalars['String'];
};
export declare type RemoveRoleFromRbacGroupBatchInput = {
    roleIdList: Array<Scalars['String']>;
    groupId: Scalars['String'];
};
export declare type AddUserToRbacGroupInput = {
    userId: Scalars['String'];
    groupId: Scalars['String'];
};
export declare type AddUserToRbacGroupBatchInput = {
    userIdList: Array<Scalars['String']>;
    groupId: Scalars['String'];
};
export declare type RemoveUserFromRbacGroupInput = {
    userId: Scalars['String'];
    groupId: Scalars['String'];
};
export declare type RemoveUserFromRbacGroupBatchInput = {
    userIdList: Array<Scalars['String']>;
    groupId: Scalars['String'];
};
export declare type CreateOrgInput = {
    rootGroupId: Scalars['String'];
    userPoolId: Scalars['String'];
    logo?: Maybe<Scalars['String']>;
};
export declare type UpdateOrgInput = {
    userPoolId: Scalars['String'];
    orgId: Scalars['String'];
    logo?: Maybe<Scalars['String']>;
};
export declare type AddOrgNodeInput = {
    orgId: Scalars['String'];
    groupId: Scalars['String'];
    parentGroupId: Scalars['String'];
};
export declare type RemoveOrgNodeInput = {
    orgId: Scalars['String'];
    groupId: Scalars['String'];
};
export declare type CreateDingTalkCorpInput = {
    userPoolId: Scalars['String'];
    corpId: Scalars['String'];
    twoWaySynchronizationOn: Scalars['Boolean'];
    appkey: Scalars['String'];
    secret: Scalars['String'];
};
export declare type CreateWechatWorkCorpInput = {
    userPoolId: Scalars['String'];
    corpId: Scalars['String'];
    twoWaySynchronizationOn: Scalars['Boolean'];
    addressBookSyncHelperSecret: Scalars['String'];
    addressBookSyncHelperToken: Scalars['String'];
    addressBookSyncHelperEncodingAESKey: Scalars['String'];
};
export declare type CreateRuleInput = {
    userPoolId: Scalars['String'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    type: RuleTypes;
    code: Scalars['String'];
    async?: Maybe<Scalars['Boolean']>;
};
export declare type UpdateRuleInput = {
    _id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    type?: Maybe<RuleTypes>;
    enabled?: Maybe<Scalars['Boolean']>;
    code?: Maybe<Scalars['String']>;
    async?: Maybe<Scalars['Boolean']>;
};
export declare type SetRuleEnvInput = {
    userPoolId: Scalars['String'];
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type RemoveRuleEnvInput = {
    userPoolId: Scalars['String'];
    key: Scalars['String'];
};
export declare type UpdateRuleOrderInput = {
    list: Array<UpdateRuleOrderItem>;
};
export declare type UpdateRuleOrderItem = {
    id: Scalars['String'];
    order: Scalars['Int'];
};
export declare type SetUserMetadataInput = {
    _id: Scalars['String'];
    key: Scalars['String'];
    value: Scalars['String'];
};
export declare type RemoveUserMetadataInput = {
    _id: Scalars['String'];
    key: Scalars['String'];
};
export declare type AuthenticationContextInput = {
    protocol: Scalars['String'];
    connection: Scalars['String'];
    ldapConfiguration?: Maybe<LdapConfigurationInput>;
};
export declare type LdapConfigurationInput = {
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
export declare type DeleteOrgInput = {
    _id: Scalars['String'];
};
export declare type AddEmailProviderVariables = Exact<{
    options?: Maybe<EmailProviderListInput>;
}>;
export declare type AddEmailProvider = {
    AddEmailProvider?: Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        image?: Maybe<string>;
        description?: Maybe<string>;
        client?: Maybe<string>;
        user?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            help?: Maybe<string>;
            value?: Maybe<string>;
            options?: Maybe<Array<Maybe<string>>>;
        }>>>;
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
export declare type AddLdapServerVariables = Exact<{
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
export declare type AddLdapServer = {
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
export declare type AddOAuthListVariables = Exact<{
    options?: Maybe<OAuthListUpdateInput>;
    fields?: Maybe<Array<Maybe<OAuthListFieldsFormUpdateInput>>>;
}>;
export declare type AddOAuthList = {
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
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            value?: Maybe<string>;
            checked?: Maybe<Array<Maybe<string>>>;
        }>>>;
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
export declare type AddSystemPricingVariables = Exact<{
    options?: Maybe<PricingFieldsInput>;
}>;
export declare type AddSystemPricing = {
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
export declare type ClearAvatarSrcVariables = Exact<{
    client?: Maybe<Scalars['String']>;
    oauth?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
}>;
export declare type ClearAvatarSrc = {
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
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            value?: Maybe<string>;
            checked?: Maybe<Array<Maybe<string>>>;
        }>>>;
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
export declare type ContinuePayVariables = Exact<{
    order: Scalars['String'];
}>;
export declare type ContinuePay = {
    ContinuePay?: Maybe<{
        code?: Maybe<number>;
        url?: Maybe<string>;
        charge?: Maybe<string>;
    }>;
};
export declare type CreateDefaultSamlIdentityProviderSettingsVariables = Exact<{
    name: Scalars['String'];
    image?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    mappings?: Maybe<AssertionMapInputType>;
}>;
export declare type CreateDefaultSamlIdentityProviderSettings = {
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
export declare type CreateOAuthProviderVariables = Exact<{
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
export declare type CreateOAuthProvider = {
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
export declare type CreateOidcAppVariables = Exact<{
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
    cas_expire?: Maybe<Scalars['String']>;
    customStyles?: Maybe<OidcProviderCustomStylesInput>;
}>;
export declare type CreateOidcApp = {
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
        cas_expire?: Maybe<string>;
        loginUrl?: Maybe<string>;
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
export declare type CreateSamlIdentityProviderVariables = Exact<{
    name: Scalars['String'];
    domain: Scalars['String'];
    clientId: Scalars['String'];
    image?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    SPMetadata?: Maybe<Scalars['String']>;
    IdPMetadata?: Maybe<Scalars['String']>;
}>;
export declare type CreateSamlIdentityProvider = {
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
export declare type CreateSamlServiceProviderVariables = Exact<{
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
export declare type CreateSamlServiceProvider = {
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
        assertionConsumeService?: Maybe<Array<Maybe<{
            binding?: Maybe<string>;
            url?: Maybe<string>;
            isDefault?: Maybe<boolean>;
        }>>>;
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
export declare type EnableSamlIdentityProviderVariables = Exact<{
    appId: Scalars['String'];
    clientId: Scalars['String'];
    enabled?: Maybe<Scalars['Boolean']>;
}>;
export declare type EnableSamlIdentityProvider = {
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
export declare type EnableSamlServiceProviderVariables = Exact<{
    appId: Scalars['String'];
    clientId: Scalars['String'];
    enabled?: Maybe<Scalars['Boolean']>;
}>;
export declare type EnableSamlServiceProvider = {
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
        assertionConsumeService?: Maybe<Array<Maybe<{
            binding?: Maybe<string>;
            url?: Maybe<string>;
            isDefault?: Maybe<boolean>;
        }>>>;
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
export declare type IncClientFlowNumberVariables = Exact<{
    user?: Maybe<Scalars['String']>;
    userInvitied?: Maybe<Scalars['String']>;
    client?: Maybe<Scalars['String']>;
    number?: Maybe<Scalars['Int']>;
}>;
export declare type IncClientFlowNumber = {
    IncClientFlowNumber?: Maybe<{
        code?: Maybe<number>;
        url?: Maybe<string>;
        charge?: Maybe<string>;
    }>;
};
export declare type LoginByLdapVariables = Exact<{
    username: Scalars['String'];
    password: Scalars['String'];
    clientId: Scalars['String'];
    browser?: Maybe<Scalars['String']>;
}>;
export declare type LoginByLdap = {
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
export declare type RemoveEmailProviderVariables = Exact<{
    _ids: Array<Maybe<Scalars['String']>>;
}>;
export declare type RemoveEmailProvider = {
    RemoveEmailProvider?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        image?: Maybe<string>;
        description?: Maybe<string>;
        client?: Maybe<string>;
        user?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            help?: Maybe<string>;
            value?: Maybe<string>;
            options?: Maybe<Array<Maybe<string>>>;
        }>>>;
        provider?: Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            image?: Maybe<string>;
            description?: Maybe<string>;
            client?: Maybe<string>;
            user?: Maybe<string>;
            status?: Maybe<boolean>;
        }>;
    }>>>;
};
export declare type RemoveLdapServerVariables = Exact<{
    ldapId: Scalars['String'];
    clientId: Scalars['String'];
}>;
export declare type RemoveLdapServer = {
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
export declare type RemoveOAuthListVariables = Exact<{
    ids?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;
export declare type RemoveOAuthList = {
    RemoveOAuthList?: Maybe<Array<Maybe<string>>>;
};
export declare type RemoveOAuthProviderVariables = Exact<{
    appId: Scalars['String'];
    clientId: Scalars['String'];
}>;
export declare type RemoveOAuthProvider = {
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
export declare type RemoveOidcAppVariables = Exact<{
    appId: Scalars['String'];
    clientId: Scalars['String'];
}>;
export declare type RemoveOidcApp = {
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
        cas_expire?: Maybe<string>;
        loginUrl?: Maybe<string>;
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
export declare type RemoveSamlIdentityProviderVariables = Exact<{
    appId: Scalars['String'];
    clientId: Scalars['String'];
}>;
export declare type RemoveSamlIdentityProvider = {
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
export declare type RemoveSamlServiceProviderVariables = Exact<{
    appId: Scalars['String'];
    clientId: Scalars['String'];
}>;
export declare type RemoveSamlServiceProvider = {
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
        assertionConsumeService?: Maybe<Array<Maybe<{
            binding?: Maybe<string>;
            url?: Maybe<string>;
            isDefault?: Maybe<boolean>;
        }>>>;
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
export declare type RevokeUserAuthorizedAppVariables = Exact<{
    appId?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['String']>;
}>;
export declare type RevokeUserAuthorizedApp = {
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
export declare type SaveEmailProviderWithClientVariables = Exact<{
    options?: Maybe<EmailProviderWithClientAddInput>;
}>;
export declare type SaveEmailProviderWithClient = {
    SaveEmailProviderWithClient?: Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            help?: Maybe<string>;
            value?: Maybe<string>;
            options?: Maybe<Array<Maybe<string>>>;
        }>>>;
        provider?: Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            image?: Maybe<string>;
            description?: Maybe<string>;
        }>;
    }>;
};
export declare type SendEmailVariables = Exact<{
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
export declare type SendEmail = {
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
export declare type SendEmailByTypeVariables = Exact<{
    user: Scalars['String'];
    type: Scalars['String'];
    client: Scalars['String'];
    receivers: Array<Maybe<Scalars['String']>>;
    meta_data?: Maybe<Scalars['String']>;
}>;
export declare type SendEmailByType = {
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
export declare type SendWebhookTestVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type SendWebhookTest = {
    SendWebhookTest?: Maybe<boolean>;
};
export declare type SetApplicationOAuthEnableOrDisableVariables = Exact<{
    client?: Maybe<Scalars['String']>;
    oauth?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
    enabled?: Maybe<Scalars['Boolean']>;
}>;
export declare type SetApplicationOAuthEnableOrDisable = {
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
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            value?: Maybe<string>;
            checked?: Maybe<Array<Maybe<string>>>;
        }>>>;
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
export declare type UpdateApplicationOAuthVariables = Exact<{
    client?: Maybe<Scalars['String']>;
    oauth?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
    alias?: Maybe<Scalars['String']>;
    fields?: Maybe<Array<Maybe<OAuthListFieldsFormUpdateInput>>>;
}>;
export declare type UpdateApplicationOAuth = {
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
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            value?: Maybe<string>;
            checked?: Maybe<Array<Maybe<string>>>;
        }>>>;
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
export declare type UpdateEmailProviderVariables = Exact<{
    options?: Maybe<EmailProviderListInput>;
}>;
export declare type UpdateEmailProvider = {
    UpdateEmailProvider?: Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        image?: Maybe<string>;
        description?: Maybe<string>;
        client?: Maybe<string>;
        user?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            help?: Maybe<string>;
            value?: Maybe<string>;
            options?: Maybe<Array<Maybe<string>>>;
        }>>>;
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
export declare type UpdateEmailTemplateVariables = Exact<{
    options: EmailTemplateInput;
}>;
export declare type UpdateEmailTemplate = {
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
export declare type UpdateEmailTemplateWithClientVariables = Exact<{
    options: EmailTemplateWithClientInput;
}>;
export declare type UpdateEmailTemplateWithClient = {
    UpdateEmailTemplateWithClient?: Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            help?: Maybe<string>;
            value?: Maybe<string>;
            options?: Maybe<Array<Maybe<string>>>;
        }>>>;
        provider?: Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            image?: Maybe<string>;
            description?: Maybe<string>;
        }>;
    }>;
};
export declare type UpdateLdapServerVariables = Exact<{
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
export declare type UpdateLdapServer = {
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
export declare type UpdateOAuthListVariables = Exact<{
    options?: Maybe<OAuthListUpdateInput>;
    fields?: Maybe<Array<Maybe<OAuthListFieldsFormUpdateInput>>>;
}>;
export declare type UpdateOAuthList = {
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
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            value?: Maybe<string>;
            checked?: Maybe<Array<Maybe<string>>>;
        }>>>;
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
export declare type UpdateOAuthProviderVariables = Exact<{
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
export declare type UpdateOAuthProvider = {
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
export declare type UpdateOidcAppVariables = Exact<{
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
    cas_expire?: Maybe<Scalars['String']>;
    customStyles?: Maybe<OidcProviderCustomStylesInput>;
}>;
export declare type UpdateOidcApp = {
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
        cas_expire?: Maybe<string>;
        loginUrl?: Maybe<string>;
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
export declare type UpdateSamlIdentityProviderVariables = Exact<{
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
export declare type UpdateSamlIdentityProvider = {
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
export declare type UpdateSamlServiceProviderVariables = Exact<{
    appId: Scalars['String'];
    name: Scalars['String'];
    domain: Scalars['String'];
    clientId: Scalars['String'];
    redirectUrl: Scalars['String'];
    loginUrl: Scalars['String'];
    logoutUrl: Scalars['String'];
    nameId: Scalars['String'];
    IdPEntityID?: Maybe<Scalars['String']>;
    assertionConsumeService?: Maybe<Array<Maybe<AssertionConsumeServiceInputType>>>;
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
export declare type UpdateSamlServiceProvider = {
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
        assertionConsumeService?: Maybe<Array<Maybe<{
            binding?: Maybe<string>;
            url?: Maybe<string>;
            isDefault?: Maybe<boolean>;
        }>>>;
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
export declare type UpdateSystemPricingVariables = Exact<{
    options?: Maybe<PricingFieldsInput>;
}>;
export declare type UpdateSystemPricing = {
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
export declare type UseDefaultEmailProviderVariables = Exact<{
    user: Scalars['String'];
    client: Scalars['String'];
}>;
export declare type UseDefaultEmailProvider = {
    UseDefaultEmailProvider?: Maybe<boolean>;
};
export declare type AddClientWebhookVariables = Exact<{
    client: Scalars['String'];
    events: Array<Scalars['String']>;
    url: Scalars['String'];
    contentType: Scalars['String'];
    enable: Scalars['Boolean'];
    secret?: Maybe<Scalars['String']>;
    isLastTimeSuccess?: Maybe<Scalars['Boolean']>;
}>;
export declare type AddClientWebhook = {
    addClientWebhook?: Maybe<{
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
    }>;
};
export declare type AddCollaboratorVariables = Exact<{
    userPoolId: Scalars['String'];
    collaboratorUserId: Scalars['String'];
    permissionDescriptors: Array<Maybe<PermissionDescriptorsInputType>>;
}>;
export declare type AddCollaborator = {
    addCollaborator?: Maybe<{
        _id?: Maybe<string>;
    }>;
};
export declare type AddGroupMetadataVariables = Exact<{
    groupId: Scalars['String'];
    key: Scalars['String'];
    value: Scalars['String'];
}>;
export declare type AddGroupMetadata = {
    addGroupMetadata: Array<{
        key: string;
        value: string;
    }>;
};
export declare type AddOrgNodeVariables = Exact<{
    input: AddOrgNodeInput;
}>;
export declare type AddOrgNode = {
    addOrgNode: {
        _id: string;
        nodes: Array<{
            _id: string;
            name: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children: Array<string>;
            root?: Maybe<boolean>;
        }>;
    };
};
export declare type AddPermissionVariables = Exact<{
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
}>;
export declare type AddPermission = {
    addPermission?: Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        affect?: Maybe<string>;
        description?: Maybe<string>;
    }>;
};
export declare type AddPermissionToRbacRoleVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: AddPermissionToRbacRoleInput;
}>;
export declare type AddPermissionToRbacRole = {
    addPermissionToRBACRole: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type AddPermissionToRbacRoleBatchVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input?: Maybe<AddPermissionToRbacRoleBatchInput>;
}>;
export declare type AddPermissionToRbacRoleBatch = {
    addPermissionToRBACRoleBatch: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type AddRoleToRbacGroupVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: AddRoleToRbacGroupInput;
}>;
export declare type AddRoleToRbacGroup = {
    addRoleToRBACGroup: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type AddRoleToRbacGroupBatchVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: AddRoleToRbacGroupBatchInput;
}>;
export declare type AddRoleToRbacGroupBatch = {
    addRoleToRBACGroupBatch: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type AddSuperAdminUserVariables = Exact<{
    options: SuperAdminUpdateInput;
}>;
export declare type AddSuperAdminUser = {
    addSuperAdminUser?: Maybe<{
        email?: Maybe<string>;
        username?: Maybe<string>;
        _id?: Maybe<string>;
        upgrade?: Maybe<boolean>;
    }>;
};
export declare type AddToInvitationVariables = Exact<{
    client: Scalars['String'];
    phone?: Maybe<Scalars['String']>;
}>;
export declare type AddToInvitation = {
    addToInvitation?: Maybe<{
        client: string;
        phone?: Maybe<string>;
        isDeleted?: Maybe<boolean>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    }>;
};
export declare type AddUserToRbacGroupVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: AddUserToRbacGroupInput;
}>;
export declare type AddUserToRbacGroup = {
    addUserToRBACGroup: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type AddUserToRbacGroupBatchVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: AddUserToRbacGroupBatchInput;
}>;
export declare type AddUserToRbacGroupBatch = {
    addUserToRBACGroupBatch: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type AssignRbacRoleToUserVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: AssignUserToRbacRoleInput;
}>;
export declare type AssignRbacRoleToUser = {
    assignRBACRoleToUser: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type AssignRbacRoleToUserBatchVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: AssignUserToRbacRoleBatchInput;
}>;
export declare type AssignRbacRoleToUserBatch = {
    assignRBACRoleToUserBatch: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type AssignUserToRoleVariables = Exact<{
    client: Scalars['String'];
    user: Scalars['String'];
    group: Scalars['String'];
}>;
export declare type AssignUserToRole = {
    assignUserToRole?: Maybe<{
        totalCount: number;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            createdAt?: Maybe<string>;
        }>>>;
    }>;
};
export declare type BindOtherOAuthVariables = Exact<{
    type: Scalars['String'];
    unionid: Scalars['String'];
    userInfo: Scalars['String'];
    client?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
}>;
export declare type BindOtherOAuth = {
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
export declare type ChangeMfaVariables = Exact<{
    enable: Scalars['Boolean'];
    userId?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
    _id?: Maybe<Scalars['String']>;
    refreshKey?: Maybe<Scalars['Boolean']>;
}>;
export declare type ChangeMfa = {
    changeMFA?: Maybe<{
        _id?: Maybe<string>;
        userId?: Maybe<string>;
        userPoolId?: Maybe<string>;
        enable?: Maybe<boolean>;
        shareKey?: Maybe<string>;
    }>;
};
export declare type ChangePasswordVariables = Exact<{
    password: Scalars['String'];
    email: Scalars['String'];
    client: Scalars['String'];
    verifyCode: Scalars['String'];
}>;
export declare type ChangePassword = {
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
        userLocation?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            when?: Maybe<string>;
            where?: Maybe<string>;
        }>>>;
        userLoginHistory?: Maybe<{
            totalCount: number;
        }>;
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
export declare type CreateAdConnectorVariables = Exact<{
    name: Scalars['String'];
    logo?: Maybe<Scalars['String']>;
    userPoolId: Scalars['String'];
}>;
export declare type CreateAdConnector = {
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
export declare type CreateCustomMfaVariables = Exact<{
    userIdInMiniLogin: Scalars['String'];
    userPoolId: Scalars['String'];
    name: Scalars['String'];
    secret: Scalars['String'];
    remark?: Maybe<Scalars['String']>;
}>;
export declare type CreateCustomMfa = {
    createCustomMFA?: Maybe<{
        _id?: Maybe<string>;
        userIdInMiniLogin?: Maybe<string>;
        remark?: Maybe<string>;
        name?: Maybe<string>;
        secret?: Maybe<string>;
        userPoolId?: Maybe<{
            _id?: Maybe<string>;
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
export declare type CreateInterConnectionVariables = Exact<{
    sourceUserPoolId: Scalars['String'];
    sourceUserId: Scalars['String'];
    targetUserPoolId: Scalars['String'];
    targetUserId: Scalars['String'];
    maxAge: Scalars['Int'];
}>;
export declare type CreateInterConnection = {
    createInterConnection?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type CreateOrgVariables = Exact<{
    input: CreateOrgInput;
}>;
export declare type CreateOrg = {
    createOrg: {
        _id: string;
        nodes: Array<{
            _id: string;
            name: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children: Array<string>;
            root?: Maybe<boolean>;
        }>;
    };
};
export declare type CreateRbacGroupVariables = Exact<{
    input: CreateRbacGroupInput;
}>;
export declare type CreateRbacGroup = {
    createRBACGroup?: Maybe<{
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    }>;
};
export declare type CreateRbacPermissionVariables = Exact<{
    input: CreateRbacPermissionInput;
}>;
export declare type CreateRbacPermission = {
    createRBACPermission?: Maybe<{
        _id: string;
        name: string;
        userPoolId: string;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        description?: Maybe<string>;
    }>;
};
export declare type CreateRbacRoleVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: CreateRbacRoleInput;
}>;
export declare type CreateRbacRole = {
    createRBACRole?: Maybe<{
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    }>;
};
export declare type CreateRoleVariables = Exact<{
    client: Scalars['String'];
    name: Scalars['String'];
    descriptions?: Maybe<Scalars['String']>;
}>;
export declare type CreateRole = {
    createRole?: Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        descriptions?: Maybe<string>;
        client?: Maybe<string>;
        permissions?: Maybe<string>;
        createdAt?: Maybe<string>;
    }>;
};
export declare type CreateRuleVariables = Exact<{
    input: CreateRuleInput;
}>;
export declare type CreateRule = {
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
export declare type CreateUserVariables = Exact<{
    userInfo: UserRegisterInput;
    invitationCode?: Maybe<Scalars['String']>;
    keepPassword?: Maybe<Scalars['Boolean']>;
}>;
export declare type CreateUser = {
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
        userLocation?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            when?: Maybe<string>;
            where?: Maybe<string>;
        }>>>;
        userLoginHistory?: Maybe<{
            totalCount: number;
        }>;
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
export declare type CreateUserWithoutAuthenticationVariables = Exact<{
    userPoolId: Scalars['String'];
    userInfo: UserRegisterInput;
    forceLogin?: Maybe<Scalars['Boolean']>;
}>;
export declare type CreateUserWithoutAuthentication = {
    createUserWithoutAuthentication: {
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
        metadata?: Maybe<string>;
    };
};
export declare type DeleteClientWebhookVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type DeleteClientWebhook = {
    deleteClientWebhook?: Maybe<{
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
    }>;
};
export declare type DeleteOrgVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type DeleteOrg = {
    deleteOrg: {
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    };
};
export declare type DeleteRbacGroupVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type DeleteRbacGroup = {
    deleteRBACGroup: {
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    };
};
export declare type DeleteRbacGroupBatchVariables = Exact<{
    idList: Array<Scalars['String']>;
}>;
export declare type DeleteRbacGroupBatch = {
    deleteRBACGroupBatch: {
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    };
};
export declare type DeleteRbacPermissionVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type DeleteRbacPermission = {
    deleteRBACPermission: {
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    };
};
export declare type DeleteRbacPermissionBatchVariables = Exact<{
    idList: Array<Scalars['String']>;
}>;
export declare type DeleteRbacPermissionBatch = {
    deleteRBACPermissionBatch: {
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    };
};
export declare type DeleteRbacRoleVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type DeleteRbacRole = {
    deleteRBACRole?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type DeleteRbacRoleBatchVariables = Exact<{
    idList: Array<Scalars['String']>;
}>;
export declare type DeleteRbacRoleBatch = {
    deleteRBACRoleBatch: {
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    };
};
export declare type DeleteRuleVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type DeleteRule = {
    deleteRule: {
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    };
};
export declare type DisableAdConnectorVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type DisableAdConnector = {
    disableAdConnector?: Maybe<boolean>;
};
export declare type DisableAdConnectorForProviderVariables = Exact<{
    providerId: Scalars['String'];
    adConnectorId: Scalars['String'];
}>;
export declare type DisableAdConnectorForProvider = {
    disableAdConnectorForProvider?: Maybe<boolean>;
};
export declare type EnableAdConnectorVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type EnableAdConnector = {
    enableAdConnector?: Maybe<boolean>;
};
export declare type EnableAdConnectorForProviderVariables = Exact<{
    providerType: ProviderType;
    providerId: Scalars['String'];
    adConnectorId: Scalars['String'];
}>;
export declare type EnableAdConnectorForProvider = {
    enableAdConnectorForProvider?: Maybe<boolean>;
};
export declare type EnablePasswordFaasVariables = Exact<{
    client: Scalars['String'];
    enable: Scalars['Boolean'];
}>;
export declare type EnablePasswordFaas = {
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
export declare type EncryptPasswordVariables = Exact<{
    password: Scalars['String'];
    client: Scalars['String'];
    isTest?: Maybe<Scalars['Boolean']>;
}>;
export declare type EncryptPassword = {
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
export declare type GenerateInvitationCodeVariables = Exact<{
    user: Scalars['String'];
    client: Scalars['String'];
}>;
export declare type GenerateInvitationCode = {
    generateInvitationCode?: Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        code?: Maybe<string>;
        createdAt?: Maybe<string>;
    }>;
};
export declare type LoginVariables = Exact<{
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
}>;
export declare type Login = {
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
        userLocation?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            when?: Maybe<string>;
            where?: Maybe<string>;
        }>>>;
        userLoginHistory?: Maybe<{
            totalCount: number;
        }>;
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
export declare type LoginByAdVariables = Exact<{
    adConnectorId: Scalars['String'];
    username: Scalars['String'];
    password: Scalars['String'];
}>;
export declare type LoginByAd = {
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
export declare type NewClientVariables = Exact<{
    client: NewUserClientInput;
}>;
export declare type NewClient = {
    newClient?: Maybe<{
        _id?: Maybe<string>;
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
        userPoolTypes?: Maybe<Array<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            example?: Maybe<string>;
        }>>;
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
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
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
export declare type OauthPasswordLoginVariables = Exact<{
    registerInClient: Scalars['String'];
    phone?: Maybe<Scalars['String']>;
    unionid?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    lastIP?: Maybe<Scalars['String']>;
    verifyCode?: Maybe<Scalars['String']>;
}>;
export declare type OauthPasswordLogin = {
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
        userLocation?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            when?: Maybe<string>;
            where?: Maybe<string>;
        }>>>;
        userLoginHistory?: Maybe<{
            totalCount: number;
        }>;
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
export declare type OrderVariables = Exact<{
    options: OrderAddInput;
}>;
export declare type Order = {
    order?: Maybe<{
        code?: Maybe<number>;
        url?: Maybe<string>;
        charge?: Maybe<string>;
    }>;
};
export declare type PasswordLessForceLoginVariables = Exact<{
    userPoolId: Scalars['String'];
    userId: Scalars['String'];
}>;
export declare type PasswordLessForceLogin = {
    passwordLessForceLogin: {
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
        metadata?: Maybe<string>;
    };
};
export declare type RecordAuthAuditVariables = Exact<{
    userPoolId: Scalars['String'];
    appType: Scalars['String'];
    appId: Scalars['String'];
    userId: Scalars['String'];
    event: Scalars['String'];
    message?: Maybe<Scalars['String']>;
}>;
export declare type RecordAuthAudit = {
    recordAuthAudit?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type RecordRequestVariables = Exact<{
    when: Scalars['String'];
    ip: Scalars['String'];
    responseTime: Scalars['Int'];
    size: Scalars['Int'];
    from?: Maybe<Scalars['String']>;
}>;
export declare type RecordRequest = {
    recordRequest?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type RefreshAdConnectorSecretVariables = Exact<{
    _id?: Maybe<Scalars['String']>;
}>;
export declare type RefreshAdConnectorSecret = {
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
export declare type RefreshAppSecretVariables = Exact<{
    client: UpdateUserClientInput;
}>;
export declare type RefreshAppSecret = {
    refreshAppSecret?: Maybe<{
        _id?: Maybe<string>;
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
        userPoolTypes?: Maybe<Array<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            example?: Maybe<string>;
        }>>;
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
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
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
export declare type RefreshSignInTokenVariables = Exact<{
    oidcAppId?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
    refreshToken: Scalars['String'];
}>;
export declare type RefreshSignInToken = {
    refreshSignInToken?: Maybe<{
        access_token?: Maybe<string>;
        id_token?: Maybe<string>;
        refresh_token?: Maybe<string>;
        scope?: Maybe<string>;
        expires_in?: Maybe<number>;
    }>;
};
export declare type RefreshThirdPartyTokenVariables = Exact<{
    userPoolId: Scalars['String'];
    userId: Scalars['String'];
}>;
export declare type RefreshThirdPartyToken = {
    refreshThirdPartyToken?: Maybe<{
        refreshSuccess?: Maybe<boolean>;
        message?: Maybe<string>;
        provider?: Maybe<string>;
        refreshToken?: Maybe<string>;
        accessToken?: Maybe<string>;
        updatedAt?: Maybe<string>;
    }>;
};
export declare type RefreshTokenVariables = Exact<{
    client: Scalars['String'];
    user: Scalars['String'];
}>;
export declare type RefreshToken = {
    refreshToken?: Maybe<{
        token?: Maybe<string>;
        iat?: Maybe<number>;
        exp?: Maybe<number>;
    }>;
};
export declare type RegisterVariables = Exact<{
    userInfo: UserRegisterInput;
    invitationCode?: Maybe<Scalars['String']>;
    keepPassword?: Maybe<Scalars['Boolean']>;
}>;
export declare type Register = {
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
        metadata?: Maybe<string>;
    }>;
};
export declare type RemoveAdConnectorVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type RemoveAdConnector = {
    removeAdConnector?: Maybe<boolean>;
};
export declare type RemoveCollaboratorVariables = Exact<{
    collaborationId: Scalars['String'];
}>;
export declare type RemoveCollaborator = {
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
        permissionDescriptors?: Maybe<Array<Maybe<{
            permissionId?: Maybe<string>;
            name?: Maybe<string>;
            operationAllow?: Maybe<number>;
        }>>>;
    }>;
};
export declare type RemoveCustomMfaVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type RemoveCustomMfa = {
    removeCustomMFA?: Maybe<{
        _id?: Maybe<string>;
        userIdInMiniLogin?: Maybe<string>;
        remark?: Maybe<string>;
        name?: Maybe<string>;
        secret?: Maybe<string>;
        userPoolId?: Maybe<{
            _id?: Maybe<string>;
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
export declare type RemoveFromInvitationVariables = Exact<{
    client: Scalars['String'];
    phone?: Maybe<Scalars['String']>;
}>;
export declare type RemoveFromInvitation = {
    removeFromInvitation?: Maybe<{
        client: string;
        phone?: Maybe<string>;
        isDeleted?: Maybe<boolean>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    }>;
};
export declare type RemoveOrgNodeVariables = Exact<{
    input: RemoveOrgNodeInput;
}>;
export declare type RemoveOrgNode = {
    removeOrgNode: {
        _id: string;
        nodes: Array<{
            _id: string;
            name: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children: Array<string>;
            root?: Maybe<boolean>;
        }>;
    };
};
export declare type RemovePermissionFromRbacRoleVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: RemovePermissionFromRbacRoleInput;
}>;
export declare type RemovePermissionFromRbacRole = {
    removePermissionFromRBACRole: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type RemovePermissionFromRbacRoleBatchVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: RemovePermissionFromRbacRoleBatchInput;
}>;
export declare type RemovePermissionFromRbacRoleBatch = {
    removePermissionFromRBACRoleBatch: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type RemoveRoleFromRbacGroupVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: RemoveRoleFromRbacGroupInput;
}>;
export declare type RemoveRoleFromRbacGroup = {
    removeRoleFromRBACGroup: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type RemoveRoleFromRbacGroupBatchVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: RemoveRoleFromRbacGroupBatchInput;
}>;
export declare type RemoveRoleFromRbacGroupBatch = {
    removeRoleFromRBACGroupBatch: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type RemoveRuleEnvVariables = Exact<{
    input: RemoveRuleEnvInput;
}>;
export declare type RemoveRuleEnv = {
    removeRuleEnv: {
        totalCount: number;
        list: Array<{
            key: string;
            value: string;
        }>;
    };
};
export declare type RemoveSuperAdminUserVariables = Exact<{
    _id: Scalars['String'];
    username: Scalars['String'];
}>;
export declare type RemoveSuperAdminUser = {
    removeSuperAdminUser?: Maybe<{
        email?: Maybe<string>;
        username?: Maybe<string>;
        _id?: Maybe<string>;
        upgrade?: Maybe<boolean>;
    }>;
};
export declare type RemoveUserClientsVariables = Exact<{
    ids?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;
export declare type RemoveUserClients = {
    removeUserClients?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
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
        userPoolTypes?: Maybe<Array<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            example?: Maybe<string>;
        }>>;
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
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
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
    }>>>;
};
export declare type RemoveUserFromGroupVariables = Exact<{
    client: Scalars['String'];
    user: Scalars['String'];
    group: Scalars['String'];
}>;
export declare type RemoveUserFromGroup = {
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
export declare type RemoveUserFromRbacGroupVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: RemoveUserFromRbacGroupInput;
}>;
export declare type RemoveUserFromRbacGroup = {
    removeUserFromRBACGroup: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type RemoveUserFromRbacGroupBatchVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: RemoveUserFromRbacGroupBatchInput;
}>;
export declare type RemoveUserFromRbacGroupBatch = {
    removeUserFromRBACGroupBatch: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type RemoveUserMetadataVariables = Exact<{
    input: RemoveUserMetadataInput;
}>;
export declare type RemoveUserMetadata = {
    removeUserMetadata: {
        totalCount: number;
        list: Array<{
            key: string;
            value: string;
        }>;
    };
};
export declare type RemoveUsersVariables = Exact<{
    ids?: Maybe<Array<Maybe<Scalars['String']>>>;
    registerInClient?: Maybe<Scalars['String']>;
    operator?: Maybe<Scalars['String']>;
}>;
export declare type RemoveUsers = {
    removeUsers?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
    }>>>;
};
export declare type ResetUserPoolFromWechatVariables = Exact<{
    client: Scalars['String'];
    registerMethod: Scalars['String'];
    limit: Scalars['Int'];
}>;
export declare type ResetUserPoolFromWechat = {
    resetUserPoolFromWechat?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type RevokeRbacRoleFromUserVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: RevokeRbacRoleFromUserInput;
}>;
export declare type RevokeRbacRoleFromUser = {
    revokeRBACRoleFromUser: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type RevokeRbacRoleFromUserBatchVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: RevokeRbacRoleFromUserBatchInput;
}>;
export declare type RevokeRbacRoleFromUserBatch = {
    revokeRBACRoleFromUserBatch: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type SendChangeEmailVerifyCodeVariables = Exact<{
    userPoolId: Scalars['String'];
    email: Scalars['String'];
}>;
export declare type SendChangeEmailVerifyCode = {
    sendChangeEmailVerifyCode?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type SendResetPasswordEmailVariables = Exact<{
    client: Scalars['String'];
    email: Scalars['String'];
}>;
export declare type SendResetPasswordEmail = {
    sendResetPasswordEmail?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type SendVerifyEmailVariables = Exact<{
    email: Scalars['String'];
    client: Scalars['String'];
    token?: Maybe<Scalars['String']>;
}>;
export declare type SendVerifyEmail = {
    sendVerifyEmail?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type SetInvitationStateVariables = Exact<{
    client: Scalars['String'];
    enablePhone?: Maybe<Scalars['Boolean']>;
}>;
export declare type SetInvitationState = {
    setInvitationState?: Maybe<{
        client: string;
        enablePhone?: Maybe<boolean>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    }>;
};
export declare type SetRuleEnvVariables = Exact<{
    input: SetRuleEnvInput;
}>;
export declare type SetRuleEnv = {
    setRuleEnv: {
        totalCount: number;
        list: Array<{
            key: string;
            value: string;
        }>;
    };
};
export declare type SetUserMetadataVariables = Exact<{
    input: SetUserMetadataInput;
}>;
export declare type SetUserMetadata = {
    setUserMetadata: {
        totalCount: number;
        list: Array<{
            key: string;
            value: string;
        }>;
    };
};
export declare type SignInVariables = Exact<{
    oidcAppId?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    unionid?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
}>;
export declare type SignIn = {
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
export declare type UnbindEmailVariables = Exact<{
    user?: Maybe<Scalars['String']>;
    client?: Maybe<Scalars['String']>;
}>;
export declare type UnbindEmail = {
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
export declare type UnbindOtherOAuthVariables = Exact<{
    type: Scalars['String'];
    client?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
}>;
export declare type UnbindOtherOAuth = {
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
export declare type UpdateAdConnectorVariables = Exact<{
    _id: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    logo?: Maybe<Scalars['String']>;
}>;
export declare type UpdateAdConnector = {
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
export declare type UpdateClientWebhookVariables = Exact<{
    id: Scalars['String'];
    events: Array<Scalars['String']>;
    url: Scalars['String'];
    contentType: Scalars['String'];
    enable: Scalars['Boolean'];
    secret?: Maybe<Scalars['String']>;
    isLastTimeSuccess?: Maybe<Scalars['Boolean']>;
}>;
export declare type UpdateClientWebhook = {
    updateClientWebhook?: Maybe<{
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
    }>;
};
export declare type UpdateCollaboratorVariables = Exact<{
    collaborationId: Scalars['String'];
    permissionDescriptors: Array<Maybe<PermissionDescriptorsInputType>>;
}>;
export declare type UpdateCollaborator = {
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
        permissionDescriptors?: Maybe<Array<Maybe<{
            permissionId?: Maybe<string>;
            name?: Maybe<string>;
            operationAllow?: Maybe<number>;
        }>>>;
    }>;
};
export declare type UpdateEmailVariables = Exact<{
    userPoolId: Scalars['String'];
    email: Scalars['String'];
    emailCode: Scalars['String'];
    oldEmail?: Maybe<Scalars['String']>;
    oldEmailCode?: Maybe<Scalars['String']>;
}>;
export declare type UpdateEmail = {
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
export declare type UpdatePasswordStrengthSettingsByUserPoolIdVariables = Exact<{
    userPoolId: Scalars['String'];
    pwdStrength?: Maybe<Scalars['Int']>;
}>;
export declare type UpdatePasswordStrengthSettingsByUserPoolId = {
    updatePasswordStrengthSettingsByUserPoolId?: Maybe<{
        userPoolId?: Maybe<string>;
        pwdStrength?: Maybe<number>;
    }>;
};
export declare type UpdatePermissionsVariables = Exact<{
    role: Scalars['String'];
    client: Scalars['String'];
    permissions?: Maybe<Scalars['String']>;
}>;
export declare type UpdatePermissions = {
    updatePermissions?: Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        descriptions?: Maybe<string>;
        client?: Maybe<string>;
        permissions?: Maybe<string>;
        createdAt?: Maybe<string>;
    }>;
};
export declare type UpdatePhoneVariables = Exact<{
    userPoolId: Scalars['String'];
    phone: Scalars['String'];
    phoneCode: Scalars['String'];
    oldPhone?: Maybe<Scalars['String']>;
    oldPhoneCode?: Maybe<Scalars['String']>;
}>;
export declare type UpdatePhone = {
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
export declare type UpdateRbacGroupVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: UpdateRbacGroupInput;
}>;
export declare type UpdateRbacGroup = {
    updateRBACGroup?: Maybe<{
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    }>;
};
export declare type UpdateRbacPermissionVariables = Exact<{
    input: UpdateRbacPermissionInput;
}>;
export declare type UpdateRbacPermission = {
    updateRBACPermission?: Maybe<{
        _id: string;
        name: string;
        userPoolId: string;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        description?: Maybe<string>;
    }>;
};
export declare type UpdateRbacRoleVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    input: UpdateRbacRoleInput;
}>;
export declare type UpdateRbacRole = {
    updateRBACRole?: Maybe<{
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    }>;
};
export declare type UpdateRoleVariables = Exact<{
    _id: Scalars['String'];
    client: Scalars['String'];
    name: Scalars['String'];
    descriptions?: Maybe<Scalars['String']>;
    permissions?: Maybe<Scalars['String']>;
}>;
export declare type UpdateRole = {
    updateRole?: Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        descriptions?: Maybe<string>;
        client?: Maybe<string>;
        permissions?: Maybe<string>;
        createdAt?: Maybe<string>;
    }>;
};
export declare type UpdateRuleVariables = Exact<{
    input: UpdateRuleInput;
}>;
export declare type UpdateRule = {
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
export declare type UpdateRuleOrderVariables = Exact<{
    input: UpdateRuleOrderInput;
}>;
export declare type UpdateRuleOrder = {
    updateRuleOrder?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type UpdateSuperAdminUserVariables = Exact<{
    options: SuperAdminUpdateInput;
}>;
export declare type UpdateSuperAdminUser = {
    updateSuperAdminUser?: Maybe<{
        email?: Maybe<string>;
        username?: Maybe<string>;
        _id?: Maybe<string>;
        upgrade?: Maybe<boolean>;
    }>;
};
export declare type UpdateUserVariables = Exact<{
    options: UserUpdateInput;
}>;
export declare type UpdateUser = {
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
export declare type UpdateUserClientVariables = Exact<{
    client: UpdateUserClientInput;
}>;
export declare type UpdateUserClient = {
    updateUserClient?: Maybe<{
        _id?: Maybe<string>;
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
        userPoolTypes?: Maybe<Array<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            example?: Maybe<string>;
        }>>;
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
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
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
export declare type VerifyResetPasswordVerifyCodeVariables = Exact<{
    verifyCode: Scalars['String'];
    email: Scalars['String'];
    client: Scalars['String'];
}>;
export declare type VerifyResetPasswordVerifyCode = {
    verifyResetPasswordVerifyCode?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type GetOidcAppInfoVariables = Exact<{
    appId: Scalars['String'];
}>;
export declare type GetOidcAppInfo = {
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
        cas_expire?: Maybe<string>;
        loginUrl?: Maybe<string>;
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
export declare type GetOidcAppListVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type GetOidcAppList = {
    GetOIDCAppList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
            cas_expire?: Maybe<string>;
            loginUrl?: Maybe<string>;
        }>>>;
    }>;
};
export declare type GetSamlIdentityProviderInfoVariables = Exact<{
    appId: Scalars['String'];
}>;
export declare type GetSamlIdentityProviderInfo = {
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
export declare type GetSamlIdentityProviderListVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type GetSamlIdentityProviderList = {
    GetSAMLIdentityProviderList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type GetSamlServiceProviderInfoVariables = Exact<{
    appId: Scalars['String'];
}>;
export declare type GetSamlServiceProviderInfo = {
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
        assertionConsumeService?: Maybe<Array<Maybe<{
            binding?: Maybe<string>;
            url?: Maybe<string>;
            isDefault?: Maybe<boolean>;
        }>>>;
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
export declare type GetSamlServiceProviderListVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type GetSamlServiceProviderList = {
    GetSAMLServiceProviderList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type GetUserAuthorizedAppsVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type GetUserAuthorizedApps = {
    GetUserAuthorizedApps?: Maybe<{
        totalCount?: Maybe<number>;
        OAuthApps?: Maybe<Array<Maybe<{
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
        }>>>;
        OIDCApps?: Maybe<Array<Maybe<{
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
            cas_expire?: Maybe<string>;
            loginUrl?: Maybe<string>;
        }>>>;
    }>;
};
export declare type PreviewEmailByTypeVariables = Exact<{
    type: Scalars['String'];
    client: Scalars['String'];
    meta_data?: Maybe<Scalars['String']>;
}>;
export declare type PreviewEmailByType = {
    PreviewEmailByType?: Maybe<string>;
};
export declare type QueryAppInfoByAppIdVariables = Exact<{
    appId?: Maybe<Scalars['String']>;
    responseType?: Maybe<Scalars['String']>;
    redirectUrl?: Maybe<Scalars['String']>;
}>;
export declare type QueryAppInfoByAppId = {
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
export declare type QueryAppInfoByDomainVariables = Exact<{
    domain?: Maybe<Scalars['String']>;
}>;
export declare type QueryAppInfoByDomain = {
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
export declare type QueryClientHasLdapConfigsVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
}>;
export declare type QueryClientHasLdapConfigs = {
    QueryClientHasLDAPConfigs?: Maybe<{
        result?: Maybe<boolean>;
    }>;
};
export declare type QueryClientIdByAppIdVariables = Exact<{
    appId?: Maybe<Scalars['String']>;
}>;
export declare type QueryClientIdByAppId = {
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
export declare type QueryDefaultSamlIdentityProviderSettingsListVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type QueryDefaultSamlIdentityProviderSettingsList = {
    QueryDefaultSAMLIdentityProviderSettingsList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            image?: Maybe<string>;
            description?: Maybe<string>;
            isDeleted?: Maybe<boolean>;
        }>>>;
    }>;
};
export declare type QueryLdapServerListVariables = Exact<{
    clientId: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type QueryLdapServerList = {
    QueryLDAPServerList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type QueryOidcAppInfoByAppIdVariables = Exact<{
    appId?: Maybe<Scalars['String']>;
    responseType?: Maybe<Scalars['String']>;
    redirectUrl?: Maybe<Scalars['String']>;
}>;
export declare type QueryOidcAppInfoByAppId = {
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
        cas_expire?: Maybe<string>;
        loginUrl?: Maybe<string>;
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
export declare type QueryOidcAppInfoByDomainVariables = Exact<{
    domain?: Maybe<Scalars['String']>;
}>;
export declare type QueryOidcAppInfoByDomain = {
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
        cas_expire?: Maybe<string>;
        loginUrl?: Maybe<string>;
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
export declare type QuerySamlIdentityProviderInfoByAppIdVariables = Exact<{
    appId?: Maybe<Scalars['String']>;
}>;
export declare type QuerySamlIdentityProviderInfoByAppId = {
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
export declare type QuerySamlIdentityProviderInfoByDomainVariables = Exact<{
    domain?: Maybe<Scalars['String']>;
}>;
export declare type QuerySamlIdentityProviderInfoByDomain = {
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
export declare type QuerySamlServiceProviderInfoByAppIdVariables = Exact<{
    appId: Scalars['String'];
}>;
export declare type QuerySamlServiceProviderInfoByAppId = {
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
        assertionConsumeService?: Maybe<Array<Maybe<{
            binding?: Maybe<string>;
            url?: Maybe<string>;
            isDefault?: Maybe<boolean>;
        }>>>;
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
export declare type QuerySamlServiceProviderInfoByDomainVariables = Exact<{
    domain: Scalars['String'];
}>;
export declare type QuerySamlServiceProviderInfoByDomain = {
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
        assertionConsumeService?: Maybe<Array<Maybe<{
            binding?: Maybe<string>;
            url?: Maybe<string>;
            isDefault?: Maybe<boolean>;
        }>>>;
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
export declare type ReadEmailProviderVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
}>;
export declare type ReadEmailProvider = {
    ReadEmailProvider?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        image?: Maybe<string>;
        description?: Maybe<string>;
        client?: Maybe<string>;
        user?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            help?: Maybe<string>;
            value?: Maybe<string>;
            options?: Maybe<Array<Maybe<string>>>;
        }>>>;
        provider?: Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            image?: Maybe<string>;
            description?: Maybe<string>;
            client?: Maybe<string>;
            user?: Maybe<string>;
            status?: Maybe<boolean>;
        }>;
    }>>>;
};
export declare type ReadEmailProviderByClientAndNameVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
}>;
export declare type ReadEmailProviderByClientAndName = {
    ReadEmailProviderByClientAndName?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            help?: Maybe<string>;
            value?: Maybe<string>;
            options?: Maybe<Array<Maybe<string>>>;
        }>>>;
        provider?: Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            image?: Maybe<string>;
            description?: Maybe<string>;
        }>;
    }>>>;
};
export declare type ReadEmailProviderWithClientVariables = Exact<{
    [key: string]: never;
}>;
export declare type ReadEmailProviderWithClient = {
    ReadEmailProviderWithClient?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        status?: Maybe<boolean>;
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            help?: Maybe<string>;
            value?: Maybe<string>;
            options?: Maybe<Array<Maybe<string>>>;
        }>>>;
        provider?: Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            image?: Maybe<string>;
            description?: Maybe<string>;
        }>;
    }>>>;
};
export declare type ReadEmailSentListVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<Scalars['String']>;
}>;
export declare type ReadEmailSentList = {
    ReadEmailSentList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            subject?: Maybe<string>;
            content?: Maybe<string>;
            sender?: Maybe<string>;
            receivers?: Maybe<Array<Maybe<string>>>;
            createdAt?: Maybe<string>;
        }>>>;
    }>;
};
export declare type ReadEmailSentListByClientVariables = Exact<{
    client: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type ReadEmailSentListByClient = {
    ReadEmailSentListByClient?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type ReadEmailTemplateByClientAndTypeVariables = Exact<{
    type: Scalars['String'];
    client: Scalars['String'];
}>;
export declare type ReadEmailTemplateByClientAndType = {
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
export declare type ReadEmailTemplatesByClientVariables = Exact<{
    clientId: Scalars['String'];
}>;
export declare type ReadEmailTemplatesByClient = {
    ReadEmailTemplatesByClient?: Maybe<Array<Maybe<{
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
    }>>>;
};
export declare type ReadEmailTemplatesBySystemVariables = Exact<{
    [key: string]: never;
}>;
export declare type ReadEmailTemplatesBySystem = {
    ReadEmailTemplatesBySystem?: Maybe<Array<Maybe<{
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
    }>>>;
};
export declare type ReadOauthListVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
    dontGetURL?: Maybe<Scalars['Boolean']>;
    useGuard?: Maybe<Scalars['Boolean']>;
}>;
export declare type ReadOauthList = {
    ReadOauthList?: Maybe<Array<Maybe<{
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
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            value?: Maybe<string>;
            checked?: Maybe<Array<Maybe<string>>>;
        }>>>;
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
    }>>>;
};
export declare type ReadOrdersVariables = Exact<{
    user?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type ReadOrders = {
    ReadOrders?: Maybe<{
        totalCount: number;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type ReadSamlspListVariables = Exact<{
    clientId: Scalars['String'];
}>;
export declare type ReadSamlspList = {
    ReadSAMLSPList?: Maybe<Array<Maybe<{
        providerName?: Maybe<string>;
        url?: Maybe<string>;
        logo?: Maybe<string>;
    }>>>;
};
export declare type ReadSystemPricingVariables = Exact<{
    [key: string]: never;
}>;
export declare type ReadSystemPricing = {
    ReadSystemPricing?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
        type?: Maybe<string>;
        startNumber?: Maybe<number>;
        freeNumber?: Maybe<number>;
        startPrice?: Maybe<number>;
        maxNumber?: Maybe<number>;
        d?: Maybe<number>;
        features?: Maybe<Array<Maybe<string>>>;
    }>>>;
};
export declare type ReadUserPricingVariables = Exact<{
    userId?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
}>;
export declare type ReadUserPricing = {
    ReadUserPricing?: Maybe<{
        user?: Maybe<string>;
        client?: Maybe<string>;
        isFree?: Maybe<boolean>;
        freeNumber?: Maybe<number>;
        pricing?: Maybe<{
            number?: Maybe<number>;
        }>;
    }>;
};
export declare type TestLdapServerVariables = Exact<{
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
export declare type TestLdapServer = {
    TestLDAPServer?: Maybe<{
        result?: Maybe<boolean>;
    }>;
};
export declare type TestLdapUserVariables = Exact<{
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
export declare type TestLdapUser = {
    TestLDAPUser?: Maybe<{
        result?: Maybe<boolean>;
    }>;
};
export declare type AdConnectorByProviderVariables = Exact<{
    providerId: Scalars['String'];
    providerType: ProviderType;
}>;
export declare type AdConnectorByProvider = {
    adConnectorByProvider?: Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        logo?: Maybe<string>;
        status?: Maybe<boolean>;
    }>;
};
export declare type AdConnectorListVariables = Exact<{
    userPoolId: Scalars['String'];
    providerType?: Maybe<ProviderType>;
}>;
export declare type AdConnectorList = {
    adConnectorList?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        secret?: Maybe<string>;
        salt?: Maybe<string>;
        logo?: Maybe<string>;
        enabled?: Maybe<boolean>;
        userPoolId?: Maybe<string>;
        status?: Maybe<boolean>;
        createdAt?: Maybe<string>;
    }>>>;
};
export declare type BindedOAuthListVariables = Exact<{
    client: Scalars['String'];
    user?: Maybe<Scalars['String']>;
}>;
export declare type BindedOAuthList = {
    bindedOAuthList?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
        user?: Maybe<string>;
        client?: Maybe<string>;
        type?: Maybe<string>;
        unionid?: Maybe<string>;
        userInfo?: Maybe<string>;
        createdAt?: Maybe<string>;
    }>>>;
};
export declare type CheckAdConnectorStatusVariables = Exact<{
    adConnectorId: Scalars['String'];
}>;
export declare type CheckAdConnectorStatus = {
    checkAdConnectorStatus?: Maybe<boolean>;
};
export declare type CheckIsReservedDomainVariables = Exact<{
    domainValue: Scalars['String'];
}>;
export declare type CheckIsReservedDomain = {
    checkIsReservedDomain?: Maybe<{
        domainValue?: Maybe<string>;
        isReserved?: Maybe<boolean>;
    }>;
};
export declare type CheckLoginStatusVariables = Exact<{
    token?: Maybe<Scalars['String']>;
}>;
export declare type CheckLoginStatus = {
    checkLoginStatus?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
        token?: Maybe<{
            iat?: Maybe<number>;
            exp?: Maybe<number>;
        }>;
    }>;
};
export declare type CheckPhoneCodeVariables = Exact<{
    userPoolId: Scalars['String'];
    phone: Scalars['String'];
    phoneCode: Scalars['String'];
}>;
export declare type CheckPhoneCode = {
    checkPhoneCode?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type ClientVariables = Exact<{
    id: Scalars['String'];
    userId?: Maybe<Scalars['String']>;
    fromAdmin?: Maybe<Scalars['Boolean']>;
}>;
export declare type Client = {
    client?: Maybe<{
        _id?: Maybe<string>;
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
        userPoolTypes?: Maybe<Array<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            example?: Maybe<string>;
        }>>;
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
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
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
export declare type ClientRolesVariables = Exact<{
    client: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type ClientRoles = {
    clientRoles?: Maybe<{
        totalCount: number;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            descriptions?: Maybe<string>;
            client?: Maybe<string>;
            permissions?: Maybe<string>;
            createdAt?: Maybe<string>;
        }>>>;
    }>;
};
export declare type DecodeJwtTokenVariables = Exact<{
    token?: Maybe<Scalars['String']>;
}>;
export declare type DecodeJwtToken = {
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
export declare type EmailDomainTopNListVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type EmailDomainTopNList = {
    emailDomainTopNList?: Maybe<Array<Maybe<{
        domain?: Maybe<string>;
        count?: Maybe<number>;
    }>>>;
};
export declare type FindClientsByIdArrayVariables = Exact<{
    clientsId?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;
export declare type FindClientsByIdArray = {
    findClientsByIdArray?: Maybe<{
        totalCount: number;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            createdAt?: Maybe<string>;
            usersCount?: Maybe<number>;
        }>>>;
    }>;
};
export declare type GetAccessTokenByAppSecretVariables = Exact<{
    secret?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
    retUserId?: Maybe<Scalars['Boolean']>;
    timestamp?: Maybe<Scalars['String']>;
    signature?: Maybe<Scalars['String']>;
    nonce?: Maybe<Scalars['Int']>;
}>;
export declare type GetAccessTokenByAppSecret = {
    getAccessTokenByAppSecret?: Maybe<string>;
};
export declare type GetAllWebhooksVariables = Exact<{
    client: Scalars['String'];
}>;
export declare type GetAllWebhooks = {
    getAllWebhooks?: Maybe<Array<Maybe<{
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
    }>>>;
};
export declare type GetAppSecretByClientIdVariables = Exact<{
    token?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
}>;
export declare type GetAppSecretByClientId = {
    getAppSecretByClientId?: Maybe<{
        secret?: Maybe<string>;
        clientId?: Maybe<string>;
    }>;
};
export declare type GetClientWhenSdkInitVariables = Exact<{
    secret?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
    retUserId?: Maybe<Scalars['Boolean']>;
    timestamp?: Maybe<Scalars['String']>;
    signature?: Maybe<Scalars['String']>;
    nonce?: Maybe<Scalars['Int']>;
}>;
export declare type GetClientWhenSdkInit = {
    getClientWhenSdkInit?: Maybe<{
        accessToken?: Maybe<string>;
        clientInfo?: Maybe<{
            _id?: Maybe<string>;
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
export declare type GetCustomMfaVariables = Exact<{
    userIdInMiniLogin: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type GetCustomMfa = {
    getCustomMFA?: Maybe<{
        total?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            userIdInMiniLogin?: Maybe<string>;
            remark?: Maybe<string>;
            name?: Maybe<string>;
            secret?: Maybe<string>;
        }>>>;
    }>;
};
export declare type GetOAuthedAppInfoVariables = Exact<{
    appId: Scalars['String'];
}>;
export declare type GetOAuthedAppInfo = {
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
export declare type GetOAuthedAppListVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type GetOAuthedAppList = {
    getOAuthedAppList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type GetUserLoginAreaStatisticOfClientVariables = Exact<{
    userPool: Scalars['String'];
    start?: Maybe<Scalars['String']>;
    end?: Maybe<Scalars['String']>;
}>;
export declare type GetUserLoginAreaStatisticOfClient = {
    getUserLoginAreaStatisticOfClient?: Maybe<string>;
};
export declare type GetUserPoolSettingsVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type GetUserPoolSettings = {
    getUserPoolSettings?: Maybe<{
        _id?: Maybe<string>;
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
        userPoolTypes?: Maybe<Array<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            example?: Maybe<string>;
        }>>;
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
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
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
export declare type GetWebhookDetailVariables = Exact<{
    client: Scalars['String'];
}>;
export declare type GetWebhookDetail = {
    getWebhookDetail?: Maybe<{
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
    }>;
};
export declare type GetWebhookLogDetailVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type GetWebhookLogDetail = {
    getWebhookLogDetail?: Maybe<{
        _id: string;
        webhook: string;
        client: string;
        event: string;
        errorMessage?: Maybe<string>;
        when?: Maybe<string>;
        request?: Maybe<{
            headers?: Maybe<string>;
            payload?: Maybe<string>;
        }>;
        response?: Maybe<{
            headers?: Maybe<string>;
            body?: Maybe<string>;
            statusCode?: Maybe<number>;
        }>;
    }>;
};
export declare type GetWebhookLogsVariables = Exact<{
    webhook: Scalars['String'];
}>;
export declare type GetWebhookLogs = {
    getWebhookLogs?: Maybe<Array<Maybe<{
        _id: string;
        webhook: string;
        client: string;
        event: string;
        errorMessage?: Maybe<string>;
        when?: Maybe<string>;
        request?: Maybe<{
            headers?: Maybe<string>;
            payload?: Maybe<string>;
        }>;
        response?: Maybe<{
            headers?: Maybe<string>;
            body?: Maybe<string>;
            statusCode?: Maybe<number>;
        }>;
    }>>>;
};
export declare type GetWebhookSettingOptionsVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetWebhookSettingOptions = {
    getWebhookSettingOptions?: Maybe<{
        webhookEvents: Array<Maybe<{
            name: string;
            label: string;
            description?: Maybe<string>;
        }>>;
        contentTypes: Array<Maybe<{
            name: string;
            label: string;
        }>>;
    }>;
};
export declare type InterConnectionsVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type InterConnections = {
    interConnections: Array<{
        sourceUserId: string;
        sourceUserPoolId: string;
        targetUserId: string;
        targetUserPoolId: string;
        enabled: boolean;
        expiresdAt?: Maybe<string>;
    }>;
};
export declare type IsAdConnectorAliveVariables = Exact<{
    adConnectorId?: Maybe<Scalars['String']>;
}>;
export declare type IsAdConnectorAlive = {
    isAdConnectorAlive?: Maybe<{
        isAlive?: Maybe<boolean>;
    }>;
};
export declare type IsAppAuthorizedByUserVariables = Exact<{
    userId?: Maybe<Scalars['String']>;
    appId?: Maybe<Scalars['String']>;
}>;
export declare type IsAppAuthorizedByUser = {
    isAppAuthorizedByUser?: Maybe<{
        authorized?: Maybe<boolean>;
    }>;
};
export declare type IsClientBelongToUserVariables = Exact<{
    userId?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
    permissionDescriptors?: Maybe<Array<Maybe<PermissionDescriptorsListInputType>>>;
}>;
export declare type IsClientBelongToUser = {
    isClientBelongToUser?: Maybe<boolean>;
};
export declare type IsClientOfUserVariables = Exact<{
    email?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
}>;
export declare type IsClientOfUser = {
    isClientOfUser?: Maybe<boolean>;
};
export declare type IsDomainAvaliableVariables = Exact<{
    domain: Scalars['String'];
}>;
export declare type IsDomainAvaliable = {
    isDomainAvaliable?: Maybe<boolean>;
};
export declare type IsLoginExpiredVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type IsLoginExpired = {
    isLoginExpired?: Maybe<boolean>;
};
export declare type IsRootNodeOfOrgVariables = Exact<{
    input: IsRootNodeOfOrgInput;
}>;
export declare type IsRootNodeOfOrg = {
    isRootNodeOfOrg?: Maybe<boolean>;
};
export declare type IsUserInGroupVariables = Exact<{
    groupId: Scalars['String'];
    userId: Scalars['String'];
}>;
export declare type IsUserInGroup = {
    isUserInGroup?: Maybe<boolean>;
};
export declare type LoginCountVariables = Exact<{
    userId?: Maybe<Scalars['String']>;
    clientId?: Maybe<Scalars['String']>;
    month?: Maybe<Scalars['String']>;
}>;
export declare type LoginCount = {
    loginCount?: Maybe<{
        _id?: Maybe<string>;
        client?: Maybe<string>;
        count?: Maybe<number>;
        month?: Maybe<string>;
        isError?: Maybe<boolean>;
        totalNumber?: Maybe<number>;
    }>;
};
export declare type LoginHotDotPicDataVariables = Exact<{
    client?: Maybe<Scalars['String']>;
}>;
export declare type LoginHotDotPicData = {
    loginHotDotPicData?: Maybe<{
        list?: Maybe<Array<Maybe<Array<Maybe<string>>>>>;
    }>;
};
export declare type NotBindOAuthListVariables = Exact<{
    client?: Maybe<Scalars['String']>;
    user?: Maybe<Scalars['String']>;
}>;
export declare type NotBindOAuthList = {
    notBindOAuthList?: Maybe<Array<Maybe<{
        type?: Maybe<string>;
        oAuthUrl?: Maybe<string>;
        image?: Maybe<string>;
        name?: Maybe<string>;
        binded?: Maybe<boolean>;
    }>>>;
};
export declare type OrgVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type Org = {
    org: {
        _id: string;
        nodes: Array<{
            _id: string;
            name: string;
            description?: Maybe<string>;
            createdAt?: Maybe<string>;
            updatedAt?: Maybe<string>;
            children: Array<string>;
            root?: Maybe<boolean>;
        }>;
    };
};
export declare type OrgChildrenNodesVariables = Exact<{
    input: OrgChildrenNodesInput;
}>;
export declare type OrgChildrenNodes = {
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
export declare type OrgNodeUserListVariables = Exact<{
    orgId: Scalars['String'];
    nodeId: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    includeChildrenNodes?: Maybe<Scalars['Boolean']>;
}>;
export declare type OrgNodeUserList = {
    orgNodeUserList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type OrgRootNodeVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    _id: Scalars['String'];
}>;
export declare type OrgRootNode = {
    orgRootNode: {
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        roles?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    };
};
export declare type OrgsVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type Orgs = {
    orgs: {
        totalCount: number;
        list: Array<{
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
            }>;
        }>;
    };
};
export declare type PlatformUserGrowthTrendVariables = Exact<{
    today?: Maybe<Scalars['String']>;
}>;
export declare type PlatformUserGrowthTrend = {
    platformUserGrowthTrend?: Maybe<Array<Maybe<{
        day?: Maybe<string>;
        count?: Maybe<number>;
    }>>>;
};
export declare type PreviewEmailTemplateVariables = Exact<{
    type?: Maybe<Scalars['String']>;
    client?: Maybe<Scalars['String']>;
}>;
export declare type PreviewEmailTemplate = {
    previewEmailTemplate?: Maybe<{
        message?: Maybe<string>;
        code?: Maybe<number>;
        status?: Maybe<boolean>;
    }>;
};
export declare type ProviderListByAdConnectorVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type ProviderListByAdConnector = {
    providerListByADConnector?: Maybe<Array<Maybe<{
        providerType: string;
        providerId: string;
        userPoolId: string;
        adConnectorId: string;
    }>>>;
};
export declare type QiNiuUploadTokenVariables = Exact<{
    type?: Maybe<Scalars['String']>;
}>;
export declare type QiNiuUploadToken = {
    qiNiuUploadToken?: Maybe<string>;
};
export declare type QpsByTimeVariables = Exact<{
    startTime?: Maybe<Scalars['String']>;
    endTime?: Maybe<Scalars['String']>;
    currentTime?: Maybe<Scalars['String']>;
}>;
export declare type QpsByTime = {
    qpsByTime?: Maybe<Array<Maybe<{
        qps?: Maybe<number>;
        time?: Maybe<string>;
    }>>>;
};
export declare type QueryAuthAuditRecordsVariables = Exact<{
    userPoolId: Scalars['String'];
    sortBy?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type QueryAuthAuditRecords = {
    queryAuthAuditRecords?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            userPoolId?: Maybe<string>;
            appType?: Maybe<string>;
            appId?: Maybe<string>;
            event?: Maybe<string>;
            userId?: Maybe<string>;
            createdAt?: Maybe<string>;
        }>>>;
    }>;
};
export declare type QueryAuthorizedUserPoolVariables = Exact<{
    unionid?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    openid?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type QueryAuthorizedUserPool = {
    queryAuthorizedUserPool?: Maybe<{
        total?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            userId?: Maybe<string>;
        }>>>;
    }>;
};
export declare type QueryClientVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type QueryClient = {
    queryClient?: Maybe<{
        _id?: Maybe<string>;
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
        userPoolTypes?: Maybe<Array<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            description?: Maybe<string>;
            image?: Maybe<string>;
            example?: Maybe<string>;
        }>>;
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
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
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
export declare type QueryCollaborationByUserPoolIdAndUserIdVariables = Exact<{
    userId: Scalars['String'];
    userPoolId: Scalars['String'];
}>;
export declare type QueryCollaborationByUserPoolIdAndUserId = {
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
        permissionDescriptors?: Maybe<Array<Maybe<{
            permissionId?: Maybe<string>;
            name?: Maybe<string>;
            operationAllow?: Maybe<number>;
        }>>>;
    }>;
};
export declare type QueryCollaborativeUserPoolByUserIdVariables = Exact<{
    userId: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type QueryCollaborativeUserPoolByUserId = {
    queryCollaborativeUserPoolByUserId?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            createdAt?: Maybe<string>;
        }>>>;
    }>;
};
export declare type QueryCollaboratorPermissionsVariables = Exact<{
    userId?: Maybe<Scalars['String']>;
    collaborationId?: Maybe<Scalars['String']>;
}>;
export declare type QueryCollaboratorPermissions = {
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
        list?: Maybe<Array<Maybe<{
            permissionId?: Maybe<string>;
            name?: Maybe<string>;
            operationAllow?: Maybe<number>;
        }>>>;
    }>;
};
export declare type QueryCollaboratorsByUserPoolIdVariables = Exact<{
    userPoolId: Scalars['String'];
    count?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
}>;
export declare type QueryCollaboratorsByUserPoolId = {
    queryCollaboratorsByUserPoolId?: Maybe<{
        collaborationId?: Maybe<string>;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            createdAt?: Maybe<string>;
        }>>>;
    }>;
};
export declare type QueryInvitationVariables = Exact<{
    client: Scalars['String'];
}>;
export declare type QueryInvitation = {
    queryInvitation?: Maybe<Array<Maybe<{
        client: string;
        phone?: Maybe<string>;
        isDeleted?: Maybe<boolean>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    }>>>;
};
export declare type QueryInvitationStateVariables = Exact<{
    client: Scalars['String'];
}>;
export declare type QueryInvitationState = {
    queryInvitationState?: Maybe<{
        client: string;
        enablePhone?: Maybe<boolean>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    }>;
};
export declare type QueryMfaVariables = Exact<{
    _id?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['String']>;
    userPoolId?: Maybe<Scalars['String']>;
}>;
export declare type QueryMfa = {
    queryMFA?: Maybe<{
        _id?: Maybe<string>;
        userId?: Maybe<string>;
        userPoolId?: Maybe<string>;
        enable?: Maybe<boolean>;
        shareKey?: Maybe<string>;
    }>;
};
export declare type QueryOperationLogsVariables = Exact<{
    userPoolId: Scalars['String'];
    coll: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type QueryOperationLogs = {
    queryOperationLogs?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type QueryPasswordFaasEnabledVariables = Exact<{
    client: Scalars['String'];
}>;
export declare type QueryPasswordFaasEnabled = {
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
export declare type QueryPasswordStrengthSettingsByUserPoolIdVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type QueryPasswordStrengthSettingsByUserPoolId = {
    queryPasswordStrengthSettingsByUserPoolId?: Maybe<{
        userPoolId?: Maybe<string>;
        pwdStrength?: Maybe<number>;
    }>;
};
export declare type QueryPermissionListVariables = Exact<{
    [key: string]: never;
}>;
export declare type QueryPermissionList = {
    queryPermissionList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            affect?: Maybe<string>;
            description?: Maybe<string>;
        }>>>;
    }>;
};
export declare type QueryProviderInfoByAppIdVariables = Exact<{
    appId?: Maybe<Scalars['String']>;
}>;
export declare type QueryProviderInfoByAppId = {
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
export declare type QueryProviderInfoByDomainVariables = Exact<{
    domain?: Maybe<Scalars['String']>;
}>;
export declare type QueryProviderInfoByDomain = {
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
export declare type QueryRbacGroupUserListVariables = Exact<{
    _id: Scalars['String'];
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type QueryRbacGroupUserList = {
    rbacGroup?: Maybe<{
        users?: Maybe<{
            totalCount?: Maybe<number>;
            list?: Maybe<Array<Maybe<{
                _id?: Maybe<string>;
                unionid?: Maybe<string>;
                email?: Maybe<string>;
                emailVerified?: Maybe<boolean>;
                username?: Maybe<string>;
                nickname?: Maybe<string>;
                company?: Maybe<string>;
                photo?: Maybe<string>;
                phone?: Maybe<string>;
                browser?: Maybe<string>;
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
                metadata?: Maybe<string>;
            }>>>;
        }>;
    }>;
};
export declare type QueryRoleByUserIdVariables = Exact<{
    user: Scalars['String'];
    client: Scalars['String'];
}>;
export declare type QueryRoleByUserId = {
    queryRoleByUserId?: Maybe<{
        totalCount: number;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            createdAt?: Maybe<string>;
        }>>>;
    }>;
};
export declare type QuerySmsSendCountVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type QuerySmsSendCount = {
    querySMSSendCount?: Maybe<{
        count?: Maybe<number>;
        limitCount?: Maybe<number>;
    }>;
};
export declare type QuerySystemOAuthSettingVariables = Exact<{
    [key: string]: never;
}>;
export declare type QuerySystemOAuthSetting = {
    querySystemOAuthSetting?: Maybe<Array<Maybe<{
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
        fields?: Maybe<Array<Maybe<{
            label?: Maybe<string>;
            type?: Maybe<string>;
            placeholder?: Maybe<string>;
            value?: Maybe<string>;
            checked?: Maybe<Array<Maybe<string>>>;
        }>>>;
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
    }>>>;
};
export declare type QueryUserPoolCommonInfoVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type QueryUserPoolCommonInfo = {
    queryUserPoolCommonInfo?: Maybe<{
        _id: string;
        changePhoneStrategy?: Maybe<{
            verifyOldPhone?: Maybe<boolean>;
        }>;
        changeEmailStrategy?: Maybe<{
            verifyOldEmail?: Maybe<boolean>;
        }>;
    }>;
};
export declare type RbacGroupListVariables = Exact<{
    userPoolId: Scalars['String'];
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type RbacGroupList = {
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
export declare type RbacPermissionVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type RbacPermission = {
    rbacPermission?: Maybe<{
        _id: string;
        name: string;
        userPoolId: string;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        description?: Maybe<string>;
    }>;
};
export declare type RbacPermissionListVariables = Exact<{
    userPoolId: Scalars['String'];
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type RbacPermissionList = {
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
export declare type RbacRoleVariables = Exact<{
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    _id: Scalars['String'];
}>;
export declare type RbacRole = {
    rbacRole?: Maybe<{
        _id: string;
        userPoolId: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
        permissions?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
        users?: Maybe<{
            totalCount?: Maybe<number>;
        }>;
    }>;
};
export declare type RbacRoleListVariables = Exact<{
    userPoolId: Scalars['String'];
    sortBy?: Maybe<SortByEnum>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type RbacRoleList = {
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
export declare type RecentServiceCallVariables = Exact<{
    today?: Maybe<Scalars['String']>;
}>;
export declare type RecentServiceCall = {
    recentServiceCall?: Maybe<{
        userService?: Maybe<Array<Maybe<{
            day?: Maybe<string>;
            count?: Maybe<number>;
        }>>>;
        emailService?: Maybe<Array<Maybe<{
            day?: Maybe<string>;
            count?: Maybe<number>;
        }>>>;
        oAuthService?: Maybe<Array<Maybe<{
            day?: Maybe<string>;
            count?: Maybe<number>;
        }>>>;
        payService?: Maybe<Array<Maybe<{
            day?: Maybe<string>;
            count?: Maybe<number>;
        }>>>;
    }>;
};
export declare type RegisterEveryDayCountVariables = Exact<{
    client?: Maybe<Scalars['String']>;
}>;
export declare type RegisterEveryDayCount = {
    registerEveryDayCount?: Maybe<{
        list?: Maybe<Array<Maybe<Array<Maybe<string>>>>>;
    }>;
};
export declare type RegisterMethodTopListVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type RegisterMethodTopList = {
    registerMethodTopList?: Maybe<Array<Maybe<{
        method?: Maybe<string>;
        count?: Maybe<number>;
    }>>>;
};
export declare type RequestListVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type RequestList = {
    requestList?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            when?: Maybe<string>;
            where?: Maybe<string>;
            ip?: Maybe<string>;
            size?: Maybe<number>;
            responseTime?: Maybe<number>;
            service?: Maybe<string>;
        }>>>;
    }>;
};
export declare type RuleByIdVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type RuleById = {
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
export declare type RuleEnvVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type RuleEnv = {
    ruleEnv: {
        totalCount: number;
        list: Array<{
            key: string;
            value: string;
        }>;
    };
};
export declare type RulesVariables = Exact<{
    userPoolId: Scalars['String'];
}>;
export declare type Rules = {
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
export declare type SearchOrgNodesVariables = Exact<{
    orgId: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    metadata?: Maybe<Array<KeyValuePair>>;
}>;
export declare type SearchOrgNodes = {
    searchOrgNodes: Array<{
        _id: string;
        name: string;
        description?: Maybe<string>;
        createdAt?: Maybe<string>;
        updatedAt?: Maybe<string>;
    }>;
};
export declare type SearchUserVariables = Exact<{
    type: Scalars['String'];
    value: Scalars['String'];
    registerInClient: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type SearchUser = {
    searchUser?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type SearchUserBasicInfoByIdVariables = Exact<{
    userId?: Maybe<Scalars['String']>;
}>;
export declare type SearchUserBasicInfoById = {
    searchUserBasicInfoById?: Maybe<{
        _id?: Maybe<string>;
        username?: Maybe<string>;
        photo?: Maybe<string>;
        email?: Maybe<string>;
    }>;
};
export declare type StatisticVariables = Exact<{
    sortBy?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type Statistic = {
    statistic?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            username?: Maybe<string>;
            email?: Maybe<string>;
            loginsCount?: Maybe<number>;
            appsCount?: Maybe<number>;
            OAuthCount?: Maybe<number>;
        }>>>;
    }>;
};
export declare type TodayGeoDistributionVariables = Exact<{
    today?: Maybe<Scalars['String']>;
}>;
export declare type TodayGeoDistribution = {
    todayGeoDistribution?: Maybe<Array<Maybe<{
        city?: Maybe<string>;
        size?: Maybe<number>;
        point?: Maybe<Array<Maybe<number>>>;
    }>>>;
};
export declare type UserVariables = Exact<{
    id?: Maybe<Scalars['String']>;
    registerInClient?: Maybe<Scalars['String']>;
    token?: Maybe<Scalars['String']>;
    auth?: Maybe<Scalars['Boolean']>;
    userLoginHistoryPage?: Maybe<Scalars['Int']>;
    userLoginHistoryCount?: Maybe<Scalars['Int']>;
}>;
export declare type User = {
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
        metadata?: Maybe<string>;
    }>;
};
export declare type UserAnalyticsVariables = Exact<{
    clientId?: Maybe<Scalars['String']>;
}>;
export declare type UserAnalytics = {
    userAnalytics?: Maybe<{
        allUsers?: Maybe<number>;
        totalApps?: Maybe<number>;
        usersAddedToday?: Maybe<{
            length?: Maybe<number>;
        }>;
        usersAddedLastWeek?: Maybe<{
            length?: Maybe<number>;
        }>;
        usersLoginLastWeek?: Maybe<{
            length?: Maybe<number>;
        }>;
        totalUsers?: Maybe<{
            length?: Maybe<number>;
        }>;
    }>;
};
export declare type UserClientListVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    sortBy?: Maybe<Scalars['String']>;
}>;
export declare type UserClientList = {
    userClientList?: Maybe<{
        totalCount: number;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            name?: Maybe<string>;
            createdAt?: Maybe<string>;
            usersCount?: Maybe<number>;
        }>>>;
    }>;
};
export declare type UserClientTypesVariables = Exact<{
    [key: string]: never;
}>;
export declare type UserClientTypes = {
    userClientTypes?: Maybe<Array<Maybe<{
        _id?: Maybe<string>;
        name?: Maybe<string>;
        description?: Maybe<string>;
        image?: Maybe<string>;
        example?: Maybe<string>;
    }>>>;
};
export declare type UserClientsVariables = Exact<{
    userId: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    computeUsersCount?: Maybe<Scalars['Boolean']>;
}>;
export declare type UserClients = {
    userClients?: Maybe<{
        totalCount: number;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
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
        }>>>;
    }>;
};
export declare type UserExistVariables = Exact<{
    userPoolId: Scalars['String'];
    email?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    username?: Maybe<Scalars['String']>;
}>;
export declare type UserExist = {
    userExist?: Maybe<boolean>;
};
export declare type UserGroupVariables = Exact<{
    group: Scalars['String'];
    client: Scalars['String'];
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type UserGroup = {
    userGroup?: Maybe<{
        totalCount: number;
        list?: Maybe<Array<Maybe<{
            _id?: Maybe<string>;
            createdAt?: Maybe<string>;
        }>>>;
    }>;
};
export declare type UserGroupListVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type UserGroupList = {
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
export declare type UserMetadataVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type UserMetadata = {
    userMetadata: {
        totalCount: number;
        list: Array<{
            key: string;
            value: string;
        }>;
    };
};
export declare type UserOAuthCountVariables = Exact<{
    userIds?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;
export declare type UserOAuthCount = {
    userOAuthCount?: Maybe<Array<Maybe<number>>>;
};
export declare type UserPatchVariables = Exact<{
    ids?: Maybe<Scalars['String']>;
}>;
export declare type UserPatch = {
    userPatch?: Maybe<{
        totalCount: number;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type UserPermissionListVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type UserPermissionList = {
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
export declare type UserRoleListVariables = Exact<{
    _id: Scalars['String'];
}>;
export declare type UserRoleList = {
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
export declare type UsersVariables = Exact<{
    registerInClient?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    populate?: Maybe<Scalars['Boolean']>;
}>;
export declare type Users = {
    users?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare type UsersByOidcAppVariables = Exact<{
    userPoolId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    appId?: Maybe<Scalars['String']>;
}>;
export declare type UsersByOidcApp = {
    usersByOidcApp?: Maybe<{
        list?: Maybe<Array<Maybe<string>>>;
        totalCount?: Maybe<number>;
    }>;
};
export declare type UsersInGroupVariables = Exact<{
    group?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
}>;
export declare type UsersInGroup = {
    usersInGroup?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
            email?: Maybe<string>;
            username?: Maybe<string>;
            _id?: Maybe<string>;
            upgrade?: Maybe<boolean>;
        }>>>;
    }>;
};
export declare type ValidatePasswordVariables = Exact<{
    userPool: Scalars['String'];
    password: Scalars['String'];
    encryptedPassword: Scalars['String'];
}>;
export declare type ValidatePassword = {
    validatePassword?: Maybe<{
        isValid?: Maybe<boolean>;
    }>;
};
export declare type WxQrCodeLogVariables = Exact<{
    page?: Maybe<Scalars['Int']>;
    count?: Maybe<Scalars['Int']>;
    clientId?: Maybe<Scalars['String']>;
    sortBy?: Maybe<Scalars['String']>;
}>;
export declare type WxQrCodeLog = {
    wxQRCodeLog?: Maybe<{
        totalCount?: Maybe<number>;
        list?: Maybe<Array<Maybe<{
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
        }>>>;
    }>;
};
export declare const AddEmailProviderDocument: import("graphql").DocumentNode;
export declare const AddLdapServerDocument: import("graphql").DocumentNode;
export declare const AddOAuthListDocument: import("graphql").DocumentNode;
export declare const AddSystemPricingDocument: import("graphql").DocumentNode;
export declare const ClearAvatarSrcDocument: import("graphql").DocumentNode;
export declare const ContinuePayDocument: import("graphql").DocumentNode;
export declare const CreateDefaultSamlIdentityProviderSettingsDocument: import("graphql").DocumentNode;
export declare const CreateOAuthProviderDocument: import("graphql").DocumentNode;
export declare const CreateOidcAppDocument: import("graphql").DocumentNode;
export declare const CreateSamlIdentityProviderDocument: import("graphql").DocumentNode;
export declare const CreateSamlServiceProviderDocument: import("graphql").DocumentNode;
export declare const EnableSamlIdentityProviderDocument: import("graphql").DocumentNode;
export declare const EnableSamlServiceProviderDocument: import("graphql").DocumentNode;
export declare const IncClientFlowNumberDocument: import("graphql").DocumentNode;
export declare const LoginByLdapDocument: import("graphql").DocumentNode;
export declare const RemoveEmailProviderDocument: import("graphql").DocumentNode;
export declare const RemoveLdapServerDocument: import("graphql").DocumentNode;
export declare const RemoveOAuthListDocument: import("graphql").DocumentNode;
export declare const RemoveOAuthProviderDocument: import("graphql").DocumentNode;
export declare const RemoveOidcAppDocument: import("graphql").DocumentNode;
export declare const RemoveSamlIdentityProviderDocument: import("graphql").DocumentNode;
export declare const RemoveSamlServiceProviderDocument: import("graphql").DocumentNode;
export declare const RevokeUserAuthorizedAppDocument: import("graphql").DocumentNode;
export declare const SaveEmailProviderWithClientDocument: import("graphql").DocumentNode;
export declare const SendEmailDocument: import("graphql").DocumentNode;
export declare const SendEmailByTypeDocument: import("graphql").DocumentNode;
export declare const SendWebhookTestDocument: import("graphql").DocumentNode;
export declare const SetApplicationOAuthEnableOrDisableDocument: import("graphql").DocumentNode;
export declare const UpdateApplicationOAuthDocument: import("graphql").DocumentNode;
export declare const UpdateEmailProviderDocument: import("graphql").DocumentNode;
export declare const UpdateEmailTemplateDocument: import("graphql").DocumentNode;
export declare const UpdateEmailTemplateWithClientDocument: import("graphql").DocumentNode;
export declare const UpdateLdapServerDocument: import("graphql").DocumentNode;
export declare const UpdateOAuthListDocument: import("graphql").DocumentNode;
export declare const UpdateOAuthProviderDocument: import("graphql").DocumentNode;
export declare const UpdateOidcAppDocument: import("graphql").DocumentNode;
export declare const UpdateSamlIdentityProviderDocument: import("graphql").DocumentNode;
export declare const UpdateSamlServiceProviderDocument: import("graphql").DocumentNode;
export declare const UpdateSystemPricingDocument: import("graphql").DocumentNode;
export declare const UseDefaultEmailProviderDocument: import("graphql").DocumentNode;
export declare const AddClientWebhookDocument: import("graphql").DocumentNode;
export declare const AddCollaboratorDocument: import("graphql").DocumentNode;
export declare const AddGroupMetadataDocument: import("graphql").DocumentNode;
export declare const AddOrgNodeDocument: import("graphql").DocumentNode;
export declare const AddPermissionDocument: import("graphql").DocumentNode;
export declare const AddPermissionToRbacRoleDocument: import("graphql").DocumentNode;
export declare const AddPermissionToRbacRoleBatchDocument: import("graphql").DocumentNode;
export declare const AddRoleToRbacGroupDocument: import("graphql").DocumentNode;
export declare const AddRoleToRbacGroupBatchDocument: import("graphql").DocumentNode;
export declare const AddSuperAdminUserDocument: import("graphql").DocumentNode;
export declare const AddToInvitationDocument: import("graphql").DocumentNode;
export declare const AddUserToRbacGroupDocument: import("graphql").DocumentNode;
export declare const AddUserToRbacGroupBatchDocument: import("graphql").DocumentNode;
export declare const AssignRbacRoleToUserDocument: import("graphql").DocumentNode;
export declare const AssignRbacRoleToUserBatchDocument: import("graphql").DocumentNode;
export declare const AssignUserToRoleDocument: import("graphql").DocumentNode;
export declare const BindOtherOAuthDocument: import("graphql").DocumentNode;
export declare const ChangeMfaDocument: import("graphql").DocumentNode;
export declare const ChangePasswordDocument: import("graphql").DocumentNode;
export declare const CreateAdConnectorDocument: import("graphql").DocumentNode;
export declare const CreateCustomMfaDocument: import("graphql").DocumentNode;
export declare const CreateInterConnectionDocument: import("graphql").DocumentNode;
export declare const CreateOrgDocument: import("graphql").DocumentNode;
export declare const CreateRbacGroupDocument: import("graphql").DocumentNode;
export declare const CreateRbacPermissionDocument: import("graphql").DocumentNode;
export declare const CreateRbacRoleDocument: import("graphql").DocumentNode;
export declare const CreateRoleDocument: import("graphql").DocumentNode;
export declare const CreateRuleDocument: import("graphql").DocumentNode;
export declare const CreateUserDocument: import("graphql").DocumentNode;
export declare const CreateUserWithoutAuthenticationDocument: import("graphql").DocumentNode;
export declare const DeleteClientWebhookDocument: import("graphql").DocumentNode;
export declare const DeleteOrgDocument: import("graphql").DocumentNode;
export declare const DeleteRbacGroupDocument: import("graphql").DocumentNode;
export declare const DeleteRbacGroupBatchDocument: import("graphql").DocumentNode;
export declare const DeleteRbacPermissionDocument: import("graphql").DocumentNode;
export declare const DeleteRbacPermissionBatchDocument: import("graphql").DocumentNode;
export declare const DeleteRbacRoleDocument: import("graphql").DocumentNode;
export declare const DeleteRbacRoleBatchDocument: import("graphql").DocumentNode;
export declare const DeleteRuleDocument: import("graphql").DocumentNode;
export declare const DisableAdConnectorDocument: import("graphql").DocumentNode;
export declare const DisableAdConnectorForProviderDocument: import("graphql").DocumentNode;
export declare const EnableAdConnectorDocument: import("graphql").DocumentNode;
export declare const EnableAdConnectorForProviderDocument: import("graphql").DocumentNode;
export declare const EnablePasswordFaasDocument: import("graphql").DocumentNode;
export declare const EncryptPasswordDocument: import("graphql").DocumentNode;
export declare const GenerateInvitationCodeDocument: import("graphql").DocumentNode;
export declare const LoginDocument: import("graphql").DocumentNode;
export declare const LoginByAdDocument: import("graphql").DocumentNode;
export declare const NewClientDocument: import("graphql").DocumentNode;
export declare const OauthPasswordLoginDocument: import("graphql").DocumentNode;
export declare const OrderDocument: import("graphql").DocumentNode;
export declare const PasswordLessForceLoginDocument: import("graphql").DocumentNode;
export declare const RecordAuthAuditDocument: import("graphql").DocumentNode;
export declare const RecordRequestDocument: import("graphql").DocumentNode;
export declare const RefreshAdConnectorSecretDocument: import("graphql").DocumentNode;
export declare const RefreshAppSecretDocument: import("graphql").DocumentNode;
export declare const RefreshSignInTokenDocument: import("graphql").DocumentNode;
export declare const RefreshThirdPartyTokenDocument: import("graphql").DocumentNode;
export declare const RefreshTokenDocument: import("graphql").DocumentNode;
export declare const RegisterDocument: import("graphql").DocumentNode;
export declare const RemoveAdConnectorDocument: import("graphql").DocumentNode;
export declare const RemoveCollaboratorDocument: import("graphql").DocumentNode;
export declare const RemoveCustomMfaDocument: import("graphql").DocumentNode;
export declare const RemoveFromInvitationDocument: import("graphql").DocumentNode;
export declare const RemoveOrgNodeDocument: import("graphql").DocumentNode;
export declare const RemovePermissionFromRbacRoleDocument: import("graphql").DocumentNode;
export declare const RemovePermissionFromRbacRoleBatchDocument: import("graphql").DocumentNode;
export declare const RemoveRoleFromRbacGroupDocument: import("graphql").DocumentNode;
export declare const RemoveRoleFromRbacGroupBatchDocument: import("graphql").DocumentNode;
export declare const RemoveRuleEnvDocument: import("graphql").DocumentNode;
export declare const RemoveSuperAdminUserDocument: import("graphql").DocumentNode;
export declare const RemoveUserClientsDocument: import("graphql").DocumentNode;
export declare const RemoveUserFromGroupDocument: import("graphql").DocumentNode;
export declare const RemoveUserFromRbacGroupDocument: import("graphql").DocumentNode;
export declare const RemoveUserFromRbacGroupBatchDocument: import("graphql").DocumentNode;
export declare const RemoveUserMetadataDocument: import("graphql").DocumentNode;
export declare const RemoveUsersDocument: import("graphql").DocumentNode;
export declare const ResetUserPoolFromWechatDocument: import("graphql").DocumentNode;
export declare const RevokeRbacRoleFromUserDocument: import("graphql").DocumentNode;
export declare const RevokeRbacRoleFromUserBatchDocument: import("graphql").DocumentNode;
export declare const SendChangeEmailVerifyCodeDocument: import("graphql").DocumentNode;
export declare const SendResetPasswordEmailDocument: import("graphql").DocumentNode;
export declare const SendVerifyEmailDocument: import("graphql").DocumentNode;
export declare const SetInvitationStateDocument: import("graphql").DocumentNode;
export declare const SetRuleEnvDocument: import("graphql").DocumentNode;
export declare const SetUserMetadataDocument: import("graphql").DocumentNode;
export declare const SignInDocument: import("graphql").DocumentNode;
export declare const UnbindEmailDocument: import("graphql").DocumentNode;
export declare const UnbindOtherOAuthDocument: import("graphql").DocumentNode;
export declare const UpdateAdConnectorDocument: import("graphql").DocumentNode;
export declare const UpdateClientWebhookDocument: import("graphql").DocumentNode;
export declare const UpdateCollaboratorDocument: import("graphql").DocumentNode;
export declare const UpdateEmailDocument: import("graphql").DocumentNode;
export declare const UpdatePasswordStrengthSettingsByUserPoolIdDocument: import("graphql").DocumentNode;
export declare const UpdatePermissionsDocument: import("graphql").DocumentNode;
export declare const UpdatePhoneDocument: import("graphql").DocumentNode;
export declare const UpdateRbacGroupDocument: import("graphql").DocumentNode;
export declare const UpdateRbacPermissionDocument: import("graphql").DocumentNode;
export declare const UpdateRbacRoleDocument: import("graphql").DocumentNode;
export declare const UpdateRoleDocument: import("graphql").DocumentNode;
export declare const UpdateRuleDocument: import("graphql").DocumentNode;
export declare const UpdateRuleOrderDocument: import("graphql").DocumentNode;
export declare const UpdateSuperAdminUserDocument: import("graphql").DocumentNode;
export declare const UpdateUserDocument: import("graphql").DocumentNode;
export declare const UpdateUserClientDocument: import("graphql").DocumentNode;
export declare const VerifyResetPasswordVerifyCodeDocument: import("graphql").DocumentNode;
export declare const GetOidcAppInfoDocument: import("graphql").DocumentNode;
export declare const GetOidcAppListDocument: import("graphql").DocumentNode;
export declare const GetSamlIdentityProviderInfoDocument: import("graphql").DocumentNode;
export declare const GetSamlIdentityProviderListDocument: import("graphql").DocumentNode;
export declare const GetSamlServiceProviderInfoDocument: import("graphql").DocumentNode;
export declare const GetSamlServiceProviderListDocument: import("graphql").DocumentNode;
export declare const GetUserAuthorizedAppsDocument: import("graphql").DocumentNode;
export declare const PreviewEmailByTypeDocument: import("graphql").DocumentNode;
export declare const QueryAppInfoByAppIdDocument: import("graphql").DocumentNode;
export declare const QueryAppInfoByDomainDocument: import("graphql").DocumentNode;
export declare const QueryClientHasLdapConfigsDocument: import("graphql").DocumentNode;
export declare const QueryClientIdByAppIdDocument: import("graphql").DocumentNode;
export declare const QueryDefaultSamlIdentityProviderSettingsListDocument: import("graphql").DocumentNode;
export declare const QueryLdapServerListDocument: import("graphql").DocumentNode;
export declare const QueryOidcAppInfoByAppIdDocument: import("graphql").DocumentNode;
export declare const QueryOidcAppInfoByDomainDocument: import("graphql").DocumentNode;
export declare const QuerySamlIdentityProviderInfoByAppIdDocument: import("graphql").DocumentNode;
export declare const QuerySamlIdentityProviderInfoByDomainDocument: import("graphql").DocumentNode;
export declare const QuerySamlServiceProviderInfoByAppIdDocument: import("graphql").DocumentNode;
export declare const QuerySamlServiceProviderInfoByDomainDocument: import("graphql").DocumentNode;
export declare const ReadEmailProviderDocument: import("graphql").DocumentNode;
export declare const ReadEmailProviderByClientAndNameDocument: import("graphql").DocumentNode;
export declare const ReadEmailProviderWithClientDocument: import("graphql").DocumentNode;
export declare const ReadEmailSentListDocument: import("graphql").DocumentNode;
export declare const ReadEmailSentListByClientDocument: import("graphql").DocumentNode;
export declare const ReadEmailTemplateByClientAndTypeDocument: import("graphql").DocumentNode;
export declare const ReadEmailTemplatesByClientDocument: import("graphql").DocumentNode;
export declare const ReadEmailTemplatesBySystemDocument: import("graphql").DocumentNode;
export declare const ReadOauthListDocument: import("graphql").DocumentNode;
export declare const ReadOrdersDocument: import("graphql").DocumentNode;
export declare const ReadSamlspListDocument: import("graphql").DocumentNode;
export declare const ReadSystemPricingDocument: import("graphql").DocumentNode;
export declare const ReadUserPricingDocument: import("graphql").DocumentNode;
export declare const TestLdapServerDocument: import("graphql").DocumentNode;
export declare const TestLdapUserDocument: import("graphql").DocumentNode;
export declare const AdConnectorByProviderDocument: import("graphql").DocumentNode;
export declare const AdConnectorListDocument: import("graphql").DocumentNode;
export declare const BindedOAuthListDocument: import("graphql").DocumentNode;
export declare const CheckAdConnectorStatusDocument: import("graphql").DocumentNode;
export declare const CheckIsReservedDomainDocument: import("graphql").DocumentNode;
export declare const CheckLoginStatusDocument: import("graphql").DocumentNode;
export declare const CheckPhoneCodeDocument: import("graphql").DocumentNode;
export declare const ClientDocument: import("graphql").DocumentNode;
export declare const ClientRolesDocument: import("graphql").DocumentNode;
export declare const DecodeJwtTokenDocument: import("graphql").DocumentNode;
export declare const EmailDomainTopNListDocument: import("graphql").DocumentNode;
export declare const FindClientsByIdArrayDocument: import("graphql").DocumentNode;
export declare const GetAccessTokenByAppSecretDocument: import("graphql").DocumentNode;
export declare const GetAllWebhooksDocument: import("graphql").DocumentNode;
export declare const GetAppSecretByClientIdDocument: import("graphql").DocumentNode;
export declare const GetClientWhenSdkInitDocument: import("graphql").DocumentNode;
export declare const GetCustomMfaDocument: import("graphql").DocumentNode;
export declare const GetOAuthedAppInfoDocument: import("graphql").DocumentNode;
export declare const GetOAuthedAppListDocument: import("graphql").DocumentNode;
export declare const GetUserLoginAreaStatisticOfClientDocument: import("graphql").DocumentNode;
export declare const GetUserPoolSettingsDocument: import("graphql").DocumentNode;
export declare const GetWebhookDetailDocument: import("graphql").DocumentNode;
export declare const GetWebhookLogDetailDocument: import("graphql").DocumentNode;
export declare const GetWebhookLogsDocument: import("graphql").DocumentNode;
export declare const GetWebhookSettingOptionsDocument: import("graphql").DocumentNode;
export declare const InterConnectionsDocument: import("graphql").DocumentNode;
export declare const IsAdConnectorAliveDocument: import("graphql").DocumentNode;
export declare const IsAppAuthorizedByUserDocument: import("graphql").DocumentNode;
export declare const IsClientBelongToUserDocument: import("graphql").DocumentNode;
export declare const IsClientOfUserDocument: import("graphql").DocumentNode;
export declare const IsDomainAvaliableDocument: import("graphql").DocumentNode;
export declare const IsLoginExpiredDocument: import("graphql").DocumentNode;
export declare const IsRootNodeOfOrgDocument: import("graphql").DocumentNode;
export declare const IsUserInGroupDocument: import("graphql").DocumentNode;
export declare const LoginCountDocument: import("graphql").DocumentNode;
export declare const LoginHotDotPicDataDocument: import("graphql").DocumentNode;
export declare const NotBindOAuthListDocument: import("graphql").DocumentNode;
export declare const OrgDocument: import("graphql").DocumentNode;
export declare const OrgChildrenNodesDocument: import("graphql").DocumentNode;
export declare const OrgNodeUserListDocument: import("graphql").DocumentNode;
export declare const OrgRootNodeDocument: import("graphql").DocumentNode;
export declare const OrgsDocument: import("graphql").DocumentNode;
export declare const PlatformUserGrowthTrendDocument: import("graphql").DocumentNode;
export declare const PreviewEmailTemplateDocument: import("graphql").DocumentNode;
export declare const ProviderListByAdConnectorDocument: import("graphql").DocumentNode;
export declare const QiNiuUploadTokenDocument: import("graphql").DocumentNode;
export declare const QpsByTimeDocument: import("graphql").DocumentNode;
export declare const QueryAuthAuditRecordsDocument: import("graphql").DocumentNode;
export declare const QueryAuthorizedUserPoolDocument: import("graphql").DocumentNode;
export declare const QueryClientDocument: import("graphql").DocumentNode;
export declare const QueryCollaborationByUserPoolIdAndUserIdDocument: import("graphql").DocumentNode;
export declare const QueryCollaborativeUserPoolByUserIdDocument: import("graphql").DocumentNode;
export declare const QueryCollaboratorPermissionsDocument: import("graphql").DocumentNode;
export declare const QueryCollaboratorsByUserPoolIdDocument: import("graphql").DocumentNode;
export declare const QueryInvitationDocument: import("graphql").DocumentNode;
export declare const QueryInvitationStateDocument: import("graphql").DocumentNode;
export declare const QueryMfaDocument: import("graphql").DocumentNode;
export declare const QueryOperationLogsDocument: import("graphql").DocumentNode;
export declare const QueryPasswordFaasEnabledDocument: import("graphql").DocumentNode;
export declare const QueryPasswordStrengthSettingsByUserPoolIdDocument: import("graphql").DocumentNode;
export declare const QueryPermissionListDocument: import("graphql").DocumentNode;
export declare const QueryProviderInfoByAppIdDocument: import("graphql").DocumentNode;
export declare const QueryProviderInfoByDomainDocument: import("graphql").DocumentNode;
export declare const QueryRbacGroupUserListDocument: import("graphql").DocumentNode;
export declare const QueryRoleByUserIdDocument: import("graphql").DocumentNode;
export declare const QuerySmsSendCountDocument: import("graphql").DocumentNode;
export declare const QuerySystemOAuthSettingDocument: import("graphql").DocumentNode;
export declare const QueryUserPoolCommonInfoDocument: import("graphql").DocumentNode;
export declare const RbacGroupListDocument: import("graphql").DocumentNode;
export declare const RbacPermissionDocument: import("graphql").DocumentNode;
export declare const RbacPermissionListDocument: import("graphql").DocumentNode;
export declare const RbacRoleDocument: import("graphql").DocumentNode;
export declare const RbacRoleListDocument: import("graphql").DocumentNode;
export declare const RecentServiceCallDocument: import("graphql").DocumentNode;
export declare const RegisterEveryDayCountDocument: import("graphql").DocumentNode;
export declare const RegisterMethodTopListDocument: import("graphql").DocumentNode;
export declare const RequestListDocument: import("graphql").DocumentNode;
export declare const RuleByIdDocument: import("graphql").DocumentNode;
export declare const RuleEnvDocument: import("graphql").DocumentNode;
export declare const RulesDocument: import("graphql").DocumentNode;
export declare const SearchOrgNodesDocument: import("graphql").DocumentNode;
export declare const SearchUserDocument: import("graphql").DocumentNode;
export declare const SearchUserBasicInfoByIdDocument: import("graphql").DocumentNode;
export declare const StatisticDocument: import("graphql").DocumentNode;
export declare const TodayGeoDistributionDocument: import("graphql").DocumentNode;
export declare const UserDocument: import("graphql").DocumentNode;
export declare const UserAnalyticsDocument: import("graphql").DocumentNode;
export declare const UserClientListDocument: import("graphql").DocumentNode;
export declare const UserClientTypesDocument: import("graphql").DocumentNode;
export declare const UserClientsDocument: import("graphql").DocumentNode;
export declare const UserExistDocument: import("graphql").DocumentNode;
export declare const UserGroupDocument: import("graphql").DocumentNode;
export declare const UserGroupListDocument: import("graphql").DocumentNode;
export declare const UserMetadataDocument: import("graphql").DocumentNode;
export declare const UserOAuthCountDocument: import("graphql").DocumentNode;
export declare const UserPatchDocument: import("graphql").DocumentNode;
export declare const UserPermissionListDocument: import("graphql").DocumentNode;
export declare const UserRoleListDocument: import("graphql").DocumentNode;
export declare const UsersDocument: import("graphql").DocumentNode;
export declare const UsersByOidcAppDocument: import("graphql").DocumentNode;
export declare const UsersInGroupDocument: import("graphql").DocumentNode;
export declare const ValidatePasswordDocument: import("graphql").DocumentNode;
export declare const WxQrCodeLogDocument: import("graphql").DocumentNode;
