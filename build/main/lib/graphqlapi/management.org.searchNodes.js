"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchNodes = void 0;
exports.searchNodes = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query searchOrgNodes(
    $orgId: String!
    $name: String
    $metadata: [KeyValuePair!]
  ) {
    searchOrgNodes(orgId: $orgId, name: $name, metadata: $metadata) {
      _id
      name
      description
      createdAt
      updatedAt
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuc2VhcmNoTm9kZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcuc2VhcmNoTm9kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSWEsUUFBQSxXQUFXLEdBQUcsS0FBSyxFQUFFLGFBQTRCLEVBQUUsYUFBc0MsRUFBRSxTQUFjLEVBQWdCLEVBQUU7SUFDdEksTUFBTSxLQUFLLEdBQUc7Ozs7Ozs7Ozs7Ozs7R0FhYixDQUFBO0lBQ0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=