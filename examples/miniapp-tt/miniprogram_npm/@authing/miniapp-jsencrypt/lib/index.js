import{JSEncrypt}from"./jsencrypt";export function encryptFunction(t,n){const r=new JSEncrypt({});r.setPublicKey(n);return r.encrypt(t).toString()}
//# sourceMappingURL=index.js.map