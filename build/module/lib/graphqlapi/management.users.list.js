import { UsersDocument } from '../../types/codeGen';
export const users = async (garpqhlClient, tokenProvider, variables) => {
    const query = UsersDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMubGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsYUFBYSxFQUF5QixNQUFNLHFCQUFxQixDQUFDO0FBRTNFLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQ3hCLGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQXlCLEVBQ1QsRUFBRTtJQUNsQixNQUFNLEtBQUssR0FBRyxhQUFhLENBQUM7SUFDNUIsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=