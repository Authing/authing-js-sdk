import { AuthenticationClient } from './AuthenticationClient';
import {
  generateRandomEmail,
  generateRandomPhone,
  generateRandomString,
  getOptionsFromEnv
} from '../testing-helper';
import test from 'ava';
import { EmailScene, UdfDataType, UdfTargetType } from '../../types/graphql.v2';
import { ManagementClient } from '../management/ManagementClient';
import { Cas20ValidationSuccessResult } from './types';

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
    token: data.token
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
    token: data.token
  });
  user = await authing.updateProfile({ nickname: 'nick' });
  t.assert(user.nickname === 'nick');
});

test.skip('listOrgs', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv(),
    token:
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
    token: data.token
  });
  const data2 = await authing.checkLoginStatus();
  t.assert(data2.code === 200);
  t.assert(data2.status === true);
});

test('getUdfValue', async t => {
  const authing = new AuthenticationClient(getOptionsFromEnv());

  const username = generateRandomString(12);
  const password = generateRandomString();
  await authing.loginByUsername(username, password, {
    autoRegister: true
  });
  await authing.setUdfValue({
    school: '华中科技大学'
  });

  const data = await authing.getUdfValue();
  t.assert(data.school === '华中科技大学');

  await authing.removeUdfValue('school');
  const data2 = await authing.getUdfValue();
  t.assert(data2.school === undefined);
});

test('拼接 OIDC 授权码模式授权链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    appHost: 'https://oidc1.authing.cn',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'oidc'
  });
  let url1 = authing.buildAuthorizeUrl({
    responseType: 'code',
    responseMode: 'form_post'
  });
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === '/oidc/auth');
  t.assert(typeof parseInt(url1Data.searchParams.get('nonce')) === 'number');
  t.assert(typeof parseInt(url1Data.searchParams.get('state')) === 'number');
  t.assert(
    url1Data.searchParams.get('scope') === 'openid profile email phone address'
  );
  t.assert(url1Data.searchParams.get('client_id') === '9072248490655972');
  t.assert(url1Data.searchParams.get('response_mode') === 'form_post');
  t.assert(url1Data.searchParams.get('redirect_uri') === 'https://baidu.com');
  t.assert(url1Data.searchParams.get('response_type') === 'code');
});

test('拼接 OIDC 授权码模式 + 多租户授权链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    appHost: 'https://oidc1.authing.cn',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'oidc',
  });
  let url1 = authing.buildAuthorizeUrl({
    responseType: 'code',
    responseMode: 'form_post',
    tenantId: '12'
  });
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === '/oidc/auth');
  t.assert(typeof parseInt(url1Data.searchParams.get('nonce')) === 'number');
  t.assert(typeof parseInt(url1Data.searchParams.get('state')) === 'number');
  t.assert(
    url1Data.searchParams.get('scope') === 'openid profile email phone address'
  );
  t.assert(url1Data.searchParams.get('client_id') === '9072248490655972');
  t.assert(url1Data.searchParams.get('response_mode') === 'form_post');
  t.assert(url1Data.searchParams.get('redirect_uri') === 'https://baidu.com');
  t.assert(url1Data.searchParams.get('response_type') === 'code');
  t.assert(url1Data.searchParams.get('tenant_id') === '12');
});

test('拼接 OIDC 隐式模式授权链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    appHost: 'https://oidc1.authing.cn',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'oidc'
  });
  let url1 = authing.buildAuthorizeUrl({ responseType: 'id_token token' });
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === '/oidc/auth');
  t.assert(typeof parseInt(url1Data.searchParams.get('nonce')) === 'number');
  t.assert(typeof parseInt(url1Data.searchParams.get('state')) === 'number');
  t.assert(
    url1Data.searchParams.get('scope') === 'openid profile email phone address'
  );
  t.assert(url1Data.searchParams.get('client_id') === '9072248490655972');
  t.falsy(url1Data.searchParams.get('response_mode'));
  t.assert(url1Data.searchParams.get('redirect_uri') === 'https://baidu.com');
  t.assert(url1Data.searchParams.get('response_type') === 'id_token token');
});

test('拼接 OIDC 带 refresh_token 能力的授权链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    appHost: 'https://oidc1.authing.cn',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'oidc'
  });
  let url1 = authing.buildAuthorizeUrl({
    scope: 'openid profile offline_access'
  });
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === '/oidc/auth');
  t.assert(typeof parseInt(url1Data.searchParams.get('nonce')) === 'number');
  t.assert(typeof parseInt(url1Data.searchParams.get('state')) === 'number');
  t.assert(
    url1Data.searchParams.get('scope') === 'openid profile offline_access'
  );
  t.assert(url1Data.searchParams.get('client_id') === '9072248490655972');
  t.assert(url1Data.searchParams.get('redirect_uri') === 'https://baidu.com');
  t.assert(url1Data.searchParams.get('response_type') === 'code');
  t.assert(url1Data.searchParams.get('prompt') === 'consent');
  t.falsy(url1Data.searchParams.get('code_verifier'));
});

test('拼接 OIDC 授权码 + PKCE 带 refresh_token 能力的授权链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    appHost: 'https://oidc1.authing.cn',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'oidc'
  });
  let codeChallenge = authing.generateCodeChallenge();
  console.log(codeChallenge);
  // 计算 code_verifier 的 SHA256 摘要
  let codeChallengeDigest = authing.getCodeChallengeDigest({
    codeChallenge,
    method: 'S256'
  });
  // 如果需要获取 Refresh token，请在 scope 中加入 offline_access 项
  console.log(codeChallengeDigest);
  let url = authing.buildAuthorizeUrl({
    codeChallenge: codeChallengeDigest,
    codeChallengeMethod: 'S256',
    scope: 'openid profile offline_access'
  });
  console.log(url);
  let url1Data = new URL(url);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === '/oidc/auth');
  t.assert(typeof parseInt(url1Data.searchParams.get('nonce')) === 'number');
  t.assert(typeof parseInt(url1Data.searchParams.get('state')) === 'number');
  t.assert(
    url1Data.searchParams.get('scope') === 'openid profile offline_access'
  );
  t.assert(url1Data.searchParams.get('client_id') === '9072248490655972');
  t.assert(url1Data.searchParams.get('redirect_uri') === 'https://baidu.com');
  t.assert(url1Data.searchParams.get('response_type') === 'code');
  t.assert(url1Data.searchParams.get('prompt') === 'consent');
  t.assert(url1Data.searchParams.get('code_challenge') === codeChallengeDigest);
  t.assert(url1Data.searchParams.get('code_challenge_method') === 'S256');
});

