```python
code = 'code'
management_client.roles.create(code=code)
```

```csharp
var code = "code";
var role = await managementClient.Roles.Detail(code);
```

```java
Role role = managementClient.roles().detail("code").execute();
```

```php
$role = $managementClient->roles()->detail("code");
```
