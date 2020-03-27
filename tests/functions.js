import test from "ava";
import { formatError } from "../src/utils/formatError";
import { authing, config } from "./base"
import Authing from "../src/index"
let userPoolId = config.userPoolId
let auth = authing

function randomEmail() {
  let rand = Math.random()
    .toString(36)
    .slice(2);
  let email = rand + "@test.com";
  return email;
}
function randomName() {
  return Math.random()
    .toString(36)
    .slice(2);
}
function randomPhone() {
  return `131${Math.floor(Math.random()*8999+1000)}${Math.floor(Math.random()*8999+1000)}`
}
test("users:register 用户密码注册", async t => {
  const validAuth = auth;
  let email = randomEmail();
  try {
    let res = await validAuth.register({
      email,
      password: "123456a",
      lastLogin: new Date(2019, 5, 1),
      signedUp: new Date(2019, 5, 1)
    });
    t.assert(res.lastLogin);
    t.assert(res.signedUp);
    t.pass();
  } catch (err) {
    t.log(formatError(err));
    t.fail(formatError(err));
  }
});
test("users:createUser 用户密码注册", async t => {
  const validAuth = auth;
  let email = randomEmail();
  try {
    let res = await validAuth.createUser({
      email,
      password: "123456a",
      lastLogin: new Date(2019, 5, 1),
      signedUp: new Date(2019, 5, 1)
    });
    t.assert(res.lastLogin);
    t.assert(res.signedUp);
    t.pass();
  } catch (err) {
    t.log(formatError(err));
    t.fail(formatError(err));
  }
});
test.skip("users:register 用户密码注册，保留原始密码字段内容", async t => {
  const validAuth = auth;
  let email = randomEmail();
  try {
    let res = await validAuth.register({
      email,
      password: "123456a",
      keepPassword: true
    });
    // 后端不会返回 password 字段
    t.pass();
  } catch (err) {
    t.log(formatError(err));
    t.fail(formatError(err));
  }
});
test("users:list 用户池用户列表", async t => {
  const validAuth = auth;
  try {
    let list = await validAuth.list();
    t.is(Array.isArray(list.list), true);
    t.pass();
  } catch (err) {
    t.log(formatError(err));
    t.fail(JSON.stringify(err));
  }
});

test("users:login 用户密码登录", async t => {
  const validAuth = auth;
  try {
    let email = randomEmail();
    let res = await validAuth.register({
      email,
      password: "123456a"
    });
    t.assert(res.email);
    let user = await validAuth.login({ email, password: "123456a" });
    t.assert(user.email);
    t.pass();
  } catch (err) {
    t.log(formatError(err));
    t.fail(JSON.stringify(err));
  }
});

test("users:queryPermissions 查询用户权限", async t => {
  try {
    const validAuth = auth;
    let email = randomEmail();
    let res = await validAuth.register({
      email,
      password: "123456a"
    });
    t.assert(res.email);
    let user = await validAuth.login({ email, password: "123456a" });
    t.assert(user.email);
    t.assert(user._id);
    let permission = await validAuth.queryPermissions(user._id);
    t.assert(Array.isArray(permission.list));
    t.pass();
  } catch (err) {
    t.log(formatError(err));
    t.fail(JSON.stringify(err));
  }
});

test("users:queryRoles 查询角色列表", async t => {
  try {
    const validAuth = auth;
    let roles = await validAuth.queryRoles({ userPoolId: auth.userPoolId, page: 1, count: 10 });
    t.assert(Array.isArray(roles.list));
    t.pass();
  } catch (err) {
    t.log(formatError(err));
    t.fail(JSON.stringify(err));
  }
});

test("oauth:readUserOAuthList", async t => {
  const validAuth = auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  let list = await validAuth.readUserOAuthList({
    user: user._id,
    client: user.registerInClient
  });
  t.assert(Array.isArray(list));
  t.pass();
});

