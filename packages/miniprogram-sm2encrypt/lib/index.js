import { doEncrypt } from './sm2'

export function encryptFunction (plainText, publicKey) {
  return doEncrypt(plainText, publicKey)
}
