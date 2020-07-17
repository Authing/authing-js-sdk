"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgRootNode = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.orgRootNode = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.OrgRootNodeDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcucm9vdE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcucm9vdE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBSTZCO0FBRWhCLFFBQUEsV0FBVyxHQUFHLEtBQUssRUFDOUIsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBK0IsRUFDVCxFQUFFO0lBQ3hCLE1BQU0sS0FBSyxHQUFHLDZCQUFtQixDQUFDO0lBQ2xDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9