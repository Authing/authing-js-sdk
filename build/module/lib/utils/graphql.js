import { SDK_VERSION } from './version';
import { GraphQLClient } from 'graphql-request';
export const graphqlRequest = async (options) => {
    const { endpoint, query, token, variables } = options;
    let headers = {
        "x-authing-sdk-version": SDK_VERSION
    };
    token && (headers.Authorization = `Bearer ${token}`);
    const graphQLClient = new GraphQLClient(endpoint, {
        headers
    });
    // 这一步可能会报错
    const data = await graphQLClient.request(query, variables);
    return data;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGhxbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvdXRpbHMvZ3JhcGhxbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUcvQyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUFFLE9BS3BDLEVBQUUsRUFBRTtJQUNILE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxPQUFPLENBQUE7SUFDckQsSUFBSSxPQUFPLEdBQVE7UUFDakIsdUJBQXVCLEVBQUUsV0FBVztLQUNyQyxDQUFBO0lBQ0QsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDcEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQ2hELE9BQU87S0FDUixDQUFDLENBQUE7SUFFRixXQUFXO0lBQ1gsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtJQUMxRCxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMsQ0FBQSJ9