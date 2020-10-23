```python
management_client.policies.remove_assignments(
    policies=['PolicyCode'],
    targetType='ROLE',
    targetIdentifiers=['RoleCode']
)
```

```csharp
var list = await managementClient.Policies.RemoveAssignments(new string[] { code }, PolicyAssignmentTargetType.USER, new string[] { userId });
```

```java
ArrayList<String> policies = new ArrayList<>();
policies.add("policy code");

ArrayList<String> targetIdentifiers = new ArrayList<>();
targetIdentifiers.add("userId");

managementClient.policies().removeAssignments(policies, PolicyAssignmentTargetType.USER, targetIdentifiers).execute();
```

```php
$managementClient->policies()->removeAssignments(["policy code"], PolicyAssignmentTargetType::USER, ["userId"]);
```
