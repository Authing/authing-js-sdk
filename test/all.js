const test = require("ava");
const Authing = require("../src");

const clientId = "5d4295b4f9ee1719a9a77d56";
const secret = "ae10498551d99763fb3ea66f96b8764c";
function randomEmail() {
  let rand = Math.random()
    .toString(36)
    .slice(2);
  let email = rand + "@test.com";
  return email;
}
let auth = new Authing({
  clientId,
  secret,
  host: {
    user: "http://localhost:5555/graphql",
    oauth: "http://localhost:5556/graphql"
  }
});

test("users:register 用户密码注册", async t => {
  const validAuth = await auth;
  let email = randomEmail();
  try {
    let res = await validAuth.register({
      email,
      password: "123456a"
    });
    t.assert(res.email);
    t.pass();
  } catch (err) {
    t.fail(JSON.stringify(err));
  }
});

test("users:list 用户池用户列表", async t => {
  const validAuth = await auth;
  try {
    let list = await validAuth.list();
    t.is(Array.isArray(list.list), true);
    t.pass();
  } catch (err) {
    t.fail(JSON.stringify(err));
  }
});

test("users:login 用户密码登录", async t => {
  const validAuth = await auth;
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
    t.fail(JSON.stringify(err));
  }
});

test("users:queryPermissions 查询用户权限", async t => {
  try {
    const validAuth = await auth;
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
    t.log(err.message);
    t.fail(JSON.stringify(err));
  }
});

test("users:queryRoles 查询角色列表", async t => {
  try {
    const validAuth = await auth;
    let roles = await validAuth.queryRoles({ clientId, page: 1, count: 10 });
    t.assert(Array.isArray(roles.list));
    t.pass();
  } catch (err) {
    t.log(err.message);
    t.fail(JSON.stringify(err));
  }
});

test("oauth:readUserOAuthList", async t => {
  const validAuth = await auth;
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
  const validAuth = await auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  let res2 = await validAuth.logout(user._id);
  t.is(res2.tokenExpiredAt, "Sat Jan 01 2000 00:00:00 GMT+0800 (CST)");
});

test("user:remove 删除用户", async t => {
  const validAuth = await auth;
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
  const validAuth = await auth;
  let res = await validAuth.createRole({
    clientId,
    name: "myRole",
    descriptions: "ava test role"
  });
  t.assert(res._id);
});

test("user:assignUserToRole 把用户指派到角色组", async t => {
  const validAuth = await auth;
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
    t.log(err.response.data.errors[0]);
    t.fail("assignUserToRole 请求错误");
  }
});

test("user:removeUserFromRole 把用户从角色组移除", async t => {
  const validAuth = await auth;
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
    t.log(err.response.data.errors[0]);
    t.fail("assignUserToRole 请求错误");
  }
});

test("user:refreshToken 刷新 Token", async t => {
  const validAuth = await auth;
  let email = randomEmail();

  let res = await validAuth.register({
    email,
    password: "123456a"
  });
  t.assert(res.email);
  let user = await validAuth.login({ email, password: "123456a" });
  t.assert(user.email);
  t.assert(user._id);
  let refreshed = await validAuth.refreshToken({ user: user._id });
  t.assert(refreshed.token);
  t.assert(refreshed.iat);
  t.assert(refreshed.exp);
});

