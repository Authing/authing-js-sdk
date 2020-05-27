"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrg = void 0;
exports.createOrg = async (garpqhlClient, tokenProvider, variables) => {
    const query = `mutation createOrg($input: CreateOrgInput!){
    createOrg(input: $input){
        _id
        nodes{
            _id
            name
            description
            createdAt
            updatedAt
            children
            root
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQub3JnLmNyZWF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJYSxRQUFBLFNBQVMsR0FBSSxLQUFLLEVBQUUsYUFBNEIsRUFBRSxhQUFzQyxFQUFFLFNBQWMsRUFBaUIsRUFBRTtJQUN0SSxNQUFNLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7OztFQWFkLENBQUE7SUFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==