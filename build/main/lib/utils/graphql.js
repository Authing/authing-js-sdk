"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlRequest = void 0;
const version_1 = require("./version");
const graphql_request_1 = require("graphql-request");
exports.graphqlRequest = async (options) => {
    const { endpoint, query, token, variables } = options;
    let headers = {
        "x-authing-sdk-version": version_1.SDK_VERSION
    };
    token && (headers.Authorization = `Bearer ${token}`);
    const graphQLClient = new graphql_request_1.GraphQLClient(endpoint, {
        headers
    });
    // 这一步可能会报错
    const data = await graphQLClient.request(query, variables);
    return data;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZ3JhcGhxbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBd0M7QUFDeEMscURBQStDO0FBR2xDLFFBQUEsY0FBYyxHQUFHLEtBQUssRUFBRSxPQUtwQyxFQUFFLEVBQUU7SUFDSCxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFBO0lBQ3JELElBQUksT0FBTyxHQUFRO1FBQ2pCLHVCQUF1QixFQUFFLHFCQUFXO0tBQ3JDLENBQUE7SUFDRCxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUNwRCxNQUFNLGFBQWEsR0FBRyxJQUFJLCtCQUFhLENBQUMsUUFBUSxFQUFFO1FBQ2hELE9BQU87S0FDUixDQUFDLENBQUE7SUFFRixXQUFXO0lBQ1gsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUMxRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMsQ0FBQSJ9