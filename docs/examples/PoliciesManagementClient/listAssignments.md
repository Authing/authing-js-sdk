```python
data = management_client.policies.list_assignments(
    code='PolicyCode'
)
totalCount, _list = data['totalCount'], data['list']
# totalCount 总数
# _list 当前页列表
```

```csharp
var list = await managementClient.Policies.ListAssignments(code);
```
