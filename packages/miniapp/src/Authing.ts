import {
	IStorageProvider,
	EncryptFunction,
	LoginState,
	EncryptType,
	AuthingOptions,
	RefreshTokenOptions,
	PlatformCodeLoginOptions,
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
	PlatformCodeAndPhoneLoginOptions,
	LoginByPhoneOptions,
	SendEmailCodeOptions,
	BindEmailOptions,
	UpdateEmailOptions,
	BindPhoneOptions,
	UpdatePhoneOptions,
	DeleteAccountOptions,
	DecryptDataOptions,
	UpdateEmailRequestOptions,
	UpdatePhoneRequestOptions,
	DeleteAccountRequestOptions,
	GerUserInfo,
	BindWxByCodeOptions,
	BindPlatformByCodeOptions,
	LoginByCodeConnection,
	LoginByPhoneCodeConnection,
	PlatformsMenu,
	GetDouyinPhoneOptions,
} from './types'

import { returnSuccess, returnError } from './helpers/return'

import {
	getLoginStateKey,
	getPlatformLoginCodeKey,
	request,
	getCurrentMiniProgram,
	StorageProvider
} from './helpers'

import { AuthingMove } from './AuthingMove'

export class Authing {
	private storage: IStorageProvider
	private readonly options: AuthingOptions
	private readonly encryptFunction?: EncryptFunction

	constructor(options: AuthingOptions) {
		this.options = {
			...options,
			host: options.host || 'https://core.authing.cn',
			platform: options.platform || getCurrentMiniProgram() || 'wx'
		}

		this.storage = new StorageProvider()

		this.encryptFunction = options.encryptFunction

		this.resetPlatformLoginCode()
	}

	async getLoginState(): Promise<SDKResponse<LoginState>> {

		try {
			const res = await this.storage.get(getLoginStateKey(this.options.appId))
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
			await this.storage.remove(getLoginStateKey(this.options.appId))
			return returnSuccess(true)
		} catch (e) {
			return returnError({
				message: JSON.stringify(e)
			})
		}
	}
	/**
   *
   * @param loginState 登录用户状态信息
   * @returns
   */
	async saveLoginState(loginState: LoginState): Promise<LoginState> {
		const _loginState: LoginState = {
			...loginState,
			expires_at: loginState.expires_in * 1000 + Date.now()
		}

		await this.storage.set(getLoginStateKey(this.options.appId), _loginState)

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

	private getDefaultLoginByCodeConnection(): LoginByCodeConnection {
		let code = LoginByCodeConnection.wechat_mini_program_code
		switch (this.options.platform) {
			case PlatformsMenu.tt:
				code = LoginByCodeConnection.douyin_mini_program_code
				break
		}
		return code
	}

	private getDefaultLoginByPhoneCodeConnection(): LoginByPhoneCodeConnection {
		let code = LoginByPhoneCodeConnection.wechat_mini_program_code_and_phone
		switch (this.options.platform) {
			case PlatformsMenu.tt:
				code = LoginByPhoneCodeConnection.douyin_mini_program_code_and_phone
				break
		}
		return code
	}

	private async getCachedPlatformLoginCode(): Promise<string> {
		try {
			const res = await this.storage.get(getPlatformLoginCodeKey(this.options.appId,this.options.platform))
			return res.data
		} catch (e) {
			return ''
		}
	}

	private async cachePlatformLoginCode(code: string): Promise<string> {
		try {

			await this.storage.set(getPlatformLoginCodeKey(this.options.appId,this.options.platform), code)
			return code
		} catch (e) {
			return ''
		}
	}

	private async resetPlatformLoginCode(): Promise<string> {
		const next = async () => {
			try {
				const platformLoginRes = await AuthingMove.login()
				await this.cachePlatformLoginCode(platformLoginRes.code)
				return true
			} catch (e) {
				return false
			}
		}

		try {
			/** checkSession 并不能对 login 的 code 有效性进行 check
       *  eg: Authing 实例化后会调用 login 返回 code 此时不进行操作 大概十分钟后调用接口 如 loginByCode 微信端返回 code 失效
       */
			// 	await AuthingMove.checkSession()
			// 	const code = await this.getCachedPlatformLoginCode()
			// 	if (!code) {
			// 		await next()
			// 	}
			// } catch (e) {
			this.storage.remove(getPlatformLoginCodeKey(this.options.appId,this.options.platform))
			await next()
		} finally {
			return await this.getCachedPlatformLoginCode()
		}
	}

	async getLoginCode() {
		return await this.resetPlatformLoginCode()
	}

	async loginByCode(
		data: LoginByCodeOptions
	): Promise<SDKResponse<LoginState>> {
		const [, loginState] = await this.getLoginState()

		if (loginState && loginState.expires_at > Date.now()) {
			return returnSuccess(loginState)
		}

		const {
			extIdpConnidentifier,
			connection,
			wechatMiniProgramCodePayload,
			douyinMiniProgramCodePayload,
			options
		} = data

		const code = await this.resetPlatformLoginCode()

		if (!code) {
			return returnError({
				message: 'get wx login code error'
			})
		}

		const _data: PlatformCodeLoginOptions = {
			connection: connection || this.getDefaultLoginByCodeConnection(),
			extIdpConnidentifier,
			wechatMiniProgramCodePayload: PlatformsMenu.wx == this.options.platform ? {
				encryptedData: wechatMiniProgramCodePayload?.encryptedData || '',
				iv: wechatMiniProgramCodePayload?.iv || '',
				code
			} : undefined,
			douyinMiniProgramCodePayload: PlatformsMenu.tt == this.options.platform ? {
				encryptedData: douyinMiniProgramCodePayload?.encryptedData || '',
				iv: douyinMiniProgramCodePayload?.iv || '',
				code
			} : undefined,
			options
		}

		switch (this.options.platform) {
			case PlatformsMenu.wx:
				_data.wechatMiniProgramCodePayload = {
					encryptedData: wechatMiniProgramCodePayload?.encryptedData || '',
					iv: wechatMiniProgramCodePayload?.iv || '',
					code
				}
				break
			case PlatformsMenu.tt:
				_data.douyinMiniProgramCodePayload = {
					encryptedData: douyinMiniProgramCodePayload?.encryptedData || '',
					iv: douyinMiniProgramCodePayload?.iv || '',
					code
				}
				break
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
					message:
            'encryptFunction is required, if passwordEncryptType is not "none"'
				})
			}