test("user:logout 登出", async t => {
  const validAuth = auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  try {
    let res2 = await validAuth.logout(user._id);
    t.is(res2.tokenExpiredAt, "2000-01-01T00:00:00+08:00");
  } catch (err) {
    t.log(formatError(err));
    t.fail();
  }
});

test("user:remove 删除用户", async t => {
  const validAuth = auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  let res2 = await validAuth.remove(user._id);
  t.assert(Array.isArray(res2));
  res2.map(item => t.assert(item._id));
});

test("user:createRole 创建角色组", async t => {
  const validAuth = auth;
  try {
    let res = await validAuth.createRole({
      userPoolId: validAuth.userPoolId,
      name: "myRole",
      descriptions: "ava test role"
    });
    t.assert(res._id);
  } catch (err) {
    t.log(formatError(err));
    t.fail();
  }
});

test("user:assignUserToRole 把用户指派到角色组", async t => {
  const validAuth = auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  let role = await validAuth.createRole({
    userPoolId: validAuth.userPoolId,
    name: "myRole",
    descriptions: "ava test role"
  });
  t.assert(role._id);
  try {
    let res2 = await validAuth.assignUserToRole({
      user: user._id,
      roleId: role._id
    });
    t.assert(Array.isArray(res2.list));
    t.assert(res2.list.length);
    t.assert(res2.list[0]._id);
  } catch (err) {
    t.log(formatError(err));
    t.fail("assignUserToRole 请求错误");
  }
});

test("user:removeUserFromRole 把用户从角色组移除", async t => {
  const validAuth = auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  let role = await validAuth.createRole({
    userPoolId: validAuth.userPoolId,
    name: "myRole",
    descriptions: "ava test role"
  });
  t.assert(role._id);
  try {
    let res2 = await validAuth.assignUserToRole({
      user: user._id,
      roleId: role._id
    });
    let res3 = await validAuth.removeUserFromRole({
      user: user._id,
      roleId: role._id
    });
    t.assert(res2.list.find(v => v.user._id === user._id))
    t.assert(res3._id)
  } catch (err) {
    t.log(formatError(err));
    t.fail("assignUserToRole 请求错误");
  }
});

test("user:refreshToken 刷新 Token", async t => {
  const validAuth = auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  try {
    let refreshed = await validAuth.refreshToken({ user: user._id });
    t.assert(refreshed.token);
    t.assert(refreshed.iat);
    t.assert(refreshed.exp);
  } catch (err) {
    t.log(formatError(err));
    t.fail("刷新 token 出错");
  }
});

test("user:sendResetPasswordEmail 发送重置密码邮件", async t => {
  const validAuth = auth;
  let email = "something@authing.cn";
  try {
    let user = await validAuth.register({
      email,
      password: "123456a"
    });
    t.assert(user)
  } catch (err) {
    t.assert(err.message.code === 2026);
    t.assert(err.message.message === "用户已存在，请不要重复注册");
  }

  let res = await validAuth.sendResetPasswordEmail({ email });
  t.assert(res.message === "成功");
  t.assert(res.code === 200);
});

test.skip("user:changePassord 用户通过找回密码邮件的验证码修改密码", async t => {
  const validAuth = auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  await validAuth.changePassword({
    email,
    password: "123456abc",
    verifyCode: ""
  });
});

test("user:sendVerifyEmail 发送验证邮件", async t => {
  const validAuth = auth;
  let email = "hexguy@163.com";
  // let email = 'yezuwei@authing.cn';
  try {
    let user = await validAuth.register({
      email,
      password: "123456a"
    });
    t.assert(user)
  } catch (err) {
    t.log(formatError(err));
    t.assert(err.message.code === 2026 || err.message.code === 500);
    t.assert(err.message.message === "用户已存在，请不要重复注册");
  }

  let res = await validAuth.sendVerifyEmail({ email });
  t.assert(res.message === "发送验证邮件成功");
  t.assert(res.code === 200);
  t.assert(res.status === true);
});

