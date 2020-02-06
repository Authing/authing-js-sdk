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

let templates = []
let rule = {}

// 白名单域名
const whiteListEmailDomainList = ['example.com']

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
  templates = list
})

test('创建 Rule # PRE_REGISTER - 注册邮箱白名单', async t => {
  const code = `
function pipe(context, callback) {
  const email = context.data.userInfo.email;
  // 非邮箱注册方式
  if (!email) {
    return callback(null)
  }
  const whitelist = ${JSON.stringify(whiteListEmailDomainList)}; //authorized domains
  const userHasAccess = whitelist.some(
    function (domain) {
      const emailSplit = email.split('@');
      return emailSplit[emailSplit.length - 1].toLowerCase() === domain;
    });
  if (!userHasAccess) {
    return callback(new Error('Access denied.'));
  }
  return callback(null);
} 
`
  const name = `Rule - ${Math.random().toString(36).slice(2)}`
  try {
    rule = await authing.rules.createRule({
      name,
      code,
      type: "PRE_REGISTER"
    })
    t.assert(rule)
    t.assert(rule._id)
    t.assert(rule.code)
    t.assert(rule.type)
    t.assert(rule.name)
    t.assert(rule.name)
    t.assert(rule.faasUrl)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('验证 Rule # 在白名单之内', async t => {
  const email = `${Math.random().toString(36).slice(2)}@${whiteListEmailDomainList[0]}`
  const user = await authing.register({
    email,
    password: '123456a'
  })
  t.assert(user)
  t.assert(user._id)
})

test('验证 Rule # 在白名单之外', async t => {
  const email = `${Math.random().toString(36).slice(2)}@notexist.com`
  try {
    const user = await authing.register({
      email,
      password: '123456a'
    })
    console.log(user)
  } catch (error) {
    t.log(formatError(error))
    t.pass(formatError(error))
  }
})

test('修改 Rule # 更新代码', async t => {
  const code = `
function pipe(context, callback) {
  const email = context.data.userInfo.email;
  // 非邮箱注册方式
  if (!email) {
    return callback(null)
  }
  const whitelist = ${JSON.stringify(whiteListEmailDomainList)}; //authorized domains
  const userHasAccess = whitelist.some(
    function (domain) {
      const emailSplit = email.split('@');
      return emailSplit[emailSplit.length - 1].toLowerCase() === domain;
    });
  if (!userHasAccess) {
    return callback(new Error('Access denied.'));
  }
  return callback(null);
} 
`
  try {
    rule = await authing.rules.updateRule({
      _id: rule._id,
      code
    })
    t.pass()
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('修改 Rule # 关闭', async t => {
  try {
    rule = await authing.rules.updateRule({
      _id: rule._id,
      enabled: false
    })
    t.assert(rule.enabled === false)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('删除 Rule', async t => {
  const { code, message } = await authing.rules.deleteById(rule._id)
  t.assert(code === 200)
})