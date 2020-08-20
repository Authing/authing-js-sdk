import {
  CheckLoginStatus,
  CheckLoginStatusVariables,
  CheckLoginStatusDocument,
  SendVerifyEmail,
  SendVerifyEmailDocument,
  SendVerifyEmailVariables,
  AddGroupMetadata,
  AddGroupMetadataDocument,
  AddGroupMetadataVariables,
  AddUserToRbacGroup,
  AddUserToRbacGroupDocument,
  AddUserToRbacGroupVariables,
  CreateRbacGroup,
  CreateRbacGroupDocument,
  CreateRbacGroupVariables,
  RbacGroup,
  RbacGroupDocument,
  RbacGroupVariables,
  IsUserInGroup,
  IsUserInGroupDocument,
  IsUserInGroupVariables,
  UserGroupList,
  UserGroupListDocument,
  UserGroupListVariables,
  CreateOidcApp,
  CreateOidcAppDocument,
  CreateOidcAppVariables,
  QueryOidcAppInfoByDomainVariables,
  QueryOidcAppInfoByDomain,
  QueryOidcAppInfoByDomainDocument,
  GetOidcAppList,
  GetOidcAppListDocument,
  GetOidcAppListVariables,
  GetSamlIdentityProviderList,
  GetSamlIdentityProviderListDocument,
  GetSamlIdentityProviderListVariables,
  IsDomainAvaliable,
  IsDomainAvaliableDocument,
  IsDomainAvaliableVariables,
  AddOrgNode,
  AddOrgNodeDocument,
  AddOrgNodeVariables,
  OrgChildrenNodes,
  OrgChildrenNodesDocument,
  OrgChildrenNodesVariables,
  CreateOrg,
  CreateOrgDocument,
  CreateOrgVariables,
  DeleteOrg,
  DeleteOrgDocument,
  DeleteOrgVariables,
  IsRootNodeOfOrg,
  IsRootNodeOfOrgDocument,
  IsRootNodeOfOrgVariables,
  Orgs,
  OrgsDocument,
  OrgsVariables,
  RemoveOrgNode,
  RemoveOrgNodeDocument,
  RemoveOrgNodeVariables,
  OrgRootNodeDocument,
  OrgRootNode,
  OrgRootNodeVariables,
  SearchOrgNodes,
  SearchOrgNodesDocument,
  SearchOrgNodesVariables,
  AddCollaborator,
  AddCollaboratorDocument,
  AddCollaboratorVariables,
  QueryPermissionList,
  QueryPermissionListDocument,
  QueryPermissionListVariables,
  Register,
  RegisterDocument,
  RegisterVariables,
  CreateInterConnection,
  CreateInterConnectionDocument,
  CreateInterConnectionVariables,
  CreateUserWithoutAuthentication,
  CreateUserWithoutAuthenticationDocument,
  CreateUserWithoutAuthenticationVariables,
  RemoveUsers,
  RemoveUsersDocument,
  RemoveUsersVariables,
  InterConnections,
  InterConnectionsDocument,
  InterConnectionsVariables,
  PasswordLessForceLogin,
  PasswordLessForceLoginDocument,
  PasswordLessForceLoginVariables
} from '../types/graphql.v1';
import { GraphqlClient } from './common/GraphqlClient';
import { ManagementTokenProvider } from './management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from './auth/AuthenticationTokenProvider';
import {
  UserpoolDocument,
  UserpoolVariables,
  UserpoolResponse,
  UpdateUserpoolVariables,
  UpdateUserpoolResponse,
  UpdateUserpoolDocument,
  ResetPasswordVariables,
  ResetPasswordDocument,
  ResetPasswordResponse,
  UserResponse,
  CheckPasswordStrengthVariables,
  CheckPasswordStrengthResponse,
  CheckPasswordStrengthDocument,
  RegisterByEmailDocument,
  RegisterByEmailResponse,
  RegisterByEmailVariables,
  RegisterByUsernameDocument,
  RegisterByUsernameResponse,
  RegisterByUsernameVariables,
  CreateResourceDocument,
  CreateResourceResponse,
  CreateResourceVariables,
  CreateRoleResponse,
  CreateResourceRuleDocument,
  CreateResourceRuleResponse,
  CreateResourceRuleVariables,
  AssignRoleDocument,
  AssignRoleResponse,
  AssignRoleVariables,
  IsActionAllowedDocument,
  IsActionAllowedResponse,
  IsActionAllowedVariables,
  IsActionDeniedDocument,
  IsActionDeniedResponse,
  IsActionDeniedVariables,
  CreateRoleVariables,
  CreateRoleDocument,
  LoginByEmailVariables,
  LoginByEmailDocument,
  LoginByEmailResponse,
  LoginByUsernameVariables,
  LoginByUsernameResponse,
  LoginByUsernameDocument,
  LoginByPhoneCodeVariables,
  LoginByPhoneCodeResponse,
  LoginByPhoneCodeDocument,
  LoginByPhonePasswordVariables,
  LoginByPhonePasswordResponse,
  LoginByPhonePasswordDocument,
  OrgDocument,
  OrgResponse,
  OrgVariables,
  AddMemberVariables,
  AddMemberDocument,
  AddMemberResponse,
  NodeWithMembersDocument,
  NodeWithMembersResponse,
  NodeWithMembersVariables,
  SendEmailResponse,
  SendEmailVariables,
  SendEmailDocument,
  UsersDocument,
  UsersResponse,
  UsersVariables,
  UserDocument,
  UserVariables,
  RolesDocument,
  RolesResponse,
  RolesVariables,
  PermissionsDocument,
  PermissionsResponse,
  PermissionsVariables,
  GroupsDocument,
  GroupsResponse,
  GroupsVariables
} from '../types/graphql.v2';

