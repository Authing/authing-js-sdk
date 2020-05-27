"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryPermissionList = void 0;
exports.queryPermissionList = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query queryPermissionList{
    queryPermissionList{
        list{
            _id
            name
            affect
            description
        }
        totalCount
    }
}`;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2VycG9vbC5nZXRQZXJtaXNzaW9uTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LnVzZXJwb29sLmdldFBlcm1pc3Npb25MaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUthLFFBQUEsbUJBQW1CLEdBQUksS0FBSyxFQUFFLGFBQTRCLEVBQUUsYUFBb0UsRUFBRSxTQUFjLEVBQWlCLEVBQUU7SUFDOUssTUFBTSxLQUFLLEdBQUc7Ozs7Ozs7Ozs7RUFVZCxDQUFBO0lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=