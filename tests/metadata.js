import test from "ava";
const _ = require("lodash")
import { formatError } from "../src/utils/formatError";

const Authing = require("../src/index");
const userPoolId = "5e4cdd055df3df65dc58b97d";
const secret = "49882b55cbaddf40af0bb5f8b7ad9309";

let authing = new Authing({
  userPoolId,
  secret,
  host: {
    user: "http://localhost:5510/graphql",
    oauth: "http://localhost:5510/graphql"
  }
});

const createUser = async function (email, password) {
  email = email || Math.random().toString(36).slice(2) + "@test.com"
  password = password || "123456a"
  return await authing.register({
    email,
    password
  });
}

test('用户自定义字段增删改查', async t => {
  const user = await createUser()
  try {
    let res = await authing.setMetadata({
      _id: user._id,
      key: "KEY",
      value: "VALUE"
    })
    let firstMetadata = res.list[0]
    t.assert(firstMetadata.key === "KEY")
    t.assert(firstMetadata.value === "VALUE")

    res = await authing.metadata(user._id)
    t.assert(res.list.length === 1)
    t.assert(res.list[0].key === "KEY")

    res = await authing.removeMetadata({
      _id: user._id,
      key: "KEY"
    })
    t.assert(res.list.length === 0)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('用户自定义字段 - number', async t => {
  const user = await createUser()
  try{
    let res = await authing.setMetadata({
      _id: user._id,
      key: "KEY",
      value: 1
    })
    t.assert(res.list[0].value === 1)
  }catch(error){
    t.fail(formatError(error))
  }
})

test('用户自定义字段 - array', async t => {
  const user = await createUser()
  try{
    let value = ["1","2","3"]
    let res = await authing.setMetadata({
      _id: user._id,
      key: "KEY",
      value
    })
    t.log(res.list[0].value)
    t.assert(res.list[0].value.length === value.length)
  }catch(error){
    t.fail(formatError(error))
  }
})

test('用户自定义字段 - object', async t => {
  const user = await createUser()
  try{
    let value = {"a": "b"}
    let res = await authing.setMetadata({
      _id: user._id,
      key: "KEY",
      value
    })
    t.log(res.list[0].value)
    t.assert(res.list[0].value)
  }catch(error){
    t.fail(formatError(error))
  }
})

test('搜索用户自定义字段 - equal', async t => {
  const user = await createUser()
  const key = "KEY"
  const value = Math.random().toString(36).slice(2)

  try{
    await authing.setMetadata({
      _id: user._id,
      key,
      value
    })
  
    const res = await authing.searchByMetadata({
      key,
      value
    })
    t.assert(res.totalCount === 1)
  }catch(error){
    t.fail(formatError(error))
  }

})

test('搜索用户自定义字段 - in', async t => {
  const user = await createUser()
  const key = "KEY"
  const value = Math.random().toString(36).slice(2)

  try{
    await authing.setMetadata({
      _id: user._id,
      key,
      value
    })
  
    const res = await authing.searchByMetadata({
      operator: "IN",
      key,
      value: [value]
    })
    t.assert(res.totalCount === 1)
  }catch(error){
    t.fail(formatError(error))
  }
})

test('搜索用户自定义字段 - contains', async t => {
  const user = await createUser()
  const key = "KEY"
  const value = ["a", "b", "c"]

  try{
    await authing.setMetadata({
      _id: user._id,
      key,
      value
    })
  
    const res = await authing.searchByMetadata({
      operator: "CONTAINS",
      key,
      value: "a"
    })
    t.assert(res.totalCount > 0)
  }catch(error){
    t.fail(formatError(error))
  }
})