import { MayBePromise } from '../types';
import { StorageProvider } from './interface';

export class InMemoryStorageProvider<T> implements StorageProvider<T> {
  private readonly storage = Object.create(null);

  get(key: string): MayBePromise<T | null> {
    return this.storage[key] ?? null;
  }

  put(key: string, value: T): MayBePromise<void> {
    this.storage[key] = value;
  }

  delete(key: string): MayBePromise<void> {
    delete this.storage[key];
  }
}
