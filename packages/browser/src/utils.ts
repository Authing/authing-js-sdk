import { STORAGE_KEY_PREFIX } from './constants';
import { StrDict } from './types';

export function createQueryParams(params: any) {
  return Object.keys(params)
    .filter((k) => params[k] !== null && params[k] !== undefined)
    .map(
      (k) =>
        encodeURIComponent(k) + '=' + encodeURIComponent(params[k] as string),
    )
    .join('&');
}

export function loginStateKey(appId: string) {
  return [STORAGE_KEY_PREFIX, appId, 'login-state'].join(':');
}

export function transactionKey(appId: string, state: string) {
  return [STORAGE_KEY_PREFIX, appId, 'tx', state].join(':');
}

export function getCrypto() {
  //ie 11.x uses msCrypto
  return (window.crypto || (window as any).msCrypto) as Crypto;
}

export function getCryptoSubtle() {
  const crypto = getCrypto();
  //safari 10.x uses webkitSubtle
  return crypto.subtle || (crypto as any).webkitSubtle;
}

export function createRandomString(length: number) {
  const charset =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const randomValues = Array.from(
    getCrypto().getRandomValues(new Uint8Array(length)),
  );
  return randomValues.map((v) => charset[v % charset.length]).join('');
}

export function string2Buf(str: string) {
  const buffer: number[] = [];
  for (let i = 0; i < str.length; ++i) {
    buffer.push(str.charCodeAt(i));
  }
  return new Uint8Array(buffer);
}

function buf2Base64Url(buffer: ArrayBuffer) {
  const ie11SafeInput = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < ie11SafeInput.byteLength; ++i) {
    binary += String.fromCharCode(ie11SafeInput[i]);
  }
  const base64 = window.btoa(binary);
  const charMapping: StrDict = { '+': '-', '/': '_', '=': '' };
  return base64.replace(/[+/=]/g, (ch: string) => charMapping[ch]);
}

export async function genPKCEPair(algorithm = 'SHA-256') {
  // 规定最少 43 个字符
  const codeVerifier = createRandomString(43);
  const hash = await getCryptoSubtle().digest(
    algorithm,
    string2Buf(codeVerifier),
  );
  const codeChallenge = buf2Base64Url(hash);
  return { codeChallenge, codeVerifier };
}

export function domainC14n(domain: string) {
  const domainExp =
    /^((?:http)|(?:https):\/\/)?((?:[\w-_]+)(?:\.[\w-_]+)+)(?:\/.*)?$/;
  const matchRes = domainExp.exec(domain);
  if (matchRes && matchRes[2]) {
    return `${matchRes[1] ?? 'https://'}${matchRes[2]}`;
  }
  throw Error(`无效的域名配置: ${domain}`);
}

export function parseToken(token: string) {
  let [header, body, sig] = token.split('.');
  if (!sig) {
    throw new Error('无效的 Token 格式');
  }

  const headerObj = JSON.parse(window.atob(header));
  if (headerObj.enc) {
    throw new Error(
      '本 SDK 目前不支持处理加密 Token, 请在应用配置中关闭「ID Token 加密」功能',
    );
  }

  body = body.replace(/-/g, '+').replace(/_/g, '/');
  body = decodeURIComponent(window.atob(body).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return {
    header: headerObj,
    body: JSON.parse(body),
  };
}

export function isIE() {
  if (
    window.navigator.userAgent.indexOf('MSIE') >= 1 ||
    (window.navigator.userAgent.indexOf('Trident') >= 1 &&
      window.navigator.userAgent.indexOf('rv') >= 1) ||
    window.navigator.userAgent.indexOf('Edge') >= 1
  ) {
    return true;
  }

  return false;
}
