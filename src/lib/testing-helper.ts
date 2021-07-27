import { AuthenticationClientOptions } from "./authentication/types";

require('dotenv').config({
  path: '.env'
});

/** 随机字符串 **/
export const randomString = () =>
  Math.random()
    .toString(36)
    .slice(2);

/**
 * 睡眠函数
 * @param ms 毫秒
 */
export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * 从环境变量中读取配置
 *
 */
export const getOptionsFromEnv = ()=> {
  return {
    userPoolId: process.env.AUTHING_USERPOOL_ID,
    secret: process.env.AUTHING_USERPOOL_SECRET,
    appId: process.env.AUTHING_APP_ID,
    appHost: process.env.AUTHING_APP_HOST,
    host: process.env.AUTHING_HOST,
    timeout: 10000,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`
  };
};

/**
 * 从环境变量中读取初始化 AuthenticationClient 的配置
 *
 */
export const getAuthenticationClientOptionsFromEnv = (): AuthenticationClientOptions => {
  return {
    appId: process.env.AUTHING_APP_ID,
    secret: process.env.AUTHING_APP_SECRET,
    appHost: process.env.AUTHING_APP_HOST,
    timeout: 10000,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4xKeUgQ+Aoz7TLfAfs9+paePb
5KIofVthEopwrXFkp8OCeocaTHt9ICjTT2QeJh6cZaDaArfZ873GPUn00eOIZ7Ae
+TiA2BKHbCvloW3w5Lnqm70iSsUi5Fmu9/2+68GZRH9L7Mlh8cFksCicW2Y2W2uM
GKl64GDcIq3au+aqJQIDAQAB
-----END PUBLIC KEY-----`,
    privateKeys: [
      {
        pkcs8Key: `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg7Q4beu7/xHDfjBpU
8PaB7HgE5QwrRfC5U8Mg/Q1xsfWhRANCAASZfUYKKXRay8XRdnxe/uRFw84O8nHu
MVJy77bQcNHNpLt0Ed2Rguc+f9Oj1FwsaZjYtkL16kb+i5xiN8dF7vhR
-----END PRIVATE KEY-----`,
        alg: 'ECDH-ES',
        // kid: 'VoDy8rNxx1FN_xXlMYUfhUAXo6J5hTI3cgpUQ8qEB5s',
      },
      {
        pkcs8Key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAnGLJX76fpkai
5OFgrfPonw9kFYTQqS65pEtSQVxk3ttt7L1yGon5RupF+0tVk9VGg4IqOgTlB+LB
js7gyfzr8Tv5TClD5/J8mfdTmNlZ6mEmOGKkdxUQlBjrIcCYuBfTllMS6COKnXgg
VLA9sNrt+RUQfrJBpcCY1uG6QY2WfwewZuepBUzhBRmPcAIUX8/DH1w0+V5xw5n6
BgtLfimRbAH/uY2ocgI6b01F8m1x0TxH8OkLAvlW+NCqv71E/UTBZdsX4wR7Nyo+
SxL9Ute5y4YiK5oVRYODA5F33Exb46AZ0ac9mB+NBpfVXXvvb1ZqLzdIVloz1LkF
nPwT4qPlAgMBAAECggEAIpv3JDgQCJ/YEW0PElAvg50RJuq28sdznefnoOAdugJR
a28em2IpaKFVdz2wS7BEomb+/JdwSbchB6ahhcLFr5+pJyKIR6tl5v3Dc0IDzCRR
UIzRLLw5DMGPuLBX6xkpLtvUEZGk0UN6UlTlVjBxJlGbd1tMrH8cHFqANPeSeXgK
HAkBgMe6uInhQ//AwOSzx818f19cPLeaVYUPIgHYPvhn59z976kP2vuELiXR164V
7GF3KhS4bbcHOxA2lDafcCicHv3wz5zsjm4UMWlFZ4/3jvQ7hrrYmpLAQYexBVo2
hQdfQQMkkKSeNTfoUFpllu8PidLFNm30m6WNZdCoAQKBgQDfuGPzCRVO1a2nxFDI
dH3U3CSioWEzSN9sTZeBtGfhRXG8ljxRTOwne19NPqFBviF9hN0YVxtWkbFoFjS5
dpXXP5XttaMBwQC5DOE+8Xy1W5ur/lVAVkOivcE4CSGdYWhkY14MWAxfhuXfKeBQ
8CBze/g8IgU5OIFcCTl2TKxpnwKBgQDcZuZ8woT1sM6JJNbGIdng5CtTu1YtVPtU
WEVkkScaXbPcXNxp/tlX4DTjS/ggoDW11r4sRx/t2R3o4fJIlGC9XBJxZHdRvLJZ
/Vspn16uhhH1SzuwHdNIpxlrFB8mWNiKVn9Wil0FKLX2t4eoCP0EpAbXIWWr6YSD
u9HvRSrL+wKBgFOxQkrYGg2M6FL7oRDsa2pnFJl2b8tktphoioYuPDJM7ViUh2oO
scWvZJ6cEG1suFChlKiXZZXEGS8MJ5s+Hp4QnoD300xDrIaNp/IJGxMpexojojbY
TqMiA5d36whaOVhcyAEsKyzNZU9P9iexPSKWvO2Z+IRIfDQ3CzUTR+iXAoGBAJ7k
dD/3QEGcEJngfBHk751pAS9hPDR8MqDQ7l4dIxKoAPXZ4HFt8CShF5/R8fUbav1H
7lwffo5LW3u8AJ6AkemSCh3Dbx33KqEjvOgZ4/lv4Fx1u3cxWVPkW7fNjtNnc9zv
lOe/4mXIvr45+8uRh08kLWZExnaUaBtMeYHE3KCnAoGBALWN8fJdwusA+BXu8K5P
zXVMiOI9EkDR940A3mvRNuI48SezoakFh5CSQA+krfWiPv9K/DRmEyGuwRJjzi/I
ydUWFelLxpjoyJBNR2DlmvKnbgDg4OGUHFvRrNGaHa3sR6oHrVI2fuJQN9D8G+vR
4rQ230YU31uAZi0n/E/3Iesw
-----END PRIVATE KEY-----`,
        alg: 'RSA-OAEP',
        kid: '-1OfMjIESJvQyEcOsapn-m2Iwvu9D6B3M76_uU9_3wA',
      },
    ],
  };
};

/**
 * @description 生成随机字符串
 *
 */
export function generateRandomString(length: number = 30) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function generateRandomEmail() {
  return generateRandomString(14) + '@example.com';
}

/**
 * @description 生成随机手机号
 *
 */
export const generateRandomPhone = () => {
  const headerNums = new Array(
    '139',
    '138',
    '137',
    '136',
    '135',
    '134',
    '159',
    '158',
    '157',
    '150',
    '151',
    '152',
    '188',
    '187',
    '182',
    '183',
    '184',
    '178',
    '130',
    '131',
    '132',
    '156',
    '155',
    '186',
    '185',
    '176',
    '133',
    '153',
    '189',
    '180',
    '181',
    '177'
  );
  const headerNum = headerNums[Math.floor(Math.random() * 10)];
  const bodyNum = Math.random()
    .toString()
    .replace('0.', '')
    .slice(0, 8);
  return headerNum + bodyNum;
};
