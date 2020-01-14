import test from "ava";
import { formatError } from "../src/utils/formatError";
import { randomEmail } from "../src/utils/randomEmail"
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

let groupId = null

test.before('创建 Group', async t => {
  let res
  try {
    res = await authing.authn.createGroup({
      name: `管理员${Math.random().toString(36).slice(2)}`,
      description: "描述信息"
    })
  } catch (error) {
    console.log(error.message.message)
  }
  t.assert(res)
  t.assert(res._id)
  groupId = res._id
})

test('查询 Group', async t => {
  let res
  try {
    res = await authing.authn.group({
      _id: groupId
    })
  } catch (error) {
    console.log(error.response.data.errors[0])
  }

  t.assert(res)
  t.assert(res._id === groupId)
})