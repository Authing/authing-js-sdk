"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCollaborator = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.addCollaborator = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.AddCollaboratorDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2VycG9vbC5hZGRDb2xsYWJvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2VycG9vbC5hZGRDb2xsYWJvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsaURBSTZCO0FBRWhCLFFBQUEsZUFBZSxHQUFHLEtBQUssRUFDbEMsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBbUMsRUFDVCxFQUFFO0lBQzVCLE1BQU0sS0FBSyxHQUFHLGlDQUF1QixDQUFDO0lBQ3RDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9