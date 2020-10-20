```python
data = management_client.users.detail(
  userIds=["USERID1", "USERID2"]
)
```

```csharp
var message = await managementClient.Users.DeleteMany(new string[] { "userId" });
```
