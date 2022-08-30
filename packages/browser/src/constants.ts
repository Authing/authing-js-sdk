export const SDK_IDENTIFIER = 'authing-spa';
export const STORAGE_VERSION = '1';

export const STORAGE_KEY_PREFIX = `${SDK_IDENTIFIER}:${STORAGE_VERSION}`;

export const DEFAULT_IFRAME_LOGINSTATE_TIMEOUT = 5000;

export const DEFAULT_POPUP_WIDTH = 800;
export const DEFAULT_POPUP_HEIGHT = 600;

export const DEFAULT_SCOPE = 'openid profile';

export const MSG_PENDING_AUTHZ =
  '另一个认证流程正在进行中，请不要同时发起多个认证';
export const MSG_CROSS_ORIGIN_ISOLATED =
  '当前页面运行在隔离模式下, 无法进行此方式登录, 请使用 loginWithRedirect';
