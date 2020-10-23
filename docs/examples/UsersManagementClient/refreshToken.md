```python
data = management_client.users.refresh_token(
    userId="USERID"
)
token, iat, exp = data['token'], data['iat'], data['exp']
```

```csharp
var token = await managementClient.Users.RefreshToken("userId");
```

```java
RefreshToken token = managementClient.users().refreshToken("userId").execute();
```

```php
$message = $managementClient->users()->refreshToken("userId");
```
