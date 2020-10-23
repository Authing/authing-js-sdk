```python
data = management_client.roles.remove_policies('ROLE', [
  'Policy1',
  'Policy2'
])
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var code = "code";
var policies = new string[] { "policyId" };
var message = await managementClient.Roles.RemovePolicies(code, policies);
```

```java
ArrayList<String> policies = new ArrayList<>();
policies.add("policy id");
CommonMessage message = managementClient.roles().removePolicies("code", policies).execute();
```

```php
$message = $managementClient->roles()->removePolicies("code", ["policy id"]);
```
