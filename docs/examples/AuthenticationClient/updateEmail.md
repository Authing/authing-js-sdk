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

```c#
var newEmail = "new@example.com";
var emailCOde = "1234"
await authenticationClient.UpdateEmail(newEmail, "1234");
```
