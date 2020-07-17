import { ManagementClient } from './index';
import { getOptionsFromEnv, randomString } from './../utils/helper';
import test from "ava"

const management = new ManagementClient(getOptionsFromEnv())
const userManagment = management.users
const userpoolManagment = management.userpool

test('should be able to add collaborator', async t => {
  const user = await userManagment.create({
    userInfo: {
      registerInClient: "",
      username: randomString(),
      password: "123456!"
    }
  })
  const { _id } = await userpoolManagment.addCollaborator(user._id)
  t.assert(_id)
})

test("should be able to get userpool detail", async t => {
  const detail = await userpoolManagment.detail()
  t.assert(detail)
  t.assert(detail._id !== undefined)
  t.assert(detail.name !== undefined)
})

test('should be able to get get permission list', async t => {
  const list = await userpoolManagment.getPermissionList();
  t.assert(list)
  t.assert(list.totalCount !== undefined)
})
