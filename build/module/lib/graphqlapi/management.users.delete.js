import { RemoveUsersDocument } from '../../types/codeGen';
export const removeUsers = async (garpqhlClient, tokenProvider, variables) => {
    const query = RemoveUsersDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5kZWxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2Vycy5kZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUNMLG1CQUFtQixFQUdwQixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQzlCLGFBQTRCLEVBQzVCLGFBQXNDLEVBQ3RDLFNBQStCLEVBQ1QsRUFBRTtJQUN4QixNQUFNLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztJQUNsQyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==