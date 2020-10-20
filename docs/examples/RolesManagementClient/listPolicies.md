```python
data = management.roles.list_policies('ROLE')
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var code = "code";
var policies = await managementClient.Roles.ListPolicies(code);
```
