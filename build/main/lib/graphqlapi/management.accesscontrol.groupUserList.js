"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupUserList = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.groupUserList = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.QueryRbacGroupUserListDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmdyb3VwVXNlckxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmdyb3VwVXNlckxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBSTZCO0FBRWhCLFFBQUEsYUFBYSxHQUFHLEtBQUssRUFDaEMsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBMEMsRUFDVCxFQUFFO0lBQ25DLE1BQU0sS0FBSyxHQUFHLHdDQUE4QixDQUFDO0lBQzdDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9