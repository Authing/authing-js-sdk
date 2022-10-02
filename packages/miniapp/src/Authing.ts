import {
	IStorageProvider,
	EncryptFunction,
	LoginState,
	EncryptType,
	AuthingOptions,
	RefreshTokenOptions,
	WxCodeLoginOptions,
	WxPhoneLoginOptions,
	PasswordLoginOptions,
	PassCodeLoginOptions,
	SendSmsOptions,
	GetPhoneOptions,
	GetUserPhoneResponseData,
	UserInfo,
	UpdatePasswordOptions,
	UploadFileResponseData,
	LoginByCodeOptions,
	SDKResponse,
	UpdateUserInfo,
	SimpleResponseData
} from './types'

import { returnSuccess, returnError } from './helpers/return'

import { getLoginStateKey, getWxLoginCodeKey, request, StorageProvider } from './helpers'

import { AuthingMove } from './AuthingMove'

export class Authing {
	private storage: IStorageProvider
	private readonly options: AuthingOptions
	private readonly encryptFunction?: EncryptFunction

	constructor(options: AuthingOptions) {
		this.options = {
			...options,
			host: options.host || 'https://core.authing.cn'
		}

		this.storage = new StorageProvider()

		this.encryptFunction = options.encryptFunction

		this.resetWxLoginCode()
	}

	async getLoginState(): Promise<SDKResponse<LoginState>> {
		try {
			const res = await this.storage.get(
				getLoginStateKey(this.options.appId)
			)
  
			const loginState: LoginState = res.data

			if (loginState.expires_at > Date.now()) {
				return returnSuccess(loginState)
			}

			return returnError({
				message: 'login state has expired, please login again'
			})
		} catch (e) {
			return returnError({
				message: JSON.stringify(e)
			})
		}
	}

	async clearLoginState(): Promise<SDKResponse<boolean>> {
		try {
			await this.storage.remove(
				getLoginStateKey(this.options.appId)
			)
			return returnSuccess(true)
		} catch (e) {
			return returnError({
				message: JSON.stringify(e)
			})
		}
	}

	private async saveLoginState(
		loginState: LoginState
	): Promise<LoginState> {
		const _loginState: LoginState = {
			...loginState,
			expires_at: loginState.expires_in * 1000 + Date.now() - 3600 * 1000 * 2
		}

		await this.storage.set(
			getLoginStateKey(this.options.appId),
			_loginState
		)

		return _loginState
	}

	async getPublicKey(encryptType: EncryptType): Promise<SDKResponse<string>> {
		try {
			const [error, res] = await request({
				method: 'GET',
				url: `${this.options.host}/api/v3/system`
			})

			if (error) {
				return returnError(error)
			}
  
			return returnSuccess(res[encryptType].publicKey)
		} catch (e) {
			return returnError({
				message: 'get public key error: ' + JSON.stringify(e)
			})
		}
	}

	private async getCachedWxLoginCode (): Promise<string> {
		try {
			const res = await this.storage.get(getWxLoginCodeKey(this.options.appId))
			return res.data
		} catch (e) {
			return ''
		}
	}

	private async cacheWxLoginCode (code: string): Promise<string> {
		try {
			await this.storage.set(getWxLoginCodeKey(this.options.appId), code)
			return code
		} catch (e) {
			return ''
		}
	}

	private async resetWxLoginCode (): Promise<string> {
		const next = async () => {
			try {
				const wxLoginRes = await AuthingMove.login()
				await this.cacheWxLoginCode(wxLoginRes.code)
				return true
			} catch (e) {
				return false
			}
		}

		try {
			await AuthingMove.checkSession()
			const code = await this.getCachedWxLoginCode()
			if (!code) {
				await next()
			}
		} catch (e) {
			this.storage.remove(getWxLoginCodeKey(this.options.appId))
			await next()
		} finally {
			return await this.getCachedWxLoginCode()
		}
	}

	async loginByCode(
		data: LoginByCodeOptions
	): Promise<SDKResponse<LoginState>> {
		const [, loginState] = await this.getLoginState()

		if (loginState && loginState.expires_at > Date.now()) {
			return returnSuccess(loginState)
		}

		const { extIdpConnidentifier, connection, wechatMiniProgramCodePayload, options } = data

		const code  = await this.resetWxLoginCode()

		if (!code) {
			return returnError({
				message: 'get wx login code error'
			})
		}

		const _data: WxCodeLoginOptions = {
			connection: connection || 'wechat_mini_program_code',
			extIdpConnidentifier,
			wechatMiniProgramCodePayload: {
				...wechatMiniProgramCodePayload,
				code
			},
			options
		}

		return await this.login(_data, 'code')
	}

