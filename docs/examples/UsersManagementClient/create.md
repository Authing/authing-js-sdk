```python
user = management_client.users.create(
  userInfo={
    'username': 'bob',
    'password': '123456',
    'phone': '176xxxx7041', # 由于是管理员操作，所以检验手机号验证码, 如果你需要检验，请使用  AuthenticationClient
    'nickname': 'Nick',
    'loginsCount': 2, # 原有用户系统记录的用户登录次数
    'signedUpd': '2020-10-15T17:55:37+08:00', # 原有用户系统记录的用户注册时间
})
```

```csharp
```
