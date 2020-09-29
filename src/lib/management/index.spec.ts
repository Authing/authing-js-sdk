import { ManagementClient } from './index';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import { UdfDataType, UdfTargetType } from '../../types/graphql.v2';
import _ from 'lodash';

const management = new ManagementClient(getOptionsFromEnv());

test('添加自定义字段', async t => {
  const key = generateRandomString(10);
  const data = await management.addUdf(
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
  await management.addUdf(
    UdfTargetType.User,
    key,
    UdfDataType.String,
    generateRandomString(5)
  );
  await management.removeUdf(UdfTargetType.User, key);
  const data = await management.udf(UdfTargetType.User);
  t.assert(
    _.every(data, item => {
      return item.key !== key;
    })
  );
});
