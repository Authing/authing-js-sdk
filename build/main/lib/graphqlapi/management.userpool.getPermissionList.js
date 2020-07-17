"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryPermissionList = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.queryPermissionList = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.QueryPermissionListDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2VycG9vbC5nZXRQZXJtaXNzaW9uTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LnVzZXJwb29sLmdldFBlcm1pc3Npb25MaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLGlEQUk2QjtBQUVoQixRQUFBLG1CQUFtQixHQUFHLEtBQUssRUFDdEMsYUFBNEIsRUFDNUIsYUFBb0UsRUFDcEUsU0FBdUMsRUFDVCxFQUFFO0lBQ2hDLE1BQU0sS0FBSyxHQUFHLHFDQUEyQixDQUFDO0lBQzFDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9