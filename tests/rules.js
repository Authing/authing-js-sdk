import test from "ava";
import { inspect } from "util"
import { formatError } from "../src/utils/formatError";
import _ from "lodash"

const Authing = require("../src/index");
const userPoolId = "5e35841c691196a1ccb5b6f7";
const secret = "9f25a0fc67200320d2b0c111d4fe613d";

let authing = new Authing({
  userPoolId,
  secret,
  host: {
    user: "http://localhost:5510/graphql",
    oauth: "http://localhost:5510/graphql"
  }
});

test('获取 Rule 模版', async  t => {
  const { totalCount, list } = await authing.rules.templates()
  t.assert(totalCount !== undefined && totalCount !== null)
  t.assert(list)
  t.assert(list.length === totalCount)
  if (list.length > 0) {
    t.assert(list[0].id)
    t.assert(list[0].code)
    t.assert(list[0].type)
    t.assert(list[0].name_zh)
    t.assert(list[0].name_en)
  }
})