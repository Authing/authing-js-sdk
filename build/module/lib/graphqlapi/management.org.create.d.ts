import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { CreateOrgVariables, CreateOrg } from '../../types/codeGen';
export declare const createOrg: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: CreateOrgVariables) => Promise<CreateOrg>;
