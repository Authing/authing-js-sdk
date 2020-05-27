export const queryPermissionList = async (garpqhlClient, tokenProvider, variables) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2VycG9vbC5nZXRQZXJtaXNzaW9uTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LnVzZXJwb29sLmdldFBlcm1pc3Npb25MaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFJLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQW9FLEVBQUUsU0FBYyxFQUFpQixFQUFFO0lBQzlLLE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7O0VBVWQsQ0FBQTtJQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9