const test = require('ava');
const sdk = require('./_base');

let list = [];

test('oauth:readOAuthList', async (t) => {
  const auth = await sdk;
  list = await auth.readOAuthList();
  t.is(Array.isArray(list), true);
});

test('oauth:bindOAuth', async (t) => {
  const auth = await sdk;
  const { item = { type: 'github' } } = list.find(f => f.binded === false) || {};
  await auth.bindOAuth({
    type: item.type,
    unionid: '12345678',
    userInfo: '{"uniondid":"12345678","username":"demo"}'
  }).catch((e) => {
    t.is(e.message.code, 2020);
  });
  t.pass();
});

test('oauth:unbindOAuth', async (t) => {
  const auth = await sdk;
  const { item = { type: 'github' } } = list.find(f => f.binded === true) || {};
  await auth.unbindOAuth({
    type: item.type,
    unionid: '12345678',
    userInfo: '{"uniondid":"12345678","username":"demo"}'
  }).catch((e) => {
    t.is(e.message.code, 2020);
  });
  t.pass();
});
