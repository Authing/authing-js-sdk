import test from "ava";
const Authing = require("../src/index");
const userPoolId = "5e1be38ab1599657b6477022";
const secret = "62c5ee88764b4584d65aae499fb9a84a";


let authing = new Authing({
  userPoolId,
  secret,
  host: {
    user: "http://localhost:5510/graphql",
    oauth: "http://localhost:5510/graphql"
  }
});

let group = {}

test.before('创建 Group', async t => {
  let res
  try {
    res = await authing.authn.createGroup({
      name: `管理员${Math.random().toString(36).slice(2)}`,
      description: "描述信息"
    })
  } catch (error) {
    console.log(error.message.message)
  }
  t.assert(res)
  t.assert(res._id)
  group = res
})

test('查询 Group', async t => {
  let res
  try {
    res = await authing.authn.group(group._id)
  } catch (error) {
    console.log(error.response.data.errors[0])
  }

  t.assert(res)
  t.assert(res._id === group._id)
})

test('查询 Group 列表', async  t => {
  let res
  try {
    res = await authing.authn.groupList()
  } catch (error) {
    console.log(error)
  }

  t.assert(res)
  t.assert(res.totalCount > 0)
})

test('修改 Group', async  t => {
  let res
  try {
    res = await authing.authn.updateGroup({
      _id: group._id,
      name: group.name,
      description: '新的描述'
    })
  } catch (error) {
    console.log(error)
  }

  t.assert(res)
  t.assert(res._id === group._id)
  t.assert(res.description === "新的描述")
})

test('删除 Group', async t => {
  try {
    await authing.authn.deleteGroup(group._id)
  } catch (error) {
    console.log(error)
  }

  let res
  let errcode
  try {
    res = await authing.authn.group(group._id)
  } catch (error) {
    errcode = error.message.code
  }
  
  t.assert(!res)
  t.assert(errcode === 1004)
})