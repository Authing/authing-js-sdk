# @authing/miniprogram-uniapp

Authing JS SDK for uniapp

## Usage

``` html
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<button @click="loginByCode">loginByCode</button>
			<button @click="loginByPhone">loginByPhone</button>
			<button open-type="getPhoneNumber" @getphonenumber="getPhone">getPhone</button>
			<button @click="loginByPassword">loginByPassword</button>

			<!-- 发送手机短信验证码 -->
			<button @click="sendSms">sendSms</button>
			<!-- 使用手机短信验证码登录 -->
			<button @click="loginByPassCode">loginByPassCode</button>

			<button @click="refreshToken">refreshToken</button>
			<button @click="updatePassword">updatePassword</button>
			<button @click="getUserInfo">getUserInfo</button>
			<button @click="updateAvatar">updateAvatar</button>
			<button @click="updateUserInfo">updateUserInfo</button>
		</view>
	</view>
</template>

<script>
	import { Authing } from '@authing/miniprogram-uniapp'
	import { encryptFunction } from '@authing/miniprogram-jsencrypt'

	const authing = new Authing({
		appId: '630b549efa97ba795338e2cd',
		host: 'http://localhost:3000',
		userPoolId: '630b549d5a697473a2d7fa20',
		encryptFunction
	})

	console.log(authing)


	export default {
		data() {
			return {
				title: 'Hello'
			}
		},

		onLoad() {
			console.log(uni.chooseImage)
		},

		methods: {
			async loginByCode () {
				const { encryptedData, iv } = await Taro.getUserProfile({
					desc: 'getUserProfile'
				})

				const { code } = await Taro.login()
				
				const res = await authing.core.loginByCode({
					connection: 'wechat_mini_program_code',
					extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
					wechatMiniProgramCodePayload: {
						encryptedData,
						iv,
						code
					}
				})

				console.log('authing.core.loginByCode res: ', res)
			},

			async loginByPhone () {
				const { encryptedData, iv } = await Taro.getUserProfile({
					desc: 'getUserProfile'
				})

				const { code } = await Taro.login()
				
				const res = await authing.core.loginByPhone({
					connection: 'wechat_mini_program_phone',
					extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
					wechatMiniProgramPhonePayload: {
						encryptedData,
						iv,
						code
					}
				})

				console.log('authing.core.loginByPhone res: ', res)
			},

			/**
			* 需要在真机上测试，微信开发者工具不会返回 code
			* @param {*} e 
			*/
			async getPhone (e) {
				const { code } = e.detail

				const res = await authing.user.getPhone({
					extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
					code
				})

				console.log('authing.user.getPhone res: ', res)
			},

			async loginByPassword () {
				const res = await authing.core.loginByPassword({
					connection: 'PASSWORD',
					passwordPayload: {
						password: '123',
						username: 'test'
					},
					options: {
						// rsa and none
						passwordEncryptType: 'rsa',
						scope: 'offline_access openid profile'
					}
				})

				console.log('authing.core.loginByPassword res: ', res)
			},

			async sendSms () {
				// channel = CHANNEL_LOGIN，send code for login
				const res = await authing.core.sendSms({
					phoneNumber: '13100000000',
					phoneCountryCode: '+86',
					channel: 'CHANNEL_LOGIN'
				})

				console.log('authing.core.sendSms res: ', res)
			},

			async loginByPassCode () {
				const res = await authing.core.loginByPassCode({
					connection: 'PASSCODE',
					passCodePayload: {
						// send phone code
						passCode: '9973',
						phone: '13100000000',
						phoneCountryCode: '+86'
					}
				})

				console.log('authing.core.loginByPassCode: ', res)
			},

			async refreshToken () {
				const res = await authing.core.refreshToken()
				console.log('authing.core.refreshToken res: ', res)
			},

			async updatePassword () {
				const res = await authing.user.updatePassword({
					newPassword: '123',
					oldPassword: '123',
					// none and rsa
					passwordEncryptType: 'none'
				})

				console.log('authing.user.updatePassword res: ', res)
			},

			async getUserInfo () {
				const res = await authing.user.getUserInfo()
				console.log('authing.user.getUserInfo res: ', res)
			},

			async updateAvatar () {
				const res = await authing.user.updateAvatar()
				console.log('authing.user.updateAvatar res: ', JSON.parse(res.data))
			},

			async updateUserInfo () {
				const res = await authing.user.updateUserInfo({
					address: 'Hello world'
				})

				console.log('authing.user.updateUserInfo res: ', res)
			}
		}
	}
</script>
```