import { ManagementClient } from './ManagementClient';
import { getOptionsFromEnv } from '../testing-helper';
import test from 'ava';
import { PolicyAssignmentTargetType, ResourceType } from '../../types/graphql.v2';

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
