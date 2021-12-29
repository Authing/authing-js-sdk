# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.


## [4.24.0](https://github.com/authing/authing.js/compare/v4.3.2...v4.24.0) (2021-12-28)


### Bug Fixes

* 社会化登录增加 tenant id ([6c4217e](https://github.com/authing/authing.js/commit/6c4217e))
* 生成二维码增加 extIdpConnId 参数 ([9b9724d](https://github.com/authing/authing.js/commit/9b9724d))
* 增加异常处理 ([120b7eb](https://github.com/authing/authing.js/commit/120b7eb))
* appHost ([5de1b68](https://github.com/authing/authing.js/commit/5de1b68))
* context2D.drawImage 调用之前先判断一下 qrcodeLogo 是否为 undefined ([4abe16d](https://github.com/authing/authing.js/commit/4abe16d))
* isLarkBrowser no return statement ([4736992](https://github.com/authing/authing.js/commit/4736992))
* remove objectToQueryString ([96b9e61](https://github.com/authing/authing.js/commit/96b9e61))
* remove slice(1) ([1338413](https://github.com/authing/authing.js/commit/1338413))
* revokeResource 实现 ([312f5f4](https://github.com/authing/authing.js/commit/312f5f4))
* serialize undefined ([f3ad567](https://github.com/authing/authing.js/commit/f3ad567))
* SocialAuthenticationClient.authorize add uuid option ([5ac4821](https://github.com/authing/authing.js/commit/5ac4821))
* type ([c0453e4](https://github.com/authing/authing.js/commit/c0453e4))
* type ([5bc01c1](https://github.com/authing/authing.js/commit/5bc01c1))
* typescript interface ([4eaa904](https://github.com/authing/authing.js/commit/4eaa904))
* version ([d9c011e](https://github.com/authing/authing.js/commit/d9c011e))


### Features

* 登录过某应用的用户数量查询 ([3a0cfeb](https://github.com/authing/authing.js/commit/3a0cfeb))
* 调用 /api/v2/qrcode/gene 接口增加 extIdpConnId 参数 ([36181b4](https://github.com/authing/authing.js/commit/36181b4))
* 兼容飞书社会化登录 ([806bd7b](https://github.com/authing/authing.js/commit/806bd7b))
* 接口返回 apiIdentifier ([e47f388](https://github.com/authing/authing.js/commit/e47f388))
* 添加取消授权资源接口 ([035bb4f](https://github.com/authing/authing.js/commit/035bb4f))
* 支持构造带租户 id 的 OIDC 认证 URL ([90a1467](https://github.com/authing/authing.js/commit/90a1467))
* add customData ([78772db](https://github.com/authing/authing.js/commit/78772db))
* add CustomData ([ecfe20d](https://github.com/authing/authing.js/commit/ecfe20d))
* add emailToken and phoneToken for register methods ([10c18ee](https://github.com/authing/authing.js/commit/10c18ee))
* add user filter ([27de54b](https://github.com/authing/authing.js/commit/27de54b))
* create github ci ([e4a10b8](https://github.com/authing/authing.js/commit/e4a10b8))
* EmailScene add VERIFY_CODE type ([bc0c291](https://github.com/authing/authing.js/commit/bc0c291))
* list user return identities ([97fd1b4](https://github.com/authing/authing.js/commit/97fd1b4))
* RolesManagementClient findUsers ([aa42640](https://github.com/authing/authing.js/commit/aa42640))
* updateProfile add phoneToken and emailToken ([2d84d10](https://github.com/authing/authing.js/commit/2d84d10))
* user identities add type ([7f36845](https://github.com/authing/authing.js/commit/7f36845))



### 4.21.9 (2021-07-23)


### Features

* 增加 trackSession ([ed7c056](https://github.com/authing/authing.js/commit/ed7c056))



### 4.21.8 (2021-07-22)


### Bug Fixes

* SocialAuthenticationClient 中 User 的类型 ([c376cc0](https://github.com/authing/authing.js/commit/c376cc0))
* SocialAuthenticationClient 中 User 的类型 ([64f5219](https://github.com/authing/authing.js/commit/64f5219))



### 4.21.7 (2021-07-22)


### Bug Fixes

* 变量名 ([1329d63](https://github.com/authing/authing.js/commit/1329d63))
* 部门列表 & 设置主部门 ([ba47380](https://github.com/authing/authing.js/commit/ba47380))
* 参数 ([fed3b5c](https://github.com/authing/authing.js/commit/fed3b5c))
* 参数格式 ([44ad2a1](https://github.com/authing/authing.js/commit/44ad2a1))
* 参数规范 ([8c79304](https://github.com/authing/authing.js/commit/8c79304))
* 查询某些数据为空时报错 ([301a5c6](https://github.com/authing/authing.js/commit/301a5c6))
* 登出接口 ([6cc004e](https://github.com/authing/authing.js/commit/6cc004e))
* 二维码过期可重试 ([ce0af43](https://github.com/authing/authing.js/commit/ce0af43))
* 函数名修改 ([924f744](https://github.com/authing/authing.js/commit/924f744))
* 角色、策略增加 namespace ([de5099b](https://github.com/authing/authing.js/commit/de5099b))
* 接口参数优化 ([3a3acd4](https://github.com/authing/authing.js/commit/3a3acd4))
* 类型错误 ([86c2a87](https://github.com/authing/authing.js/commit/86c2a87))
* 没传 URL ([aa40b12](https://github.com/authing/authing.js/commit/aa40b12))
* 默认中文 ([6ee4424](https://github.com/authing/authing.js/commit/6ee4424))
* 批量用户接口支持用户名、手机、邮箱、externalId ([3d8e727](https://github.com/authing/authing.js/commit/3d8e727))
* 批量用户接口支持用户名、手机、邮箱、externalId ([493cfcf](https://github.com/authing/authing.js/commit/493cfcf))
* 企业 mfa ([6c186be](https://github.com/authing/authing.js/commit/6c186be))
* 企业身份源 SDK ([896cfef](https://github.com/authing/authing.js/commit/896cfef))
* 企业身份源 SDK ([0b616a0](https://github.com/authing/authing.js/commit/0b616a0))
* 权限分组 SDK 完善 ([81f5b0e](https://github.com/authing/authing.js/commit/81f5b0e))
* 实体认证 SDK ([5fe8c65](https://github.com/authing/authing.js/commit/5fe8c65))
* 使用 externalId 搜索用户 ([d5b5505](https://github.com/authing/authing.js/commit/d5b5505))
* 替换 crypto 模块 ([5b70c13](https://github.com/authing/authing.js/commit/5b70c13))
* 微信网页授权不传 from_guard 参数 ([3455a61](https://github.com/authing/authing.js/commit/3455a61))
* 微信网页授权登录 ([71c0cc4](https://github.com/authing/authing.js/commit/71c0cc4))
* 修改参数名 ([1816c5f](https://github.com/authing/authing.js/commit/1816c5f))
* 应用列表 ([32f47fd](https://github.com/authing/authing.js/commit/32f47fd))
* 用户搜索支持角色和分组 ([1290e83](https://github.com/authing/authing.js/commit/1290e83))
* 暂时解决 isBrowser 问题 ([7477abe](https://github.com/authing/authing.js/commit/7477abe))
* 增加 baidu provider ([a7d4f55](https://github.com/authing/authing.js/commit/a7d4f55))
* 增加额外参数 ([9dc08c5](https://github.com/authing/authing.js/commit/9dc08c5))
* 增加密码检测接口，用户池详情接口使用 rest api ([2aaccf7](https://github.com/authing/authing.js/commit/2aaccf7))
* 支持多语言 ([ad4b18c](https://github.com/authing/authing.js/commit/ad4b18c))
* 支持分组和角色下搜索用户 ([2bb175a](https://github.com/authing/authing.js/commit/2bb175a))
* 注册协议 SDK ([73024d4](https://github.com/authing/authing.js/commit/73024d4))
* addNodeV2 ([b9933a8](https://github.com/authing/authing.js/commit/b9933a8))
* appDomain ([5bafbd9](https://github.com/authing/authing.js/commit/5bafbd9))
* Applications ([739f90b](https://github.com/authing/authing.js/commit/739f90b))
* Applications ([ac729bc](https://github.com/authing/authing.js/commit/ac729bc))
* Applications ([40ee6c9](https://github.com/authing/authing.js/commit/40ee6c9))
* Applications ([932e1c9](https://github.com/authing/authing.js/commit/932e1c9))
* bug ([28a0367](https://github.com/authing/authing.js/commit/28a0367))
* bug ([22794c2](https://github.com/authing/authing.js/commit/22794c2))
* change version to 4.8.2-alpha ([d94346b](https://github.com/authing/authing.js/commit/d94346b))
* checkLoggedIn use id_token.sub ([3ac7527](https://github.com/authing/authing.js/commit/3ac7527))
* ci ([f8d379d](https://github.com/authing/authing.js/commit/f8d379d))
* ci ([083c57b](https://github.com/authing/authing.js/commit/083c57b))
* ci ([c76bc7d](https://github.com/authing/authing.js/commit/c76bc7d))
* ci ([cda8423](https://github.com/authing/authing.js/commit/cda8423))
* ci ([d81d335](https://github.com/authing/authing.js/commit/d81d335))
* code 和 name 互换 ([5886259](https://github.com/authing/authing.js/commit/5886259))
* computedPasswordSecurityLevel ([78f0e62](https://github.com/authing/authing.js/commit/78f0e62))
* description 可不传 ([9d537b1](https://github.com/authing/authing.js/commit/9d537b1))
* disableAssignment ([de7feac](https://github.com/authing/authing.js/commit/de7feac))
* getSecurityLevel ([c5a413c](https://github.com/authing/authing.js/commit/c5a413c))
* handle GraphQL Client graphql request error ([505e941](https://github.com/authing/authing.js/commit/505e941))
* host ([9ff8cd6](https://github.com/authing/authing.js/commit/9ff8cd6))
* i18n ([4625065](https://github.com/authing/authing.js/commit/4625065))
* isAllowed 增加 namespace 参数 ([61c32bc](https://github.com/authing/authing.js/commit/61c32bc))
* jsencrypt 真的兼容 node ([6445623](https://github.com/authing/authing.js/commit/6445623))
* key ([98ee178](https://github.com/authing/authing.js/commit/98ee178))
* managementClient 添加拓展字段展示和修改功能 ([c8a542f](https://github.com/authing/authing.js/commit/c8a542f))
* manual ([7a278ff](https://github.com/authing/authing.js/commit/7a278ff))
* merge options ([248e076](https://github.com/authing/authing.js/commit/248e076))
* MFA 管理模块 ([535dcd9](https://github.com/authing/authing.js/commit/535dcd9))
* mfa 模板 ([2bcf7d8](https://github.com/authing/authing.js/commit/2bcf7d8))
* mfa 完善 ([05d0a88](https://github.com/authing/authing.js/commit/05d0a88))
* mfa 相关接口 ([031463b](https://github.com/authing/authing.js/commit/031463b))
* mfa 增加 code ([134d684](https://github.com/authing/authing.js/commit/134d684))
* namespaceCode => namespace ([631da1e](https://github.com/authing/authing.js/commit/631da1e))
* OrgManagementClient.listChildren remove orgId augument ([1197f1a](https://github.com/authing/authing.js/commit/1197f1a))
* policy return type ([45545f7](https://github.com/authing/authing.js/commit/45545f7))
* policy statement condition position ([bd62067](https://github.com/authing/authing.js/commit/bd62067))
* PolicyAssignmentTargetType 类型 ([9f8baa8](https://github.com/authing/authing.js/commit/9f8baa8))
* PrincipalManagementClient ([23db77a](https://github.com/authing/authing.js/commit/23db77a))
* QrCodeAuthenticationClient clearInterval on error ([de13ced](https://github.com/authing/authing.js/commit/de13ced))
* release 4.8.6 ([754ec57](https://github.com/authing/authing.js/commit/754ec57))
* release 4.8.7@alpha ([72dbe70](https://github.com/authing/authing.js/commit/72dbe70))
* remove browser ([1aee84b](https://github.com/authing/authing.js/commit/1aee84b))
* rename accessToken to token ([805bfd7](https://github.com/authing/authing.js/commit/805bfd7))
* return ([069bbbd](https://github.com/authing/authing.js/commit/069bbbd))
* roles listPolicy ([6730734](https://github.com/authing/authing.js/commit/6730734))
* sdk version ([8cdb757](https://github.com/authing/authing.js/commit/8cdb757))
* setLang ([b8539b2](https://github.com/authing/authing.js/commit/b8539b2))
* setUdvBatch ([597cfb4](https://github.com/authing/authing.js/commit/597cfb4))
* setUdvBatch 参数 ([727ad3b](https://github.com/authing/authing.js/commit/727ad3b))
* StatisticsManagementClient deal with null values ([a5f203d](https://github.com/authing/authing.js/commit/a5f203d))
* StatisticsManagementClient return totalCount ([d63d76d](https://github.com/authing/authing.js/commit/d63d76d))
* test case ([dc6fbf6](https://github.com/authing/authing.js/commit/dc6fbf6))
* type ([c23918b](https://github.com/authing/authing.js/commit/c23918b))
* typeof ([d1191d7](https://github.com/authing/authing.js/commit/d1191d7))
* udf label is nullable ([83697a0](https://github.com/authing/authing.js/commit/83697a0))
* unuse var ([83042e3](https://github.com/authing/authing.js/commit/83042e3))
* unuse var ([9a0507c](https://github.com/authing/authing.js/commit/9a0507c))
* upload to cdn ([b7d8e12](https://github.com/authing/authing.js/commit/b7d8e12))
* user 运行时类型定义 ([f338da5](https://github.com/authing/authing.js/commit/f338da5))
* user query ([7e5d28e](https://github.com/authing/authing.js/commit/7e5d28e))
* UserDefinedDataInput ([c678177](https://github.com/authing/authing.js/commit/c678177))
* users.listRoles catch user not exists ([992846a](https://github.com/authing/authing.js/commit/992846a))
* UsersManagementClient publicKey ([cc57211](https://github.com/authing/authing.js/commit/cc57211))
* version ([f4754cb](https://github.com/authing/authing.js/commit/f4754cb))
* version ([22d0adf](https://github.com/authing/authing.js/commit/22d0adf))
* withCustomData when user is undefined ([9e77955](https://github.com/authing/authing.js/commit/9e77955))


### Features

* 登录函数添加 context 参数 ([692a5d7](https://github.com/authing/authing.js/commit/692a5d7))
* 添加查询已归档用户接口 ([0569346](https://github.com/authing/authing.js/commit/0569346))
* 添加触发 ad 同步接口 ([7da1fb1](https://github.com/authing/authing.js/commit/7da1fb1))
* 添加触发组织机构手动同步接口 ([6c3b8e4](https://github.com/authing/authing.js/commit/6c3b8e4))
* 添加上传头像接口 ([d8f50a7](https://github.com/authing/authing.js/commit/d8f50a7))
* 通过资源 id 或者 code 获取资源详情 ([b0ca068](https://github.com/authing/authing.js/commit/b0ca068))
* 微信公众号关注登录 ([c5d4acb](https://github.com/authing/authing.js/commit/c5d4acb))
* 用户日志查询优化 ([3977127](https://github.com/authing/authing.js/commit/3977127))
* 用户搜索接口添加所在部门限制 ([0b94dc7](https://github.com/authing/authing.js/commit/0b94dc7))
* 增加 OIDC token 端点函数, 用户信息端点函数 ([fdd6813](https://github.com/authing/authing.js/commit/fdd6813))
* 支持 OAuth Token 端点, 用户信息端点 ([8e8bb67](https://github.com/authing/authing.js/commit/8e8bb67))
* 支持自定义 websocket 域名 ([6971d15](https://github.com/authing/authing.js/commit/6971d15))
* add and update udf related methods ([810e05d](https://github.com/authing/authing.js/commit/810e05d))
* add AuthenticationClient.listApplications and ApplicationsManagementClient ([52f99e9](https://github.com/authing/authing.js/commit/52f99e9))
* add bindEmail function ([ea163e6](https://github.com/authing/authing.js/commit/ea163e6))
* add enableAssignment and disableAssignment ([e5a9b21](https://github.com/authing/authing.js/commit/e5a9b21))
* add export org api ([d3a5ba3](https://github.com/authing/authing.js/commit/d3a5ba3))
* add externalId ([62992cd](https://github.com/authing/authing.js/commit/62992cd))
* add getNodeById ([19423e8](https://github.com/authing/authing.js/commit/19423e8))
* add listAuthorizedResources API ([c0cfa45](https://github.com/authing/authing.js/commit/c0cfa45))
* add loginBySubAccount ([b7d9295](https://github.com/authing/authing.js/commit/b7d9295))
* add policy condition ([756c86f](https://github.com/authing/authing.js/commit/756c86f))
* add role group org acl listAuthorizedResources method ([39808f2](https://github.com/authing/authing.js/commit/39808f2))
* add searchNodes ([74bb666](https://github.com/authing/authing.js/commit/74bb666))
* add unLinkAccount ([23a0b9f](https://github.com/authing/authing.js/commit/23a0b9f))
* add users.find api ([35c7ddc](https://github.com/authing/authing.js/commit/35c7ddc))
* add watch:browser ([d41e05e](https://github.com/authing/authing.js/commit/d41e05e))
* assign policy function add parameter inheritByChildren ([f8627c9](https://github.com/authing/authing.js/commit/f8627c9))
* AuthenticationClient add isUserExists ([591ea58](https://github.com/authing/authing.js/commit/591ea58))
* AuthenticationClient add listAuthorizedResources ([2998abd](https://github.com/authing/authing.js/commit/2998abd))
* authenticationClient.listDepartments ([6a7abee](https://github.com/authing/authing.js/commit/6a7abee))
* change params to customData ([9040537](https://github.com/authing/authing.js/commit/9040537))
* init AuthenticationClient with appHost ([0e9e20f](https://github.com/authing/authing.js/commit/0e9e20f))
* listUserActions add start and end ([9175955](https://github.com/authing/authing.js/commit/9175955))
* logout cas logout ([88b0125](https://github.com/authing/authing.js/commit/88b0125))
* optmize wxapp qrcode generate speed ([66cd18f](https://github.com/authing/authing.js/commit/66cd18f))
* Release v4.10.10 ([d9e108d](https://github.com/authing/authing.js/commit/d9e108d))
* release v4.15.7 ([acc1d02](https://github.com/authing/authing.js/commit/acc1d02))
* remove trailing slash ([fada8cd](https://github.com/authing/authing.js/commit/fada8cd))
* social and qrcode client add customData ([177bdf2](https://github.com/authing/authing.js/commit/177bdf2))
* SocialAuthenticationClient.authorize add options withIdentities ([50c0f5f](https://github.com/authing/authing.js/commit/50c0f5f))
* support customize http headers ([04e176c](https://github.com/authing/authing.js/commit/04e176c))
* supprt init with publicKey to optmize performance ([cf92f18](https://github.com/authing/authing.js/commit/cf92f18))
* updateAvatar to uploadAvatar ([8bb69b2](https://github.com/authing/authing.js/commit/8bb69b2))
* userpool add loginRequireEmailVerified ([26fa351](https://github.com/authing/authing.js/commit/26fa351))
* users.exists externalId ([db381d6](https://github.com/authing/authing.js/commit/db381d6))
* users.search, roles.listUsers and groups.listUsers add withCustomData parameter ([7833cdb](https://github.com/authing/authing.js/commit/7833cdb))
* UsersManagementClient add optional argument withCustomData to fetch user customData ([a60c913](https://github.com/authing/authing.js/commit/a60c913))
* UsersManagementClient create method add keepPassword options ([bc6ae99](https://github.com/authing/authing.js/commit/bc6ae99))
* UsersManagementClient roles related api ad namespace ([769e75b](https://github.com/authing/authing.js/commit/769e75b))



## 4.7.0 (2020-12-04)


### Features

* add PublicKeyManager ([9e33651](https://github.com/authing/authing.js/commit/9e33651))
* social login add autoExchangeUserInfo params ([5fd520d](https://github.com/authing/authing.js/commit/5fd520d))



### 4.6.7 (2020-12-03)


### Features

* social login add app_id ([e529d66](https://github.com/authing/authing.js/commit/e529d66))



### 4.6.6 (2020-12-03)


### Bug Fixes

* 提示友好 ([3b9177d](https://github.com/authing/authing.js/commit/3b9177d))
* 支持 tree-shaking ([f899e64](https://github.com/authing/authing.js/commit/f899e64))
* DeepPartial types ([4168dca](https://github.com/authing/authing.js/commit/4168dca))
* types error ([fa92359](https://github.com/authing/authing.js/commit/fa92359))


### Features

* Social Connection 判断事件是否来源于 Authing ([51b996b](https://github.com/authing/authing.js/commit/51b996b))



## 4.6.0 (2020-11-15)


### Bug Fixes

* 更改错误注释 ([1f75b01](https://github.com/authing/authing.js/commit/1f75b01))
* 跨域请求时带上 cookie ([255e334](https://github.com/authing/authing.js/commit/255e334))
* 通过 accessToken 初始化 ([5b367bf](https://github.com/authing/authing.js/commit/5b367bf))
* set target to es5 ([d3bf134](https://github.com/authing/authing.js/commit/d3bf134))
* update version ([4ab52b2](https://github.com/authing/authing.js/commit/4ab52b2))


### Features

* 使用 wx-axios 兼容小程序环境下的网络请求 ([1bb4de8](https://github.com/authing/authing.js/commit/1bb4de8))
* 适配小程序的 jsencrypt ([f3c7600](https://github.com/authing/authing.js/commit/f3c7600))
* 添加 loginByAd 方法 ([8fd9106](https://github.com/authing/authing.js/commit/8fd9106))
* 移除 lodash 和 jsonwebtoken 的依赖 ([4d257d3](https://github.com/authing/authing.js/commit/4d257d3))
* 移除对 graphql-request 的依赖 ([8e78694](https://github.com/authing/authing.js/commit/8e78694))
* 移除对 lodash 的依赖 ([cdb843d](https://github.com/authing/authing.js/commit/cdb843d))
* 允许自定义 encryptFunction httpClient graphqlClient ([c17540d](https://github.com/authing/authing.js/commit/c17540d))
* add SocialAuthenticationClient ([9462697](https://github.com/authing/authing.js/commit/9462697))
* allow customize tokenProvider ([29c71ba](https://github.com/authing/authing.js/commit/29c71ba))
* allow pass encryptFunction in options ([1ab6d2a](https://github.com/authing/authing.js/commit/1ab6d2a))
* checkLoginStatus 方法 token 可选 ([53fe1aa](https://github.com/authing/authing.js/commit/53fe1aa))
* crypto polifill ([d808a8f](https://github.com/authing/authing.js/commit/d808a8f))
* export checkLoggedIn ([c208475](https://github.com/authing/authing.js/commit/c208475))
