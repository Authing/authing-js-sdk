import { SDK_VERSION } from '../utils/version';
import { GraphQLClient } from 'graphql-request';
export class GraphqlClient {
    constructor(endpoint, userPoolId) {
        this.endpoint = endpoint;
        this.userPoolId = userPoolId;
    }
    async request(options) {
        const { query, token, variables } = options;
        let headers = {
            'x-authing-sdk-version': SDK_VERSION,
            'x-authing-userpool-id': this.userPoolId
        };
        token && (headers.Authorization = `Bearer ${token}`);
        const graphQLClient = new GraphQLClient(this.endpoint, {
            headers
        });
        // 这一步可能会报错
        return await graphQLClient.request(query.loc.source.body, variables);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhcGhxbENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tbW9uL0dyYXBocWxDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUdoRCxNQUFNLE9BQU8sYUFBYTtJQUl4QixZQUFZLFFBQWdCLEVBQUUsVUFBa0I7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUksT0FJaEI7UUFDQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQVE7WUFDakIsdUJBQXVCLEVBQUUsV0FBVztZQUNwQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUN6QyxDQUFDO1FBQ0YsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDckQsTUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyRCxPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsV0FBVztRQUNYLE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0YifQ==