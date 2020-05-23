
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const addCollaborator =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, variables: any) => {
  const query = `mutation addCollaborator($userPoolId: String!, $collaboratorUserId: String!, $permissionDescriptors: [PermissionDescriptorsInputType]!){
    addCollaborator(userPoolId: $userPoolId, collaboratorUserId: $collaboratorUserId, permissionDescriptors: $permissionDescriptors){
        _id
}`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
