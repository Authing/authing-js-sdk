export const orgRootNode = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query orgRootNode($sortBy: SortByEnum, $page: Int, $count: Int, $_id: String!){
    orgRootNode(_id: $_id){
        _id
        userPoolId
        name
        description
        createdAt
        updatedAt
        roles{
            totalCount
        }
        permissions{
            totalCount
        }
        users(sortBy: $sortBy, page: $page, count: $count){
            totalCount
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcucm9vdE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcucm9vdE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFJLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQXNDLEVBQUUsU0FBYyxFQUFpQixFQUFFO0lBQ3hJLE1BQU0sS0FBSyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQmQsQ0FBQTtJQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9