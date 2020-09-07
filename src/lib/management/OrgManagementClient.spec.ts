import { ManagementClient } from './index';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';

const management = new ManagementClient(getOptionsFromEnv());

test.skip('通过 json 导入组织机构', async t => {
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
});

test.skip('添加成员', async t => {
  const tree = {
    name: '北京非凡科技有限公司',
    code: 'feifan',
    order: 10,
    children: [
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
    password: '123456'
  });
  const rootNode = orgTree.rootNode;
  await management.org.addMember(org.id, rootNode.code, user.id);

  const { totalCount, list } = await management.org.getMembers(
    org.id,
    rootNode.code
  );
  t.assert(totalCount === 1);
  t.assert(list.length === 1);
});
