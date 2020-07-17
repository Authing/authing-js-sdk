"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUsers = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.removeUsers = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.RemoveUsersDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5kZWxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2Vycy5kZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBSTZCO0FBRWhCLFFBQUEsV0FBVyxHQUFHLEtBQUssRUFDOUIsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBK0IsRUFDVCxFQUFFO0lBQ3hCLE1BQU0sS0FBSyxHQUFHLDZCQUFtQixDQUFDO0lBQ2xDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9