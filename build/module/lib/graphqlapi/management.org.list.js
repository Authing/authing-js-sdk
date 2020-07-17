import { OrgsDocument } from '../../types/codeGen';
export const orgs = async (garpqhlClient, tokenProvider, variables) => {
    const query = OrgsDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5vcmcubGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50Lm9yZy5saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQXVCLE1BQU0scUJBQXFCLENBQUM7QUFFeEUsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsYUFBNEIsRUFDNUIsYUFBc0MsRUFDdEMsU0FBd0IsRUFDVCxFQUFFO0lBQ2pCLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQztJQUMzQixNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==