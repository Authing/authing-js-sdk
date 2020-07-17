"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oidcProviderByDomain = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.oidcProviderByDomain = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.QueryOidcAppInfoByDomainDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLm9pZGNQcm92aWRlckJ5RG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQuY29ubmVjdGlvbi5vaWRjUHJvdmlkZXJCeURvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxpREFJNkI7QUFFaEIsUUFBQSxvQkFBb0IsR0FBRyxLQUFLLEVBQ3ZDLGFBQTRCLEVBQzVCLGFBQW9FLEVBQ3BFLFNBQTRDLEVBQ1QsRUFBRTtJQUNyQyxNQUFNLEtBQUssR0FBRywwQ0FBZ0MsQ0FBQztJQUMvQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==