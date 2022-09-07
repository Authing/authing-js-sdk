/* eslint-disable no-use-before-define */
import { BigInteger } from 'jsbn'
import * as _ from './utils'
import { sm3 } from './sm3'

const C1C2C3 = 0

/**
 * 加密
 */
function doEncrypt(msg, publicKey, cipherMode = 1) {
  msg = typeof msg === 'string' ? _.hexToArray(_.utf8ToHex(msg)) : Array.prototype.slice.call(msg)
  publicKey = _.getGlobalCurve().decodePointHex(publicKey) // 先将公钥转成点

  const keypair = _.generateKeyPairHex()
  const k = new BigInteger(keypair.privateKey, 16) // 随机数 k

  // c1 = k * G
  let c1 = keypair.publicKey
  if (c1.length > 128) c1 = c1.substr(c1.length - 128)

  // (x2, y2) = k * publicKey
  const p = publicKey.multiply(k)
  const x2 = _.hexToArray(_.leftPad(p.getX().toBigInteger().toRadix(16), 64))
  const y2 = _.hexToArray(_.leftPad(p.getY().toBigInteger().toRadix(16), 64))

  // c3 = hash(x2 || msg || y2)
  const c3 = _.arrayToHex(sm3([].concat(x2, msg, y2)))

  let ct = 1
  let offset = 0
  let t = [] // 256 位
  const z = [].concat(x2, y2)
  const nextT = () => {
    // (1) Hai = hash(z || ct)
    // (2) ct++
    t = sm3([...z, ct >> 24 & 0x00ff, ct >> 16 & 0x00ff, ct >> 8 & 0x00ff, ct & 0x00ff])
    ct++
    offset = 0
  }
  nextT() // 先生成 Ha1

  for (let i = 0, len = msg.length; i < len; i++) {
    // t = Ha1 || Ha2 || Ha3 || Ha4
    if (offset === t.length) nextT()

    // c2 = msg ^ t
    msg[i] ^= t[offset++] & 0xff
  }
  const c2 = _.arrayToHex(msg)

  return cipherMode === C1C2C3 ? c1 + c2 + c3 : c1 + c3 + c2
}

export {
  doEncrypt
}
