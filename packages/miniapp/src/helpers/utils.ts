export function getLoginStateKey(appId: string): string {
  return ['authing', appId, 'login-state'].join(':')
}

export function getCodeKey (appId: string): string {
  return ['authing', appId, 'code'].join(':')
}
