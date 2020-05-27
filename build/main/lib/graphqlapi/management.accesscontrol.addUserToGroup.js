"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToRBACGroup = void 0;
exports.addUserToRBACGroup = async (garpqhlClient, tokenProvider, variables) => {
    const query = `mutation addUserToRBACGroup($input: AddUserToRBACGroupInput!){
    addUserToRBACGroup(input: $input){
        _id
        name
        description
        createdAt
        updatedAt
    }
}`;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmFkZFVzZXJUb0dyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQuYWNjZXNzY29udHJvbC5hZGRVc2VyVG9Hcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJYSxRQUFBLGtCQUFrQixHQUFJLEtBQUssRUFBRSxhQUE0QixFQUFFLGFBQXNDLEVBQUUsU0FBYyxFQUFpQixFQUFFO0lBQy9JLE1BQU0sS0FBSyxHQUFHOzs7Ozs7OztFQVFkLENBQUE7SUFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUs7S0FDTixDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==