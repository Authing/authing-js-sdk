import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import { GetSamlIdentityProviderListVariables, GetSamlIdentityProviderList } from '../../types/codeGen';
export declare const GetSAMLIdentityProviderList: (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: GetSamlIdentityProviderListVariables) => Promise<GetSamlIdentityProviderList>;
