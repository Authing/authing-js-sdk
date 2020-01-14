import test from "ava";
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

test('创建 Group', async t => {
  let res
  try {
    res = await authing.authz.createGroup({
      name: `管理员${Math.random().toString(36).slice(2)}`,
      description: "描述信息"
    })
  } catch (error) {
    console.log(error.message.message)
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
    console.log(error.response.data.errors[0])
  }

  t.assert(res)
  t.assert(res._id === group._id)
})

test('查询 Group 列表', async  t => {
  let res
  try {
    res = await authing.authz.groupList()
  } catch (error) {
    console.log(error)
  }

  t.assert(res)
  t.assert(res.totalCount > 0)
})

test('修改 Group', async  t => {
  let res
  try {
    res = await authing.authz.updateGroup({
      _id: group._id,
      name: group.name,
      description: '新的描述'
    })
  } catch (error) {
    console.log(error)
  }

  t.assert(res)
  t.assert(res._id === group._id)
  t.assert(res.description === "新的描述")
})

test('删除 Group', async t => {
  try {
    await authing.authz.deleteGroup(group._id)
  } catch (error) {
    console.log(error)
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
  t.assert(res.success)
  t.assert(res.requestCount === 2)
  t.assert(res.deletedCount === 2)

  let errcode
  try {
    const res = await authing.authz.group(group1._id)
  } catch (error) {
    errcode = error.message.code
  }
  t.assert(errcode === 1004)
})

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

test('批量查询 Role', async t => {
  const res = await authing.authz.roleList()
  t.assert(res.totalCount > 0)
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
  t.assert(res.success)

  let errcode
  try {
    res = await authing.authz.role(role1._id)
  } catch (error) {
    errcode = error.message.code
  }
  t.assert(errcode === 1004)
})

test('Group 添加 Role', async t => {
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
  const roles = res.roles
  t.assert(roles.totalCount === 1)
  t.assert(roles.list[0]._id === role._id)
})

test('查询 Group 中包含的 Role', async t => {
  const res = await authing.authz.groupRoleList(group._id)
  t.assert(res.roles.totalCount === 1)
})

test('Group 删除 Role', async t => {
  await authing.authz.removeRoleFromGroup({
    roleId: role._id,
    groupId: group._id
  })
  const res = await authing.authz.groupRoleList(group._id)
  t.assert(res.roles.totalCount === 0)
})

test('Group 批量添加 Role', async t => {
  const group = await authing.authz.createGroup({
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

  let res
  try {
    res = await authing.authz.addRoleToGroupBatch({
      roleIdList: [role1._id, role2._id],
      groupId: group._id
    })
  } catch (error) {
    console.log(error.response.data.errors[0])
  }

  const roles = res.roles
  t.assert(roles.totalCount === 2)
})