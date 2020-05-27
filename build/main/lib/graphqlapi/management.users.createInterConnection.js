"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInterConnection = void 0;
exports.createInterConnection = async (garpqhlClient, tokenProvider, variables) => {
    const query = `mutation createInterConnection(
    $sourceUserPoolId: String!
    $sourceUserId: String!
    $targetUserPoolId: String!
    $targetUserId: String!
    $maxAge: Int!
  ) {
    createInterConnection(
      sourceUserPoolId: $sourceUserPoolId
      sourceUserId: $sourceUserId
      targetUserId: $targetUserId
      targetUserPoolId: $targetUserPoolId
      maxAge: $maxAge
    ) {
      message
      code
      status
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5jcmVhdGVJbnRlckNvbm5lY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2Vycy5jcmVhdGVJbnRlckNvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS2EsUUFBQSxxQkFBcUIsR0FBRyxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFvRSxFQUFFLFNBQWMsRUFBZ0IsRUFBRTtJQUM5SyxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CYixDQUFBO0lBQ0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=