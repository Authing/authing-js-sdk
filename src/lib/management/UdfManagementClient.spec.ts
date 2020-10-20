import { ManagementClient } from './ManagementClient';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import { UdfDataType, UdfTargetType } from '../../types/graphql.v2';
import _ from 'lodash';

const managementClient = new ManagementClient(getOptionsFromEnv());

test('添加自定义字段', async t => {
  const key = generateRandomString();
  const udf = await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    '学校'
  );
  t.assert(udf.targetType === UdfTargetType.User);
  t.assert(udf.key === key);
});

test('获取自定义字段列表', async t => {
  const key = generateRandomString();
  const udf = await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    '学校'
  );
  const list = await managementClient.udf.list(UdfTargetType.User);
  t.assert(
    _.some(list, item => {
      return item.key === udf.key;
    })
  );
});

test('删除自定义字段', async t => {
  const key = generateRandomString();
  const udf = await managementClient.udf.set(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    '学校'
  );
  await managementClient.udf.remove(UdfTargetType.User, key);
  const list = await managementClient.udf.list(UdfTargetType.User);
  t.assert(
    !_.some(list, item => {
      return item.key === udf.key;
    })
  );
});
