"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgChildrenNodes = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.orgChildrenNodes = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.OrgChildrenNodesDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuY2hpbGRyZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcuY2hpbGRyZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBSTZCO0FBRWhCLFFBQUEsZ0JBQWdCLEdBQUcsS0FBSyxFQUNuQyxhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUFvQyxFQUNULEVBQUU7SUFDN0IsTUFBTSxLQUFLLEdBQUcsa0NBQXdCLENBQUM7SUFDdkMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=