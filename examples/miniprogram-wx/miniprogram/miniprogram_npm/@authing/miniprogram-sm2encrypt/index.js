module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1662259787352, function(require, module, exports) {
var __TEMP__ = require('./sm2');var doEncrypt = __TEMP__['doEncrypt'];

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });function encryptFunction (plainText, publicKey) {
  return doEncrypt(plainText, publicKey)
};exports.encryptFunction = encryptFunction

}, function(modId) {var map = {"./sm2":1662259787353}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1662259787353, function(require, module, exports) {
/* eslint-disable no-use-before-define */
var __TEMP__ = require('jsbn');var BigInteger = __TEMP__['BigInteger'];
var __TEMP__ = require('./utils');var _ = __REQUIRE_WILDCARD__(__TEMP__);
var __TEMP__ = require('./sm3');var sm3 = __TEMP__['sm3'];

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

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'doEncrypt', { enumerable: true, configurable: true, get: function() { return doEncrypt; } });



}, function(modId) { var map = {"./utils":1662259787354,"./sm3":1662259787356}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1662259787354, function(require, module, exports) {
/* eslint-disable no-bitwise, no-mixed-operators, no-use-before-define, max-len */
var __TEMP__ = require('jsbn');var BigInteger = __TEMP__['BigInteger'];var SecureRandom = __TEMP__['SecureRandom'];
var __TEMP__ = require('./ec');var ECCurveFp = __TEMP__['ECCurveFp'];

const rng = new SecureRandom()
const {curve, G, n} = generateEcparam()

/**
 * 获取公共椭圆曲线
 */
function getGlobalCurve() {
  return curve
}

/**
 * 生成ecparam
 */
function generateEcparam() {
  // 椭圆曲线
  const p = new BigInteger('FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF', 16)
  const a = new BigInteger('FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC', 16)
  const b = new BigInteger('28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93', 16)
  const curve = new ECCurveFp(p, a, b)

  // 基点
  const gxHex = '32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7'
  const gyHex = 'BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0'
  const G = curve.decodePointHex('04' + gxHex + gyHex)

  const n = new BigInteger('FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123', 16)

  return {curve, G, n}
}

/**
 * 生成密钥对：publicKey = privateKey * G
 */
function generateKeyPairHex(a, b, c) {
  const random = a ? new BigInteger(a, b, c) : new BigInteger(n.bitLength(), rng)
  const d = random.mod(n.subtract(BigInteger.ONE)).add(BigInteger.ONE) // 随机数
  const privateKey = leftPad(d.toString(16), 64)

  const P = G.multiply(d) // P = dG，p 为公钥，d 为私钥
  const Px = leftPad(P.getX().toBigInteger().toString(16), 64)
  const Py = leftPad(P.getY().toBigInteger().toString(16), 64)
  const publicKey = '04' + Px + Py

  return {privateKey, publicKey}
}

/**
 * 生成压缩公钥
 */
function compressPublicKeyHex(s) {
  if (s.length !== 130) throw new Error('Invalid public key to compress')

  const len = (s.length - 2) / 2
  const xHex = s.substr(2, len)
  const y = new BigInteger(s.substr(len + 2, len), 16)

  let prefix = '03'
  if (y.mod(new BigInteger('2')).equals(BigInteger.ZERO)) prefix = '02'

  return prefix + xHex
}

/**
 * utf8串转16进制串
 */
function utf8ToHex(input) {
  input = unescape(encodeURIComponent(input))

  const length = input.length

  // 转换到字数组
  const words = []
  for (let i = 0; i < length; i++) {
    words[i >>> 2] |= (input.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8)
  }

  // 转换到16进制
  const hexChars = []
  for (let i = 0; i < length; i++) {
    const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
    hexChars.push((bite >>> 4).toString(16))
    hexChars.push((bite & 0x0f).toString(16))
  }

  return hexChars.join('')
}

/**
 * 补全16进制字符串
 */
function leftPad(input, num) {
  if (input.length >= num) return input

  return (new Array(num - input.length + 1)).join('0') + input
}

/**
 * 转成16进制串
 */
function arrayToHex(arr) {
  return arr.map(item => {
    item = item.toString(16)
    return item.length === 1 ? '0' + item : item
  }).join('')
}

/**
 * 转成utf8串
 */
function arrayToUtf8(arr) {
  const words = []
  let j = 0
  for (let i = 0; i < arr.length * 2; i += 2) {
    words[i >>> 3] |= parseInt(arr[j], 10) << (24 - (i % 8) * 4)
    j++
  }

  try {
    const latin1Chars = []

    for (let i = 0; i < arr.length; i++) {
      const bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
      latin1Chars.push(String.fromCharCode(bite))
    }

    return decodeURIComponent(escape(latin1Chars.join('')))
  } catch (e) {
    throw new Error('Malformed UTF-8 data')
  }
}

/**
 * 转成字节数组
 */
function hexToArray(hexStr) {
  const words = []
  let hexStrLength = hexStr.length

  if (hexStrLength % 2 !== 0) {
    hexStr = leftPad(hexStr, hexStrLength + 1)
  }

  hexStrLength = hexStr.length

  for (let i = 0; i < hexStrLength; i += 2) {
    words.push(parseInt(hexStr.substr(i, 2), 16))
  }
  return words
}

/**
 * 验证公钥是否为椭圆曲线上的点
 */
function verifyPublicKey(publicKey) {
  const point = curve.decodePointHex(publicKey)
  if (!point) return false

  const x = point.getX()
  const y = point.getY()

  // 验证 y^2 是否等于 x^3 + ax + b
  return y.square().equals(x.multiply(x.square()).add(x.multiply(curve.a)).add(curve.b))
}

/**
 * 验证公钥是否等价，等价返回true
 */
function comparePublicKeyHex(publicKey1, publicKey2) {
  const point1 = curve.decodePointHex(publicKey1)
  if (!point1) return false

  const point2 = curve.decodePointHex(publicKey2)
  if (!point2) return false

  return point1.equals(point2)
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'getGlobalCurve', { enumerable: true, configurable: true, get: function() { return getGlobalCurve; } });Object.defineProperty(exports, 'generateEcparam', { enumerable: true, configurable: true, get: function() { return generateEcparam; } });Object.defineProperty(exports, 'generateKeyPairHex', { enumerable: true, configurable: true, get: function() { return generateKeyPairHex; } });Object.defineProperty(exports, 'compressPublicKeyHex', { enumerable: true, configurable: true, get: function() { return compressPublicKeyHex; } });Object.defineProperty(exports, 'utf8ToHex', { enumerable: true, configurable: true, get: function() { return utf8ToHex; } });Object.defineProperty(exports, 'leftPad', { enumerable: true, configurable: true, get: function() { return leftPad; } });Object.defineProperty(exports, 'arrayToHex', { enumerable: true, configurable: true, get: function() { return arrayToHex; } });Object.defineProperty(exports, 'arrayToUtf8', { enumerable: true, configurable: true, get: function() { return arrayToUtf8; } });Object.defineProperty(exports, 'hexToArray', { enumerable: true, configurable: true, get: function() { return hexToArray; } });Object.defineProperty(exports, 'verifyPublicKey', { enumerable: true, configurable: true, get: function() { return verifyPublicKey; } });Object.defineProperty(exports, 'comparePublicKeyHex', { enumerable: true, configurable: true, get: function() { return comparePublicKeyHex; } });













}, function(modId) { var map = {"./ec":1662259787355}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1662259787355, function(require, module, exports) {
/* eslint-disable no-case-declarations, max-len */
var __TEMP__ = require('jsbn');var BigInteger = __TEMP__['BigInteger'];

/**
 * thanks for Tom Wu : http://www-cs-students.stanford.edu/~tjw/jsbn/
 *
 * Basic Javascript Elliptic Curve implementation
 * Ported loosely from BouncyCastle's Java EC code
 * Only Fp curves implemented for now
 */

const TWO = new BigInteger('2')
const THREE = new BigInteger('3')

/**
 * 椭圆曲线域元素
 */
class ECFieldElementFp {
  constructor(q, x) {
    this.x = x
    this.q = q
    // TODO if (x.compareTo(q) >= 0) error
  }

  /**
   * 判断相等
   */
  equals(other) {
    if (other === this) return true
    return (this.q.equals(other.q) && this.x.equals(other.x))
  }

  /**
   * 返回具体数值
   */
  toBigInteger() {
    return this.x
  }

  /**
   * 取反
   */
  negate() {
    return new ECFieldElementFp(this.q, this.x.negate().mod(this.q))
  }

  /**
   * 相加
   */
  add(b) {
    return new ECFieldElementFp(this.q, this.x.add(b.toBigInteger()).mod(this.q))
  }

  /**
   * 相减
   */
  subtract(b) {
    return new ECFieldElementFp(this.q, this.x.subtract(b.toBigInteger()).mod(this.q))
  }

  /**
   * 相乘
   */
  multiply(b) {
    return new ECFieldElementFp(this.q, this.x.multiply(b.toBigInteger()).mod(this.q))
  }

  /**
   * 相除
   */
  divide(b) {
    return new ECFieldElementFp(this.q, this.x.multiply(b.toBigInteger().modInverse(this.q)).mod(this.q))
  }

  /**
   * 平方
   */
  square() {
    return new ECFieldElementFp(this.q, this.x.square().mod(this.q))
  }
}

class ECPointFp {
  constructor(curve, x, y, z) {
    this.curve = curve
    this.x = x
    this.y = y
    // 标准射影坐标系：zinv == null 或 z * zinv == 1
    this.z = z == null ? BigInteger.ONE : z
    this.zinv = null
    // TODO: compression flag
  }

  getX() {
    if (this.zinv === null) this.zinv = this.z.modInverse(this.curve.q)

    return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
  }

  getY() {
    if (this.zinv === null) this.zinv = this.z.modInverse(this.curve.q)

    return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
  }

  /**
   * 判断相等
   */
  equals(other) {
    if (other === this) return true
    if (this.isInfinity()) return other.isInfinity()
    if (other.isInfinity()) return this.isInfinity()

    // u = y2 * z1 - y1 * z2
    const u = other.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(other.z)).mod(this.curve.q)
    if (!u.equals(BigInteger.ZERO)) return false

    // v = x2 * z1 - x1 * z2
    const v = other.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(other.z)).mod(this.curve.q)
    return v.equals(BigInteger.ZERO)
  }

  /**
   * 是否是无穷远点
   */
  isInfinity() {
    if ((this.x === null) && (this.y === null)) return true
    return this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(BigInteger.ZERO)
  }

  /**
   * 取反，x 轴对称点
   */
  negate() {
    return new ECPointFp(this.curve, this.x, this.y.negate(), this.z)
  }

  /**
   * 相加
   *
   * 标准射影坐标系：
   *
   * λ1 = x1 * z2
   * λ2 = x2 * z1
   * λ3 = λ1 − λ2
   * λ4 = y1 * z2
   * λ5 = y2 * z1
   * λ6 = λ4 − λ5
   * λ7 = λ1 + λ2
   * λ8 = z1 * z2
   * λ9 = λ3^2
   * λ10 = λ3 * λ9
   * λ11 = λ8 * λ6^2 − λ7 * λ9
   * x3 = λ3 * λ11
   * y3 = λ6 * (λ9 * λ1 − λ11) − λ4 * λ10
   * z3 = λ10 * λ8
   */
  add(b) {
    if (this.isInfinity()) return b
    if (b.isInfinity()) return this

    const x1 = this.x.toBigInteger()
    const y1 = this.y.toBigInteger()
    const z1 = this.z
    const x2 = b.x.toBigInteger()
    const y2 = b.y.toBigInteger()
    const z2 = b.z
    const q = this.curve.q

    const w1 = x1.multiply(z2).mod(q)
    const w2 = x2.multiply(z1).mod(q)
    const w3 = w1.subtract(w2)
    const w4 = y1.multiply(z2).mod(q)
    const w5 = y2.multiply(z1).mod(q)
    const w6 = w4.subtract(w5)

    if (BigInteger.ZERO.equals(w3)) {
      if (BigInteger.ZERO.equals(w6)) {
        return this.twice() // this == b，计算自加
      }
      return this.curve.infinity // this == -b，则返回无穷远点
    }

    const w7 = w1.add(w2)
    const w8 = z1.multiply(z2).mod(q)
    const w9 = w3.square().mod(q)
    const w10 = w3.multiply(w9).mod(q)
    const w11 = w8.multiply(w6.square()).subtract(w7.multiply(w9)).mod(q)

    const x3 = w3.multiply(w11).mod(q)
    const y3 = w6.multiply(w9.multiply(w1).subtract(w11)).subtract(w4.multiply(w10)).mod(q)
    const z3 = w10.multiply(w8).mod(q)

    return new ECPointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3)
  }

  /**
   * 自加
   *
   * 标准射影坐标系：
   *
   * λ1 = 3 * x1^2 + a * z1^2
   * λ2 = 2 * y1 * z1
   * λ3 = y1^2
   * λ4 = λ3 * x1 * z1
   * λ5 = λ2^2
   * λ6 = λ1^2 − 8 * λ4
   * x3 = λ2 * λ6
   * y3 = λ1 * (4 * λ4 − λ6) − 2 * λ5 * λ3
   * z3 = λ2 * λ5
   */
  twice() {
    if (this.isInfinity()) return this
    if (!this.y.toBigInteger().signum()) return this.curve.infinity

    const x1 = this.x.toBigInteger()
    const y1 = this.y.toBigInteger()
    const z1 = this.z
    const q = this.curve.q
    const a = this.curve.a.toBigInteger()

    const w1 = x1.square().multiply(THREE).add(a.multiply(z1.square())).mod(q)
    const w2 = y1.shiftLeft(1).multiply(z1).mod(q)
    const w3 = y1.square().mod(q)
    const w4 = w3.multiply(x1).multiply(z1).mod(q)
    const w5 = w2.square().mod(q)
    const w6 = w1.square().subtract(w4.shiftLeft(3)).mod(q)

    const x3 = w2.multiply(w6).mod(q)
    const y3 = w1.multiply(w4.shiftLeft(2).subtract(w6)).subtract(w5.shiftLeft(1).multiply(w3)).mod(q)
    const z3 = w2.multiply(w5).mod(q)

    return new ECPointFp(this.curve, this.curve.fromBigInteger(x3), this.curve.fromBigInteger(y3), z3)
  }

  /**
   * 倍点计算
   */
  multiply(k) {
    if (this.isInfinity()) return this
    if (!k.signum()) return this.curve.infinity

    // 使用加减法
    const k3 = k.multiply(THREE)
    const neg = this.negate()
    let Q = this

    for (let i = k3.bitLength() - 2; i > 0; i--) {
      Q = Q.twice()

      const k3Bit = k3.testBit(i)
      const kBit = k.testBit(i)

      if (k3Bit !== kBit) {
        Q = Q.add(k3Bit ? this : neg)
      }
    }

    return Q
  }
}

