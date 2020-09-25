import { ManagementClient } from './index';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';

const management = new ManagementClient(getOptionsFromEnv());

test('批量查询用户', async t => {
  const list = [];
  for (let i = 0; i <= 10; i++) {
    const user = await management.users.create({
      username: generateRandomString(10),
      password: '123456!'
    });
    list.push(user.id);
  }
  const data = await management.users.batch(list);
  t.assert(data.length === list.length);
});
