# Contribute to the Authing JavaScript/Node.JS SDK

[Authing 领先的身份认证云 | 云端身份认证服务 - Authing.cn](authing.js)

## 编码注意事项：

1. SDK 函数中不用使用 `async` 函数，请使用 `Promise`。
2. 函数文件请使用 `export default`

示例：
```javascript
export default function createOrg(input) {
  // ...
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "createOrg",
      query,
      variables: {
        input
      }
    }).then(res => {
      res.tree = buildTree(_.cloneDeep(res.nodes))
      return res
    })
  })
}
```
