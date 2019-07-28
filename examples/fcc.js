/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-unused-vars */
const fs = require('fs');
const { join } = require('path');

const Authing = require('../dist/authing-js-sdk');

const secret = '1df1663f54ea3b3d1cca0e4f75da427e';
const clientId = '5d31ae1c0af2fa0fcc9a1c2f';

const auth = new Authing({
  clientId,
  secret
  // host: {
  //   user: 'http://localhost:5555/graphql'
  // }
});

function getJsonFiles(jsonPath) {
  const jsonFiles = [];
  function findJsonFile(path) {
    const files = fs.readdirSync(path);
    files.forEach((item, _index) => {
      const fPath = join(path, item);
      const stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findJsonFile(fPath);
      }
      if (stat.isFile() === true) {
        jsonFiles.push(fPath);
      }
    });
  }
  findJsonFile(jsonPath);
  return jsonFiles;
}

auth.then(async (authing) => {
  const userJSON = getJsonFiles('hep/fcc/');

  for (let i = 0; i < userJSON.length; i++) {
    const users = fs.readFileSync(userJSON[i], 'utf-8');
    const realUsers = users.split('\n');
    for (let j = 199000; j < realUsers.length; j++) {
      if (realUsers) {
        const user = JSON.parse(realUsers[j]);
        // console.log(`正在导入第 ${i} 轮第 ${j} 位用户：${user.nickname || user.username}`);
        console.log(j);
        try {
            const realOauth = {
                _id: user._id.$oid,
                bio: user.bio,
                gender: user.gender,
                location: user.location,
                githubId: user.githubId,
                githubURL: user.githubURL,
                githubEmail: user.githubEmail
              };
          const registerResult = await authing.register({
            username: user.openid || user.email || user.githubEmail,
            nickname: user.nickname || user.name || user.email,
            unionid: user.githubId || user._id.$oid,
            password: user.password,
            email: user.email,
            photo: user.picture.indexOf('http') > -1 ? user.picture : `https://freecodecamp.cn${user.picture}`,
            phone: user.telephone || null,
            oauth: JSON.stringify(realOauth),
            registerMethod: user.githubId ? 'oauth:github' : 'default:username-password'
          });
        } catch (err) {
          console.log(err.toString());
        } 
      }
    }
  }
});
