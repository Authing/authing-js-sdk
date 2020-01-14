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

test('创建 Group', async t => {

  try {
    const res = await authing.authn.createGroup({
      name: "管理员2",
      description: "hkjdsh"
    })
    console.log(res)
  } catch (error) {
    console.log(error.message.message.errors[0])
  }
})