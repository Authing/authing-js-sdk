```python
data = management_client.roles.list_users('ROLE')
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var code = "code";
var users = await managementClient.Roles.ListUsers(code);
```