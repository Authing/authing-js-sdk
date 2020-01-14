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
}

export default mod