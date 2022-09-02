export function getLoginStateKey(appId: string): string {
  return ['authing', appId, 'login-state'].join(':')
}
