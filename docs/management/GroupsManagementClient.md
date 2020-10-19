
# 分组管理

[[toc]]

> 此模块用于管理 Authing 分组，可以进行分组的增删改查、分组添加/删除用户、分组添加/删除策略 等操作。

请使用以下方式使用该模块，而不要直接初始化该模块：
```javascript
import { ManagementClient } from "authing-js-sdk"
const managementClient = new ManagementClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
   secret: process.env.AUTHING_USERPOOL_SECRET,
   host: process.env.AUTHING_HOST
})
managementClient.groups.list // 获取分组列表
managementClient.groups.create // 创建分组
managementClient.groups.listUsers // 获取分组用户列表
```

## 获取分组列表

GroupsManagementClient().list(page, limit)

> 获取分组列表


#### 参数

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 返回值

-  `Promise<DeepPartial<PaginatedGroups>>` 

#### 示例

```javascript
GroupsManagementClient().list(1, 10)
```
      

## 获取分组详情

GroupsManagementClient().detail(code)

> 获取分组详情


#### 参数

- `code` \<string\> 分组唯一标志符 

#### 返回值

-  `Promise<DeepPartial<Group>>` 分组详情

#### 示例

```javascript
GroupsManagementClient().detail('manager')
```
      

## 创建分组

GroupsManagementClient().create(code, name, description)

> 创建分组


#### 参数

- `code` \<string\> 分组唯一标志符 
- `name` \<string\> 分组名称 
- `description` \<string\> 描述 

#### 返回值

-  `Promise<DeepPartial<Group>>` 

#### 示例

```javascript
GroupsManagementClient().create('group', '分组 xxx')
```
      

## 修改分组

GroupsManagementClient().update(code, input)

> 修改分组


#### 参数

- `code` \<string\> 分组唯一标志符 
- `input` \<Object\>  
- `input.name` \<string\> 新的名称 
- `input.description` \<string\> 新的描述信息 
- `input.newCode` \<string\> 新的唯一标志符 

#### 返回值

-  `Promise<DeepPartial<Group>>` 

#### 示例

```javascript
GroupsManagementClient().update('group', {newCode: 'newcode'})
```
      

## 删除分组

GroupsManagementClient().delete(code)

> 删除分组


#### 参数

- `code` \<string\> 分组唯一标志符 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
GroupsManagementClient().delete('rolea')
```
      

## 批量删除分组

GroupsManagementClient().deleteMany(codeList)

> 批量删除分组


#### 参数

- `codeList` \<string[]\> 分组唯一标志符列表 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
GroupsManagementClient().deleteMany(['groupa', 'groupb'])
```
      

## 获取分组用户列表

GroupsManagementClient().listUsers(code, page, limit)

> 获取分组用户列表


#### 参数

- `code` \<string\> 分组唯一标志符 
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 返回值

-  `Promise<DeepPartial<PaginatedUsers>>` 

#### 示例

```javascript
GroupsManagementClient().listUsers(code)
```
      

## 添加用户

GroupsManagementClient().addUsers(code, userIds)

> 添加用户


#### 参数

- `code` \<string\> 分组唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
GroupsManagementClient().addUsers(code, ['USERID1', 'USERID2'])
```
      

## 移除用户

GroupsManagementClient().removeUsers(code, userIds)

> 移除用户


#### 参数

- `code` \<string\> 分组唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
GroupsManagementClient().removeUsers(code, ['USERID1', 'USERID2'])
```
      