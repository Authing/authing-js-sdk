import { sleep, getOptionsFromEnv } from '../utils/helper';
import test from "ava"
import { DecodedAccessToken } from './types';
import { ManagementTokenProvider } from "./ManagementTokenProvider"
import jwtDecode from "jwt-decode"

const tokenProvider = new ManagementTokenProvider(getOptionsFromEnv())

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

test('should be able to refresh accesstoken', async t => {
  const accessToken1 = await tokenProvider.getAccessToken()
  await sleep(1000)
  const accessToken2 = await tokenProvider.refreshAccessToken()
  t.assert(accessToken1 !== accessToken2)
})