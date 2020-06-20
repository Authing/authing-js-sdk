export const oidcProviderByDomain = async (garpqhlClient, tokenProvider, variables) => {
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
  `;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLm9pZGNQcm92aWRlckJ5RG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQuY29ubmVjdGlvbi5vaWRjUHJvdmlkZXJCeURvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFvRSxFQUFFLFNBQWMsRUFBZ0IsRUFBRTtJQUM3SyxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNFYixDQUFBO0lBQ0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=