test("user:checkLoginStatus 检查登录状态", async t => {
  const validAuth = auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(user)
  /*
  let res = await validAuth.checkLoginStatus(user.token);
  t.assert(res.status === false);
  t.assert(res.code === 2020);
  t.assert(res.message === '未登录');
  */
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let res = await validAuth.checkLoginStatus(loggedIn.token);
  t.assert(res.status === true);
  t.assert(res.code === 200);
  t.assert(res.message === "已登录");
  t.assert(res.token.data.email);
  t.assert(res.token.data.id);
  t.assert(res.token.data.clientId);
  t.assert(res.token.iat);
  t.assert(res.token.exp);
});

test("user:decodeToken 解析 jwt token", async t => {
  const validAuth = auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(user)
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let decoded = await validAuth.decodeToken(loggedIn.token);
  t.assert(decoded.status.code === 200);
  t.assert(decoded.status.message === "token 解析正常");
  t.assert(decoded.data.id);
});

test("oauth:genQRCode 生成 QRCode", async t => {
  const validAuth = auth;
  let res = await validAuth.genQRCode(validAuth.userPoolId);
  if (
    res.data.code === 500 &&
    res.data.message ===
    "获取qrcode地址失败，请确认已打开小程序OAuth。若已打开，可能是网络问题，请重试。"
  ) {
    t.pass();
  }
  if (res.data.code === 200) {
    t.pass();
  }
});

test.skip("user:getVerificationCode 获取短信验证码", async t => {
  const validAuth = auth;
  let phone = "13116172397";
  let res = await validAuth.getVerificationCode(phone);
  t.assert(res.code === 200);
  t.assert(res.message === "发送成功");
  try {
    res = await validAuth.getVerificationCode(phone);
  } catch (err) {
    let msg = JSON.parse(err.message);
    t.assert(msg.code === 500);
    t.assert(msg.message === "已发送验证码，还未失效");
  }
});

test.skip("oauth:loginByLDAP 使用 LDAP 登录", async t => {
  const validAuth = auth;
  try {
    let res = await validAuth.loginByLDAP({
      username: "tesla",
      password: "password"
    });
    t.assert(res.email === "tesla@ldap.forumsys.com");
  } catch (err) {
    t.fail("需要先在用户池创建 LDAP 服务再测试");
    t.log(formatError(err));
  }
});

test("user:bindOAuth 绑定 OAuth 登录方式", async t => {
  const validAuth = auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(user)
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let list = await validAuth.readOAuthList();
  t.is(Array.isArray(list), true);
  const { item = { type: "github" } } =
    list.find(f => f.binded === false) || {};
  let bind = await validAuth.bindOAuth({
    user: loggedIn._id,
    type: item.type,
    unionid: Math.random().toString(),
    userInfo: '{"uniondid":"12345678","username":"demo"}'
  });
  t.assert(bind.unionid);
});

test("user:unbindOAuth 解绑 OAuth 登录方式", async t => {
  const validAuth = auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(user)
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let list = await validAuth.readOAuthList();
  t.is(Array.isArray(list), true);
  const { item = { type: "github" } } =
    list.find(f => f.binded === false) || {};
  let bind = await validAuth.bindOAuth({
    user: loggedIn._id,
    type: item.type,
    unionid: Math.random().toString(),
    userInfo: '{"uniondid":"12345678","username":"demo"}'
  });
  t.assert(bind.unionid);

  let unbind = await validAuth.unbindOAuth({
    user: loggedIn._id,
    client: loggedIn.registerInClient,
    type: "github"
  });
  t.assert(unbind._id);
});

