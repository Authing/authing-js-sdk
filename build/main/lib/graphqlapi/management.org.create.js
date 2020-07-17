"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrg = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.createOrg = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.CreateOrgDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQub3JnLmNyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFJNkI7QUFFaEIsUUFBQSxTQUFTLEdBQUcsS0FBSyxFQUM1QixhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUE2QixFQUNULEVBQUU7SUFDdEIsTUFBTSxLQUFLLEdBQUcsMkJBQWlCLENBQUM7SUFDaEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=