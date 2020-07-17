import { CreateOidcAppDocument } from '../../types/codeGen';
export const CreateOIDCApp = async (garpqhlClient, tokenProvider, variables) => {
    const query = CreateOidcAppDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLmNyZWF0ZU9pZGNQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LmNvbm5lY3Rpb24uY3JlYXRlT2lkY1Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFDTCxxQkFBcUIsRUFHdEIsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUNoQyxhQUE0QixFQUM1QixhQUFvRSxFQUNwRSxTQUFpQyxFQUNULEVBQUU7SUFDMUIsTUFBTSxLQUFLLEdBQUcscUJBQXFCLENBQUM7SUFDcEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=