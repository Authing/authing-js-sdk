```python
data = management_client.users.add_roles(
   userId='USERID',
   roles=['ROLE1', 'ROLE2']
)
totalCount = data['totalCount'] # 最新的总数
users = data['list'] # 最新的角色列表
```

```csharp
var message = await managementClient.Users.AddRoles("userId", new string[] { "roleId" });
```

```java
ArrayList<String> roles = new ArrayList<>();
roles.add("role code");
managementClient.users().addRoles("userId", roles);
```

```php
$managementClient->users()->addRoles("userId", ["role code"]);
```
