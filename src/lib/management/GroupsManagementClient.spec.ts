import { ManagementClient } from './ManagementClient';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import { ResourceType } from '../../types/graphql.v2';

const managementClient = new ManagementClient(getOptionsFromEnv());

test('create group', async t => {
  const code = generateRandomString(5);
  const group = await managementClient.groups.create(
    code,
    generateRandomString(10)
  );
  t.assert(group);
  t.assert(group.code === code);
});

test('update group', async t => {
  const code = generateRandomString(5);
  let group = await managementClient.groups.create(
    code,
    generateRandomString(10)
  );
  const name = generateRandomString(5);
  group = await managementClient.groups.update(code, { name });
  t.assert(group.name === name);
});

test('update group # new code', async t => {
  const code = generateRandomString(5);
  let group = await managementClient.groups.create(
    code,
    generateRandomString(10)
  );
  const newCode = generateRandomString(5);
  group = await managementClient.groups.update(code, { newCode });
  t.assert(group.code === newCode);

  const groupNotExist = await managementClient.groups.detail(code);
  t.assert(!groupNotExist);
});

test('list', async t => {
  const code = generateRandomString(5);
  await managementClient.groups.create(code, generateRandomString(10));
  const { totalCount, list } = await managementClient.groups.list();
  t.assert(totalCount >= 1);
  t.assert(list.length >= 1);
});

test('detail', async t => {
  const code = generateRandomString(5);
  await managementClient.groups.create(code, generateRandomString(10));
  const group = await managementClient.groups.detail(code);
  t.assert(group.code === code);
});

test('delete', async t => {
  const code = generateRandomString(5);
  await managementClient.groups.create(code, generateRandomString(10));
  await managementClient.groups.delete(code);
  const group = await managementClient.groups.detail(code);
  t.assert(!group);
});

test('delete group not exists', async t => {
  let failed = false;
  try {
    await managementClient.groups.delete(generateRandomString());
  } catch {
    failed = true;
  }
  t.assert(failed);
});

test('deleteMany', async t => {
  const code = generateRandomString(5);
  await managementClient.groups.create(code, generateRandomString(10));
  await managementClient.groups.deleteMany([code]);
  const group = await managementClient.groups.detail(code);
  t.assert(!group);
});

test('addUsers', async t => {
  const user = await managementClient.users.create({
    username: generateRandomString()
  });
  const code = generateRandomString(5);
  await managementClient.groups.create(code, generateRandomString(10));
  const { code: statusCode } = await managementClient.groups.addUsers(code, [
    user.id
  ]);
  t.assert(statusCode === 200);
  const { list, totalCount } = await managementClient.groups.listUsers(code);
  t.assert(totalCount === 1);
  t.assert(list.length === 1);
});

test('addUsers # not exists', async t => {
  const code = generateRandomString(5);
  await managementClient.groups.create(code, generateRandomString(10));
  let failed = false;
  try {
    await managementClient.groups.addUsers(code, [generateRandomString()]);
  } catch {
    failed = true;
  }
  t.assert(failed);
});

test('removeUsers', async t => {
  const user = await managementClient.users.create({
    username: generateRandomString()
  });
  const code = generateRandomString(5);
  await managementClient.groups.create(code, generateRandomString(10));
  await managementClient.groups.addUsers(code, [user.id]);
  await managementClient.groups.removeUsers(code, [user.id]);
  const { list, totalCount } = await managementClient.groups.listUsers(code);
  t.assert(totalCount === 0);
  t.assert(list.length === 0);
});

test.skip('listAuthorizedResources', async t => {
  const data = await managementClient.groups.listAuthorizedResources(
    'group',
    '6018bab016c246d458ef0ad2',
    {
      resourceType: ResourceType.Menu
    }
  );
  console.log(JSON.stringify(data, null, 4));
  t.assert(data);
})
