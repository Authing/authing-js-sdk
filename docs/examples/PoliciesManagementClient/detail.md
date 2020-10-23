```python
code = 'PolicyCode'
policy = management_client.policies.detail(code)
```

```csharp
var policy = await managementClient.Policies.Detail(code);
```

```java
Policy policy = managementClient.policies().detail("PolicyCode").execute();
```

```php
$policy = $managementClient->policies()->detail($policy->code);
```
