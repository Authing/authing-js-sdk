import { ManagementClient } from './ManagementClient';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import _ from 'lodash';

const management = new ManagementClient(getOptionsFromEnv());

test('create', async t => {
  const code = generateRandomString(5);
  const role = await management.roles.create(code);
  t.assert(role);
  t.assert(role.code === code);
});

test('update', async t => {
  const code = generateRandomString(5);
  let role = await management.roles.create(code);
  const description = generateRandomString();
  role = await management.roles.update(code, { description });
  t.assert(role.description === description);
});

test('update # node code', async t => {
  const code = generateRandomString(5);
  let role = await management.roles.create(code);
  const description = generateRandomString();
  const newCode = generateRandomString();
  role = await management.roles.update(code, { description, newCode });
  t.assert(role.description === description);
  t.assert(role.code === newCode);
});

test('detail', async t => {
  const code = generateRandomString(5);
  let role = await management.roles.create(code);
  role = await management.roles.detail(code);
  t.assert(role);
  t.assert(role.code === code);
});

test('delete', async t => {
  const code = generateRandomString(5);
  let role = await management.roles.create(code);
  await management.roles.delete(code);
  role = await management.roles.detail(code);
  t.assert(!role);
});

test('deleteMany', async t => {
  const code = generateRandomString(5);
  let role = await management.roles.create(code);
  await management.roles.deleteMany([code]);
  role = await management.roles.detail(code);
  t.assert(!role);
});
