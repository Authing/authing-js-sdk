import { ManagementClient } from './ManagementClient';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import _ from 'lodash';

const management = new ManagementClient(getOptionsFromEnv());

test('获取环境变量列表', async t => {
  const data = await management.userpool.listEnv();
  t.assert(data);
});

test('添加环境变量', async t => {
  const key = generateRandomString();
  await management.userpool.addEnv(key, generateRandomString());
  const list = await management.userpool.listEnv();
  t.assert(_.some(list, item => item.key === key));
});

test('删除环境变量', async t => {
  const key = generateRandomString();
  await management.userpool.addEnv(key, generateRandomString());
  await management.userpool.removeEnv(key);
  const list = await management.userpool.listEnv();
  t.assert(!_.some(list, item => item.key === key));
});
