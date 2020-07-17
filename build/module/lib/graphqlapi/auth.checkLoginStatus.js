import { CheckLoginStatusDocument } from '../../types/CodeGen';
export const checkLoginStatus = async (garpqhlClient, tokenProvider, variables) => {
    const query = CheckLoginStatusDocument;
    const token = await tokenProvider.getAccessToken();
    return garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jaGVja0xvZ2luU3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL2F1dGguY2hlY2tMb2dpblN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsd0JBQXdCLEVBQ3pCLE1BQU0scUJBQXFCLENBQUM7QUFLN0IsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxFQUNuQyxhQUE0QixFQUM1QixhQUFvRSxFQUNwRSxTQUFvQyxFQUNULEVBQUU7SUFDN0IsTUFBTSxLQUFLLEdBQUcsd0JBQXdCLENBQUM7SUFDdkMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNCLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9