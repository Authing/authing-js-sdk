import {
  GetStorageCallbackData,
  RemoveStorageFailData,
  RemoveStorageSuccessData,
  SetStorageCallbackData
} from '@authing/authingmove-core'

import { AuthingMove } from '../AuthingMove'

import { IStorageProvider } from '../types'

export class StorageProvider implements IStorageProvider {
  get(key: string): Promise<GetStorageCallbackData> {
    return AuthingMove.getStorage({
      key
    })
  }

  set(key: string, data: unknown): Promise<SetStorageCallbackData> {
    return AuthingMove.setStorage({
      key,
      data
    })
  }

  remove(
    key: string
  ): Promise<RemoveStorageSuccessData | RemoveStorageFailData> {
    return AuthingMove.removeStorage({
      key
    })
  }
}
