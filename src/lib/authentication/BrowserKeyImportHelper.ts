function str2ab(str: string) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

function importECDHES(pem: string) {
    // fetch the part of the PEM string between header and footer
    const pemHeader = '-----BEGIN PRIVATE KEY-----';
    const pemFooter = '-----END PRIVATE KEY-----';
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
    // base64 decode the string to get the binary data
    const binaryDerString = window.atob(pemContents);
    // convert from a binary string to an ArrayBuffer
    const binaryDer = str2ab(binaryDerString);

    return window.crypto.subtle.importKey(
        'pkcs8',
        binaryDer,
        {
            name: 'ECDH',
            namedCurve: 'P-256',
        },
        true,
        ['deriveBits'],
    );
}

function importRSAOAEP(pem: string) {
    // fetch the part of the PEM string between header and footer
    const pemHeader = '-----BEGIN PRIVATE KEY-----';
    const pemFooter = '-----END PRIVATE KEY-----';
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
    // base64 decode the string to get the binary data
    const binaryDerString = window.atob(pemContents);
    // convert from a binary string to an ArrayBuffer
    const binaryDer = str2ab(binaryDerString);

    return window.crypto.subtle.importKey(
        'pkcs8',
        binaryDer,
        {
            name: 'RSA-OAEP',
            hash: 'SHA-1',
        },
        true,
        ['decrypt'],
    );
}

function importHS256(key: string) {
    const binaryDer = str2ab(key);
    return window.crypto.subtle.importKey(
        'raw',
        binaryDer,
        {
            name: 'HMAC',
            hash: 'SHA-256',
        },
        true,
        ['verify'],
    );
}

function importAESKW(key: string) {
    const buf = str2ab(key);
    return window.crypto.subtle.importKey(
      'raw',
      buf,
      'AES-KW',
      true,
      ['unwrapKey'],
    );
  }

export { importECDHES, importRSAOAEP, importHS256, importAESKW };