test("user:unbindEmail 解绑 email", async t => {
  const validAuth = auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  try {
    let res = await validAuth.unbindEmail({
      user: user._id,
      client: user.registerInClient
    });
    t.assert(res)
  } catch (err) {
    t.assert(err.message.code === 2217);
    t.assert(err.message.message === "没有配置其他登录方式，不能解绑邮箱");
  }

  let list = await validAuth.readOAuthList();
  t.is(Array.isArray(list), true);
  const { item = { type: "github" } } =
    list.find(f => f.binded === false) || {};
  let bind = await validAuth.bindOAuth({
    user: loggedIn._id,
    type: item.type,
    unionid: Math.random().toString(),
    userInfo: '{"uniondid":"12345678","username":"demo"}'
  });

  t.assert(bind.user);

  let res = await validAuth.unbindEmail({
    user: user._id,
    client: user.registerInClient
  });
  t.assert(res._id);
  t.assert(res.email === "");
});

test("user:update 修改用户资料", async t => {
  const validAuth = auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(user)
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let updated = await validAuth.update({
    _id: loggedIn._id,
    nickname: "niska"
  });
  t.assert(updated.nickname === "niska");
});

test("user:update 不能直接修改手机号、邮箱", async t => {
  const validAuth = auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(user)
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let newEmail = randomEmail();

  try {
    let updated = await validAuth.update({
      _id: loggedIn._id,
      email: newEmail
    });
    t.assert(updated)
  } catch (error) {
    t.assert(
      error.message.message ===
      "updateUser 接口不能直接修改邮箱，请使用 updateEmail 接口。"
    );
  }
});

test("user:updateRolePermissions 修改角色权限", async t => {
  const validAuth = auth;
  let res = await validAuth.createRole({
    userPoolId: validAuth.userPoolId,
    name: "myRole",
    descriptions: "ava test role"
  });
  t.assert(res._id);

  let updated = await validAuth.updateRolePermissions({
    roleId: res._id,
    permissions: "permission updated",
    name: "myRole updated"
  });
  t.is(updated.name, "myRole updated");
  t.is(updated.permissions, "permission updated");
});

test.skip("revokeAuthedApp: 撤回用户对某个 SSO 应用的授权", async t => {
  const validAuth = auth;

  let res = await validAuth.revokeAuthedApp({
    "userId": "5d765d4013d73a5e90b7857a",
    "appId": "5d5a8a7bbc7275af2cb71920"
  })
  console.log(res)
})

test.skip("getAuthedAppList: 用户在用户池内授权的 SSO 应用列表", async t => {
  const validAuth = auth;

  let res = await validAuth.getAuthedAppList({
    "userId": "5d765d4013d73a5e90b7857a",
  })
  console.log(res)
})

test("cdnPreflightFun: cdn 预检函数", async t => {
  const validAuth = auth;
  let res = await validAuth.cdnPreflightFun();
  t.is(res.status, 200);
});

test("preflightFun: 用户和认证服务预检函数", async t => {
  const validAuth = auth;
  let res = await validAuth.preflightFun();
  t.is(res[0].data.ok, 2);
  t.is(res[1].data.ok, 2);
});

test.only("checkPreflight: 根据参数决定是否进行用户和认证服务预检和 cdn 预检", async t => {
  let auth = new Authing({
    userPoolId: config.userPoolId,
    secret: config.secret,
    preflight: true,
    host: {
      user: config['host']['user'],
      oauth: config['host']['oauth']
    },
    baseUrl: config.host.base
  });
  let validAuth = auth;
  let res = await validAuth.checkPreflight();
  let service = await res[0];
  let cdn = await res[1];
  t.is(service[0].data.ok, 2);
  t.is(service[1].data.ok, 2);
  t.is(cdn, "ok");
  auth = new Authing({
    userPoolId: config.userPoolId,
    secret: config.secret,
    cdnPreflight: true,
    host: {
      user: config['host']['user'],
      oauth: config['host']['oauth']
    },
    baseUrl: config.host.base
  });
  validAuth = auth;
  res = await validAuth.checkPreflight();
  service = await res[0];
  cdn = await res[1];
  t.is(service, "ok");
  t.is(cdn.data, "a\n");

  // 两个 preflight 都打开
  auth = new Authing({
    userPoolId: config.userPoolId,
    secret: config.secret,
    cdnPreflight: true,
    preflight: true,
    host: {
      user: config['host']['user'],
      oauth: config['host']['oauth']
    },
    baseUrl: config.host.base
  });
  validAuth = auth;
  res = await validAuth.checkPreflight();
  service = await res[0];
  cdn = await res[1];
  t.is(service[0].data.ok, 2);
  t.is(service[1].data.ok, 2);
  t.is(cdn.data, "a\n");

});

