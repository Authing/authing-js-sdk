import test from "ava";
const Authing = require("../src/index");

export function getRandomPhoneNumber() {
  var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
  var i = Math.floor(10 * Math.random())
  var prefix = prefixArray[i];
  for (var j = 0; j < 8; j++) {
    prefix = prefix + Math.floor(Math.random() * 10);
  }
  return prefix;
}

function initUserPools() {
  let configs = [
    {
      userPoolId: "5e7d5fcf4754692e4307927d",
      secret: "59eecb6855ebd7472ff6530b10b69f86"
    },
    {
      userPoolId: "5e7d5fc74754692e4307926e",
      secret: "abf52ffca0b40e93b1ca2dcebff4dbf6"
    },
    {
      userPoolId: "5e4cdd055df3df65dc58b97d",
      secret: "49882b55cbaddf40af0bb5f8b7ad9309"
    }
  ]

  let userpools = []
  for (let config of configs) {
    const { userPoolId, secret } = config
    const authing = new Authing({
      userPoolId,
      secret,
      host: {
        user: "http://localhost:5510/graphql",
        oauth: "http://localhost:5510/graphql"
      }
    })
    userpools.push(authing)
  }
  return userpools
}


test('用户注册', async t => {
  const userpools = initUserPools()
  const task = async (authing) => {
    const user = await authing.register({
      email: Math.random().toString(36).slice(2) + "@authing.cn",
      password: "123456a"
    })
    t.assert(user)
    t.assert(user._id)
  }
  await Promise.all(userpools.map(authing => task(authing)))
})

test('删除用户之后注册', async t => {
  const userpools = initUserPools()
  const task = async (authing) => {
    const users = await authing.list()
    t.assert(users)
    const user = await authing.register({
      email: Math.random().toString(36).slice(2) + "@authing.cn",
      password: "123456a"
    })
    t.assert(user)
    t.assert(user.registerInClient === authing.userPoolId)
  }
  await Promise.all(userpools.map(authing => task(authing)))
})

test("手机号密码登录", async t => {
  const userpools = initUserPools()
  const task = async (authing) => {
    const res = await Promise.all([
      authing.register({
        phone: getRandomPhoneNumber(),
        password: "123456a"
      }),
      authing.list()
    ])
    const [user, users] = res
    t.assert(user)
    t.assert(users)
  }
  await Promise.all(userpools.map(authing => task(authing)))
})
