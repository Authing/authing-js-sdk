// tslint:disable:no-expression-statement
import test from "ava"
import { ManagementClient } from "./index"

test('should init with secret', async t => {
  const management = new ManagementClient({
    userPoolId: "AUTHING_USERPOOL_ID",
    secret: "AUTHING_USERPOOL_SECRET"
  })
  t.assert(management)
})

test('should init with accessToken', async t => {
  const management = new ManagementClient({
    userPoolId: "AUTHING_USERPOOL_ID",
    accessToken: "AUTHING_ACCESS_TOKEN"
  })
  t.assert(management)
})
