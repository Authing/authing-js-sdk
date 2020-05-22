import { ManagementClient } from './index';
import { ManagementTokenProvider } from './ManagementTokenProvider';
import { getOptionsFromEnv, randomString } from './../utils/helper';
import { UsersManagementClient } from './UsersManagementClient';
import test from "ava"

const management = new ManagementClient(getOptionsFromEnv())
const tokenProvider = new ManagementTokenProvider(management.options)
const usersManagement = new UsersManagementClient(management.options, tokenProvider)

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