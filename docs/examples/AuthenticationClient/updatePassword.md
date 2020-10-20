```python
# 由手机号、社会化登录等其他方式注册的，首次没有设置密码，old_password 留空。
authentication_client.update_password(
  new_password="passw0rd",
)

# 用户之前设置了密码
authentication_client.update_password(
  new_password="passw0rd",
  old_password="123456!"
)
```

```c#

```