test('OIDC 授权码 + PKCE code 换 token', async t => {
  const authing = new AuthenticationClient({
    appId: '5f17a529f64fb009b794a2ff',
    appHost: 'https://oidc1.authing.cn',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'none',
    protocol: 'oidc'
  });
  let res = await authing.getAccessTokenByCode(
    'xoLxw18uPidrwNHWMFC8AwlBl5aciCP8Em_-NcvURZ-',
    {
      codeVerifier: 'Bu6RP796BBiAwGwdUpHpKfhmQqahszBcGep8qT31XOy'
    }
  );
  t.assert(res.access_token);
});

test('拼接 OAuth 授权链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    appHost: 'https://oidc1.authing.cn',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'oauth'
  });
  let url1 = authing.buildAuthorizeUrl();
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === '/oauth/auth');
  t.assert(typeof parseInt(url1Data.searchParams.get('nonce')) === 'number');
  t.assert(typeof parseInt(url1Data.searchParams.get('state')) === 'number');
  t.assert(url1Data.searchParams.get('scope') === 'user');
  t.assert(url1Data.searchParams.get('client_id') === '9072248490655972');
  t.assert(url1Data.searchParams.get('redirect_uri') === 'https://baidu.com');
  t.assert(url1Data.searchParams.get('response_type') === 'code');
});

test('拼接 Saml 授权链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    protocol: 'saml',
    appHost: 'https://oidc1.authing.cn'
  });
  let url1 = authing.buildAuthorizeUrl();
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === `/api/v2/saml-idp/9072248490655972`);
});

test('拼接 CAS 授权链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'cas',
    appHost: 'https://oidc1.authing.cn'
  });
  let url1 = authing.buildAuthorizeUrl();
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === `/cas-idp/9072248490655972`);
});

test('拼接 CAS 授权链接，带 service 参数', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'cas',
    appHost: 'https://oidc1.authing.cn'
  });
  let url1 = authing.buildAuthorizeUrl({ service: 'https://authing.cn' });
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === `/cas-idp/9072248490655972`);
  t.assert(url1Data.searchParams.get('service') === 'https://authing.cn');
});

test('拼接 OIDC 傻瓜登出链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'oidc',
    appHost: 'https://oidc1.authing.cn'
  });
  let url1 = authing.buildLogoutUrl();
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === `/login/profile/logout`);
});

test('拼接 OIDC 专家登出链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'oidc',
    appHost: 'https://oidc1.authing.cn'
  });
  let url1 = authing.buildLogoutUrl({
    expert: true,
    idToken: '123',
    redirectUri: 'https://authing.cn'
  });
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === `/oidc/session/end`);
  t.assert(url1Data.searchParams.get('id_token_hint') === '123');
  t.assert(
    url1Data.searchParams.get('post_logout_redirect_uri') ===
      'https://authing.cn'
  );
});
test('拼接 OAuth 傻瓜登出链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'oauth',
    appHost: 'https://oidc1.authing.cn'
  });
  let url1 = authing.buildLogoutUrl();
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === `/login/profile/logout`);
});

test('拼接 Saml 傻瓜登出链接', async t => {
  const authing = new AuthenticationClient({
    appId: '9072248490655972',
    secret: '16657960936447935',
    redirectUri: 'https://baidu.com',
    tokenEndPointAuthMethod: 'client_secret_basic',
    protocol: 'saml',
    appHost: 'https://oidc1.authing.cn'
  });
  let url1 = authing.buildLogoutUrl();
  let url1Data = new URL(url1);

  t.assert(url1Data.hostname === 'oidc1.authing.cn');
  t.assert(url1Data.pathname === `/login/profile/logout`);
});

test('兼容老版本，使用 host 初始化', async t => {
  // @ts-ignore
  const authing = new AuthenticationClient({
    appId: process.env.AUTHING_APP_ID,
    host: 'http://localhost:3000'
  });
  const email = generateRandomString() + '@test.com';
  const password = generateRandomString();
  const user = await authing.registerByEmail(email, password);
  t.assert(user);
});

test.skip('注册时添加自定义参数 # customData', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  const email = generateRandomEmail();
  const password = generateRandomString();
  const user = await authing.registerByEmail(email, password, null, {
    customData: {
      source: 'google'
    }
  });
  t.assert(user);
});

test.skip('注册时添加自定义参数 # params', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  const email = generateRandomEmail();
  const password = generateRandomString();
  const user = await authing.registerByEmail(email, password, null, {
    params: [
      {
        key: 'source',
        value: 'google'
      }
    ]
  });
  t.assert(user);
});

test.skip('登录添加自定义 context', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  const user = await authing.loginByEmail('cj@authing.cn', 'cj@authing.cn', {
    context: {
      param: '1'
    }
  });
  console.log(user);
  t.assert(true);
});

test.skip('注册添加自定义 context', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  const email = generateRandomEmail();
  const password = 'passw0rd';
  const user = await authing.registerByEmail(email, password, null, {
    context: {
      fuck: true
    }
  });
  console.log(user);
  t.assert(true);
});

