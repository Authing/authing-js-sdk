import { SDK_VERSION } from "../utils/version";
import { GraphQLClient } from "graphql-request";
export class GraphqlClient {
    constructor(endpoint, userPoolId) {
        this.endpoint = endpoint;
        this.userPoolId = userPoolId;
    }
    async request(options) {
        const { query, token, variables } = options;
        let headers = {
            "x-authing-sdk-version": SDK_VERSION,
            "x-authing-userpool-id": this.userPoolId
        };
        token && (headers.Authorization = `Bearer ${token}`);
        const graphQLClient = new GraphQLClient(this.endpoint, {
            headers
        });
        // 这一步可能会报错
        const data = await graphQLClient.request(query, variables);
        return data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhcGhxbENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tbW9uL0dyYXBocWxDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUUvQyxNQUFNLE9BQU8sYUFBYTtJQUt4QixZQUFZLFFBQWdCLEVBQUUsVUFBa0I7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUE7SUFDOUIsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FJYjtRQUNDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLE9BQU8sQ0FBQTtRQUMzQyxJQUFJLE9BQU8sR0FBUTtZQUNqQix1QkFBdUIsRUFBRSxXQUFXO1lBQ3BDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ3pDLENBQUE7UUFDRCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQTtRQUNwRCxNQUFNLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JELE9BQU87U0FDUixDQUFDLENBQUE7UUFDRixXQUFXO1FBQ1gsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUMxRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Q0FDRiJ9