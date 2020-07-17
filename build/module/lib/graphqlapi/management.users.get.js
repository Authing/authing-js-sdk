import { UserDocument } from '../../types/codeGen';
export const user = async (garpqhlClient, tokenProvider, variables) => {
    const query = UserDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5nZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL2dyYXBocWxhcGkvbWFuYWdlbWVudC51c2Vycy5nZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFlBQVksRUFBdUIsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RSxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUF3QixFQUNULEVBQUU7SUFDakIsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQzNCLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25ELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9