/**
 * 椭圆曲线 y^2 = x^3 + ax + b
 */
class ECCurveFp {
  constructor(q, a, b) {
    this.q = q
    this.a = this.fromBigInteger(a)
    this.b = this.fromBigInteger(b)
    this.infinity = new ECPointFp(this, null, null) // 无穷远点
  }

  /**
   * 判断两个椭圆曲线是否相等
   */
  equals(other) {
    if (other === this) return true
    return (this.q.equals(other.q) && this.a.equals(other.a) && this.b.equals(other.b))
  }

  /**
   * 生成椭圆曲线域元素
   */
  fromBigInteger(x) {
    return new ECFieldElementFp(this.q, x)
  }

  /**
   * 解析 16 进制串为椭圆曲线点
   */
  decodePointHex(s) {
    switch (parseInt(s.substr(0, 2), 16)) {
      // 第一个字节
      case 0:
        return this.infinity
      case 2:
      case 3:
        // 压缩
        const x = this.fromBigInteger(new BigInteger(s.substr(2), 16))
        // 对 p ≡ 3 (mod4)，即存在正整数 u，使得 p = 4u + 3
        // 计算 y = (√ (x^3 + ax + b) % p)^(u + 1) modp
        let y = this.fromBigInteger(x.multiply(x.square()).add(
          x.multiply(this.a)
        ).add(this.b).toBigInteger()
          .modPow(
            this.q.divide(new BigInteger('4')).add(BigInteger.ONE), this.q
          ))
        // 算出结果 2 进制最后 1 位不等于第 1 个字节减 2 则取反
        if (!y.toBigInteger().mod(TWO).equals(new BigInteger(s.substr(0, 2), 16).subtract(TWO))) {
          y = y.negate()
        }
        return new ECPointFp(this, x, y)
      case 4:
      case 6:
      case 7:
        const len = (s.length - 2) / 2
        const xHex = s.substr(2, len)
        const yHex = s.substr(len + 2, len)

        return new ECPointFp(this, this.fromBigInteger(new BigInteger(xHex, 16)), this.fromBigInteger(new BigInteger(yHex, 16)))
      default:
        // 不支持
        return null
    }
  }
}

