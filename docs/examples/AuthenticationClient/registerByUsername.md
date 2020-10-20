```python
email = 'test@example.com'
user = authenticationClient.register_by_email(
    email=email,
    password='passw0rd',
    profile={
      'nickname': 'Nick'
    }
)
```

```c#
var username = "test";
var password = "123456";
var user = await authenticationClient.RegisterByUsername(email, password);
Console.WriteLine(user.Username);
```
