import { ManagementClient } from './index';
import { getOptionsFromEnv } from './../utils/helper';
import test from "ava"

const management = new ManagementClient(getOptionsFromEnv())
const accessControl = management.accessControl

test('should be able to create group', async t => {
  const group = await accessControl.createGroup("管理员", "管理员")
  t.assert(group)
  t.assert(group._id)
})