import assignUserToRole from './assignUserToRole.js'
import bindOAuth from './bindOAuth.js'
import cdnPreflightFun from './cdnPreflightFun.js'
import changeMFA from './changeMFA.js'
import changePassword from './changePassword.js'
import checkLoginStatus from './checkLoginStatus.js'
import checkPreflight from './checkPreflight.js'
import checkQR from './checkQR.js'
import createRole from './createRole.js'
import decodeToken from './decodeToken.js'
import getAuthedAppList from './getAuthedAppList.js'
import getVerificationCode from './getVerificationCode.js'
import genQRCode from './genQRCode.js'
import list from './list.js'
import login from './login.js'
import loginByLDAP from './loginByLDAP.js'
import loginByOidc from './loginByOidc.js'
import signIn from './signIn.js'
import refreshSignInToken from './refreshSignInToken.js'
import refreshOidcToken from './refreshOidcToken'
import loginByPhoneCode from './loginByPhoneCode.js'
import logout from './logout.js'
import preflightFun from './preflightFun.js'
import queryMFA from './queryMFA.js'
import queryPermissions from './queryPermissions.js'
import queryRoles from './queryRoles.js'
import readOAuthList from './readOAuthList.js'
import readUserOAuthList from './readUserOAuthList.js'
import refreshToken from './refreshToken.js'
import register from './register.js'
import createUser from './register' // register 副本
import remove from './remove.js'
import removeUserFromRole from './removeUserFromRole.js'
import revokeAuthedApp from './revokeAuthedApp.js'
import sendResetPasswordEmail from './sendResetPasswordEmail.js'
import sendVerifyEmail from './sendVerifyEmail.js'
import unbindEmail from './unbindEmail.js'
import unbindOAuth from './unbindOAuth.js'
import update from './update.js'
import user from './user.js'
import userPatch from './userPatch.js'
import verifyResetPasswordVerifyCode from './verifyResetPasswordVerifyCode.js'
import updateRolePermissions from './updateRolePermissions.js'
import getUserPoolSettings from './getUserPoolSettings.js'
import sendActivationEmail from './sendActivationEmail.js'
import getUsersByRole from './getUsersByRole.js'
import updatePhone from './updatePhone.js'
import updateEmail from './updateEmail.js'
import sendChangeEmailVerifyCode from './sendChangeEmailVerifyCode.js'
import _uploadAvatar from './_uploadAvatar.js'
import loginFromLocalStorage from './loginFromLocalStorage.js'
import selectAvatarFile from './selectAvatarFile.js'
import startWXAppScaning from './startWXAppScaning.js'
import updateFailedTips from './updateFailedTips.js'
import updateRetryTips from './updateRetryTips.js'
import updateSuccessTips from './updateSuccessTips.js'
import updateSuccessRedirectTips from './updateSuccessRedirectTips.js'
import loginByPhonePassword from "./loginByPhonePassword"
import sendOneTimePhoneCode from "./sendOneTimePhoneCode"
import sendRegisterPhoneCode from "./sendRegisterPhoneCode"
import casLogout from "./casLogout"
import refreshThirdPartyToken from "./refreshThirdPartyToken"
import authingTokenToOidcToken from './authingTokenToOidcToken'
// authz submodule
import authz from "./authz"
import org from "./org"

// user submodule
import userPermissionList from "./user/userPermissionList"
import userGroupList from "./user/userGroupList"
import userRoleList from "./user/userRoleList"
import metadata from "./user/metadata"
import setMetadata from "./user/setMetadata"
import removeMetadata from "./user/removeMetadata"

// Pipeline submodule
import pipeline from "./pipeline"

// qrcode login module
import qrlogin from "./qrlogin"

// ad connector
import loginByAd from "./loginByAd"
import adConnectorByProvider from "./adConnectorByProvider"
import verifyPhoneCode from "./verifyPhoneCode"

// Node & Browser 共用
let mod = {
  loginByOidc,
  bindOAuth,
  cdnPreflightFun,
  changeMFA,
  changePassword,
  checkLoginStatus,
  checkPreflight,
  checkQR,
  decodeToken,
  genQRCode,
  getAuthedAppList,
  getVerificationCode,
  login,
  loginByLDAP,
  loginByPhoneCode,
  logout,
  preflightFun,
  queryMFA,
  readOAuthList,
  readUserOAuthList,
  register,
  createUser,
  signIn,
  refreshSignInToken,
  revokeAuthedApp,
  sendResetPasswordEmail,
  sendVerifyEmail,
  unbindEmail,
  unbindOAuth,
  update,
  user,
  verifyResetPasswordVerifyCode,
  getUserPoolSettings,
  updatePhone,
  updateEmail,
  sendChangeEmailVerifyCode,
  userPermissionList,
  userRoleList,
  userGroupList,
  loginByPhonePassword,
  sendOneTimePhoneCode,
  sendRegisterPhoneCode,
  casLogout,
  metadata,
  setMetadata,
  removeMetadata,
  qrlogin,
  loginByAd,
  adConnectorByProvider,
  verifyPhoneCode
}

if (process.env.BUILD_TARGET === 'node') {
  mod = Object.assign(mod, {
    refreshOidcToken,
    createRole,
    assignUserToRole,
    list,
    queryPermissions,
    queryRoles,
    refreshToken,
    refreshThirdPartyToken,
    remove,
    removeUserFromRole,
    userPatch,
    updateRolePermissions,
    sendActivationEmail,
    getUsersByRole,
    authz,
    org,
    pipeline,
    authingTokenToOidcToken,
  })
} else if (process.env.BUILD_TARGET === 'web') {
  mod = Object.assign(mod, {
    _uploadAvatar,
    loginFromLocalStorage,
    updateFailedTips,
    updateRetryTips,
    updateSuccessTips,
    updateSuccessRedirectTips,
    selectAvatarFile,
    startWXAppScaning
  })
}
export default mod;
