export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type KeyValuePair = {
  [x: string]: any;
};

export type Lang = 'zh-CN' | 'en-US';
