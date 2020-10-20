import { ManagementClient } from './ManagementClient';
import {
  generateRandomEmail,
  generateRandomString,
  getOptionsFromEnv
} from '../testing-helper';
import test from 'ava';
import { WhitelistType } from '../../types/graphql.v2';
import _ from 'lodash';
import { AuthenticationClient } from '../authentication/AuthenticationClient';

const managementClient = new ManagementClient(getOptionsFromEnv());

test('添加白名单', async t => {
  const email = generateRandomEmail();
  await managementClient.whitelist.enable(WhitelistType.Email);
  await managementClient.whitelist.add(WhitelistType.Email, [email]);
  const authing = new AuthenticationClient(getOptionsFromEnv());
  let failed = false;
  try {
    await authing.registerByEmail(
      generateRandomEmail(),
      generateRandomString()
    );
  } catch (error) {
    failed = true;
  }

  await authing.registerByEmail(email, generateRandomEmail());

  // 管理员
  await managementClient.users.create({ email: generateRandomEmail() });
  t.assert(failed);
});

test('获取白名单', async t => {
  const email = generateRandomEmail();
  await managementClient.whitelist.add(WhitelistType.Email, [email]);
  const list = await managementClient.whitelist.list(WhitelistType.Email);
  t.assert(
    _.some(list, item => {
      return item.value === email.toLowerCase();
    })
  );
});

test('关闭白名单', async t => {
  await managementClient.whitelist.disable(WhitelistType.Phone);
  const userpool = await managementClient.userpool.detail();
  t.assert(userpool.whitelist.phoneEnabled === false);
});
