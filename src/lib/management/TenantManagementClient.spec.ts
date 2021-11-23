import { ManagementClient } from './ManagementClient';
import {

  getOptionsFromEnv
} from '../testing-helper';
import test from 'ava';


const managementClient = new ManagementClient(getOptionsFromEnv());

test('list', async t => {

  const tenants = await managementClient.tenant.list({page:1,limit:10});
  console.log(tenants)
  t.assert(tenants);
});

test('details', async t => {

  const tenant = await managementClient.tenant.details('619b07312d6b99e1af7d8e4e');
  console.log(tenant)
  t.assert(tenant);
});

test('create', async t => {

  const tenant = await managementClient.tenant.create({
    name:"搜索",
    appIds:"619b64e4ccc0467dcba00920",
  });
  console.log(tenant)
  t.assert(tenant);
});


test('update', async t => {

  const tenant = await managementClient.tenant.update('619b64fd2cfccd07a8296839',{
    name:"聚合搜索"
  });
  console.log(tenant)
  t.assert(tenant);
});

test('delete', async t => {

  const tenant = await managementClient.tenant.delete('619b64fd2cfccd07a8296839');
  console.log(tenant)
  t.assert(tenant);
});

test('config', async t => {

  const tenant = await managementClient.tenant.config('619b64fd2cfccd07a8296839', {css:".btnId {\n text-color: #FF00EE}"});
  console.log(tenant)
  t.assert(tenant);
});

test('members', async t => {

  const tenant = await managementClient.tenant.members('619b64fd2cfccd07a8296839',{page:1,limit:10});
  console.log(JSON.stringify(tenant))
  t.assert(tenant);
});
test('addMembers', async t => {

  const tenant = await managementClient.tenant.addMembers('619b64fd2cfccd07a8296839',['619b07ab229e3bfa98e94ee2']);
  console.log(tenant)
  t.assert(tenant);
});

test('removeMembers', async t => {

  const tenant = await managementClient.tenant.removeMembers('619b64fd2cfccd07a8296839','619b07ab229e3bfa98e94ee2');
  console.log(tenant)
  t.assert(tenant);
});

test('listExtIdp', async t => {
  const result = await managementClient.tenant.listExtIdp('619b07312d6b99e1af7d8e4e');
  console.log(JSON.stringify(result))
  t.assert(result);
});

test('extIdpDetail', async t => {
  const result = await managementClient.tenant.extIdpDetail('619b33a00412723ba777eabf');
  console.log(JSON.stringify(result))
  t.assert(result);
});

test('createExtIdp', async t => {
  const result = await managementClient.tenant.createExtIdp({
    tenantId: '619b64fd2cfccd07a8296839',
     name: '微信身份源',
     type: 'wechat',
     connections: [{
      type: 'wechat:pc',
      identifier: 'wechatc1',
      displayName: '微信身份源连接',
      fields: {'clientSecret':'d1cuu12MdgGKrcItRyD6TeJLNqoWjRW0','clientID':'cli_a1118cb96bf95013','displayName':'飞书身份源连接'},
      userMatchFields: ['ss']
    }]
  });
  console.log(result)
  t.assert(result);
});

test('updateExtIdp', async t => {
  const result = await managementClient.tenant.updateExtIdp('619c84ce946e9c1913247af1',{'name':'飞书身份源'});
  console.log(result)
  t.assert(result);
});

test('deleteExtIdp', async t => {
  const result = await managementClient.tenant.deleteExtIdp('619c84ce946e9c1913247af1');
  console.log(result)
  t.assert(result);
});

test('createExtIdpConnection', async t => {
  const result = await managementClient.tenant.createExtIdpConnection({
    extIdpId: '619c917f534a3b8ad988a209',
    type: 'wechatmp-qrcode',
    identifier: 'wechatc2',
    displayName: '微信身份源连接1',
    fields: {'clientSecret':'d1cuu12KrcItRyD6T','clientID':'cli_a196bf9013','displayName':'飞书身份源连接1'},
    userMatchFields: ['ss']
  });
  console.log(result)
  t.assert(result);
});

test('updateExtIdpConnection', async t => {
  const result = await managementClient.tenant.updateExtIdpConnection('619c9490d7b1cec02bf982f6',{
    displayName: '微信身份源连接2',
    fields: {'clientSecret':'d1cuu12KrcItRyD6T','clientID':'cli_a196bf9013','displayName':'飞书身份源连接1'},
    userMatchFields: ['ss']
  });
  console.log(result)
  t.assert(result);
});

test('deleteExtIdpConnection', async t => {
  const result = await managementClient.tenant.deleteExtIdpConnection('619c9490d7b1cec02bf982f6');
  console.log(result)
  t.assert(result);
});

