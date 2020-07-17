"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSAMLIdentityProviderList = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.GetSAMLIdentityProviderList = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.GetSamlIdentityProviderListDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLnNhbWxJZHBMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQuY29ubmVjdGlvbi5zYW1sSWRwTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxpREFJNkI7QUFFaEIsUUFBQSwyQkFBMkIsR0FBRyxLQUFLLEVBQzlDLGFBQTRCLEVBQzVCLGFBQW9FLEVBQ3BFLFNBQStDLEVBQ1QsRUFBRTtJQUN4QyxNQUFNLEtBQUssR0FBRyw2Q0FBbUMsQ0FBQztJQUNsRCxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==