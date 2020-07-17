"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrgNode = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.addOrgNode = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.AddOrgNodeDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuYWRkTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50Lm9yZy5hZGROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGlEQUk2QjtBQUVoQixRQUFBLFVBQVUsR0FBRyxLQUFLLEVBQzdCLGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQThCLEVBQ1QsRUFBRTtJQUN2QixNQUFNLEtBQUssR0FBRyw0QkFBa0IsQ0FBQztJQUNqQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==