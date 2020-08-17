import { AuthenticationClient } from './index';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';

// @ts-ignore
global.localStorage = {
  _data: {},
  setItem: function(id: string, val: any) {
    return (this._data[id] = String(val));
  },
  getItem: function(id: string) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },
  removeItem: function(id: string) {
    return delete this._data[id];
  },
  clear: function() {
    return (this._data = {});
  }
};

const authing = new AuthenticationClient(getOptionsFromEnv());

test('邮箱注册', async t => {
  const email = generateRandomString() + '@test.com';
  const password = generateRandomString();
  const user = await authing.registerByEmail(email, password);
  t.assert(user);
});

test('邮箱注册 # 设置 profile', async t => {
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
  const username = generateRandomString(12);
  const password = generateRandomString();
  const user = await authing.registerByUsername(username, password);
  t.assert(user);
});

test('用户名注册 # 用户名长度不能超过 20', async t => {
  const username = generateRandomString(21);
  const password = generateRandomString();
  let failed = false;
  try {
    await authing.registerByUsername(username, password);
  } catch (error) {
    failed = true;
  }
  t.assert(failed);
});

test.skip('发送短信验证码', async t => {
  const phone = '17670416754';
  const { code } = await authing.sendSmsCode(phone);
  t.assert(code === 200);
});
