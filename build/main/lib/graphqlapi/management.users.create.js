"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.register = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.RegisterDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5jcmVhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2Vycy5jcmVhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBSTZCO0FBRWhCLFFBQUEsUUFBUSxHQUFHLEtBQUssRUFDM0IsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBNEIsRUFDVCxFQUFFO0lBQ3JCLE1BQU0sS0FBSyxHQUFHLDBCQUFnQixDQUFDO0lBQy9CLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9