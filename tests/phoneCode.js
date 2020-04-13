import test from "ava";
import { authing } from "./base"

test('检测手机号验证码', async t => {
  const result = await authing.verifyPhoneCode({
    phone: "17670416754",
    phoneCode: "1148"
  })
  t.log(result)
})