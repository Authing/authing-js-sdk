import {
  User as originalUser,
} from "./graphql.v2";

export interface User extends Omit<originalUser, 'customData'> {
  customData?: KeyValuePair
}


export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type KeyValuePair = {
  [x: string]: any;
};

export type Lang = 'zh-CN' | 'en-US';
