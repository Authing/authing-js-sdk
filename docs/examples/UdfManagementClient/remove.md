```python
management.udf.remove(
    targetType='USER', # 目标类型为用户
    key='school'  # key 为 school
)
```

```csharp
var udf = await managementClient.Udf.Remove(UdfTargetType.USER, "key");
```