test.skip('绑定社交账号', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  let res = await authing.linkAccount({
    primaryUserToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlZnRXg4VXRGTVB3VGY0aHRmdnpnaEx0U3Ntci1wSm9GcXVzYVJNMjlRZmMifQ.eyJzdWIiOiI2MDY2YjkwNzA5NzhlMjg3M2IyYjQzMTgiLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOm51bGwsInBpY3R1cmUiOiJodHRwczovL2ZpbGVzLmF1dGhpbmcuY28vYXV0aGluZy1jb25zb2xlL2RlZmF1bHQtdXNlci1hdmF0YXIucG5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjpudWxsLCJwcm9maWxlIjpudWxsLCJ1cGRhdGVkX2F0IjoiMjAyMS0wNC0wMlQwNjoyNjoxNi4yMzFaIiwid2Vic2l0ZSI6bnVsbCwiem9uZWluZm8iOm51bGwsImFkZHJlc3MiOnsiY291bnRyeSI6bnVsbCwicG9zdGFsX2NvZGUiOm51bGwsInJlZ2lvbiI6bnVsbCwiZm9ybWF0dGVkIjpudWxsfSwicGhvbmVfbnVtYmVyIjpudWxsLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJlbWFpbCI6InRlc3QxQDEyMy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImRhdGEiOnsidHlwZSI6InVzZXIiLCJ1c2VyUG9vbElkIjoiNjAwYThmMjljZWFkOGZjMDEyN2Y5ZGE2IiwiYXBwSWQiOiI2MDBhOGY0ZTM3NzA4YjM2MzAyNGEzY2EiLCJpZCI6IjYwNjZiOTA3MDk3OGUyODczYjJiNDMxOCIsInVzZXJJZCI6IjYwNjZiOTA3MDk3OGUyODczYjJiNDMxOCIsIl9pZCI6IjYwNjZiOTA3MDk3OGUyODczYjJiNDMxOCIsInBob25lIjpudWxsLCJlbWFpbCI6InRlc3QxQDEyMy5jb20iLCJ1c2VybmFtZSI6bnVsbCwidW5pb25pZCI6bnVsbCwib3BlbmlkIjpudWxsLCJjbGllbnRJZCI6IjYwMGE4ZjI5Y2VhZDhmYzAxMjdmOWRhNiJ9LCJ1c2VycG9vbF9pZCI6IjYwMGE4ZjI5Y2VhZDhmYzAxMjdmOWRhNiIsImF1ZCI6IjYwMGE4ZjRlMzc3MDhiMzYzMDI0YTNjYSIsImV4cCI6MTYxODU1NDQyNSwiaWF0IjoxNjE3MzQ0ODI1LCJpc3MiOiJodHRwczovL2Jhem9va2ExLmF1dGhpbmcuY24vb2lkYyJ9.cGcJqm54tnBayVCqhdO56aeH4BGvU24RVo76rCUt9LnYIdaLrY7cJSNTN6qwgTSHJKlDAk3ZOdWVLFV7X48L8caNxB4R7mLlcnJFixqSe34KYlhuXkCQa75yKa4jU-2RoTgnWzEVpwiINIEHGoU0P2hCJfbsoEvvJUMTT4o5Fkr0CDB7R3XmWCW5VB4jiNQziwLxaL2JecI1YQG0xTIxcya9Lti36TmC3Jx9wOsF2W-jcWRRlMir9efd8ATbz1NdGkx-ghcvot7y0NH746u2spU2if5pgxAsJIspVttrELjTJkHb3WIiuStfORGsvXdQySO3vXmkQDVld9GyvQNFuA',
    secondaryUserToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlZnRXg4VXRGTVB3VGY0aHRmdnpnaEx0U3Ntci1wSm9GcXVzYVJNMjlRZmMifQ.eyJzdWIiOiI2MDY2YjkwZTYxYmYwOTZjNTMxNTE4YzUiLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOiJZZSBMZXhpbiIsInBpY3R1cmUiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjcxMjU0NDU_dj00IiwicHJlZmVycmVkX3VzZXJuYW1lIjpudWxsLCJwcm9maWxlIjoiaHR0cHM6Ly9naXRodWIuY29tL3llbGV4aW4iLCJ1cGRhdGVkX2F0IjoiMjAyMS0wNC0wMlQwNjoyNjoyMi40MjBaIiwid2Vic2l0ZSI6bnVsbCwiem9uZWluZm8iOm51bGwsImFkZHJlc3MiOnsiY291bnRyeSI6bnVsbCwicG9zdGFsX2NvZGUiOm51bGwsInJlZ2lvbiI6bnVsbCwiZm9ybWF0dGVkIjpudWxsfSwicGhvbmVfbnVtYmVyIjpudWxsLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJlbWFpbCI6InllbGV4aW5AaG90bWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImRhdGEiOnsidHlwZSI6InVzZXIiLCJ1c2VyUG9vbElkIjoiNjAwYThmMjljZWFkOGZjMDEyN2Y5ZGE2IiwiYXBwSWQiOiI2MDBhOGY0ZTM3NzA4YjM2MzAyNGEzY2EiLCJpZCI6IjYwNjZiOTBlNjFiZjA5NmM1MzE1MThjNSIsInVzZXJJZCI6IjYwNjZiOTBlNjFiZjA5NmM1MzE1MThjNSIsIl9pZCI6IjYwNjZiOTBlNjFiZjA5NmM1MzE1MThjNSIsInBob25lIjpudWxsLCJlbWFpbCI6InllbGV4aW5AaG90bWFpbC5jb20iLCJ1c2VybmFtZSI6InllbGV4aW4iLCJ1bmlvbmlkIjoiMjcxMjU0NDUiLCJvcGVuaWQiOiIyNzEyNTQ0NSIsImNsaWVudElkIjoiNjAwYThmMjljZWFkOGZjMDEyN2Y5ZGE2In0sInVzZXJwb29sX2lkIjoiNjAwYThmMjljZWFkOGZjMDEyN2Y5ZGE2IiwiYXVkIjoiNjAwYThmNGUzNzcwOGIzNjMwMjRhM2NhIiwiZXhwIjoxNjE4NTU0MzgzLCJpYXQiOjE2MTczNDQ3ODMsImlzcyI6Imh0dHBzOi8vYmF6b29rYTEuYXV0aGluZy5jbi9vaWRjIn0.NaeI0Io-Aap-v8bOlJgZcV2NVT-LZsE-dDo8tcvyV7DQdU3qoFRyDeL7pC_MKXw_UzSgJ1JeGB7re49ioVc0i2NZoPgWnaEUO-J7miNg9ApbpYAaP1QnM870BwQFrENpJ9nd7KdOuzNiUiIc93atV7wF7xcM9gfXbcO8gKzlU8RzlLT9Us2FC7rTF7MiHG_T4dpDwNHhUAqhEIjyv0uQcNxGN5KiL4H-xSLVSO3DG_wEbXh0cNu2xmsjSq1lNvC_tz1oQf9qhQ9uxjbXA339TRCpsQeVlI9W6NCvjf8FTKXJl6taLKQGH58R1H246uDY6PgmoCcRMGKlT26kk3iEeg'
  });
  t.assert(res.code === 200);
});

