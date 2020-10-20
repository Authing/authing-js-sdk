```python
authentication_client.send_email(
  email="test@example.com",
  scene="RESET_PASSWORD",
)
```

```csharp
using Authing.ApiClient.Types;
var message = await authenticationClient.SendEmail("test@example.com", EmailScene.RESET_PASSWORD);
```
