const async = require('async');
const path = require('path');
const Comments = require('parse-comments');
const parseComments = new Comments();
const fs = require('fs');
const glob = require('glob');
const _ = require('lodash');

const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);


const files = glob.sync(__dirname + '/src/lib/management/!(*.spec).ts').concat(glob.sync(__dirname + '/src/lib/authentication/!(*.spec).ts'))
  .filter(x => x.toLowerCase().includes('client'))
  .filter(x => !x.toLowerCase().includes('management/managementclient'));

if (!fs.existsSync('docs/management')) {
  fs.mkdirSync('docs/management')
}
if (!fs.existsSync('docs/authentication')) {
  fs.mkdirSync('docs/authentication')
}

for (let file of files) {
  const data = fs.readFileSync(file, 'utf8')
  const parsed = parseComments.parse(data);
  let docs = []

  for (const block of parsed) {
    const { description, tags, examples, raw } = block
    const params = _.filter(tags, { title: 'param' }).map(x => {
      const type = raw.match(`@param {(.*?)} .*?${x.name}.*?`) ? raw.match(`@param {(.*?)} .*?${x.name}.*?`)[1] : null
      return {
        name: x.name,
        description: x.description,
        type,
        default: x.default
      }
    })
    const returns = _.filter(tags, { title: 'returns' }).map(x => {
      const type = raw.match(/@returns {(.*?)}.*?\n/) ? raw.match(/@returns {(.*?)}.*?\n/)[1] : null
      const datatype = type && type.match(/Promise<(.*?)>$/) ? type.match(/Promise<(.*?)>$/)[1] : null
      return {
        name: x.name,
        description: x.description,
        type,
        datatype
      }
    })[0]

    let exampleDataType = null
    const filename = `./docs/datatypes/${returns?.datatype}.md`
    if (returns && fs.existsSync(filename)) {
      exampleDataType = fs.readFileSync(filename)
    }
    const class_ = _.find(tags, { title: 'class' })
    const memberof = _.find(tags, { title: 'memberof' })?.description
    const name = _.find(tags, { title: 'name' })?.name
    const name_zh = _.find(tags, { title: 'name_zh' })?.description


    // 处理 nodejs
    const args = params.map(x => x.name).filter(x => !x.includes('.')).join(', ')
    let doc = ''
    if (!class_) {
      doc = `
## ${name_zh}

${memberof}().${name}(${args})

> ${description}


#### 参数

${params.map(param => `- \`${param.name}\` \\<${param.type}\\> ${param.description} ${param.default ? `默认值为 : \`${param.default}\`。` : ''}`).join('\n')}

#### 示例

${examples.map(x => `\`\`\`javascript\n${x.value.trim()}\n\`\`\``).join('\n')}

#### 返回值

${returns ? `- ${returns.name} \`${returns.type}\` ${returns.description}` : ''}

${exampleDataType ? exampleDataType : ""}
      `
    } else {
      doc = `
# ${class_.description}

[[toc]]

> ${description.split('\\`\\`\\`').join('```')}

${examples.map(x => x.value.split('\\`\\`\\`').join('```'))}

`
    }

    docs.push(doc)
  }


  const filename = `${file.split('/')[file.split('/').length - 1]}`
  const module = `${file.split('/')[file.split('/').length - 2]}`
  const source = `docs/${module}/${filename.replace('.ts', '')}.md`
  fs.writeFileSync(source, docs.join('\n'))

  // 移动到 docs
  const target = `../../authing-docs/docs/sdk/sdk-for-node/${module}/${filename.replace('.ts', '')}.md`
  fs.copyFileSync(source, target)
}

/*
// python
for (let file of files) {

  if (file.includes('QrCodeAuthenticationClient')
    || file.includes('OrgManagementClient')
    || file.includes('GroupsManagementClient')
    || file.includes('WhitelistManagementClient')
    || file.includes('MfaAuthenticationClient')
  ) {
    continue
  }

  const data = fs.readFileSync(file, 'utf8')
  const parsed = parseComments.parse(data);
  let docs = []

  for (const block of parsed) {
    const { description, tags, raw } = block
    const params = _.filter(tags, { title: 'param' }).map(x => {
      const type = raw.match(`@param {(.*?)} .*?${x.name}.*?`) ? raw.match(`@param {(.*?)} .*?${x.name}.*?`)[1] : null
      return {
        name: x.name,
        description: x.description,
        type,
        default: x.default
      }
    })
    const returns = _.filter(tags, { title: 'returns' }).map(x => {
      const type = raw.match(/@returns {(.*?)}.*?\n/) ? raw.match(/@returns {(.*?)}.*?\n/)[1] : null
      return {
        name: x.name,
        description: x.description,
        type
      }
    })[0]
    const class_ = _.find(tags, { title: 'class' })
    const memberof = _.find(tags, { title: 'memberof' })?.description
    const name = _.find(tags, { title: 'name' })?.name

    if (name === "checkPasswordStrength" || name === 'exists') {
      continue
    }

    const name_zh = _.find(tags, { title: 'name_zh' })?.description


    // 处理 nodejs
    const args = params.map(x => x.name).filter(x => !x.includes('.')).join(', ')


    let doc = ''
    if (!class_) {
      const exampleFilename = `./docs/examples/${memberof}/${name}.md`
      let example = ""
      if (fs.existsSync(exampleFilename)) {
        const lang = 'python'
        const reg = new RegExp('```' + lang + '\\n(([\\s\\S](?!```))*)\\n```');
        example = reg.exec(fs.readFileSync(exampleFilename, 'utf-8'))
        if (example) {
          example = example[0]
        }
      }
      doc = `
## ${name_zh}

${memberof}().${camelToSnakeCase(name)}(${args})

> ${description}


#### 参数

${params.map(param => `- \`${param.name}\` \\<${param.type}\\> ${param.description} ${param.default ? `默认值为 : \`${param.default}\`。` : ''}`).join('\n')}


#### 示例

${example ? example : ""}

      `
    } else {
      doc = `
# ${class_.description}

[[toc]]

> ${description.split('\\`\\`\\`').join('```')}

`
    }

    docs.push(doc)
  }
  let filename = `${file.split('/')[file.split('/').length - 1]}`
  if (filename === 'AuthenticationClient.ts') {
    filename = 'README.ts'
  }
  const module = `${file.split('/')[file.split('/').length - 2]}`
  // 移动到 docs
  const target = `../docs/docs/sdk/sdk-for-python/${module}/${filename.replace('.ts', '')}.md`
  fs.writeFileSync(target, docs.join('\n'))
}


