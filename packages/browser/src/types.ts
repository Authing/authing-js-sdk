export type StrDict = Record<string, string>;

export type RedirectResponseMode = 'fragment' | 'query';

export type ImplicitResponseType = 'id_token token' | 'id_token';

export type MayBePromise<T> = T | Promise<T>;

export type MsgListener = (e: MessageEvent<any>) => void;
