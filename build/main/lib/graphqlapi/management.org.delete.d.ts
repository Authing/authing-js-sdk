import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { DeleteOrgVariables, DeleteOrg } from '../../types/codeGen';
export declare const deleteOrg: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: DeleteOrgVariables) => Promise<DeleteOrg>;
