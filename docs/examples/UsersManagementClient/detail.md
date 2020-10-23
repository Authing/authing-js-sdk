```python
data = management_client.users.detail(
  userId="USERID"
)
```

```csharp
var user = await managementClient.Users.Detail("userId");
```

```java
User result = managementClient.users().detail("userId").execute();
```

```php
$user = $managementClient->users()->detail("userId");
```
