## 运行测试用例

1. 添加配置文件 `.env`

```
AUTHING_USERPOOL_ID=5fe2005c10f750726160a04f
AUTHING_USERPOOL_SECRET=818892297020b628eb5d75144db32146
AUTHING_HOST=https://core.authing.cn
```

1. 执行 yarn watch

2. 运行全部测试用例

```
npx ava build/main/lib/**/*.spec.js
```

3. 运行单个文件测试用例

```
npx ava build/main/lib/management/RolesManagementClient.spec.js
```
