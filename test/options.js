/* eslint-disable no-new */
const test = require('ava');
const Authing = require('../src');

test('config:missing clientId', (t) => {
  t.throws(() => {
    new Authing({ host: '' }, 'clientId is not provided');
  });
});

test('config:missing secret', (t) => {
  t.throws(() => {
    new Authing({ clientId: 'asdf' }, 'secret is not provided');
  });
});
