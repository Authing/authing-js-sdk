```python
data = management_client.users.batch(
  userIds=["USERID1", "USERID2"]
)
```

```csharp
var users = await managementClient.Users.Batch(new string[] { "userId" });
```

```java
ArrayList<String> userIds = new ArrayList<>();
userIds.add("userId");
List<User> users = managementClient.users().batch(userIds).execute();
```

```php
$users = $managementClient->users()->batch(["userId"]);
```
