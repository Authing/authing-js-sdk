import test from "ava";
import { formatError } from "../src/utils/formatError";
import axios from "axios";
import querystring from "querystring";
let baseHost = "authing.cn";
// 线上
// const secret = "bb278212d520fc19f169e361179ea690";
// const userPoolId = "5c95905578fce5000166f853";
process.env.BUILD_TARGET = "node";
const gqlEndPoint = "https://core.authing.cn/graphql";
const Authing = require("../src/index");
// 测试机
const userPoolId = "5e19942188b013078127c024";
const secret = "203033ce97452602843aac51db25468a";
// 本机 yelexin
// const userPoolId = "5e538b5d5c002972d307575c";
// const secret = "e871f0508aaaba3df920ef8c03edcf08";

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
let auth = new Authing({
  userPoolId,
  secret,
  host: {
    // user: "http://localhost:5510/graphql",
    // oauth: "http://localhost:5510/graphql",
    user: "https://core.celebes.live/graphql",
    oauth: "https://core.celebes.live/graphql",
  },
  // baseUrl: 'http://localhost:5510',
  baseUrl: 'https://core.celebes.live',
});
test("初始化", async t => {
  let fault = new Authing({
    userPoolId,
    secret: "1",
    // host: {
    //   user: 'http://localhost:5510/graphql',
    //   oauth: 'http://localhost:5510/graphql'
    // },
    onInitError: function(err) {
      t.assert(err);
    }
  });
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });
});
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
test("users:register 用户密码注册，保留原始密码字段内容", async t => {
  const validAuth = auth;
  let email = randomEmail();
  try {
    let res = await validAuth.register({
      email,
      password: "123456a",
      keepPassword: true
    });
    t.assert(res.password === "123456a");
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
test("ownerToken 刷新测试", async t => {
  try {
    await new Promise(resolve => {
      setTimeout(resolve, 5000);
    });
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
    let roles = await validAuth.queryRoles({ userPoolId, page: 1, count: 10 });
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
      userPoolId,
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
    let res3 = await validAuth.removeUserFromRole({
      user: user._id,
      roleId: role._id
    });
    t.assert(res3._id);
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
  let pwd = await validAuth.changePassword({
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
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let decoded = await validAuth.decodeToken(loggedIn.token);
  t.assert(decoded.status.code === 200);
  t.assert(decoded.status.message === "token 解析正常");
  t.assert(decoded.data.id);
});

test("oauth:genQRCode 生成 QRCode", async t => {
  const validAuth = auth;
  let res = await validAuth.genQRCode(userPoolId);
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
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let newEmail = randomEmail();

  try {
    let updated = await validAuth.update({
      _id: loggedIn._id,
      email: newEmail
    });
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
    userPoolId,
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

// test.only("撤回用户对某个 SSO 应用的授权", async t => {
//   const validAuth = auth;

//   let res = await validAuth.revokeAuthedApp({
//     "userPoolId": userPoolId,
//     "userId": "5d765d4013d73a5e90b7857a",
//     "appId": "5d5a8a7bbc7275af2cb71920"
//   })
//   console.log(res)
// })

// test.only("用户在用户池内授权的 SSO 应用列表", async t => {
//   const validAuth = auth;

//   let res = await validAuth.getAuthedAppList({
//     userPoolId,
//     "userId": "5d765d4013d73a5e90b7857a",
//     "appId": "5d5a8a7bbc7275af2cb71920"
//   })
//   console.log(res)
// })

test("cdnPreflight 函数", async t => {
  const validAuth = auth;
  let res = await validAuth.cdnPreflightFun();
  t.is(res.status, 200);
});

test("用户和认证服务预检函数", async t => {
  const validAuth = auth;
  let res = await validAuth.preflightFun();
  t.is(res[0].data.ok, 2);
  t.is(res[1].data.ok, 2);
});

test.skip("根据参数决定是否进行用户和认证服务预检和 cdn 预检", async t => {
  let auth = new Authing({
    userPoolId,
    secret,
    host: {
      user: "http://localhost:5510/graphql",
      oauth: "http://localhost:5510/graphql"
    },
    preflight: true
  });
  let validAuth = auth;
  let res = await validAuth.checkPreflight();
  let service = await res[0];
  let cdn = await res[1];
  t.is(service[0].data.ok, 2);
  t.is(service[1].data.ok, 2);
  t.is(cdn, "ok");
  auth = new Authing({
    userPoolId: userPoolId,
    secret,
    // host: {
    //   user: 'http://localhost:5555/graphql',
    //   oauth: 'http://localhost:5556/graphql'
    // },
    cdnPreflight: true
  });
  validAuth = auth;
  res = await validAuth.checkPreflight();
  service = await res[0];
  cdn = await res[1];
  t.is(service, "ok");
  t.is(cdn.data, "a\n");

  // 两个 preflight 都打开
  auth = new Authing({
    userPoolId: userPoolId,
    secret,
    // host: {
    //   user: 'http://localhost:5555/graphql',
    //   oauth: 'http://localhost:5556/graphql'
    // },
    cdnPreflight: true,
    preflight: true
  });
  validAuth = auth;
  res = await validAuth.checkPreflight();
  service = await res[0];
  cdn = await res[1];
  t.is(service[0].data.ok, 1);
  t.is(service[1].data.ok, 1);
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

test("根据 id 查询单个用户", async t => {
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

test("根据 id 批量查询多个用户", async t => {
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
  t.assert(users.list.every(v => v._id && v.registerInClient === userPoolId));
});

test("变更用户 MFA 状态", async t => {
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

test("查询用户 MFA 状态", async t => {
  let validAuth = auth;
  let email = randomEmail();
  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let mfa = await validAuth.queryMFA({
    userPoolId: userPoolId,
    userId: res._id
  });
  t.is(mfa, null);
  res = await validAuth.changeMFA({
    userPoolId: userPoolId,
    userId: res._id,
    enable: true
  });
  mfa = await validAuth.queryMFA({
    userPoolId: userPoolId,
    userId: loggedIn._id
  });
  t.assert(res._id);
  t.assert(res.userId);
  t.assert(res.userPoolId);
  t.assert(res.shareKey);
  t.true(res.enable);
});

test("检查微信二维码是否被扫描", async t => {
  const validAuth = auth;
  let res = await validAuth.genQRCode(userPoolId);
  let status = await validAuth.checkQR();
  t.is(status.data.data.code, 500);
  t.is(status.data.data.message, "have not been authed");
  //@TODO 给 checkQR 传入正确地参数，进行测试
});

test("获取用户池基础设置", async t => {
  const validAuth = auth;
  let res = await validAuth.getUserPoolSettings(userPoolId);
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

test("user:查询某个角色下的所有用户", async t => {
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

test("发送修改邮箱邮件", async t => {
  const validAuth = auth;
  const res = await validAuth.sendChangeEmailVerifyCode({
    email: "cdbfhoergnrexxjk@qq.com" // 当前邮箱或者没有注册过的邮箱
  });
  t.assert(res.code === 200);
});

test("发送修改邮箱邮件 - 邮箱已绑定，请换一个吧", async t => {
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
test("测试casLogout", async t => {
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
test("OIDC 授权码模式", async t => {
  // 创建 oidc 应用
  let name = randomName();
  let domain = randomName();
  let redirectUri = "https://baidu.com";
  let token = await auth.fetchToken;

  let res = await axios.post(
    gqlEndPoint,
    {
      query:
        "mutation CreateOIDCApp($name: String!, $domain: String!, $image: String, $redirect_uris: [String!]!, $clientId: String, $description: String, $homepageURL: String, $grant_types: [String!]!, $token_endpoint_auth_method: String, $id_token_signed_response_alg: String, $response_types: [String!]!, $jwks: String, $jwks_uri: String, $authorization_code_expire: String, $id_token_expire: String, $access_token_expire: String, $cas_expire: String) {\n  CreateOIDCApp(name: $name, domain: $domain, image: $image, redirect_uris: $redirect_uris, clientId: $clientId, homepageURL: $homepageURL, description: $description, token_endpoint_auth_method: $token_endpoint_auth_method, grant_types: $grant_types, response_types: $response_types, jwks: $jwks, jwks_uri: $jwks_uri, id_token_signed_response_alg: $id_token_signed_response_alg, authorization_code_expire: $authorization_code_expire, id_token_expire: $id_token_expire, access_token_expire: $access_token_expire, cas_expire: $cas_expire) {\n    _id\n    name\n    image\n  domain \n client_secret \n __typename\n  }\n}\n",
      variables: {
        name,
        redirectUris: [],
        description: "",
        image: "",
        redirectUriString: redirectUri,
        grant_types: ["authorization_code", "refresh_token"],
        token_endpoint_auth_method: "client_secret_post",
        response_types: ["code"],
        id_token_signed_response_alg: "HS256",
        id_token_encrypted_response_alg: "不加密",
        id_token_encrypted_response_enc: "不加密",
        userinfo_signed_response_alg: "不加密",
        userinfo_encrypted_response_alg: "不加密",
        userinfo_encrypted_response_enc: "不加密",
        request_object_signIng_alg: "不加密",
        request_object_encryption_alg: "不加密",
        request_object_encryption_enc: "不加密",
        domain,
        jwks: "",
        jwks_uri: "",
        authorization_code_expire: "600",
        id_token_expire: "3600",
        access_token_expire: "3600",
        cas_expire: "3600",
        redirect_uris: [redirectUri],
        clientId // oidc 应用所属的用户池的 id
      },
      operationName: "CreateOIDCApp"
    },
    {
      headers: { Authorization: token }
    }
  );
  t.truthy(res.data.data.CreateOIDCApp._id);
  let oidcApp = res.data.data.CreateOIDCApp;
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  let url = `https://${oidcApp.domain}.authing.cn/oauth/oidc/auth?client_id=${oidcApp._id}&redirect_uri=https%3A%2F%2Fbaidu.com&scope=openid%20profile offline_access&prompt=consent&response_type=code&state=881c87be7g6`;
  try {
    res = await axios.get(url, { maxRedirects: 0 });
  } catch (err) {
    let cookies = err.response.headers["set-cookie"];
    let location = err.response.headers.location;
    let email = randomEmail();
    let user = await auth.register({
      email,
      password: "123456a"
    });
    let loggedInUser = await auth.login({ email, password: "123456a" });
    let token = loggedInUser.token;
    let oidcConfirmUrl = `https://${oidcApp.domain}.authing.cn${location}/login`;
    res = await axios.post(
      oidcConfirmUrl,
      {},
      {
        headers: {
          cookie: cookies.join(";"),
          authorization: token
        }
      }
    );
    t.assert(res.data.redirectTo);
    try {
      res = await axios.get(res.data.redirectTo, {
        headers: {
          cookie: cookies.join(";")
        },
        maxRedirects: 0
      });
    } catch (err) {
      let redirectUrl = err.response.headers.location;
      let qs = redirectUrl.split("?")[1];
      let qsObj = querystring.parse(qs);
      let code = qsObj.code;
      // code 换 token
      let code2token = await axios.post(
        `https://${oidcApp.domain}.${baseHost}/oauth/oidc/token`,
        querystring.stringify({
          code,
          client_id: oidcApp._id,
          client_secret: oidcApp.client_secret,
          grant_type: "authorization_code",
          redirect_uri: redirectUri
        }),
        {
          headers: { "content-type": "application/x-www-form-urlencoded" }
        }
      );
      let token = code2token.data;
      t.assert(code2token.data.access_token);
      t.assert(code2token.data.expires_in);
      t.assert(code2token.data.id_token);
      t.assert(code2token.data.scope);
      t.assert(code2token.data.token_type);
      // 在线验证 token
      let status = await auth.checkLoginStatus(token.access_token);
      t.true(status.status);
      status = await auth.checkLoginStatus(token.id_token);
      t.true(status.status);
      // token 换用户信息
      let userInfoRes = await axios.get(
        `https://${oidcApp.domain}.${baseHost}/oauth/oidc/user/userinfo`,
        {
          params: {
            access_token: token.access_token
          }
        }
      );
      let userInfo = userInfoRes.data;
      t.assert(userInfo.sub);
      // 刷新 token
      let refresh = await axios.post(
        `https://${oidcApp.domain}.${baseHost}/oauth/oidc/token`,
        querystring.stringify({
          client_id: oidcApp._id,
          client_secret: oidcApp.client_secret,
          grant_type: "refresh_token",
          refresh_token: token.refresh_token
        }),
        {
          headers: { "content-type": "application/x-www-form-urlencoded" }
        }
      );
      let refreshedToken = refresh.data;
      // 在线验证刷新之后的 token
      status = await auth.checkLoginStatus(refreshedToken.access_token);
      t.true(status.status);
      status = await auth.checkLoginStatus(refreshedToken.id_token);
      t.true(status.status);
      // 用刷新后的 token 换用户信息
      userInfoRes = await axios.get(
        `https://${oidcApp.domain}.${baseHost}/oauth/oidc/user/userinfo`,
        {
          params: {
            access_token: refreshedToken.access_token
          }
        }
      );
      userInfo = userInfoRes.data;
      t.assert(userInfo.sub);
    }
  }
});
test("OIDC 隐式模式", async t => {
  // 创建 oidc 应用
  let name = randomName();
  let domain = randomName();
  let redirectUri = "https://baidu.com";
  let token = await auth.fetchToken;

  let res = await axios.post(
    gqlEndPoint,
    {
      query:
        "mutation CreateOIDCApp($name: String!, $domain: String!, $image: String, $redirect_uris: [String!]!, $clientId: String, $description: String, $homepageURL: String, $grant_types: [String!]!, $token_endpoint_auth_method: String, $id_token_signed_response_alg: String, $response_types: [String!]!, $jwks: String, $jwks_uri: String, $authorization_code_expire: String, $id_token_expire: String, $access_token_expire: String, $cas_expire: String) {\n  CreateOIDCApp(name: $name, domain: $domain, image: $image, redirect_uris: $redirect_uris, clientId: $clientId, homepageURL: $homepageURL, description: $description, token_endpoint_auth_method: $token_endpoint_auth_method, grant_types: $grant_types, response_types: $response_types, jwks: $jwks, jwks_uri: $jwks_uri, id_token_signed_response_alg: $id_token_signed_response_alg, authorization_code_expire: $authorization_code_expire, id_token_expire: $id_token_expire, access_token_expire: $access_token_expire, cas_expire: $cas_expire) {\n    _id\n    name\n    image\n  domain \n client_secret \n __typename\n  }\n}\n",
      variables: {
        name,
        redirectUris: [],
        description: "",
        image: "",
        redirectUriString: redirectUri,
        grant_types: [
          "authorization_code",
          "refresh_token",
          "implicit",
          "client_credentials"
        ],
        token_endpoint_auth_method: "client_secret_post",
        response_types: [
          "code",
          "code token",
          "id_token token",
          "code id_token",
          "code id_token token",
          "none",
          "id_token"
        ],
        id_token_signed_response_alg: "HS256",
        id_token_encrypted_response_alg: "不加密",
        id_token_encrypted_response_enc: "不加密",
        userinfo_signed_response_alg: "不加密",
        userinfo_encrypted_response_alg: "不加密",
        userinfo_encrypted_response_enc: "不加密",
        request_object_signIng_alg: "不加密",
        request_object_encryption_alg: "不加密",
        request_object_encryption_enc: "不加密",
        domain,
        jwks: "",
        jwks_uri: "",
        authorization_code_expire: "600",
        id_token_expire: "3600",
        access_token_expire: "3600",
        cas_expire: "3600",
        redirect_uris: [redirectUri],
        clientId // oidc 应用所属的用户池的 id
      },
      operationName: "CreateOIDCApp"
    },
    {
      headers: { Authorization: token }
    }
  );
  t.truthy(res.data.data.CreateOIDCApp._id);
  let oidcApp = res.data.data.CreateOIDCApp;
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  let url = `https://${oidcApp.domain}.authing.cn/oauth/oidc/auth?client_id=${oidcApp._id}&redirect_uri=https%3A%2F%2Fbaidu.com&scope=openid profile&response_type=id_token token&state=23436&nonce=12415`;
  try {
    res = await axios.get(url, { maxRedirects: 0 });
  } catch (err) {
    let cookies = err.response.headers["set-cookie"];
    let location = err.response.headers.location;
    let email = randomEmail();
    let user = await auth.register({
      email,
      password: "123456a"
    });
    let loggedInUser = await auth.login({ email, password: "123456a" });
    let token = loggedInUser.token;
    let oidcConfirmUrl = `https://${oidcApp.domain}.authing.cn${location}/login`;
    res = await axios.post(
      oidcConfirmUrl,
      {},
      {
        headers: {
          cookie: cookies.join(";"),
          authorization: token
        }
      }
    );
    t.assert(res.data.redirectTo);
    try {
      res = await axios.get(res.data.redirectTo, {
        headers: {
          cookie: cookies.join(";")
        },
        maxRedirects: 0
      });
    } catch (err) {
      let redirectUrl = err.response.headers.location;
      let qs = redirectUrl.split("#")[1];
      let qsObj = querystring.parse(qs);
      let idToken = qsObj.id_token;
      let accessToken = qsObj.access_token;
      t.assert(qsObj.id_token);
      t.assert(qsObj.access_token);
      // 在线验证 token
      let status = await auth.checkLoginStatus(accessToken);
      t.true(status.status);
      status = await auth.checkLoginStatus(idToken);
      t.true(status.status);
      // token 换用户信息
      let userInfoRes = await axios.get(
        `https://${oidcApp.domain}.${baseHost}/oauth/oidc/user/userinfo`,
        {
          params: {
            access_token: accessToken
          }
        }
      );
      let userInfo = userInfoRes.data;
      t.assert(userInfo.sub);
    }
  }
});
test("OIDC 混合模式", async t => {
  // 创建 oidc 应用
});
test("refreshThirdPartyToken", async t => {
  let email = randomEmail();
  let user = await auth.register({
    email,
    password: "123456a"
  });
  let res = await auth.refreshThirdPartyToken(user._id);
  t.false(res.refreshSuccess);
});

test('loginByOidc', async t => {
  let user = await auth.loginByOidc({
    client_id: '5e57fa63c942050998c3ab11',
    client_secret: '4b4796bf54ba0c50e6364801c517e22c',
    email: 'test3@123.com',
    password: '123456',

  })
  t.assert(user.sub)
  console.log(user)
})

test('refreshOidcToken', async t => {
  let user = await auth.loginByOidc({
    client_id: '5e57fa63c942050998c3ab11',
    client_secret: '4b4796bf54ba0c50e6364801c517e22c',
    scope: 'openid profile email phone offline_access',
    email: 'test3@123.com',
    password: '123456',
  })
  t.assert(user.sub)
  let refreshToken = await auth.refreshOidcToken({
    client_id: '5e57fa63c942050998c3ab11',
    client_secret: '4b4796bf54ba0c50e6364801c517e22c',
    refresh_token: user.refresh_token
  })
  console.log(refreshToken)
  t.assert(refreshToken.access_token)
})
test('signIn', async t => {
  try {

    let user = await auth.signIn({
      email: 'test3@123.com',
      password: '123456',
    })
    t.assert(user.sub)
  }catch(err) {
    console.log(JSON.stringify(err.response.data))
    t.fail()
  }
})
test.only('refreshSignInToken', async t => {
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
  }catch(err) {
    console.log(JSON.stringify(err.response.data))
    t.fail()
  }
})

test('生成二维码', async t => {
  const authing = auth;
  const res = await authing.geneQRCode({
    scene: 'APP_AUTH',
    userDefinedData: {
      hello: 'world'
    }
  })
  t.assert(res.status === 200)
  t.assert(res.data.qrcodeId !== undefined)
  t.assert(res.data.qrcodeUrl !== undefined)
})