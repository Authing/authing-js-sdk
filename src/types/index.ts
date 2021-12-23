import {
  User as originalUser,
  PaginatedUsers as originalPaginatedUsers
} from './graphql.v2';

export interface User extends Omit<originalUser, 'customData'> {
  customData?: KeyValuePair;
}

export interface PaginatedUsers extends Omit<originalPaginatedUsers, 'list'> {
  list: Array<User>;
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type KeyValuePair = {
  [x: string]: any;
};

export type Lang = 'zh-CN' | 'en-US';

export interface Encryption {
  type: string,
  publicKey: string;
}
