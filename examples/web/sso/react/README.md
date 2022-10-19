# authing/web demo for React

1. 进入 `website1` 和 `website2` 目录，分别运行以下命令：

``` shell
npm ci
npm run start
```

2. 分别修改 `website1` 和 `website2` 中的 `App.tsx` 中实例化 SDK 的配置：

``` typescript
const authing = useMemo(() => {
  return new Authing({
    // 控制台 -> 应用 -> 单点登录 SSO -> 配置 -> 应用面板地址，如：https://my-awesome-sso.authing.cn
    domain: 'AUTHING_DOMAIN_URL',

    // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 端点信息 -> APP ID
    appId: 'AUTHING_APP_ID',

    // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 认证配置 -> 登录回调 URL
    redirectUri: 'YOUR_REDIRECT_URL',

    // 控制台 -> 设置 -> 基础设置 -> 基础信息 -> 用户池 ID
    userPoolId: 'AUTHING_USER_POOL_ID'
  })
}, [])
```
