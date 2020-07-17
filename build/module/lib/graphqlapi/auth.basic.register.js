import { RegisterDocument } from '../../types/CodeGen';
export const register = async (garpqhlClient, tokenProvider, variables) => {
    const query = RegisterDocument;
    const token = await tokenProvider.getAccessToken();
    return garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5iYXNpYy5yZWdpc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9hdXRoLmJhc2ljLnJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxnQkFBZ0IsRUFDakIsTUFBTSxxQkFBcUIsQ0FBQztBQUs3QixNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUMzQixhQUE0QixFQUM1QixhQUFvRSxFQUNwRSxTQUE0QixFQUNULEVBQUU7SUFDckIsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0IsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNCLEtBQUs7UUFDTCxLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9