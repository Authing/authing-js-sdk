import {
  generateRandomEmail,
  generateRandomString,
  getOptionsFromEnv
} from '../testing-helper';
import test from 'ava';
import { AuthenticationClient } from './AuthenticationClient';
import { authenticator } from 'otplib';
const options = getOptionsFromEnv();
const authenticationClient = new AuthenticationClient(options);

test('获取用户 MFA 认证器列表', async t => {
  const password = generateRandomString(14);
  const email = generateRandomEmail().toLocaleLowerCase();
  await authenticationClient.registerByEmail(email, password);
  await authenticationClient.loginByEmail(email, password);
  const result = await authenticationClient.mfa.getMfaAuthenticators({
    type: 'totp'
  });
  t.assert(Array.isArray(result));
  t.assert(result.length === 0);
});

test('用户请求绑定 MFA 认证器', async t => {
  const password = generateRandomString(14);
  const email = generateRandomEmail().toLocaleLowerCase();
  await authenticationClient.registerByEmail(email, password);
  await authenticationClient.loginByEmail(email, password);
  const result = await authenticationClient.mfa.assosicateMfaAuthenticator({
    authenticatorType: 'totp'
  });

  t.assert(result.authenticator_type === 'totp');
  t.assert(typeof result.secret === 'string');
  t.assert(typeof result.qrcode_uri === 'string');
  t.assert(typeof result.qrcode_data_url === 'string');
  t.assert(typeof result.recovery_code === 'string');
});

test('用户解绑 MFA 认证器', async t => {
  const password = generateRandomString(14);
  const email = generateRandomEmail().toLocaleLowerCase();
  await authenticationClient.registerByEmail(email, password);
  await authenticationClient.loginByEmail(email, password);
  const result = await authenticationClient.mfa.assosicateMfaAuthenticator({
    authenticatorType: 'totp'
  });

  t.assert(result.authenticator_type === 'totp');
  t.assert(typeof result.secret === 'string');
  t.assert(typeof result.qrcode_uri === 'string');
  t.assert(typeof result.qrcode_data_url === 'string');
  t.assert(typeof result.recovery_code === 'string');

  const deleteResult = await authenticationClient.mfa.deleteMfaAuthenticator();
  t.assert(deleteResult.code === 200);
});

test('用户确认绑定 MFA 认证器', async t => {
  const password = generateRandomString(14);
  const email = generateRandomEmail().toLocaleLowerCase();
  await authenticationClient.registerByEmail(email, password);
  await authenticationClient.loginByEmail(email, password);
  const result = await authenticationClient.mfa.assosicateMfaAuthenticator({
    authenticatorType: 'totp'
  });

  t.assert(result.authenticator_type === 'totp');
  t.assert(typeof result.secret === 'string');
  t.assert(typeof result.qrcode_uri === 'string');
  t.assert(typeof result.qrcode_data_url === 'string');
  t.assert(typeof result.recovery_code === 'string');
  const code = authenticator.generate(result.secret);
  const confirmResult = await authenticationClient.mfa.confirmAssosicateMfaAuthenticator(
    {
      authenticatorType: 'totp',
      totp: code
    }
  );
  t.assert(confirmResult.code === 200);
});

test('MFA 口令二次认证', async t => {
  const password = generateRandomString(14);
  const email = generateRandomEmail().toLocaleLowerCase();
  await authenticationClient.registerByEmail(email, password);
  await authenticationClient.loginByEmail(email, password);
  const result = await authenticationClient.mfa.assosicateMfaAuthenticator({
    authenticatorType: 'totp'
  });

  t.assert(result.authenticator_type === 'totp');
  t.assert(typeof result.secret === 'string');
  t.assert(typeof result.qrcode_uri === 'string');
  t.assert(typeof result.qrcode_data_url === 'string');
  t.assert(typeof result.recovery_code === 'string');
  const code = authenticator.generate(result.secret);
  const confirmResult = await authenticationClient.mfa.confirmAssosicateMfaAuthenticator(
    {
      authenticatorType: 'totp',
      totp: code
    }
  );
  t.assert(confirmResult.code === 200);

  try {
    await authenticationClient.loginByEmail(email, password);
    t.fail('开启 MFA 失败');
  } catch (err) {
    t.assert(err.code === 1635);
    const code = authenticator.generate(result.secret);
    const verifyResult = await authenticationClient.mfa.verifyTotpMfa({
      totp: code,
      mfaToken: err.data.mfaToken
    });
    t.assert(verifyResult.id);
  }
});

test('MFA 恢复代码二次认证', async t => {
  const password = generateRandomString(14);
  const email = generateRandomEmail().toLocaleLowerCase();
  await authenticationClient.registerByEmail(email, password);

  await authenticationClient.loginByEmail(email, password);

  const result = await authenticationClient.mfa.assosicateMfaAuthenticator({
    authenticatorType: 'totp'
  });
  t.assert(result.authenticator_type === 'totp');
  t.assert(typeof result.secret === 'string');
  t.assert(typeof result.qrcode_uri === 'string');
  t.assert(typeof result.qrcode_data_url === 'string');
  t.assert(typeof result.recovery_code === 'string');
  const code = authenticator.generate(result.secret);
  const confirmResult = await authenticationClient.mfa.confirmAssosicateMfaAuthenticator(
    {
      authenticatorType: 'totp',
      totp: code
    }
  );
  t.assert(confirmResult.code === 200);
  try {
    await authenticationClient.loginByEmail(email, password);
    t.fail('开启 MFA 失败');
  } catch (err) {
    t.assert(err.code === 1635);
    const verifyResult = await authenticationClient.mfa.verifyTotpRecoveryCode({
      recoveryCode: result.recovery_code,
      mfaToken: err.data.mfaToken
    });
    t.assert(verifyResult.id);
  }
});
