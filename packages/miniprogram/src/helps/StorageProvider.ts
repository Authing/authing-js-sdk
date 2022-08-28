import {
  GetStorageFailData,
  GetStorageSuccessData,
  RemoveStorageFailData,
  RemoveStorageSuccessData,
  SetStorageCallbackData
} from '@authing/authingmove-core'

import { AuthingMove } from '../AuthingMove'

export class StorageProvider {
  get(key: string): Promise<GetStorageSuccessData | GetStorageFailData> {
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