			const [error, publicKey] = await this.getPublicKey(
				data.options.passwordEncryptType
			)

			if (error) {
				return returnError(error)
			}

			if (typeof publicKey !== 'string') {
				return returnError({
					message: `publicKey of ${data.options.passwordEncryptType} is not a string, please contact the administrator`
				})
			}

			data.passwordPayload.password = this.encryptFunction(
				data.passwordPayload.password,
				publicKey
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

	async loginByPhone(
		data: LoginByPhoneOptions
	): Promise<SDKResponse<LoginState>> {
		const [, loginState] = await this.getLoginState()

		if (loginState && loginState.expires_at > Date.now()) {
			return returnSuccess(loginState)
		}
		const {
			extIdpConnidentifier,
			wechatMiniProgramCodeAndPhonePayload,
			miniProgramCodeAndPhonePayload,
			options
		} = data

		let _data: PlatformCodeAndPhoneLoginOptions = {
			extIdpConnidentifier,
			wechatMiniProgramCodeAndPhonePayload:undefined,
			douyinMiniProgramCodeAndPhonePayload:undefined,
			options,
			connection:this.getDefaultLoginByPhoneCodeConnection(),
		}

		switch (this.options.platform) {
			case PlatformsMenu.wx:

				const wxPhoneInfo = wechatMiniProgramCodeAndPhonePayload?.wxPhoneInfo || miniProgramCodeAndPhonePayload?.wxPhoneInfo
				if (!wxPhoneInfo || !wxPhoneInfo.code) {
					return returnError({
						message: 'wxPhoneInfo.code is required'
					})
				}

				const wxLoginCode = await this.resetPlatformLoginCode()

				if (!wxLoginCode) {
					return returnError({
						message: 'get wx login code error'
					})
				}

				 _data = {
					connection:this.getDefaultLoginByPhoneCodeConnection(),
					extIdpConnidentifier,
					wechatMiniProgramCodeAndPhonePayload: {
						wxPhoneInfo,
						wxLoginInfo: {
							encryptedData:
                wechatMiniProgramCodeAndPhonePayload?.wxLoginInfo?.encryptedData ||
                '',
							iv: wechatMiniProgramCodeAndPhonePayload?.wxLoginInfo?.iv || '',
							code: wxLoginCode
						}
					},
					options
				}
				break
			case PlatformsMenu.tt:

				const phoneParams = miniProgramCodeAndPhonePayload?.phoneParams

				if (!phoneParams) {
					return returnError({
						message: 'loginParams is required'
					})
				}


				const loginParamsCode = await this.resetPlatformLoginCode()

				if (!loginParamsCode) {
					return returnError({
						message: 'get tt login params error ,please use the miniProgramCodeAndPhonePayload'
					})
				}

				_data = {
					connection:this.getDefaultLoginByPhoneCodeConnection(),
					extIdpConnidentifier,
					douyinMiniProgramCodeAndPhonePayload: {
						loginParams:{
							encryptedData: '',
							iv: '',
							code: loginParamsCode
						},
						phoneParams: {
							encryptedData: phoneParams?.encryptedData || '' ,
							iv: phoneParams?.iv ||'',
						}
					},
					options
				}

				break
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

	async sendSms(
		data: SendSmsOptions
	): Promise<SDKResponse<SimpleResponseData>> {
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

	async sendEmailCode(
		data: SendEmailCodeOptions
	): Promise<SDKResponse<SimpleResponseData>> {
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
      | PlatformCodeLoginOptions
      | WxPhoneLoginOptions
      | PasswordLoginOptions
      | PassCodeLoginOptions
      | PlatformCodeAndPhoneLoginOptions,
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
					message:
            'encryptFunction is required, if passwordEncryptType is not "none"'
				})
			}

			const [publicKeyError, publicKey] = await this.getPublicKey(
				data.passwordEncryptType
			)

			if (publicKeyError) {
				return returnError(publicKeyError)
			}

			data.newPassword = this.encryptFunction(
				data.newPassword,
        publicKey as string
			)
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

	async getUserInfo(
		data: GerUserInfo = {
			withCustomData: false,
			withDepartmentIds: false,
			withIdentities: false
		}
	): Promise<SDKResponse<UserInfo>> {
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
			},
			data
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

		const { access_token, expires_at } = loginState as LoginState

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

	async bindWxByCode(data: BindWxByCodeOptions) {
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

		const code = await this.resetPlatformLoginCode()

		if (!code) {
			return returnError({
				message: 'get wx login code error'
			})
		}

		const _data: BindWxByCodeOptions = {
    	code,
			...data,
		}


		const [err, res] = await request({
			method: 'POST',
			url: `${this.options.host}/connections/social/wechat-miniprogram/bind`,
			data: _data,
			header: {
				'x-authing-userpool-id': this.options.userPoolId,
				Authorization: access_token
			}
		})

		if (err) {
			return returnError(err)
		}

		return returnSuccess(res)
	}

	async bindPlatformByCode(data: BindPlatformByCodeOptions) {
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

		const code = await this.resetPlatformLoginCode()

		if (!code) {
			return returnError({
				message: 'get wx login code error'
			})
		}

		const _data: BindPlatformByCodeOptions = {
    	code,
			...data,
		}


		const [err, res] = await request({
			method: 'POST',
			url: `${this.options.host}${this.getApiUrlMapping('bindPlatformByCode')}`,
			data: _data,
			header: {
				'x-authing-userpool-id': this.options.userPoolId,
				Authorization: access_token
			}
		})

		if (err) {
			return returnError(err)
		}

		return returnSuccess(res)
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
				'x-authing-userpool-id': this.options.userPoolId
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
				'x-authing-userpool-id': this.options.userPoolId
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
				'x-authing-userpool-id': this.options.userPoolId
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
				'x-authing-userpool-id': this.options.userPoolId
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
				'x-authing-userpool-id': this.options.userPoolId
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
				'x-authing-userpool-id': this.options.userPoolId
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
				'x-authing-userpool-id': this.options.userPoolId
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
				'x-authing-userpool-id': this.options.userPoolId
			}
		})

