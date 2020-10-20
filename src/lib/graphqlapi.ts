import { GraphqlClient } from './common/GraphqlClient';
import { ManagementTokenProvider } from './management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from './authentication/AuthenticationTokenProvider';
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
  SetUdfVariables,
  SetUdfResponse,
  SetUdfDocument,
  RemoveUdfVariables,
  RemoveUdfResponse,
  RemoveUdfDocument,
  DeleteRoleVariables,
  DeleteRoleResponse,
  DeleteRoleDocument,
  DeleteRolesResponse,
  DeleteRolesVariables,
  DeleteRolesDocument,
  PoliciesVariables,
  PoliciesResponse,
  PoliciesDocument,
  CreatePolicyVariables,
  CreatePolicyDocument,
  PolicyVariables,
  CreatePolicyResponse,
  PolicyResponse,
  PolicyDocument,
  UpdatePolicyVariables,
  UpdatePolicyResponse,
  UpdatePolicyDocument,
  DeletePolicyVariables,
  DeletePoliciesResponse,
  DeletePolicyDocument,
  DeletePoliciesVariables,
  DeletePolicyResponse,
  DeletePoliciesDocument,
  PolicyAssignmentsVariables,
  PolicyAssignmentsResponse,
  PolicyAssignmentsDocument,
  AddPolicyAssignmentsVariables,
  AddPolicyAssignmentsResponse,
  AddPolicyAssignmentsDocument,
  RemovePolicyAssignmentsVariables,
  RemovePolicyAssignmentsResponse,
  RemovePolicyAssignmentsDocument,
  DeleteOrgResponse,
  DeleteOrgDocument,
  DeleteOrgVariables,
  RootNodeDocument,
  RootNodeResponse,
  RootNodeVariables,
  IsRootNodeDocument,
  IsRootNodeResponse,
  IsRootNodeVariables,
  IsUserExistsVariables,
  IsUserExistsResponse,
  IsUserExistsDocument,
  CheckLoginStatusResponse,
  CheckLoginStatusDocument,
  CheckLoginStatusVariables,
  GroupVariables,
  GroupResponse,
  GroupDocument,
  CreateGroupVariables,
  CreateGroupResponse,
  CreateGroupDocument,
  UpdateGroupVariables,
  UpdateGroupResponse,
  UpdateGroupDocument,
  DeleteGroupsVariables,
  DeleteGroupsResponse,
  DeleteGroupsDocument,
  RemoveUserFromGroupVariables,
  RemoveUserFromGroupResponse,
  RemoveUserFromGroupDocument,
  GroupWithUsersVariables,
  GroupWithUsersResponse,
  GroupWithUsersDocument,
  GetUserGroupsVariables,
  GetUserGroupsResponse,
  GetUserGroupsDocument,
  UnbindEmailVariables,
  UnbindEmailDocument,
  UnbindEmailResponse,
  AccessTokenVariables,
  AccessTokenDocument,
  RefreshAccessTokenVariables,
  RefreshAccessTokenResponse,
  AccessTokenResponse
} from '../types/graphql.v2';

export const isAllowed = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsActionAllowedVariables
): Promise<IsActionAllowedResponse> => {
  const query = IsActionAllowedDocument;
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const isRootNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: IsRootNodeVariables
): Promise<IsRootNodeResponse> => {
  const query = IsRootNodeDocument;
  const token = await tokenProvider.getToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const rootNode = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider,
  variables: RootNodeVariables
): Promise<RootNodeResponse> => {
  const query = RootNodeDocument;
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
): Promise<DeleteOrgResponse> => {
  const query = DeleteOrgDocument;
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
  return await garpqhlClient.request({
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = tokenProvider.getToken();
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
  const token = tokenProvider.getToken();
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
  const token = tokenProvider.getToken();
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
  const token = tokenProvider.getToken();
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
  const token = tokenProvider.getToken();
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
  const token = tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const isUserExists = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: IsUserExistsVariables
): Promise<IsUserExistsResponse> => {
  const query = IsUserExistsDocument;
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const setUdf = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: SetUdfVariables
): Promise<SetUdfResponse> => {
  const query = SetUdfDocument;
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const deleteRole = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: DeleteRoleVariables
): Promise<DeleteRoleResponse> => {
  const query = DeleteRoleDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const deleteRoles = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: DeleteRolesVariables
): Promise<DeleteRolesResponse> => {
  const query = DeleteRolesDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const policies = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: PoliciesVariables
): Promise<PoliciesResponse> => {
  const query = PoliciesDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const createPolicy = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CreatePolicyVariables
): Promise<CreatePolicyResponse> => {
  const query = CreatePolicyDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const policy = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: PolicyVariables
): Promise<PolicyResponse> => {
  const query = PolicyDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const updatePolicy = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UpdatePolicyVariables
): Promise<UpdatePolicyResponse> => {
  const query = UpdatePolicyDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const deletePolicy = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: DeletePolicyVariables
): Promise<DeletePolicyResponse> => {
  const query = DeletePolicyDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const deletePolicies = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: DeletePoliciesVariables
): Promise<DeletePoliciesResponse> => {
  const query = DeletePoliciesDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const policyAssignments = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: PolicyAssignmentsVariables
): Promise<PolicyAssignmentsResponse> => {
  const query = PolicyAssignmentsDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const addPolicyAssignments = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: AddPolicyAssignmentsVariables
): Promise<AddPolicyAssignmentsResponse> => {
  const query = AddPolicyAssignmentsDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const removePolicyAssignments = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RemovePolicyAssignmentsVariables
): Promise<RemovePolicyAssignmentsResponse> => {
  const query = RemovePolicyAssignmentsDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const checkLoginStatus = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CheckLoginStatusVariables
): Promise<CheckLoginStatusResponse> => {
  const query = CheckLoginStatusDocument;
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const group = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: GroupVariables
): Promise<GroupResponse> => {
  const query = GroupDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const groupWithUsers = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: GroupWithUsersVariables
): Promise<GroupWithUsersResponse> => {
  const query = GroupWithUsersDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const createGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: CreateGroupVariables
): Promise<CreateGroupResponse> => {
  const query = CreateGroupDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};
export const updateGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UpdateGroupVariables
): Promise<UpdateGroupResponse> => {
  const query = UpdateGroupDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const deleteGroups = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: DeleteGroupsVariables
): Promise<DeleteGroupsResponse> => {
  const query = DeleteGroupsDocument;
  const token = await tokenProvider.getToken();
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
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const removeUserFromGroup = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: RemoveUserFromGroupVariables
): Promise<RemoveUserFromGroupResponse> => {
  const query = RemoveUserFromGroupDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getUserGroups = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: GetUserGroupsVariables
): Promise<GetUserGroupsResponse> => {
  const query = GetUserGroupsDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const unbindEmail = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: UnbindEmailVariables
): Promise<UnbindEmailResponse> => {
  const query = UnbindEmailDocument;
  const token = await tokenProvider.getToken();
  return garpqhlClient.request({
    query,
    token,
    variables
  });
};

export const getAccessToken = async (
  garpqhlClient: GraphqlClient,
  variables: AccessTokenVariables
): Promise<AccessTokenResponse> => {
  const query = AccessTokenDocument;
  return garpqhlClient.request({
    query,
    variables
  });
};

export const refreshAccessToken = async (
  garpqhlClient: GraphqlClient,
  variables: RefreshAccessTokenVariables
): Promise<RefreshAccessTokenResponse> => {
  const query = RefreshTokenDocument;
  return garpqhlClient.request({
    query,
    variables
  });
};
