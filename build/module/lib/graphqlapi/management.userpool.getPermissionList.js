import { QueryPermissionListDocument } from '../../types/codeGen';
export const queryPermissionList = async (garpqhlClient, tokenProvider, variables) => {
    const query = QueryPermissionListDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2VycG9vbC5nZXRQZXJtaXNzaW9uTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LnVzZXJwb29sLmdldFBlcm1pc3Npb25MaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFDTCwyQkFBMkIsRUFHNUIsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBRyxLQUFLLEVBQ3RDLGFBQTRCLEVBQzVCLGFBQW9FLEVBQ3BFLFNBQXVDLEVBQ1QsRUFBRTtJQUNoQyxNQUFNLEtBQUssR0FBRywyQkFBMkIsQ0FBQztJQUMxQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==