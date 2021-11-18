import { ManagementClient } from './ManagementClient';
import {

  getOptionsFromEnv
} from '../testing-helper';
import test from 'ava';


const managementClient = new ManagementClient(getOptionsFromEnv());

test('list', async t => {

  const tenants=await managementClient.tenant.list();
  console.log(tenants)
  t.assert(tenants);
});

test('details', async t => {

  const tenant = await managementClient.tenant.details('6194aeee9ccea057e89738f0');
  console.log(tenant)
  t.assert(tenant);
});

test('create', async t => {

  const tenant = await managementClient.tenant.create({
    name:"qqqxx",
    appIds:"6194a3c595908f00ff698d3a",
  });
  console.log(tenant)
  t.assert(tenant);
});


test('update', async t => {

  const tenant = await managementClient.tenant.update('6194aeee9ccea057e89738f0',{
    name:"qq"
  });
  console.log(tenant)
  t.assert(tenant);
});

test('delete', async t => {

  const tenant = await managementClient.tenant.delete('6194c58fa1a910549fc62aa5');
  console.log(tenant)
  t.assert(tenant);
});

test('config', async t => {

  const tenant = await managementClient.tenant.config('6194aeee9ccea057e89738f0',{css:"qqq"});
  console.log(tenant)
  t.assert(tenant);
});

test('members', async t => {

  const tenant = await managementClient.tenant.members('6194aeee9ccea057e89738f0');
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
