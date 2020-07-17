"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserInGroup = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.isUserInGroup = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.IsUserInGroupDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmlzVXNlckluR3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmlzVXNlckluR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBSTZCO0FBRWhCLFFBQUEsYUFBYSxHQUFHLEtBQUssRUFDaEMsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBaUMsRUFDVCxFQUFFO0lBQzFCLE1BQU0sS0FBSyxHQUFHLCtCQUFxQixDQUFDO0lBQ3BDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9