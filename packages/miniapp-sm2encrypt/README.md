# @authing/miniapp-sm2encrypt

JavaScript sm2 encrypt module for miniapp

## Usage

Use in Authing miniapp SDK

``` typescript
import { Authing } from '@authing/miniapp-wx'

import { encryptFunction } from '@authing/miniapp-sm2encrypt'

const authing = new Authing({
  appId: 'AUTHING_APP_ID',

  // 公有云部署：Authing 控制台 -> 选择已创建的小程序应用 -> 应用配置 -> 认证配置 -> 认证地址
  // 私有化部署：填写你的私有服务地址
  host: 'https://my-authing-app.example.com',

  // 用户池 ID
  userPoolId: '62e221xxxxxxxxxxx7037a39',

  // 非必传，密码默认将以明文传输
  encryptFunction
})
```

Use alone

``` typescript
import { encryptFunction } from '@authing/miniapp-sm2encrypt'

export async function getPublicKey () {
  const host = 'https://core.authing.cn'

  const api = `${host}/api/v3/system`

  const res = await axios.get(api)

  return res.data.data.sm2.publicKey
}

const publicKey = await getPublicKey()

encryptFunction('this is planText', publicKey)
```
