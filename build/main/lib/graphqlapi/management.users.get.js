"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.user = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.UserDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5nZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2Vycy5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBQXdFO0FBRTNELFFBQUEsSUFBSSxHQUFHLEtBQUssRUFDdkIsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBd0IsRUFDVCxFQUFFO0lBQ2pCLE1BQU0sS0FBSyxHQUFHLHNCQUFZLENBQUM7SUFDM0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=