test("readOAuthList", async t => {
  let validAuth = auth;
  let list = await validAuth.readOAuthList();
  t.is(Array.isArray(list), true);
  if (list.length > 0) {
    t.is(
      list.every(v => v.hasOwnProperty("_id") && v.hasOwnProperty("alias")),
      true
    );
  }
});

test("user: 根据 id 查询单个用户", async t => {
  let validAuth = auth;
  let email = randomEmail();
  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  let user = await validAuth.user({ id: res._id });
  t.assert(user._id);
  t.assert(user.thirdPartyIdentity)
});

test("userPatch: 根据 id 批量查询多个用户", async t => {
  let validAuth = auth;
  let email = randomEmail();
  let res1 = await validAuth.register({
    email,
    password: "123456a"
  });
  let res2 = await validAuth.register({
    email: randomEmail(),
    password: "123456a"
  });
  let users;
  try {
    users = await validAuth.userPatch({ ids: `${res1._id},${res2._id}` });
  } catch (err) {
    console.log(JSON.stringify(err));
  }
  t.assert(users.list.every(v => v._id && v.registerInClient === config.userPoolId));
});

test("changeMFA: 变更用户 MFA 状态", async t => {
  let validAuth = auth;
  let email = randomEmail();
  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  let logined = await validAuth.login({ email, password: "123456a" });
  res = await validAuth.changeMFA({
    userPoolId: userPoolId,
    userId: res._id,
    enable: true
  });
  t.assert(res._id);
  t.assert(res.userId);
  t.assert(res.userPoolId);
  t.assert(res.shareKey);
  t.true(res.enable);
});

test("queryMFA: 查询用户 MFA 状态", async t => {
  let validAuth = auth;
  let email = randomEmail();
  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let mfa = await validAuth.queryMFA({
    userPoolId: config.userPoolId,
    userId: res._id
  });
  t.is(mfa, null);
  res = await validAuth.changeMFA({
    userPoolId: config.userPoolId,
    userId: res._id,
    enable: true
  });
  mfa = await validAuth.queryMFA({
    userPoolId: config.userPoolId,
    userId: loggedIn._id
  });
  t.assert(res._id);
  t.assert(res.userId);
  t.assert(res.userPoolId);
  t.assert(res.shareKey);
  t.true(res.enable);
});

test("genQRCode, checkQR: 检查微信二维码是否被扫描", async t => {
  const validAuth = auth;
  let res = await validAuth.genQRCode(config.userPoolId);
  let status = await validAuth.checkQR();
  t.is(status.data.data.code, 500);
  t.is(status.data.data.message, "have not been authed");
  //@TODO 给 checkQR 传入正确地参数，进行测试
});

test("getUserPoolSettings: 获取用户池基础设置", async t => {
  const validAuth = auth;
  let res = await validAuth.getUserPoolSettings(config.userPoolId);
  t.assert(res.hasOwnProperty("name"));
  t.assert(res.hasOwnProperty("logo"));
  t.assert(res.hasOwnProperty("descriptions"));
  t.assert(res.hasOwnProperty("allowedOrigins"));
  t.assert(res.hasOwnProperty("emailVerifiedDefault"));
  t.assert(res.hasOwnProperty("useMiniLogin"));
  t.assert(res.hasOwnProperty("registerDisabled"));
  t.assert(res.hasOwnProperty("showWXMPQRCode"));
  t.assert(res.hasOwnProperty("enableEmail"));
  t.assert(res.hasOwnProperty("jwtExpired"));
});

test.skip("发送激活邮件", async t => {
  const validAuth = auth;
  let res = await validAuth.sendActivationEmail({ email: "xxx@163.com" });
  t.is(res.message, "发送验证邮件成功");
});

