```python
data = management_client.users.detail(
  userIds=["USERID1", "USERID2"]
)
```

```csharp
var message = await managementClient.Users.DeleteMany(new string[] { "userId" });
```

```java
ArrayList<String> userIds = new ArrayList<>();
userIds.add("userId");
CommonMessage message = managementClient.users().deleteMany(userIds).execute();
```

```php
$message = $managementClient->users()->deleteMany(["userId"]);
```
