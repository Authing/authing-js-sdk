import test from "ava";
import { formatError } from "../src/utils/formatError";
import { authing, createGroup, createUser, createRole, createPermissionBatch } from "./base"

let org
let rootGroup
let group

test('创建 Org', async t => {
  rootGroup = await createGroup()
  try {
    org = await authing.org.createOrg({
      rootGroupId: rootGroup._id
    })
    t.assert(org._id)
    t.assert(org.nodes.length)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('添加 Node', async t => {
  group = await createGroup()
  try {
    const newOrg = await authing.org.addNode({
      orgId: org._id,
      parentGroupId: org.nodes[0]._id,
      groupId: group._id
    })
    t.assert(newOrg._id)
    t.assert(newOrg.nodes.length === 2)
  } catch (error) {
    t.fail(formatError(error))
  }

  const group2 = await createGroup()
  await authing.org.addNode({
    orgId: org._id,
    parentGroupId: org.nodes[0]._id,
    groupId: group2._id
  })
})

test('查询 Org', async t => {
  try {
    org = await authing.org.findById(org._id)
    t.assert(org.nodes.length === 3)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('查询 Org 列表', async t => {
  try {
    const { totalCount, list: orgs } = await authing.org.all()
    t.assert(totalCount)
    t.assert(orgs.length)

    let org = orgs[0]
    // printFullObject(org.tree)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('查询 Org Root Node', async t => {
  const group = await authing.org.rootNode(org._id)
  t.assert(group)
  t.assert(group._id)
  t.assert(group.name)
  t.assert(group._id === rootGroup._id)
})

test('判断是否为 Root Node', async t => {

  try {
    const isRoot = await authing.org.isRootNode({
      groupId: rootGroup._id,
      orgId: org._id
    })
    t.assert(isRoot === true)
  } catch (err) {
    t.fail(formatError(err))
  }

  try {
    const isRoot = await authing.org.isRootNode({
      groupId: group._id,
      orgId: org._id
    })
    t.assert(isRoot === false)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('查询根节点的子节点', async t => {
  try {
    const children = await authing.org.childrenNodes({
      orgId: org._id,
      groupId: rootGroup._id
    })
    t.assert(children.length === 2)
    t.assert(children[0].group)
    t.assert(children[0].group._id)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('查询叶节点的子节点', async t => {
  try {
    const children = await authing.org.childrenNodes({
      orgId: org._id,
      groupId: group._id
    })
    t.assert(children.length === 0)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('删除 Node', async t => {
  org = await authing.org.removeNode({
    orgId: org._id,
    groupId: group._id
  })
  t.assert(org._id)
  t.assert(org.nodes.length === 2)
})

test('删除 Org', async t => {
  try {
    const res = await authing.org.dropById(org._id)
    t.assert(res.code === 200)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('查询 Org - 不存在', async t => {
  try {
    org = await authing.org.findById(org._id)
    t.assert(org._id)
  } catch (err) {
    t.assert(err.message.code === 3901)
  }
})

test('组织结构管理 # 1', async t => {
  /* 组织架构
      公司A 
    /      \
  技术部门  销售部
    /          \
  CTO         销售经理
  */

  const 公司A = await createGroup('公司A')
  const 技术部门 = await createGroup('技术部门')
  const 销售部 = await createGroup('销售部')
  const CTO = await createGroup('CTO')
  const 销售经理 = await createGroup('销售经理')

  let org = await authing.org.createOrg({
    rootGroupId: 公司A._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 技术部门._id,
    parentGroupId: 公司A._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 销售部._id,
    parentGroupId: 公司A._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: CTO._id,
    parentGroupId: 技术部门._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 销售经理._id,
    parentGroupId: 销售部._id
  })

  org = await authing.org.findById(org._id)
  const orgTree = org.tree
  // printFullObject(orgTree)
  t.assert(orgTree._id === 公司A._id) // 根节点
  t.assert(orgTree.children.length === 2) // 有两个一级子节点
})

test('组织结构管理 # 非凡科技有限公司', async t => {
  // 创建 Group
  const 非凡科技有限公司 = await createGroup("非凡科技有限公司")

  const 产品部 = await createGroup('产品部')
  const 产品经理 = await createGroup('产品经理')
  const 设计 = await createGroup('设计')

  const 研发部 = await createGroup('研发部')
  const 开发 = await createGroup('开发')
  const 测试 = await createGroup('测试')
  const 运维 = await createGroup('运维')

  const 运营部 = await createGroup('运营部')
  const 用户运营 = await createGroup('用户运营')
  const 渠道运营 = await createGroup('渠道运营')

  const 综合管理部 = await createGroup('综合管理部')
  const HR = await createGroup('HR')
  const 财务 = await createGroup('财务')
  const 行政 = await createGroup('行政')

  // 创建组织机构
  let org = await authing.org.createOrg({
    rootGroupId: 非凡科技有限公司._id
  })

  // 添加产品部
  await authing.org.addNode({
    orgId: org._id,
    groupId: 产品部._id,
    parentGroupId: 非凡科技有限公司._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 产品经理._id,
    parentGroupId: 产品部._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 设计._id,
    parentGroupId: 产品部._id
  })

  // 添加研发部
  await authing.org.addNode({
    orgId: org._id,
    groupId: 研发部._id,
    parentGroupId: 非凡科技有限公司._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 开发._id,
    parentGroupId: 研发部._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 测试._id,
    parentGroupId: 研发部._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 运维._id,
    parentGroupId: 研发部._id
  })

  // 添加运营部
  await authing.org.addNode({
    orgId: org._id,
    groupId: 运营部._id,
    parentGroupId: 非凡科技有限公司._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 用户运营._id,
    parentGroupId: 运营部._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 渠道运营._id,
    parentGroupId: 运营部._id
  })

  // 添加综合管理部
  await authing.org.addNode({
    orgId: org._id,
    groupId: 综合管理部._id,
    parentGroupId: 非凡科技有限公司._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: HR._id,
    parentGroupId: 综合管理部._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 财务._id,
    parentGroupId: 综合管理部._id
  })
  await authing.org.addNode({
    orgId: org._id,
    groupId: 行政._id,
    parentGroupId: 综合管理部._id
  })

  // 查询最新的树状结构
  const { tree } = await authing.org.findById(org._id)
  t.assert(tree._id === 非凡科技有限公司._id)
  t.assert(tree.children.length === 4)

  // 给非凡技术有限公司添加角色
  const InvoiceSubmitter = await createRole('Invoice Submitter')
  let permissions = await createPermissionBatch(['invoice:login', 'invoice:create', 'invoice:query', 'invoice:list', 'invoice:delete'])
  await authing.authz.addPermissionToRoleBatch({
    roleId: InvoiceSubmitter._id,
    permissionIdList: permissions.map(x => x._id)
  })

  const CorpEmailUser = await createRole('Corp Email Use')
  permissions = await createPermissionBatch(['corp-email:login', 'corp-email:send', 'corp-email:receive', 'corp-email:list', 'corp-email:detail'])
  await authing.authz.addPermissionToRoleBatch({
    roleId: CorpEmailUser._id,
    permissionIdList: permissions.map(x => x._id)
  })

  await authing.authz.addRoleToGroup({
    roleId: InvoiceSubmitter._id,
    groupId: 非凡科技有限公司._id
  })
  await authing.authz.addRoleToGroup({
    roleId: CorpEmailUser._id,
    groupId: 非凡科技有限公司._id
  })

  const user = await createUser()
  await authing.authz.addUserToGroup({
    groupId: 非凡科技有限公司._id,
    userId: user._id
  })

  const { rawList: permissionList } = await authing.userPermissionList(user._id)
  t.assert(permissionList.length === 10)
}) 