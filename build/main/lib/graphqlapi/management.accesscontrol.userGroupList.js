"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGroupList = void 0;
exports.userGroupList = async (garpqhlClient, tokenProvider, variables) => {
    const query = `
  query userGroupList($_id: String!){
    userGroupList(_id: $_id){
        totalCount
        rawList
        list {
          _id
          name
          description
          createdAt
          updatedAt
        }
    }
}
  `;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLnVzZXJHcm91cExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLnVzZXJHcm91cExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSWEsUUFBQSxhQUFhLEdBQUcsS0FBSyxFQUFFLGFBQTRCLEVBQUUsYUFBc0MsRUFBRSxTQUFjLEVBQWdCLEVBQUU7SUFDeEksTUFBTSxLQUFLLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0dBY2IsQ0FBQTtJQUNELE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9