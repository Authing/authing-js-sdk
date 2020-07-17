"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGroupMetadata = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.addGroupMetadata = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.AddGroupMetadataDocument;
    const token = await tokenProvider.getAccessToken();
    return garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmFkZEdyb3VwTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmFkZEdyb3VwTWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBSTZCO0FBSWhCLFFBQUEsZ0JBQWdCLEdBQUcsS0FBSyxFQUNuQyxhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUFvQyxFQUNULEVBQUU7SUFDN0IsTUFBTSxLQUFLLEdBQUcsa0NBQXdCLENBQUM7SUFDdkMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNCLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9