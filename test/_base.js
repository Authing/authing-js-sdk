const Authing = require('../src');

const secret = 'b41a29583618d8e9de201d5e80db7056';
const clientId = '5a97ede6f8635a00018551a1';

module.exports = new Authing({
  clientId,
  secret
});
