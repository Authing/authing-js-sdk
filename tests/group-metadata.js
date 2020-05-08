import test from "ava";
import { formatError } from "../src/utils/formatError";
import { authing, createGroup, createUser, createRole, createPermissionBatch } from "./base"
const _ = require("lodash")

test('添加自定义数据 # string', async t => {
  const group = await createGroup()
  const key = "KEY"
  const value = "VALUE"
  const metadataList = await authing.authz.addGroupMetadata({
    groupId: group._id,
    key,
    value
  })
  t.assert(metadataList.length === 1)
  t.assert(metadataList[0].key === key)
  t.assert(metadataList[0].value === value)
})

test('添加自定义数据 # number', async t => {
  const group = await createGroup()
  const key = "KEY"
  const value = 1
  try {
    const metadataList = await authing.authz.addGroupMetadata({
      groupId: group._id,
      key,
      value
    })
    t.assert(metadataList.length === 1)
    t.assert(metadataList[0].key === key)
    t.assert(metadataList[0].value === value)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('添加自定义数据 # boolean', async t => {
  const group = await createGroup()
  const key = "KEY"
  const value = true
  try {
    const metadataList = await authing.authz.addGroupMetadata({
      groupId: group._id,
      key,
      value
    })
    t.assert(metadataList.length === 1)
    t.assert(metadataList[0].key === key)
    t.assert(metadataList[0].value === value)
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('添加自定义数据 # object', async t => {
  const group = await createGroup()
  const key = "KEY"
  const value = { a: 1, b: "xx", c: [1, 2, 3] }
  try {
    const metadataList = await authing.authz.addGroupMetadata({
      groupId: group._id,
      key,
      value
    })
    t.assert(metadataList.length === 1)
    t.assert(metadataList[0].key === key)
    t.assert(_.isEqual(metadataList[0].value, value))
  } catch (error) {
    t.fail(formatError(error))
  }
})

test('添加自定义数据 # array', async t => {
  const group = await createGroup()
  const key = "KEY"
  const value = [1, 2, 3, "123", true, { a: 1 }]
  try {
    const metadataList = await authing.authz.addGroupMetadata({
      groupId: group._id,
      key,
      value
    })
    t.assert(metadataList.length === 1)
    t.assert(metadataList[0].key === key)
    t.assert(_.isEqual(metadataList[0].value, value))
  } catch (error) {
    t.fail(formatError(error))
  }
})