export const isAllowed = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsActionAllowedVariables
): Promise<IsActionAllowedResponse> => {
  const query = IsActionAllowedDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const isDomainAvaliable = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: IsDomainAvaliableVariables
): Promise<IsDomainAvaliable> => {
  const query = IsDomainAvaliableDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addOrgNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AddOrgNodeVariables
): Promise<AddOrgNode> => {
  const query = AddOrgNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const orgChildrenNodes = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: OrgChildrenNodesVariables
): Promise<OrgChildrenNodes> => {
  const query = OrgChildrenNodesDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const org = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: OrgVariables
): Promise<OrgResponse> => {
  const query = OrgDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const isRootNodeOfOrg = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsRootNodeOfOrgVariables
): Promise<IsRootNodeOfOrg> => {
  const query = IsRootNodeOfOrgDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const orgs = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: OrgsVariables
): Promise<Orgs> => {
  const query = OrgsDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const removeOrgNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: RemoveOrgNodeVariables
): Promise<RemoveOrgNode> => {
  const query = RemoveOrgNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const searchNodes = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: SearchOrgNodesVariables
): Promise<SearchOrgNodes> => {
  const query = SearchOrgNodesDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addCollaborator = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AddCollaboratorVariables
): Promise<AddCollaborator> => {
  const query = AddCollaboratorDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getUserPoolDetail = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UserpoolVariables
): Promise<UserpoolResponse> => {
  const query = UserpoolDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const queryPermissionList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: QueryPermissionListVariables
): Promise<QueryPermissionList> => {
  const query = QueryPermissionListDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const register = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: RegisterVariables
): Promise<Register> => {
  const query = RegisterDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const createInterConnection = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CreateInterConnectionVariables
): Promise<CreateInterConnection> => {
  const query = CreateInterConnectionDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const createUserWithoutAuthentication = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateUserWithoutAuthenticationVariables
): Promise<CreateUserWithoutAuthentication> => {
  const query = CreateUserWithoutAuthenticationDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const removeUsers = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: RemoveUsersVariables
): Promise<RemoveUsers> => {
  const query = RemoveUsersDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const interConnections = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: InterConnectionsVariables
): Promise<InterConnections> => {
  const query = InterConnectionsDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const user = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: UserVariables
): Promise<UserResponse> => {
  const query = UserDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const passwordLessForceLogin = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: PasswordLessForceLoginVariables
): Promise<PasswordLessForceLogin> => {
  const query = PasswordLessForceLoginDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const orgRootNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: OrgRootNodeVariables
): Promise<OrgRootNode> => {
  const query = OrgRootNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const createOrg = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateOrgVariables
): Promise<CreateOrg> => {
  const query = CreateOrgDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const deleteOrg = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: DeleteOrgVariables
): Promise<DeleteOrg> => {
  const query = DeleteOrgDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const GetSAMLIdentityProviderList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: GetSamlIdentityProviderListVariables
): Promise<GetSamlIdentityProviderList> => {
  const query = GetSamlIdentityProviderListDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const GetOIDCAppList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: GetOidcAppListVariables
): Promise<GetOidcAppList> => {
  const query = GetOidcAppListDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const oidcProviderByDomain = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: QueryOidcAppInfoByDomainVariables
): Promise<QueryOidcAppInfoByDomain> => {
  const query = QueryOidcAppInfoByDomainDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const CreateOIDCApp = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CreateOidcAppVariables
): Promise<CreateOidcApp> => {
  const query = CreateOidcAppDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const userGroupList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: UserGroupListVariables
): Promise<UserGroupList> => {
  const query = UserGroupListDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const isUserInGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsUserInGroupVariables
): Promise<IsUserInGroup> => {
  const query = IsUserInGroupDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const isDenied = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsActionDeniedVariables
): Promise<IsActionDeniedResponse> => {
  const query = IsActionDeniedDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const groupUserList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: RbacGroupVariables
): Promise<RbacGroup> => {
  const query = RbacGroupDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const createRBACGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateRbacGroupVariables
): Promise<CreateRbacGroup> => {
  const query = CreateRbacGroupDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const checkLoginStatus = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CheckLoginStatusVariables
): Promise<CheckLoginStatus> => {
  const query = CheckLoginStatusDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const checkPasswordStrength = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: CheckPasswordStrengthVariables
): Promise<CheckPasswordStrengthResponse> => {
  const query = CheckPasswordStrengthDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const registerByEmail = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: RegisterByEmailVariables
): Promise<RegisterByEmailResponse> => {
  const query = RegisterByEmailDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const loginByEmail = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: LoginByEmailVariables
): Promise<LoginByEmailResponse> => {
  const query = LoginByEmailDocument;
  const token = tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const loginByUsername = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: LoginByUsernameVariables
): Promise<LoginByUsernameResponse> => {
  const query = LoginByUsernameDocument;
  const token = tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const loginByPhoneCode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: LoginByPhoneCodeVariables
): Promise<LoginByPhoneCodeResponse> => {
  const query = LoginByPhoneCodeDocument;
  const token = tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const loginByPhonePassword = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: LoginByPhonePasswordVariables
): Promise<LoginByPhonePasswordResponse> => {
  const query = LoginByPhonePasswordDocument;
  const token = tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const registerByUsername = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: RegisterByUsernameVariables
): Promise<RegisterByUsernameResponse> => {
  const query = RegisterByUsernameDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const sendVerifyEmail = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: SendVerifyEmailVariables
): Promise<SendVerifyEmail> => {
  const query = SendVerifyEmailDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addGroupMetadata = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AddGroupMetadataVariables
): Promise<AddGroupMetadata> => {
  const query = AddGroupMetadataDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addResource = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateResourceVariables
): Promise<CreateResourceResponse> => {
  const query = CreateResourceDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addRole = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateRoleVariables
): Promise<CreateRoleResponse> => {
  const query = CreateRoleDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addUserToRBACGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AddUserToRbacGroupVariables
): Promise<AddUserToRbacGroup> => {
  const query = AddUserToRbacGroupDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const allow = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: CreateResourceRuleVariables
): Promise<CreateResourceRuleResponse> => {
  const query = CreateResourceRuleDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const assignRole = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AssignRoleVariables
): Promise<AssignRoleResponse> => {
  const query = AssignRoleDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addMember = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: AddMemberVariables
): Promise<AddMemberResponse> => {
  const query = AddMemberDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getMembers = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: NodeWithMembersVariables
): Promise<NodeWithMembersResponse> => {
  const query = NodeWithMembersDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const sendEmail = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider | ManagementTokenProvider,
  variables: SendEmailVariables
): Promise<SendEmailResponse> => {
  const query = SendEmailDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const resetPassword = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: ResetPasswordVariables
): Promise<ResetPasswordResponse> => {
  const query = ResetPasswordDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const users = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UsersVariables
): Promise<UsersResponse> => {
  const query = UsersDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getGroupsOfUser = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: GroupsVariables
): Promise<GroupsResponse> => {
  const query = GroupsDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getRolesOfUser = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RolesVariables
): Promise<RolesResponse> => {
  const query = RolesDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getPermissionsOfUser = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: PermissionsVariables
): Promise<PermissionsResponse> => {
  const query = PermissionsDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const updateUserpool = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UpdateUserpoolVariables
): Promise<UpdateUserpoolResponse> => {
  const query = UpdateUserpoolDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};
