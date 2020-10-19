
# 注册白名单管理

[[toc]]

> 为你的用户池配置一个注册白名单，类似于邀请注册规则，开启后，只有白名单里的用户才能进行注册。 Authing 目前支持的白名单方式有手机号、邮箱、用户名。

此模块可以用于对注册白名单进行管理。

请使用以下方式使用该模块：
```javascript
import { ManagementClient } from "authing-js-sdk"
const managementClient = new ManagementClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
   secret: process.env.AUTHING_USERPOOL_SECRET,
   host: process.env.AUTHING_HOST
})
managementClient.whitelist.list // 获取注册白名单记录
managementClient.whitelist.add // 添加白名单记录
managementClient.whitelist.remove // 移除白名单记录
```

## 获取白名单记录

WhitelistManagementClient().list(type)

> 获取白名单记录


#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。 

#### 返回值

-  `Promise<WhiteList[]>` 

#### 示例

```javascript
import { WhitelistType } from "authing-js-sdk"
const list = await management.whitelist.list(WhitelistType.Email);
```
      

## 添加白名单

WhitelistManagementClient().add(type, list)

> 添加白名单


#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。 
- `list` \<string[]\> 白名单列表，请注意邮箱不区分大小写。 

#### 返回值

-  `Promise<WhiteList[]>` 

#### 示例

```javascript
await management.whitelist.add(WhitelistType.Email, 'a@example.com');
```
      

## 移除白名单

WhitelistManagementClient().remove(type, list)

> 移除白名单


#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。 
- `list` \<string[]\> 白名单列表，请注意邮箱不区分大小写。 

#### 返回值

-  `Promise<WhiteList[]>` 

#### 示例

```javascript
await management.whitelist.remove(WhitelistType.Email, 'a@example.com');
```
      

## 开启白名单

WhitelistManagementClient().enable(type)

> 开启白名单


#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。 

#### 返回值



#### 示例

```javascript
// 添加白名单

import { WhitelistType } from "authing-js-sdk"
await management.whitelist.enable(WhitelistType.Email);
await management.whitelist.add(WhitelistType.Email, [‘a@wxample.com’]);

// 使用不在白名单内的账号注册，不提示无法注册。

await authing.registerByEmail(email, 'b@example.com');
```
      

## 关闭白名单

WhitelistManagementClient().disable(type)

> 关闭白名单


#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。 

#### 返回值



#### 示例


      