module.exports = {
  ECPointFp,
  ECCurveFp,
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1662259787356, function(require, module, exports) {
/**
 * 循环左移
 */
function rotl(x, n) {
  const result = []
  const a = ~~(n / 8) // 偏移 a 字节
  const b = n % 8 // 偏移 b 位
  for (let i = 0, len = x.length; i < len; i++) {
    // current << b + (current + 1) >>> (8 - b)
    result[i] = ((x[(i + a) % len] << b) & 0xff) + ((x[(i + a + 1) % len] >>> (8 - b)) & 0xff)
  }
  return result
}

/**
 * 二进制异或运算
 */
function xor(x, y) {
  const result = []
  for (let i = x.length - 1; i >= 0; i--) result[i] = (x[i] ^ y[i]) & 0xff
  return result
}

/**
 * 二进制与运算
 */
function and(x, y) {
  const result = []
  for (let i = x.length - 1; i >= 0; i--) result[i] = (x[i] & y[i]) & 0xff
  return result
}

/**
 * 二进制或运算
 */
function or(x, y) {
  const result = []
  for (let i = x.length - 1; i >= 0; i--) result[i] = (x[i] | y[i]) & 0xff
  return result
}

/**
 * 二进制与运算
 */
function add(x, y) {
  const result = []
  let temp = 0
  for (let i = x.length - 1; i >= 0; i--) {
    const sum = x[i] + y[i] + temp
    if (sum > 0xff) {
      temp = 1
      result[i] = sum & 0xff
    } else {
      temp = 0
      result[i] = sum & 0xff
    }
  }
  return result
}

/**
 * 二进制非运算
 */
function not(x) {
  const result = []
  for (let i = x.length - 1; i >= 0; i--) result[i] = (~x[i]) & 0xff
  return result
}

/**
 * 压缩函数中的置换函数 P1(X) = X xor (X <<< 9) xor (X <<< 17)
 */
function P0(X) {
  return xor(xor(X, rotl(X, 9)), rotl(X, 17))
}

/**
 * 消息扩展中的置换函数 P1(X) = X xor (X <<< 15) xor (X <<< 23)
 */
function P1(X) {
  return xor(xor(X, rotl(X, 15)), rotl(X, 23))
}

/**
 * 布尔函数 FF
 */
function FF(X, Y, Z, j) {
  return j >= 0 && j <= 15 ? xor(xor(X, Y), Z) : or(or(and(X, Y), and(X, Z)), and(Y, Z))
}

/**
 * 布尔函数 GG
 */
function GG(X, Y, Z, j) {
  return j >= 0 && j <= 15 ? xor(xor(X, Y), Z) : or(and(X, Y), and(not(X), Z))
}

/**
 * 压缩函数
 */
function CF(V, Bi) {
  // 消息扩展
  const W = []
  const M = [] // W'

  // 将消息分组B划分为 16 个字 W0， W1，……，W15
  for (let i = 0; i < 16; i++) {
    const start = i * 4
    W.push(Bi.slice(start, start + 4))
  }

  // W16 ～ W67：W[j] <- P1(W[j−16] xor W[j−9] xor (W[j−3] <<< 15)) xor (W[j−13] <<< 7) xor W[j−6]
  for (let j = 16; j < 68; j++) {
    W.push(xor(
      xor(
        P1(
          xor(
            xor(W[j - 16], W[j - 9]),
            rotl(W[j - 3], 15)
          )
        ),
        rotl(W[j - 13], 7)
      ),
      W[j - 6]
    ))
  }

  // W′0 ～ W′63：W′[j] = W[j] xor W[j+4]
  for (let j = 0; j < 64; j++) {
    M.push(xor(W[j], W[j + 4]))
  }

  // 压缩
  const T1 = [0x79, 0xcc, 0x45, 0x19]
  const T2 = [0x7a, 0x87, 0x9d, 0x8a]
  // 字寄存器
  let A = V.slice(0, 4)
  let B = V.slice(4, 8)
  let C = V.slice(8, 12)
  let D = V.slice(12, 16)
  let E = V.slice(16, 20)
  let F = V.slice(20, 24)
  let G = V.slice(24, 28)
  let H = V.slice(28, 32)
  // 中间变量
  let SS1
  let SS2
  let TT1
  let TT2
  for (let j = 0; j < 64; j++) {
    const T = j >= 0 && j <= 15 ? T1 : T2
    SS1 = rotl(add(
      add(rotl(A, 12), E),
      rotl(T, j)
    ), 7)
    SS2 = xor(SS1, rotl(A, 12))

    TT1 = add(add(add(FF(A, B, C, j), D), SS2), M[j])
    TT2 = add(add(add(GG(E, F, G, j), H), SS1), W[j])

    D = C
    C = rotl(B, 9)
    B = A
    A = TT1
    H = G
    G = rotl(F, 19)
    F = E
    E = P0(TT2)
  }

  return xor([].concat(A, B, C, D, E, F, G, H), V)
}

/**
 * sm3 本体
 */
function sm3(array) {
  // 填充
  let len = array.length * 8

  // k 是满足 len + 1 + k = 448mod512 的最小的非负整数
  let k = len % 512
  // 如果 448 <= (512 % len) < 512，需要多补充 (len % 448) 比特'0'以满足总比特长度为512的倍数
  k = k >= 448 ? 512 - (k % 448) - 1 : 448 - k - 1

  // 填充
  const kArr = new Array((k - 7) / 8)
  for (let i = 0, len = kArr.length; i < len; i++) kArr[i] = 0
  const lenArr = []
  len = len.toString(2)
  for (let i = 7; i >= 0; i--) {
    if (len.length > 8) {
      const start = len.length - 8
      lenArr[i] = parseInt(len.substr(start), 2)
      len = len.substr(0, start)
    } else if (len.length > 0) {
      lenArr[i] = parseInt(len, 2)
      len = ''
    } else {
      lenArr[i] = 0
    }
  }
  const m = [].concat(array, [0x80], kArr, lenArr)

  // 迭代压缩
  const n = m.length / 64
  let V = [0x73, 0x80, 0x16, 0x6f, 0x49, 0x14, 0xb2, 0xb9, 0x17, 0x24, 0x42, 0xd7, 0xda, 0x8a, 0x06, 0x00, 0xa9, 0x6f, 0x30, 0xbc, 0x16, 0x31, 0x38, 0xaa, 0xe3, 0x8d, 0xee, 0x4d, 0xb0, 0xfb, 0x0e, 0x4e]
  for (let i = 0; i < n; i++) {
    const start = 64 * i
    const B = m.slice(start, start + 64)
    V = CF(V, B)
  }
  return V
}

/**
 * hmac 实现
 */
const blockLen = 64
const iPad = new Array(blockLen)
const oPad = new Array(blockLen)
for (let i = 0; i < blockLen; i++) {
  iPad[i] = 0x36
  oPad[i] = 0x5c
}
function hmac(input, key) {
  // 密钥填充
  if (key.length > blockLen) key = sm3(key)
  while (key.length < blockLen) key.push(0)

  const iPadKey = xor(key, iPad)
  let hash = iPadKey.concat(input)
  hash = sm3(hash)

  const oPadKey = xor(key, oPad)
  hash = oPadKey.concat(hash)
  hash = sm3(hash)

  return hash
}

if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'sm3', { enumerable: true, configurable: true, get: function() { return sm3; } });Object.defineProperty(exports, 'hmac', { enumerable: true, configurable: true, get: function() { return hmac; } });



}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1662259787352);
})()
//miniprogram-npm-outsideDeps=["jsbn"]
//# sourceMappingURL=index.js.map