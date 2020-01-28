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

test('SDK 结构', async t => {
  const org = authing.OrgModel
  org.all()
  t.assert(true)
})