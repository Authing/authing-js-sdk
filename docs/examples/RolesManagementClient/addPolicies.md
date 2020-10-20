```python
data = management.roles.add_policies('ROLE', [
  'Policy1',
  'Policy2'
])
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var code = "code";
var policies = new string[] { "policyId" };
var message = await rolesManagementClient.Roles.AddPolicies(code, policies);
```