test.skip('解除社交账号绑定', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  let res = await authing.unLinkAccount({
    primaryUserToken:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlZnRXg4VXRGTVB3VGY0aHRmdnpnaEx0U3Ntci1wSm9GcXVzYVJNMjlRZmMifQ.eyJzdWIiOiI2MDBhOTAwMDQ2MzIyMDkzNGQwODhkNTciLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOiJZZSBMZXhpbiIsInBpY3R1cmUiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjcxMjU0NDU_dj00IiwicHJlZmVycmVkX3VzZXJuYW1lIjpudWxsLCJwcm9maWxlIjoiaHR0cHM6Ly9naXRodWIuY29tL3llbGV4aW4iLCJ1cGRhdGVkX2F0IjoiMjAyMS0wNC0wMlQwNjoxNjowMS43MjZaIiwid2Vic2l0ZSI6bnVsbCwiem9uZWluZm8iOm51bGwsImFkZHJlc3MiOnsiY291bnRyeSI6bnVsbCwicG9zdGFsX2NvZGUiOm51bGwsInJlZ2lvbiI6bnVsbCwiZm9ybWF0dGVkIjpudWxsfSwicGhvbmVfbnVtYmVyIjpudWxsLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJlbWFpbCI6InllbGV4aW5AaG90bWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImRhdGEiOnsidHlwZSI6InVzZXIiLCJ1c2VyUG9vbElkIjoiNjAwYThmMjljZWFkOGZjMDEyN2Y5ZGE2IiwiYXBwSWQiOiI2MDBhOGY0ZTM3NzA4YjM2MzAyNGEzY2EiLCJpZCI6IjYwMGE5MDAwNDYzMjIwOTM0ZDA4OGQ1NyIsInVzZXJJZCI6IjYwMGE5MDAwNDYzMjIwOTM0ZDA4OGQ1NyIsIl9pZCI6IjYwMGE5MDAwNDYzMjIwOTM0ZDA4OGQ1NyIsInBob25lIjpudWxsLCJlbWFpbCI6InllbGV4aW5AaG90bWFpbC5jb20iLCJ1c2VybmFtZSI6InllbGV4aW4iLCJ1bmlvbmlkIjoiMjcxMjU0NDUiLCJvcGVuaWQiOiIyNzEyNTQ0NSIsImNsaWVudElkIjoiNjAwYThmMjljZWFkOGZjMDEyN2Y5ZGE2In0sInVzZXJwb29sX2lkIjoiNjAwYThmMjljZWFkOGZjMDEyN2Y5ZGE2IiwiYXVkIjoiNjAwYThmNGUzNzcwOGIzNjMwMjRhM2NhIiwiZXhwIjoxNjE4NTUzNzYyLCJpYXQiOjE2MTczNDQxNjIsImlzcyI6Imh0dHBzOi8vYmF6b29rYTEuYXV0aGluZy5jbi9vaWRjIn0.cNabkd87WZm_AXx9CMQl8aKH-0kv-hQ2SbAgqYcRy_0eGlM3KNRYnhSgs5B3iDT1y8pTJV0UTFnmlW3kLZ8ji59qfdKlJnxqkiyfkOw6sPe1Y9kRLoPgzDPRUyg6lo8gk6i0e-viK9rGyhOGif7pHjq1BIhNqisqilqOpmt_jAQXsO_x6RzQ294QH0Oqr9Jj8zHvcJBPpmikkjbNtbBNROYB7DOUXL_obUEgeNupHdoWwg3czzEiMGHt2H-KsunvL32K_VdfNaXAOaG8f5gYLuE7Irha2u70OxqnuIyvY-fo9SdBMODOOxbU1MCYhYcvgK05o1sh8zcTq-Xdc4nCZQ',
    provider: 'github'
  });
  t.assert(res.code === 200);
});

test.skip('获取当前用户能访问的应用', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv(),
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDY2YmI5MjYzZjFjYjNjZjhlNDBjYWYiLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOm51bGwsInBpY3R1cmUiOiJkZWZhdWx0LXVzZXItYXZhdGFyLnBuZyIsInByZWZlcnJlZF91c2VybmFtZSI6bnVsbCwicHJvZmlsZSI6bnVsbCwidXBkYXRlZF9hdCI6IjIwMjEtMDQtMDJUMDY6Mzc6MDYuMzI4WiIsIndlYnNpdGUiOm51bGwsInpvbmVpbmZvIjpudWxsLCJhZGRyZXNzIjp7ImNvdW50cnkiOm51bGwsInBvc3RhbF9jb2RlIjpudWxsLCJyZWdpb24iOm51bGwsImZvcm1hdHRlZCI6bnVsbH0sInBob25lX251bWJlciI6bnVsbCwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiZW1haWwiOm51bGwsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZGF0YSI6eyJ0eXBlIjoidXNlciIsInVzZXJQb29sSWQiOiI2MDY1YTJjMzFmM2JhZjgxYTg5ODQwYzciLCJhcHBJZCI6IjYwNjVhMmMzZjMyYjNlYTY3OTIyNDk3ZCIsImlkIjoiNjA2NmJiOTI2M2YxY2IzY2Y4ZTQwY2FmIiwidXNlcklkIjoiNjA2NmJiOTI2M2YxY2IzY2Y4ZTQwY2FmIiwiX2lkIjoiNjA2NmJiOTI2M2YxY2IzY2Y4ZTQwY2FmIiwicGhvbmUiOm51bGwsImVtYWlsIjpudWxsLCJ1c2VybmFtZSI6IkVnS0Q5MkdtZ1BGbyIsInVuaW9uaWQiOm51bGwsIm9wZW5pZCI6bnVsbCwiY2xpZW50SWQiOiI2MDY1YTJjMzFmM2JhZjgxYTg5ODQwYzcifSwidXNlcnBvb2xfaWQiOiI2MDY1YTJjMzFmM2JhZjgxYTg5ODQwYzciLCJhdWQiOiI2MDY1YTJjM2YzMmIzZWE2NzkyMjQ5N2QiLCJleHAiOjE2MTg1NTUwMjYsImlhdCI6MTYxNzM0NTQyNiwiaXNzIjoiaHR0cHM6Ly9kZW1vdXNlcnBvb2wuYXV0aGluZy5sb2NhbC9vaWRjIn0.5DuCvJnR4M4CVjt25LJ2AgPxBk8M3lMaoxeBWXxhhWk'
  });
  const { list, totalCount } = await authing.listApplications();
  t.assert(list);
  t.assert(totalCount !== undefined);
});

