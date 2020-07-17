"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainAvaliable = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.isDomainAvaliable = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.IsDomainAvaliableDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5pc0RvbWFpbkF2YWxpYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LmlzRG9tYWluQXZhbGlhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLGlEQUk2QjtBQUVoQixRQUFBLGlCQUFpQixHQUFHLEtBQUssRUFDcEMsYUFBNEIsRUFDNUIsYUFBb0UsRUFDcEUsU0FBcUMsRUFDVCxFQUFFO0lBQzlCLE1BQU0sS0FBSyxHQUFHLG1DQUF5QixDQUFDO0lBQ3hDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9