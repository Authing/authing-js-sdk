// @ts-ignore
// import { JSEncrypt } from 'jsencrypt'
import { SDK_VERSION } from './version';
import { GraphQLClient } from 'graphql-request';
import { Variables } from 'graphql-request/dist/src/types';
import _ from 'lodash';
import jsjws from 'jsjws';
import jwtDecode from 'jwt-decode';
import { DecodedAccessToken } from './management/types';
// export const encrypt = (plainText: string, publicKey: string) => {
//   const encrypt = new JSEncrypt(); // 实例化加密对象
//   encrypt.setPublicKey(publicKey); // 设置公钥
//   const encryptedPassword = encrypt.encrypt(plainText); // 加密明文
//   return encryptedPassword;
// };

export const graphqlRequest = async (options: {
  endpoint: string;
  query: string;
  variables?: Variables;
  token?: string;
}) => {
  const { endpoint, query, token, variables } = options;
  let headers: any = {
    'x-authing-sdk-version': SDK_VERSION
  };
  token && (headers.Authorization = `Bearer ${token}`);
  const graphQLClient = new GraphQLClient(endpoint, {
    headers
  });

  // 这一步可能会报错
  const data = await graphQLClient.request(query, variables);
  return data;
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
  const rootNodes = [_.find(nodes, { root: true })];
  const mapChildren = (childId: any) => {
    const node = _.find(nodes, x => x.id === childId) || null;
    if (_.isArray(node.children) && node.children.length > 0) {
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

/**
 * @description 验证 jwt token
 *
 */
export const verifyToken = (token: string, secret: string) => {
  const valid = jsjws.JWS.verify(token, Buffer.from(secret), ['HS256']);
  if (valid) {
    const decoded: DecodedAccessToken = jwtDecode(token);
    return decoded;
  } else {
    throw new Error('token 不合法');
  }
};

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
