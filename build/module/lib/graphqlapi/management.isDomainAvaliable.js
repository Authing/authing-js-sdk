import { IsDomainAvaliableDocument } from '../../types/codeGen';
export const isDomainAvaliable = async (garpqhlClient, tokenProvider, variables) => {
    const query = IsDomainAvaliableDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5pc0RvbWFpbkF2YWxpYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LmlzRG9tYWluQXZhbGlhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFDTCx5QkFBeUIsRUFHMUIsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLEVBQ3BDLGFBQTRCLEVBQzVCLGFBQW9FLEVBQ3BFLFNBQXFDLEVBQ1QsRUFBRTtJQUM5QixNQUFNLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztJQUN4QyxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuRCxPQUFPLE1BQU0sYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxLQUFLO1FBQ0wsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==