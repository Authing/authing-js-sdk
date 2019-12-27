import test from "ava";
import { formatError } from "../src/utils/formatError";
const Authing = require("../dist/authing-js-sdk-node");

const clientId = "5e04ae0d5f3cee22fb37612b";
const secret = "08a19bd05bcc8d529ff7861ccd9ff17d";

//线上
// const secret = 'bb278212d520fc19f169e361179ea690';
// const clientId = '5c95905578fce5000166f853';
function randomEmail() {
  let rand = Math.random()
    .toString(36)
    .slice(2);
  let email = rand + "@test.com";
  return email;
}
let auth = new Authing({
  userPoolId: clientId,
  secret,
  host: {
    user: "http://localhost:3000/graphql",
    oauth: "http://localhost:3000/graphql"
  }
});
test("初始化", async t => {
  let fault = new Authing({
    userPoolId: clientId,
    secret: "1",
    // host: {
    //   user: 'http://localhost:5555/graphql',
    //   oauth: 'http://localhost:5556/graphql'
    // },
    onInitError: function (err) {
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
      password: "123456a"
    });
    t.assert(res.email);
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
    let roles = await validAuth.queryRoles({ clientId, page: 1, count: 10 });
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
    t.is(res2.tokenExpiredAt, "2000-1-1 00:00:00");
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
      clientId,
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
    clientId,
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
    clientId,
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
  let res = await validAuth.genQRCode(clientId);
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
  let newEmail = randomEmail()

  try {
    let updated = await validAuth.update({
      _id: loggedIn._id,
      email: newEmail
    });
  } catch (error) {
    t.assert(error.message.message === "updateUser 接口不能直接修改邮箱，请使用 updateEmail 接口。")
  }
})

test("user:updateRolePermissions 修改角色权限", async t => {
  const validAuth = auth;
  let res = await validAuth.createRole({
    clientId,
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
//     "userPoolId": clientId,
//     "userId": "5d765d4013d73a5e90b7857a",
//     "appId": "5d5a8a7bbc7275af2cb71920"
//   })
//   console.log(res)
// })

// test.only("用户在用户池内授权的 SSO 应用列表", async t => {
//   const validAuth = auth;

//   let res = await validAuth.getAuthedAppList({
//     clientId,
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
  t.is(res[0].data.ok, 1);
  t.is(res[1].data.ok, 1);
});

test("根据参数决定是否进行用户和认证服务预检和 cdn 预检", async t => {
  let auth = new Authing({
    userPoolId: clientId,
    secret,
    // host: {
    //   user: 'http://localhost:5555/graphql',
    //   oauth: 'http://localhost:5556/graphql'
    // },
    preflight: true
  });
  let validAuth = auth;
  let res = await validAuth.checkPreflight();
  let service = await res[0];
  let cdn = await res[1];
  t.is(service[0].data.ok, 1);
  t.is(service[1].data.ok, 1);
  t.is(cdn, "ok");
  auth = new Authing({
    userPoolId: clientId,
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
    userPoolId: clientId,
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
  t.assert(users.list.every(v => v._id && v.registerInClient === clientId));
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
    userPoolId: clientId,
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
  let mfa = await validAuth.queryMFA({ userPoolId: clientId, userId: res._id });
  t.is(mfa, null);
  res = await validAuth.changeMFA({
    userPoolId: clientId,
    userId: res._id,
    enable: true
  });
  mfa = await validAuth.queryMFA({
    userPoolId: clientId,
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
  let res = await validAuth.genQRCode(clientId);
  let status = await validAuth.checkQR();
  t.is(status.data.data.code, 500);
  t.is(status.data.data.message, "have not been authed");
  //@TODO 给 checkQR 传入正确地参数，进行测试
});

test("获取用户池基础设置", async t => {
  const validAuth = auth;
  let res = await validAuth.getUserPoolSettings(clientId);
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

test("发送激活邮件", async t => {
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
    clientId,
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
  t.assert(res2.list[0]._id)
});

test("has axios", async t => {
  const validAuth = auth;
  t.truthy(validAuth._axios);
});

test('发送修改邮箱邮件', async t => {
  const validAuth = auth;
  const res = await validAuth.sendChangeEmailVerifyCode({
    email: 'cdbfhoergnrexxjk@qq.com' // 当前邮箱或者没有注册过的邮箱
  })
  t.assert(res.code === 200)
})

test('发送修改邮箱邮件 - 邮箱已绑定，请换一个吧', async t => {
  const validAuth = auth;
  const res = await validAuth.sendChangeEmailVerifyCode({
    email: 'ax6coi4ytmk@test.com' // 已经被其他人注册过的邮箱
  })
  t.assert(res.code === 200)
})

test('修改邮箱', async t => {
  const validAuth = auth;
  const newEmail = "cdbfhorexxjk@qq.com"
  const res = await validAuth.updateEmail({
    email: newEmail,
    emailCode: "2815"
  })
  t.assert(res.email === newEmail)
})

test('生成二维码', async t => {
  const authing = auth;
  const res = await authing.geneQRCode({
    scence: 'APP_AUTH',
    userDefinedData: {
      hello: 'world'
    }
  })
  t.assert(res.status === 200)
  t.assert(res.data.qrcodeId !== undefined)
  t.assert(res.data.qrcodeUrl !== undefined)
})