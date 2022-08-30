// import { StorageProvider } from './storage/interface';
import { ImplicitResponseType, RedirectResponseMode } from './types';

export interface IDToken {
  sub: string;
  username: string;
}

export interface AccessToken {
  scopes: string[];
}

export interface AuthingSPAInitOptions {
  /**
   * 认证域名
   *
   * 如果应用未开启单点登录，使用应用域名；如果应用开启了单点登录，使用用户池域名
   */
  domain: string; // TODO: 认证模型调整后统一使用用户池域名

  /**
   * 应用 ID
   */
  appId: string;

  /**
   * 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
   *
   * 如果为 null，必须在 loginWithRedirect 中指定
   */
  redirectUri: string | null;

  /**
   * 登出回调地址，需要在控制台『应用配置 - 登出回调 URL』中指定
   *
   * 如果为空，登出流程会在 Authing 中止，不会进行后续的回调
   */
  logoutRedirectUri?: string;

  /**
   * 应用侧向 Authing 请求的权限，以空格分隔，默认为 'openid profile'
   *
   * 成功获取的权限会出现在 Access Token 的 scope 字段中
   *
   * 一些示例：
   * - openid: OIDC 标准规定的权限，必须包含
   * - profile: 获取用户的基本身份信息
   * - offline_access: 获取用户的 Refresh Token，可用于调用 refreshLoginState 刷新用户的登录态
   */
  scope?: string;

  /**
   * 在回调端点处，是否重定向回最初发起登录的 URL
   */
  redirectToOriginalUri?: boolean;

  /**
   * 回调时在何处携带身份凭据，默认为 fragment
   *
   * - fragment: 在 URL hash 中携带
   * - query: 在查询参数中携带
   */
  redirectResponseMode?: RedirectResponseMode;

  /**
   * 是否使用 OIDC implicit 模式替代默认的 PKCE 模式
   *
   * 由于 implicit 模式安全性较低，不推荐使用，只用于兼容不支持 crypto 的浏览器
   */
  useImplicitMode?: boolean;

  /**
   * implicit 模式返回的凭据种类，默认为 'token id_token'
   *
   * - token: 返回 Access Token
   * - id_token: 返回 ID Token
   */
  implicitResponseType?: ImplicitResponseType;

  /**
   * 是否在每次获取登录态时请求 Authing 检查 Access Token 有效性，可用于单点登出场景，默认为 false
   *
   * 如果设为 true，需要在控制台中将『应用配置』-『其他配置』-『检验 token 身份验证方式』设为 none
   */
  introspectAccessToken?: boolean;

  /**
   * 弹出窗口的宽度
   */
  popupWidth?: number;

  /**
   * 弹出窗口的高度
   */
  popupHeight?: number;
}

export interface LoginState {
  accessToken?: string;
  idToken?: string;
  parsedIdToken?: IDToken;
  parsedAccessToken?: AccessToken;
  expireAt?: number;
  timestamp: number;
}

export interface LoginStateWithCustomStateData extends LoginState {
  customState?: any;
}

export interface LoginTransaction {
  codeVerifier?: string;
  state: string;
  nonce: string;
  redirectUri: string;
  originalUri?: string;
  customState?: any;
}

export interface AuthzURLParams {
  redirect_uri: string;
  response_type: string;
  response_mode: string;
  client_id: string;
  state: string;
  nonce: string;
  scope: string;
  prompt?: string;
  code_challenge?: string;
  code_challenge_method?: 'S256';
  id_token_hint?: string;
}

export interface LogoutURLParams {
  post_logout_redirect_uri?: string;
  id_token_hint?: string;
  state?: string;
}

export interface PKCETokenParams {
  grant_type: 'authorization_code';
  client_id: string;
  code: string;
  code_verifier: string;
  redirect_uri: string;
}

export interface OIDCTokenResponse {
  access_token: string;
  id_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
}

export interface OIDCWebMessageResponse {
  code?: string;
  accessToken?: string;
  idToken?: string;
  refreshToken?: string;
  error?: string;
  errorDesc?: string;
  state?: string;
}

export interface UserInfo extends Record<string, any> {
  sub: string;
  name: string;
  nickname: string;
  given_name: string;
  family_name: string;
  birthdate: string;
  gender: 'M' | 'F' | 'U';
  picture: string;
  updated_at: string;
  zoneinfo: string;
  preferred_username: string;
  locale: string;
}

export interface IDToken extends UserInfo {
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  nonce: string;
  at_hash: string;
  s_hash: string;
}

export interface AccessToken {
  jti: string;
  sub: string;
  iat: number;
  exp: number;
  scope: string;
  iss: string;
  aud: string;
}