// csharp
for (let file of files) {

  if (file.includes('QrCodeAuthenticationClient')
    || file.includes('OrgManagementClient')
    || file.includes('MfaAuthenticationClient')
  ) {
    continue
  }

  const data = fs.readFileSync(file, 'utf8')
  const parsed = parseComments.parse(data);
  let docs = []

  for (const block of parsed) {
    const { description, tags, raw } = block
    const params = _.filter(tags, { title: 'param' }).map(x => {
      const type = raw.match(`@param {(.*?)} .*?${x.name}.*?`) ? raw.match(`@param {(.*?)} .*?${x.name}.*?`)[1] : null
      return {
        name: x.name,
        description: x.description,
        type,
        default: x.default
      }
    })
    const returns = _.filter(tags, { title: 'returns' }).map(x => {
      const type = raw.match(/@returns {(.*?)}.*?\n/) ? raw.match(/@returns {(.*?)}.*?\n/)[1] : null
      return {
        name: x.name,
        description: x.description,
        type
      }
    })[0]
    const class_ = _.find(tags, { title: 'class' })
    const memberof = _.find(tags, { title: 'memberof' })?.description
    const name = _.find(tags, { title: 'name' })?.name

    if (name === "checkPasswordStrength" || name === 'exists') {
      continue
    }

    const name_zh = _.find(tags, { title: 'name_zh' })?.description


    // 处理 nodejs
    const args = params.map(x => x.name).filter(x => !x.includes('.')).join(', ')


    let doc = ''
    if (!class_) {
      const exampleFilename = `./docs/examples/${memberof}/${name}.md`
      let example = ""
      if (fs.existsSync(exampleFilename)) {
        const lang = 'csharp'
        const reg = new RegExp('```' + lang + '\\n(([\\s\\S](?!```))*)\\n```');
        example = reg.exec(fs.readFileSync(exampleFilename, 'utf-8'))
        if (example) {
          example = example[0]
        }
      }
      doc = `
## ${name_zh}

${memberof}().${name}(${args})

> ${description}

#### 参数

${params.map(param => `- \`${param.name}\` \\<${param.type}\\> ${param.description} ${param.default ? `默认值为 : \`${param.default}\`。` : ''}`).join('\n')}

#### 示例

${example ? example : ""}

      `
    } else {
      doc = `
# ${class_.description}

[[toc]]

> ${description.split('\\`\\`\\`').join('```')}

`
    }

    docs.push(doc)
  }
  let filename = `${file.split('/')[file.split('/').length - 1]}`
  if (filename === 'AuthenticationClient.ts') {
    filename = 'README.ts'
  }
  const module = `${file.split('/')[file.split('/').length - 2]}`
  // 移动到 docs
  const target = `../docs/docs/sdk/sdk-for-csharp/${module}/${filename.replace('.ts', '')}.md`
  fs.writeFileSync(target, docs.join('\n'))
}


