import { GetStorageFailData, GetStorageSuccessData, RemoveStorageFailData, RemoveStorageSuccessData, SetStorageCallbackData } from '@authing/authingmove-core';
export declare class StorageProvider {
    get(key: string): Promise<GetStorageSuccessData | GetStorageFailData>;
    set(key: string, data: unknown): Promise<SetStorageCallbackData>;
    remove(key: string): Promise<RemoveStorageSuccessData | RemoveStorageFailData>;
}
