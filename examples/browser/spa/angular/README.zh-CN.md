# Angular 快速集成 Authing Demo

<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<div align=center>
  <a href="https://forum.authing.cn/" target="_blank"><img src="https://img.shields.io/badge/chat-forum-blue" /></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-success" alt="License"></a>
</div>

**简体中文** | [English](./README.md)

## 简介

你可以使用 Authing 快速为新开发的或已有的 Angular 应用集成认证能力。此 Demo 程序将为你演示如何使用 Authing Browser SDK 为 Angular 应用添加认证能力。

## 参考文档

- [Angular 快速集成 Authing](https://docs.authing.cn/v2/quickstarts/spa/angular.html)
- [Node.js Express API Server 快速开始](https://docs.authing.cn/v2/quickstarts/apiServer/nodeJsExpress/)

## Authing 控制台配置

在控制台的自建应用中，修改你的应用设置：

- **认证配置**：将 `登录回调 URL` 配置为 `https://localhost:3000`
- **授权配置**：`授权模式` 选中 `authorization_code`、`refresh_token`
- **授权配置**：`返回类型` 选中 `code`


## 填写你的应用配置

在 `/src/app/app.component.ts` 第 20 行附近，修改配置为你的应用配置：

```js
private sdk = new Authing({
  // 应用的认证地址，例如：https://domain.authing.cn
  domain: '认证地址',
  appId: '应用 ID',
  // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
  redirectUri: '登录回调地址',
  // 应用侧向 Authing 请求的权限，以空格分隔，默认为 'openid profile'
  // 成功获取的权限会出现在 Access Token 的 scope 字段中
  scope: 'openid profile order:read',
});
```


## 安装依赖

```bash
$ yarn install
```


## 运行

```bash
$ yarn start
```

## 开源共建

- Fork 此仓库
- 创建自己的 git 分支 (git checkout -b my-new-feature)
- 提交你的修改 (git commit -am 'Add some feature')
- 将修改内容推送到远程分支 (git push -u origin my-new-feature)
- 创建一个 Pull Request

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Authing
