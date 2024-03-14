import{BigInteger}from"jsbn";import*as _ from"./utils";import{sm3}from"./sm3";const C1C2C3=0;function doEncrypt(t,e,r=1){t="string"==typeof t?_.hexToArray(_.utf8ToHex(t)):Array.prototype.slice.call(t),e=_.getGlobalCurve().decodePointHex(e);const o=_.generateKeyPairHex(),n=new BigInteger(o.privateKey,16);let a=o.publicKey;a.length>128&&(a=a.substr(a.length-128));const i=e.multiply(n),l=_.hexToArray(_.leftPad(i.getX().toBigInteger().toRadix(16),64)),g=_.hexToArray(_.leftPad(i.getY().toBigInteger().toRadix(16),64)),c=_.arrayToHex(sm3([].concat(l,t,g)));let s=1,y=0,p=[];const m=[].concat(l,g),x=()=>{p=sm3([...m,s>>24&255,s>>16&255,s>>8&255,255&s]),s++,y=0};x();for(let e=0,r=t.length;e<r;e++)y===p.length&&x(),t[e]^=255&p[y++];const f=_.arrayToHex(t);return 0===r?a+f+c:a+c+f}export{doEncrypt};
//# sourceMappingURL=sm2.js.map