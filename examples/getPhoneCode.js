var Authing = require('../index.js');

const secret = '42aa3deba3b2c35aaf018acafdf503f8';
const clientId = '5b0dfcff82f4ce00014fdcd4';
const phone = '18200355159';
const auth = new Authing({
	clientId: clientId,
	secret: secret,
});

auth.then(async (validAuth) => {
    validAuth.getVerificationCode(phone, clientId).then((res) => {
        console.log('res-------', res);
    }).catch((err) => {
        console.log('err', err);
    })

});
