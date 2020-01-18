import test from "ava";
import { formatError } from "../src/utils/formatError";

const Authing = require("../src/index");
const userPoolId = "5e1be38ab1599657b6477022";
const secret = "62c5ee88764b4584d65aae499fb9a84a";

let authing = new Authing({
  userPoolId,
  secret,
  host: {
    user: "http://localhost:5510/graphql",
    oauth: "http://localhost:5510/graphql"
  }
});

let group = {}
let role = {}
let roleIdList = []
let user
let userIdList = []
let permission = {}
let permissionIdList = []


const createGroup = async (name) => {
  name = name || `分组${Math.random().toString(36).slice(2)}`
  return await authing.authz.createGroup({
    name,
    description: "描述信息"
  })
}

async function createRole(name) {
  name = name || `角色${Math.random().toString(36).slice(2)}`
  return await authing.authz.createRole({
    name,
    description: '描述'
  })
}

async function createPermission(name) {
  name = name || `权限${Math.random().toString(36).slice(2)}`;
  return await authing.authz.createPermission({
    name,
    description: '描述'
  })
}

async function createUser() {
  return await authing.register({
    email: Math.random()
      .toString(36)
      .slice(2) + "@authing.cn",
    password: "123456a"
  });
}

// Group 增删改查
test('创建 Group', async t => {
  let res
  try {
    res = await authing.authz.createGroup({
      name: `管理员${Math.random().toString(36).slice(2)}`,
      description: "描述信息"
    })
  } catch (error) {
    t.fail(formatError(error))
  }
  t.assert(res)
  t.assert(res._id)
  group = res
})

test('查询 Group', async t => {
  let res
  try {
    res = await authing.authz.group(group._id)
  } catch (error) {
    t.fail(formatError(error))
  }

  t.assert(res)
  t.assert(res._id === group._id)
})

test('查询 Group 列表 - 默认方式', async  t => {
  let res
  try {
    res = await authing.authz.groupList()
  } catch (error) {
    t.fail(formatError(error))
  }
  t.assert(res)
  t.assert(res.totalCount > 0)
})

test('查询 Group 列表 - 按照创建时间升序（旧的优先）', async  t => {
  let res
  try {
    res = await authing.authz.groupList({
      sortBy: 'CREATEDAT_ASC',
      page: 1,
      count: 10
    })
  } catch (error) {
    t.fail(formatError(error))
  }

  t.assert(res)
  t.assert(res.totalCount > 0)
})

test('修改 Group', async  t => {
  let res
  try {
    res = await authing.authz.updateGroup({
      _id: group._id,
      description: '新的描述'
    })
  } catch (error) {
    t.fail(formatError(error))
  }

  t.assert(res)
  t.assert(res.name === group.name)
  t.assert(res.description === "新的描述")
})

test('删除 Group', async t => {
  try {
    await authing.authz.deleteGroup(group._id)
  } catch (error) {
    t.fail(formatError(error))
  }

  let res
  let errcode
  try {
    res = await authing.authz.group(group._id)
  } catch (error) {
    errcode = error.message.code
  }

  t.assert(!res)
  t.assert(errcode === 1004)
})

test('批量删除 Group', async t => {
  const group1 = await authing.authz.createGroup({
    name: `管理员${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })
  const group2 = await authing.authz.createGroup({
    name: `管理员${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })
  const res = await authing.authz.deleteGroupBatch([group1._id, group2._id])
  t.assert(res.code === 200)

  let errcode
  try {
    const res = await authing.authz.group(group1._id)
  } catch (error) {
    errcode = error.message.code
  }
  t.assert(errcode === 1004)
})


// Role 增删改查
test('创建 Role', async t => {
  role = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  t.assert(role)
  t.assert(role._id)
  t.assert(role.name)
})

test('修改 Role', async t => {
  role = await authing.authz.updateRole({
    _id: role._id,
    name: role.name,
    description: '新的描述'
  })
  t.assert(role)
  t.assert(role.description === '新的描述')
})

test('查询 Role', async t => {
  const res = await authing.authz.role(role._id)
  t.assert(res._id === role._id)
  t.assert(res.name === role.name)
})

test('查询用户池 Role - 默认排序', async t => {
  const res = await authing.authz.roleList()

  t.assert(res.totalCount > 0)
  t.assert(res.list[0])
})

test('查询用户池 Role - 自定义排序/分页', async t => {
  let res
  try {
    res = await authing.authz.roleList({
      sortBy: 'CREATEDAT_ASC',
      page: 1,
      count: 10
    })
  } catch (error) {
    t.fail(formatError(error))
  }

  t.assert(res)
  t.assert(res.totalCount > 0)
  t.assert(res.list[0])
})

test('删除 Role', async t => {
  await authing.authz.deleteRole(role._id)

  let errcode
  try {
    const res = await authing.authz.role(role._id)
  } catch (error) {
    errcode = error.message.code
  }
  t.assert(errcode === 1004)
})

test('批量删除 Role', async t => {
  const role1 = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  const role2 = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  let res
  res = await authing.authz.deleteRoleBatch([
    role1._id,
    role2._id
  ])
  t.assert(res.code === 200)

  let errcode
  try {
    res = await authing.authz.role(role1._id)
  } catch (error) {
    errcode = error.message.code
  }
  t.assert(errcode === 1004)
})

// Group 添加/删除 Role
test('Group 添加 Role - 不返回最新角色列表', async t => {
  group = await authing.authz.createGroup({
    name: `管理员${Math.random().toString(36).slice(2)}`,
    description: "描述信息"
  })

  role = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  const res = await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  })
  t.assert(res.code === 200)
})


test('Group 添加 Role - 返回最新角色列表', async t => {
  group = await authing.authz.createGroup({
    name: `管理员${Math.random().toString(36).slice(2)}`,
    description: "描述信息"
  })

  role = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  const res = await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  }, {
    fetchRoles: true
  })
  t.assert(res.code === 200)
  t.assert(res.data.totalCount)
  t.assert(res.data.list)
})

test('查询 Group 中包含的 Role', async t => {
  const res = await authing.authz.groupRoleList(group._id)
  t.assert(res.roles.totalCount === 1)
})

test('Group 删除 Role', async t => {
  let res = await authing.authz.removeRoleFromGroup({
    roleId: role._id,
    groupId: group._id
  })

  t.assert(res.code === 200)

  res = await authing.authz.groupRoleList(group._id)
  t.assert(res.roles.totalCount === 0)
})

test('Group 删除 Role - 返回最新角色列表', async t => {

  group = await authing.authz.createGroup({
    name: `管理员${Math.random().toString(36).slice(2)}`,
    description: "描述信息"
  })

  role = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  })

  let res = await authing.authz.removeRoleFromGroup({
    roleId: role._id,
    groupId: group._id
  }, {
    fetchRoles: true
  })

  t.assert(res.code === 200)
  t.assert(res.data.totalCount === 0)

  res = await authing.authz.groupRoleList(group._id)
  t.assert(res.roles.totalCount === 0)
})

test('Group 批量添加 Role', async t => {
  group = await authing.authz.createGroup({
    name: `管理员${Math.random().toString(36).slice(2)}`,
    description: "描述信息"
  })

  const role1 = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  const role2 = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  roleIdList.push(role1._id, role2._id)

  let res
  try {
    res = await authing.authz.addRoleToGroupBatch({
      roleIdList: [role1._id, role2._id],
      groupId: group._id
    })
  } catch (error) {
    t.fail(formatError(error))
  }

  t.assert(res.code === 200)
})

test('Group 批量添加 Role - 返回最新角色列表', async t => {
  group = await authing.authz.createGroup({
    name: `管理员${Math.random().toString(36).slice(2)}`,
    description: "描述信息"
  })

  const role1 = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  const role2 = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  roleIdList.push(role1._id, role2._id)

  let res
  try {
    res = await authing.authz.addRoleToGroupBatch({
      roleIdList,
      groupId: group._id
    }, {
      fetchRoles: true
    })
  } catch (error) {
    t.fail(formatError(error))
  }

  t.assert(res.data.totalCount)
  t.assert(res.data.list)
})

test('Group 批量删除 Role', async t => {
  let res = await authing.authz.removeRoleFromGroupBatch({
    roleIdList,
    groupId: group._id
  })

  t.assert(res.code === 200)

  res = await authing.authz.groupRoleList(group._id)
  t.assert(res.roles.totalCount === 0)
})

test('Group 批量删除 Role - 返回最新角色列表', async t => {
  let res = await authing.authz.removeRoleFromGroupBatch({
    roleIdList: [],
    groupId: group._id
  }, {
    fetchRoles: true
  })

  t.assert(res.code === 200)
  t.assert(res.data)

  res = await authing.authz.groupRoleList(group._id)
  t.assert(res.roles.totalCount === 0)
})

// Group 添加/删除 User
test('注册用户', async t => {
  try {
    user = await authing.register({
      email: Math.random()
        .toString(36)
        .slice(2) + "@authing.cn",
      password: "123456a"
    });
    t.assert(user.email);
    t.pass();
  } catch (err) {
    t.log(formatError(err));
    t.fail(formatError(err));
  }
})

test('Group 添加 User', async t => {
  const res = await authing.authz.addUserToGroup({
    groupId: group._id,
    userId: user._id
  })
  t.assert(res.code === 200)
})

test('Group 添加 User - 返回最新用户列表', async t => {
  user = await authing.register({
    email: Math.random()
      .toString(36)
      .slice(2) + "@authing.cn",
    password: "123456a"
  });

  group = await authing.authz.createGroup({
    name: `管理员${Math.random().toString(36).slice(2)}`,
    description: "描述信息"
  })

  const res = await authing.authz.addUserToGroup({
    groupId: group._id,
    userId: user._id
  }, {
    fetchUsers: true
  })
  t.assert(res.code === 200)
  t.assert(res.data)
  t.assert(res.data.totalCount)
  t.assert(res.data.list)
})

test('Group 查询用户列表', async t => {

  let res
  try {
    res = await authing.authz.groupUserList(group._id)
  } catch (err) {
    t.fail(formatError(err));
  }
  t.assert(res.users.totalCount === 1)
})

test('Group 删除 User', async t => {
  const res = await authing.authz.removeUserFromGroup({
    groupId: group._id,
    userId: user._id
  })
  t.assert(res.code === 200)
})

test('Group 批量添加 User', async t => {
  const user1 = await authing.register({
    email: Math.random()
      .toString(36)
      .slice(2) + "@authing.cn",
    password: "123456a"
  });
  const user2 = await authing.register({
    email: Math.random()
      .toString(36)
      .slice(2) + "@authing.cn",
    password: "123456a"
  });

  group = await authing.authz.createGroup({
    name: `管理员${Math.random().toString(36).slice(2)}`,
    description: "描述信息"
  })

  userIdList = [user1._id, user2._id]

  let res
  try {
    res = await authing.authz.addUserToGroupBatch({
      groupId: group._id,
      userIdList
    })
  } catch (error) {
    t.fail(formatError(error))
  }

  t.assert(res.code)
})

test('Group 批量删除 User', async  t => {
  const res = await authing.authz.removeUserFromGroupBatch({
    groupId: group._id,
    userIdList
  })
  t.assert(res.code === 200)
})

test('授予 User Role', async t => {
  role = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  user = await authing.register({
    email: Math.random()
      .toString(36)
      .slice(2) + "@authing.cn",
    password: "123456a"
  });

  const res = await authing.authz.assignRoleToUser({
    userId: user._id,
    roleId: role._id
  })

  t.assert(res.code === 200)
})

