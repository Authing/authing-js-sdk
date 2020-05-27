export const checkLoginStatus = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query checkLoginStatus($token: String){
    checkLoginStatus(token: $token){
        message
        code
        status
        token{
            iat
            exp
            data {
              email
              id
              clientId
              unionid
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jaGVja0xvZ2luU3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL2F1dGguY2hlY2tMb2dpblN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFvRSxFQUFFLFNBQWMsRUFBZ0IsRUFBRTtJQUN6SyxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztFQWdCZCxDQUFBO0lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=