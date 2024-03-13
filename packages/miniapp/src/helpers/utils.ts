import {
	Platforms,
	PlatformsMenu,
} from '../types'


export function getLoginStateKey(appId: string): string {
	return ['authing', appId, 'login-state'].join(':')
}

export function getPlatformLoginCodeKey (appId: string,platform: Platforms | undefined): string {

	return ['authing', appId, `${platform ? platform : 'wx' }-login-code`].join(':')
}

declare const wx: any
declare const tt: any

export function getCurrentMiniProgram():PlatformsMenu {
	if (typeof tt!== 'undefined'  && typeof tt.getSystemInfo !== 'undefined') {
		return PlatformsMenu.tt
	} else if (typeof wx !== 'undefined' && typeof wx.getSystemInfo !== 'undefined') {
		return PlatformsMenu.wx
	} else  {
		return PlatformsMenu.wx
	}

}
