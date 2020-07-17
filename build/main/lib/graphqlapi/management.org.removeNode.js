"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeOrgNode = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.removeOrgNode = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.RemoveOrgNodeDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcucmVtb3ZlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50Lm9yZy5yZW1vdmVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGlEQUk2QjtBQUVoQixRQUFBLGFBQWEsR0FBRyxLQUFLLEVBQ2hDLGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQWlDLEVBQ1QsRUFBRTtJQUMxQixNQUFNLEtBQUssR0FBRywrQkFBcUIsQ0FBQztJQUNwQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==