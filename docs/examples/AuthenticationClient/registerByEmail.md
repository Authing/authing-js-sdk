```python
email = 'test@example.com'
user = authentication_client.register_by_email(
    email=email,
    password='passw0rd',
    profile={
      'nickname': 'Nick'
    }
)
```

```csharp
var email = "test@example.com";
var password = "123456";
var user = await authenticationClient.RegisterByEmail(email, password);
Console.WriteLine(user.Email);
```
