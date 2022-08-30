import { GetStorageFailData, GetStorageSuccessData, RemoveStorageFailData, RemoveStorageSuccessData, SetStorageCallbackData } from '@authing/authingmove-core';
import { IStorageProvider } from '../types';
export declare class StorageProvider implements IStorageProvider {
    get(key: string): Promise<GetStorageSuccessData | GetStorageFailData>;
    set(key: string, data: unknown): Promise<SetStorageCallbackData>;
    remove(key: string): Promise<RemoveStorageSuccessData | RemoveStorageFailData>;
}
