```python
phone = '176xxxx7041'
user = authentication_client.register_by_phone_code(
    phone=phone,
    code='1234',
    password='passw0rd',
    profile={
      'nickname': 'Nick'
    }
)
```

```csharp
var phone = "phone number";
var code = "1234";
var password = "123456";
var user = await authenticationClient.RegisterByPhoneCode(phone, code, password);
Console.WriteLine(user.Phone);
```

```java
String phone = "phone number";
String code = "1234";
String pasword = "123456"
User user = authenticationClient.registerByPhoneCode(new RegisterByPhoneCodeInput(phone, code).withPassword(password)).execute();
```

```php
$phone = "phone number";
$code = "1234";
$password = "123456";
$user = $authenticationClient->registerByPhoneCode((new RegisterByPhoneCodeInput($phone, $code))->withPassword($password));
```
