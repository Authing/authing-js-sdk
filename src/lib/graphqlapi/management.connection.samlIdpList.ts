
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';

export const GetSAMLIdentityProviderList = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any): Promise<any> => {
  const query = `
  query GetSAMLIdentityProviderList($clientId: String, $page: Int, $count: Int){
    GetSAMLIdentityProviderList(clientId: $clientId, page: $page, count: $count){
        totalCount
        list{
            _id
            name
            domain
            image
            appSecret
            appId
            clientId
            description
            isDeleted
            enabled
            when
            SPMetadata
            attributeNameFormat
            customAttributes
            emailDomainTransformation
            authnContextClassRef
            IdPMetadata
            assertionConsumerUrl
            bindings
            nameIds
            attributes
            enableSignRes
            resSignAlgorithm
            resAbstractAlgorithm
            resSignPublicKey
            resSignPrivateKey
            resSignPrivateKeyPass
            enableSignReq
            reqSignPublicKey
            enableEncryptRes
            resEncryptPublicKey
            css
        }
    }
}
  `
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
