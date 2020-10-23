```python
email = 'test@example.com'
user = authentication_client.register_by_email(
    email=email,
    password='passw0rd',
    auto_register=True, # 如果用户不存在，是否自动注册。
)
```

```csharp
var email = "test@example.com";
var password = "123456";
var user = await authenticationClient.LoginByEmail(email, password);
Console.WriteLine(user.Email);
```

```java
String email = "test@example.com";
String password = "123456";
User user = authenticationClient.loginByEmail(new LoginByEmailInput(email, password)).execute();
```

```php
$email = "test@test.com";
$password = "123456";
$user = $authenticationClient->loginByEmail(new LoginByEmailInput($email, $password));
```
