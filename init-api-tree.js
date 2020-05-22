const fs = require('fs');
const path = require('path');

// Create $REPO_FOLDER/api $REPO_FOLDER/api/index.js if not exist
const apiFolder = path.join(__dirname, './sdk-factory/api')
const apiFolderIndex = path.join(apiFolder, 'index.js')
if (!fs.existsSync(apiFolder)) {
  fs.mkdirSync(apiFolder)
}
if (!fs.existsSync(apiFolderIndex)) {
  fs.writeFileSync(apiFolderIndex, '')
}

// Extract API Info from $REPO_FOLDER/graphql
let apis = []
const gqlFolder = './sdk-factory/graphql'
const folders = [path.join(gqlFolder, 'queries'), path.join(gqlFolder, 'mutations')]
folders.forEach(folder => {

  let apiType = ""
  if (folder.includes('queries')) {
    apiType = "query"
  } else if (folder.includes('mutations')) {
    apiType = 'mutation'
  }

  fs.readdirSync(folder).forEach(file => {
    if (!file.endsWith('gql')) {
      return
    }
    let name = file.split('.')[0]
    file = path.join(folder, file)
    let query = fs.readFileSync(file, 'utf8')

    apis.push({
      name,
      file,
      type: apiType,
      query
    })
  })
})


// Create $REPO_FOLDER/api/API_NAME for each api
apis.forEach(api => {
  const { name, type, file, query } = api
  const destFoldr = path.join(apiFolder, name)
  if (fs.existsSync(destFoldr)) {
    return
  }
  fs.mkdirSync(destFoldr)

  const indexFile = path.join(destFoldr, 'index.js')
  const queryFile = path.join(destFoldr, 'query.gql')
  const docFile = path.join(destFoldr, 'README.md')

  fs.writeFileSync(indexFile, `
const fs = require('fs')
const path = require('path')

const doc = fs.readFileSync(path.join(__dirname, 'README.md'), 'utf8')
const query = fs.readFileSync(path.join(__dirname, 'query.gql'), 'utf8')

module.exports = {
  name: '${name}',
  type: '${type}',
  description: '',
  query,
  doc
}
`)
  fs.writeFileSync(queryFile, query)
  fs.writeFileSync(docFile, "")
})

// Update $REPO_FOLDER/api/index.js
let apiIndexStr = ''
apis.forEach(api => {
  const { name } = api
  apiIndexStr += `
const ${name} = require('./${name}')`
})
apiIndexStr += `
module.exports = {
  ${apis.map(api => {
  return api.name + ','
}).join('\n')}
}
`
fs.writeFileSync(apiFolderIndex, apiIndexStr)
