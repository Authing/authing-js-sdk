```python
udf = management.udf.set(
    targetType='USER', # 目标类型为用户
    key='school', # key 为 school
    dataType='STRING', # 数据类型为字符串
    label='学校', # 显示的 label 为学校
)

udf = management.udf.set(
    targetType='USER', # 目标类型为用户
    key='age', # key 为 age
    dataType='NUMBER', # 数据类型为数字
    label='年龄', # 显示的 label 为年龄
)
```

```csharp
var udf = await managementClient.Udf.Set(UdfTargetType.USER, "key", UdfDataType.STRING, "label");
```
