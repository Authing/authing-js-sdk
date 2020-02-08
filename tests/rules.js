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
  },
  timeout: 100000,
});

const createRule = async function (code, type, name) {
  name = name || `Rule - ${Math.random().toString(36).slice(2)}`
  type = type || "PRE_REGISTER"
  return await authing.rules.createRule({
    name,
    code,
    type
  })
}

const createUser = async function (email) {
  email = email || Math.random().toString(36).slice(2) + "@test.com"
  return await authing.register({
    email,
    password: "123456a"
  });
}

const createGroup = async (name) => {
  name = name || `分组${Math.random().toString(36).slice(2)}`
  return await authing.authz.createGroup({
    name,
    description: "描述信息"
  })
}

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

test('查询 Rule', async t => {
  rule = await authing.rules.ruleById(rule._id)
  t.assert(rule)
  t.assert(rule._id)
  t.assert(rule.code)
  t.assert(rule.type)
  t.assert(rule.name)
  t.assert(rule.name)
  t.assert(rule.faasUrl)
})

test('查询用户池 Rule 列表', async t => {
  try {
    const { totalCount, list } = await authing.rules.all()
    t.assert(totalCount)
    t.assert(list.length === totalCount)
    t.assert(list[0]._id)
  } catch (err) {
    t.fail(formatError(err))
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

test('查询 Rule # 不存在', async t => {
  try {
    rule = await authing.rules.ruleById(rule._id)
  } catch (error) {
    t.assert(error.message.code === 4003)
  }
})

test('测试 Rule # pipe 函数中使用 authing-js-sdk', async t => {
  const group = await createGroup("超级管理员")
  const code = `
async function pipe(user, context, callback) {
  if (!user.email.endsWith('@authing.cn')) {
    return callback(null, user, context)
  }

  // Add this user to "超级管理员" group
  try {
    await authing.authz.addUserToGroup({
      userId: user._id,
      groupId: "${group._id}"
    })
  } catch (error) { }

  callback(null, user, context)
}
  `
  const rule = await createRule(code, "POST_REGISTER")
  // 以 authing.cn 域名邮箱注册的用户自动加入 5e3cdde963726c6108fb26a6 group
  const user = await createUser(`${Math.random().toString(36).slice(2)}@authing.cn`)
  await authing.rules.deleteById(rule._id)
  const groups = await authing.userGroupList(user._id)
  t.log(groups)
  t.assert(groups.totalCount === 1)
  t.assert(groups.list.length === 1)
})

test('测试 POST-REGISTER RULE # 持久化自定义字段到数据库', async t => {
  const code1 = `
async function pipe(user, context, callback) {
  user.addMetaData('KEY1', 'VALUE1')
  user.addMetaDataAndPersist('KEY2', 'VALUE2')
  callback(null, user, context)
}`
  const code2 = `
async function pipe(user, context, callback) {
  user.addMetaData('KEY3', 'VALUE3')
  user.addMetaDataAndPersist('KEY4', 'VALUE4')
  callback(null, user, context)
}`
  const rule1 = await createRule(code1, "POST_REGISTER")
  const rule2 = await createRule(code2, "POST_REGISTER")

  // KEY1, KEY2, KEY3, KEY4 作为自定义数据字段返回
  const user = await createUser()
  t.assert(user.metadata)
  let metadata = JSON.parse(user.metadata)
  t.assert(metadata.KEY1)
  t.assert(metadata.KEY2)
  t.assert(metadata.KEY3)
  t.assert(metadata.KEY4)

  // KEY2, KEY4 将持久保存至数据库
  const userInfo = await authing.user({
    id: user._id
  })
  metadata = JSON.parse(userInfo.metadata)
  t.assert(!metadata.KEY1)
  t.assert(metadata.KEY2)
  t.assert(!metadata.KEY3)
  t.assert(metadata.KEY4)

  await authing.rules.deleteById(rule1._id)
  await authing.rules.deleteById(rule2._id)
})

test('Rule Env CURD', async t => {
  let env = await authing.rules.setEnv("KEY1", "VALUE1")
  t.assert(env.totalCount > 0)
  t.assert(env.list[0].key)
  t.assert(env.list[0].value)

  await authing.rules.setEnv('KEY2', 'VALUE2')

  env = await authing.rules.env()
  t.assert(env.totalCount > 0)

  env = await authing.rules.removeEnv('KEY1')
  env = await authing.rules.removeEnv('KEY2')
  t.assert(env.totalCount)
})

test('在 Rule 中使用 Env', async t => {
  const larkWebhookUrl = "https://open.feishu.cn/open-apis/bot/hook/686dd7a0bbe841cc88b70a6272c250ab"
  await authing.rules.setEnv('LARK_WEBHOOK', larkWebhookUrl)
  const code = `
async function pipe(user, context, callback) {
  const webhook = env.LARK_WEBHOOK
  await axios.post(webhook, {
    title: "New User Registered - From Authing Rules Pipeline",
    text: \`
用户信息：
ID: \${user._id}
昵称：\${user.username}
注册方式：\${user.registerMethod}
邮箱：\${user.email}
手机号：\${user.phone}
UA: \${user.device}
用户池 ID: \${user.registerInClient}
\`
  })
  return callback(null, user, context)
}
    `
  const rule = await createRule(code, "POST_REGISTER")
  const user = await createUser()
  t.assert(user)
  await authing.rules.deleteById(rule._id)
})