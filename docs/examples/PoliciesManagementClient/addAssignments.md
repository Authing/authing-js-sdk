```python
management_client.policies.add_assignments(
    policies=['PolicyCode'],
    targetType='USER', # 授权给用户
    targetIdentifiers=['USERID'] # 用户的 ID
)

management_client.policies.add_assignments(
    policies=['PolicyCode'],
    targetType='ROLE', # 授权给角色
    targetIdentifiers=['PolicyCode'] # 角色的唯一标志
)
```

```csharp
var list = await managementClient.Policies.AddAssignments(new string[] { code }, PolicyAssignmentTargetType.USER, new string[] { userId });
```

```java
ArrayList<String> policies = new ArrayList<>();
policies.add("policy code");

ArrayList<String> targetIdentifiers = new ArrayList<>();
targetIdentifiers.add("userId");

managementClient.policies().addAssignments(policies, PolicyAssignmentTargetType.USER, targetIdentifiers).execute();
```

```php
$managementClient->policies()->addAssignments(["policy code"], PolicyAssignmentTargetType::USER, ["userId"]);
```
