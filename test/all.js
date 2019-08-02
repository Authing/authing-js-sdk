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
    t.assert(res.email)
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

test("users:queryPermissions 查询", async t => {
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

test('user:logout 登出', async t => {
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
  let res2 = await validAuth.logout(user._id)
  t.is(res2.tokenExpiredAt, 'Sat Jan 01 2000 00:00:00 GMT+0800 (CST)')
})

test('user:remove 删除用户', async t => {
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
  let res2 = await validAuth.remove(user._id)
  t.assert(Array.isArray(res2))
  res2.map(item => t.assert(item._id))
})

test('user:createRole 创建角色组', async t => {
  const validAuth = await auth;
  let res = await validAuth.createRole({clientId, name: 'myRole', descriptions: 'ava test role'})
  t.assert(res._id)
})

test('user:assignUserToRole 把用户指派到角色组', async t => {
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
  let role = await validAuth.createRole({clientId, name: 'myRole', descriptions: 'ava test role'})
  t.assert(role._id)
  try {
    let res2 = await validAuth.assignUserToRole({user: user._id, roleId: role._id})
    t.assert(Array.isArray(res2.list))
    t.assert(res2.list.length)
    t.assert(res2.list[0]._id)
  } catch(err) {
    t.log(err.response.data.errors[0])
    t.fail('assignUserToRole 请求错误')
  }
})

test('user:removeUserFromRole 把用户从角色组移除', async t => {
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
  let role = await validAuth.createRole({clientId, name: 'myRole', descriptions: 'ava test role'})
  t.assert(role._id)
  try {
    let res2 = await validAuth.assignUserToRole({user: user._id, roleId: role._id})
    let res3 = await validAuth.removeUserFromRole({user: user._id, roleId: role._id})
    t.assert(res3._id)
  } catch(err) {
    t.log(err.response.data.errors[0])
    t.fail('assignUserToRole 请求错误')
  }
})

test.only('user:refreshToken 刷新 Token', async t => {
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
  let refreshed = await validAuth.refreshToken({user: user._id})
  t.assert(refreshed.token)
  t.assert(refreshed.iat)
  t.assert(refreshed.exp)
})