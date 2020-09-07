import { ManagementClient } from './index';
import { getOptionsFromEnv } from '../testing-helper';
import test from 'ava';

const management = new ManagementClient(getOptionsFromEnv());

test('获取环境变量列表', async t => {
  const data = await management.userpool.env();
  t.assert(data);
});
