import path from "path"
import fs from "fs"
// @ts-ignore
import * as apis from "./sdk-factory/graphql"

const sdkName = "management.userpool.addCollaborator"
const funcName = "addCollaborator"
const apiName = "addCollaborator"

const query = apis.mutations[apiName] || apis.queries[apiName]
const code = `
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';

export const ${funcName} =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider, options: { variables: any }) => {
  const { variables } = options
  const query = \`${query}\`
  const token = await tokenProvider.getAccessToken()
  return await garpqhlClient.request({
    query,
    variables,
    token
  })
}
`

const filename = path.join(__dirname, `src/lib/graphqlapi/${sdkName}.ts`)
fs.writeFileSync(filename, code)