test("getUsersByRole: 查询某个角色下的所有用户", async t => {
  const validAuth = auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  let role = await validAuth.createRole({
    userPoolId,
    name: "myRole",
    descriptions: "ava test role"
  });
  t.assert(role._id);
  try {
    let res2 = await validAuth.assignUserToRole({
      user: user._id,
      roleId: role._id
    });
    t.assert(Array.isArray(res2.list));
    t.assert(res2.list.length);
    t.assert(res2.list[0]._id);
  } catch (err) {
    t.log(formatError(err));
    t.fail("assignUserToRole 请求错误");
  }

  let res2 = await validAuth.getUsersByRole({
    roleId: role._id
  });
  t.assert(Array.isArray(res2.list));
  t.assert(res2.list[0]._id);
});

test("has axios", async t => {
  const validAuth = auth;
  t.truthy(validAuth._axios);
});

test("sendChangeEmailVerifyCode: 发送修改邮箱邮件", async t => {
  const validAuth = auth;
  const res = await validAuth.sendChangeEmailVerifyCode({
    email: "cdbfhoergnrexxjk@qq.com" // 当前邮箱或者没有注册过的邮箱
  });
  t.assert(res.code === 200);
});

test("sendChangeEmailVerifyCode: 发送修改邮箱邮件 - 邮箱已绑定，请换一个吧", async t => {
  const validAuth = auth;
  const res = await validAuth.sendChangeEmailVerifyCode({
    email: "ax6coi4ytmk@test.com" // 已经被其他人注册过的邮箱
  });
  t.assert(res.code === 200);
});

test.skip("修改邮箱", async t => {
  const validAuth = auth;
  const newEmail = "cdbfhorexxjk@qq.com";
  const res = await validAuth.updateEmail({
    email: newEmail,
    emailCode: "2815"
  });
  t.assert(res.email === newEmail);
});
test.skip("测试手机号登陆", async t => {
  const validAuth = auth;
  const phone = "13100512747";
  let res = {};
  try {
    res = await validAuth.loginByPhonePassword({
      phone: phone,
      password: "123456"
    });
  } catch (err) {
    console.log(formatError(err));
  }
  t.assert(res.phone === phone);
});

test.skip("测试手机号注册", async t => {
  //验证码需要手动填写
  const validAuth = auth;
  const phone = "13100512747";
  const password = "123456";
  const phoneCode = "1234";
  let res = {};
  try {
    res = await validAuth.register({
      phone: phone,
      phoneCode: phoneCode,
      password: password
    });
  } catch (err) {
    console.log(formatError(err));
  }
  t.assert(res.phone === phone);
});
test.skip("测试sendOneTimePhoneCode发送验证码", async t => {
  //验证码需要手动填写
  const validAuth = auth;
  const phone = "13100512745";
  let res = {};
  try {
    res = await validAuth.sendOneTimePhoneCode(phone);
  } catch (err) {
    console.log(formatError(err));
  }
  t.assert(res.code === 200);
});
test.skip("测试sendRegisterPhoneCode发送验证码", async t => {
  //验证码需要手动填写
  const validAuth = auth;
  const phone = "13100512747";
  let res = {};
  try {
    res = await validAuth.sendRegisterPhoneCode(phone);
  } catch (err) {
    console.log(formatError(err));
  }
  t.assert(res.code === 200);
});
test("casLogout: 测试 casLogout", async t => {
  const validAuth = auth;
  let res = {};
  try {
    res = await validAuth.casLogout();
  } catch (err) {
    console.log(formatError(err));
  }
  t.assert(res.code === 200);
});
test.skip("测试密码加密公钥参数", async t => {
  // 测试正确的加密公钥
  let validAuth = new Authing({
    userPoolId,
    secret,
    // host: {
    //   user: "http://localhost:5510/graphql",
    //   oauth: "http://localhost:5510/graphql"
    // }
    passwordEncPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`
  });
  let email = randomEmail();
  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  // 测试错误的加密公钥
  validAuth = new Authing({
    userPoolId: userPoolId,
    secret,
    // host: {
    //   user: "http://localhost:5510/graphql",
    //   oauth: "http://localhost:5510/graphql"
    // }
    passwordEncPublicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDA123
-----END PUBLIC KEY-----`
  });
  email = randomEmail();
  try {
    res = await validAuth.register({
      email,
      password: "123456a"
    });
  } catch (err) {
    if (err.message.code === 2016) {
      t.assert(err.message.message === "密码解密出错");
      t.pass();
    } else {
      t.fail();
    }
  }
});
test("refreshThirdPartyToken: 刷新 Github、微信 等社会化登录 token", async t => {
  let email = randomEmail();
  let user = await auth.register({
    email,
    password: "123456a"
  });
  let res = await auth.refreshThirdPartyToken(user._id);
  t.false(res.refreshSuccess);
});

