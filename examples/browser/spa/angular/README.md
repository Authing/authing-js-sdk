# Angular Quick Integration Authing Demo

<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<div align=center>
  <a href="https://forum.authing.cn/" target="_blank"><img src="https://img.shields.io/badge/chat-forum-blue" /></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-success" alt="License"></a>
</div>

**English** | [简体中文](./README.zh-CN.md)

## Introduction

You can use Authing to quickly integrate authentication capabilities for new or existing Angular applications. This demo will show you how to use the Authing Browser SDK to add authentication capabilities to your Angular application.

## Documentation

- [Angular quickly integrates Authing](https://docs.authing.cn/v2/en/quickstarts/spa/angular.html)
- [Node.js Express API Server Quick Start](https://docs.authing.cn/v2/en/quickstarts/apiServer/nodeJsExpress/)


## Authing Console Configuration

In the Authing Console's self-built application, modify your application settings:

- **Authentication Configuration**: configure the `Login Callback URL` to `https://localhost:3000`
- **Authorization Configuration**: `Authorization Flow` Select `authorization_code` and `refresh_token`
- **Authorization Configuration**: `Return Type` select `code`


## Fill in your app configuration

In `/src/app/app.component.ts` around line 20, modify the configuration to your application configuration:

```js
private sdk = new Authing({
  // The authentication address of the application, 
  // for example: https://domain.authing.cn
  domain: 'authentication address',
  appId: 'AppId',
  // The login callback address needs to be specified in the 
  // console "Application Configuration - Login Callback URL"
  redirectUri: 'login callback url',
  // The permissions requested by the application to Authing, 
  // separated by spaces, the default is 'openid profile', 
  // the successfully obtained permissions will appear in 
  // the scope field of the Access Token
  scope: 'openid profile order:read'
});
```


## Install

```bash
$ yarn install
```


## Run

```bash
$ yarn start
```


## Contribution

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push -u origin my-new-feature)
- Create new Pull Request


## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Authing
