"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOIDCAppList = void 0;
const codeGen_1 = require("../../types/codeGen");
exports.GetOIDCAppList = async (garpqhlClient, tokenProvider, variables) => {
    const query = codeGen_1.GetOidcAppListDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLm9pZGNQcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5jb25uZWN0aW9uLm9pZGNQcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsaURBSTZCO0FBRWhCLFFBQUEsY0FBYyxHQUFHLEtBQUssRUFDakMsYUFBNEIsRUFDNUIsYUFBb0UsRUFDcEUsU0FBa0MsRUFDVCxFQUFFO0lBQzNCLE1BQU0sS0FBSyxHQUFHLGdDQUFzQixDQUFDO0lBQ3JDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9