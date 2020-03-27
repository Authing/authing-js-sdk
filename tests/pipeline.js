import test from "ava";
import { formatError } from "../src/utils/formatError";
import axios from "axios";
import { authing, createGroup, createUser, createRule, config } from "./base"

const rules = {
  persistMetadata: `
async function pipe(user, context, callback) {
  user.addMetaData('KEY1', 'VALUE1')
  user.addMetaDataAndPersist('KEY2', 'VALUE2')
  callback(null, user, context)
}`,

  larkNotifyPostRegister: `
async function pipe(user, context, callback) {
  const webhook = env.LARK_WEBHOOK
  await axios.post(webhook, {
    title: "TEST#POST-REGISTER",
    text: JSON.stringify({
      protocol: context.protocol,
      connection: context.connection,
      ldapConfiguration: context.ldapConfiguration
    })
  })
  return callback(null, user, context)
}  
`,
  larkNotifyPreRegister: `
async function pipe(context, callback) {
  const webhook = env.LARK_WEBHOOK
  await axios.post(webhook, {
    title: "TEST#PRE-REGISTER",
    text: JSON.stringify({
      protocol: context.protocol,
      connection: context.connection,
      ldapConfiguration: context.ldapConfiguration
    })
  })
  return callback(null, context)
}  
`,
  larkNotifyPostAuthentication: `
async function pipe(user, context, callback) {
  const webhook = env.LARK_WEBHOOK
  await axios.post(user, webhook, {
    title: "TEST#POST-AUTHENTICATION",
    text: JSON.stringify({
      protocol: context.protocol,
      connection: context.connection,
      ldapConfiguration: context.ldapConfiguration
    })
  })
  return callback(null, user, context)
}  
`
}

const ruleTypes = {
  PRE_REGISTER: "PRE_REGISTER",
  POST_REGISTER: "POST_REGISTER",
  POST_AUTHENTICATION: "POST_AUTHENTICATION"
}

const larkWebhookUrl = "https://open.feishu.cn/open-apis/bot/hook/686dd7a0bbe841cc88b70a6272c250ab"


let rule = {}

// 白名单域名
const whiteListEmailDomainList = ['example.com']

