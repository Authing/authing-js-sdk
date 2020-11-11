export const encrypt = async (plainText: string, publicKey: string) => {
  // 动态引入，为了在 rn 小程序等环境下构建的时候不会报错
  const crypto = await import('crypto');
  const pawBuffer = Buffer.from(plainText);
  const encryptText = crypto
    .publicEncrypt(
      {
        key: Buffer.from(publicKey), // 如果通过文件方式读入就不必转成Buffer
        padding: 1
        // padding: crypto.constants.RSA_PKCS1_PADDING
      },
      pawBuffer
    )
    .toString('base64');
  return encryptText;
};

export default function buildTree(nodes: any[]) {
  /* nodes structure
  [
    {"id": "1", "children": ["2"], "root": true},
    {"id": "2", "children": ["3", "4"], "root": false},
    {"id": "3", "children": [], "root": false},
    {"id": "4", "children": [], "root": false},
  ]

  转换成 ->
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [
          {
            id: 3,
            children: []
          },
          {
            id: 4,
            children: []
          }
        ]
      }
    ]
  }
  */

  const rootNodes = [nodes.find(x => x.root === true)];
  const mapChildren = (childId: any) => {
    const node = nodes.find(x => x.id === childId) || null;
    if (Array.isArray(node.children) && node.children.length > 0) {
      node.children = node.children
        .map(mapChildren)
        .filter((node: any) => node !== null);
    }
    return node;
  };
  const tree = rootNodes.map(node => {
    node.children = node.children
      .map(mapChildren)
      .filter((node: any) => node !== null);
    return node;
  });
  return tree[0];
}

export const deepEqual = function(x: any, y: any) {
  if (x === y) {
    return true;
  } else if (
    typeof x == 'object' &&
    x != null &&
    typeof y == 'object' &&
    y != null
  ) {
    if (Object.keys(x).length != Object.keys(y).length) return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  } else return false;
};