test("user:sendResetPasswordEmail 发送重置密码邮件", async t => {
  const validAuth = await auth;
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

test.skip("user:changePassord 用户自己修改密码", async t => {
  const validAuth = await auth;
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
  const validAuth = await auth;
  let email = "yezuwei@authing.cn";
  try {
    let user = await validAuth.register({
      email,
      password: "123456a"
    });
  } catch (err) {
    t.assert(err.message.code === 2026);
    t.assert(err.message.message === "用户已存在，请不要重复注册");
  }

  let res = await validAuth.sendVerifyEmail({ email });
  t.assert(res.message === "发送验证邮件成功");
  t.assert(res.code === 200);
  t.assert(res.status === true);
});

test("user:checkLoginStatus 检查登录状态", async t => {
  const validAuth = await auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  let res = await validAuth.checkLoginStatus(user.token);
  t.assert(res.status === false);
  t.assert(res.code === 2020);
  t.assert(res.message === "未登录");
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  res = await validAuth.checkLoginStatus(loggedIn.token);
  t.assert(res.status === true);
  t.assert(res.code === 200);
  t.assert(res.message === "已登录");
});

test("user:decodeToken 解析 jwt token", async t => {
  const validAuth = await auth;
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

test.skip("oauth:genQRCode 生成 QRCode", async t => {
  const validAuth = await auth;
  let res = await validAuth.genQRCode(clientId);
  t.log(res);
});

test("user:getVerificationCode 获取短信验证码", async t => {
  const validAuth = await auth;
  let phone = "18000179176";
  let res = await validAuth.getVerificationCode(phone);
  t.assert(res.code === 200);
  t.assert(res.message === "发送成功");
  try {
    res = await validAuth.getVerificationCode(phone);
  } catch (err) {
    t.assert(err.code === 500);
    t.assert(err.message === "已发送验证码，还未失效");
  }
});

test("oauth:loginByLDAP 使用 LDAP 登录", async t => {
  const validAuth = await auth;
  try {
    let res = await validAuth.loginByLDAP({
      username: "tesla",
      password: "password"
    });
    t.assert(res.email === "tesla@ldap.forumsys.com");
  } catch (err) {
    t.fail("需要先在用户池创建 LDAP 服务再测试");
    try {
      t.log(err.response.data.errors[0]);
    } catch (e) {
      t.log(err);
    }
  }
});

test("user:bindOAuth 绑定 OAuth 登录方式", async t => {
  const validAuth = await auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let list = await validAuth.readOAuthList();
  t.is(Array.isArray(list), true);
  const { item = { type: 'github' } } = list.find(f => f.binded === false) || {};
  let bind = await validAuth.bindOAuth({
    user: loggedIn._id,
    type: item.type,
    unionid: Math.random().toString(),
    userInfo: '{"uniondid":"12345678","username":"demo"}'
  })
  t.assert(bind.bindOtherOAuth.user)
});

test("user:unbindOAuth 解绑 OAuth 登录方式", async t => {
  const validAuth = await auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let list = await validAuth.readOAuthList();
  t.is(Array.isArray(list), true);
  const { item = { type: 'github' } } = list.find(f => f.binded === false) || {};
  let bind = await validAuth.bindOAuth({
    user: loggedIn._id,
    type: item.type,
    unionid: Math.random().toString(),
    userInfo: '{"uniondid":"12345678","username":"demo"}'
  })
  t.assert(bind.bindOtherOAuth.user)

  let unbind = await validAuth.unbindOAuth({
    user: loggedIn._id,
    client: loggedIn.registerInClient,
    type: 'github'
  })
  t.assert(unbind.unbindOtherOAuth._id)
});

test("user:unbindEmail 解绑 email", async t => {
  const validAuth = await auth;
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
  const { item = { type: 'github' } } = list.find(f => f.binded === false) || {};
  let bind = await validAuth.bindOAuth({
    user: loggedIn._id,
    type: item.type,
    unionid: Math.random().toString(),
    userInfo: '{"uniondid":"12345678","username":"demo"}'
  })

  t.assert(bind.bindOtherOAuth.user)

  let res = await validAuth.unbindEmail({
    user: user._id,
    client: user.registerInClient
  });
  t.assert(res.unbindEmail._id)
  t.assert(res.unbindEmail.email === '')
});

test("user:update 修改用户资料", async t => {
  const validAuth = await auth;
  let email = randomEmail();
  let user = await validAuth.register({
    email,
    password: "123456a"
  });
  let loggedIn = await validAuth.login({ email, password: "123456a" });
  let updated = await validAuth.update({_id: loggedIn._id, nickname: 'niska'});
  t.assert(updated.nickname === 'niska')
})

test("user:updateRolePermissions 修改角色权限", async t => {
  const validAuth = await auth;
  let res = await validAuth.createRole({
    clientId,
    name: "myRole",
    descriptions: "ava test role"
  });
  t.assert(res._id);

  let updated = await validAuth.updateRolePermissions({roleId: res._id, permissions: 'permission updated', name: 'myRole updated'})
  t.is(updated.name, 'myRole updated')
  t.is(updated.permissions, 'permission updated')
})
