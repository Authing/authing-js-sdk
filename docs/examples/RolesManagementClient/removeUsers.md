```python
data = management.roles.remove_users('ROLE', [
  'USERID1',
  'USERID2'
])
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var code = "code";
var users = new string[] { "userId" };
var message = await managementClient.Roles.RemoveUsers(code, users);
```
