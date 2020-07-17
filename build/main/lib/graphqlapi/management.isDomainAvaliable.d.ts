import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { IsDomainAvaliableVariables, IsDomainAvaliable } from '../../types/codeGen';
export declare const isDomainAvaliable: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: IsDomainAvaliableVariables) => Promise<IsDomainAvaliable>;
