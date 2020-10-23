```python
authentication_client.reset_password_by_email_code(
  email="test@example.com",
  code="1234",
  new_password="passw0rd"
)
```

```csharp
var email = "test@example.com";
var code = "1234";
var password = "123456";
var message = await authenticationClient.ResetPasswordByEmailCode(email, code, password);
```

```java
String email = "test@example.com";
String code = "1234";
String password = "123456";
authenticationClient.resetPasswordByEmailCode(email, code, password).execute();
```

```php
$email = "test@example.com";
$code = "1234";
$newPassword = "123456";
$authenticationClient->resetPasswordByEmailCode($email, $code, $newPassword);
```
