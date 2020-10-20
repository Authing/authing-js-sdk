
# 管理角色

[[toc]]

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




## 创建角色

RolesManagementClient().create(code, description)

> 创建角色


#### 参数

- `code` \<string\> 角色唯一标志符 
- `description` \<string\> 描述 

#### 返回值

-  `Promise<DeepPartial<Role>>` 

#### 示例

```javascript
managementClient.roles.create('rolea', 'RoleA')
```
      

## 删除角色

RolesManagementClient().delete(code)

> 删除角色


#### 参数

- `code` \<string\> 角色唯一标志符 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
managementClient.roles.delete('rolea')
```
      

## 批量删除角色

RolesManagementClient().deleteMany(codeList)

> 批量删除角色


#### 参数

- `codeList` \<string[]\> 角色唯一标志符列表 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
managementClient.roles.delete(['rolea'])
```
      

## 修改角色

RolesManagementClient().update(code, input)

> 修改角色


#### 参数

- `code` \<string\> 角色唯一标志符 
- `input` \<Object\>  
- `input.description` \<string\> 描述信息 
- `input.newCode` \<string\> 新的唯一标志符 

#### 返回值

-  `Promise<DeepPartial<Role>>` 

#### 示例

```javascript
managementClient.roles.update('rolea', {newCode: 'newcode'})
```
      

## 获取角色详情

RolesManagementClient().detail(code)

> 获取角色详情


#### 参数

- `code` \<string\> 角色唯一标志符 

#### 返回值

-  `Promise<DeepPartial<Role>>` 角色详情

#### 示例

```javascript
managementClient.roles.detail('manager')
```
      

## 获取角色列表

RolesManagementClient().list(page, limit)

> 获取角色列表


#### 参数

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 返回值

-  `Promise<DeepPartial<PaginatedRoles>>` 

#### 示例

```javascript
managementClient.roles.list(2, 10)
```
      

## 获取角色用户列表

RolesManagementClient().listUsers(code)

> 获取角色用户列表


#### 参数

- `code` \<string\> 角色唯一标志符 

#### 返回值

-  `Promise<DeepPartial<PaginatedUsers>>` 

#### 示例

```javascript
managementClient.roles.listUsers(code)
```
      

## 添加用户

RolesManagementClient().addUsers(code, userIds)

> 添加用户


#### 参数

- `code` \<string\> 角色唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
managementClient.roles.addUsers(code, ['USERID1', 'USERID2'])
```
      

## 移除用户

RolesManagementClient().removeUsers(code, userIds)

> 移除用户


#### 参数

- `code` \<string\> 角色唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
managementClient.roles.removeUsers(code, ['USERID1', 'USERID2'])
```
      

## 获取角色策略列表

RolesManagementClient().listPolicies(code, page, limit)

> 获取角色策略列表


#### 参数

- `code` \<string\> 角色唯一标志符 
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 页码个数 默认值为 : `10`。

#### 返回值

-  `Promise<PaginatedPolicyAssignment>` 

#### 示例

```javascript
managementClient.roles.listPolicies('codea', 1, 10)
```
      

## 授权策略

RolesManagementClient().addPolicies(code, policies)

> 给角色授权策略策略


#### 参数

- `code` \<string\> 角色唯一标志符 
- `policies` \<string[]\> 策略列表 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
managementClient.roles.addPolicies('rolea', ['PolicyA', 'PolicyB'])
```
      

## 角色移除策略

RolesManagementClient().removePolicies(code, policies)

> 角色移除策略


#### 参数

- `code` \<string\> 角色唯一标志符 
- `policies` \<string[]\> 策略列表 

#### 返回值

-  `Promise<CommonMessage>` 

#### 示例

```javascript
managementClient.roles.removePolicies('rolea', ['PolicyA', 'PolicyB'])
```
      