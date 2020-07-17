"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoginStatus = void 0;
const CodeGen_1 = require("../../types/CodeGen");
exports.checkLoginStatus = async (garpqhlClient, tokenProvider, variables) => {
    const query = CodeGen_1.CheckLoginStatusDocument;
    const token = await tokenProvider.getAccessToken();
    return garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jaGVja0xvZ2luU3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL2F1dGguY2hlY2tMb2dpblN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFJNkI7QUFLaEIsUUFBQSxnQkFBZ0IsR0FBRyxLQUFLLEVBQ25DLGFBQTRCLEVBQzVCLGFBQW9FLEVBQ3BFLFNBQW9DLEVBQ1QsRUFBRTtJQUM3QixNQUFNLEtBQUssR0FBRyxrQ0FBd0IsQ0FBQztJQUN2QyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDM0IsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=