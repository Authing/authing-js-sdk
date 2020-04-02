import test from "ava";
import { formatError } from "../src/utils/formatError";
import { authing, config } from "./base"
import {randomEmail} from './utils/random'

test("authingTokenToOidcToken authingToken 换 OIDC Token", async t => {
  let email = randomEmail();
  try {
    let user = await authing.register({
      email,
      password: '123456a!'
    })
    user = await authing.login({email, password: '123456a!'})
    let res = await authing.authingTokenToOidcToken({
      client_id: '5e5fc34ff14bb25992ee2781',
      client_secret: 'e38d20b3c746d2f3ba957dfca9a12b20',
      authingToken: user.token,
    });
    t.assert(res.access_token)
    t.assert(res.id_token)
    t.assert(res.refresh_token)
    t.pass();
  } catch (err) {
    t.log(formatError(err));
    t.fail(formatError(err));
  }
});