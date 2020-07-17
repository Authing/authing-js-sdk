"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOIDCApp = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.CreateOIDCApp = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.CreateOidcAppDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLmNyZWF0ZU9pZGNQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LmNvbm5lY3Rpb24uY3JlYXRlT2lkY1Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLGlEQUk2QjtBQUVoQixRQUFBLGFBQWEsR0FBRyxLQUFLLEVBQ2hDLGFBQTRCLEVBQzVCLGFBQW9FLEVBQ3BFLFNBQWlDLEVBQ1QsRUFBRTtJQUMxQixNQUFNLEtBQUssR0FBRywrQkFBcUIsQ0FBQztJQUNwQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==