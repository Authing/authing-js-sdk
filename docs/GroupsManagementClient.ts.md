[[toc]]


## undefined

undefined

undefined().undefined()

> 获取分组列表


#### Arguments



#### Returns



#### Examples


      

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
      