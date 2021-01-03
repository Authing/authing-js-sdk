import { ManagementClient } from './ManagementClient';
import { generateRandomString, getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import {
  PolicyAssignmentTargetType,
  PolicyEffect
} from '../../types/graphql.v2';
import _ from 'lodash';
import { deepEqual } from '../utils';

const managementClient = new ManagementClient(getOptionsFromEnv());

const statements = [
  {
    resource: 'books:123',
    effect: PolicyEffect.Allow,
    actions: ['books:edit']
  }
];

test('create policy', async t => {
  const code = generateRandomString(5);
  const policy = await managementClient.policies.create({
    code,
    statements
  });
  t.assert(policy);
  t.assert(policy.code === code);
});

test('update policy # statements', async t => {
  const code = generateRandomString(5);
  let policy = await managementClient.policies.create({
    code,
    statements
  });
  const newStatements = [
    {
      resource: 'books:123',
      effect: PolicyEffect.Allow,
      actions: ['books:*']
    }
  ];
  policy = await managementClient.policies.update(code, {
    statements: newStatements
  });
  t.assert(policy.code === code);
  t.assert(deepEqual(newStatements, policy.statements));
});

test('update policy # new code', async t => {
  const code = generateRandomString(5);
  let policy = await managementClient.policies.create({
    code,
    statements
  });
  const newCode = generateRandomString(10);
  policy = await managementClient.policies.update(code, {
    newCode
  });
  t.assert(policy.code === newCode);
});

test('update policy # description', async t => {
  const code = generateRandomString(5);
  let policy = await managementClient.policies.create({
    code,
    statements
  });
  const description = generateRandomString(10);
  policy = await managementClient.policies.update(code, {
    description
  });
  t.assert(policy.description === description);
});

test('update policy # 系统内置策略', async t => {
  const description = generateRandomString(10);
  let failed = false;
  try {
    await managementClient.policies.update('AdministratorAccess', {
      description
    });
  } catch {
    failed = true;
  }
  t.assert(failed);
});

test('detail', async t => {
  const code = generateRandomString(5);
  let policy = await managementClient.policies.create({
    code,
    statements
  });
  policy = await managementClient.policies.detail(code);
  t.assert(policy);
  t.assert(deepEqual(policy.statements, statements));
});

test('delete', async t => {
  const code = generateRandomString(5);
  let policy = await managementClient.policies.create({
    code,
    statements
  });
  await managementClient.policies.delete(code);
  policy = await managementClient.policies.detail(code);
  t.assert(policy === null);
});

test('deleteMany', async t => {
  const code = generateRandomString(5);
  let policy = await managementClient.policies.create({
    code,
    statements
  });
  await managementClient.policies.deleteMany([code]);
  policy = await managementClient.policies.detail(code);
  t.assert(policy === null);
});

test('addAssignments', async t => {
  const code = generateRandomString(5);
  const policy = await managementClient.policies.create({
    code,
    statements
  });
  const user = await managementClient.users.create({
    username: generateRandomString(10),
    password: '123456!'
  });
  await managementClient.policies.addAssignments(
    [policy.code],
    PolicyAssignmentTargetType.User,
    [user.id]
  );
  const { totalCount, list } = await managementClient.policies.listAssignments({
    code
  });
  t.assert(totalCount === 1);
  t.assert(list.length === 1);
  const { targetIdentifier } = list[0];
  t.assert(user.id === targetIdentifier);
});

test('addAssignments # 非本用户池的用户 ID', async t => {
  const code = generateRandomString(5);
  const policy = await managementClient.policies.create({
    code,
    statements
  });
  let failed = false;
  try {
    await managementClient.policies.addAssignments(
      [policy.code],
      PolicyAssignmentTargetType.User,
      [generateRandomString(10)]
    );
  } catch {
    failed = true;
  }
  t.assert(failed);
});

test('addAssignments # 非本用户池的角色', async t => {
  const code = generateRandomString(5);
  const policy = await managementClient.policies.create({
    code,
    statements
  });
  let failed = false;
  try {
    await managementClient.policies.addAssignments(
      [policy.code],
      PolicyAssignmentTargetType.Role,
      [generateRandomString(10)]
    );
  } catch {
    failed = true;
  }
  t.assert(failed);
});

test('addAssignments # 多个策略', async t => {
  const code1 = generateRandomString(5);
  const policy1 = await managementClient.policies.create({
    code: code1,
    statements
  });
  const code2 = generateRandomString(5);
  const policy2 = await managementClient.policies.create({
    code: code2,
    statements
  });
  const user = await managementClient.users.create({
    username: generateRandomString(10),
    password: '123456!'
  });
  await managementClient.policies.addAssignments(
    [policy1.code, policy2.code],
    PolicyAssignmentTargetType.User,
    [user.id]
  );

  const {
    totalCount: totalCount1
  } = await managementClient.policies.listAssignments({ code: code1 });
  const {
    totalCount: totalCount2
  } = await managementClient.policies.listAssignments({ code: code2 });
  t.assert(totalCount1 === 1);
  t.assert(totalCount2 === 1);
});

test('removeAssignments', async t => {
  const code = generateRandomString(5);
  const policy = await managementClient.policies.create({
    code,
    statements
  });
  const user = await managementClient.users.create({
    username: generateRandomString(10),
    password: '123456!'
  });
  await managementClient.policies.addAssignments(
    [policy.code],
    PolicyAssignmentTargetType.User,
    [user.id]
  );
  await managementClient.policies.removeAssignments(
    [policy.code],
    PolicyAssignmentTargetType.User,
    [user.id]
  );
  const { totalCount } = await managementClient.policies.listAssignments({
    code
  });
  t.assert(totalCount === 0);
});
