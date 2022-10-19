# Official SDK of Authing for Browser

<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<div align=center>
  <a href="https://badge.fury.io/js/@authing%web" target="_blank"><img src="https://badge.fury.io/js/@authing%2Fweb.svg" alt="npm version"></a>
  <a href="https://npmcharts.com/compare/@authing/web" target="_blank"><img src="https://img.shields.io/npm/dm/@authing/web" alt="download"></a>
  <a href="https://forum.authing.cn/" target="_blank"><img src="https://img.shields.io/badge/chat-forum-blue" /></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-success" alt="License"></a>
</div>

**English** | [简体中文](./README.zh-CN.md)

## Introduction

You can use the Authing Browser SDK to quickly integrate authentication capabilities for new or existing web applications

## Documentation

- [React quickly integrates Authing](https://docs.authing.cn/v2/quickstarts/spa/react.html)
- [Vue quickly integrates Authing](https://docs.authing.cn/v2/quickstarts/spa/vue.html)
- [Angular quickly integrates Authing](https://docs.authing.cn/v2/quickstarts/spa/angular.html)
- [Single Sign-On (SSO)](https://docs.authing.cn/v2/en/reference/sdk-for-sso-spa.html)


## Install

### NPM

```bash
$ npm install --save @authing/web
```

### Yarn

```bash
$ yarn add @authing/web
```

### Use script tag

```html
<script src="https://cdn.authing.co/packages/web/5.1.0/index.global.js"></script>
<script>
  const authing = new Authing({
    // Very important, please fill in carefully!
    // If the application enables SSO, you must write the "App Panel Address" for SSO here;
    // otherwise, fill in the application's "Subdomain".
    domain: "SSO App Panel Address",

    appId: "App ID",

    // The login callback address needs to be specified in the console
    // "Configuration - Authentication Configuration - Login Callback URL"
    redirectUri: "Login Callback URL",

    userPoolId: 'AUTHING_USER_POOL_ID'
  });
</script>
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