test('在线验证 idToken 或 accessToken', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  const email = generateRandomString() + '@test.com';
  const password = generateRandomString();
  await authing.registerByEmail(email, password);
  let user2 = await authing.loginByEmail(email, password);
  let res = await authing.validateToken({ idToken: user2.token });
  t.assert(res.sub === user2.id);
  let res2 = await authing.validateToken({ idToken: '1' });
  t.assert(res2.code === 400);
});

test.skip('使用 Access token 换用户信息，GET + query', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  let userInfo = await authing.getUserInfoByAccessToken(
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJycEdYV0xBdDBVZDBPR3VtelZiM08iLCJzdWIiOiI1ZjcxOTk0NjUyNGVlMTA5OTIyOTQ5NmIiLCJpYXQiOjE2MTk1OTg0MjAsImV4cCI6MTYxOTYwMjAyMCwic2NvcGUiOiJwcm9maWxlIGVtYWlsIHBob25lIG9wZW5pZCBhZGRyZXNzIiwiaXNzIjoiaHR0cHM6Ly9vaWRjMS5hdXRoaW5nLmNuL29pZGMiLCJhdWQiOiI1ZjE3YTUyOWY2NGZiMDA5Yjc5NGEyZmYifQ.Pdfi8cVsGevMRm524kTMJq1v2hqZP2IP3IuFCTZuB9oObti_hpRd4xHGBfUhABnG1qY-oq2By99Ev3i10DhrArAiAh55bqJa7x0TbqihY3HVREHpNH0y5kLUaXKRRJf1KA31EvJm_x3v5qnil52tGgzDa1hqnIBXHSOH09-_co-XwyZS8Ai296tlAtnHBVrEXVJh1WFw81jJ4dQlw1Sgo0XBXkcMBazv-iYq9irspCl52ryDYcD8-ZDdJ1lrOjdmO5DaswGbYNGy75KdwAx4y8X5WqOXEhRe-HZqE7cPsBkNrqt5bUnc5A20mjbcZdR7kvF6bAH7UNqQh3qlI0CFUA',
    {
      method: 'GET',
      tokenPlace: 'query'
    }
  );
  t.truthy(userInfo.sub);
});

test.skip('使用 Access token 换用户信息，GET + body', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  try {
    let userInfo = await authing.getUserInfoByAccessToken(
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJycEdYV0xBdDBVZDBPR3VtelZiM08iLCJzdWIiOiI1ZjcxOTk0NjUyNGVlMTA5OTIyOTQ5NmIiLCJpYXQiOjE2MTk1OTg0MjAsImV4cCI6MTYxOTYwMjAyMCwic2NvcGUiOiJwcm9maWxlIGVtYWlsIHBob25lIG9wZW5pZCBhZGRyZXNzIiwiaXNzIjoiaHR0cHM6Ly9vaWRjMS5hdXRoaW5nLmNuL29pZGMiLCJhdWQiOiI1ZjE3YTUyOWY2NGZiMDA5Yjc5NGEyZmYifQ.Pdfi8cVsGevMRm524kTMJq1v2hqZP2IP3IuFCTZuB9oObti_hpRd4xHGBfUhABnG1qY-oq2By99Ev3i10DhrArAiAh55bqJa7x0TbqihY3HVREHpNH0y5kLUaXKRRJf1KA31EvJm_x3v5qnil52tGgzDa1hqnIBXHSOH09-_co-XwyZS8Ai296tlAtnHBVrEXVJh1WFw81jJ4dQlw1Sgo0XBXkcMBazv-iYq9irspCl52ryDYcD8-ZDdJ1lrOjdmO5DaswGbYNGy75KdwAx4y8X5WqOXEhRe-HZqE7cPsBkNrqt5bUnc5A20mjbcZdR7kvF6bAH7UNqQh3qlI0CFUA',
      {
        method: 'GET',
        tokenPlace: 'body'
      }
    );
    t.truthy(userInfo.sub);
  } catch (_) {
    t.pass();
  }
});

test.skip('使用 Access token 换用户信息，GET + header', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  let userInfo = await authing.getUserInfoByAccessToken(
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJycEdYV0xBdDBVZDBPR3VtelZiM08iLCJzdWIiOiI1ZjcxOTk0NjUyNGVlMTA5OTIyOTQ5NmIiLCJpYXQiOjE2MTk1OTg0MjAsImV4cCI6MTYxOTYwMjAyMCwic2NvcGUiOiJwcm9maWxlIGVtYWlsIHBob25lIG9wZW5pZCBhZGRyZXNzIiwiaXNzIjoiaHR0cHM6Ly9vaWRjMS5hdXRoaW5nLmNuL29pZGMiLCJhdWQiOiI1ZjE3YTUyOWY2NGZiMDA5Yjc5NGEyZmYifQ.Pdfi8cVsGevMRm524kTMJq1v2hqZP2IP3IuFCTZuB9oObti_hpRd4xHGBfUhABnG1qY-oq2By99Ev3i10DhrArAiAh55bqJa7x0TbqihY3HVREHpNH0y5kLUaXKRRJf1KA31EvJm_x3v5qnil52tGgzDa1hqnIBXHSOH09-_co-XwyZS8Ai296tlAtnHBVrEXVJh1WFw81jJ4dQlw1Sgo0XBXkcMBazv-iYq9irspCl52ryDYcD8-ZDdJ1lrOjdmO5DaswGbYNGy75KdwAx4y8X5WqOXEhRe-HZqE7cPsBkNrqt5bUnc5A20mjbcZdR7kvF6bAH7UNqQh3qlI0CFUA',
    {
      method: 'GET',
      tokenPlace: 'header'
    }
  );
  t.truthy(userInfo.sub);
});

