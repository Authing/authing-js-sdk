[[toc]]


# class PoliciesManagementClient

> Authing 的访问控制与权限管理模型核心围绕着两个点来设计：**资源（Resource）**和**策略（Policy）**。策略定义了对某个（类）资源的某个（些）操作权限，将策略授权给用户（或角色），就能知道用户（或角色）是否具备对某个资源的某个操作具备操作权限。

此模块可以用于对策略进行增删改查，以及管理策略授权，策略可以被授予用户或角色。详细介绍请见 https://docs.authing.co/docs/access-control/index.html

请使用以下方式使用该模块：
```javascript
import { ManagementClient } from "authing-js-sdk"
const managementClient = new ManagementClient({
   userPoolId: process.env.AUTHING_USERPOOL_ID,
   secret: process.env.AUTHING_USERPOOL_SECRET,
   host: process.env.AUTHING_HOST
})
managementClient.policies.list // 获取策略列表
managementClient.policies.create // 创建策略
managementClient.policies.listUsers // 获取策略授权记录
```

## list

获取策略列表

PoliciesManagementClient().list(options)

> 获取策略列表


#### Arguments

- `options` \<Object\>  
- `options.page` \<number\>  默认值为 : `1`。
- `options.limit` \<number\>  默认值为 : `10`。
- `options.excludeDefault` \<boolean\> 是否排除系统默认资源 默认值为 : `true`。

#### Returns

-  `Promise<DeepPartial<PaginatedPolicies>>` 

#### Examples

```javascript
const { list, totalCount } = await management.policies.list({
  excludeDefault: false // 包含系统默认的策略
});
```
      

## detail

获取策略详情

PoliciesManagementClient().detail(code)

> 获取策略详情


#### Arguments

- `code` \<string\> 策略唯一标志

const policy = await management.policies.detail('CODE'); 

#### Returns

-  `Promise<DeepPartial<Policy>>` 

#### Examples


      

## create

添加策略

PoliciesManagementClient().create(code, 策略语句，详细格式与说明请见, description)

> 添加策略


#### Arguments

- `code` \<string\> 策略唯一标志 
- `策略语句，详细格式与说明请见` \<PolicyStatement[]\> https://docs.authing.co/docs/access-control/index.html 
- `description` \<string\> 描述 

#### Returns

-  `Promise<DeepPartial<Policy>>` 

#### Examples

```javascript
import { PolicyEffect } from "authing-js-sdk"

const statements = [
  {
    resource: 'books:123',
    effect: PolicyEffect.Allow,
    actions: ['books:edit']
  }
];

const policy = await management.policies.create(code, statements);
```
      

## update

修改策略

PoliciesManagementClient().update(code, updates)

> 修改策略，系统内置策略由 Authing 官方维护，不能修改和删除。


#### Arguments

- `code` \<string\> 策略唯一标志 
- `updates` \<Object\>  
- `updates.description` \<string\> 描述 
- `updates.statements` \<PolicyStatement[]\> 策略语句，详细格式与说明请见 https://docs.authing.co/docs/access-control/index.html 
- `updates.newCode` \<string\> 新的唯一标志，如果传入，需要保证其在用户池内是唯一的。 

#### Returns

-  `Promise<DeepPartial<Policy>>` 

#### Examples

```javascript
const policy = await management.policies.update('CODE', { newCode: 'NEWCODE' });
```
      

## delete

删除策略

PoliciesManagementClient().delete(code)

> 删除策略，系统内置策略由 Authing 官方维护，不能修改和删除。


#### Arguments

- `code` \<string\> 策略唯一标志 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
const { code, message } = await management.policies.delete("CODE"); // 通过 code 是否为 200 判断操作是否成功
```
      

## deleteMany

批量删除策略

PoliciesManagementClient().deleteMany(codeList)

> 批量删除策略，系统内置策略由 Authing 官方维护，不能修改和删除。


#### Arguments

- `codeList` \<string\> 策略唯一标志列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
const { code, message } = await management.policies.deleteMany(["CODE"]); // 通过 code 是否为 200 判断操作是否成功
```
      

## listAssignments

获取策略授权记录

PoliciesManagementClient().listAssignments(code, page, limit)

> 获取策略授权记录


#### Arguments

- `code` \<string\> 策略唯一标志 
- `page` \<number\>  默认值为 : `1`。
- `limit` \<number\>  默认值为 : `10`。

#### Returns

-  `Promise<PaginatedPolicyAssignment>` 

#### Examples

```javascript
const { totalCount, list } = await management.policies.listAssignments("CODE");

// list 数据示例

[
 {
   code: "PolicyCode", // 策略唯一标志
   targetType: 'USER', // 'USER' 表示用户, 'ROLE' 表示角色
   targetIdentifier: '5f8812866795cc0026352fc5' // 用户 ID 或者角色 code
 },
 {
   code: "PolicyCode", // 策略唯一标志
   targetType: 'ROLE', // 'USER' 表示用户, 'ROLE' 表示角色
   targetIdentifier: 'ROLE_CODE' // 用户 ID 或者角色 code
 }
]
```
      

## addAssignments

添加策略授权

PoliciesManagementClient().addAssignments(policies, targetType, targetIdentifiers)

> 添加策略授权，可以将策略授权给用户和角色，授权给角色的策略会被该角色下的所有用户继承 。此接口可以进行批量操作。


#### Arguments

- `policies` \<string[]\> 策略 code 列表 
- `targetType` \<PolicyAssignmentTargetType\> 可选值为 USER (用户) 和 ROLE (角色) 
- `targetIdentifiers` \<string[]\> 用户 id 列表和角色 code 列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
import { PolicyAssignmentTargetType } from "authing-js-sdk"

await management.policies.addAssignments(
  ["code1", "code2"],
  PolicyAssignmentTargetType.User,
  ['USERID']
);

await management.policies.addAssignments(
  ["code1", "code2"],
  PolicyAssignmentTargetType.Role,
  ['ROLE_CODE']
);
```
      

## removeAssignments

撤销策略授权

PoliciesManagementClient().removeAssignments(policies, targetType, targetIdentifiers)

> 撤销策略授权，此接口可以进行批量操作。


#### Arguments

- `policies` \<string[]\> 策略 code 列表 
- `targetType` \<PolicyAssignmentTargetType\> 可选值为 USER (用户) 和 ROLE (角色) 
- `targetIdentifiers` \<string[]\> 用户 id 列表和角色 code 列表 

#### Returns

-  `Promise<CommonMessage>` 

#### Examples

```javascript
import { PolicyAssignmentTargetType } from "authing-js-sdk"

await management.policies.removeAssignments(
  ["code1", "code2"],
  PolicyAssignmentTargetType.User,
  ['USERID']
);

await management.policies.removeAssignments(
  ["code1", "code2"],
  PolicyAssignmentTargetType.Role,
  ['ROLE_CODE']
);
```
      