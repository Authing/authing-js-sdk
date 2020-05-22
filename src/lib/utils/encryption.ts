import crypto from 'crypto'

export const encrypt = (plainText: string, publicKey: string) => {
  // jsencrypt 库在加密后使用了base64编码,所以这里要先将base64编码后的密文转成buffer
  const pawBuffer = Buffer.from(plainText);
  const encryptText = crypto.publicEncrypt({
    key: Buffer.from(publicKey), // 如果通过文件方式读入就不必转成Buffer
    padding: crypto.constants.RSA_PKCS1_PADDING
  }, pawBuffer).toString('base64');
  return encryptText;
};