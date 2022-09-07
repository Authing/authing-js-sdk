# @authing/miniapp-uniapp

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
	import { Authing } from '@authing/miniapp-uniapp'
	import { encryptFunction } from '@authing/miniapp-jsencrypt'

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
				
				const res = await authing.loginByCode({
					connection: 'wechat_mini_program_code',
					extIdpConnidentifier: 'authing-zhaoyiming-miniapp',
					wechatMiniProgramCodePayload: {
						encryptedData,
						iv
					}
				})

				console.log('authing.loginByCode res: ', res)
			},

			async loginByPhone () {
				const { encryptedData, iv } = await Taro.getUserProfile({
					desc: 'getUserProfile'
				})
				
				const res = await authing.loginByPhone({
					connection: 'wechat_mini_program_phone',
					extIdpConnidentifier: 'authing-zhaoyiming-miniapp',
					wechatMiniProgramPhonePayload: {
						encryptedData,
						iv
					}
				})

				console.log('authing.loginByPhone res: ', res)
			},

			/**
			* 需要在真机上测试，微信开发者工具不会返回 code
			* @param {*} e 
			*/
			async getPhone (e) {
				const { code } = e.detail

				const res = await authing.getPhone({
					extIdpConnidentifier: 'authing-zhaoyiming-miniapp',
					code
				})

				console.log('authing.getPhone res: ', res)
			},

			async loginByPassword () {
				const res = await authing.loginByPassword({
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

				console.log('authing.loginByPassword res: ', res)
			},

			async sendSms () {
				// channel = CHANNEL_LOGIN，send code for login
				const res = await authing.sendSms({
					phoneNumber: '13100000000',
					phoneCountryCode: '+86',
					channel: 'CHANNEL_LOGIN'
				})

				console.log('authing.sendSms res: ', res)
			},

			async loginByPassCode () {
				const res = await authing.loginByPassCode({
					connection: 'PASSCODE',
					passCodePayload: {
						// send phone code
						passCode: '9973',
						phone: '13100000000',
						phoneCountryCode: '+86'
					}
				})

				console.log('authing.loginByPassCode: ', res)
			},

			async refreshToken () {
				const res = await authing.refreshToken()
				console.log('authing.refreshToken res: ', res)
			},

			async updatePassword () {
				const res = await authing.updatePassword({
					newPassword: '123',
					oldPassword: '123',
					// none and rsa
					passwordEncryptType: 'none'
				})

				console.log('authing.updatePassword res: ', res)
			},

			async getUserInfo () {
				const res = await authing.getUserInfo()
				console.log('authing.getUserInfo res: ', res)
			},

			async updateAvatar () {
				const res = await authing.updateAvatar()
				console.log('authing.updateAvatar res: ', JSON.parse(res.data))
			},

			async updateUserInfo () {
				const res = await authing.updateUserInfo({
					address: 'Hello world'
				})

				console.log('authing.updateUserInfo res: ', res)
			}
		}
	}
</script>
```