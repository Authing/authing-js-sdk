```python
phone = '176xxxx7041'
# 手机号验证码登录，如果用户不存在会自动创建账号
user = authentication_client.login_by_phone_code(
    phone=phone,
    code='1234',
)
```

```c#
var phone = "phone number";
var code = "1234";
var user = await authenticationClient.LoginByPhoneCode(phone, code);
Console.WriteLine(user.Phone);
```
