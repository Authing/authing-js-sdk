import { QueryRbacGroupUserListDocument } from '../../types/codeGen';
export const groupUserList = async (garpqhlClient, tokenProvider, variables) => {
    const query = QueryRbacGroupUserListDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmdyb3VwVXNlckxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5hY2Nlc3Njb250cm9sLmdyb3VwVXNlckxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUdMLDhCQUE4QixFQUMvQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxLQUFLLEVBQ2hDLGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQTBDLEVBQ1QsRUFBRTtJQUNuQyxNQUFNLEtBQUssR0FBRyw4QkFBOEIsQ0FBQztJQUM3QyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==