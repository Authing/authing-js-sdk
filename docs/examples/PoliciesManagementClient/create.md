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

```
