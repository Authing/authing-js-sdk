import { MayBePromise } from '../types'
import { StorageProvider } from './interface'

export class NullStorageProvider<T> implements StorageProvider<T> {
  get(): MayBePromise<T | null> {
    return null
  }

  put(): MayBePromise<void> {
    // null
  }

  delete(): MayBePromise<void> {
    // null
  }
}
