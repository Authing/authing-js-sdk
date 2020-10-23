```python
is_allowed = management_client.acl.is_allowed(
    userId='USERID',
    resource='books:*',
    action='books:edit',
)
```

```csharp
var isAllowed = await managementClient.Acl.IsAllowed("user id", "action id", "resource id");
```

```java
boolean allowed = managementClient.acl().isAllowed("user id", "resource", "action").execute();
```

```php
$managementClient->acl()->isAllowed("user id", "action", "resource");
```
