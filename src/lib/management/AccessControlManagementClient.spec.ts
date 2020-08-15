import { ManagementClient } from './index';
import { generateRandomString, getOptionsFromEnv } from './../utils/helper';
import test from 'ava';

const management = new ManagementClient(getOptionsFromEnv());
const acl = management.acl;

test('创建分组', async t => {
  const group = await acl.createGroup(generateRandomString(), '管理员');
  t.assert(group);
  t.assert(group._id);
});

test('平级 role + user + resource', async t => {
  const roleCode = generateRandomString();
  const role = await acl.addRole(roleCode);
  t.assert(role);

  const resouceCode = generateRandomString();
  const resouce = await acl.addResource(resouceCode);
  t.assert(resouce);

  await acl.allow(roleCode, 'open', resouceCode);
  await acl.deny(roleCode, 'close', resouceCode);
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456'
  });
  const userId = user._id;
  await acl.assignRole(roleCode, [user._id]);

  const allowed = await acl.isAllowed(userId, 'open', resouceCode);
  t.assert(allowed);

  const allowed2 = await acl.isAllowed(userId, 'xxxx', resouceCode);
  t.assert(allowed2 === false);

  const allowed3 = await acl.isAllowed(userId, 'close', resouceCode);
  t.assert(allowed3 === false);
});

test('有层级的 role + user + resource', async t => {
  // 1. 创建两个角色, employee 是 developer 的父角色
  const employee = generateRandomString();
  const developer = generateRandomString();
  const role1 = (await acl.addRole(employee)).createRole;
  const role2 = (await acl.addRole(developer, employee)).createRole;
  t.assert(role1);
  t.assert(role2);
  t.assert(role2.parent);
  t.assert(role2.parent.code === employee);

  // 创建用户，授予 developer 角色
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456'
  });
  const userId = user._id;
  await acl.assignRole(developer, [userId]);

  // 2. 创建一个资源
  const door = generateRandomString();
  const resouce = await acl.addResource(door);
  t.assert(resouce);

  // 3. 将这个资源授权给 employee
  const action = 'open';
  await acl.allow(employee, action, door);

  // 4. 判断 user 是否具备 open door 的权限
  const allowed = await acl.isAllowed(userId, action, door);
  t.assert(allowed);

  const allowed2 = await acl.isAllowed(userId, 'xxxx', door);
  t.assert(allowed2 === false);
});
