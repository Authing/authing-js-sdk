import createGroup from "./createGroup"
import group from "./group"
import groupList from "./groupList"
import updateGroup from "./updateGroup"
import deleteGroup from "./deleteGroup"
import deleteGroupBatch from "./deleteGroupBatch"
import role from "./role"
import createRole from "./createRole"

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
  createRole
}

export default mod