"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPoolDetail = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.getUserPoolDetail = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.ClientDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2VycG9vbC5kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2VycG9vbC5kZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsaURBQThFO0FBRWpFLFFBQUEsaUJBQWlCLEdBQUcsS0FBSyxFQUNwQyxhQUE0QixFQUM1QixhQUFvRSxFQUNwRSxTQUEwQixFQUNULEVBQUU7SUFDbkIsTUFBTSxLQUFLLEdBQUcsd0JBQWMsQ0FBQztJQUM3QixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==