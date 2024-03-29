## 目标效果

按照 [website1](./README.md)、[website2](../website2/README.md) 的引导，将两个项目都启动起来

在 website1 启动，正常登录之后，通过 website1 里的链接直接跳转到 website2，就可以发现，website2 可以直接取到用户信息了。

## 确认配置信息

首先需要在 Authing 控制台创建`自建应用`，假定叫 `website1`，并将创建好的名为 `website1` 的应用加入到`单点登录`面板，最后需要确认这几个信息：

- 应用 `website1` 的 `App ID`
- 单点登录的`应用面板地址`，需要在控制台『单点登录 - 配置』中获取
- 登录回调地址，需要在控制台『自建应用 - `website1` 应用配置 - 登录回调 URL』中指定为 `https://localhost:8000`
- **授权配置**：`授权模式`开启 `authorization_code`、`refresh_token`
- **授权配置**：`返回类型`开启 `code`

## 更新 Demo 配置

接着需要更新 `./src/app/app.component.ts` 里的配置信息为你自己建立的应用信息：

- appId：上一步获取到的`App ID`
- domain：上一步获取到的`应用面板地址`
- redirectUri：上一步确认的 `https://localhost:8000`

## 运行此程序

``` shell

# 安装依赖
npm ci

# 启动服务
npm run dev
```

服务启动后，浏览器打开 https://localhost:8000 即可

## 开发教程

开发教程请参考：[使用 Authing 实现单点登录](https://docs.authing.cn/v3/reference/sdk/web/quick.html)。
