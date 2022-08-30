import { MayBePromise } from '../types';
import { StorageProvider } from './interface';

export class LocalStorageProvider<T> implements StorageProvider<T> {
  get(key: string): MayBePromise<T | null> {
    const jsonItem = localStorage.getItem(key);
    if (jsonItem === null) {
      return null;
    }
    return JSON.parse(jsonItem) as T;
  }

  put(key: string, value: T): MayBePromise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  delete(key: string): MayBePromise<void> {
    localStorage.removeItem(key);
  }
}
