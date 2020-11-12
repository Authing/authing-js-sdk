import { AuthenticationClient } from './AuthenticationClient';
import {
  generateRandomPhone,
  generateRandomString,
  getOptionsFromEnv
} from '../testing-helper';
import test from 'ava';
import { EmailScene, UdfDataType, UdfTargetType } from '../../types/graphql.v2';
import { ManagementClient } from '../management/ManagementClient';

const managementClient = new ManagementClient(getOptionsFromEnv());

test('邮箱注册', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const email = generateRandomString() + '@test.com';
  const password = generateRandomString();
  const user = await authing.registerByEmail(email, password);
  t.assert(user);
});

test('邮箱注册 # 设置 profile', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const email = generateRandomString() + '@test.com';
  const password = generateRandomString();
  const nickname = generateRandomString();
  const user = await authing.registerByEmail(email, password, {
    nickname
  });
  t.assert(user);
  t.assert(user.nickname === nickname);
});

test('用户名注册', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const username = generateRandomString(12);
  const password = generateRandomString();
  const user = await authing.registerByUsername(username, password);
  t.assert(user);
});

test.skip('发送短信验证码', async () => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const phone = '17670416754';
  await authing.sendSmsCode(phone);
});

test.skip('发送重置密码邮件', async t => {
  const email = 'cj@authing.cn';
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const { code } = await authing.sendEmail(email, EmailScene.ResetPassword);
  t.assert(code === 200);
});

test('修改用户资料', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.registerByUsername(username, password, null, {
    forceLogin: true
  });
  const nickname = generateRandomString();
  const updates = await authing.updateProfile({ nickname });
  t.assert(updates.nickname === nickname);
});

test('修改用户资料 # 不能直接修改手机号', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.registerByUsername(username, password, null, {
    forceLogin: true
  });
  let failed = false;
  try {
    await authing.updateProfile({ phone: generateRandomPhone() });
  } catch (error) {
    failed = true;
  }
  t.assert(failed === true);
});

test('修改用户资料 # 不能直接修改邮箱', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.registerByUsername(username, password, null, {
    forceLogin: true
  });
  let failed = false;
  try {
    await authing.updateProfile({
      email: generateRandomString() + '@test.com'
    });
  } catch (error) {
    failed = true;
  }
  t.assert(failed === true);
});

test('修改用户资料 # 不能直接修改 unionid', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.registerByUsername(username, password, null, {
    forceLogin: true
  });
  let failed = false;
  try {
    await authing.updateProfile({ unionid: generateRandomString() });
  } catch (error) {
    failed = true;
  }
  t.assert(failed === true);
});

test('修改用户资料 # 不能直接修改 openid', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.registerByUsername(username, password, null, {
    forceLogin: true
  });
  let failed = false;
  try {
    await authing.updateProfile({ openid: generateRandomString() });
  } catch (error) {
    failed = true;
  }
  t.assert(failed === true);
});

test('刷新用户 token', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.registerByUsername(username, password, null, {
    forceLogin: true
  });
  const data = await authing.refreshToken();
  t.assert(data);
});

test.skip('使用 LDAP 登录', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  // 创建 ldap 连接
  // 为应用启用 ldap 连接
  // ldap 登录
  const username = 'admin';
  const password = 'admin';
  const user = await authing.loginByLdap(username, password);
  t.assert(user);
  t.assert(user.username === username);
  t.assert(user.token);
});

test('用户名注册 # autoRegister', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  const user = await authing.loginByUsername(username, password, {
    autoRegister: true
  });
  t.assert(user);
  t.assert(user.username === username);
  t.assert(user.token);
});

test('邮箱 # autoRegister', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const email = generateRandomString(12) + '@qq.com';
  const password = generateRandomString();
  const user = await authing.loginByEmail(email, password, {
    autoRegister: true
  });
  t.assert(user);
  t.assert(user.email === email.toLowerCase());
  t.assert(user.token);
});

test('注册 # generateToken', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const username = generateRandomString(12);
  const password = generateRandomString();
  const user = await authing.registerByUsername(username, password, null, {
    generateToken: true
  });
  t.assert(user);
  t.assert(user.token !== '');
});

test('添加自定义数据', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });

  const key = generateRandomString(10);
  await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    generateRandomString(5)
  );

  await authing.setUdv(key, '123');
  const list = await authing.listUdv();
  t.assert(list.length);
});

test('添加自定义数据 # 不存在的 key', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });

  let faild = false;
  try {
    const key = generateRandomString(10);
    await authing.setUdv(key, '123');
  } catch {
    faild = true;
  }
  t.assert(faild === true);
});

test('添加自定义数据 # 非法的数据类型', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });

  const key = generateRandomString(10);
  await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    generateRandomString(5)
  );

  let faild = false;
  try {
    const key = generateRandomString(10);
    await authing.setUdv(key, 123);
  } catch (error) {
    faild = true;
  }
  t.assert(faild === true);
});

