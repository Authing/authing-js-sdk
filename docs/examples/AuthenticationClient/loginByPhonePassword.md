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
