```python

# 修改基本信息
code = 'code'
desc = '描述'
role = management_client.roles.update(code=code, description=desc)

# 修改新 code
role = management_client.roles.update(code='old', newCode="new")
```

```csharp
var code = "code";
var desc = "update desc";
var role = await managementClient.Roles.Update(code, desc);
```

```java
Role role = rolesManagementClient.roles().update(new UpdateRoleParam("code").withDescription("desc")).execute();
```

```php
$role = $managementClient->roles()->update("code", "desc");
```
