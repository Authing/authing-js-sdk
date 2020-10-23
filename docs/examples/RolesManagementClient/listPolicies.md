```python
data = management_client.roles.list_policies('ROLE')
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var code = "code";
var policies = await managementClient.Roles.ListPolicies(code);
```

```java
PaginatedPolicyAssignments result = managementClient.roles().listPolicies("code").execute();
```

```php
$policies = $managementClient->roles()->listPolicies("code");
```
