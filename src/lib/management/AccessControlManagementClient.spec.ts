import { ManagementClient } from './index';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';

const management = new ManagementClient(getOptionsFromEnv());
const acl = management.acl;

test('创建分组', async t => {
  const group = await acl.createGroup(generateRandomString(), '管理员');
  t.assert(group);
  t.assert(group._id);
});

test('平级 role + user + resource', async t => {
  const roleCode = generateRandomString();
  const role = await acl.addRole(roleCode);
  t.assert(role);

  const resouceCode = generateRandomString();
  const resouce = await acl.addResource(resouceCode);
  t.assert(resouce);

  await acl.allow(roleCode, 'open', resouceCode);
  await acl.deny(roleCode, 'close', resouceCode);
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456',
    registerInClient: ''
  });
  const userId = user._id;
  await acl.assignRole(roleCode, [user._id]);

  const allowed = await acl.isAllowed(userId, 'open', resouceCode);
  t.assert(allowed);

  const allowed2 = await acl.isAllowed(userId, 'xxxx', resouceCode);
  t.assert(allowed2 === false);

  const allowed3 = await acl.isAllowed(userId, 'close', resouceCode);
  t.assert(allowed3 === false);
});

test('有层级的 role + user + resource', async t => {
  // 1. 创建两个角色, employee 是 developer 的父角色
  const employee = generateRandomString();
  const developer = generateRandomString();
  const role1 = await acl.addRole(employee);
  const role2 = await acl.addRole(developer, employee);
  t.assert(role1);
  t.assert(role2);
  t.assert(role2.parent);
  t.assert(role2.parent.code === employee);

  // 创建用户，授予 developer 角色
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456',
    registerInClient: ''
  });
  const userId = user._id;
  await acl.assignRole(developer, [userId]);

  // 2. 创建一个资源
  const door = generateRandomString();
  const resouce = await acl.addResource(door);
  t.assert(resouce);

  // 3. 将这个资源授权给 employee
  const action = 'open';
  await acl.allow(employee, action, door);

  // 4. 判断 user 是否具备 open door 的权限
  const allowed = await acl.isAllowed(userId, action, door);
  t.assert(allowed);

  const allowed2 = await acl.isAllowed(userId, 'xxxx', door);
  t.assert(allowed2 === false);
});

test('组织机构 + user + resource', async t => {
  // 1. 导入一个组织机构
  const tree = {
    name: '北京非凡科技有限公司',
    code: 'feifan',
    nameI18n: {
      en: 'Beijing Feifan Technology Co., Ltd.',
      ja: '北京フェイファンテクノロジー株式会社'
    },
    description:
      '我们打造以身份为中心的云原生操作系统，服务全球创意工作者。我们让用户控制自己的身份和数据，同时数据可以被重复利用。的应用程序数据泄漏变成过去式，并显着降低企业和开发者进入市场的成本。',
    descriptionI18n: {
      en:
        'We build an identity-centric cloud-native operating system to serve global creative workers. We let users control their identity and data, and data can be reused. Of application data leakage becomes a thing of the past and significantly reduces the cost of entering the market for businesses and developers.',
      ja:
        'ID中心のクラウドネイティブオペレーティングシステムを構築して、グローバルなクリエイティブワーカーにサービスを提供しています。ユーザーが自分のIDとデータを制御できるようにし、データを再利用できます。アプリケーションのデータ漏洩は過去のものとなり、企業や開発者が市場に参入するコストを大幅に削減します。'
    },
    order: 10,
    children: [
      {
        code: 'dev',
        name: '研发',
        description: '研发部门',
        order: 40,
        children: [
          {
            code: 'backend',
            name: '后端工程师',
            order: 30
          },
          {
            code: 'frontend',
            name: '前端工程师',
            order: 20
          },
          {
            code: 'devops',
            name: '运维工程师',
            order: 10
          }
        ]
      },
      {
        code: 'business',
        name: '商业化',
        description: '商业化部门',
        order: 30
      },
      {
        code: 'operation',
        name: '运营',
        description: '商业化部门',
        order: 20
      },
      {
        code: 'hr',
        name: '人事',
        description: '人事部门',
        order: 10
      }
    ]
  };
  let org = await management.org.import(tree);
  t.assert(org);

  const orgTree = await management.org.findById(org.id);
  t.assert(orgTree.id);

  // 添加成员
  const user = await management.users.create({
    username: generateRandomString(),
    password: '123456',
    registerInClient: ''
  });
  const rootNode = orgTree.rootNode;
  await management.org.addMember(org.id, rootNode.code, user._id);

  // 2. 创建一个资源
  const door = generateRandomString();
  const resouce = await acl.addResource(door);
  t.assert(resouce);

  // 3. 将这个资源授权给根节点
  const action = 'open';
  await acl.allow(org.id, rootNode.code, action, door);

  // 4. 判断 user 是否具备 open door 的权限
  const allowed = await acl.isAllowed(user._id, action, door);
  t.assert(allowed);

  const allowed2 = await acl.isAllowed(user._id, 'xxxx', door);
  t.assert(allowed2 === false);
});
