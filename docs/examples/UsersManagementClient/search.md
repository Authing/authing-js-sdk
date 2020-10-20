```python
query = 'Bob'
data = management.users.search(query=query)
totalCount = data['totalCount'] # 总数
users = data['list'] # 角色列表
```

```csharp
var users = await managementClient.Users.Search("test");
```
