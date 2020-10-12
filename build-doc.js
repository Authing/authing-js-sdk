const async = require('async');
const path = require('path');
const Comments = require('parse-comments');
const parseComments = new Comments();
const fs = require('fs');
const glob = require('glob');
const _ = require('lodash');

// const files = glob.sync(__dirname + '/src/lib/management/!(*.spec).ts');
const files = glob.sync(__dirname + '/src/lib/authentication/!(*.spec).ts');
// const files = glob.sync(__dirname + '/src/lib/management/RolesManagementClient.ts');

for (let file of files) {
  const data = fs.readFileSync(file, 'utf8')
  const parsed = parseComments.parse(data);
  let docs = ['[[toc]]\n']
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
      return {
        name: x.name,
        description: x.description,
        type
      }
    })[0]
    const class_ = _.find(tags, { title: 'class' })
    const memberof = _.find(tags, { title: 'memberof' })?.description
    const name = _.find(tags, { title: 'name' })?.name
    const name_zh = _.find(tags, { title: 'name_zh' })?.description

    const args = params.map(x => x.name).filter(x => !x.includes('.')).join(', ')
    let doc = ''
    if (!class_) {
      doc = `
## ${name}

${name_zh}

${memberof}().${name}(${args})

> ${description}


#### Arguments

${params.map(param => `- \`${param.name}\` \\<${param.type}\\> ${param.description} ${param.default ? `默认值为 : \`${param.default}\`。` : ''}`).join('\n')}

#### Returns

${returns ? `- ${returns.name} \`${returns.type}\` ${returns.description}` : ''}

#### Examples

${examples.map(x => `\`\`\`javascript\n${x.value.trim()}\n\`\`\``).join('\n')}
      `
    } else {
      console.log(block)
      doc = `
# class ${class_.name}

> ${description.split('\\`\\`\\`').join('```')}`
    }

    docs.push(doc)
  }
  const filename = `${file.split('/')[file.split('/').length - 1]}`
  console.log(filename)
  fs.writeFileSync(`docs/${filename}.md`, docs.join('\n'))
}
