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
