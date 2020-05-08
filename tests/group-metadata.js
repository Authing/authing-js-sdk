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

test('删除自定义数据', async t => {
  const group = await createGroup()
  const key = "KEY"
  const value = "VALUE"
  await authing.authz.addGroupMetadata({
    groupId: group._id,
    key,
    value
  })
  const list = await authing.authz.removeGroupMetadata({
    groupId: group._id,
    key,
  })
  t.assert(list.length === 0)
})

test('查询自定义数据', async t => {
  const group = await createGroup()
  const key = "KEY"
  const value = "VALUE"
  await authing.authz.addGroupMetadata({
    groupId: group._id,
    key,
    value
  })
  await authing.authz.addGroupMetadata({
    groupId: group._id,
    key: "KEY2",
    value
  })
  const list = await authing.authz.groupMetadata(group._id)
  t.assert(list.length === 2)
})

test('根据自定义数据查询 Group', async t => {
  const group = await createGroup()
  const key = "KEY"
  const value = Math.random().toString().substr(2)
  await authing.authz.addGroupMetadata({
    groupId: group._id,
    key,
    value
  })

  try {
    const { totalCount, list } = await authing.authz.searchGroupByMetadata({
      groupId: group._id,
      key,
      value
    })
    t.assert(totalCount === 1)
    t.assert(list[0]._id === group._id)
  } catch (error) {
    t.fail(formatError(error))
  }
})
