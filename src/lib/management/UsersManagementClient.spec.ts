import { ManagementClient } from './index';
import { getOptionsFromEnv, randomString } from './../utils/helper';
import test from "ava"

const management = new ManagementClient(getOptionsFromEnv())
const usersManagement = management.users

test('should be able to create user', async t => {
  const user = await usersManagement.create({
    userInfo: {
      username: randomString(),
      password: "123456!"
    }
  })
  t.assert(user)
  t.assert(user._id)
  t.assert(user.username)
})