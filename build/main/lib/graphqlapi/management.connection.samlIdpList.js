"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSAMLIdentityProviderList = void 0;
exports.GetSAMLIdentityProviderList = async (garpqhlClient, tokenProvider, variables) => {
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
  `;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLnNhbWxJZHBMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQuY29ubmVjdGlvbi5zYW1sSWRwTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLYSxRQUFBLDJCQUEyQixHQUFHLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQW9FLEVBQUUsU0FBYyxFQUFnQixFQUFFO0lBQ3BMLE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0NiLENBQUE7SUFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==