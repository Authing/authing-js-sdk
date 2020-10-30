
返回的数据是一个二维数组，内部数组的第一个元素（`type` 为 `org`）为此节点所属组织机构的信息，后面的元素（`type` 为 `node`）表示该用户所在节点的完整路径。

如下面的示例数据中，用户属于下面三个组织机构节点：

- 组织机构 ID 5f9bf36b8eda1849a2a21c46，所属部门为 `非凡科技` 。
- 组织机构 ID 5f9bf336d4fc39774036a98c，所属部门为 `锤子科技/研发/后端/Java 工程师` 。
- 组织机构 ID 5f9bf336d4fc39774036a98c，所属部门为 `锤子科技/运营` 。

```json
[
  [
    {
      "type": "org",
      "id": "5f9bf36b8eda1849a2a21c46",
      "createdAt": "2020-10-30T11:05:15.747Z",
      "updatedAt": "2020-10-30T11:05:15.781Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "rootNodeId": "5f9bf36bae0366a625533e83",
      "logo": null
    },
    {
      "type": "node",
      "id": "5f9bf36bae0366a625533e83",
      "createdAt": "2020-10-30T11:05:15.757Z",
      "updatedAt": "2020-10-30T12:21:08.937Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "5f9bf36b8eda1849a2a21c46",
      "name": "非凡科技",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null
    }
  ],
  [
    {
      "type": "org",
      "id": "5f9bf336d4fc39774036a98c",
      "createdAt": "2020-10-30T11:04:22.622Z",
      "updatedAt": "2020-10-30T11:04:22.687Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "rootNodeId": "5f9bf3366a8118b1db9d2e9b",
      "logo": null
    },
    {
      "type": "node",
      "id": "5f9bf3366a8118b1db9d2e9b",
      "createdAt": "2020-10-30T11:04:22.642Z",
      "updatedAt": "2020-10-30T12:21:18.452Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "5f9bf336d4fc39774036a98c",
      "name": "锤子科技",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null
    },
    {
      "type": "node",
      "id": "5f9bf33faa441fe79a369572",
      "createdAt": "2020-10-30T11:04:31.301Z",
      "updatedAt": "2020-10-30T12:21:28.305Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "5f9bf336d4fc39774036a98c",
      "name": "研发",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null
    },
    {
      "type": "node",
      "id": "5f9bf3525cdf85be04263a72",
      "createdAt": "2020-10-30T11:04:50.412Z",
      "updatedAt": "2020-10-30T12:21:44.378Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "5f9bf336d4fc39774036a98c",
      "name": "后端",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null
    },
    {
      "type": "node",
      "id": "5f9bf35dff4b8f3f58ac862f",
      "createdAt": "2020-10-30T11:05:01.198Z",
      "updatedAt": "2020-10-30T12:21:54.310Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "5f9bf336d4fc39774036a98c",
      "name": "Java 工程师",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null
    }
  ],
  [
    {
      "type": "org",
      "id": "5f9bf336d4fc39774036a98c",
      "createdAt": "2020-10-30T11:04:22.622Z",
      "updatedAt": "2020-10-30T11:04:22.687Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "rootNodeId": "5f9bf3366a8118b1db9d2e9b",
      "logo": null
    },
    {
      "type": "node",
      "id": "5f9bf3366a8118b1db9d2e9b",
      "createdAt": "2020-10-30T11:04:22.642Z",
      "updatedAt": "2020-10-30T12:21:18.452Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "5f9bf336d4fc39774036a98c",
      "name": "锤子科技",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null
    },
    {
      "type": "node",
      "id": "5f9bf37f1a3cdeb88c03dfdc",
      "createdAt": "2020-10-30T11:05:35.002Z",
      "updatedAt": "2020-10-30T12:22:01.319Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "5f9bf336d4fc39774036a98c",
      "name": "运营",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null
    }
  ]
]
```
