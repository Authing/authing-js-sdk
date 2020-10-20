```python
data = management_client.roles.list()
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var roles = await managementClient.Roles.List();
```
