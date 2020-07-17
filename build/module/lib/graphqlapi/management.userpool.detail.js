import { ClientDocument } from '../../types/codeGen';
export const getUserPoolDetail = async (garpqhlClient, tokenProvider, variables) => {
    const query = ClientDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2VycG9vbC5kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2VycG9vbC5kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGNBQWMsRUFBMkIsTUFBTSxxQkFBcUIsQ0FBQztBQUU5RSxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLEVBQ3BDLGFBQTRCLEVBQzVCLGFBQW9FLEVBQ3BFLFNBQTBCLEVBQ1QsRUFBRTtJQUNuQixNQUFNLEtBQUssR0FBRyxjQUFjLENBQUM7SUFDN0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=