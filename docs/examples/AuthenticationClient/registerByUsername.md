```python
username = 'bob'
user = authentication_client.register_by_username(
    username=username,
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
