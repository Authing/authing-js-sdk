import { ManagementClient } from './ManagementClient';
import { getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import {
  PolicyAssignmentTargetType,
  ResourceType
} from '../../types/graphql.v2';

const managementClient = new ManagementClient(getOptionsFromEnv());

test('listAuthorizedResources', async t => {
  const data = await managementClient.acl.listAuthorizedResources(
    PolicyAssignmentTargetType.Role,
    'test',
    '6018bab016c246d458ef0ad2',
    {
      resourceType: ResourceType.Data
    }
  );
  console.log(data);
  t.assert(data);
});

test('资源', async t => {
  const res = await managementClient.acl.getResources();
  t.assert(Array.isArray(res.list));
  t.assert(Reflect.has(res, 'totalCount'));
});

test('创建资源', async t => {
  let code = Math.random()
    .toString(26)
    .slice(2);
  const res = await managementClient.acl.createResource({
    code: code,
    type: ResourceType.Data,
    description: 'chair',
    actions: [
      {
        name: 'book:write',
        description: '图书写入操作'
      }
    ],
    namespace: '600a8f4e37708b363024a3ca'
  });
  t.assert(Reflect.has(res, 'id'));
});

test('修改资源', async t => {
  let code = Math.random()
    .toString(26)
    .slice(2);
  // 先创建一个资源
  const res = await managementClient.acl.createResource({
    code: code,
    type: ResourceType.Data,
    description: 'chair',
    actions: [
      {
        name: 'book:write',
        description: '图书写入操作'
      }
    ],
    namespace: '600a8f4e37708b363024a3ca'
  });
  t.assert(Reflect.has(res, 'id'));
  const updated = await managementClient.acl.updateResource(code, {
    description: '新的描述',
    type: ResourceType.Api,
    actions: [
      { name: 'cardiovascular', description: '心血管的' },
      { name: 'surge', description: '激增' }
    ],
    namespace: '600a8f4e37708b363024a3ca'
  });
  t.assert(updated.id);
  t.assert(updated.actions[0].name === 'cardiovascular');
  t.assert(updated.actions[0].description === '心血管的');
  t.assert(updated.actions[1].name === 'surge');
  t.assert(updated.actions[1].description === '激增');
  t.assert(updated.description === '新的描述');
});

test('删除资源', async t => {
  let code = Math.random()
    .toString(26)
    .slice(2);
  // 先创建一个资源
  const res = await managementClient.acl.createResource({
    code: code,
    type: ResourceType.Data,
    description: 'chair',
    actions: [
      {
        name: 'book:write',
        description: '图书写入操作'
      }
    ],
    namespace: '600a8f4e37708b363024a3ca'
  });
  t.assert(Reflect.has(res, 'id'));
  let deleted = await managementClient.acl.deleteResource(
    code,
    '600a8f4e37708b363024a3ca'
  );
  t.assert(deleted === true);
});

test('获取应用访问控制策略', async t => {
  let res = await managementClient.acl.getApplicationAccessPolicies({
    appId: process.env.AUTHING_APP_ID
  });
  t.assert(Array.isArray(res.list));
  t.assert(typeof res.totalCount === 'number');
});

test('启用应用访问控制策略', async t => {
  let username = Math.random()
    .toString(26)
    .slice(2);
  let pwd = '123456';
  let user = await managementClient.users.create({ username, password: pwd });
  let res = await managementClient.acl.enableApplicationAccessPolicy({
    appId: process.env.AUTHING_APP_ID,
    targetType: 'USER',
    targetIdentifiers: [user.id]
  });
  t.assert(res.code === 200);
});

test('停用应用访问控制策略', async t => {
  let username = Math.random()
    .toString(26)
    .slice(2);
  let pwd = '123456';
  let user = await managementClient.users.create({ username, password: pwd });
  let res = await managementClient.acl.enableApplicationAccessPolicy({
    appId: process.env.AUTHING_APP_ID,
    targetType: 'USER',
    targetIdentifiers: [user.id]
  });
  t.assert(res.code === 200);
  let res2 = await managementClient.acl.disableApplicationAccessPolicy({
    appId: process.env.AUTHING_APP_ID,
    targetType: 'USER',
    targetIdentifiers: [user.id]
  });
  t.assert(res2.code === 200);
});
