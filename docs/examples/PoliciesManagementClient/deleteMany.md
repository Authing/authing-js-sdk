```python
management_client.policies.delete_many(['PolicyCode']])
```

```csharp
var message = await managementClient.Policies.DeleteMany(new string[] { code });
```

```java
ArrayList<String> list = new ArrayList<>();
list.add("PolicyCode");
CommonMessage result = managementClient.policies().deleteMany(list).execute();
```

```php
$message = $managementClient->policies()->deleteMany(["PolicyCode"]);
```
