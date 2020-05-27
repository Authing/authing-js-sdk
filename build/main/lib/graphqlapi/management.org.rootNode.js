"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgRootNode = void 0;
exports.orgRootNode = async (garpqhlClient, tokenProvider, variables) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcucm9vdE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcucm9vdE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSWEsUUFBQSxXQUFXLEdBQUksS0FBSyxFQUFFLGFBQTRCLEVBQUUsYUFBc0MsRUFBRSxTQUFjLEVBQWlCLEVBQUU7SUFDeEksTUFBTSxLQUFLLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCZCxDQUFBO0lBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBIn0=