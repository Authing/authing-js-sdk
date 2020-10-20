```python
authentication_client.reset_password_by_phone_code(
  phone="176xxxx7041",
  code="1234",
  new_password="passw0rd"
)
```

```c#
var phone = "phone number";
var code = "1234";
var password = "123456";
var message = await authenticationClient.ResetPasswordByPhoneCode(phone, code, password);
```
