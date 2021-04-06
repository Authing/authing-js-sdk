import { ManagementClient } from './ManagementClient';
import test from 'ava';

require('dotenv').config({
  path: '.env'
});

const managementClient = new ManagementClient({
  userPoolId: process.env.AUTHING_USERPOOL_ID,
  secret: process.env.AUTHING_USERPOOL_SECRET,
  host: process.env.AUTHING_HOST,
});

test('list applications', async t => {
  const { list, totalCount } = await managementClient.applications.list();
  t.assert(totalCount);
  t.assert(list.length);
});

test('applications findById', async t => {
  const { list } = await managementClient.applications.list();
  const application = await managementClient.applications.findById(list[0].id);
  t.assert(application);
  t.assert(application.id)
});
