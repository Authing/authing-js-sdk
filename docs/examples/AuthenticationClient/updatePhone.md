```python
# 关闭了“验证原有手机号“选项
authentication_client.update_email(
  phone="test1@example.com",
  phoneCode="1234",
)

# 开启了“验证原有手机号“选项
authentication_client.update_email(
  phone="test1@example.com",
  phoneCode="1234",
  oldPhone="test2@exmaple.com",
  oldPhoneCode="1234"
)
```

```csharp
await authenticationClient.UpdatePhone("phone number", "1234");
```

```java
User user = authenticationClient.updatePhone("phone number", "1234").execute();
```

```php
$user = $authenticationClient->updatePhone("new phone number", "1234", "old phone number", "1234");
```
