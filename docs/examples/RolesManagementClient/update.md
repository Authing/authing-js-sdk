```python

# 修改基本信息
code = 'code'
desc = '描述'
role = management.roles.update(code=code, description=desc)

# 修改新 code
role = management.roles.update(code='old', newCode="new")
```

```csharp
var code = "code";
var desc = "update desc";
var role = await managementClient.Roles.Update(code, desc);
```
