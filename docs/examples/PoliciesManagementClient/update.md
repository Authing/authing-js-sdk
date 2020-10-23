```python
newStatements = [
    {
        'resource': 'book:123',
        'actions': ['books:read', 'books:update'],
        'effect': 'ALLOW'
    }
]
policy = management_client.policies.update(
    code='PolicyCode',
    statements=newStatements
)
```

```csharp
var policy = await managementClient.Policies.Update(code, description: "asd");
```

```java
ArrayList<PolicyStatementInput> newStatements = new ArrayList<>();
ArrayList<String> newActions = new ArrayList<>();
newActions.add("book:edit");
newStatements.add(new PolicyStatementInput("book:123", newActions));
Policy policy = managementClient.policies().update(code, newStatements, "desc").execute();
```

```php
$code = "code";
$newStatements = [new PolicyStatementInput("book:123", ["book:edit"])];
$policy = $managementClient->policies()->update(code, $newStatements);
```
