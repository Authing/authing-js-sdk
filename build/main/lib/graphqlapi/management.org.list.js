"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgs = void 0;
exports.orgs = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query orgs($userPoolId: String!){
    orgs(userPoolId: $userPoolId){
        totalCount
        list{
            _id
            logo
            nodes {
              _id
              name
              description
              createdAt
              updatedAt
              children
              root
            }
        }
    }
}`;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcubGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50Lm9yZy5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlhLFFBQUEsSUFBSSxHQUFHLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQXNDLEVBQUUsU0FBYyxFQUFnQixFQUFFO0lBQy9ILE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztFQWlCZCxDQUFBO0lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=