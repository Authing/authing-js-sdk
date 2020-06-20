
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';

export const oidcProviderByDomain = async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any): Promise<any> => {
  const query = `
  query QueryOIDCAppInfoByDomain($domain: String!){
    QueryOIDCAppInfoByDomain(domain: $domain){
      _id
      name
      domain
      image
      redirect_uris
      client_id
      client_secret
      token_endpoint_auth_method
      id_token_signed_response_alg
      id_token_encrypted_response_alg
      id_token_encrypted_response_enc
      userinfo_signed_response_alg
      userinfo_encrypted_response_alg
      userinfo_encrypted_response_enc
      request_object_signing_alg
      request_object_encryption_alg
      request_object_encryption_enc
      jwks_uri
      _jwks_uri
      custom_jwks
      jwks
      _jwks
      clientId
      grant_types
      response_types
      description
      homepageURL
      isDeleted
      isDefault
      when
      css
      authorization_code_expire
      id_token_expire
      access_token_expire
      cas_expire
      loginUrl
      isForTeamory
      customStyles{
          forceLogin
          hideQRCode
          hideUP
          hideUsername
          hideRegister
          hidePhone
          hideSocial
          hideClose
          hidePhonePassword
          defaultLoginMethod
          placeholder {
            username
            email
            password
            confirmPassword
            verfiyCode
            newPassword
            phone
            phoneCode
          }
          qrcodeScanning {
            redirect
            interval
            tips
          }
          defaultLoginMethod
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
