import { MayBePromise } from "../types";
import { StorageProvider } from "./interface";

export class SessionStorageProvider<T> implements StorageProvider<T> {
  get(key: string): MayBePromise<T | null> {
    const jsonItem = sessionStorage.getItem(key);
    if (jsonItem === null) {
      return null;
    }
    return JSON.parse(jsonItem) as T;
  }

  put(key: string, value: T): MayBePromise<void> {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  delete(key: string): MayBePromise<void> {
    sessionStorage.removeItem(key);
  }
}