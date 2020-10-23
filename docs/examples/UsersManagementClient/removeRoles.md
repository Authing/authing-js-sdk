```python
data = management_client.users.remove_roles(
   userId='USERID',
   roles=['ROLE1', 'ROLE2']
)
totalCount = data['totalCount'] # 最新的总数
users = data['list'] # 最新的角色列表
```

```csharp
var message = await managementClient.Users.RemoveRoles("userId", new string[] { "roleId" });
```

```java
ArrayList<String> roles = new ArrayList<>();
roles.add("role code");
CommonMessage message = managementClient.users().removeRoles("userId", roles).execute();
```

```php
$message = $managementClient->users()->removeRoles("userId", ["role code"]);
```
