"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interConnections = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.interConnections = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.InterConnectionsDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5pbnRlckNvbm5lY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMuaW50ZXJDb25uZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxpREFJNkI7QUFFaEIsUUFBQSxnQkFBZ0IsR0FBRyxLQUFLLEVBQ25DLGFBQTRCLEVBQzVCLGFBQW9FLEVBQ3BFLFNBQW9DLEVBQ1QsRUFBRTtJQUM3QixNQUFNLEtBQUssR0FBRyxrQ0FBd0IsQ0FBQztJQUN2QyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==