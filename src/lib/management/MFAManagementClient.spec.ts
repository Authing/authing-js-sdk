import { ManagementClient } from './ManagementClient';
import { getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import { AuthenticationClient } from '../..';

const managementClient = new ManagementClient(getOptionsFromEnv());
const authenticationClient = new AuthenticationClient(getOptionsFromEnv());

test('管理员导入已有 totp secret 到 Authing', async t => {
  let username = Math.random()
    .toString(26)
    .slice(2);
  let pwd = '123456';
  const user = await managementClient.users.create({ username, password: pwd });
  let result = await managementClient.mfa.importTotp(
    user.id,
    '123456',
    '654321'
  );
  t.assert(result.userId === user.id);
  t.assert(result.recoveryCode === '654321');
  t.assert(result.secret === '123456');
  try {
    await authenticationClient.loginByUsername(username, pwd);
    t.fail('未开启 totp');
  } catch (err) {
    t.assert(err.code === 1635);
    t.assert(err.data.mfaToken.length);
  }
});
