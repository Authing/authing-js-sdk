<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
			<button @click="loginByCode">loginByCode</button>
			<button open-type="getPhoneNumber" @getphonenumber="loginByPhone">loginByPhone</button>
			<button open-type="getPhoneNumber" @getphonenumber="getPhone">getPhone</button>
			<button @click="loginByPassword">loginByPassword</button>
			<button @click="updatePassword">updatePassword</button>

			<!-- 发送手机短信验证码 -->
			<button @click="sendSms">sendSms</button>
			<button @click="bindPhone">bindPhone</button>
			<button @click="updatePhone">updatePhone</button>
			<!-- 使用手机短信验证码登录 -->
			<button @click="loginByPassCode">loginByPassCode</button>
      <!-- 发送邮箱验证码 -->
			<button @click="sendEmailCode">sendEmailCode</button>
			<button @click="bindEmail">bindEmail</button>
			<button @click="updateEmail">updateEmail</button>
			<button @click="deleteAccount">deleteAccount</button>
      <button @click="decryptData">decryptData</button>
			<button @click="getUserInfo">getUserInfo</button>
			<button @click="updateAvatar">updateAvatar</button>
			<button @click="updateUserInfo">updateUserInfo</button>
			<button @click="getLoginState">getLoginState</button>
      <button @click="refreshToken">refreshToken</button>
			<button @click="getAccessToken">getAccessToken</button>
			<button @click="logout">logout</button>

        <!-- 新增的 -->
      <button @click="getAccessTokenInfo">getAccessTokenInfo</button>
      <button @click="saveLoginState">saveLoginState</button>
			<button @click="bindWxByCode">bindWxByCode</button>
			<button @click="bindPlatformByCode">bindPlatformByCode</button>

		</view>
	</view>
</template>

