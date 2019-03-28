var Authing = require('../index.js');

const secret = '2bc1c6e3c9c0a707095f764ede2a9e61';
const clientId = '5c9c659cb9440b05cb2570e6';
const phone = '18000179176';
const code = 7906;

const auth = new Authing({
	clientId: clientId,
    secret: secret,
});

auth.then(async (validAuth) => {
    validAuth.loginByPhoneCode({
        phone,
        phoneCode: code
    }).then((res) => {
        console.log('res-------', res);
    }).catch((err) => {
        console.log('err', err);
    });
});