test('获取 Rule 模版', async  t => {
  const { totalCount, list } = await authing.pipeline.templates()
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
    rule = await authing.pipeline.createRule({
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
  rule = await authing.pipeline.ruleById(rule._id)
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
    const { totalCount, list } = await authing.pipeline.all()
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
    t.assert(user)
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
    rule = await authing.pipeline.updateRule({
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
    rule = await authing.pipeline.updateRule({
      _id: rule._id,
      enabled: false
    })
    t.assert(rule.enabled === false)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('删除 Rule', async t => {
  const { code, message } = await authing.pipeline.deleteById(rule._id)
  t.assert(code === 200)
})

test('查询 Rule # 不存在', async t => {
  try {
    rule = await authing.pipeline.ruleById(rule._id)
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
  await authing.pipeline.deleteById(rule._id)
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

  await authing.pipeline.deleteById(rule1._id)
  await authing.pipeline.deleteById(rule2._id)
})

test('Rule Env CURD', async t => {
  let env = await authing.pipeline.setEnv("KEY1", "VALUE1")
  t.assert(env.totalCount > 0)
  t.assert(env.list[0].key)
  t.assert(env.list[0].value)

  await authing.pipeline.setEnv('KEY2', 'VALUE2')

  env = await authing.pipeline.env()
  t.assert(env.totalCount > 0)

  env = await authing.pipeline.removeEnv('KEY1')
  env = await authing.pipeline.removeEnv('KEY2')
  t.assert(env.totalCount)
})

test('在 Rule 中使用 Env', async t => {
  await authing.pipeline.setEnv('LARK_WEBHOOK', larkWebhookUrl)
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
  await authing.pipeline.deleteById(rule._id)
})

test('测试 POST_AUTHENTICATION RULE', async t => {

  // 注册用户
  const email = Math.random().toString(36).slice(2) + "@authing.cn"
  const password = "123456!"
  let user = await createUser(email, password)
  t.assert(user)
  t.assert(user.email === email)

  // 添加 RULE
  const code = `
async function pipe(user, context, callback) {
  user.addMetaData('KEY1', 'VALUE1')
  user.addMetaDataAndPersist('KEY2', 'VALUE2')
  callback(null, user, context)
}
  `
  await createRule(code, "POST_AUTHENTICATION")
  user = await authing.login({
    email,
    password
  })
  t.assert(user.metadata)
  let metadata = JSON.parse(user.metadata)
  t.assert(metadata.KEY1)
  t.assert(metadata.KEY2)
})

test('测试 ldap 认证方式 # 添加了 connetion', async t => {

  await createRule(rules.larkNotifyPreRegister, ruleTypes.PRE_REGISTER)
  await createRule(rules.larkNotifyPostRegister, ruleTypes.POST_REGISTER)
  await createRule(rules.larkNotifyPostAuthentication, ruleTypes.POST_AUTHENTICATION)
  await authing.pipeline.setEnv('LARK_WEBHOOK', larkWebhookUrl)

  const username = Math.random().toString(36).slice(2) + "@authing.cn"
  const password = "123456!"

  // 普通方式注册
  try {
    let user = await createUser(username, password)
    t.log("普通方式注册", user)
  } catch (error) {
    t.log(formatError(error))
  }

  // ldap 方式注册
  try {
    const user = await authing.loginByLDAP({
      username,
      password
    })
    t.log("ldap 方式注册", user)
  } catch (error) {
    t.log(formatError(error))
  }

  // ldap 方式登录
  try {
    const user = await authing.loginByLDAP({
      username,
      password
    })
    t.log("ldap 方式登录", user)

  } catch (error) {
    t.log(formatError(error))
  }
})

test('自定义 Token', async t => {
  const code = `
async function pipe(user, context, callback) {
  user.setTokenField('KEY','VALUE')
  return callback(null, user, context)
}  
`
  await createRule(code, ruleTypes.POST_AUTHENTICATION)
  const email = Math.random().toString(36).slice(2) + "@authing.cn"
  const password = "123456!"
  let user = await createUser(email, password)
  user = await authing.login({
    email,
    password
  })

  t.assert(user)
  t.assert(user.token)

  const token = user.token
  const res = await axios.get(`${config.host.base}/authing/token?access_token=${token}`)
  const decryptedToken = res.data.token.data
  t.assert(decryptedToken.KEY)
  t.log(decryptedToken)
})

test('部分字段只读', async t => {
  const code = `
async function pipe(user, context, callback) {
  user._id = "xxx"
  user.registerMethod = "xxx"
  user.registerInClient = "xxx"
  user.password = "xxx"
  user.company = "非凡科技有限公司"
  callback(null, user, context)
}  
`

  await createRule(code, ruleTypes.POST_REGISTER)
  await createRule(code, ruleTypes.POST_AUTHENTICATION)
  const email = Math.random().toString(36).slice(2) + "@authing.cn"
  const password = "123456!"
  let user = await createUser(email, password)
  t.assert(user.registerMethod === "default:username-password")

  user = await authing.login({
    email,
    password
  })
  t.assert(user)
  t.assert(user.company === "非凡科技有限公司")
  t.log(user)
})

test('metadata 增删改查', async t => {
  const user = await createUser()
  try {
    let res = await authing.setMetadata({
      _id: user._id,
      key: "KEY",
      value: "VALUE"
    })
    let firstMetadata = res.list[0]
    t.assert(firstMetadata.key === "KEY")
    t.assert(firstMetadata.value === "VALUE")

    res = await authing.metadata(user._id)
    t.assert(res.list.length === 1)
    t.assert(res.list[0].key === "KEY")

    res = await authing.removeMetadata({
      _id: user._id,
      key: "KEY"
    })
    t.assert(res.list.length === 0)
  } catch (error) {
    t.fail(formatError(error))
  }
})


test('Pipeline 自定义 Token', async t => {

  // 注册用户
  const email = Math.random().toString(36).slice(2) + "@authing.cn"
  const password = "123456!"
  try {
    await authing.register({
      email,
      password
    })
  } catch (error) {
    t.fail(formatError(error))
  }


  // 登录获取 token
  const user = await authing.login({
    email,
    password
  })
  const token = user.token

  // decode token
  const res = await axios.get(`${config.host.base}/authing/token?access_token=${token}`)
  const decryptedToken = res.data.token.data
  t.log(decryptedToken)
  t.assert(decryptedToken.KEY === "VALUE")
})