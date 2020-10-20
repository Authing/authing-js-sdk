```python
user = authentication_client.update_profile({
    'nickname': 'Nick'
})
```

```c#
var user = await authenticationClient.UpdateProfile(new UpdateUserInput()
{
  Nickname = nickname,
});
```
