```python
data = management_client.users.list_roles()
totalCount = data['totalCount'] # 总数
users = data['list'] # 角色列表
```

```csharp
var roles = await managementClient.Users.ListRoles("userId");
```

```java
PaginatedRoles roles = managementClient.users().listRoles("userId").execute();
```

```php
$roles = $managementClient->users()->listRoles("userId");
```
