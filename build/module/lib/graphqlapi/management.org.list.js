export const orgs = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query orgs($userPoolId: String!){
    orgs(userPoolId: $userPoolId){
        totalCount
        list{
            _id
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcubGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50Lm9yZy5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFzQyxFQUFFLFNBQWMsRUFBZ0IsRUFBRTtJQUMvSCxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7Ozs7OztFQWdCZCxDQUFBO0lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=