import { AuthenticationClient } from './index';
import { getOptionsFromEnv } from './../utils/helper';
import test from "ava"

const authing = new AuthenticationClient(getOptionsFromEnv())

test.only('should be able to check login status', async t => {
  const res = await authing.checkLoginStatus("")
  t.assert(res.status === false)
})
