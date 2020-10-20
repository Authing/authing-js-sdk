```python
data = management_client.users.refresh_token(
    userId="USERID"
)
token, iat, exp = data['token'], data['iat'], data['exp']
```

```csharp
var token = await managementClient.Users.RefreshToken("userId");
```
