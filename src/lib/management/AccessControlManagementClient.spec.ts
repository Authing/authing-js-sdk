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
});
