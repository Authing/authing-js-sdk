```python
phone = '176xxxx7041'
user = authentication_client.login_by_phone_password(
    phone=phone,
    password='passw0rd',
)
```

```csharp
var phone = "phone number";
var password = "123456";
var user = await authenticationClient.LoginByPhonePassword(phone, password);
Console.WriteLine(user.Phone);
```

```java
String phone = "phone number";
String password = "123456";
User user = authenticationClient.loginByPhonePassword(new LoginByPhonePasswordInput(phone, password)).execute();
```

```php
$phone = "17611161550";
$password = "123456";
$user = $authenticationClient->loginByPhonePassword((new LoginByPhonePasswordInput($phone, $password)));
```
