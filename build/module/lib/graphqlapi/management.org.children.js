import { OrgChildrenNodesDocument } from '../../types/codeGen';
export const orgChildrenNodes = async (garpqhlClient, tokenProvider, variables) => {
    const query = OrgChildrenNodesDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuY2hpbGRyZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcuY2hpbGRyZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUNMLHdCQUF3QixFQUd6QixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLEtBQUssRUFDbkMsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBb0MsRUFDVCxFQUFFO0lBQzdCLE1BQU0sS0FBSyxHQUFHLHdCQUF3QixDQUFDO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9