"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainAvaliable = void 0;
exports.isDomainAvaliable = async (garpqhlClient, tokenProvider, variables) => {
    const query = `query isDomainAvaliable($domain: String!){
    isDomainAvaliable(domain: $domain)
}`;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        variables,
        token
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5pc0RvbWFpbkF2YWxpYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZ3JhcGhxbGFwaS9tYW5hZ2VtZW50LmlzRG9tYWluQXZhbGlhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUthLFFBQUEsaUJBQWlCLEdBQUksS0FBSyxFQUFFLGFBQTRCLEVBQUUsYUFBb0UsRUFBRSxTQUFjLEVBQWlCLEVBQUU7SUFDNUssTUFBTSxLQUFLLEdBQUc7O0VBRWQsQ0FBQTtJQUNBLE1BQU0sS0FBSyxHQUFHLE1BQU0sYUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ2xELE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQ2pDLEtBQUs7UUFDTCxTQUFTO1FBQ1QsS0FBSztLQUNOLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQSJ9