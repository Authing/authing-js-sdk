const express = require("express")
const apiList = require("./sdk-factory/graphql")
const sdkFactory = require("./sdk-factory.json")
const path = require("path")
const fs = require("fs")
const apis = require("./sdk-factory/graphql")
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/api-list', function (req, res) {
  res.json(apiList);
});

app.get('/sdk-factory', async (req, res) => {
  res.json(sdkFactory)
})

app.post('/create-sdk-func', (req, res) => {
  const sdkName = req.body.sdkName
  const apiName = req.body.apiName
  const funcName = req.body.funcName || apiName
  const query = apis.mutations[apiName] || apis.queries[apiName]
  const code = `
import { GraphqlClient } from '../common/GraphqlClient';
import { ManagementTokenProvider } from '../management/ManagementTokenProvider';
import { AuthenticationTokenProvider } from '../auth/AuthenticationTokenProvider';

export const ${funcName} =  async (garpqhlClient: GraphqlClient, tokenProvider: ManagementTokenProvider | AuthenticationTokenProvider, variables: any) : Promise<any> => {
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
  res.send("ok!")
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});