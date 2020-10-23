```python
# 关闭了“验证原有邮箱“选项
authentication_client.update_email(
  email="test1@example.com",
  emailCode="1234",
)

# 开启了“验证原有邮箱“选项
authentication_client.update_email(
  email="test1@example.com",
  emailCode="1234",
  oldEmail="test2@exmaple.com",
  oldEmailCode="1234"
)
```

```csharp
var newEmail = "new@example.com";
var emailCode = "1234"
await authenticationClient.UpdateEmail(newEmail, emailCode);
```

```java
String newEmail = "new@example.com";
String emailCode = "1234"
User user = authenticationClient.updateEmail(newEmail, emailCode).execute();
```

```php
$newEmail = "new@example.com";
$emailCode = "1234";
$user = $authenticationClient->updateEmail($newEmail, $emailCode);
```
