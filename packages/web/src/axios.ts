import axios, { AxiosError, AxiosRequestConfig } from 'axios'

import { version } from '../package.json'

function isAxiosError(e: any): e is AxiosError {
	return e.isAxiosError
}

async function axiosPromiseWrapper(p: Promise<any>) {
	try {
		return await p
	} catch (e) {
		if (isAxiosError(e)) {
			if ((e.response?.data as any)?.error) {
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				const { error, error_description } = e.response!.data as any
				throw new Error(`认证服务器返回错误 ${error}: ${error_description}`)
			}
		}
		throw e
	}
}

export async function axiosGet(
	url: string,
	options?: AxiosRequestConfig<string>
) {
	const _options = mergeOptions(options)
	return axiosPromiseWrapper(axios.get(url, _options))
}

export async function axiosPost(
	url: string,
	data?: any,
	options?: AxiosRequestConfig<string>
) {
	const _options = mergeOptions(options)
	return axiosPromiseWrapper(axios.post(url, data, _options))
}

function mergeOptions (options?: AxiosRequestConfig<string>): AxiosRequestConfig {
	const _options = Object.assign({}, options || {}, {
		headers: {
			...options?.headers,
			'x-authing-request-from': 'sdk-web',
			'x-authing-sdk-version': version
		}
	})
	return _options
}
