组织机构数据结构为如下：

```json
{
  "id": "ORGID", // 组织机构 ID
  "rootNode": { // 根节点
      "id": "NODEID", // 根节点的 ID
      "name": "北京非凡科技有限公司",  // 根节点名称，也就是该组织机构的名称
      "code": "feifan", // 节点唯一标志
      "root": true, // 是否为根节点
      "path": ["xxx"], // 从根节点到该节点的路径
      "children": [
          "xxxxxx", // 一级根节点的 ID
      ],
      "depth": 1, // 距离根节点的深度
  },
  "nodes": [], // 平铺的节点列表,
  "nodes": {}, // 递归的组织机构树结构
}
```

一个节点包含以下字段:


以下是一个简单的树结构示例: 根节点为 **北京非凡科技有限公司**，根节点下有**运营**和**研发**部门，研发下面有一个**后端**部门。其对应的树结构示例如下：

```json
{
  "id": "5f8ab6db8b6ff4699084f774",
  "rootNode": {
    "id": "5f8ab6db35bad1b0b2330448",
    "name": "北京非凡科技有限公司",
    "nameI18n": null,
    "description": null,
    "descriptionI18n": null,
    "order": 10,
    "code": "feifan",
    "root": true,
    "depth": null,
    "path": ["5f8ab6db35bad1b0b2330448"],
    "createdAt": "2020-10-17T17:18:19+08:00",
    "updatedAt": "2020-10-17T17:18:19+08:00",
    "children": ["5f8ab6db3b9d36107bbea2b8", "5f8ab6db717c265a96d84a1b"]
  },
  "nodes": [
    {
      "id": "5f8ab6db35bad1b0b2330448",
      "name": "北京非凡科技有限公司",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": 10,
      "code": "feifan",
      "root": true,
      "depth": 0,
      "path": ["5f8ab6db35bad1b0b2330448"],
      "createdAt": "2020-10-17T17:18:19+08:00",
      "updatedAt": "2020-10-17T17:18:19+08:00",
      "children": ["5f8ab6db3b9d36107bbea2b8", "5f8ab6db717c265a96d84a1b"]
    },
    {
      "id": "5f8ab6db3b9d36107bbea2b8",
      "name": "运营",
      "nameI18n": null,
      "description": "商业化部门",
      "descriptionI18n": null,
      "order": null,
      "code": "operation",
      "root": false,
      "depth": 1,
      "path": ["5f8ab6db35bad1b0b2330448", "5f8ab6db3b9d36107bbea2b8"],
      "createdAt": "2020-10-17T17:18:19+08:00",
      "updatedAt": "2020-10-17T17:18:19+08:00",
      "children": []
    },
    {
      "id": "5f8ab6db717c265a96d84a1b",
      "name": "研发",
      "nameI18n": null,
      "description": "研发部门",
      "descriptionI18n": null,
      "order": null,
      "code": "dev",
      "root": false,
      "depth": 1,
      "path": ["5f8ab6db35bad1b0b2330448", "5f8ab6db717c265a96d84a1b"],
      "createdAt": "2020-10-17T17:18:19+08:00",
      "updatedAt": "2020-10-17T17:18:19+08:00",
      "children": ["5f8ab6db929a2b093125b35a"]
    },
    {
      "id": "5f8ab6db929a2b093125b35a",
      "name": "后端",
      "nameI18n": null,
      "description": "后端研发部门",
      "descriptionI18n": null,
      "order": null,
      "code": "backend",
      "root": false,
      "depth": 2,
      "path": [
        "5f8ab6db35bad1b0b2330448",
        "5f8ab6db717c265a96d84a1b",
        "5f8ab6db929a2b093125b35a"
      ],
      "createdAt": "2020-10-17T17:18:19+08:00",
      "updatedAt": "2020-10-17T17:18:19+08:00",
      "children": []
    }
  ],
  "tree": {
    "id": "5f8ab6db35bad1b0b2330448",
    "name": "北京非凡科技有限公司",
    "nameI18n": null,
    "description": null,
    "descriptionI18n": null,
    "order": 10,
    "code": "feifan",
    "root": true,
    "depth": 0,
    "path": ["5f8ab6db35bad1b0b2330448"],
    "createdAt": "2020-10-17T17:18:19+08:00",
    "updatedAt": "2020-10-17T17:18:19+08:00",
    "children": [
      {
        "id": "5f8ab6db3b9d36107bbea2b8",
        "name": "运营",
        "nameI18n": null,
        "description": "商业化部门",
        "descriptionI18n": null,
        "order": null,
        "code": "operation",
        "root": false,
        "depth": 1,
        "path": ["5f8ab6db35bad1b0b2330448", "5f8ab6db3b9d36107bbea2b8"],
        "createdAt": "2020-10-17T17:18:19+08:00",
        "updatedAt": "2020-10-17T17:18:19+08:00",
        "children": []
      },
      {
        "id": "5f8ab6db717c265a96d84a1b",
        "name": "研发",
        "nameI18n": null,
        "description": "研发部门",
        "descriptionI18n": null,
        "order": null,
        "code": "dev",
        "root": false,
        "depth": 1,
        "path": ["5f8ab6db35bad1b0b2330448", "5f8ab6db717c265a96d84a1b"],
        "createdAt": "2020-10-17T17:18:19+08:00",
        "updatedAt": "2020-10-17T17:18:19+08:00",
        "children": [
          {
            "id": "5f8ab6db929a2b093125b35a",
            "name": "后端",
            "nameI18n": null,
            "description": "后端研发部门",
            "descriptionI18n": null,
            "order": null,
            "code": "backend",
            "root": false,
            "depth": 2,
            "path": [
              "5f8ab6db35bad1b0b2330448",
              "5f8ab6db717c265a96d84a1b",
              "5f8ab6db929a2b093125b35a"
            ],
            "createdAt": "2020-10-17T17:18:19+08:00",
            "updatedAt": "2020-10-17T17:18:19+08:00",
            "children": []
          }
        ]
      }
    ]
  }
}
```
