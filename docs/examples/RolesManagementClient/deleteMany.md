```python
data = management.roles.delete_many([
  'ROLE1',
  'ROLE2'
])
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var code = "code";
var message = await managementClient.Roles.DeleteMany(new string[] { code });
```
