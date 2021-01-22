import { ManagementClient } from './ManagementClient';
import { getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import { SupportedAdminActionEnum } from './types';

const managementClient = new ManagementClient(getOptionsFromEnv());

/*test('查看用户操作日志', async t => {
  const userActions = await managementClient.statistics.listUserActions();
  t.assert(userActions.length !== 0);
});*/

test('查看管理员操作日志', async t => {
  const auditLogs = await managementClient.statistics.listAuditLogs({
    operationNames: [SupportedAdminActionEnum.CREATE_USER]
  });
  console.log(auditLogs);
  t.assert(auditLogs.length !== 0);
});