	// async loginByPhone(
	//   data: LoginByPhoneOptions
	// ): Promise<Maybe<LoginState>> {
	//   const loginState = await this.getLoginState()

	//   if (loginState && loginState.expires_at > Date.now()) {
	//     return loginState
	//   }

	//   const { extIdpConnidentifier, connection, wechatMiniProgramPhonePayload, options } = data

	//   const code  = await this.resetWxLoginCode()

	//   if (!code) {
	//     error('loginByPhone', 'get wx login code error')
	//     return null
	//   }

	//   const _data: WxPhoneLoginOptions = {
	//     connection: connection || 'wechat_mini_program_phone',
	//     extIdpConnidentifier,
	//     wechatMiniProgramPhonePayload: {
	//       ...wechatMiniProgramPhonePayload,
	//       code
	//     },
	//     options
	//   }

	//   return await this.login(_data, 'phone')
	// }

	async loginByPassword(
		data: PasswordLoginOptions
	): Promise<SDKResponse<LoginState>> {
		if (
			data.options?.passwordEncryptType &&
      data.options?.passwordEncryptType !== 'none'
		) {
			if (!this.encryptFunction) {
				return returnError({
					message: 'encryptFunction is required, if passwordEncryptType is not "none"'
				})
			}

			const [error, publicKey] = await this.getPublicKey(
				data.options?.passwordEncryptType
			)

			if (error) {
				return returnError(error)
			}

			data.passwordPayload.password = this.encryptFunction(
				data.passwordPayload.password,
        publicKey as string
			)
		}

		const _data: PasswordLoginOptions = {
			...data,
			connection: 'PASSWORD'
		}

		return await this.login(_data, 'password')
	}

	async loginByPassCode(
		data: PassCodeLoginOptions
	): Promise<SDKResponse<LoginState>> {
		if (data.passCodePayload.phone) {
			data.passCodePayload.phoneCountryCode =
        data.passCodePayload.phoneCountryCode || '+86'
		}

		const _data: PassCodeLoginOptions = {
			...data,
			connection: 'PASSCODE'
		}

		return await this.login(_data, 'passCode')
	}

	async logout(): Promise<SDKResponse<boolean>> {
		await this.storage.remove(getWxLoginCodeKey(this.options.appId))
    
		const [loginStateError, loginState] = await this.getLoginState()

		if (loginStateError) {
			return returnSuccess(true)
		}

		const { access_token, expires_at } = loginState as LoginState

		if (!access_token || expires_at < Date.now()) {
			await this.clearLoginState()
			return returnSuccess(true)
		}

		const [logoutError] = await request({
			method: 'POST',
			url: `${this.options.host}/oidc/token/revocation`,
			data: {
				client_id: this.options.appId,
				token: access_token
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			}
		})

		if (logoutError) {
			return returnError(logoutError)
		}

		await this.clearLoginState()

		return returnSuccess(true)
	}