test('删除自定义数据', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });

  const key = generateRandomString(10);
  await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    generateRandomString(5)
  );

  await authing.setUdv(key, '123');
  await authing.removeUdv(key);
  const list = await authing.listUdv();
  t.assert(list.length === 0);
});

test('添加自定义数据 # 字符串', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());
  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });
  const key = generateRandomString(10);
  await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    generateRandomString(5)
  );
  await authing.setUdv(key, '123');
  const list = await authing.listUdv();
  t.assert(list.length === 1);
  const value = list[0].value;
  t.assert(typeof value === 'string');
});

test('添加自定义数据 # 数字', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });
  const key = generateRandomString(10);
  await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.Number,
    generateRandomString(5)
  );
  await authing.setUdv(key, 123);
  const list = await authing.listUdv();
  t.assert(list.length === 1);
  const value = list[0].value;
  t.assert(typeof value === 'number');
});

test('添加自定义数据 # boolean', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });
  const key = generateRandomString(10);
  await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.Boolean,
    generateRandomString(5)
  );
  await authing.setUdv(key, true);
  const list = await authing.listUdv();
  console.log(list);
  t.assert(list.length === 1);
  const value = list[0].value;
  t.assert(typeof value === 'boolean');
});

test('添加自定义数据 # DATETIME', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });
  const key = generateRandomString(10);
  await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.Datetime,
    generateRandomString(5)
  );
  await authing.setUdv(key, Date.now());
  const list = await authing.listUdv();
  t.assert(list.length === 1);
  const value = list[0].value;
  // @ts-ignore
  t.assert(value instanceof Date);
});

test('添加自定义数据 # OBJECT', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });
  const key = generateRandomString(10);
  await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.Object,
    generateRandomString(5)
  );
  await authing.setUdv(key, { ok: 'good' });
  const list = await authing.listUdv();
  t.assert(list.length === 1);
  const value = list[0].value;
  t.assert(typeof value === 'object');
});

test('通过 accessToken 初始化', async t => {
  const user = await managementClient.users.create({
    username: generateRandomString()
  });
  const data = await managementClient.users.refreshToken(user.id);
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv(),
    accessToken: data.token
  });
  const newUser = await authing.getCurrentUser();
  t.assert(newUser);
  t.assert(newUser.id === user.id);
});

test('通过 accessToken 初始化 2', async t => {
  let user = await managementClient.users.create({
    username: generateRandomString()
  });
  const data = await managementClient.users.refreshToken(user.id);
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv(),
    accessToken: data.token
  });
  user = await authing.updateProfile({ nickname: 'nick' });
  t.assert(user.nickname === 'nick');
});

test.skip('listOrgs', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv(),
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InR5cGUiOiJ1c2VyIiwidXNlclBvb2xJZCI6IjU5Zjg2YjQ4MzJlYjI4MDcxYmRkOTIxNCIsImFwcElkIjpudWxsLCJhcm4iOiJhcm46Y246YXV0aGluZzo1OWY4NmI0ODMyZWIyODA3MWJkZDkyMTQ6dXNlcjo1Zjk5NzZhNzM4OWI2ZGNjYjIzYTRjNTQiLCJpZCI6IjVmOTk3NmE3Mzg5YjZkY2NiMjNhNGM1NCIsInVzZXJJZCI6IjVmOTk3NmE3Mzg5YjZkY2NiMjNhNGM1NCIsIl9pZCI6IjVmOTk3NmE3Mzg5YjZkY2NiMjNhNGM1NCIsInBob25lIjpudWxsLCJlbWFpbCI6ImNqQGF1dGhpbmcuY24iLCJ1c2VybmFtZSI6bnVsbCwidW5pb25pZCI6bnVsbCwib3BlbmlkIjpudWxsLCJjbGllbnRJZCI6IjU5Zjg2YjQ4MzJlYjI4MDcxYmRkOTIxNCJ9LCJpYXQiOjE2MDM4OTI5MDgsImV4cCI6MTYwNTE4ODkwOH0.Qf3g_I8QLXpEjL3jgayzB6TgmVZ9lwjxTWtRCzn7JUg'
  });
  const data = await authing.listOrgs();
  t.assert(data);
});

test('checkPasswordStrength', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  const { valid } = await authing.checkPasswordStrength('Passw0rd!');
  t.assert(valid);
});

test('checkLoginStatus', async t => {
  let user = await managementClient.users.create({
    username: generateRandomString()
  });
  const data = await managementClient.users.refreshToken(user.id);
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv(),
    accessToken: data.token
  });
  const data2 = await authing.checkLoginStatus();
  t.assert(data2.code === 200);
  t.assert(data2.status === true);
});
