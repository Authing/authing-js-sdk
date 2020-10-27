```python

```

```csharp

```

```java
Boolean exists = managementClient.users().exists(new IsUserExistsParam().withUsername("test")).execute();
```

```php
$exists = $managementClient->users()->exists((new IsUserExistsParam())->withUsername("test"));
```
