```python
user = authentication_client.update_profile({
    'nickname': 'Nick'
})
```

```csharp
var user = await authenticationClient.UpdateProfile(new UpdateUserInput()
{
  Nickname = nickname,
});
```

```java
User user = authenticationClient.updateProfile(new UpdateUserInput().withNickname("nickname")).execute();
```

```php
$user = $authenticationClient->updateProfile((new UpdateUserInput())->withNickname("nickname"));
```
