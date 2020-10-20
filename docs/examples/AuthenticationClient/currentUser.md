```python
# 之前调用过登录或者通过 access_token 初始化
user = authentication_client.get_current_user()
```

```c#
var user = await authenticationClient.CurrentUser();
Console.WriteLine(user.Phone);
```
