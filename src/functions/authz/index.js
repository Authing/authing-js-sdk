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
}

export default mod