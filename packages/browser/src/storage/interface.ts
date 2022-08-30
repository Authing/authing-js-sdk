import { MayBePromise } from '../types';

export interface StorageProvider<VALUE> {
  get(key: string): MayBePromise<VALUE | null>;
  put(key: string, value: VALUE): MayBePromise<void>;
  delete(key: string): MayBePromise<void>;
}
