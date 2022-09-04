# Vue Quick Integration Authing Demo

<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<div align=center>
  <a href="https://forum.authing.cn/" target="_blank"><img src="https://img.shields.io/badge/chat-forum-blue" /></a>
  <a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-success" alt="License"></a>
</div>

**English** | [简体中文](./README.zh-CN.md)

## Introduction

You can use Authing to quickly integrate authentication capabilities for new or existing Vue applications. This demo will show you how to use the Authing Browser SDK to add authentication capabilities to your Vue application.


## Documentation

- [Vue quickly integrates Authing](https://docs.authing.cn/v2/en/quickstarts/spa/vue.html)
- [Node.js Express API Server Quick Start](https://docs.authing.cn/v2/en/quickstarts/apiServer/nodeJsExpress/)


## Authing Console Configuration

In the Authing Console's self-built application, modify your application settings:

- **Authentication Configuration**: configure the `Login Callback URL` to `https://localhost:3000`
- **Authorization Configuration**: `Authorization Flow` Select `authorization_code` and `refresh_token`
- **Authorization Configuration**: `Return Type` select `code`


## Fill in your app configuration

Go to the demo directory corresponding to the version of Vue you are using, and in the `/.env` configuration file, fill in your application configuration:


```bash
# App ID
VUE_APP_SDK_APPID = App ID

# App's authentication address
VUE_APP_SDK_DOMAIN = authentication address

# Login Callback URL
VUE_APP_SDK_REDIRECT_URI = Login Callback URL

# The permissions requested by the app to Authing, separated by spaces, 
# the default is 'openid profile' Permissions successfully obtained will 
# appear in the scope field of the Access Token
VUE_APP_SDK_SCOPE = openid profile order:read

# API for verifying that the Access Token has permission to access.
# For example: http://localhost:5000/api/protected
VUE_APP_RESOURCE_API = resource api
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
