import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';
import {
  GetSamlIdentityProviderListDocument,
  GetSamlIdentityProviderListVariables,
  GetSamlIdentityProviderList
} from '../../types/codeGen';

export const GetSAMLIdentityProviderList = async (
  garpqhlClient: GraphqlClient,
  tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider,
  variables: GetSamlIdentityProviderListVariables
): Promise<GetSamlIdentityProviderList> => {
  const query = GetSamlIdentityProviderListDocument;
  const token = await tokenProvider.getAccessToken();
  return await garpqhlClient.request({
    query,
    token,
    variables
  });
};