test.skip('使用 Access token 换用户信息，POST + header', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  let userInfo = await authing.getUserInfoByAccessToken(
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJycEdYV0xBdDBVZDBPR3VtelZiM08iLCJzdWIiOiI1ZjcxOTk0NjUyNGVlMTA5OTIyOTQ5NmIiLCJpYXQiOjE2MTk1OTg0MjAsImV4cCI6MTYxOTYwMjAyMCwic2NvcGUiOiJwcm9maWxlIGVtYWlsIHBob25lIG9wZW5pZCBhZGRyZXNzIiwiaXNzIjoiaHR0cHM6Ly9vaWRjMS5hdXRoaW5nLmNuL29pZGMiLCJhdWQiOiI1ZjE3YTUyOWY2NGZiMDA5Yjc5NGEyZmYifQ.Pdfi8cVsGevMRm524kTMJq1v2hqZP2IP3IuFCTZuB9oObti_hpRd4xHGBfUhABnG1qY-oq2By99Ev3i10DhrArAiAh55bqJa7x0TbqihY3HVREHpNH0y5kLUaXKRRJf1KA31EvJm_x3v5qnil52tGgzDa1hqnIBXHSOH09-_co-XwyZS8Ai296tlAtnHBVrEXVJh1WFw81jJ4dQlw1Sgo0XBXkcMBazv-iYq9irspCl52ryDYcD8-ZDdJ1lrOjdmO5DaswGbYNGy75KdwAx4y8X5WqOXEhRe-HZqE7cPsBkNrqt5bUnc5A20mjbcZdR7kvF6bAH7UNqQh3qlI0CFUA',
    {
      method: 'POST',
      tokenPlace: 'header'
    }
  );
  t.truthy(userInfo.sub);
});
test.skip('使用 Access token 换用户信息，POST + query', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  let userInfo = await authing.getUserInfoByAccessToken(
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJycEdYV0xBdDBVZDBPR3VtelZiM08iLCJzdWIiOiI1ZjcxOTk0NjUyNGVlMTA5OTIyOTQ5NmIiLCJpYXQiOjE2MTk1OTg0MjAsImV4cCI6MTYxOTYwMjAyMCwic2NvcGUiOiJwcm9maWxlIGVtYWlsIHBob25lIG9wZW5pZCBhZGRyZXNzIiwiaXNzIjoiaHR0cHM6Ly9vaWRjMS5hdXRoaW5nLmNuL29pZGMiLCJhdWQiOiI1ZjE3YTUyOWY2NGZiMDA5Yjc5NGEyZmYifQ.Pdfi8cVsGevMRm524kTMJq1v2hqZP2IP3IuFCTZuB9oObti_hpRd4xHGBfUhABnG1qY-oq2By99Ev3i10DhrArAiAh55bqJa7x0TbqihY3HVREHpNH0y5kLUaXKRRJf1KA31EvJm_x3v5qnil52tGgzDa1hqnIBXHSOH09-_co-XwyZS8Ai296tlAtnHBVrEXVJh1WFw81jJ4dQlw1Sgo0XBXkcMBazv-iYq9irspCl52ryDYcD8-ZDdJ1lrOjdmO5DaswGbYNGy75KdwAx4y8X5WqOXEhRe-HZqE7cPsBkNrqt5bUnc5A20mjbcZdR7kvF6bAH7UNqQh3qlI0CFUA',
    {
      method: 'POST',
      tokenPlace: 'query'
    }
  );
  t.truthy(userInfo.sub);
});

test.skip('使用 Access token 换用户信息，POST + body', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  let userInfo = await authing.getUserInfoByAccessToken(
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJycEdYV0xBdDBVZDBPR3VtelZiM08iLCJzdWIiOiI1ZjcxOTk0NjUyNGVlMTA5OTIyOTQ5NmIiLCJpYXQiOjE2MTk1OTg0MjAsImV4cCI6MTYxOTYwMjAyMCwic2NvcGUiOiJwcm9maWxlIGVtYWlsIHBob25lIG9wZW5pZCBhZGRyZXNzIiwiaXNzIjoiaHR0cHM6Ly9vaWRjMS5hdXRoaW5nLmNuL29pZGMiLCJhdWQiOiI1ZjE3YTUyOWY2NGZiMDA5Yjc5NGEyZmYifQ.Pdfi8cVsGevMRm524kTMJq1v2hqZP2IP3IuFCTZuB9oObti_hpRd4xHGBfUhABnG1qY-oq2By99Ev3i10DhrArAiAh55bqJa7x0TbqihY3HVREHpNH0y5kLUaXKRRJf1KA31EvJm_x3v5qnil52tGgzDa1hqnIBXHSOH09-_co-XwyZS8Ai296tlAtnHBVrEXVJh1WFw81jJ4dQlw1Sgo0XBXkcMBazv-iYq9irspCl52ryDYcD8-ZDdJ1lrOjdmO5DaswGbYNGy75KdwAx4y8X5WqOXEhRe-HZqE7cPsBkNrqt5bUnc5A20mjbcZdR7kvF6bAH7UNqQh3qlI0CFUA',
    {
      method: 'POST',
      tokenPlace: 'body'
    }
  );
  t.truthy(userInfo.sub);
});

test.skip('CAS 1.0 验证 ticket，validateTicketV1', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  const ticket = 'ST-8125e8b0-a6e3-4253-9890-c6b403ed4736';
  const service = 'https://baidu.com';
  const result = await authing.validateTicketV1(ticket, service);
  t.assert(result.valid === true);
});

