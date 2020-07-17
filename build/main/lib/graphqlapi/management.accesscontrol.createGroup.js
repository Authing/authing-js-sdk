"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRBACGroup = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.createRBACGroup = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.CreateRbacGroupDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmNyZWF0ZUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQuYWNjZXNzY29udHJvbC5jcmVhdGVHcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFJNkI7QUFFaEIsUUFBQSxlQUFlLEdBQUcsS0FBSyxFQUNsQyxhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUFtQyxFQUNULEVBQUU7SUFDNUIsTUFBTSxLQUFLLEdBQUcsaUNBQXVCLENBQUM7SUFDdEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=