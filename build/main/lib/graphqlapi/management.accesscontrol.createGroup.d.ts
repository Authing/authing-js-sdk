import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { CreateRbacGroupVariables, CreateRbacGroup } from '../../types/codeGen';
export declare const createRBACGroup: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: CreateRbacGroupVariables) => Promise<CreateRbacGroup>;
