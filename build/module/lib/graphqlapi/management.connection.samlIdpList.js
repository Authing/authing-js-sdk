import { GetSamlIdentityProviderListDocument } from '../../types/codeGen';
export const GetSAMLIdentityProviderList = async (garpqhlClient, tokenProvider, variables) => {
    const query = GetSamlIdentityProviderListDocument;
    const token = await tokenProvider.getAccessToken();
    return await garpqhlClient.request({
        query,
        token,
        variables
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlbWVudC5jb25uZWN0aW9uLnNhbWxJZHBMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9ncmFwaHFsYXBpL21hbmFnZW1lbnQuY29ubmVjdGlvbi5zYW1sSWRwTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQ0wsbUNBQW1DLEVBR3BDLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsTUFBTSxDQUFDLE1BQU0sMkJBQTJCLEdBQUcsS0FBSyxFQUM5QyxhQUE0QixFQUM1QixhQUFvRSxFQUNwRSxTQUErQyxFQUNULEVBQUU7SUFDeEMsTUFBTSxLQUFLLEdBQUcsbUNBQW1DLENBQUM7SUFDbEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkQsT0FBTyxNQUFNLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDakMsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=