[[toc]]


# class RolesManagementClient

> 此模块用于管理 Authing 角色，可以进行角色的增删改查、角色添加/删除用户、角色添加/删除策略 等操作。

请使用以下方式使用该模块，而不要直接初始化该模块：
```javascript
import { ManagementClient } from "authing-js-sdk"
const managementClient = new ManagementClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
   secret: process.env.AUTHING_USERPOOL_SECRET,
   host: process.env.AUTHING_HOST
})
managementClient.roles.list // 获取角色列表
managementClient.roles.create // 创建角色
managementClient.roles.listUsers // 获取角色用户列表
```

## list

获取角色列表

RolesManagementClient().list(page, limit)

> 获取角色列表


#### Arguments

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### Returns

-  `Promise<DeepPartial<PaginatedRoles>>` 

#### Examples

```javascript
RolesManagementClient().list(2, 10)
```
      

## detail

获取角色详情

RolesManagementClient().detail(code)

> 获取角色详情


#### Arguments

- `code` \<string\> 角色唯一标志符 

#### Returns

-  `Promise<DeepPartial<Role>>` 角色详情

#### Examples

```javascript
RolesManagementClient().detail('manager')
```
      

## create

创建角色

RolesManagementClient().create(code, description)

> 创建角色


#### Arguments

- `code` \<string\> 角色唯一标志符 
- `description` \<string\> 描述 

#### Returns

-  `Promise<DeepPartial<Role>>` 

#### Examples

```javascript
RolesManagementClient().create('rolea', 'RoleA')
```
      

## update

修改角色

RolesManagementClient().update(code, input)

> 修改角色


#### Arguments

- `code` \<string\> 角色唯一标志符 
- `input` \<Object\>  
- `input.description` \<string\> 描述信息 
- `input.newCode` \<string\> 新的唯一标志符 

#### Returns

-  `Promise<DeepPartial<Role>>` 

#### Examples

```javascript
RolesManagementClient().update('rolea', {newCode: 'newcode'})
```
      

## delete

删除角色

RolesManagementClient().delete(code)

> 删除角色


#### Arguments

- `code` \<string\> 角色唯一标志符 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
RolesManagementClient().delete('rolea')
```
      

## deleteMany

批量删除角色

RolesManagementClient().deleteMany(codeList)

> 批量删除角色


#### Arguments

- `codeList` \<string[]\> 角色唯一标志符列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
RolesManagementClient().delete(['rolea'])
```
      

## listUsers

获取角色用户列表

RolesManagementClient().listUsers(code)

> 获取角色用户列表


#### Arguments

- `code` \<string\> 角色唯一标志符 

#### Returns

-  `Promise<DeepPartial<PaginatedUsers>>` 

#### Examples

```javascript
RolesManagementClient().listUsers(code)
```
      

## addUsers

添加用户

RolesManagementClient().addUsers(code, userIds)

> 添加用户


#### Arguments

- `code` \<string\> 角色唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
RolesManagementClient().addUsers(code, ['USERID1', 'USERID2'])
```
      

## removeUsers

移除用户

RolesManagementClient().removeUsers(code, userIds)

> 移除用户


#### Arguments

- `code` \<string\> 角色唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
RolesManagementClient().removeUsers(code, ['USERID1', 'USERID2'])
```
      

## listPolicies

获取角色策略列表

RolesManagementClient().listPolicies(code, page, limit)

> 获取角色策略列表


#### Arguments

- `code` \<string\> 角色唯一标志符 
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 页码个数 默认值为 : `10`。

#### Returns

-  `Promise<PaginatedPolicyAssignment>` 

#### Examples

```javascript
RolesManagementClient().listPolicies('codea', 1, 10)
```
      

## addPolicies

授权策略

RolesManagementClient().addPolicies(code, policies)

> 给角色授权策略策略


#### Arguments

- `code` \<string\> 角色唯一标志符 
- `policies` \<string[]\> 策略列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
RolesManagementClient().addPolicies('rolea', ['PolicyA', 'PolicyB'])
```
      

## removePolicies

角色移除策略

RolesManagementClient().removePolicies(code, policies)

> 角色移除策略


#### Arguments

- `code` \<string\> 角色唯一标志符 
- `policies` \<string[]\> 策略列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
RolesManagementClient().removePolicies('rolea', ['PolicyA', 'PolicyB'])
```
      