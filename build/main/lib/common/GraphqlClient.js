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
            'x-authing-sdk-version': version_1.SDK_VERSION,
            'x-authing-userpool-id': this.userPoolId
        };
        token && (headers.Authorization = `Bearer ${token}`);
        const graphQLClient = new graphql_request_1.GraphQLClient(this.endpoint, {
            headers
        });
        // 这一步可能会报错
        return await graphQLClient.request(query.loc.source.body, variables);
    }
}
exports.GraphqlClient = GraphqlClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JhcGhxbENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvY29tbW9uL0dyYXBocWxDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOENBQStDO0FBQy9DLHFEQUFnRDtBQUdoRCxNQUFhLGFBQWE7SUFJeEIsWUFBWSxRQUFnQixFQUFFLFVBQWtCO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFJLE9BSWhCO1FBQ0MsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzVDLElBQUksT0FBTyxHQUFRO1lBQ2pCLHVCQUF1QixFQUFFLHFCQUFXO1lBQ3BDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ3pDLENBQUM7UUFDRixLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLGFBQWEsR0FBRyxJQUFJLCtCQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyRCxPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBQ0gsV0FBVztRQUNYLE9BQU8sTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0Y7QUExQkQsc0NBMEJDIn0=