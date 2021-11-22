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

  const tenant = await managementClient.tenant.config('6194aeee9ccea057e89738f0',{css:"qqq"});
  console.log(tenant)
  t.assert(tenant);
});

test('members', async t => {

  const tenant = await managementClient.tenant.members('6194aeee9ccea057e89738f0',{page:1,limit:10});
  console.log(tenant)
  t.assert(tenant);
});
test('addMembers', async t => {

  const tenant = await managementClient.tenant.addMembers('6194aeee9ccea057e89738f0',['6194bc6742fbd981a405a4c6']);
  console.log(tenant)
  t.assert(tenant);
});

test('removeMembers', async t => {

  const tenant = await managementClient.tenant.removeMembers('6194aeee9ccea057e89738f0','6194bc6742fbd981a405a4c6');
  console.log(tenant)
  t.assert(tenant);
});

test('listExtIdp', async t => {
  const result = await managementClient.tenant.listExtIdp('619b07312d6b99e1af7d8e4e');
  console.log(result)
  t.assert(result);
});

test('extIdpDetail', async t => {
  const result = await managementClient.tenant.extIdpDetail('619b33a00412723ba777eabf');
  console.log(result)
  t.assert(result);
});

test('createExtIdp', async t => {
  // let options = {
  //   tenantId: '619b07312d6b99e1af7d8e4e',
  //    name: '飞书 SDK',
  //    type: 'lark',
  //    connections: [{
  //      type: 'lark',
  //      identifier: 'larka',
  //      displayName: '飞书 SDK',
  //      fields: {'ss':'ss'},
  //      userMatchFields: ['ss'],
  //      logo: ''
  //    }]
  // }
  const result = await managementClient.tenant.createExtIdp({
    tenantId: '619b07312d6b99e1af7d8e4e',
     name: '飞书 SDK',
     type: 'lark',
     connections: [{
       type: 'lark-internal',
       identifier: 'feishusdk',
       displayName: '飞书 SDK',
       fields: {'clientSecret':'d1cuu12MdgGKrcItRyD6TeJLNqoWjRW0','clientID':'cli_a1118cb96bf95013','displayName':'飞书 SDK'},
       userMatchFields: ['ss']
     }]
  });
  console.log(result)
  t.assert(result);
});

test('updateExtIdp', async t => {
  const result = await managementClient.tenant.updateExtIdp('619b399e812c47c972900129',{'name':'飞书 SDK 端'});
  console.log(result)
  t.assert(result);
});

test('deleteExtIdp', async t => {
  const result = await managementClient.tenant.deleteExtIdp('619b399e812c47c972900129');
  console.log(result)
  t.assert(result);
});


