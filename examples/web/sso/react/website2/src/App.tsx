import React, { useEffect, useMemo, useState } from 'react';
import { Authing } from '@authing/web';
import type { LoginState, IUserInfo, NormalError } from '@authing/web/dist/typings/src/global';

function App() {
  const authing = useMemo(() => {
    return new Authing({
      // 控制台 -> 应用 -> 单点登录 SSO -> 配置 -> 应用面板地址，如：https://my-awesome-sso.authing.cn
      domain: 'AUTHING_DOMAIN_URL',

      // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 端点信息 -> APP ID
      appId: 'AUTHING_APP_ID',

      // 控制台 -> 自建应用 -> 点击进入相应的应用 -> 认证配置 -> 登录回调 URL
      redirectUri: 'YOUR_REDIRECT_URL',

      // 控制台 -> 设置 -> 基础设置 -> 基础信息 -> 用户池 ID
      userPoolId: 'AUTHING_USER_POOL_ID'
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();
  const [userInfo, setUserInfo] = useState<IUserInfo | NormalError>();

  const getUserInfo = async () => {
    const userInfo = await authing.getUserInfo()
    setUserInfo(userInfo)
  }

  useEffect(() => {
    if (authing.isRedirectCallback()) {
      console.log('redirect');
      authing.handleRedirectCallback().then((res) => {
        // setLoginState(res);
        window.location.replace('/?a=1');
      });
    } else {

      try {
        const a = +window.location.search.split('?')[1].split('=')[1]
        if (a === 1) {
          getUserInfo()
          return
        }
        
        console.log('normal');
        authing.getLoginStateByRedirect()
      } catch (e) {
        console.log('normal');
        authing.getLoginStateByRedirect()
      }
    }
  }, []);

  const logout = () => {
    authing.logoutWithRedirect()
  }

  return (
    <div className="App">
      <h2>Website 2</h2>
      <div>
        <p>
          Access Token: <br />
          {loginState && (
            <textarea
              cols={100}
              rows={10}
              readOnly
              value={JSON.stringify(loginState?.accessToken, null, 2)}
            ></textarea>
          )}
        </p>
        <p>
          Access Token Info:<br />
          {loginState && (
            <textarea
              cols={100}
              rows={15}
              readOnly
              value={JSON.stringify(loginState?.parsedAccessToken, null, 2)}
            ></textarea>
          )}
        </p>
        <p>
          Expire At: <code>{loginState?.expireAt}</code>
        </p>
        <button onClick={() => getUserInfo()}>Get User Info</button>
        <button onClick={() => logout()}>Logout</button>
        <p>
          User Info: <br />
          {userInfo && (
            <textarea
              cols={100}
              rows={15}
              readOnly
              value={JSON.stringify(userInfo, null, 2)}
            ></textarea>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;
