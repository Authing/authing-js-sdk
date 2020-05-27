export const createInterConnection = async (garpqhlClient, tokenProvider, variables) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5jcmVhdGVJbnRlckNvbm5lY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2Vycy5jcmVhdGVJbnRlckNvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsS0FBSyxFQUFFLGFBQTRCLEVBQUUsYUFBb0UsRUFBRSxTQUFjLEVBQWdCLEVBQUU7SUFDOUssTUFBTSxLQUFLLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQmIsQ0FBQTtJQUNELE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9