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
				const [, { encryptedData, iv }] = await uni.getUserProfile({
					desc: 'getUserProfile'
				})

				const [, { code }] = await uni.login()
				
				const res = await authing.loginByCode({
					connection: 'wechat_mini_program_code',
					extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
					wechatMiniProgramCodePayload: {
						encryptedData,
						iv,
						code
					},
					options: {
						scope: 'openid profile offline_access'
					}
				})

				console.log('authing.loginByCode res: ', res)
			},

			async loginByPhone () {
				const [, { encryptedData, iv }] = await uni.getUserProfile({
					desc: 'getUserProfile'
				})

				const [, { code }] = await uni.login()
				
				const res = await authing.loginByPhone({
					connection: 'wechat_mini_program_phone',
					extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
					wechatMiniProgramPhonePayload: {
						encryptedData,
						iv,
						code
					},
					options: {
						scope: 'openid profile offline_access'
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
					extIdpConnidentifier: 'authing-zhaoyiming-miniprogram',
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
						passwordEncryptType: 'rsa',
						scope: 'offline_access openid profile'
					}
				})

				console.log('authing.loginByPassword res: ', res)
			},

			async sendSms () {
				// 指定 channel 为 CHANNEL_LOGIN，发送登录所用的验证码
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
						// 手机收到的短信验证码
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
				console.log('authing.updateAvatar res: ', res)
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

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
