import { SDK_VERSION } from './version';
import { GraphQLClient } from 'graphql-request'
import { Variables } from 'graphql-request/dist/src/types';

export const graphqlRequest = async (options: {
  endpoint: string,
  query: string,
  variables?: Variables,
  token?: string,
}) => {
  const { endpoint, query, token, variables } = options
  let headers: any = {
    "x-authing-sdk-version": SDK_VERSION
  }
  token && (headers.Authorization = `Bearer ${token}`)
  const graphQLClient = new GraphQLClient(endpoint, {
    headers
  })

  // 这一步可能会报错
  const data = await graphQLClient.request(query, variables)
  return data
}
