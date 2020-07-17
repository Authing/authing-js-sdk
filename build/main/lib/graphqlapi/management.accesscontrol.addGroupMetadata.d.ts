import { AddGroupMetadata, AddGroupMetadataVariables } from '../../types/codeGen';
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
export declare const addGroupMetadata: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: AddGroupMetadataVariables) => Promise<AddGroupMetadata>;
