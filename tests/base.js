const yaml = require("yaml")
const fs = require("fs")
const path = require("path")
export const config = yaml.parse(fs.readFileSync(path.join(__dirname, "config.yaml"), 'utf8'));
process.env.BUILD_TARGET = config.env
const Authing = require("../dist/authing-js-sdk-node");

let base_config = yaml.parse(fs.readFileSync(path.join(__dirname, "baseConfig.yaml"), 'utf8'));

const options = {
  userPoolId: config['userPoolId'],
  secret: config['secret'],
}

if (config.host) {
  options.host = {
    user: config['host']['user'],
    oauth: config['host']['oauth']
  }
}

export const authing = new Authing(options);

export const createRule = async function (code, type, name) {
  name = name || `Rule - ${Math.random().toString(36).slice(2)}`
  type = type || "PRE_REGISTER"
  return await authing.pipeline.createRule({
    name,
    code,
    type
  })
}

export const createUser = async function (email, password) {
  email = email || Math.random().toString(36).slice(2) + "@test.com"
  password = password || "123456a"
  return await authing.register({
    email,
    password
  });
}

export const createGroup = async (name) => {
  name = name || `分组${Math.random().toString(36).slice(2)}`
  return await authing.authz.createGroup({
    name,
    description: "描述信息"
  })
}

export async function createRole(name, description) {
  name = name || `角色${Math.random().toString(36).slice(2)}`
  description = description || ""
  return await authing.authz.createRole({
    name,
    description
  })
}

export async function createPermission(name, description) {
  name = name || `权限${Math.random().toString(36).slice(2)}`;
  description = description || ""
  return await authing.authz.createPermission({
    name,
    description
  })
}

export async function createPermissionBatch(permissions) {
  let list = []
  for (let name of permissions) {
    list.push(await createPermission(name))
  }
  return list
}

export async function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}


export async function createGroupBatch(count) {
  let list = []
  for (let i = 0; i < count; i++) {
    let group = await createGroup()
    list.push(group)
  }
  return list
}

export async function createRoleBatch(count) {
  let list = []
  for (let i = 0; i < count; i++) {
    let role = await createRole()
    list.push(role)
  }
  return list
}

export async function createUserBatch(count) {
  // 创建多个用户
  let users = []
  for (let i = 0; i < count; i++) {
    let user = await createUser()
    users.push(user)
  }
  return users
}