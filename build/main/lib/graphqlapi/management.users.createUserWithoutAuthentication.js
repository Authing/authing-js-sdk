"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserWithoutAuthentication = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.createUserWithoutAuthentication = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.CreateUserWithoutAuthenticationDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5jcmVhdGVVc2VyV2l0aG91dEF1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMuY3JlYXRlVXNlcldpdGhvdXRBdXRoZW50aWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFJNkI7QUFFaEIsUUFBQSwrQkFBK0IsR0FBRyxLQUFLLEVBQ2xELGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQW1ELEVBQ1QsRUFBRTtJQUM1QyxNQUFNLEtBQUssR0FBRyxpREFBdUMsQ0FBQztJQUN0RCxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==