		if (deleteError) {
			return returnError(deleteError)
		}

		return returnSuccess(res)
	}

	async getPhone(
		data: GetPhoneOptions | GetDouyinPhoneOptions
	): Promise<SDKResponse<GetUserPhoneResponseData>> {


		let _data: GetPhoneOptions | GetDouyinPhoneOptions = {
			...data
		}

		switch (this.options.platform) {
			case PlatformsMenu.wx:
				if (!_data.code || !_data.extIdpConnidentifier) {
					return returnError({
						message: 'code or extIdpConnidentifier is required'
					})
				}
				break
			case PlatformsMenu.tt:
				if (!_data.extIdpConnidentifier) {
					return returnError({
						message: 'extIdpConnidentifier is required'
					})
				}

				const loginParamsCode = await this.resetPlatformLoginCode()
				_data = {
					..._data,
					code:loginParamsCode
				}

				break
		}


		const [getPhoneError, getPhoneRes] = await request({
			method: 'POST',
			url: `${this.options.host}${this.getApiUrlMapping('getPhone')}`,
			data:_data,
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
		const [decryptError, res] = await request({
			method: 'POST',
			url: `${this.options.host}${this.getApiUrlMapping('decryptData')}`,
			data,
			header: {
				'x-authing-userpool-id': this.options.userPoolId
			}
		})

		if (decryptError) {
			return returnError(decryptError)
		}

		return returnSuccess(res)
	}


	/**
   * 因为会有一下接口地址变更
   * 涉及到的 api  接口地址
   * */
	private getApiUrlMapping(route: string): string {

		let url = ''
		switch (route) {

			case 'getPhone':
				 url = '/api/v3/get-wechat-miniprogram-phone'
				switch (this.options.platform) {
					case PlatformsMenu.tt:
						url = '/api/v3/decrypt-douyin-miniprogram-phone'
						break
				}
				break
			case 'bindPlatformByCode':
				 url = '/connections/social/wechat-miniprogram/bind'
				switch (this.options.platform) {
					case PlatformsMenu.tt:
						url = '/connections/social/douyin-miniprogram/bind'
						break
				}
				break

			case 'decryptData':
				 url = '/api/v3/decrypt-wechat-miniprogram-data'
				switch (this.options.platform) {
					case PlatformsMenu.tt:
						url = '/api/v3/decrypt-douyin-miniprogram-data'
						break
				}
				break
			case 'getAccessTokenInfo':
				 url = '/api/v3/get-wechat-access-token-info'
				switch (this.options.platform) {
					case PlatformsMenu.tt:
						url = '/api/v3/get-douyin-access-token-info'
						break
				}
				break
		}


		return url

	}
}
