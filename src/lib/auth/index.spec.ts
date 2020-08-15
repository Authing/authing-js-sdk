import { AuthenticationClient } from './index';
import { generateRandomString, getOptionsFromEnv } from './../utils/helper';
import test from 'ava';

const authing = new AuthenticationClient(getOptionsFromEnv());

test('邮箱注册', async t => {
  const email = generateRandomString() + '@test.com';
  const password = generateRandomString();
  const user = await authing.registerByEmail(email, password);
  t.assert(user);
});
