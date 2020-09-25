import { ManagementClient } from './index';
import {
  generateRandomPhone,
  generateRandomString,
  getOptionsFromEnv
} from '../testing-helper';
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

test('修改用户资料', async t => {
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456!'
  });

  const nickname = generateRandomString(10);
  const updated = await management.users.update(user.id, {
    nickname
  });
  t.assert(updated.nickname === nickname);
});

test('修改用户资料 # 邮箱', async t => {
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456!'
  });

  const email = generateRandomString() + '@test.com';
  const updated = await management.users.update(user.id, {
    email
  });
  t.assert(updated.email === email.toLowerCase());
});

test('修改用户资料 # 手机号', async t => {
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456!'
  });

  const phone = generateRandomPhone();
  const updated = await management.users.update(user.id, {
    phone
  });
  t.assert(updated.phone === phone);
});

test('获取用户角色列表', async t => {
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456!'
  });

  const role = await management.acl.createRole(generateRandomString());
  await management.acl.assignRole(role.code, { userIds: [user.id] });

  const roles = await management.users.getRoles(user.id);
  t.assert(roles.totalCount === 1);
  t.assert(roles.list[0].code === role.code);
});

test('删除用户', async t => {
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456!'
  });
  await management.users.delete(user.id);
  const user2 = await management.users.get(user.id);
  t.assert(user2 === null);
});
