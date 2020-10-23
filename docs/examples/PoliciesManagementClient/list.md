```python
data = management_client.policies.list()
totalCount, _list = data['totalCount'], data['list']
# totalCount 总数
# _list 当前页列表
```

```csharp
var list = await managementClient.Policies.List();
```

```java
PaginatedPolicies roles = managementClient.policies().list().execute();
```

```php
$policies = $managementClient->policies()->paginate();
```
