import { JSEncrypt } from './jsencrypt'

export function encryptFunction (plainText, publicKey) {
  const encrypt = new JSEncrypt({})

  encrypt.setPublicKey(publicKey)

  const encStr = encrypt.encrypt(plainText)

  return encStr.toString()
}
