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

```java
authenticationClient.sendEmail("test@example.com", EmailScene.RESET_PASSWORD).execute();
```

```php
$email = "test@example.com";
$authenticationClient->sendEmail($email, EmailScene::RESET_PASSWORD);
```