test('loginByOidc: OIDC Password 模式登录', async t => {
  let user = await auth.loginByOidc({
    client_id: config.oidcAppId,
    client_secret: config.oidcAppSecret,
    email: 'test3@123.com',
    password: '123456',
  })
  t.assert(user.sub)
  console.log(user)
})

test('refreshOidcToken: 刷新 OIDC token', async t => {
  let user = await auth.loginByOidc({
    client_id: config.oidcAppId,
    client_secret: config.oidcAppSecret,
    scope: 'openid profile email phone offline_access',
    email: 'test3@123.com',
    password: '123456',
  })
  t.assert(user.sub)
  let refreshToken = await auth.refreshOidcToken({
    client_id: config.oidcAppId,
    client_secret: config.oidcAppSecret,
    refresh_token: user.refresh_token
  })
  t.assert(refreshToken.access_token)
})
test('signIn，基于 OIDC 的登录模式', async t => {
  try {

    let user = await auth.signIn({
      email: 'test3@123.com',
      password: '123456',
    })
    t.assert(user.sub)
  } catch (err) {
    console.log(JSON.stringify(err.response.data))
    t.fail()
  }
})
test('refreshSignInToken，刷新 signIn token', async t => {
  try {
    let user = await auth.signIn({
      email: 'test1@123.com',
      password: '123456',
    })
    t.assert(user.sub)
    let refreshedToken = await auth.refreshSignInToken({
      refreshToken: user.refresh_token
    })
    t.assert(refreshedToken.id_token)
  } catch (err) {
    console.log(JSON.stringify(err.response.data))
    t.fail()
  }
})

test('geneQRCode: 生成二维码', async t => {
  const authing = auth;
  const res = await authing.qrlogin.geneCode({
    scene: 'APP_AUTH',
    userDefinedData: {
      hello: 'world'
    }
  })
  t.assert(res.code === 200)
  t.assert(res.data.qrcodeId !== undefined)
  t.assert(res.data.qrcodeUrl !== undefined)
})

test('测试多个用户池登录', async t=>{
  let configs = [
    {
      userPoolId: "5e442f7a2a94353ac2536892",
      secret: "2052b4f2690167ef0ab9e3bd56c1627b"
    },
    {
      userPoolId: "5e6a4a98dee1b66fb488d8d9",
      secret: "b131236aa1b8c5cf8366860abf8f76b6"
    }
  ];
  let [auth1, auth2] = configs.map(config => {
    let { userPoolId, secret } = config;
    return new Authing({
      userPoolId,
      secret,
      host: {
        user: "https://core.authing.cn/graphql",
        oauth: "https://core.authing.cn/graphql"
      }
    });
  })
  let user1 = await auth1.register({ phone: randomPhone(), password: "123456" });
  await auth1.remove(user1._id, '5e3d513fa00e847cafec9315');
  let user2 = await auth2.register({ phone: randomPhone(), password: "123456" });
  await auth2.remove(user2._id, '5ccb24701bbaf00d50ced851');
  t.pass()
})