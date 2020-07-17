import { CreateUserWithoutAuthenticationDocument } from '../../types/codeGen';
export const createUserWithoutAuthentication = async (garpqhlClient, tokenProvider, variables) => {
    const query = CreateUserWithoutAuthenticationDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC51c2Vycy5jcmVhdGVVc2VyV2l0aG91dEF1dGhlbnRpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQudXNlcnMuY3JlYXRlVXNlcldpdGhvdXRBdXRoZW50aWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQ0wsdUNBQXVDLEVBR3hDLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQUcsS0FBSyxFQUNsRCxhQUE0QixFQUM1QixhQUFzQyxFQUN0QyxTQUFtRCxFQUNULEVBQUU7SUFDNUMsTUFBTSxLQUFLLEdBQUcsdUNBQXVDLENBQUM7SUFDdEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=