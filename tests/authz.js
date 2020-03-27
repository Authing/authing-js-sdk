import test from "ava";
import { formatError } from "../src/utils/formatError";
import {
  authing, sleep,
  createGroup, createGroupBatch, createRole, createRoleBatch,
  createPermission, createPermissionBatch, createUser, createUserBatch
} from "./base"

let group = {}
let role = {}
let user
let userIdList = []
let permissionIdList = []


// Group 增删改查
test('创建 Group', async t => {
  const group = await createGroup()
  t.assert(group)
  t.assert(group._id)
  t.assert(group.name)
  t.assert(group.description)
  t.assert(group.createdAt)
  t.assert(group.updatedAt)
})

test('查询 Group', async t => {
  let group = await createGroup()
  group = await authing.authz.group(group._id)
  t.assert(group)
  t.assert(group._id)
  t.assert(group.name)
  t.assert(group.description)
  t.assert(group.createdAt)
  t.assert(group.updatedAt)
})

test('查询 Group # 不存在', async t => {
  try {
    await authing.authz.group("NOGTEXIST")
  } catch (error) {
    const errcode = error.message.code
    t.assert(errcode === 3901)
  }
})

test('查询 Group 列表 # 默认方式', async  t => {
  const { totalCount, list } = await authing.authz.groupList()
  t.assert(totalCount)
  t.assert(list.length)
})

test('查询 Group 列表 # 按照创建时间升序（旧的优先）', async  t => {
  const { totalCount, list } = await authing.authz.groupList({
    sortBy: 'CREATEDAT_ASC',
  })
  t.assert(totalCount)
  t.assert(list.length)
})


test('查询 Group 列表 # 分页', async  t => {
  await createGroupBatch(10)
  await sleep(1000)
  await createGroupBatch(10)
  const { list: page0 } = await authing.authz.groupList()
  const { list: page1 } = await authing.authz.groupList({ page: 1 })
  t.assert(page0.length === 10)
  t.assert(page0[0].createdAt > page1[0].createdAt)
})

test('修改 Group', async  t => {
  let group = await createGroup()
  let updatedGroup = await authing.authz.updateGroup({
    _id: group._id,
    description: '新的描述'
  })
  t.assert(group.name === updatedGroup.name)
  t.assert(updatedGroup.description === "新的描述")
  t.assert(updatedGroup.createdAt)
  t.assert(updatedGroup.updatedAt)
})

test('删除 Group', async t => {
  let group = await createGroup()
  let res = await authing.authz.deleteGroup(group._id)
  t.assert(res.code === 200)

  try {
    await authing.authz.group(group._id)
  } catch (error) {
    const errcode = error.message.code
    t.assert(errcode === 3901)
  }
})

test('批量删除 Group', async t => {
  const groups = await createGroupBatch(3)
  const idList = groups.map(group => group._id)
  const res = await authing.authz.deleteGroupBatch(idList)
  t.assert(res.code === 200)

  try {
    await authing.authz.group(groups[0]._id)
  } catch (error) {
    const errcode = error.message.code
    t.assert(errcode === 3901)
  }
})


// Role 增删改查
test('创建 Role', async t => {
  const role = await createRole()
  t.assert(role)
  t.assert(role._id)
  t.assert(role.name)
  t.assert(role.createdAt)
  t.assert(role.updatedAt)
})

test('创建 Role # 可创建同名 Role', async t => {
  const role1 = await createRole('角色名')
  const role2 = await createRole('角色名')
  t.assert(role1)
  t.assert(role2)
})

test('修改 Role', async t => {
  let role = await createRole()
  role = await authing.authz.updateRole({
    _id: role._id,
    description: '新的描述'
  })
  t.assert(role)
  t.assert(role.name)
  t.assert(role.description === '新的描述')
})

test('查询 Role', async t => {
  let role = await createRole()
  role = await authing.authz.role(role._id)
  t.assert(role)
  t.assert(role._id)
  t.assert(role.name)
  t.assert(role.description)
  t.assert(role.createdAt)
  t.assert(role.updatedAt)
})

test('查询用户池 Role # 默认排序', async t => {
  await createRoleBatch(15)
  const { totalCount, list } = await authing.authz.roleList()
  t.assert(totalCount > 10)
  t.assert(list.length === 10)
})

