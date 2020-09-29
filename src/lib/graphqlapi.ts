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
  DeleteOrg,
  DeleteOrgDocument,
  DeleteOrgVariables,
  IsRootNodeOfOrg,
  IsRootNodeOfOrgDocument,
  IsRootNodeOfOrgVariables,
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
  InterConnections,
  InterConnectionsDocument,
  InterConnectionsVariables,
  PasswordLessForceLogin,
  PasswordLessForceLoginDocument,
  PasswordLessForceLoginVariables,
  UserExistVariables,
  UserExist,
  UserExistDocument,
  UserPermissionListVariables,
  UserPermissionList,
  UserPermissionListDocument
} from '../types/graphql.v1';
import { GraphqlClient } from './common/GraphqlClient';
import { ManagementTokenProvider } from './management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from './auth/AuthenticationTokenProvider';
import {
  CreateUserResponse,
  CreateUserDocument,
  CreateUserVariables,
  SearchUserVariables,
  SearchUserDocument,
  SearchUserResponse,
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
  CreateRoleResponse,
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
  GroupsDocument,
  GroupsResponse,
  GroupsVariables,
  UpdateUserDocument,
  UpdateUserResponse,
  UpdateUserVariables,
  DeleteUserVariables,
  DeleteUserResponse,
  DeleteUserDocument,
  DeleteUsersDocument,
  DeleteUsersResponse,
  DeleteUsersVariables,
  RoleVariables,
  RoleDocument,
  RoleResponse,
  RoleWithUsersDocument,
  RoleWithUsersResponse,
  RoleWithUsersVariables,
  UpdateRoleResponse,
  UpdateRoleDocument,
  UpdateRoleVariables,
  OrgsDocument,
  OrgsVariables,
  OrgsResponse,
  CreateOrgResponse,
  CreateOrgDocument,
  CreateOrgVariables,
  AddNodeVariables,
  AddNodeResponse,
  AddNodeDocument,
  UpdateNodeVariables,
  UpdateNodeResponse,
  UpdateNodeDocument,
  DeleteNodeVariables,
  DeleteNodeResponse,
  DeleteNodeDocument,
  MoveNodeVariables,
  MoveNodeResponse,
  MoveNodeDocument,
  NodeByIdWithMembersVariables,
  NodeByIdWithMembersResponse,
  NodeByIdWithMembersDocument,
  NodeByCodeWithMembersVariables,
  NodeByCodeWithMembersResponse,
  NodeByCodeWithMembersDocument,
  RemoveMemberVariables,
  RemoveMemberResponse,
  RemoveMemberDocument,
  RevokeRoleVariables,
  RevokeRoleResponse,
  RevokeRoleDocument,
  ChildrenNodesVariables,
  ChildrenNodesResponse,
  ChildrenNodesDocument,
  RefreshTokenVariables,
  RefreshTokenDocument,
  RefreshTokenResponse,
  AddUserToGroupDocument,
  AddUserToGroupResponse,
  AddUserToGroupVariables,
  RegisterByPhoneCodeResponse,
  RegisterByPhoneCodeDocument,
  RegisterByPhoneCodeVariables,
  UpdatePasswordVariables,
  UpdatePasswordResponse,
  UpdatePasswordDocument,
  UpdatePhoneVariables,
  UpdatePhoneResponse,
  UpdatePhoneDocument,
  UpdateEmailVariables,
  UpdateEmailResponse,
  UpdateEmailDocument,
  BindPhoneVariables,
  BindPhoneResponse,
  BindPhoneDocument,
  UnbindPhoneVariables,
  UnbindPhoneResponse,
  UnbindPhoneDocument,
  UserBatchVariables,
  UserBatchResponse,
  UserBatchDocument,
  GetUserRolesDocument,
  GetUserRolesResponse,
  GetUserRolesVariables,
  AllowVariables,
  AllowResponse,
  AllowDocument,
  WhitelistVariables,
  WhitelistDocument,
  WhitelistResponse,
  RemoveWhitelistVariables,
  RemoveWhitelistResponse,
  RemoveWhitelistDocument,
  AddWhitelistVariables,
  AddWhitelistResponse,
  AddWhitelistDocument,
  UdfVariables,
  UdfResponse,
  UdfDocument,
  UdvVariables,
  UdvDocument,
  UdvResponse,
  SetUdvVariables,
  SetUdvResponse,
  SetUdvDocument,
  RemoveUdvVariables,
  RemoveUdvResponse,
  RemoveUdvDocument,
  AddUdfVariables,
  AddUdfResponse,
  AddUdfDocument,
  RemoveUdfVariables,
  RemoveUdfResponse,
  RemoveUdfDocument
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

export const getChildrenNodes = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: ChildrenNodesVariables
): Promise<ChildrenNodesResponse> => {
  const query = ChildrenNodesDocument;
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
): Promise<OrgsResponse> => {
  const query = OrgsDocument;
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
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
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
): Promise<CreateOrgResponse> => {
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
  const token = tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const registerByPhoneCode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: AuthenticationTokenProvider,
  variables: RegisterByPhoneCodeVariables
): Promise<RegisterByPhoneCodeResponse> => {
  const query = RegisterByPhoneCodeDocument;
  const token = tokenProvider.getAccessToken();
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

export const revokeRole = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: RevokeRoleVariables
): Promise<RevokeRoleResponse> => {
  const query = RevokeRoleDocument;
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

export const getMembersById = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: NodeByIdWithMembersVariables
): Promise<NodeByIdWithMembersResponse> => {
  const query = NodeByIdWithMembersDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getMembersByCode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: NodeByCodeWithMembersVariables
): Promise<NodeByCodeWithMembersResponse> => {
  const query = NodeByCodeWithMembersDocument;
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

export const updateUser = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UpdateUserVariables
): Promise<UpdateUserResponse> => {
  const query = UpdateUserDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const searchUser = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: SearchUserVariables
): Promise<SearchUserResponse> => {
  const query = SearchUserDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const createUser = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CreateUserVariables
): Promise<CreateUserResponse> => {
  const query = CreateUserDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const deleteUser = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: DeleteUserVariables
): Promise<DeleteUserResponse> => {
  const query = DeleteUserDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const deleteUsers = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: DeleteUsersVariables
): Promise<DeleteUsersResponse> => {
  const query = DeleteUsersDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const roles = async (
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

export const role = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RoleVariables
): Promise<RoleResponse> => {
  const query = RoleDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const roleWithUsers = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RoleWithUsersVariables
): Promise<RoleWithUsersResponse> => {
  const query = RoleWithUsersDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const updateRole = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UpdateRoleVariables
): Promise<UpdateRoleResponse> => {
  const query = UpdateRoleDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: AddNodeVariables
): Promise<AddNodeResponse> => {
  const query = AddNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const updateNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UpdateNodeVariables
): Promise<UpdateNodeResponse> => {
  const query = UpdateNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const deleteNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: DeleteNodeVariables
): Promise<DeleteNodeResponse> => {
  const query = DeleteNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const moveNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: MoveNodeVariables
): Promise<MoveNodeResponse> => {
  const query = MoveNodeDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const removeMembers = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RemoveMemberVariables
): Promise<RemoveMemberResponse> => {
  const query = RemoveMemberDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getGroups = async (
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

export const refreshToken = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RefreshTokenVariables
): Promise<RefreshTokenResponse> => {
  const query = RefreshTokenDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addUserToGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: AddUserToGroupVariables
): Promise<AddUserToGroupResponse> => {
  const query = AddUserToGroupDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const userExists = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UserExistVariables
): Promise<UserExist> => {
  const query = UserExistDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const userPermissionList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UserPermissionListVariables
): Promise<UserPermissionList> => {
  const query = UserPermissionListDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const updatePassword = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UpdatePasswordVariables
): Promise<UpdatePasswordResponse> => {
  const query = UpdatePasswordDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const updatePhone = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UpdatePhoneVariables
): Promise<UpdatePhoneResponse> => {
  const query = UpdatePhoneDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const updateEmail = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UpdateEmailVariables
): Promise<UpdateEmailResponse> => {
  const query = UpdateEmailDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const bindPhone = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: BindPhoneVariables
): Promise<BindPhoneResponse> => {
  const query = BindPhoneDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const unbindPhone = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UnbindPhoneVariables
): Promise<UnbindPhoneResponse> => {
  const query = UnbindPhoneDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const userBatch = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UserBatchVariables
): Promise<UserBatchResponse> => {
  const query = UserBatchDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getUserRoles = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: GetUserRolesVariables
): Promise<GetUserRolesResponse> => {
  const query = GetUserRolesDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const allow = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: AllowVariables
): Promise<AllowResponse> => {
  const query = AllowDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getWhiteList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: WhitelistVariables
): Promise<WhitelistResponse> => {
  const query = WhitelistDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const removeWhiteList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RemoveWhitelistVariables
): Promise<RemoveWhitelistResponse> => {
  const query = RemoveWhitelistDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addWhiteList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: AddWhitelistVariables
): Promise<AddWhitelistResponse> => {
  const query = AddWhitelistDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const udv = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UdvVariables
): Promise<UdvResponse> => {
  const query = UdvDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const setUdv = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: SetUdvVariables
): Promise<SetUdvResponse> => {
  const query = SetUdvDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const removeUdv = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RemoveUdvVariables
): Promise<RemoveUdvResponse> => {
  const query = RemoveUdvDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addUdf = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: AddUdfVariables
): Promise<AddUdfResponse> => {
  const query = AddUdfDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const removeUdf = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RemoveUdfVariables
): Promise<RemoveUdfResponse> => {
  const query = RemoveUdfDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const udf = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UdfVariables
): Promise<UdfResponse> => {
  const query = UdfDocument;
  const token = await tokenProvider.getAccessToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};
