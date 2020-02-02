import createGroup from "./createGroup"
import group from "./group"
import groupList from "./groupList"
import updateGroup from "./updateGroup"
import deleteGroup from "./deleteGroup"
import deleteGroupBatch from "./deleteGroupBatch"
import role from "./role"
import createRole from "./createRole"
import updateRole from "./updateRole"
import roleList from "./roleList"
import deleteRole from "./deleteRole"
import deleteRoleBatch from "./deleteRoleBatch"
import addRoleToGroup from "./addRoleToGroup"
import addRoleToGroupBatch from "./addRoleToGroupBatch"
import removeRoleFromGroup from "./removeRoleFromGroup"
import groupRoleList from "./groupRoleList"
import removeRoleFromGroupBatch from "./removeRoleFromGroupBatch"
import addUserToGroup from "./addUserToGroup"
import addUserToGroupBatch from "./addUserToGroupBatch"
import groupUserList from "./groupUserList"
import removeUserFromGroup from "./removeUserFromGroup"
import removeUserFromGroupBatch from "./removeUserFromGroupBatch"
import assignRoleToUser from "./assignRoleToUser"
import assignRoleToUserBatch from "./assignRoleToUserBatch"
import revokeRoleFromUser from "./revokeRoleFromUser"
import revokeRoleFromUserBatch from "./revokeRoleFromUserBatch"
import roleUserList from "./roleUserList"
import rolePermissionList from "./rolePermissionList"
import createPermission from "./createPermission"
import updatePermission from "./updatePermission"
import permission from "./permission"
import permissionList from "./permissionList"
import deletePermission from "./deletePermission"
import deletePermissionBatch from "./deletePermissionBatch"
import addPermissionToRole from "./addPermissionToRole"
import addPermissionToRoleBatch from "./addPermissionToRoleBatch"
import removePermissionFromRole from "./removePermissionFromRole"
import removePermissionFromRoleBatch from "./removePermissionFromRoleBatch"
import groupPermissionList from "./groupPermissionList"

const mod = {

  // Group
  createGroup,
  group,
  groupList,
  updateGroup,
  deleteGroup,
  deleteGroupBatch,

  // Group Users & Roles
  groupRoleList,
  groupUserList,
  groupPermissionList,

  // Role
  role,
  roleList,
  createRole,
  updateRole,
  deleteRole,
  deleteRoleBatch,

  // Group add/remove Role
  addRoleToGroup,
  addRoleToGroupBatch,
  removeRoleFromGroup,
  removeRoleFromGroupBatch,

  // Group add/remove User
  addUserToGroup,
  addUserToGroupBatch,
  removeUserFromGroup,
  removeUserFromGroupBatch,

  // Role add/remove User
  assignRoleToUser,
  assignRoleToUserBatch,
  revokeRoleFromUser,
  revokeRoleFromUserBatch,

  // Role & User
  roleUserList,
  rolePermissionList,

  // Permission
  permission,
  permissionList,
  createPermission,
  updatePermission,
  deletePermission,
  deletePermissionBatch,

  addPermissionToRole,
  addPermissionToRoleBatch,
  removePermissionFromRole,
  removePermissionFromRoleBatch
}

export default mod