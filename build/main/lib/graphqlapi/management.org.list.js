"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgs = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.orgs = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.OrgsDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcubGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50Lm9yZy5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLGlEQUF3RTtBQUUzRCxRQUFBLElBQUksR0FBRyxLQUFLLEVBQ3ZCLGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQXdCLEVBQ1QsRUFBRTtJQUNqQixNQUFNLEtBQUssR0FBRyxzQkFBWSxDQUFDO0lBQzNCLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9