import { ManagementClient } from './ManagementClient';
import test from 'ava';
import { ResourceType } from '../../types/graphql.v2';
import { generateRandomString } from '../testing-helper';
import { ApplicationType } from './types';

require('dotenv').config({
  path: '.env'
});

const APP_ID = '607543c1ec30828efb065adb';

const managementClient = new ManagementClient({
  userPoolId: process.env.AUTHING_USERPOOL_ID,
  secret: process.env.AUTHING_USERPOOL_SECRET,
  host: process.env.AUTHING_HOST
});

const applications = managementClient.applications;

test('list applications', async t => {
  const { list, totalCount } = await managementClient.applications.list();
  console.log(list)
  t.assert(totalCount);
  t.assert(list.length);
});

test('applications findById', async t => {
  const { list } = await managementClient.applications.list();
  const application = await managementClient.applications.findById(list[0].id);
  t.assert(application);
  t.assert(application.id);
});

test('资源', async t => {
  const res = await applications.listResources(APP_ID);
  t.assert(Array.isArray(res.list));
  t.assert(Reflect.has(res, 'totalCount'));
});

test('创建资源', async t => {
  let code = Math.random()
    .toString(26)
    .slice(2);
  const res = await applications.createResource(APP_ID, {
    code: code,
    type: ResourceType.Data,
    description: 'chair',
    actions: [
      {
        name: 'book:write',
        description: '图书写入操作'
      }
    ]
  });
  t.assert(Reflect.has(res, 'id'));
});

