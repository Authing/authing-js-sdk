# 2.x 到 3.x

- 初始化方式和参数发生变化，新的初始化方式：

```js
let auth = new Authing({
  userPoolId: clientId,
  secret
});
```

注意 clientId 已经变成了 userPoolId，同时初始化时不需要再 `await new Authing`。

- 前端 SDK 禁止进行用户池管理操作，从而提升安全性。
