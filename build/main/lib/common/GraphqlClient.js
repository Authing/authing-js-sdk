"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphqlClient = void 0;
const version_1 = require("../utils/version");
const graphql_request_1 = require("graphql-request");
class GraphqlClient {
    constructor(endpoint, userPoolId) {
        this.endpoint = endpoint;
        this.userPoolId = userPoolId;
    }
    async request(options) {
        const { query, token, variables } = options;
        let headers = {
            "x-authing-sdk-version": version_1.SDK_VERSION,
            "x-authing-userpool-id": this.userPoolId
        };
        token && (headers.Authorization = `Bearer ${token}`);
        const graphQLClient = new graphql_request_1.GraphQLClient(this.endpoint, {
            headers
        });
        // 这一步可能会报错
        const data = await graphQLClient.request(query, variables);
        return data;
    }
}
exports.GraphqlClient = GraphqlClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhcGhxbENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tbW9uL0dyYXBocWxDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOENBQThDO0FBQzlDLHFEQUErQztBQUUvQyxNQUFhLGFBQWE7SUFLeEIsWUFBWSxRQUFnQixFQUFFLFVBQWtCO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO0lBQzlCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BSWI7UUFDQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUE7UUFDM0MsSUFBSSxPQUFPLEdBQVE7WUFDakIsdUJBQXVCLEVBQUUscUJBQVc7WUFDcEMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDekMsQ0FBQTtRQUNELEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1FBQ3BELE1BQU0sYUFBYSxHQUFHLElBQUksK0JBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JELE9BQU87U0FDUixDQUFDLENBQUE7UUFDRixXQUFXO1FBQ1gsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUMxRCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Q0FDRjtBQTVCRCxzQ0E0QkMifQ==