import{BigInteger}from"jsbn";const TWO=new BigInteger("2"),THREE=new BigInteger("3");class ECFieldElementFp{constructor(t,i){this.x=i,this.q=t}equals(t){return t===this||this.q.equals(t.q)&&this.x.equals(t.x)}toBigInteger(){return this.x}negate(){return new ECFieldElementFp(this.q,this.x.negate().mod(this.q))}add(t){return new ECFieldElementFp(this.q,this.x.add(t.toBigInteger()).mod(this.q))}subtract(t){return new ECFieldElementFp(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))}multiply(t){return new ECFieldElementFp(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))}divide(t){return new ECFieldElementFp(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))}square(){return new ECFieldElementFp(this.q,this.x.square().mod(this.q))}}class ECPointFp{constructor(t,i,e,s){this.curve=t,this.x=i,this.y=e,this.z=null==s?BigInteger.ONE:s,this.zinv=null}getX(){return null===this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}getY(){return null===this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}equals(t){if(t===this)return!0;if(this.isInfinity())return t.isInfinity();if(t.isInfinity())return this.isInfinity();if(!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(BigInteger.ZERO))return!1;return t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(BigInteger.ZERO)}isInfinity(){return null===this.x&&null===this.y||this.z.equals(BigInteger.ZERO)&&!this.y.toBigInteger().equals(BigInteger.ZERO)}negate(){return new ECPointFp(this.curve,this.x,this.y.negate(),this.z)}add(t){if(this.isInfinity())return t;if(t.isInfinity())return this;const i=this.x.toBigInteger(),e=this.y.toBigInteger(),s=this.z,r=t.x.toBigInteger(),n=t.y.toBigInteger(),u=t.z,l=this.curve.q,h=i.multiply(u).mod(l),g=r.multiply(s).mod(l),o=h.subtract(g),m=e.multiply(u).mod(l),a=n.multiply(s).mod(l),d=m.subtract(a);if(BigInteger.ZERO.equals(o))return BigInteger.ZERO.equals(d)?this.twice():this.curve.infinity;const I=h.add(g),c=s.multiply(u).mod(l),y=o.square().mod(l),p=o.multiply(y).mod(l),q=c.multiply(d.square()).subtract(I.multiply(y)).mod(l),B=o.multiply(q).mod(l),f=d.multiply(y.multiply(h).subtract(q)).subtract(m.multiply(p)).mod(l),E=p.multiply(c).mod(l);return new ECPointFp(this.curve,this.curve.fromBigInteger(B),this.curve.fromBigInteger(f),E)}twice(){if(this.isInfinity())return this;if(!this.y.toBigInteger().signum())return this.curve.infinity;const t=this.x.toBigInteger(),i=this.y.toBigInteger(),e=this.z,s=this.curve.q,r=this.curve.a.toBigInteger(),n=t.square().multiply(THREE).add(r.multiply(e.square())).mod(s),u=i.shiftLeft(1).multiply(e).mod(s),l=i.square().mod(s),h=l.multiply(t).multiply(e).mod(s),g=u.square().mod(s),o=n.square().subtract(h.shiftLeft(3)).mod(s),m=u.multiply(o).mod(s),a=n.multiply(h.shiftLeft(2).subtract(o)).subtract(g.shiftLeft(1).multiply(l)).mod(s),d=u.multiply(g).mod(s);return new ECPointFp(this.curve,this.curve.fromBigInteger(m),this.curve.fromBigInteger(a),d)}multiply(t){if(this.isInfinity())return this;if(!t.signum())return this.curve.infinity;const i=t.multiply(THREE),e=this.negate();let s=this;for(let r=i.bitLength()-2;r>0;r--){s=s.twice();const n=i.testBit(r);n!==t.testBit(r)&&(s=s.add(n?this:e))}return s}}class ECCurveFp{constructor(t,i,e){this.q=t,this.a=this.fromBigInteger(i),this.b=this.fromBigInteger(e),this.infinity=new ECPointFp(this,null,null)}equals(t){return t===this||this.q.equals(t.q)&&this.a.equals(t.a)&&this.b.equals(t.b)}fromBigInteger(t){return new ECFieldElementFp(this.q,t)}decodePointHex(t){switch(parseInt(t.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:const i=this.fromBigInteger(new BigInteger(t.substr(2),16));let e=this.fromBigInteger(i.multiply(i.square()).add(i.multiply(this.a)).add(this.b).toBigInteger().modPow(this.q.divide(new BigInteger("4")).add(BigInteger.ONE),this.q));return e.toBigInteger().mod(TWO).equals(new BigInteger(t.substr(0,2),16).subtract(TWO))||(e=e.negate()),new ECPointFp(this,i,e);case 4:case 6:case 7:const s=(t.length-2)/2,r=t.substr(2,s),n=t.substr(s+2,s);return new ECPointFp(this,this.fromBigInteger(new BigInteger(r,16)),this.fromBigInteger(new BigInteger(n,16)));default:return null}}}export{ECPointFp,ECCurveFp};
//# sourceMappingURL=ec.js.map