import { ManagementClient } from './ManagementClient';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import { UdfDataType, UdfTargetType } from '../../types/graphql.v2';
import _ from 'lodash';

const managementClient = new ManagementClient(getOptionsFromEnv());

test('添加自定义字段', async t => {
  const key = generateRandomString(10);
  const data = await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    generateRandomString(5)
  );
  t.assert(data.key === key);
});

test('删除自定义字段', async t => {
  const key = generateRandomString(10);
  await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    generateRandomString(5)
  );
  await managementClient.udf.remove(UdfTargetType.User, key);
  const data = await managementClient.udf.list(UdfTargetType.User);
  t.assert(
    _.every(data, item => {
      return item.key !== key;
    })
  );
});