test('查询用户池 Role - 自定义排序/分页', async t => {
  await createRoleBatch(10)
  await sleep(1000)
  await createRoleBatch(10)
  const { list: page0 } = await authing.authz.roleList({
    sortBy: 'CREATEDAT_ASC',
    page: 0,
    count: 10
  })
  const { list: page1 } = await authing.authz.roleList({
    sortBy: 'CREATEDAT_ASC',
    page: 1,
    count: 10
  })

  t.assert(page0.length === 10)
  t.assert(page1.length)
})

test('删除 Role', async t => {
  const role = await createRole()
  await authing.authz.deleteRole(role._id)
  try {
    await authing.authz.role(role._id)
  } catch (error) {
    const errcode = error.message.code
    t.assert(errcode === 3903)
  }
})

test('批量删除 Role', async t => {
  const roles = await createRoleBatch(3)
  const idList = roles.map(x => x._id)
  const res = await authing.authz.deleteRoleBatch(idList)
  t.assert(res.code === 200)

  try {
    await authing.authz.role(idList[0])
  } catch (error) {
    const errcode = error.message.code
    t.assert(errcode === 3903)
  }
})

// Group 添加/删除 Role
test('Group 添加 Role - 不返回最新角色列表', async t => {
  const group = await createGroup()
  const role = await createRole()
  const res = await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  })
  t.assert(res.code === 200)
})


test('Group 添加 Role - 返回最新角色列表', async t => {
  const group = await createGroup()
  const role = await createRole()
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
  const group = await createGroup()
  const role = await createRole()
  await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  })
  try {
    const res = await authing.authz.groupRoleList(group._id)
    t.assert(res.totalCount === 1)
    t.assert(res.list.length === 1)
  } catch (error) {
    t.fail(formatError(error))
  }

})

test('Group 删除 Role', async t => {
  let res
  const group = await createGroup()
  const role = await createRole()

  res = await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  })
  res = await authing.authz.removeRoleFromGroup({
    roleId: role._id,
    groupId: group._id
  })

  t.assert(res.code === 200)
  res = await authing.authz.groupRoleList(group._id)
  t.assert(res.totalCount === 0)
  t.assert(res.list.length === 0)
})

test('Group 删除 Role - 返回最新角色列表', async t => {

  const group = await createGroup()
  const role = await createRole()
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
  t.assert(res.totalCount === 0)
  t.assert(res.list.length === 0)
})

test('Group 批量添加 Role', async t => {
  const group = await createGroup()
  const roles = await createRoleBatch(3)
  const roleIdList = roles.map(x => x._id)

  try {
    const res = await authing.authz.addRoleToGroupBatch({
      roleIdList,
      groupId: group._id
    })
    t.assert(res.code === 200)
  } catch (error) {
    t.fail(formatError(error))
  }

})

