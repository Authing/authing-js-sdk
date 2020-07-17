"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.users = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.UsersDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5saXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMubGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFBMkU7QUFFOUQsUUFBQSxLQUFLLEdBQUcsS0FBSyxFQUN4QixhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUF5QixFQUNULEVBQUU7SUFDbEIsTUFBTSxLQUFLLEdBQUcsdUJBQWEsQ0FBQztJQUM1QixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==