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

```csharp
var username = "test";
var password = "123456";
var user = await authenticationClient.RegisterByUsername(email, password);
Console.WriteLine(user.Username);
```

```java
String username = "test";
String password = "123456";
User user = authenticationClient.registerByUsername(new RegisterByUsernameInput(username, password)).execute();
```

```php
$username = "username";
$password = "123456";
$user = $authenticationClient->registerByUsername(new RegisterByUsernameInput($username, $password));
```
