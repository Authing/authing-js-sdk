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

test('创建 Org', async t => {
  const group = await createGroup()
  try {
    org = await authing.OrgModel.createOrg({
      rootId: group._id
    })
    t.assert(org._id)
    t.assert(org.nodes.length)
  } catch (err) {
    t.fail(formatError(err))
  }
})

test('添加 Org Node', async t => {
  const group = await createGroup()
  try {
    org = await authing.OrgModel.addNode({
      orgId: org._id,
      parentId: org.nodes[0]._id,
      groupId: group._id
    })
    t.assert(org._id)
    t.assert(org.nodes.length === 2)
  } catch (error) {
    t.fail(formatError(error))
  }
})