"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOIDCAppList = void 0;
exports.GetOIDCAppList = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query GetOIDCAppList($clientId: String, $page: Int, $count: Int){
    GetOIDCAppList(clientId: $clientId, page: $page, count: $count){
        totalCount
        list{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLm9pZGNQcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5jb25uZWN0aW9uLm9pZGNQcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS2EsUUFBQSxjQUFjLEdBQUksS0FBSyxFQUFFLGFBQTRCLEVBQUUsYUFBb0UsRUFBRSxTQUFjLEVBQWlCLEVBQUU7SUFDekssTUFBTSxLQUFLLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyQ2QsQ0FBQTtJQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9