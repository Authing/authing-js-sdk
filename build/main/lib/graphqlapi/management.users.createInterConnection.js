"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInterConnection = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.createInterConnection = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.CreateInterConnectionDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5jcmVhdGVJbnRlckNvbm5lY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2Vycy5jcmVhdGVJbnRlckNvbm5lY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsaURBSTZCO0FBRWhCLFFBQUEscUJBQXFCLEdBQUcsS0FBSyxFQUN4QyxhQUE0QixFQUM1QixhQUFvRSxFQUNwRSxTQUF5QyxFQUNULEVBQUU7SUFDbEMsTUFBTSxLQUFLLEdBQUcsdUNBQTZCLENBQUM7SUFDNUMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=