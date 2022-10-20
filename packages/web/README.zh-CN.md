# Authing Web 端认证 SDK

<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<div align=center>
  <a href="https://badge.fury.io/js/@authing%2Fweb" target="_blank"><img src="https://badge.fury.io/js/@authing%2Fweb.svg" alt="npm version"></a>
  <a href="https://npmcharts.com/compare/@authing/web" target="_blank"><img src="https://img.shields.io/npm/dm/@authing/web" alt="download"></a>
  <a href="https://forum.authing.cn/" target="_blank"><img src="https://img.shields.io/badge/chat-forum-blue" /></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-success" alt="License"></a>
</div>

**简体中文** | [English](./README.md)

## 简介

你可以使用 Authing Web SDK 快速为新开发的或已有的 Web 应用集成认证能力

## 参考文档

- [React 快速集成 Authing](https://docs.authing.cn/v2/quickstarts/spa/react.html)
- [Vue 快速集成 Authing](https://docs.authing.cn/v2/quickstarts/spa/vue.html)
- [Angular 快速集成 Authing](https://docs.authing.cn/v2/quickstarts/spa/angular.html)
- [单点登录（SSO）](https://docs.authing.cn/v2/reference/sdk-for-sso-spa.html)


## 安装

### NPM

```bash
$ npm install --save @authing/web
```

### Yarn

```bash
$ yarn add @authing/web
```

### 使用 script 标签直接引入

```html
<script src="https://cdn.authing.co/packages/web/5.1.0/index.global.js"></script>
<script>
const sdk = new Authing({
  // 很重要，请仔细填写！
  // 如果应用开启 SSO，这儿就要写单点登录的「应用面板地址」；否则填写应用的「认证地址」。
  domain: '认证域名',

  appId: '应用 ID',

  // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
  redirectUri: '登录回调地址',

  userPoolId: 'AUTHING_USER_POOL_ID'
});
</script>
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
