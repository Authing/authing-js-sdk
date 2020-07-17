import { AddUserToRbacGroupDocument } from '../../types/codeGen';
export const addUserToRBACGroup = async (garpqhlClient, tokenProvider, variables) => {
    const query = AddUserToRbacGroupDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmFkZFVzZXJUb0dyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQuYWNjZXNzY29udHJvbC5hZGRVc2VyVG9Hcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQ0wsMEJBQTBCLEVBRzNCLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUNyQyxhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUFzQyxFQUNULEVBQUU7SUFDL0IsTUFBTSxLQUFLLEdBQUcsMEJBQTBCLENBQUM7SUFDekMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=