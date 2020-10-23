```python
code = 'code'
role = management_client.roles.create(code=code)
```

```csharp
var code = "code";
var role = await managementClient.Roles.Create(code, "test role");
```

```java
Role role = managementClient.roles().create(new CreateRoleParam("code")).execute();
```

```php
$role = $managementClient->roles()->create("code");
```
