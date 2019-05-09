/* eslint-disable no-buffer-constructor */
/* jshint esversion: 6 */

const configs = require('./configs');
const cryptoPolyfill = require('./crypto-polyfill');

let encryption;

if (configs.inBrowser) {
  encryption = (paw) => {
    const encrypt = new cryptoPolyfill.JSEncrypt(); // 实例化加密对象
    encrypt.setPublicKey(configs.openSSLSecret); // 设置公钥
    const encryptoPasswd = encrypt.encrypt(paw); // 加密明文
    return encryptoPasswd;
  };
} else {
  encryption = (paw) => {
    const publicKey = configs.openSSLSecret;
    const pawBuffer = new Buffer(paw); // jsencrypt 库在加密后使用了base64编码,所以这里要先将base64编码后的密文转成buffer
    const encryptText = cryptoPolyfill.publicEncrypt({
      key: new Buffer(publicKey), // 如果通过文件方式读入就不必转成Buffer
      padding: cryptoPolyfill.constants.RSA_PKCS1_PADDING
    }, pawBuffer).toString('base64');
    return encryptText;
  };
}

module.exports = encryption;
