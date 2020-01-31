import test from "ava";
import { inspect } from "util"
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
    t.fail(formatError(errF))
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
    t.fail(formatError(errF))
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