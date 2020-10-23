```python
code = 'PolicyCode'
statements = [
    {
        'resource': 'book:123',
        'actions': ['books:read'],
        'effect': 'ALLOW'
    }
]
policy = management_client.policies.create(
    code=code,
    statements=statements
)
```

```csharp
var list = await managementClient.Policies.Create(code, new PolicyStatementInput[] {
    new PolicyStatementInput("book:123", new string[] { "book:edit" })
});
```

```java
ArrayList<PolicyStatementInput> statements = new ArrayList<>();
ArrayList<String> actions = new ArrayList<>();
actions.add("book:edit");
statements.add(new PolicyStatementInput("book:123", actions));
Policy policy = managementClient.policies().create("code", statements).execute();
```

```php
$code = "code";
$statements = [new PolicyStatementInput("book:123", ["book:edit"])];
$policy = $managementClient->policies()->create($code, $statements);
```