	async sendSms(data: SendSmsOptions): Promise<SDKResponse<SimpleResponseData>> {
		data.phoneCountryCode = data.phoneCountryCode || '+86'

		const [error, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/send-sms`,
			data,
			header: {
				'x-authing-userpool-id': this.options.userPoolId
			}
		})

		if (error) {
			return returnError(error)
		}

		return returnSuccess(res)
	}

	private async login(
		data:
      | WxCodeLoginOptions
      | WxPhoneLoginOptions
      | PasswordLoginOptions
      | PassCodeLoginOptions,
		type: string
	): Promise<SDKResponse<LoginState>> {
		const urlMap: Record<string, string> = {
			code: '/api/v3/signin-by-mobile',
			phone: '/api/v3/signin-by-mobile',
			password: '/api/v3/signin',
			passCode: '/api/v3/signin'
		}

		const [error, res] = await request({
			method: 'POST',
			url: this.options.host + urlMap[type],
			data,
			header: {
				'x-authing-app-id': this.options.appId
			}
		})

		if (error) {
			return returnError(error)
		}

		if (res.access_token || res.id_token) {
			const loginState = await this.saveLoginState(res)
			return returnSuccess(loginState)
		}

		await this.clearLoginState()

		return returnError(res)
	}

	async refreshToken(): Promise<SDKResponse<LoginState>> {
		const [error, loginState] = await this.getLoginState()

		if (error) {
			return returnError({
				message: 'refresh_token has expired, please login again'
			})
		}

		const { refresh_token, expires_at } = loginState as LoginState

		if (!refresh_token) {
			return returnError({
				message: 'refresh_token must not be empty'
			})
		}

		if (expires_at < Date.now()) {
			return returnError({
				message: 'refresh_token has expired, please login again'
			})
		}

		const data: RefreshTokenOptions = {
			grant_type: 'refresh_token',
			redirect_uri: '',
			refresh_token
		}

		const [refreshTokenError, refreshTokenRes] = await request({
			method: 'POST',
			url: `${this.options.host}/oidc/token`,
			data,
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'x-authing-app-id': this.options.appId
			}
		})

		if (refreshTokenError) {
			return returnError(refreshTokenError)
		}

		const newLoginState = await this.saveLoginState(refreshTokenRes)
		return returnSuccess(newLoginState)
	}

	async updatePassword(
		data: UpdatePasswordOptions
	): Promise<SDKResponse<SimpleResponseData>> {
		const [error, loginState] = await this.getLoginState()

		if (error) {
			return returnError({
				message: 'Token has expired, please login again'
			})
		}

		const { access_token, expires_at } = loginState as LoginState

		if (expires_at < Date.now()) {
			return returnError({
				message: 'Token has expired, please login again'
			})
		}

		if (data.passwordEncryptType && data.passwordEncryptType !== 'none') {
			if (!this.encryptFunction) {
				return returnError({
					message: 'encryptFunction is required, if passwordEncryptType is not "none"'
				})
			}

			const [publicKeyError, publicKey] = await this.getPublicKey(data.passwordEncryptType)

			if (publicKeyError) {
				return returnError(publicKeyError)
			}

			data.newPassword = this.encryptFunction(data.newPassword, publicKey as string)
		}

		const [updatePasswordError, updatePasswordRes] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/update-password`,
			data,
			header: {
				'x-authing-userpool-id': this.options.userPoolId,
				Authorization: access_token
			}
		})

		if (updatePasswordError) {
			return returnError(updatePasswordError)
		}

		return returnSuccess(updatePasswordRes)
	}

	async getUserInfo(): Promise<SDKResponse<UserInfo>> {
		const [error, loginState] = await this.getLoginState()

		if (error) {
			return returnError({
				message: 'Token has expired, please login again'
			})
		}

		const { access_token, expires_at } = loginState as LoginState

		if (expires_at < Date.now()) {
			return returnError({
				message: 'Token has expired, please login again'
			})
		}

		const [getProfileError, getProfileRes] = await request({
			method: 'GET',
			url: `${this.options.host}/api/v3/get-profile`,
			header: {
				'x-authing-userpool-id': this.options.userPoolId,
				Authorization: access_token
			}
		})

		if (getProfileError) {
			return returnError(getProfileError)
		}

		return returnSuccess(getProfileRes)
	}

	async updateAvatar(): Promise<SDKResponse<UploadFileResponseData>> {
		try {
			const res = await AuthingMove.chooseImage({
				count: 1,
				sourceType: ['album', 'camera'],
				sizeType: ['original']
			})

			const uploadRes = await AuthingMove.uploadFile({
				url: `${this.options.host}/api/v2/upload?folder=avatar`,
				name: 'file',
				filePath: res.tempFiles[0].tempFilePath
			})

			const parsedUploadRed = JSON.parse(uploadRes.data)

			await this.updateUserInfo({
				photo: parsedUploadRed.data.url
			})

			return returnSuccess(parsedUploadRed)
		} catch (e) {
			return returnError({
				message: JSON.stringify(e)
			})
		}
	}

	async updateUserInfo(data: UpdateUserInfo): Promise<SDKResponse<UserInfo>> {
		const [error, loginState] = await this.getLoginState()

		if (error) {
			return returnError({
				message: 'Token has expired, please login again'
			})
		}

		const { access_token, expires_at }  = loginState as LoginState

		if (expires_at < Date.now()) {
			return returnError({
				message: 'Token has expired, please login again'
			})
		}

		const [updateProfileError, updateProfileRes] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/update-profile`,
			data,
			header: {
				'x-authing-userpool-id': this.options.userPoolId,
				Authorization: access_token
			}
		})

		if (updateProfileError) {
			return returnError(updateProfileError)
		}

		return returnSuccess(updateProfileRes)
	}

	async getPhone(data: GetPhoneOptions): Promise<SDKResponse<GetUserPhoneResponseData>> {
		const [getPhoneError, getPhoneRes] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/get-wechat-miniprogram-phone`,
			data,
			header: {
				'x-authing-userpool-id': this.options.userPoolId
			}
		})

		if (getPhoneError) {
			return returnError(getPhoneError)
		}

		if (getPhoneRes.phone_info) {
			return returnSuccess(getPhoneRes.phone_info)
		}

		return returnError(getPhoneRes)
	}
}
