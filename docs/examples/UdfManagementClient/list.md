```python
udfs = management.udf.list(
  targetType="USER" # 目标类型为用户
)
```

```csharp
var udfs = await managementClient.Udf.List(UdfTargetType.USER);
```

```java
List<UserDefinedField> list = managementClient.udf().list(UdfTargetType.USER).execute();
```

```php
$udfs = $managementClient->udf()->paginate(UDFTargetType::USER);
```
