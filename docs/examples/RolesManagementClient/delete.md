```python
data = management.roles.delete(code='code')
code = data['code'] # 200 表示成功
```

```csharp
var code = "code";
var message = await managementClient.Roles.Delete(code);
```
