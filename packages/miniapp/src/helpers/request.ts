import { AuthingMove } from '../AuthingMove'

import { WxRequestConfig } from '@authing/authingmove-core'

import { version } from '../../package.json'

import { returnSuccess, returnError } from './return'

import { SDKResponse } from 'src/types'

enum ResponseDataType {
  NOT_INTERCEPTED_SUCCESS = 0,
  NOT_INTERCEPTED_ERROR = 1,
  INTERCEPTED_SUCCESS = 2,
  INTERCEPTED_ERROR = 3
}

export async function request(options: WxRequestConfig): Promise<SDKResponse<any>> {
	try {
		const _options = Object.assign({}, options, {
			header: {
				...options.header,
				'x-authing-request-from': 'sdk-miniapp',
				'x-authing-sdk-version': version
			}
		})

		const { data } = await AuthingMove.request(_options)

		const interceptRes = interceptResponseData(options.url, data)

		switch (interceptRes) {
			case ResponseDataType.NOT_INTERCEPTED_SUCCESS:
				return returnSuccess(data.data || data)
			case ResponseDataType.INTERCEPTED_SUCCESS:
				return returnSuccess(data)
			default:
				return returnError(data)
		}
	} catch (e) {
		return returnError({
			message: JSON.stringify(e)
		})
	}
}

function interceptResponseData (url: string, data: any) {
	const intercepts = [
		{
			test: /(\/api\/v3\/system)$/,
			validate () {
				if (data.rsa || data.sm2) {
					return true
				}
				return false
			}
		},
		{
			test: /(\/oidc\/token)$/,
			validate () {
				if (data.access_token || data.id_token) {
					return true
				}
				return false
			}
		},
		{
			test: /(\/oidc\/token\/revocation)$/,
			validate () {
				return data === ''
			}
		}
	]

	for (let i = 0; i < intercepts.length; i++) {
		const matched = url.match(intercepts[i].test)

		if (matched && matched[0]) {
			if (intercepts[i].validate()) {
				return ResponseDataType.INTERCEPTED_SUCCESS
			}
			return ResponseDataType.INTERCEPTED_ERROR
		}
	}

	if (data.statusCode === 200) {
		return ResponseDataType.NOT_INTERCEPTED_SUCCESS
	}

	return ResponseDataType.NOT_INTERCEPTED_ERROR
}
