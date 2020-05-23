import { ManagementClient } from './index';
import { getOptionsFromEnv } from '../utils/helper';
import test from "ava"
import { DecodedAccessToken } from './types';
import jwtDecode from "jwt-decode"

const management = new ManagementClient(getOptionsFromEnv())
const tokenProvider = management.tokenProvider

test('should be able to get accesstoken', async t => {
  const accessToken = await tokenProvider.getAccessToken()
  const decoded: DecodedAccessToken = jwtDecode(accessToken)
  t.assert(accessToken)
  t.assert(decoded.data.id)
})

test('should get cached accesstoken', async t => {
  const accessToken1 = await tokenProvider.getAccessToken()
  const accessToken2 = await tokenProvider.getAccessToken()
  t.assert(accessToken1 === accessToken2)
})
