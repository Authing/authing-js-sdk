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

const mod = {

  // Group
  createGroup,
  group,
  groupList,
  updateGroup,
  deleteGroup,
  deleteGroupBatch,

  // Role
  role,
  roleList,
  createRole,
  updateRole,
  deleteRole,
  deleteRoleBatch
}

export default mod