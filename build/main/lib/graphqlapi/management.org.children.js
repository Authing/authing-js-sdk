"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgChildrenNodes = void 0;
exports.orgChildrenNodes = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query orgChildrenNodes($input: OrgChildrenNodesInput!){
    orgChildrenNodes(input: $input){
        group{
            _id
            userPoolId
            name
            description
            createdAt
            updatedAt
        }
        depth
    }
}`;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuY2hpbGRyZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcuY2hpbGRyZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSWEsUUFBQSxnQkFBZ0IsR0FBSSxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFzQyxFQUFFLFNBQWMsRUFBaUIsRUFBRTtJQUM3SSxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7O0VBWWQsQ0FBQTtJQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9