```python
data = management_client.users.list_groups()
totalCount = data['totalCount'] # 总数
users = data['list'] # 当前页
```

```csharp

```

```java
managementClient.users().listGroups("userId").execute();
```

```php
$list = $managementClient->users()->listGroups("userId");
```
