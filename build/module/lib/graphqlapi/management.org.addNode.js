import { AddOrgNodeDocument } from '../../types/codeGen';
export const addOrgNode = async (garpqhlClient, tokenProvider, variables) => {
    const query = AddOrgNodeDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcuYWRkTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50Lm9yZy5hZGROb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxrQkFBa0IsRUFHbkIsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUM3QixhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUE4QixFQUNULEVBQUU7SUFDdkIsTUFBTSxLQUFLLEdBQUcsa0JBQWtCLENBQUM7SUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=