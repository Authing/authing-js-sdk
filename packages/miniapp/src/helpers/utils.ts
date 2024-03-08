import {
	Platforms,
} from '../types'


export function getLoginStateKey(appId: string): string {
	return ['authing', appId, 'login-state'].join(':')
}

export function getPlatformLoginCodeKey (appId: string,platform: Platforms | undefined): string {

	return ['authing', appId, `${platform ? platform : 'wx' }-login-code`].join(':')
}