test('Group 批量添加 Role - 返回最新角色列表', async t => {
  const group = await createGroup()
  const roles = await createRoleBatch(3)
  const roleIdList = roles.map(x => x._id)

  try {
    const res = await authing.authz.addRoleToGroupBatch({
      roleIdList,
      groupId: group._id
    }, {
      fetchRoles: true
    })
    t.assert(res.code === 200)
    t.assert(res.data.totalCount)
    t.assert(res.data.list)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('Group 批量删除 Role', async t => {
  const group = await createGroup()
  const roles = await createRoleBatch(3)
  const roleIdList = roles.map(x => x._id)
  await authing.authz.addRoleToGroupBatch({
    roleIdList,
    groupId: group._id
  })

  let res = await authing.authz.removeRoleFromGroupBatch({
    roleIdList,
    groupId: group._id
  })
  t.assert(res.code === 200)

  res = await authing.authz.groupRoleList(group._id)
  t.assert(res.totalCount === 0)
  t.assert(res.list.length === 0)
})

test('Group 批量删除 Role - 返回最新角色列表', async t => {
  const group = await createGroup()
  const roles = await createRoleBatch(3)
  const roleIdList = roles.map(x => x._id)
  await authing.authz.addRoleToGroupBatch({
    roleIdList,
    groupId: group._id
  })

  let res = await authing.authz.removeRoleFromGroupBatch({
    roleIdList,
    groupId: group._id
  }, {
    fetchRoles: true
  })
  t.assert(res.code === 200)
  t.assert(res.data)

  res = await authing.authz.groupRoleList(group._id)
  t.assert(res.totalCount === 0)
  t.assert(res.list.length === 0)
})

test('查询 Group Permission 列表 # 1', async t => {
  const group = await createGroup()
  const role = await createRole()
  const permission = await createPermission()
  await authing.authz.addPermissionToRole({
    roleId: role._id,
    permissionId: permission._id
  })
  await authing.authz.addRoleToGroup({
    roleId: role._id,
    groupId: group._id
  })

  const { totalCount, list } = await authing.authz.groupPermissionList(group._id)
  t.assert(totalCount === 1)
  t.assert(list.length === 1)
  t.assert(list[0].name)
})

test('查询 Group Permission 列表 # 2', async t => {
  const group = await createGroup()
  const role1 = await createRole()
  const role2 = await createRole()
  const permission1 = await createPermission()
  const permission2 = await createPermission()

  await authing.authz.addPermissionToRole({
    roleId: role1._id,
    permissionId: permission1._id
  })
  await authing.authz.addPermissionToRole({
    roleId: role2._id,
    permissionId: permission2._id
  })
  await authing.authz.addRoleToGroup({
    roleId: role1._id,
    groupId: group._id
  })
  await authing.authz.addRoleToGroup({
    roleId: role2._id,
    groupId: group._id
  })

  const { totalCount, list } = await authing.authz.groupPermissionList(group._id)
  t.assert(totalCount === 2)
  t.assert(list.length === 2)
  t.assert(list[0].name)
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
    t.fail(formatError(err));
  }
})

test('Group 添加 User', async t => {
  const group = await createGroup()
  const user = await createUser()
  const res = await authing.authz.addUserToGroup({
    groupId: group._id,
    userId: user._id
  })
  t.assert(res.code === 200)
  t.assert(!res.data)
})

test('Group 添加 User - 返回最新用户列表', async t => {
  const group = await createGroup()
  const user = await createUser()
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
  const group = await createGroup()
  const users = await createUserBatch(10)
  const userIdList = users.map(x => x._id)
  await authing.authz.addUserToGroupBatch({
    groupId: group._id,
    userIdList
  })

  try {
    const { totalCount, list } = await authing.authz.groupUserList(group._id)
    t.assert(totalCount === 10)
    t.assert(list.length === 10)
  } catch (err) {
    t.fail(formatError(err));
  }
})

test('Group 查询用户列表 - 分页', async t => {

  // 创建一个 Group
  const group = await createGroup()

  // 创建多个用户
  let users = []
  for (let i = 0; i < 15; i++) {
    let user = await createUser()
    users.push(user)
  }

  // 添加用户到 group
  for (let user of users) {
    await authing.authz.addUserToGroup({
      groupId: group._id,
      userId: user._id
    })
  }

  // 分页查询用户
  let res = await authing.authz.groupUserList(group._id)
  t.assert(res.totalCount === 15)
  t.assert(res.list.length === 10)

  res = await authing.authz.groupUserList(group._id, {
    page: 1,
    count: 10
  })
  t.assert(res.totalCount === 15)
  t.assert(res.list.length === 5)
})

test('Group 删除 User', async t => {
  try {
    const group = await createGroup()
    const user = await createUser()
    let res = await authing.authz.addUserToGroup({
      groupId: group._id,
      userId: user._id
    })
    res = await authing.authz.removeUserFromGroup({
      groupId: group._id,
      userId: user._id
    })
    t.assert(res.code === 200)

    const { totalCount, list } = await authing.authz.groupUserList(group._id)
    t.assert(totalCount === 0)
    t.assert(list.length === 0)
  } catch (err) {
    t.fail(formatError(err))
  }
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

test('查询 Role 中包含的 User # 分页', async t => {

  try {
    // 创建一个 Role
    const role = await createRole()
    // 创建多个用户
    let users = await createUserBatch(15)
    // 添加用户到 group
    for (let user of users) {
      await authing.authz.assignRoleToUser({
        roleId: role._id,
        userId: user._id
      })
    }

    // 分页查询用户
    let res = await authing.authz.roleUserList(role._id)
    t.assert(res.totalCount === 15)
    t.assert(res.list.length === 10)

    res = await authing.authz.roleUserList(role._id, {
      page: 1,
      count: 10
    })
    t.assert(res.totalCount === 15)
    t.assert(res.list.length === 5)
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
  const permission = await createPermission()
  t.assert(permission)
  t.assert(permission._id)
  t.assert(permission.name)
  t.assert(permission.description)
  t.assert(permission.createdAt)
  t.assert(permission.updatedAt)
})

test('查询 Permission', async t => {
  let permission = await createPermission()
  permission = await authing.authz.permission(permission._id)
  t.assert(permission)
  t.assert(permission._id)
  t.assert(permission.name)
  t.assert(permission.description)
  t.assert(permission.createdAt)
  t.assert(permission.updatedAt)
})

test('查询用户池 Permission 列表 # 默认方式', async t => {
  await createPermissionBatch(10)

  try {
    const { totalCount, list } = await authing.authz.permissionList()
    t.assert(totalCount > 0)
    t.assert(list.length === 10)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('查询用户池 Permission 列表 # 排序/分页', async t => {
  await createPermissionBatch(10)
  await sleep(10)
  await createPermissionBatch(10)

  const { list: page0 } = await authing.authz.permissionList({
    sortBy: 'CREATEDAT_ASC',
    page: 0,
    count: 10
  })
  const { list: page1 } = await authing.authz.permissionList({
    sortBy: 'CREATEDAT_ASC',
    page: 1,
    count: 10
  })

  t.assert(page0.length === 10)
  t.assert(page0[0].createdAt < page1[0].createdAt)
})

test('删除 Permission', async t => {
  const p = await createPermission()
  const res = await authing.authz.deletePermission(p._id)
  t.assert(res.code === 200)

  try {
    await authing.authz.permission(p._id)
  } catch (error) {
    const errcode = error.message.code
    t.assert(errcode === 3905)
  }
})

test('批量删除 Permission', async t => {
  const permissions = await createPermissionBatch(3)
  const idList = permissions.map(x => x._id)
  const res = await authing.authz.deletePermissionBatch(idList)
  t.assert(res.code === 200)

  try {
    await authing.authz.permission(idList[0])
  } catch (error) {
    const errcode = error.message.code
    t.assert(errcode === 3905)
  }
})

test('修改 Permission', async t => {
  let permission = await createPermission()
  permission = await authing.authz.updatePermission({
    _id: permission._id,
    description: '新的描述'
  })
  t.assert(permission)
  t.assert(permission._id)
  t.assert(permission.name)
  t.assert(permission.description === "新的描述")
  t.assert(permission.createdAt)
  t.assert(permission.updatedAt)
})

test('Role 添加 Permission', async t => {
  const role = await createRole()
  const permission = await createPermission()
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
  const role = await createRole()
  const permissions = await createPermissionBatch(3)
  const permissionIdList = permissions.map(x => x._id)
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

test('查询 Role Permission 列表', async t => {
  const role = await createRole()
  const permission = await createPermission()
  await authing.authz.addPermissionToRole({
    roleId: role._id,
    permissionId: permission._id
  })
  try {
    const res = await authing.authz.rolePermissionList(role._id)
    t.assert(res.list.length === 1)
    t.assert(res.totalCount === 1)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('Role 删除 Permission', async  t => {
  const role = await createRole()
  const permission = await createPermission()
  await authing.authz.addPermissionToRole({
    roleId: role._id,
    permissionId: permission._id
  })

  try {
    const res = await authing.authz.removePermissionFromRole({
      permissionId: permission._id,
      roleId: role._id
    }, {
      fetchPermissions: true
    })
    t.assert(res.code === 200)
    t.assert(res.data.totalCount === 0)
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
    await authing.authz.assignRoleToUser({
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
  const permissions = await createPermissionBatch(10)
  for (let permission of permissions) {
    await authing.authz.addPermissionToRole({
      roleId: role._id,
      permissionId: permission._id
    })
  }
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
  permissions.forEach(async () => {
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