test.skip('CAS 2.0 验证 ticket，validateTicketV2，XML 返回', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  const ticket = 'ST-e6556a88-58d9-4960-bf3a-f679fb6b54c5';
  const service = 'https://baidu.com';
  const result = await authing.validateTicketV2(ticket, service, 'XML');
  t.assert(typeof result === 'string');
  t.assert((result as string)[0] === '<');
});

test.skip('CAS 2.0 验证 ticket，validateTicketV2，JSON 返回', async t => {
  const authing = new AuthenticationClient({
    ...getOptionsFromEnv()
  });
  const ticket = 'ST-b6259050-392d-4096-a589-fb8c0a4e2c8d';
  const service = 'https://baidu.com';
  const result = await authing.validateTicketV2(ticket, service, 'JSON');
  t.truthy(
    (result as Cas20ValidationSuccessResult).serviceResponse
      .authenticationSuccess.attributes.email
  );
});

// test('解密 OIDC JWE（ECDH-ES 加密算法）', async (t) => {
//   const authing = new AuthenticationClient({
//     ...getAuthenticationClientOptionsFromEnv(),
//   });
//   const token = `eyJhbGciOiJFQ0RILUVTIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImN0eSI6IkpXVCIsImtpZCI6IlZvRHk4ck54eDFGTl94WGxNWVVmaFVBWG82SjVoVEkzY2dwVVE4cUVCNXMiLCJlcGsiOnsia3R5IjoiRUMiLCJjcnYiOiJQLTI1NiIsIngiOiJuRFE5ZS1yVlA2N19xRWp4bkpBYmZESGtQRkwzczRpRkdicXJCejRDVWF3IiwieSI6IlBRLXhmeUMzd1dvRW5LX215Z01YcUVoalNiZ1FWUVgzV2Yzc3ctQ2RmTE0ifX0..LeosNcRDr7YuTXWMLX8vwQ.olwbXQIofYt5mHNmPjBLIJFwbcWBpwS9LoxmqZhseTIUWbKxA_0FFxEjNpgagune7Oe59f-pqajtmIOzZ6UzaNebsCrdu1k2V9xNN4jUkqAR-teM63Cd_RA16bKfbro_ITIKa5Rvq6V_P9fhgDT0NWxxW_c0r6iSHA5fmo4y2h5yYM3ojRQfRPnYeihOIi8wkR7Cr9QO21oPq5s2f3jq3baDbAIQPcVwi28zBMLUtqzyc-5U79VYyYdUSpX7l92-0kYkhgBwlk8kgPEV28B_jml4eKYL4mmRULYXdv2Pm6f6RFjAehAjVwnLOyc2zDpLEt5YTY6CJ1ednEf4zBXUuxRZz4ivX6a3ZwalyaWQsF4mnVJ3fArulVXTKNZ3vgFQHddTsZNijpp4ecH_XEDhAuJlqOMh09E7H79XoxraQTFDmC0Fuql89YAV17Inam89Hf1OH1b4j_1XGMmboJkucFPzDKpp8FXcFTeMoohVoDFBsmaEjTtPunL7-OHGS4LslGpn93N1fvaRDgzTfTDqUqUGpY4esl6AAJzPQt-KKecD3fhYDxn8zkq6uFYklIAIvH-Eqb7aOYbQynwNjbi9B6WH-2Jt-miq0XStnBXNYwSiE5z57folYRqcow2DEFUIcIyeZ4ibXruEloejYfjpdbEMFj3HwuRIk-1nEn5bJbxgxIsRbbFv8Uop-1GBkfiilnjHMjve5CDG1tIgHZtQIfE3r4ifbz8UcsW7DqbXQOPVJ3R-rBfkcmF3HjpAPlIxBSXK8_xPR-2DZAEjSd2mtPWsX00TKNFB-4rWrveroxok6HWKw0-U75m6OLSXi6K99b9su_njmD9fZZ8BvoWbKbU36pwdnqe01XbKuelW6JjBpyIxxAJaMRIw5zfT2fS4W0JEUnkh6HLXQKWcb-aasit66uxz9w0Iduj53sYwH-s3WOSGGID75sB25mj1kiLHt0yX5J-GWVH4hGywJSdxaA0x7BMML9f1HEqDOjJgu-U.cRbB9-I52GpIIfKwRh2yog`;
//   const res = await authing.decryptTokenLocally(token);
//   t.assert(res.sub === '60f010c7e52e8174658da62c');
// });

