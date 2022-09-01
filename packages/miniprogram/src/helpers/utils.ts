export function getAccessTokenKey(appId: string) {
  return ['authing', appId, 'access_token'].join(':')
}

export function getIdTokenKey(appId: string) {
  return ['authing', appId, 'id_token'].join(':')
}

export function getRefreshTokenKey(appId: string) {
  return ['authing', appId, 'refresh_token'].join(':')
}
