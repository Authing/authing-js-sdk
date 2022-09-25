export function getLoginStateKey(appId: string): string {
  return ['authing', appId, 'login-state'].join(':')
}

export function getWxLoginCodeKey (appId: string): string {
  return ['authing', appId, 'wx-login-code'].join(':')
}
