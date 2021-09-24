import { ManagementClient } from './ManagementClient';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import _ from 'lodash';
import { ResourceType } from '../../types/graphql.v2';

const managementClient = new ManagementClient(getOptionsFromEnv());

test('create', async t => {
  const code = generateRandomString(5);
  const role = await managementClient.roles.create(code, '测试');
  t.assert(role);
  t.assert(role.code === code);
});

test('update', async t => {
  const code = generateRandomString(5);
  let role = await managementClient.roles.create(code);
  const description = generateRandomString();
  role = await managementClient.roles.update(code, { description });
  t.assert(role.description === description);
});

test('update # node code', async t => {
  const code = generateRandomString(5);
  let role = await managementClient.roles.create(code);
  const description = generateRandomString();
  const newCode = generateRandomString();
  role = await managementClient.roles.update(code, { description, newCode });
  t.assert(role.description === description);
  t.assert(role.code === newCode);
});

test('detail', async t => {
  const code = generateRandomString(5);
  let role = await managementClient.roles.create(code);
  role = await managementClient.roles.detail(code);
  t.assert(role);
  t.assert(role.code === code);
});

test('delete', async t => {
  const code = generateRandomString(5);
  let role = await managementClient.roles.create(code, '');
  await managementClient.roles.delete(code);
  role = await managementClient.roles.detail(code);
  t.assert(!role);
});

test('deleteMany', async t => {
  const code = generateRandomString(5);
  let role = await managementClient.roles.create(code);
  await managementClient.roles.deleteMany([code]);
  role = await managementClient.roles.detail(code);
  t.assert(!role);
});

test('findUsers', async t => {
  const code = "teacher";
  const options = {
    namespace: '611c7ca421dbe5e3505aa609',
    search: '',
    page: 1,
    limit: 10,
  };
  let role = await managementClient.roles.findUsers(code, options);
  t.assert(Array.isArray(role.list));
});

test.skip('listAuthorizedResources', async t => {
  const data = await managementClient.roles.listAuthorizedResources(
    'test',
    '6018bab016c246d458ef0ad2',
    {
      resourceType: ResourceType.Data
    }
  );
  console.log(JSON.stringify(data, null, 4));
  t.assert(data);
})
