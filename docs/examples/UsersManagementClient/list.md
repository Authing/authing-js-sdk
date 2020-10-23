```python
data = management_client.users.list()
totalCount = data['totalCount'] # 总数
users = data['list'] # 当前页
```

```csharp
var users = await managementClient.Users.List();
```

```java
PaginatedUsers users = managementClient.users().list().execute();
```

```php
$users = $managementClient->users()->paginate();
```
