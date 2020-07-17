import { PasswordLessForceLoginDocument } from '../../types/codeGen';
export const passwordLessForceLogin = async (garpqhlClient, tokenProvider, variables) => {
    const query = PasswordLessForceLoginDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5wYXNzd29yZExlc3NGb3JjZUxvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMucGFzc3dvcmRMZXNzRm9yY2VMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQ0wsOEJBQThCLEVBRy9CLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsS0FBSyxFQUN6QyxhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUEwQyxFQUNULEVBQUU7SUFDbkMsTUFBTSxLQUFLLEdBQUcsOEJBQThCLENBQUM7SUFDN0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=