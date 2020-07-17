"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordLessForceLogin = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.passwordLessForceLogin = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.PasswordLessForceLoginDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5wYXNzd29yZExlc3NGb3JjZUxvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMucGFzc3dvcmRMZXNzRm9yY2VMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxpREFJNkI7QUFFaEIsUUFBQSxzQkFBc0IsR0FBRyxLQUFLLEVBQ3pDLGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQTBDLEVBQ1QsRUFBRTtJQUNuQyxNQUFNLEtBQUssR0FBRyx3Q0FBOEIsQ0FBQztJQUM3QyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==