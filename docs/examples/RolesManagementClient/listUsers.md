```python
data = management.roles.list_users('ROLE')
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var code = "code";
var users = await rolesManagementClient.Roles.ListUsers(code);
```
