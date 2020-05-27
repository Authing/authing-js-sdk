"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoginStatus = void 0;
exports.checkLoginStatus = async (garpqhlClient, tokenProvider, variables) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jaGVja0xvZ2luU3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL2F1dGguY2hlY2tMb2dpblN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJYSxRQUFBLGdCQUFnQixHQUFHLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQW9FLEVBQUUsU0FBYyxFQUFnQixFQUFFO0lBQ3pLLE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JkLENBQUE7SUFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==