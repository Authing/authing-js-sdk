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
	SimpleResponseData,
	WxCodeAndPhoneLoginOptions,
	LoginByPhoneOptions,
	SendEmailCodeOptions,
	BindEmailOptions,
	UpdateEmailOptions,
	BindPhoneOptions,
	UpdatePhoneOptions,
	DeleteAccountOptions,
	DecryptDataOptions,
	GetAccessTokenOptions,
	UpdateEmailRequestOptions,
	UpdatePhoneRequestOptions,
	DeleteAccountRequestOptions
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

	async getLoginCode () {
		return await this.resetWxLoginCode()
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
				encryptedData: wechatMiniProgramCodePayload?.encryptedData || '',
				iv: wechatMiniProgramCodePayload?.iv || '',
				code
			},
			options
		}

		return await this.login(_data, 'code')
	}

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

	async loginByPhone (data: LoginByPhoneOptions): Promise<SDKResponse<LoginState>> {
		const [, loginState] = await this.getLoginState()

		if (loginState && loginState.expires_at > Date.now()) {
			return returnSuccess(loginState)
		}

		const { extIdpConnidentifier, wechatMiniProgramCodeAndPhonePayload, options } = data

		const { wxPhoneInfo } = wechatMiniProgramCodeAndPhonePayload

		if (!wxPhoneInfo || !wxPhoneInfo.code) {
			return returnError({
				message: 'wxPhoneInfo.code is required'
			})
		}

		const wxLoginCode  = await this.resetWxLoginCode()

		if (!wxLoginCode) {
			return returnError({
				message: 'get wx login code error'
			})
		}

		const _data: WxCodeAndPhoneLoginOptions = {
			connection: 'wechat_mini_program_code_and_phone',
			extIdpConnidentifier,
			wechatMiniProgramCodeAndPhonePayload: {
				wxPhoneInfo,
				wxLoginInfo: {
					encryptedData: wechatMiniProgramCodeAndPhonePayload?.wxLoginInfo?.encryptedData || '',
					iv: wechatMiniProgramCodeAndPhonePayload?.wxLoginInfo?.iv || '',
					code: wxLoginCode
				}
			},
			options
		}

		return await this.login(_data, 'phone')
	}

	async logout(): Promise<SDKResponse<boolean>> {
  	const [loginStateError, loginState] = await this.getLoginState()

		if (loginStateError) {
			await this.clearLoginState()
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

	async sendEmailCode(data: SendEmailCodeOptions): Promise<SDKResponse<SimpleResponseData>> {
		const [error, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/send-email`,
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
      | PassCodeLoginOptions
			| WxCodeAndPhoneLoginOptions,
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

	// 绑定邮箱
	async bindEmail(data: BindEmailOptions) {
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

		const [bindError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/bind-email`,
			data,
			header: {
				Authorization: access_token,
				'x-authing-userpool-id': this.options.userPoolId,
			}
		})

		if (bindError) {
			return returnError(bindError)
		}

		return returnSuccess(res)
	}

	// 修改邮箱
	async updateEmailRequest(data: UpdateEmailRequestOptions) {
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

		const [updateError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/verify-update-email-request`,
			data,
			header: {
				Authorization: access_token,
				'x-authing-userpool-id': this.options.userPoolId,
			}
		})

		if (updateError) {
			return returnError(updateError)
		}

		return returnSuccess(res)
	}

	async updateEmail(data: UpdateEmailOptions) {
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

		const [updateError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/update-email`,
			data,
			header: {
				Authorization: access_token,
				'x-authing-userpool-id': this.options.userPoolId,
			}
		})

		if (updateError) {
			return returnError(updateError)
		}

		return returnSuccess(res)
	}

	// 绑定手机号
	async bindPhone(data: BindPhoneOptions) {
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

		const [bindError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/bind-phone`,
			data,
			header: {
				Authorization: access_token,
				'x-authing-userpool-id': this.options.userPoolId,
			}
		})

		if (bindError) {
			return returnError(bindError)
		}

		return returnSuccess(res)
	}

	// 修改手机号
	async updatePhoneRequest(data: UpdatePhoneRequestOptions) {
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

		const [updateError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/verify-update-phone-request`,
			data,
			header: {
				Authorization: access_token,
				'x-authing-userpool-id': this.options.userPoolId,
			}
		})

		if (updateError) {
			return returnError(updateError)
		}

		return returnSuccess(res)
	}

	async updatePhone(data: UpdatePhoneOptions) {
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

		const [updateError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/update-phone`,
			data,
			header: {
				Authorization: access_token,
				'x-authing-userpool-id': this.options.userPoolId,
			}
		})

		if (updateError) {
			return returnError(updateError)
		}

		return returnSuccess(res)
	}

	// 注销账号
	async deleteAccountRequest(data: DeleteAccountRequestOptions) {
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

		const [deleteError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/verify-delete-account-request`,
			data,
			header: {
				Authorization: access_token,
				'x-authing-userpool-id': this.options.userPoolId,
			}
		})

		if (deleteError) {
			return returnError(deleteError)
		}

		return returnSuccess(res)
	}

	async deleteAccount(data: DeleteAccountOptions) {
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

		const [deleteError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/delete-account`,
			data,
			header: {
				Authorization: access_token,
				'x-authing-userpool-id': this.options.userPoolId,
			}
		})

		if (deleteError) {
			return returnError(deleteError)
		}

		return returnSuccess(res)
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

	async decryptData(data: DecryptDataOptions) {
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

		const [decryptError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/decrypt-wechat-miniprogram-data`,
			data,
			header: {
				Authorization: access_token
			}
		})

		if (decryptError) {
			return returnError(decryptError)
		}

		return returnSuccess(res)
	}

	async getAccessToken (data: GetAccessTokenOptions) {
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

		const [getError, res] = await request({
			method: 'POST',
			url: `${this.options.host}/api/v3/get-wechat-access-token`,
			data,
			header: {
				Authorization: access_token
			}
		})

		if (getError) {
			return returnError(getError)
		}

		return returnSuccess(res)
	}

}
