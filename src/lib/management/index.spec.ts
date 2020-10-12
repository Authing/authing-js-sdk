import { ManagementClient } from './ManagementClient';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import { UdfDataType, UdfTargetType } from '../../types/graphql.v2';
import _ from 'lodash';

const management = new ManagementClient(getOptionsFromEnv());

test('添加自定义字段', async t => {
  const key = generateRandomString(10);
  const data = await management.udf.create(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    generateRandomString(5)
  );
  t.assert(
    _.some(data, item => {
      return item.key === key;
    })
  );
});

test('删除自定义字段', async t => {
  const key = generateRandomString(10);
  await management.udf.create(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    generateRandomString(5)
  );
  await management.udf.remove(UdfTargetType.User, key);
  const data = await management.udf.list(UdfTargetType.User);
  t.assert(
    _.every(data, item => {
      return item.key !== key;
    })
  );
});
