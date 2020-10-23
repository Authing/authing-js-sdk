```python
# 允许某个用户操作某个角色
management_client.acl.allow(
    resource='books:123',
    action='books:edit',
    userId='USERID'
)

# 允许某个角色操作某个角色
management_client.acl.allow(
    resource='books:*',
    action='books:edit',
    role='ROLE'
)
```

```csharp
await managementClient.Acl.Allow("resource id", "role id");
```
