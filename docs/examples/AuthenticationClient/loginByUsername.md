```python
username = 'bob'
user = authentication_client.register_by_username(
    username=username,
    password='passw0rd',
    auto_register=True, # 如果用户不存在，是否自动注册。
)
```

```csharp
var username = "username";
var password = "123456";
var user = await authenticationClient.LoginByUsername(username, password);
Console.WriteLine(user.Username);
```

```java
String username = "username";
String password = "123456";
User user = authenticationClient.loginByUsername(new LoginByUsernameInput(username, password)).execute();
```

```php
$username = "username";
$password = "123456";
$user = $authenticationClient->loginByUsername(new LoginByUsernameInput($username, $password));
```
