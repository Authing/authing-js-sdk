import { InterConnectionsDocument } from '../../types/codeGen';
export const interConnections = async (garpqhlClient, tokenProvider, variables) => {
    const query = InterConnectionsDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5pbnRlckNvbm5lY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMuaW50ZXJDb25uZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQ0wsd0JBQXdCLEVBR3pCLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxFQUNuQyxhQUE0QixFQUM1QixhQUFvRSxFQUNwRSxTQUFvQyxFQUNULEVBQUU7SUFDN0IsTUFBTSxLQUFLLEdBQUcsd0JBQXdCLENBQUM7SUFDdkMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=