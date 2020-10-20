```python

```

```c#
var phone = "phone number";
var password = "123456";
var user = await authenticationClient.LoginByPhonePassword(phone, password);
Console.WriteLine(user.Phone);
```
