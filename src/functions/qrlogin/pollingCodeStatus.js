import { isFunction } from "../../utils/isFunction";

export default function startPollingQRCodeStatus(options) {
  if (!options) {
    throw Error('options is not provided.');
  }

  if (!(typeof options === 'object' && options !== null)) {
    throw Error('options must be an object.');
  }

  let { qrcodeId, scene, interval = 800, onPollingStart, onResult, onScanned, onExpired, onSuccess, onCancel, onError } = options

  if (!qrcodeId) {
    throw Error('qrcodeId is not provided.');
  }

  if (scene !== "APP_AUTH") {
    throw Error(`Unsupported scene ${scene}, the choices are APP_AUTH`)
  }

  if (interval) {
    if (typeof interval !== "number") {
      throw Error('interval must be a number.');
    }
  }

  if (onPollingStart) {
    if (!isFunction(onPollingStart)) {
      throw Error('onResult must be a function.');
    }
  }

  if (onResult) {
    if (!isFunction(onResult)) {
      throw Error('onResult must be a function.');
    }
  }

  if (onExpired) {
    if (!isFunction(onExpired)) {
      throw Error('onExpired must be a function.');
    }
  }

  if (onSuccess) {
    if (!isFunction(onSuccess)) {
      throw Error('onSuccess must be a function.');
    }
  }

  if (onCancel) {
    if (!isFunction(onCancel)) {
      throw Error('onCancel must be a function.');
    }
  }

  if (onError) {
    if (!isFunction(onError)) {
      throw Error('onError must be a function.');
    }
  }

  if (onScanned) {
    if (!isFunction(onScanned)) {
      throw Error('onScanned must be a function.');
    }
  }

  let intervalNum = 0
  let calledOnScanned = false
  let callOnPoolingStart = false

  intervalNum = setInterval(() => {
    // 开始轮询时回调 onPollingStart
    if (onPollingStart && !callOnPoolingStart) {
      onPollingStart(intervalNum)
      callOnPoolingStart = true
    }

    this.qrlogin.checkCodeStatus({
      qrcodeId,
      scene
    }).then(res => {

      // 业务状态码 code = 200 表示成功查询到二维码状态
      if (res.code === 200) {

        // 每次获取到数据都回调 onResult 函数
        if (onResult) {
          onResult(res)
        }

        const data = res.data;
        // 第一次查询到已扫码状态，回调 onScanned
        if (data.scanned) {
          if (onScanned && !calledOnScanned) {
            const { userInfo } = data
            onScanned(userInfo)
            calledOnScanned = true
          }
        }

        // 二维码过期，清除定时器
        if (data.expired) {
          clearInterval(intervalNum)
          if (onExpired) {
            onExpired()
          }
        }

        // 成功登录
        if (data.success) {
          clearInterval(intervalNum)
          const { ticket, userInfo } = data
          if (onSuccess) {
            onSuccess({
              ticket,
              userInfo
            })
          }
        }

        // 用户取消
        if (data.canceled) {
          clearInterval(intervalNum)
          if (onCancel) {
            onCancel()
          }
        }

      } else {
        // 业务状态码不为 200，可能是由于二维码不存在等原因
        if (onError) {
          onError(res)
        }
      }
    })
  }, interval)

  return intervalNum

}
