import { RemoveOrgNodeDocument } from '../../types/codeGen';
export const removeOrgNode = async (garpqhlClient, tokenProvider, variables) => {
    const query = RemoveOrgNodeDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcucmVtb3ZlTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50Lm9yZy5yZW1vdmVOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxxQkFBcUIsRUFHdEIsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUNoQyxhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUFpQyxFQUNULEVBQUU7SUFDMUIsTUFBTSxLQUFLLEdBQUcscUJBQXFCLENBQUM7SUFDcEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=