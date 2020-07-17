"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.org = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.org = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.OrgDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuZmluZEJ5SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcuZmluZEJ5SWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBQXFFO0FBRXhELFFBQUEsR0FBRyxHQUFHLEtBQUssRUFDdEIsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBdUIsRUFDVCxFQUFFO0lBQ2hCLE1BQU0sS0FBSyxHQUFHLHFCQUFXLENBQUM7SUFDMUIsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=