<script>
	// import { Authing } from '@authing/miniapp-uniapp'

	import { Authing } from '/Users/mac/Desktop/www/authing-js-sdk/packages/miniapp-uniapp/dist/bundle-uniapp'
	import { encryptFunction } from '@authing/miniapp-jsencrypt'
  const AUTHING_EXT_IDP_CONN_IDENTIFIER = "AUTHING_EXT_IDP_CONN_IDENTIFIER"
  const APP_SECRET = 'APP_SECRET';
  const APP_ID = "APP_ID";
	const authing = new Authing({
    appId: "appId",
    host: 'host',
    userPoolId: 'userPoolId',
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
		/**
		 * 需要在真机上测试，微信开发者工具不会返回 code
		 * @param {*} e
		 */
     async loginByPhone(e) {
			const { code, iv, encryptedData } = e.detail;
			console.log('e: ', e)
			const res = await authing.loginByPhone({
				extIdpConnidentifier: AUTHING_EXT_IDP_CONN_IDENTIFIER,
        // 之前的暂时保留 - 后期会停用
				// wechatMiniProgramCodeAndPhonePayload: {
				// 	wxPhoneInfo: {
				// 		code
				// 	}
				// },
				// 通用参数
				miniProgramCodeAndPhonePayload: {
					phoneParams: {
						encryptedData,
						iv,
					},
					wxPhoneInfo: {
						code
					}
				},
				options: {
					scope: 'openid profile offline_access'
				}
			})
			console.log('authing.loginByPhone res: ', res)
		},

			async loginByCode () {
				const res = await authing.loginByCode({
					extIdpConnidentifier: AUTHING_EXT_IDP_CONN_IDENTIFIER,
					options: {
						scope: 'openid profile offline_access'
					}
				})

				console.log('authing.loginByCode res: ', res)
			},

			/**
			* 需要在真机上测试，微信开发者工具不会返回 code
			* @param {*} e
			*/
			async getPhone (e) {
				const { code } = e.detail

				const res = await authing.getPhone({
					extIdpConnidentifier: AUTHING_EXT_IDP_CONN_IDENTIFIER,
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
				const res = await authing.getUserInfo({
					withCustomData: true,
					withDepartmentIds: true,
					withIdentities: true
				})
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
			},

			async getLoginState () {
				const res = await authing.getLoginState()

				console.log('authing.getLoginState res: ', res)
			},

			async logout () {
				const res = await authing.logout()
    		console.log('authing.logout res: ', res)
			},

      async sendEmailCode() {
        const res = await authing.sendEmailCode({
          email: 'YOUR_EMAIL_ADDRESS',
          channel: 'CHANNEL_LOGIN'
        })
    		console.log('authing.sendEmailCode res: ', res)
      },

      async bindEmail () {
        const res = await authing.bindEmail({
          email: 'YOUR_EMAIL_ADDRESS',
          passCode: ''
        })
        console.log('authing.bindEmail res: ', res)
      },

      // 用于修改邮箱发送短信验证码
      async verifyOldEmail() {
        const res = await authing.sendEmailCode({
          email: 'YOUR_OLD_EMAIL_ADDRESS',
          channel: 'CHANNEL_UPDATE_EMAIL'
        })
        console.log('authing.sendEmailCode res: ', res)
      },

      async verifyNewEmail() {
        const res = await authing.sendEmailCode({
          email: 'YOUR_NEW_EMAIL_ADDRESS',
          channel: 'CHANNEL_UPDATE_EMAIL'
        })
        console.log('authing.sendEmailCode res: ', res)
      },

      async updateEmail () {
        // 前置调用 verifyOldEmail verifyNewEmail 获取新旧邮箱验证码
        // this.verifyOldEmail()
        // this.verifyNewEmail()
        const [_, res] = await authing.updateEmailRequest({
          verifyMethod: 'EMAIL_PASSCODE',
          emailPassCodePayload: {
            newEmail: 'YOUR_EMAIL_ADDRESS',
            newEmailPassCode: '',
            oldEmail: 'YOUR_EMAIL_ADDRESS',
            oldEmailPassCode: ''
          }
        })

        console.log('authing.updateEmailRequest res: ', res)

        const updateRes = await authing.updateEmail({
          updateEmailToken: res.updateEmailToken
        })
        console.log('authing.updateEmail res: ', updateRes)
      },

      async bindPhone () {
        // 前置调用 sendSms 方法，channel: CHANNEL_BIND_PHONE
        const res = await authing.bindPhone({
          phoneNumber: 'YOUR_PHONE_NUMBER',
          passCode: '',
        })
        console.log('authing.bindPhone res: ', res)
      },

      async saveLoginState () {
        const [, loginState] = await authing.getLoginState()
        const res = await authing.saveLoginState({
          access_token: '',
          expires_in: 0,
          expires_at: 0,
          id_token: '',
          scope: '',
          token_type: '',
          ...loginState
        })
        console.log('authing.saveLoginState res: ', res)
      },

      // TODO 修改手机号 channel
      async updatePhone () {
        const [_, res] = await authing.updatePhoneRequest({
          verifyMethod:'PHONE_PASSCODE',
          phonePassCodePayload: {
            newPhoneNumber: 'YOUR_PHONE_NUMBER',
            newPhonePassCode: ''
          }
        })
        console.log('authing.updatePhone res: ', res)

        if (res?.updatePhoneToken) {
          await authing.updatePhone({
            updatePhoneToken: res.updatePhoneToken
          })
        }

      },

      async deleteAccount () {
        /**
         * 邮箱 EMAIL_PASSCODE: 前置调用发送邮件方法 channel: CHANNEL_DELETE_ACCOUNT
         * 手机号 PHONE_PASSCODE: 前置调用发送短信方法 channel: CHANNEL_DELETE_ACCOUNT
         * 密码 PASSWORD: 传入 password 参数
         */
        const [_, res] = await authing.deleteAccountRequest({
          verifyMethod: 'EMAIL_PASSCODE',
          emailPassCodePayload: {
            email: 'YOUR_EMAIL_ADDRESS',
            passCode: ''
          }
        })
        console.log('authing.deleteAccount res: ', res)

        await authing.deleteAccount({
          deleteAccountToken: res.deleteAccountToken
        })

      },

      async decryptData () {

        uni.getUserProfile({
          desc:'test',
          success: async(result) => {
            const encryptedData = result.encryptedData;
            const iv = result.iv;
            const code = await authing.getLoginCode()
            const res = await authing.decryptData({
              extIdpConnidentifier: AUTHING_EXT_IDP_CONN_IDENTIFIER,
              encryptedData,
              iv,
              code,
            })

            console.log('authing.decryptData res: ', res)
          }
        })


      },

      async getAccessToken () {
        const res = await authing.getAccessToken({
          appId: APP_ID,
          appSecret: APP_SECRET
        })

        console.log('authing.getAccessToken res: ', res)
      },
      async getAccessTokenInfo () {
        const res = await authing.getAccessTokenInfo({
          appId: APP_ID,
          appSecret: APP_SECRET
        })

        console.log('authing.getAccessTokenInfo res: ', res)
      },
      async bindWxByCode () {

        const res = await authing.bindWxByCode({  extIdpConnidentifier: AUTHING_EXT_IDP_CONN_IDENTIFIER})
        console.log('authing.bindWxByCode res: ', res)
      },
      async bindPlatformByCode () {

        const res = await authing.bindPlatformByCode({  extIdpConnidentifier: AUTHING_EXT_IDP_CONN_IDENTIFIER})
        console.log('authing.bindPlatformByCode res: ', res)
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
