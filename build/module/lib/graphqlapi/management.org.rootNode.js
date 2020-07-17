import { OrgRootNodeDocument } from '../../types/codeGen';
export const orgRootNode = async (garpqhlClient, tokenProvider, variables) => {
    const query = OrgRootNodeDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcucm9vdE5vZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC5vcmcucm9vdE5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUNMLG1CQUFtQixFQUdwQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQzlCLGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQStCLEVBQ1QsRUFBRTtJQUN4QixNQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==