test('查询 Role 中包含的 User', async t => {
  try {
    const res = await authing.authz.roleUserList(role._id)
    t.assert(res.users.totalCount === 1)
    t.assert(res.users.list[0]._id === user._id)
  } catch (err) {
    t.fail(formatError(err))
  }
})


test('撤销 User Role', async t => {

  try {
    const res = await authing.authz.revokeRoleFromUser({
      userId: user._id,
      roleId: role._id
    })
    t.assert(res.code === 200)
  } catch (err) {
    t.fail(formatError(err));
  }
})

test('批量授予 User Role', async t => {
  role = await authing.authz.createRole({
    name: `角色${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  const user1 = await authing.register({
    email: Math.random()
      .toString(36)
      .slice(2) + "@authing.cn",
    password: "123456a"
  });

  const user2 = await authing.register({
    email: Math.random()
      .toString(36)
      .slice(2) + "@authing.cn",
    password: "123456a"
  });

  userIdList = [user1._id, user2._id]

  const res = await authing.authz.assignRoleToUserBatch({
    userIdList,
    roleId: role._id
  })

  t.assert(res.code === 200)
})

test('批量撤销 User Role', async t => {
  try {
    const res = await authing.authz.revokeRoleFromUserBatch({
      userIdList,
      roleId: role._id
    })
    t.assert(res.code === 200)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('创建 Permission', async  t => {
  try {
    const res = await authing.authz.createPermission({
      name: `权限${Math.random().toString(36).slice(2)}`,
      description: '描述'
    })
    t.assert(res._id)
    t.assert(res.name)
    t.assert(res.description)
    permission = res
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('查询 Permission', async t => {
  try {
    const res = await authing.authz.permission(permission._id)
    t.assert(res._id)
    t.assert(res.name)
    t.assert(res.description)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('批量查询 Permission', async t => {
  try {
    const res = await authing.authz.permissionList(userPoolId)
    t.assert(res.totalCount > 0)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('删除 Permission', async t => {
  try {
    let res = await authing.authz.deletePermission(permission._id)
    t.assert(res.code === 200)

    let errcode
    try {
      res = await authing.authz.permission(permission._id)
    } catch (error) {
      errcode = error.message.code
    }
    t.assert(errcode === 1004)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('批量删除 Permission', async t => {
  const permission1 = await authing.authz.createPermission({
    name: `权限${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })
  const permission2 = await authing.authz.createPermission({
    name: `权限${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  const res = await authing.authz.deletePermissionBatch([
    permission1._id,
    permission2._id
  ])
  t.assert(res.code === 200)

  let errcode
  try {
    const res = await authing.authz.permission(permission1._id)
  } catch (error) {
    errcode = error.message.code
  }
  t.assert(errcode === 1004)
})

test('修改 Permission', async t => {
  try {
    const res = await authing.authz.createPermission({
      name: `权限${Math.random().toString(36).slice(2)}`,
      description: '新的描述'
    })
    t.assert(res._id)
    t.assert(res.name)
    t.assert(res.description === "新的描述")
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('Role 添加 Permission', async t => {

  permission = await authing.authz.createPermission({
    name: `权限${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  try {
    const res = await authing.authz.addPermissionToRole({
      permissionId: permission._id,
      roleId: role._id
    }, {
      fetchPermissions: true
    })
    t.assert(res.code === 200)
  } catch (error) {
    t.fail(formatError(error))
  }

})

test('Role 批量添加 Permission', async t => {
  const permission1 = await authing.authz.createPermission({
    name: `权限${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  const permission2 = await authing.authz.createPermission({
    name: `权限${Math.random().toString(36).slice(2)}`,
    description: '描述'
  })

  permissionIdList = [permission1._id, permission2._id]
  try {
    const res = await authing.authz.addPermissionToRoleBatch({
      permissionIdList,
      roleId: role._id
    }, {
      fetchPermissions: true
    })
    t.assert(res.code === 200)
    t.assert(res.data.list)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('Role 删除 Permission', async  t => {
  try {
    const res = await authing.authz.removePermissionFromRole({
      permissionId: permission._id,
      roleId: role._id
    }, {
      fetchPermissions: true
    })
    t.assert(res.code === 200)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('Role 批量删除 Permission', async t => {
  try {
    const res = await authing.authz.removePermissionFromRoleBatch({
      permissionIdList,
      roleId: role._id
    }, {
      fetchPermissions: true
    })
    t.assert(res.code === 200)
    t.assert(res.data.list.length === 0)
    t.assert(res.data.totalCount === 0)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('查询群组列表', async t => {
  const group = await createGroup()
  const user = await createUser()
  const res = await authing.authz.addUserToGroup({
    groupId: group._id,
    userId: user._id
  }, {
    fetchUsers: true
  })
  t.assert(res.data.totalCount === 1)
  t.assert(res.data.list.length === 1)

  try {
    const res = await authing.userGroupList(user._id)
    t.assert(res.totalCount === 1)
    t.assert(res.rawList.length === 1)
    t.assert(res.list.length === 1)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('查询角色列表 - 直接授予角色', async t => {
  const user = await createUser()
  const role = await createRole()

  try {
    const res = await authing.authz.assignRoleToUser({
      userId: user._id,
      roleId: role._id
    }, {
      fetchUsers: true
    })
  } catch (error) {
    t.fail(formatError(error))
  }

  try {
    const res = await authing.userRoleList(user._id)
    t.assert(res.totalCount === 1)
    t.assert(res.rawList.length === 1)
    t.assert(res.list.length === 1)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('查询角色列表 - 通过分组继承角色', async t => {
  const group = await createGroup()
  const role = await createRole()
  const user = await createUser()

  await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  })

  await authing.authz.addUserToGroup({
    groupId: group._id,
    userId: user._id
  })

  try {
    const res = await authing.userRoleList(user._id)
    t.assert(res.totalCount === 1)
    t.assert(res.rawList.length === 1)
    t.assert(res.list.length === 1)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('查询角色列表 - 直接授予 & 通过分组继承', async t => {
  const group = await createGroup()
  const role = await createRole()
  const user = await createUser()

  // 通过分组继承
  await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  })
  await authing.authz.addUserToGroup({
    groupId: group._id,
    userId: user._id
  })

  // 直接授予角色
  const role2 = await createRole()
  await authing.authz.assignRoleToUser({
    roleId: role2._id,
    userId: user._id
  })

  try {
    const res = await authing.userRoleList(user._id)
    t.assert(res.totalCount === 2)
    t.assert(res.rawList.length === 2)
    t.assert(res.list.length === 2)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('查询权限列表 - 直接赋予用户角色', async t => {
  const role = await createRole()
  let permissions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  permissions.forEach(async p => {
    let permission = await createPermission();
    const res = await authing.authz.addPermissionToRole({
      roleId: role._id,
      permissionId: permission._id
    })
  })

  const user = await createUser()
  await authing.authz.assignRoleToUser({
    roleId: role._id,
    userId: user._id
  })

  const res = await authing.userPermissionList(user._id)
  t.assert(res.totalCount === 10)
  t.assert(res.list.length === 10)
  t.assert(res.rawList.length === 10)
})

test('查询权限列表 - 将用户加入群组', async t => {
  const group = await createGroup()
  const role = await createRole()
  let permissions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  permissions.forEach(async p => {
    let permission = await createPermission();
    await authing.authz.addPermissionToRole({
      roleId: role._id,
      permissionId: permission._id
    })
  })
  const user = await createUser()

  await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  })

  await authing.authz.addUserToGroup({
    groupId: group._id,
    userId: user._id
  })

  const res = await authing.userPermissionList(user._id)
  t.assert(res.totalCount === 10)
  t.assert(res.list.length === 10)
  t.assert(res.rawList.length === 10)
})
