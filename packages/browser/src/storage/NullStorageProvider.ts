import { MayBePromise } from '../types';
import { StorageProvider } from './interface';

export class NullStorageProvider<T> implements StorageProvider<T> {
  get(_key: string): MayBePromise<T | null> {
    return null;
  }

  put(_key: string, _value: T): MayBePromise<void> {
    // null
  }

  delete(_key: string): MayBePromise<void> {
    // null
  }
}