// test('解密 OIDC JWE（RSA-OAEP 加密算法）', async (t) => {
//   const authing = new AuthenticationClient({
//     ...getAuthenticationClientOptionsFromEnv(),
//   });
//   const token = `eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhDQkMtSFMyNTYiLCJjdHkiOiJKV1QiLCJraWQiOiItMU9mTWpJRVNKdlF5RWNPc2Fwbi1tMkl3dnU5RDZCM003Nl91VTlfM3dBIn0.LUv1JSotW3RAIjfG4aRPz2iIN2ipHvqRjuF1VgkAOuhVl-L3_LlKrO6xA6sTgkMUJfSAkMhq-IpIeByYawGYXWrAyUxWZpEBiPOeVB2ziPU5PQmflFn4sZCSrjoh4HUXrtIdE4_xjLXIPE9cMvhAGnCU_jPDuLFmEzSWvB4oSoaqJ-Vxnn5OMbW-dBLoMkguU_3Wiee7BJTusCYCzmrZvxpiXhpfeN7U9Xir3jofa_x7pEnECSRQQkx_p8Uu5kRl0SZ_YvsDRkH6S2DTUNv9PviaJdjnMWidawd0vxkl9xY76zo5XY3VjV974mZv8JjmfxTcYz7hU52_WhymqovToQ.0JWHFsKIK06PdiaSPBVBEw.05CxpF23HmMpoT7s-mUSTUxeICA9Q10HR8lsd0Vv10EVf_f1crPfiELCVemApNCw1qTMnPPQawEQ1P45q54K32_r6KOfyv_LOG1l83vlq_fjcj5gAjrnaXh6i4OJzrTUYxZGOZw_GoQvHmH785QDkTrP07IaSVr3RUWAHiOaUeXvEbUpP5F0XA7jI9eTcUNr9ari4ZvSJB8hD45TTERPxUOHeIqI18Oh_bsIKAhpRXFOVoVyYPAOn1Az5_CZ--RdqY-eGMJbUMFBUOI12xmyWaHLQetH9XELITqwHw-nQgL-XLE6CWWc8343seroDw2xQfVX1FXEvnxLRI5KIcSJEww8mEjzuMKWHYTDozQ8BI4gZKeh8y3snqDunjof2y_VaI_tWQ1NDrQYAVjDFt85TtsiXq3EAsNur-A8PfQKO57yfR0dOPFixFBnCeB68vsi_MzmvOv2CPqEqHid26ecljhtvjvtNnlroueBIzPjXPVpUvpBlnGRxU_YvTwa5Trh3aZQVb54CabHMPB_2aBWjz7FAb1BC6_l18bSmo4Sj8w5IePQOJ5VQbhle3qjlKz_NeiEKRJt3HOefnQWPEEm6wnI7vlN-wj5g8PUrcrJJUAGxD27KguNg-_4xILZSnXGo_NyZcvdyeNgzeFskq6jmbYvH-qX--uXjw705ZolxIVdprHoUABfBVT3HG3qXgUvi1qPrzVv2B0NDR6jU4k3Cg_fucX4t3k_9UKDO98UlET8FgJeCBeDViNQFv6j3FhCvqL34cB93F9M6niQBXnu3ZShNNmak_5Y_zp7JFPU20b4eg7MdrsCaeTHOOTmJOUUiBLeV33mZMMqlJNMg-rRNMubfne2KuMueDyb1tAtcpEJFVl-x2zOOTi5g6aNTgY-tNdnfYWunsnoDWKeX0OktSH5wqjd0uRM1F2b3zdKXdES_fV44kjpzuZScQr4720aho33_LZC6rmz4pr_5d7t5l538hM4ZVmIdH5jeYylmlk.SyY2NcBa2PFhiCsZUYNDVA`;
//   const res = await authing.decryptTokenLocally(token);
//   t.assert(res.sub === '60f010c7e52e8174658da62c');
// });

// test('验证 OIDC JWS（HS256 签名算法）', async (t) => {
//   const authing = new AuthenticationClient({
//     ...getAuthenticationClientOptionsFromEnv(),
//   });
//   const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MGYwMTBjN2U1MmU4MTc0NjU4ZGE2MmMiLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOm51bGwsInBpY3R1cmUiOiJodHRwczovL2ZpbGVzLmF1dGhpbmcuY28vYXV0aGluZy1jb25zb2xlL2RlZmF1bHQtdXNlci1hdmF0YXIucG5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjpudWxsLCJwcm9maWxlIjpudWxsLCJ1cGRhdGVkX2F0IjoiMjAyMS0wNy0xNVQxMDo0MToxMS44ODZaIiwid2Vic2l0ZSI6bnVsbCwiem9uZWluZm8iOm51bGwsImF0X2hhc2giOiJiaXNVTW1hQ1pVUU5IUFR3VEU4REtBIiwiYXVkIjoiNjBlZWIwYzVhZDkzMzQ0ZDk4ODMxZGYxIiwiZXhwIjoxNjI3ODk1Mzc3LCJpYXQiOjE2MjY2ODU3NzcsImlzcyI6Imh0dHA6Ly9tYXN0ZXIueHh4LmxvY2FsaG9zdDozMDAwL29pZGMifQ.dzQpvV4FiW_Hti4d0Bhc8IzDZ5TFe6y_sF3sKL4ddeg`;
//   const res = await authing.validateTokenLocally(token);
//   t.assert(res.sub === '60f010c7e52e8174658da62c');
// });

// test('验证 OIDC JWS（RS256 签名算法）', async (t) => {
//   const authing = new AuthenticationClient({
//     ...getAuthenticationClientOptionsFromEnv(),
//   });
//   const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im1aVEc5cFNucnFTdFI5NkNLWnZKZVkzS0JwTmZ1dEFoTnVKNUwwTXduSEEifQ.eyJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOm51bGwsInBpY3R1cmUiOiJodHRwczovL2ZpbGVzLmF1dGhpbmcuY28vYXV0aGluZy1jb25zb2xlL2RlZmF1bHQtdXNlci1hdmF0YXIucG5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjpudWxsLCJwcm9maWxlIjpudWxsLCJ1cGRhdGVkX2F0IjoiMjAyMS0wNy0xNVQxMDo0MToxMS44ODZaIiwid2Vic2l0ZSI6bnVsbCwiem9uZWluZm8iOm51bGwsInN1YiI6IjYwZjAxMGM3ZTUyZTgxNzQ2NThkYTYyYyIsImF0X2hhc2giOiJPRDdIbHcwQ0E5RHBGdHJjTW9wVnhnIiwiYXVkIjoiNjBlZWIwYzVhZDkzMzQ0ZDk4ODMxZGYxIiwiZXhwIjoxNjI3ODc3MzgyLCJpYXQiOjE2MjY2Njc3ODIsImlzcyI6Imh0dHA6Ly9tYXN0ZXIueHh4LmxvY2FsaG9zdDozMDAwL29pZGMifQ.F-9AApGhv8NbggpDNnRi-30cemk2Cq7njikfcM7nAirSs1iuVJhvjds-nZgpUutrNxa3yWOIIzfC8P_G2QafnzRE3jEB6VisrfoTmwmNnAH3cSzV3XaCukpnoMxjW5sfHzANjls-gTUzRpXBoUMdsDIBBJ0iDGI1GrQIjxI1qJtkqkdwqdsR8ooe8c0YUp5MCpasfwVANe1irloVwNxP967AoK2sJs33BexVm_k0VzhT226tezL-iANcpED52QBZU_PuCb5HwVtJ-RGKnO39S5nuo568ctrxcbp6oCObTrq7xh4xeySxlr5x3IK_EaRefFyCXN_PcNomPnO3PTevcA`;
//   const res = await authing.validateTokenLocally(token);
//   t.assert(res.sub === '60f010c7e52e8174658da62c');
// });
