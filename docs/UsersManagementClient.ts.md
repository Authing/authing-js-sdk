[[toc]]


# class UsersManagementClient

> Authing 用户管理模块。

此模块可以进行用户名了增删改查、搜索用户、刷新用户 token、管理用户分组、管理用户角色、管理用户策略授权等操作。

该模块发出的所有操作都将以管理员身份进行，所以不需要进行建议短信验证码等操作，如果你希望以普通用户的身份进行操作，请使用 AuthenticationClient 。

请使用以下方式使用该模块：
```javascript
import { ManagementClient } from "authing-js-sdk"
const managementClient = new ManagementClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
   secret: process.env.AUTHING_USERPOOL_SECRET,
   host: process.env.AUTHING_HOST
})

managementClient.users.list // 获取用户列表
managementClient.users.create // 创建用户
managementClient.users.listRoles // 获取用户角色列表
managementClient.users.search // 搜索用户
```

## create

创建用户

UsersManagementClient().create(userInfo)

> 此接口将以管理员身份创建用户，不需要进行手机号验证码检验等安全检测。


#### Arguments

- `userInfo` \<CreateUserInput\> 用户资料 
- `userInfo.email` \<string\> 邮箱，用户池内唯一 
- `userInfo.emailVerified` \<boolean\> 邮箱是否已验证 
- `userInfo.phone` \<string\> 手机号 
- `userInfo.phoneVerified` \<boolean\> 手机号是否验证 
- `userInfo.unionid` \<string\> 以社会化登录的用户该字段为用户在第三方社会化登录服务商中的唯一 ID 
- `userInfo.openid` \<string\> 微信登录返回的 openid 
- `userInfo.password` \<string\> 密码 
- `userInfo.registerSource` \<string\> 注册来源，可以多选 
- `userInfo.username` \<string\> 用户名 
- `userInfo.nickname` \<string\> 昵称 
- `userInfo.photo` \<string\> 头像 
- `userInfo.company` \<string\> 公司 
- `userInfo.browser` \<string\> 浏览器 
- `userInfo.loginsCount` \<number\> 登录次数，当你从原有用户系统迁移到 Authing 时可以设置该字段。 
- `userInfo.lastLogin` \<string\> 上次登录时间 
- `userInfo.lastIP` \<string\> 用户最近一次登录（或其他活动）的 IP 
- `userInfo.signedUp` \<string\> 注册时间 
- `userInfo.blocked` \<boolean\> 账号是否被禁用 
- `userInfo.isDeleted` \<boolean\> 标记账号是否被删除 
- `userInfo.device` \<string\> 设备 
- `userInfo.lastIP` \<string\> 最近登录的 IP 
- `userInfo.name` \<string\> Name 
- `userInfo.givenName` \<string\> Given Name 
- `userInfo.familyName` \<string\> Family Name 
- `userInfo.middleName` \<string\> Middle Name 
- `userInfo.profile` \<string\> Profile Url 
- `userInfo.preferredUsername` \<string\> Preferred Name 
- `userInfo.website` \<string\> 个人网站 
- `userInfo.gender` \<string\> 性别, F 表示男性、W 表示女性、未知表示 U 
- `userInfo.birthdate` \<string\> 生日 
- `userInfo.zoneinfo` \<string\> 时区 
- `userInfo.locale` \<string\> 语言 
- `userInfo.address` \<string\> 地址 
- `userInfo.streetAddress` \<string\> 街道地址 
- `userInfo.locality` \<string\>  
- `userInfo.region` \<string\> 地域 
- `userInfo.postalCode` \<string\> 邮编 
- `userInfo.city` \<string\> 城市 
- `userInfo.province` \<string\> 省份 
- `userInfo.country` \<string\> 国家 

#### Returns

-  `null` 

#### Examples

```javascript
const user = await managementClient.users.create({
   username: 'bob',
   password: 'passw0rd'
})
```
```javascript
const user = await managementClient.users.create({
   nickname: 'Nick',
   phone: '176xxxx7041', // 由于是管理员操作，所以检验手机号验证码, 如果你需要检验，请使用  AuthenticationClient
   loginsCount: 2 // 原有用户系统记录的用户登录次数
   signedUp: '2020-10-15T17:55:37+08:00' // 原有用户系统记录的用户注册时间
})
```
      

## undefined

undefined

UsersManagementClient().undefined(userId)

> 删除用户


#### Arguments

- `userId` \<string\>  

#### Returns

-  `null` 

#### Examples


      

## undefined

undefined

UsersManagementClient().undefined(userIds)

> 批量删除用户


#### Arguments

- `userIds` \<string[]\>  

#### Returns

-  `null` 

#### Examples


      

## undefined

undefined

UsersManagementClient().undefined(userId)

> 获取用户详情


#### Arguments

- `userId` \<string\>  

#### Returns

-  `null` 

#### Examples


      

## undefined

undefined

undefined().undefined()

> 通过 ID 批量查询用户


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

UsersManagementClient().undefined(page:, limit:, options)

> 获取用户池用户列表


#### Arguments

- `page:` \<null\> 页码数, 从 1 开始 
- `limit:` \<null\> 每页包含的用户数 
- `options` \<{ page: number, count: number }\>  

#### Returns

-  `null` 

#### Examples


      

## undefined

undefined

undefined().undefined()

> 修改用户资料


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined(query, options)

> 根据关键字搜索用户


#### Arguments

- `query` \<null\> 搜索内容 
- `options` \<null\> 选项 

#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 获取用户的分组列表


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 获取用户的角色列表


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 添加角色


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 移除角色


#### Arguments



#### Returns



#### Examples


      