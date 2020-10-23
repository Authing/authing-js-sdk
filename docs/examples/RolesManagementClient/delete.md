```python
data = management_client.roles.delete(code='code')
code = data['code'] # 200 表示成功
```

```csharp
var code = "code";
var message = await managementClient.Roles.Delete(code);
```

```java
CommonMessage message = managementClient.roles().delete("code").execute();
```

```php
$message = $managementClient->roles()->delete("code");
```
