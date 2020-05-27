"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interConnections = void 0;
exports.interConnections = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query interConnections($userPoolId: String!){
    interConnections(userPoolId: $userPoolId) {
      sourceUserId
      sourceUserPoolId
      targetUserId
      targetUserPoolId
      enabled
      expiresdAt
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5pbnRlckNvbm5lY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMuaW50ZXJDb25uZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLYSxRQUFBLGdCQUFnQixHQUFHLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQW9FLEVBQUUsU0FBYyxFQUFnQixFQUFFO0lBQ3pLLE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7O0dBVWIsQ0FBQTtJQUNELE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9