import crypto from 'crypto';
import { SDK_VERSION } from './version';
import { GraphQLClient } from 'graphql-request';
import { Variables } from 'graphql-request/dist/src/types';
import _ from 'lodash';
import * as jwt from 'jsonwebtoken';

export const encrypt = (plainText: string, publicKey: string) => {
  // jsencrypt 库在加密后使用了base64编码,所以这里要先将base64编码后的密文转成buffer
  const pawBuffer = Buffer.from(plainText);
  const encryptText = crypto
    .publicEncrypt(
      {
        key: Buffer.from(publicKey), // 如果通过文件方式读入就不必转成Buffer
        padding: crypto.constants.RSA_PKCS1_PADDING
      },
      pawBuffer
    )
    .toString('base64');
  return encryptText;
};

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
  const decoded = jwt.verify(token, secret) as any;
  return decoded;
};
