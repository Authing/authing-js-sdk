import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { IsUserInGroupVariables, IsUserInGroup } from '../../types/codeGen';
export declare const isUserInGroup: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: IsUserInGroupVariables) => Promise<IsUserInGroup>;
