"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToRBACGroup = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.addUserToRBACGroup = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.AddUserToRbacGroupDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmFkZFVzZXJUb0dyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQuYWNjZXNzY29udHJvbC5hZGRVc2VyVG9Hcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFJNkI7QUFFaEIsUUFBQSxrQkFBa0IsR0FBRyxLQUFLLEVBQ3JDLGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQXNDLEVBQ1QsRUFBRTtJQUMvQixNQUFNLEtBQUssR0FBRyxvQ0FBMEIsQ0FBQztJQUN6QyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==