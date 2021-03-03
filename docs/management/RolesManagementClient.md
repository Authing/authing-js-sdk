
# 管理角色

[[toc]]

> 此模块用于管理 Authing 角色，可以进行角色的增删改查、角色添加/删除用户、角色添加/删除策略 等操作。



请使用以下方式使用该模块，而不要直接初始化该模块：
```javascript
import { ManagementClient } from "authing-js-sdk"
const managementClient = new ManagementClient({
   userPoolId: "YOUR_USERPOOL_ID",
   secret: "YOUR_USERPOOL_SECRET",
})
managementClient.roles.list // 获取角色列表
managementClient.roles.create // 创建角色
managementClient.roles.listUsers // 获取角色用户列表
```




## 创建角色

RolesManagementClient().create(code)

> 创建角色


#### 参数

- `code` \<string\> 角色唯一标志符 
- `options.description` \<string\> 描述 
- `options.namespace` \<string\> 该角色所在的 namespace，默认为 default 

#### 示例

```javascript
managementClient.roles.create('rolea', 'RoleA')
```

#### 返回值

-  `Promise<DeepPartial<Role>>` 


      

## 删除角色

RolesManagementClient().delete(code, namespace)

> 删除角色


#### 参数

- `code` \<string\> 角色唯一标志符 
- `namespace` \<string\> 角色所属的 Namespace code，默认值为 'default' 

#### 示例

```javascript
managementClient.roles.delete('rolea')
```

#### 返回值

-  `Promise<CommonMessage>` 


      

## 批量删除角色

RolesManagementClient().deleteMany(codeList, namespace)

> 批量删除角色


#### 参数

- `codeList` \<string[]\> 角色唯一标志符列表 
- `namespace` \<string\> 角色所属的 Namespace，默认值为 'default' 

#### 示例

```javascript
managementClient.roles.delete(['rolea'])
```

#### 返回值

-  `Promise<CommonMessage>` 


      

## 修改角色

RolesManagementClient().update(code, options)

> 修改角色


#### 参数

- `code` \<string\> 角色唯一标志符 
- `options` \<Object\>  
- `options.description` \<string\> 描述信息 
- `options.newCode` \<string\> 新的唯一标志符 
- `options.namespace` \<string\> 角色所属的 Namespace，默认值为 'default' 

#### 示例

```javascript
managementClient.roles.update('rolea', {newCode: 'newcode'})
```

#### 返回值

-  `Promise<DeepPartial<Role>>` 


      

## 获取角色详情

RolesManagementClient().detail(code, namespace)

> 获取角色详情


#### 参数

- `code` \<string\> 角色唯一标志符 
- `namespace` \<string\> 角色所属的 Namespace，默认值为 'default' 

#### 示例

```javascript
`
managementClient.roles.detail('manager')
```

#### 返回值

-  `Promise<DeepPartial<Role>>` 角色详情


      

## 获取角色列表

RolesManagementClient().list(options)

> 获取角色列表


#### 参数

- `options` \<Object\>  
- `options.page` \<number\> 页码数 默认值为 : `1`。
- `options.limit` \<number\> 每页个数 默认值为 : `10`。
- `options.namespace` \<string\> 角色所属的 Namespace，默认值为 'default' 

#### 示例

```javascript
managementClient.roles.list(2, 10)
```

#### 返回值

-  `Promise<DeepPartial<PaginatedRoles>>` 


      

## 获取角色用户列表

RolesManagementClient().listUsers(code, namespace)

> 获取角色用户列表


#### 参数

- `code` \<string\> 角色唯一标志符 
- `namespace` \<string\> 角色所属的 Namespace，默认值为 'default' 

#### 示例

```javascript
managementClient.roles.listUsers(code)
```

#### 返回值

-  `Promise<DeepPartial<PaginatedUsers>>` 


      

## 添加用户

RolesManagementClient().addUsers(code, userIds, namespace)

> 添加用户


#### 参数

- `code` \<string\> 角色唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 
- `namespace` \<string\> 角色所属的 Namespace，默认值为 'default' 

#### 示例

```javascript
managementClient.roles.addUsers(code, ['USERID1', 'USERID2'])
```

#### 返回值

-  `Promise<CommonMessage>` 


      

## 移除用户

RolesManagementClient().removeUsers(code, userIds, namespace)

> 移除用户


#### 参数

- `code` \<string\> 角色唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 
- `namespace` \<string\> 角色所属的 Namespace，默认值为 'default' 

#### 示例

```javascript
managementClient.roles.removeUsers(code, ['USERID1', 'USERID2'])
```

#### 返回值

-  `Promise<CommonMessage>` 


      

## 获取角色策略列表

RolesManagementClient().listPolicies(code, page, limit)

> 获取角色策略列表


#### 参数

- `code` \<string\> 角色唯一标志符 
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 页码个数 默认值为 : `10`。

#### 示例

```javascript
managementClient.roles.listPolicies('codea', 1, 10)
```

#### 返回值

-  `Promise<PaginatedPolicyAssignments>` 


      

## 授权策略

RolesManagementClient().addPolicies(code, policies)

> 给角色授权策略策略


#### 参数

- `code` \<string\> 角色唯一标志符 
- `policies` \<string[]\> 策略列表 

#### 示例

```javascript
managementClient.roles.addPolicies('rolea', ['PolicyA', 'PolicyB'])
```

#### 返回值

-  `Promise<CommonMessage>` 


      

## 角色移除策略

RolesManagementClient().removePolicies(code, policies)

> 角色移除策略


#### 参数

- `code` \<string\> 角色唯一标志符 
- `policies` \<string[]\> 策略列表 

#### 示例

```javascript
managementClient.roles.removePolicies('rolea', ['PolicyA', 'PolicyB'])
```

#### 返回值

-  `Promise<CommonMessage>` 


      