import { AuthenticationClient } from './index';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';

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
