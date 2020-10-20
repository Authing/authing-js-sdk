```python
email = 'test@example.com'
user = authentication_client.register_by_email(
    email=email,
    password='passw0rd',
    auto_register=True, # 如果用户不存在，是否自动注册。
)
```

```c#
var email = "test@example.com";
var password = "123456";
var user = await authenticationClient.LoginByEmail(email, password);
Console.WriteLine(user.Email);
```