test('修改资源', async t => {
  let code = Math.random()
    .toString(26)
    .slice(2);
  // 先创建一个资源
  const res = await applications.createResource(APP_ID, {
    code: code,
    type: ResourceType.Data,
    description: 'chair',
    actions: [
      {
        name: 'book:write',
        description: '图书写入操作'
      }
    ]
  });
  t.assert(Reflect.has(res, 'id'));
  const updated = await applications.updateResource(APP_ID, {
    code,
    description: '新的描述',
    type: ResourceType.Api,
    actions: [
      { name: 'cardiovascular', description: '心血管的' },
      { name: 'surge', description: '激增' }
    ]
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
  const res = await applications.createResource(APP_ID, {
    code: code,
    type: ResourceType.Data,
    description: 'chair',
    actions: [
      {
        name: 'book:write',
        description: '图书写入操作'
      }
    ]
  });
  t.assert(Reflect.has(res, 'id'));

  const deleted = await applications.deleteResource(APP_ID, code);

  t.assert(deleted);
});

test('获取应用访问控制策略', async t => {
  const list = await applications.getAccessPolicies(APP_ID);

  t.assert(Array.isArray(list.list));
  t.assert(typeof list.totalCount === 'number');
});

test('配置「允许主体（用户、角色、分组、组织机构节点）访问应用」的控制策略', async t => {
  let username = Math.random()
    .toString(26)
    .slice(2);
  let pwd = '123456';
  let user = await managementClient.users.create({ username, password: pwd });
  let res = await applications.allowAccess(APP_ID, {
    targetType: 'USER',
    targetIdentifiers: [user.id]
  });
  t.assert(res.code === 200);
  let res2 = await applications.getAccessPolicies(APP_ID);
  t.truthy(res2.list.find((v: any) => v.targetIdentifier === user.id));
});

test('启用应用访问控制策略', async t => {
  let username = Math.random()
    .toString(26)
    .slice(2);
  let pwd = '123456';
  let user = await managementClient.users.create({ username, password: pwd });
  await applications.allowAccess(APP_ID, {
    targetType: 'USER',
    targetIdentifiers: [user.id]
  });
  let res = await applications.enableAccessPolicy(APP_ID, {
    targetType: 'USER',
    targetIdentifiers: [user.id]
  });
  t.assert(res.code === 200);
});

test('配置「拒绝主体（用户、角色、分组、组织机构节点）访问应用」的控制策略', async t => {
  let username = Math.random()
    .toString(26)
    .slice(2);
  let pwd = '123456';
  let user = await managementClient.users.create({ username, password: pwd });
  let res = await applications.denyAccess(APP_ID, {
    targetType: 'USER',
    targetIdentifiers: [user.id]
  });
  t.assert(res.code === 200);
  let res2 = await applications.getAccessPolicies(APP_ID);
  t.truthy(res2.list.find((v: any) => v.targetIdentifier === user.id));
});

test('更改默认应用访问策略（默认拒绝所有用户访问应用、默认允许所有用户访问应用）', async t => {
  let res2 = await applications.updateDefaultAccessPolicy(APP_ID, 'DENY_ALL');
  t.assert(res2.permissionStrategy.defaultStrategy === 'DENY_ALL');
  let res3 = await applications.updateDefaultAccessPolicy(APP_ID, 'ALLOW_ALL');
  t.assert(res3.permissionStrategy.defaultStrategy === 'ALLOW_ALL');
});

test('创建角色', async t => {
  const code = generateRandomString(5);
  const role = await applications.createRole(APP_ID, {
    code: code
  });

  const roleInfo = await applications.findRole(APP_ID, code);
  t.assert(role.code === roleInfo.code);
  t.assert(role.code === code);
});

test('更新角色', async t => {
  const code = generateRandomString(5);
  await applications.createRole(APP_ID, { code });

  const description = generateRandomString(10);
  const role = await applications.updateRole(APP_ID, {
    code,
    description: description
  });
  t.assert(role.description === description);

  const newCode = generateRandomString();
  const roleUpdatedCode = await applications.updateRole(APP_ID, {
    code,
    newCode,
    description
  });

  t.assert(roleUpdatedCode.code === newCode);
});

test('查询角色详情', async t => {
  const code = generateRandomString(5);
  await applications.createRole(APP_ID, { code });
  const role = await applications.findRole(APP_ID, code);
  t.assert(role);
  t.assert(role.code === code);
});

test('删除角色', async t => {
  const code = generateRandomString(5);
  await applications.createRole(APP_ID, { code });
  await applications.deleteRole(APP_ID, code);
  const role = await applications.findRole(APP_ID, code);

  t.assert(!role);
});

test('批量删除角色', async t => {
  let index = 0;

  const codes: string[] = [];
  while (index < 3) {
    const code = generateRandomString(5);
    await applications.createRole(APP_ID, { code });
    codes.push();
    index++;
  }

  const role = await applications.deleteRoles(APP_ID, codes);

  t.assert(role.code === 200);
});

test('查询空 Code 的角色', async t => {
  const code = generateRandomString(5);
  const role = await applications.findRole(APP_ID, code);

  t.assert(!role);
});

test('listAuthorizedResources', async t => {
  const code = generateRandomString(5);
  await applications.createRole(APP_ID, { code });

  const data = await applications.listAuthorizedResourcesByRole(
    APP_ID,
    code,
    ResourceType.Data
  );

  t.assert(data);
});

test('创建注册协议', async t => {
  const { title } = await applications.createAgreement(APP_ID, {
    title: 'A test agreement',
    required: true
  });

  t.assert(title === 'A test agreement');
});

test('修改注册协议', async t => {
  const { id } = await applications.createAgreement(APP_ID, {
    title: 'test',
    required: true
  });
  const { title } = await applications.modifyAgreement(APP_ID, id, {
    title: 'new test'
  });

  t.assert(title === 'new test');
});

test('注册协议排序', async t => {
  await Promise.all(
    ['name1', 'name2', 'name3', 'name4'].map(name =>
      applications.createAgreement(APP_ID, {
        title: name,
        required: true
      })
    )
  );

  let prevOrder = (await applications.listAgreement(APP_ID)).list.map(
    item => item.id
  );

  let newOrder = prevOrder.sort(() => (Math.random() > 0.5 ? 1 : -1));

  await applications.sortAgreement(APP_ID, newOrder);
  const ordered = (await applications.listAgreement(APP_ID)).list.map(
    item => item.id
  );

  t.assert(newOrder.join('') === ordered.join(''));
});

test.serial('删除注册协议和注册协议列表', async t => {
  const { id } = await applications.createAgreement(APP_ID, {
    title: '要删除的',
    required: true
  });
  const oldLength = (await applications.listAgreement(APP_ID)).totalCount;
  await applications.deleteAgreement(APP_ID, id);
  const newLength = (await applications.listAgreement(APP_ID)).totalCount;

  t.assert(oldLength - 1 === newLength);
});

test('changeTenantConfig', async t => {
  const result = await applications.changeApplicationType('6194a3c595908f00ff698d3a', ApplicationType.BOTH);
  console.log(result)
  t.assert(result.appType === ApplicationType.BOTH);
});

test('applicationTenants', async t => {
  const result = await applications.applicationTenants('6194a3c595908f00ff698d3a');
  console.log(result)
  t.assert(result.tenants);
});
