```python
# 检查任意 token 的有效状态
data = authentication.check_login_status(token="TOKEN")

# 之前调用过登录或者通过 access_token 初始化
# 检查当前用户的登录状态
data = authentication.check_login_status()
```

```csharp
var status = await authenticationClient.CheckLoginStatus();
Console.WriteLine(status.code == 200);
```
