/* jshint esversion: 6 */

import configs from '../configs'
import cryptoPolyfill from './crypto-polyfill';

let encryption;

if (configs.inBrowser) {
  encryption = (paw) => {
    const encrypt = new cryptoPolyfill(); // 实例化加密对象
    encrypt.setPublicKey(configs.openSSLSecret); // 设置公钥
    const encryptoPasswd = encrypt.encrypt(paw); // 加密明文
    return encryptoPasswd;
  };
} else {
  encryption = (paw) => {
    const publicKey = configs.openSSLSecret;
    const pawBuffer = Buffer.from(paw); // jsencrypt 库在加密后使用了base64编码,所以这里要先将base64编码后的密文转成buffer
    const encryptText = cryptoPolyfill.publicEncrypt({
      key: Buffer.from(publicKey), // 如果通过文件方式读入就不必转成Buffer
      padding: cryptoPolyfill.constants.RSA_PKCS1_PADDING
    }, pawBuffer).toString('base64');
    return encryptText;
  };
}
export default encryption
