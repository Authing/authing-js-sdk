[[toc]]


## list

获取分组列表

GroupsManagementClient().list(page, limit)

> 获取分组列表


#### Arguments

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### Returns

-  `Promise<DeepPartial<PaginatedGroups>>` 

#### Examples

```javascript
GroupsManagementClient().list(1, 10)
```
      

## detail

获取分组详情

GroupsManagementClient().detail(code)

> 获取分组详情


#### Arguments

- `code` \<string\> 分组唯一标志符 

#### Returns

-  `Promise<DeepPartial<Group>>` 分组详情

#### Examples

```javascript
GroupsManagementClient().detail('manager')
```
      

## create

创建分组

GroupsManagementClient().create(code, name, description)

> 创建分组


#### Arguments

- `code` \<string\> 分组唯一标志符 
- `name` \<string\> 分组名称 
- `description` \<string\> 描述 

#### Returns

-  `Promise<DeepPartial<Group>>` 

#### Examples

```javascript
GroupsManagementClient().create('group', '分组 xxx')
```
      

## update

修改分组

GroupsManagementClient().update(code, input)

> 修改分组


#### Arguments

- `code` \<string\> 分组唯一标志符 
- `input` \<Object\>  
- `input.name` \<string\> 新的名称 
- `input.description` \<string\> 新的描述信息 
- `input.newCode` \<string\> 新的唯一标志符 

#### Returns

-  `Promise<DeepPartial<Group>>` 

#### Examples

```javascript
GroupsManagementClient().update('group', {newCode: 'newcode'})
```
      

## delete

删除分组

GroupsManagementClient().delete(code)

> 删除分组


#### Arguments

- `code` \<string\> 分组唯一标志符 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
GroupsManagementClient().delete('rolea')
```
      

## deleteMany

批量删除分组

GroupsManagementClient().deleteMany(codeList)

> 批量删除分组


#### Arguments

- `codeList` \<string[]\> 分组唯一标志符列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
GroupsManagementClient().deleteMany(['groupa', 'groupb'])
```
      

## listUsers

获取分组用户列表

GroupsManagementClient().listUsers(code, page, limit)

> 获取分组用户列表


#### Arguments

- `code` \<string\> 分组唯一标志符 
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### Returns

-  `Promise<DeepPartial<PaginatedUsers>>` 

#### Examples

```javascript
GroupsManagementClient().listUsers(code)
```
      

## addUsers

添加用户

GroupsManagementClient().addUsers(code, userIds)

> 添加用户


#### Arguments

- `code` \<string\> 分组唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
GroupsManagementClient().addUsers(code, ['USERID1', 'USERID2'])
```
      

## removeUsers

移除用户

GroupsManagementClient().removeUsers(code, userIds)

> 移除用户


#### Arguments

- `code` \<string\> 分组唯一标志符 
- `userIds` \<string[]\> 用户 ID 列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
GroupsManagementClient().removeUsers(code, ['USERID1', 'USERID2'])
```
      