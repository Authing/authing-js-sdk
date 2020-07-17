import { AddGroupMetadataDocument } from '../../types/codeGen';
export const addGroupMetadata = async (garpqhlClient, tokenProvider, variables) => {
    const query = AddGroupMetadataDocument;
    const token = await tokenProvider.getAccessToken();
    return garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmFkZEdyb3VwTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmFkZEdyb3VwTWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUdMLHdCQUF3QixFQUN6QixNQUFNLHFCQUFxQixDQUFDO0FBSTdCLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLEtBQUssRUFDbkMsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBb0MsRUFDVCxFQUFFO0lBQzdCLE1BQU0sS0FBSyxHQUFHLHdCQUF3QixDQUFDO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUMzQixLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==