// JAVA
for (let file of files) {

  if (file.includes('QrCodeAuthenticationClient')
    || file.includes('OrgManagementClient')
    || file.includes('GroupsManagementClient')
    || file.includes('WhitelistManagementClient')
    || file.includes('MfaAuthenticationClient')
  ) {
    continue
  }

  const data = fs.readFileSync(file, 'utf8')
  const parsed = parseComments.parse(data);
  let docs = []

  for (const block of parsed) {
    const { description, tags, raw } = block
    const params = _.filter(tags, { title: 'param' }).map(x => {
      const type = raw.match(`@param {(.*?)} .*?${x.name}.*?`) ? raw.match(`@param {(.*?)} .*?${x.name}.*?`)[1] : null
      return {
        name: x.name,
        description: x.description,
        type,
        default: x.default
      }
    })
    const returns = _.filter(tags, { title: 'returns' }).map(x => {
      const type = raw.match(/@returns {(.*?)}.*?\n/) ? raw.match(/@returns {(.*?)}.*?\n/)[1] : null
      return {
        name: x.name,
        description: x.description,
        type
      }
    })[0]
    const class_ = _.find(tags, { title: 'class' })
    const memberof = _.find(tags, { title: 'memberof' })?.description
    const name = _.find(tags, { title: 'name' })?.name

    if (name === "checkPasswordStrength") {
      continue
    }

    const name_zh = _.find(tags, { title: 'name_zh' })?.description


    // 处理 nodejs
    const args = params.map(x => x.name).filter(x => !x.includes('.')).join(', ')


    let doc = ''
    if (!class_) {
      const exampleFilename = `./docs/examples/${memberof}/${name}.md`
      let example = ""
      if (fs.existsSync(exampleFilename)) {
        const lang = 'java'
        const reg = new RegExp('```' + lang + '\\n(([\\s\\S](?!```))*)\\n```');
        example = reg.exec(fs.readFileSync(exampleFilename, 'utf-8'))
        if (example) {
          example = example[0]
        }
      }
      doc = `
## ${name_zh}

${memberof}().${name}(${args})

> ${description}

#### 参数

${params.map(param => `- \`${param.name}\` \\<${param.type}\\> ${param.description} ${param.default ? `默认值为 : \`${param.default}\`。` : ''}`).join('\n')}

#### 示例

${example ? example : ""}

      `
    } else {
      doc = `
# ${class_.description}

[[toc]]

> ${description.split('\\`\\`\\`').join('```')}

`
    }

    docs.push(doc)
  }
  let filename = `${file.split('/')[file.split('/').length - 1]}`
  if (filename === 'AuthenticationClient.ts') {
    filename = 'README.ts'
  }
  const module = `${file.split('/')[file.split('/').length - 2]}`
  // 移动到 docs
  const target = `../docs/docs/sdk/sdk-for-java/${module}/${filename.replace('.ts', '')}.md`
  fs.writeFileSync(target, docs.join('\n'))
}


// PHP
for (let file of files) {

  if (file.includes('QrCodeAuthenticationClient')
    || file.includes('OrgManagementClient')
    || file.includes('MfaAuthenticationClient')
    || file.includes('UserpoolAuthenticationClient')
  ) {
    continue
  }

  const data = fs.readFileSync(file, 'utf8')
  const parsed = parseComments.parse(data);
  let docs = []

  for (const block of parsed) {
    const { description, tags, raw } = block
    const params = _.filter(tags, { title: 'param' }).map(x => {
      const type = raw.match(`@param {(.*?)} .*?${x.name}.*?`) ? raw.match(`@param {(.*?)} .*?${x.name}.*?`)[1] : null
      return {
        name: x.name,
        description: x.description,
        type,
        default: x.default
      }
    })
    const returns = _.filter(tags, { title: 'returns' }).map(x => {
      const type = raw.match(/@returns {(.*?)}.*?\n/) ? raw.match(/@returns {(.*?)}.*?\n/)[1] : null
      return {
        name: x.name,
        description: x.description,
        type
      }
    })[0]
    const class_ = _.find(tags, { title: 'class' })
    const memberof = _.find(tags, { title: 'memberof' })?.description
    const name = _.find(tags, { title: 'name' })?.name

    if (name === "checkPasswordStrength" || name === 'exists') {
      continue
    }

    const name_zh = _.find(tags, { title: 'name_zh' })?.description


    // 处理 nodejs
    const args = params.map(x => x.name).filter(x => !x.includes('.')).join(', ')


    let doc = ''
    if (!class_) {
      const exampleFilename = `./docs/examples/${memberof}/${name}.md`
      let example = ""
      if (fs.existsSync(exampleFilename)) {
        const lang = 'php'
        const reg = new RegExp('```' + lang + '\\n(([\\s\\S](?!```))*)\\n```');
        example = reg.exec(fs.readFileSync(exampleFilename, 'utf-8'))
        if (example) {
          example = example[0]
        }
      }
      doc = `
## ${name_zh}

${memberof}().${name}(${args})

> ${description}

#### 参数

${params.map(param => `- \`${param.name}\` \\<${param.type}\\> ${param.description} ${param.default ? `默认值为 : \`${param.default}\`。` : ''}`).join('\n')}

#### 示例

${example ? example : ""}

      `
    } else {
      doc = `
# ${class_.description}

[[toc]]

> ${description.split('\\`\\`\\`').join('```')}

`
    }

    docs.push(doc)
  }
  let filename = `${file.split('/')[file.split('/').length - 1]}`
  if (filename === 'AuthenticationClient.ts') {
    filename = 'README.ts'
  }
  const module = `${file.split('/')[file.split('/').length - 2]}`
  // 移动到 docs
  const target = `../docs/docs/sdk/sdk-for-php/${module}/${filename.replace('.ts', '')}.md`
  fs.writeFileSync(target, docs.join('\n'))
}
*/
