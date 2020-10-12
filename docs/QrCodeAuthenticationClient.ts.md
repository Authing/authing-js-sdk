[[toc]]


## undefined

undefined

undefined().undefined()

> 生成二维码


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 检查二维码状态


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 开始轮询二维码状态


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 间隔时间，单位为毫秒，默认为 800 毫秒


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 开始轮询的事件回调函数


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> setInterval 返回的计时器，可以用 clearInterval 取消此计时器


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 获取到二维码最新状态事件回调函数


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 用户首次扫码事件回调函数。此时用户还没有授权，回调的用户信息中通仅包含昵称和头像，用作展示目的


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 用户同意授权事件回调函数。该函数只会回调一次，之后轮询结束。参数 data 是一个字典，包含两个字段：ticket 和 userInfo。
出于安全性考虑，默认情况下，userInfo 只会包含昵称（nickname）和头像（photo）两个字段，开发者也可以在后台配置使其返回完整用户信息，
详情见 https://docs.authing.co/scan-qrcode/app-qrcode/customize.html。
ticket 可以用来换取完整的用户信息，相关接口见 https://docs.authing.co/scan-qrcode/app-qrcode/full-api-list.html。


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 用户取消授权事件回调函数。该事件只会回调一次，之后轮询结束。


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 获取二维码状态失败事件回调函数。常见原因为网络失败等，每次查询失败时都会回调。回调参数 data 示例如 {"code": 2241,"message": "二维码不存在","data": null}。完整错误代码请见 https://docs.authing.co/advanced/error-code.html。


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 二维码失效时被回调，只回调一次，之后轮询结束。


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 二维码图片大小，默认为 240 * 240


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> DOM 容器大小，默认为 300 * 300


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 间隔时间，单位为毫秒，默认为 800 毫秒


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 开始轮询的事件回调函数


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> setInterval 返回的计时器，可以用 clearInterval 取消此计时器


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 获取到二维码最新状态事件回调函数


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 用户首次扫码事件回调函数。此时用户还没有授权，回调的用户信息中通仅包含昵称和头像，用作展示目的


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 用户同意授权事件回调函数。该函数只会回调一次，之后轮询结束。参数 data 是一个字典，包含两个字段：ticket 和 userInfo。
出于安全性考虑，默认情况下，userInfo 只会包含昵称（nickname）和头像（photo）两个字段，开发者也可以在后台配置使其返回完整用户信息，
详情见 https://docs.authing.co/scan-qrcode/app-qrcode/customize.html。
ticket 可以用来换取完整的用户信息，相关接口见 https://docs.authing.co/scan-qrcode/app-qrcode/full-api-list.html。


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 用户取消授权事件回调函数。该事件只会回调一次，之后轮询结束。


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 获取二维码状态失败事件回调函数。常见原因为网络失败等，每次查询失败时都会回调。回调参数 data 示例如 {"code": 2241,"message": "二维码不存在","data": null}。完整错误代码请见 https://docs.authing.co/advanced/error-code.html。


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 二维码失效时被回调，只回调一次，之后轮询结束。


#### Arguments



#### Returns



#### Examples


      

## undefined

undefined

undefined().undefined()

> 提示文字


#### Arguments



#### Returns



#### Examples


      