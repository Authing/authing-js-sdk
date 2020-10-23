```python
data = management_client.roles.delete_many([
  'ROLE1',
  'ROLE2'
])
totalCount = data['totalCount']
_list = data['list']
```

```csharp
var code = "code";
var message = await managementClient.Roles.DeleteMany(new string[] { code });
```

```java
ArrayList<String> list = new ArrayList<String>();
list.add("code");
CommonMessage result = managementClient.roles().deleteMany(list).execute();
```

```php
$message = $managementClient->roles()->deleteMany(["code"]);
```
