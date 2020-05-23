
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const isRootNodeOfOrg =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) : Promise<any> => {
  const query = `query isRootNodeOfOrg($input: IsRootNodeOfOrgInput!){
    isRootNodeOfOrg(input: $input)
}`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
