"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRootNodeOfOrg = void 0;
exports.isRootNodeOfOrg = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query isRootNodeOfOrg($input: IsRootNodeOfOrgInput!){
    isRootNodeOfOrg(input: $input)
}`;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuaXNSb290LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQub3JnLmlzUm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJYSxRQUFBLGVBQWUsR0FBSSxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFzQyxFQUFFLFNBQWMsRUFBaUIsRUFBRTtJQUM1SSxNQUFNLEtBQUssR0FBRzs7RUFFZCxDQUFBO0lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=