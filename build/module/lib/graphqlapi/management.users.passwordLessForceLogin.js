export const passwordLessForceLogin = async (garpqhlClient, tokenProvider, variables) => {
    const query = `
  mutation passwordLessForceLogin($userPoolId: String!, $userId: String!){
    passwordLessForceLogin(userPoolId: $userPoolId, userId: $userId) {
      _id
      name
      nickname
      username
      token
      email
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5wYXNzd29yZExlc3NGb3JjZUxvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMucGFzc3dvcmRMZXNzRm9yY2VMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFzQyxFQUFFLFNBQWMsRUFBZ0IsRUFBRTtJQUNqSixNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7R0FXYixDQUFBO0lBQ0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=