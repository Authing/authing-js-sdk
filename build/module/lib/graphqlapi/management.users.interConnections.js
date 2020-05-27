export const interConnections = async (garpqhlClient, tokenProvider, variables) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5pbnRlckNvbm5lY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMuaW50ZXJDb25uZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFvRSxFQUFFLFNBQWMsRUFBZ0IsRUFBRTtJQUN6SyxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7OztHQVViLENBQUE7SUFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==