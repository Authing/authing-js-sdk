"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOIDCApp = void 0;
exports.CreateOIDCApp = async (garpqhlClient, tokenProvider, variables) => {
    const query = `mutation CreateOIDCApp($name: String!, $domain: String!, $redirect_uris: [String]!, $grant_types: [String!]!, $response_types: [String!]!, $clientId: String, $client_id: String, $token_endpoint_auth_method: String, $image: String, $isDefault: Boolean, $id_token_signed_response_alg: String, $id_token_encrypted_response_alg: String, $id_token_encrypted_response_enc: String, $userinfo_signed_response_alg: String, $userinfo_encrypted_response_alg: String, $userinfo_encrypted_response_enc: String, $request_object_signing_alg: String, $request_object_encryption_alg: String, $request_object_encryption_enc: String, $jwks_uri: String, $_jwks_uri: String, $jwks: String, $_jwks: String, $custom_jwks: String, $description: String, $homepageURL: String, $authorization_code_expire: String, $id_token_expire: String, $access_token_expire: String, $cas_expire: String, $customStyles: OIDCProviderCustomStylesInput){
    CreateOIDCApp(name: $name, domain: $domain, redirect_uris: $redirect_uris, grant_types: $grant_types, response_types: $response_types, clientId: $clientId, client_id: $client_id, token_endpoint_auth_method: $token_endpoint_auth_method, image: $image, isDefault: $isDefault, id_token_signed_response_alg: $id_token_signed_response_alg, id_token_encrypted_response_alg: $id_token_encrypted_response_alg, id_token_encrypted_response_enc: $id_token_encrypted_response_enc, userinfo_signed_response_alg: $userinfo_signed_response_alg, userinfo_encrypted_response_alg: $userinfo_encrypted_response_alg, userinfo_encrypted_response_enc: $userinfo_encrypted_response_enc, request_object_signing_alg: $request_object_signing_alg, request_object_encryption_alg: $request_object_encryption_alg, request_object_encryption_enc: $request_object_encryption_enc, jwks_uri: $jwks_uri, _jwks_uri: $_jwks_uri, jwks: $jwks, _jwks: $_jwks, custom_jwks: $custom_jwks, description: $description, homepageURL: $homepageURL, authorization_code_expire: $authorization_code_expire, id_token_expire: $id_token_expire, access_token_expire: $access_token_expire, cas_expire: $cas_expire, customStyles: $customStyles){
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
}`;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLmNyZWF0ZU9pZGNQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LmNvbm5lY3Rpb24uY3JlYXRlT2lkY1Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUthLFFBQUEsYUFBYSxHQUFJLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQW9FLEVBQUUsU0FBYyxFQUFpQixFQUFFO0lBQ3hLLE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbUVkLENBQUE7SUFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==