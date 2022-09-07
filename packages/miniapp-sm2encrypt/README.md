# @authing/miniapp-sm2encrypt

JavaScript sm2 encrypt module for miniapp

## Usage

Use in Authing miniapp SDK

``` typescript
import { Authing } from '@authing/miniapp-wx'

import { encryptFunction } from '@authing/miniapp-sm2encrypt'

const authing = new Authing({
  appId: '630b549efa97ba795338e2cd',
  host: 'http://localhost:3000',
  userPoolId: '630b549d5a697473a2d7fa20',
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
