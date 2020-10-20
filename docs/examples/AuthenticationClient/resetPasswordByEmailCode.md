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
