```python
data = management_client.users.delete(
  userId="USERID1"
)
```

```csharp
var message = await managementClient.Users.Delete("userId");
```

```java
CommonMessage message = managementClient.users().delete("userId").execute();
```

```php
$message = $managementClient->users()->delete("userId");
```
